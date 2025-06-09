'use client'

import { use } from 'react';

// 定义文章类型
type Post = {
  title: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  tags: string[];
};

// 定义文章数据源类型
type Posts = {
  [key: string]: Post;
};

// 文章数据源
const posts: Posts = {
  "nextjs-15-features": {
    title: "Next.js 15 新特性介绍",
    content: `
      <h2>1. 服务器组件（Server Components）</h2>
      <p>Next.js 15 默认使用服务器组件，这带来了更好的性能和更小的客户端 JavaScript 包。服务器组件允许我们在服务器上渲染组件，减少客户端的负担，提高应用的加载速度。</p>
      
      <h2>2. 改进的路由系统</h2>
      <p>新的 App Router 提供了更强大的路由功能，包括并行路由和拦截路由。这使得我们可以创建更复杂的路由结构，同时保持代码的清晰和可维护性。</p>
      
      <h2>3. 数据获取优化</h2>
      <p>新的数据获取方法让服务器端渲染更加简单和高效。我们可以直接在组件中获取数据，而不需要额外的数据获取层。</p>
      
      <h2>4. 性能提升</h2>
      <p>更好的图片优化、字体优化和代码分割功能。这些改进使得我们的应用加载更快，运行更流畅。</p>
    `,
    date: "2024-03-20",
    author: "张三",
    readTime: "5 分钟",
    category: "技术",
    tags: ["Next.js", "React", "Web开发"]
  },
  "react-server-components": {
    title: "React Server Components 深入解析",
    content: `
      <h2>1. 什么是 Server Components？</h2>
      <p>Server Components 是 React 的一个新特性，允许组件在服务器端渲染，减少客户端的 JavaScript 包大小。</p>
      
      <h2>2. 主要优势</h2>
      <p>Server Components 可以访问后端资源，减少客户端状态管理，提高首次加载性能。</p>
      
      <h2>3. 使用场景</h2>
      <p>适合用于数据获取、静态内容渲染、访问后端资源等场景。</p>
    `,
    date: "2024-03-21",
    author: "李四",
    readTime: "4 分钟",
    category: "技术",
    tags: ["React", "Server Components", "性能优化"]
  },
  "typescript-best-practices": {
    title: "TypeScript 最佳实践指南",
    content: `
      <h2>1. 类型定义</h2>
      <p>合理使用类型定义，避免使用 any，优先使用接口和类型别名。</p>
      
      <h2>2. 泛型使用</h2>
      <p>适当使用泛型来增加代码的复用性和类型安全性。</p>
      
      <h2>3. 错误处理</h2>
      <p>使用类型守卫和类型断言来确保类型安全。</p>
    `,
    date: "2024-03-22",
    author: "王五",
    readTime: "6 分钟",
    category: "技术",
    tags: ["TypeScript", "编程规范", "类型系统"]
  }
};

function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 使用 React.use() 解包 params
  const { slug } = use(params);
  
  // 根据 slug 获取文章内容
  const post = posts[slug];

  // 如果文章不存在，显示 404
  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">文章未找到</h1>
        <p className="text-gray-600">抱歉，您访问的文章不存在。</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 文章头部 */}
      <header className="mb-8">
        {/* 分类标签 */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
            {post.category}
          </span>
        </div>

        {/* 标题 */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>

        {/* 文章元信息 */}
        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {post.author}
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {post.date}
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {post.readTime}
          </div>
        </div>

        {/* 标签 */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* 文章内容 */}
      <article className="prose prose-lg max-w-none">
        <div 
          className="prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-blue-600 prose-pre:bg-gray-50"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* 文章底部 */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>评论</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span>分享</span>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              <span>收藏</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>点赞</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BlogPostPage;