import Link from 'next/link';

const navConfig = [
  {label: '首页', value: '/'},
  {label: '资讯', value: '/info'},
  {label: '标签', value: '/tag'},
]

const Nav = () => {
    return <header className="bg-gray-800 text-white p-4">
    <section className="container mx-auto">
      <h1 className="text-2xl font-bold">我的博客</h1>
    </section>
    <section className="flex justify-center items-center space-x-6 mt-4">
      {
        navConfig?.map(nav => (
          <Link 
            key={nav?.label} 
            href={nav?.value}
            className="px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
          >
            {nav?.label}
          </Link>
        ))
      }
    </section>
  </header>
}

export default Nav;