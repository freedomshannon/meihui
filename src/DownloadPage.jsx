import React from 'react';
import favicon from '../favicon.ico';

// --- SVG Icon Components ---

const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19V5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V19L12 14L4 19Z" fill="black"/>
    <path d="M12 14V3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
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



const AppleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.483 14.001C17.483 15.935 18.61 17.33 20.25 17.86C20.185 18.01 19.963 18.585 19.438 19.375C18.721 20.445 17.911 21.516 16.75 21.516C15.589 21.516 15.219 20.836 13.919 20.836C12.619 20.836 12.249 21.516 11.124 21.516C9.963 21.516 9.043 20.38 8.263 19.25C7.022 17.445 6.032 14.835 6.522 12.6C6.977 10.521 8.573 9.45 10.043 9.45C11.133 9.45 12.123 10.13 12.743 10.13C13.363 10.13 14.594 9.23 15.994 9.415C16.683 9.48 18.203 9.765 19.223 11.385C19.158 11.42 17.483 12.425 17.483 14.001ZM14.543 7.5C15.128 6.745 15.498 5.74 15.373 4.75C14.453 4.845 13.428 5.455 12.843 6.21C12.353 6.87 11.893 7.875 12.018 8.865C13.038 8.83 13.958 8.255 14.543 7.5Z" />
  </svg>
);

// --- Reusable Download Card Component ---
const DownloadCard = ({ icon, title, description, buttons, isDarkMode }) => (
  <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-2xl p-8 w-full max-w-sm flex flex-col hover:shadow-md hover:scale-[1.02] transition-all duration-200 ease-in-out cursor-pointer`}>
    <div className="flex items-center gap-4 mb-4">
      <div className={isDarkMode ? 'text-gray-300' : 'text-gray-900'}>
        {icon}
      </div>
      <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{title}</h3>
    </div>
    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 flex-grow`}>{description}</p>
    <div className="flex flex-col gap-4">
      {buttons.map((button, index) => (
        <a
          key={index}
          href={button.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${isDarkMode ? 'bg-white text-black hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-700'} text-center font-semibold py-3 px-6 rounded-lg transition-colors`}
        >
          {button.text}
        </a>
      ))}
    </div>
  </div>
);

// --- Main Page Component ---
export default function DownloadPage({ onBackHome, onGoToChangelog, onGoToPricing, isDarkMode, toggleDarkMode }) {
  const downloadOptions = [
    {
      icon: <AppleIcon />,
      title: 'macOS',
      description: 'macOS 版本，支持 macOS 11.0 及以上的 Mac 电脑，提供完整的桌面涂色体验',
      buttons: [{ text: '下载 macOS .dmg', href: 'https://apps.apple.com/us/app/%E7%BE%8E%E7%BB%98/id6749874255' }],
    },
    {
      icon: <AppleIcon />,
      title: 'iOS',
      description: 'iOS 版本，支持 iOS 14.0 及以上的 iPhone 和 iPad 设备，享受原生的涂色体验',
      buttons: [{ text: 'App Store 下载', href: 'https://apps.apple.com/us/app/%E7%BE%8E%E7%BB%98/id6749874255' }],
    },
  ];

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
            <a href="#" className={`text-base font-semibold ${isDarkMode ? 'text-white' : 'text-black'} uppercase`}>下载</a>
            <button onClick={onGoToPricing} className={`text-base font-semibold ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} uppercase transition-colors`}>定价</button>
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
          <h1 className={`text-5xl font-extrabold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>下载美绘APP</h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>专为 Apple 设备打造的极简涂色应用</p>
        </div>

        <div className="flex flex-wrap justify-center items-stretch gap-8">
          {downloadOptions.map((option, index) => (
            <DownloadCard key={index} {...option} isDarkMode={isDarkMode} />
          ))}
        </div>
      </main>

      <footer className={`${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-t`}>
        <div className="max-w-7xl mx-auto py-12 px-4">
          <div className="text-center text-sm space-y-2">
            <div>© 2025 • 美绘 保留所有权利。</div>
            <div>
              <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-zinc-500 hover:text-black'} transition-colors`}>
                冀ICP备18023233号-3
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
