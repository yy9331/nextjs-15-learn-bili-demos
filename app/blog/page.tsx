export default function BlogPage() {
  // 模拟博客文章数据
  const posts = [
    {
      id: 1,
      title: "Next.js 15 新特性介绍",
      excerpt: "探索 Next.js 15 带来的激动人心的新功能...",
      date: "2024-03-20",
      slug: "nextjs-15-features"
    },
    {
      id: 2,
      title: "React Server Components 详解",
      excerpt: "深入了解 React Server Components 的工作原理...",
      date: "2024-03-19",
      slug: "react-server-components"
    },
    {
      id: 3,
      title: "TypeScript 最佳实践",
      excerpt: "学习 TypeScript 开发中的最佳实践和技巧...",
      date: "2024-03-18",
      slug: "typescript-best-practices"
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-8">博客文章</h1>
      
      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">
              <a href={`/blog/${post.slug}`} className="hover:text-blue-600">
                {post.title}
              </a>
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="text-sm text-gray-500">
              发布于 {post.date}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 