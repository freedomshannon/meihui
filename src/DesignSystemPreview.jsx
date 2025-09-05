import React from 'react';
import {
  Button,
  Input,
  Textarea,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  colors,
  spacing,
  typography,
  useIsMobile,
  useIsTablet,
  useIsDesktop
} from '../design-system';

const DesignSystemPreview = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();

  return (
    <div className="min-h-screen bg-white">
      {/* 头部区域 */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                Reeden 设计系统
              </h1>
              <p className="text-gray-600">
                基于Figma设计稿构建的现代化电子书阅读器设计系统
              </p>
            </div>
            <div className="text-sm text-gray-500">
              <p>响应式状态:</p>
              <p>{isMobile ? '📱 移动端' : isTablet ? '📟 平板' : '💻 桌面端'}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* 颜色系统展示 */}
        <section>
          <h2 className="text-3xl font-semibold text-slate-900 mb-6">🎨 颜色系统</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 品牌色 */}
            <Card>
              <CardHeader>
                <CardTitle>品牌色</CardTitle>
                <CardDescription>主要品牌色彩</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-12 h-12 rounded-md border"
                    style={{ backgroundColor: colors.brand.primary }}
                  />
                  <div>
                    <p className="font-medium">Primary</p>
                    <p className="text-sm text-text-secondary">{colors.brand.primary}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div
                    className="w-12 h-12 rounded-md border"
                    style={{ backgroundColor: colors.brand.secondary }}
                  />
                  <div>
                    <p className="font-medium">Secondary</p>
                    <p className="text-sm text-text-secondary">{colors.brand.secondary}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 文字颜色 */}
            <Card>
              <CardHeader>
                <CardTitle>文字颜色</CardTitle>
                <CardDescription>不同层级的文字色彩</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-12 h-12 rounded-md border"
                    style={{ backgroundColor: colors.text.primary }}
                  />
                  <div>
                    <p className="font-medium">Primary</p>
                    <p className="text-sm text-text-secondary">{colors.text.primary}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div
                    className="w-12 h-12 rounded-md border"
                    style={{ backgroundColor: colors.text.secondary }}
                  />
                  <div>
                    <p className="font-medium">Secondary</p>
                    <p className="text-sm text-text-secondary">{colors.text.secondary}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 状态颜色 */}
            <Card>
              <CardHeader>
                <CardTitle>状态颜色</CardTitle>
                <CardDescription>反馈状态色彩</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-12 h-12 rounded-md border"
                    style={{ backgroundColor: colors.status.success }}
                  />
                  <div>
                    <p className="font-medium">Success</p>
                    <p className="text-sm text-text-secondary">{colors.status.success}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div
                    className="w-12 h-12 rounded-md border"
                    style={{ backgroundColor: colors.status.error }}
                  />
                  <div>
                    <p className="font-medium">Error</p>
                    <p className="text-sm text-text-secondary">{colors.status.error}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 按钮组件展示 */}
        <section>
          <h2 className="text-3xl font-semibold text-slate-900 mb-6">🔘 按钮组件</h2>
          <Card>
            <CardHeader>
              <CardTitle>按钮变体</CardTitle>
              <CardDescription>不同样式和尺寸的按钮</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 变体展示 */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">变体 (Variants)</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>

              {/* 尺寸展示 */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">尺寸 (Sizes)</h3>
                <div className="flex items-center flex-wrap gap-4">
                  <Button variant="primary" size="xs">XS</Button>
                  <Button variant="primary" size="sm">SM</Button>
                  <Button variant="primary" size="md">MD</Button>
                  <Button variant="primary" size="lg">LG</Button>
                  <Button variant="primary" size="xl">XL</Button>
                </div>
              </div>

              {/* 状态展示 */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">状态 (States)</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">默认</Button>
                  <Button variant="primary" disabled>禁用</Button>
                  <Button variant="primary" className="animate-pulse">加载中</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 输入组件展示 */}
        <section>
          <h2 className="text-3xl font-semibold text-slate-900 mb-6">📝 输入组件</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>文本输入框</CardTitle>
                <CardDescription>基础输入框组件</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">用户名</label>
                  <Input placeholder="请输入用户名" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">邮箱</label>
                  <Input type="email" placeholder="请输入邮箱地址" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">密码</label>
                  <Input type="password" placeholder="请输入密码" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>文本域</CardTitle>
                <CardDescription>多行文本输入组件</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <label className="block text-sm font-medium mb-2">备注</label>
                  <Textarea placeholder="请输入备注信息" rows={4} />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 卡片组件展示 */}
        <section>
          <h2 className="text-3xl font-semibold text-slate-900 mb-6">📋 卡片组件</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>基础卡片</CardTitle>
                <CardDescription>默认样式卡片</CardDescription>
              </CardHeader>
              <CardContent>
                <p>这是卡片的内容区域，可以放置任何内容。</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">了解更多</Button>
              </CardFooter>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>阴影卡片</CardTitle>
                <CardDescription>带阴影效果的卡片</CardDescription>
              </CardHeader>
              <CardContent>
                <p>这个卡片有更强的视觉层次感。</p>
              </CardContent>
            </Card>

            <Card variant="outlined">
              <CardHeader>
                <CardTitle>轮廓卡片</CardTitle>
                <CardDescription>透明背景轮廓卡片</CardDescription>
              </CardHeader>
              <CardContent>
                <p>适用于需要在背景上突出显示的内容。</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 字体系统展示 */}
        <section>
          <h2 className="text-3xl font-semibold text-slate-900 mb-6">📖 字体系统</h2>
          <Card>
            <CardHeader>
              <CardTitle>文字样式</CardTitle>
              <CardDescription>不同大小和样式的文字展示</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">标题样式</h3>
                <div className="space-y-3">
                  <h1 className="text-5xl font-bold">H1 - 主要标题</h1>
                  <h2 className="text-3xl font-bold">H2 - 次要标题</h2>
                  <h3 className="text-xl font-semibold">H3 - 三级标题</h3>
                  <h4 className="text-lg font-semibold">H4 - 四级标题</h4>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">正文样式</h3>
                <div className="space-y-3">
                  <p className="text-base">这是标准正文字体大小 (16px)，用于大部分内容。</p>
                  <p className="text-sm">这是小号正文字体 (14px)，用于辅助信息。</p>
                  <p className="text-xs">这是超小号字体 (12px)，用于标签或备注。</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">字体样式</h3>
                <div className="space-y-3">
                  <p className="font-normal">普通字体权重</p>
                  <p className="font-medium">中等字体权重</p>
                  <p className="font-semibold">半粗字体权重</p>
                  <p className="font-bold">粗体字体权重</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 响应式演示 */}
        <section>
          <h2 className="text-3xl font-semibold text-slate-900 mb-6">📱 响应式演示</h2>
          <Card>
            <CardHeader>
              <CardTitle>响应式布局</CardTitle>
              <CardDescription>根据屏幕尺寸自动调整布局</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-background-secondary rounded-md text-center">
                  <p className="font-medium">项目 1</p>
                  <p className="text-sm text-text-secondary">响应式网格</p>
                </div>
                <div className="p-4 bg-background-secondary rounded-md text-center">
                  <p className="font-medium">项目 2</p>
                  <p className="text-sm text-text-secondary">自适应布局</p>
                </div>
                <div className="p-4 bg-background-secondary rounded-md text-center">
                  <p className="font-medium">项目 3</p>
                  <p className="text-sm text-text-secondary">灵活设计</p>
                </div>
                <div className="p-4 bg-background-secondary rounded-md text-center">
                  <p className="font-medium">项目 4</p>
                  <p className="text-sm text-text-secondary">现代化UI</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="border-t border-gray-200 bg-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 Reeden 设计系统. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DesignSystemPreview;
