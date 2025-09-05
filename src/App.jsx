import React, { useState } from 'react';
import topImg from './imgs/top.png';
import img1 from './imgs/1.png';
import img2 from './imgs/2.png';
import img3 from './imgs/3.png';
import img4 from './imgs/4.png';
import favicon from '../favicon.ico';
import DownloadPage from './DownloadPage';
import PricingPage from './PricingPage';
import ChangelogPage from './ChangelogPage';

const Icon1 = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H44V24H4V4Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
    <path d="M4 34H44V44H4V34Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
    <path d="M18 18H30V30H18V18Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
  </svg>
);

const Icon2 = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6H42V42H6V6Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
    <path d="M24 16V32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 24H32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 20L28 28" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Icon3 = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 4H40V44H8V4Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
    <path d="M28 4L40 16" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 26H32" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <path d="M16 34H32" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <path d="M16 18H20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const Icon4 = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36 20V40H12V28" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 8V32H42V8H24Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 40H42" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Icon5 = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 4H38V44H10V4Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
    <path d="M24 36V36.02" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <path d="M18 12H30" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <path d="M16 20H32" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <path d="M16 28H32" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const Icon6 = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H44V44H4V4Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
    <path d="M16 28H32V32H16V28Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
    <path d="M18 18V18.02" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <path d="M30 18V18.02" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
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

const FeatureCard = ({ icon, title, description, isDarkMode }) => (
  <div className={`${isDarkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/50 border-gray-200/50'} rounded-xl p-8 backdrop-blur-sm relative overflow-hidden w-full md:w-96 h-56 hover:shadow-md hover:scale-[1.02] transition-all duration-200 ease-in-out cursor-pointer border`}>
    <div className="absolute inset-0 bg-transparent rounded-xl"></div>
    <div className="relative z-10">
      <div className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>{icon}</div>
      <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'} mb-2`}>{title}</h3>
      <p className={`${isDarkMode ? 'text-gray-400' : 'text-zinc-600'} text-base`}>{description}</p>
    </div>
  </div>
);

const FeatureBlock = ({ title, subtitle, items, image, imageAlt, reverse = false, isDarkMode }) => (
  <div className={`flex flex-col md:flex-row items-center gap-24 py-24 ${reverse ? 'md:flex-row-reverse' : ''}`}>
    <div className="w-full md:w-1/2">
      <div className="rounded-lg overflow-hidden hover:shadow-md hover:scale-[1.02] transition-all duration-200 ease-in-out cursor-pointer">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto max-h-[32rem] object-contain"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className={`w-full min-h-[32rem] ${isDarkMode ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center`} style={{display: 'none'}}>
          <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>{imageAlt}</span>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2">
      <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-zinc-900'} mb-4`}>{title}</h2>
      <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-zinc-500'} mb-8`}>{subtitle}</p>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="w-2 h-2 bg-sky-500 rounded-full mt-2.5 mr-6 flex-shrink-0"></div>
            <div>
              <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>{item.title}</h4>
              <p className={isDarkMode ? 'text-gray-400' : 'text-zinc-500'}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FaqItem = ({ question, answer, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 ease-in-out`}>
      <button 
        className="w-full flex justify-between items-center p-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>{question}</span>
        <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <ChevronDown />
        </div>
      </button>
      {isOpen && (
        <div className={`px-4 pb-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} pt-3 leading-relaxed`}>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function LandingPage() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const goToPricing = () => setCurrentPage('pricing');
  const goToDownload = () => setCurrentPage('download');
  const goToChangelog = () => setCurrentPage('changelog');
  const goToHome = () => setCurrentPage('home');
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const features = [
    { icon: <Icon1 />, title: '相册导入', description: '把照片一键变为上色底图，将美好瞬间转化为创作灵感。' },
    { icon: <Icon2 />, title: '本地处理', description: '所有处理在本地完成，不上传，不收集个人信息。' },
    { icon: <Icon3 />, title: '颜色与笔触', description: '丰富的调色盘与灵活的滑块调节，随手切换创作工具。' },
    { icon: <Icon4 />, title: '撤销/清空', description: '无限撤销与一键清空功能，让试错变得无负担。' },
    { icon: <Icon5 />, title: '编辑后即刻保存', description: '您的每一次编辑都会被自动保存，无需担心丢失任何创作进度。' },
    { icon: <Icon6 />, title: '高清画质', description: '支持高清画布和无损导出，确保您的作品细节清晰，色彩鲜艳。' },
  ];

  const featureBlocksData = [
    {
      title: '快速上手',
      subtitle: '简单直观的界面设计，让您快速开始创作。',
      items: [
        { title: '一键导入', description: '从相册选择照片，瞬间转化为可上色的底图。' },
        { title: '即开即画', description: '无需复杂设置，打开应用就能开始创作。' },
        { title: '直观操作', description: '简单的触摸和滑动操作，轻松上手。' },
      ],
      image: img1,
      imageAlt: '美绘APP快速上手界面',
    },
    {
      title: '创作工具',
      subtitle: '丰富的创作工具，满足您的各种绘画需求。',
      items: [
        { title: '颜色调色盘', description: '海量颜色选择，从基础色到渐变色应有尽有。' },
        { title: '笔触调节', description: '自由调节笔触粗细，从精细线条到粗犷笔刷。' },
        { title: '智能填充', description: '一键填充大面积色彩，快速完成创作。' },
      ],
      image: img2,
      imageAlt: '美绘APP创作工具界面',
      reverse: true,
    },
    {
      title: '作品管理',
      subtitle: '完善的保存和管理功能，保护您的创作成果。',
      items: [
        { title: '自动保存', description: '每一次操作都会自动保存，永不丢失创作进度。' },
        { title: '多种格式', description: '支持导出为图片、PDF等多种格式。' },
        { title: '云端同步', description: '跨设备同步您的作品，随时随地继续创作。' },
      ],
      image: img3,
      imageAlt: '美绘APP作品管理界面',
    },
    {
      title: '隐私保护',
      subtitle: '本地处理，确保您的创作内容完全私密。',
      items: [
        { title: '本地处理', description: '所有图像处理都在本地完成，不上传到服务器。' },
        { title: '无数据收集', description: '不收集您的个人信息和使用习惯数据。' },
        { title: '安全可靠', description: '您的创作内容只保存在您的设备上。' },
      ],
      image: img4,
      imageAlt: '美绘APP隐私保护界面',
      reverse: true,
    },
  ];

  const faqs = [
    {
      question: '美绘APP支持哪些图片格式？',
      answer: '美绘APP支持多种图片格式导入，包括 JPEG、PNG、GIF、BMP、TIFF 等常见格式。您可以从相册直接选择照片，或从其他应用分享图片到美绘。我们会自动处理各种格式，让您专注于创作。'
    },
    {
      question: '我的作品会被上传到服务器吗？',
      answer: '绝对不会！美绘APP的所有处理都在本地设备完成。我们重视您的隐私，您的所有作品和创作内容都只保存在您的设备上，不会上传到任何服务器或云端服务。您可以安心创作，无需担心隐私泄露。'
    },
    {
      question: '可以使用美绘APP创作商业作品吗？',
      answer: '当然可以！美绘APP创作的作品版权完全属于您。您可以将作品用于商业用途，如印刷、数字出版、艺术展览等。我们不限制作品的使用范围，只为您的创意保驾护航。'
    },
    {
      question: '美绘APP支持哪些设备？',
      answer: '美绘APP支持 iOS 和 Android 设备，包括 iPhone、iPad、Android 手机和平板电脑。我们针对不同设备屏幕进行了优化，确保在各种设备上都能获得最佳的创作体验。'
    },
    {
      question: '我可以导出多大的画布？',
      answer: '美绘APP支持高清画布导出，最大支持 4K 分辨率（3840x2160）。您可以根据需要选择不同的导出分辨率，从手机屏幕尺寸到大幅印刷画作都能满足。导出格式支持 PNG、JPEG 和 PDF。'
    },
    {
      question: '如何恢复意外删除的作品？',
      answer: '美绘APP具有强大的自动保存功能，每一次操作都会实时保存到本地存储。如果意外删除了作品，您可以通过设备的文件管理器找到美绘APP的备份文件夹进行恢复。我们建议定期备份重要的作品到其他位置。'
    },
  ];

  // 页面切换逻辑
  if (currentPage === 'download') {
    return <DownloadPage onBackHome={goToHome} onGoToChangelog={goToChangelog} onGoToPricing={goToPricing} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />;
  }

  if (currentPage === 'pricing') {
    return <PricingPage onBackHome={goToHome} onGoToDownload={goToDownload} onGoToChangelog={goToChangelog} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />;
  }

  if (currentPage === 'changelog') {
    return <ChangelogPage onBackHome={goToHome} onGoToDownload={goToDownload} onGoToPricing={goToPricing} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />;
  }

  return (
    <div className={isDarkMode ? 'dark bg-gray-900 text-white min-h-screen' : 'bg-white text-gray-900 min-h-screen'}>
      <header className="fixed top-2 left-1/2 -translate-x-1/2 w-full max-w-6xl z-50 px-4">
        <div className={`${isDarkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-lg rounded-xl shadow-sm flex items-center justify-between p-2 border`}>
          <a href="#" className="flex items-center gap-2">
            <img src={favicon} alt="美绘" className="w-10 h-10 rounded-md" />
            <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>美绘</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <a href="#features" className={`text-base font-semibold ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} uppercase transition-colors`}>功能</a>
            <button onClick={() => setCurrentPage('download')} className={`text-base font-semibold ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} uppercase transition-colors`}>下载</button>
            <button onClick={goToPricing} className={`text-base font-semibold ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} uppercase transition-colors`}>定价</button>
            <button onClick={goToChangelog} className={`text-base font-semibold ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} uppercase transition-colors`}>更新日志</button>
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

      <main>
        <section className="pt-32 pb-16 text-center px-4">
          <h1 className={`text-6xl font-extrabold mb-6 ${isDarkMode ? 'bg-gradient-to-b from-white to-gray-300 text-transparent bg-clip-text' : 'bg-gradient-to-b from-zinc-900 to-zinc-600 text-transparent bg-clip-text'}`}>美绘APP</h1>
          <p className={`text-2xl ${isDarkMode ? 'text-gray-400' : 'text-zinc-500'} max-w-3xl mx-auto mb-8`}>一款极简涂色/填色应用，打开就能画。导入照片做底图，选择颜色与笔触粗细，指尖上色，支持撤销与清空。</p>
          <button onClick={() => setCurrentPage('download')} className={`${isDarkMode ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-800'} font-medium px-8 py-3 rounded-md hover:shadow-md hover:scale-[1.02] transition-all duration-200 ease-in-out cursor-pointer`}>立即下载</button>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden hover:shadow-md hover:scale-[1.02] transition-all duration-200 ease-in-out cursor-pointer">
              <img
                src={topImg}
                alt="美绘APP界面"
                className="w-full h-auto max-h-[700px] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="px-4">
          <div className="max-w-6xl mx-auto">
            {featureBlocksData.map((block, index) => (
              <FeatureBlock key={index} {...block} isDarkMode={isDarkMode} />
            ))}
          </div>
        </section>

        <section id="features" className={`py-24 px-4 text-center ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-zinc-900'} mb-4`}>特色功能</h2>
            <p className={`text-sm font-semibold ${isDarkMode ? 'text-gray-400' : 'text-zinc-800/80'} mb-16`}>探索美绘APP的强大功能，让创作变得简单而有趣。</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} isDarkMode={isDarkMode} />
              ))}
            </div>
          </div>
        </section>

        <section className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} py-24 px-4`}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>关于美绘APP的常见问题</h2>
            <p className={`text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-black'} mb-8`}>查找关于使用美绘APP的常见问题的答案。</p>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FaqItem key={index} question={faq.question} answer={faq.answer} isDarkMode={isDarkMode} />
              ))}
            </div>
          </div>
        </section>

        <section className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} py-24 px-4 relative`}>
            <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/468')] bg-cover bg-center opacity-20"></div>
            <div className="max-w-3xl mx-auto text-center relative">
                <h2 className={`text-5xl font-extrabold ${isDarkMode ? 'text-white' : 'text-black'} mb-6`}>迫不及待想使用美绘？</h2>
                <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-zinc-600'} opacity-90 mb-8`}>立即开始，让您的创作体验更加简单有趣</p>
                <button onClick={() => setCurrentPage('download')} className={`${isDarkMode ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-800'} font-medium px-8 py-3 rounded-md hover:shadow-md hover:scale-[1.02] transition-all duration-200 ease-in-out cursor-pointer`}>立即体验</button>
            </div>
        </section>
      </main>

      <footer className={`${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-t`}>
        <div className="max-w-7xl mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>美绘</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-zinc-500'}`}>美绘是一款极简涂色/填色应用，让您在指尖上创造艺术作品。</p>
            </div>
            <div>
              <h4 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>链接</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-zinc-500 hover:text-black'} transition-colors`}>Devkits</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-zinc-500 hover:text-black'} transition-colors`}>欢迎友链</a></li>
              </ul>
            </div>
            <div>
              <h4 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>支持</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-zinc-500 hover:text-black'} transition-colors`}>GitHub Issues</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-zinc-500 hover:text-black'} transition-colors`}>Email</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-zinc-500 hover:text-black'} transition-colors`}>Telegram 群组</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-zinc-500 hover:text-black'} transition-colors`}>QQ 群聊</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-zinc-500 hover:text-black'} transition-colors`}>微信群聊</a></li>
              </ul>
            </div>
      <div>
              <h4 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>服务</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-zinc-500 hover:text-black'} transition-colors`}>隐私政策</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-zinc-500 hover:text-black'} transition-colors`}>服务条款</a></li>
              </ul>
            </div>
          </div>
          <div className={`text-center text-sm ${isDarkMode ? 'text-gray-400 border-gray-700' : 'text-zinc-500 border-gray-200'} pt-8 border-t`}>
            © 2025 • 美绘 保留所有权利。
          </div>
      </div>
      </footer>
      </div>
  );
}
