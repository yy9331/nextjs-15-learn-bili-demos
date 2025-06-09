'use client'
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-8">
      {/* 侧边栏 */}
      <aside className="w-64 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">博客分类</h2>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-600">技术</a></li>
          <li><a href="#" className="hover:text-blue-600">生活</a></li>
          <li><a href="#" className="hover:text-blue-600">随笔</a></li>
        </ul>
      </aside>
      
      {/* 主要内容区域 */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
} 