export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  // 模拟文章数据
  const post = {
    title: "Next.js 15 新特性介绍",
    content: `
      <h2>1. 服务器组件（Server Components）</h2>
      <p>Next.js 15 默认使用服务器组件，这带来了更好的性能和更小的客户端 JavaScript 包。</p>
      
      <h2>2. 改进的路由系统</h2>
      <p>新的 App Router 提供了更强大的路由功能，包括并行路由和拦截路由。</p>
      
      <h2>3. 数据获取优化</h2>
      <p>新的数据获取方法让服务器端渲染更加简单和高效。</p>
      
      <h2>4. 性能提升</h2>
      <p>更好的图片优化、字体优化和代码分割功能。</p>
    `,
    date: "2024-03-20",
    author: "张三",
    readTime: "5 分钟"
  };

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-600 space-x-4">
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      <div 
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
} 