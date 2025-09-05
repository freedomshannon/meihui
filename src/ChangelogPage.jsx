import React from 'react';
import favicon from '../favicon.ico';

// --- SVG Icon Components ---

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

// --- Reusable Changelog Section Component ---
const ChangelogSection = ({ title, icon, items, isDarkMode }) => (
  <div className="mt-8">
    <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'} flex items-center gap-2`}>
      <span>{icon}</span>
      {title}
    </h3>
    <ul className={`mt-4 list-disc list-inside space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

// --- Main Page Component ---
export default function ChangelogPage({ onBackHome, onGoToDownload, onGoToPricing, isDarkMode, toggleDarkMode }) {
  const latestChanges = {
    version: '1.0.2',
    date: '2025-09-05',
    features: {
      title: '新增',
      icon: '✨',
      items: [
        '增加作品删除功能，方便管理您的画廊。',
        '增加手动保存功能，确保您的创作随时保存。',
        '增加画笔粗细调节，提供更灵活的创作控制。',
        '增加多步撤回功能，让修改和试错更轻松。',
      ],
    },
    fixes: {
      title: '修复与优化',
      icon: '🚀',
      items: [
        '全面优化性能，大幅提高软件运行速度和响应流畅度。',
        '修复了导入图片后无法使用撤销功能的问题。',
      ],
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
            <button onClick={onGoToPricing} className={`text-base font-semibold ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} uppercase transition-colors`}>定价</button>
            <a href="#" className={`text-base font-semibold ${isDarkMode ? 'text-white' : 'text-black'} uppercase`}>更新日志</a>
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
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className={`text-5xl font-extrabold ${isDarkMode ? 'text-white' : 'text-black'}`}>更新日志</h1>
          </div>

          <div>
            <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{latestChanges.version}</h2>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-2`}>发布时间: {latestChanges.date}</p>

            <ChangelogSection {...latestChanges.features} isDarkMode={isDarkMode} />
            <ChangelogSection {...latestChanges.fixes} isDarkMode={isDarkMode} />
          </div>
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
