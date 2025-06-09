'use client'
export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="prose lg:prose-xl mx-auto">
      {/* 文章导航 */}
      <nav className="mb-8 p-4 bg-gray-50 rounded-lg">
        <div className="flex justify-between">
          <a href="#" className="text-blue-600 hover:underline">← 上一篇</a>
          <a href="#" className="text-blue-600 hover:underline">下一篇 →</a>
        </div>
      </nav>
      
      {/* 文章内容 */}
      {children}
      
      {/* 文章底部 */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-bold mb-2">相关文章</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-blue-600 hover:underline">相关文章 1</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">相关文章 2</a></li>
        </ul>
      </div>
    </article>
  );
} 