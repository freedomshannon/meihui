import React from 'react';
import favicon from '../favicon.ico';

// --- SVG Icon Components ---

const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="black" strokeWidth="3"/>
    <path d="M24 24C29.5228 24 34 19.5228 34 14H14C14 19.5228 18.4772 24 24 24Z" fill="black"/>
  </svg>
);

const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="m12 2 0 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="m12 20 0 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="m4.93 4.93 1.41 1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="m17.66 17.66 1.41 1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="m2 12 2 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="m20 12 2 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="m6.34 17.66-1.41 1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="m19.07 4.93-1.41 1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- Reusable Pricing Card Component ---
const PricingCard = ({ plan, isFeatured = false, onGoToDownload, isDarkMode }) => (
  <div className={`p-8 rounded-2xl w-full max-w-sm flex flex-col ${isDarkMode ? 'bg-gray-800' : 'bg-white'} ${isFeatured ? `border-2 ${isDarkMode ? 'border-white' : 'border-black'}` : `border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`} hover:shadow-md hover:scale-[1.02] transition-all duration-200 ease-in-out cursor-pointer`}>
    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{plan.name}</h3>
    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-2 mb-6`}>{plan.description}</p>
    <p className={`text-5xl font-extrabold ${isDarkMode ? 'text-white' : 'text-black'} mb-8`}>
      <span className="text-2xl font-bold align-top mr-1">¥</span>
      {plan.price}
    </p>
    <ul className="space-y-4 flex-grow mb-6">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <div className={isDarkMode ? 'text-green-400' : 'text-green-600'}>
            <CheckIcon />
          </div>
          <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
        </li>
      ))}
    </ul>
    {plan.buttonText && (
      <button
        onClick={() => onGoToDownload?.()}
        className={`w-full py-3 rounded-lg font-semibold transition-colors mt-auto ${isFeatured ? (isDarkMode ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-800') : (isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-black hover:bg-gray-200')}`}
      >
        {plan.buttonText}
      </button>
    )}
  </div>
);

// --- Main Page Component ---
export default function PricingPage({ onBackHome, onGoToDownload, onGoToChangelog, isDarkMode, toggleDarkMode }) {
  const plans = {
    free: {
      name: '免费版',
      description: '完美的起步选择',
      price: '0',
      features: [
        '基础填色功能',
        '有限的调色盘',
        '基础笔刷工具',
        '支持撤销/清空',
        '标清画质导出',
        '有广告',
      ],
      buttonText: '立即开始',
    },
    pro: {
      name: '专业版',
      description: '一次付费，永久使用',
      price: '68',
      features: [
        '包含免费版全部功能',
        '相册导入做底图',
        '无限自定义调色盘',
        '高级笔刷与纹理',
        '高清画质无损导出',
        '多设备数据同步',
        '无广告的沉浸式体验',
        '优先技术支持',
      ],
      buttonText: '升级到专业版',
    },
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} min-h-screen font-sans`}>
      <header className="fixed top-2 left-1/2 -translate-x-1/2 w-full max-w-6xl z-50 px-4">
        <div className={`${isDarkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-lg rounded-xl shadow-sm flex items-center justify-between p-2 border`}>
          <a href="#" className="flex items-center gap-2">
            <img src={favicon} alt="美绘" className="w-10 h-10 rounded-md" />
            <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>美绘</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <button onClick={onBackHome} className={`text-base font-semibold ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} uppercase transition-colors`}>首页</button>
            <button onClick={onGoToDownload} className={`text-base font-semibold ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} uppercase transition-colors`}>下载</button>
            <a href="#" className={`text-base font-semibold ${isDarkMode ? 'text-white' : 'text-black'} uppercase`}>定价</a>
            <button onClick={onGoToChangelog} className={`text-base font-semibold ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} uppercase transition-colors`}>更新日志</button>
          </nav>
          <div className="flex items-center gap-4">
            <button className={`md:hidden p-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.125 9.375H16.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.125 5H16.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.125 13.75H16.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-md transition-colors ${isDarkMode ? 'text-yellow-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
              title={isDarkMode ? '切换到浅色模式' : '切换到深色模式'}
            >
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>

          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-4">
        <div className="text-center mb-16">
          <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-black'} mb-2`}>定价</p>
          <h1 className={`text-5xl font-extrabold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>简单透明的定价方案</h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>从免费版开始您的创作之旅，随时升级解锁全部高级功能。</p>
        </div>

        <div className="flex flex-wrap justify-center items-stretch gap-8">
          <PricingCard plan={plans.free} onGoToDownload={onGoToDownload} isDarkMode={isDarkMode} />
          <PricingCard plan={plans.pro} isFeatured={true} onGoToDownload={onGoToDownload} isDarkMode={isDarkMode} />
        </div>
      </main>
    </div>
  );
}
