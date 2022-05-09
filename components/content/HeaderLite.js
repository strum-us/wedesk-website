import Link from '@/components/Link'

const HeaderLite = () => (
  <header className="mb-5 lg:mb-14">
    <div className="flex h-20 w-full flex-row place-content-between items-center px-10 lg:px-40">
      <h1>
        <Link href="/">
          <img className="w-3/5" src="images/logo.svg" alt="logo image" />
        </Link>
      </h1>
      <nav className="invisible flex flex-row items-center justify-center space-x-5 text-base lg:visible" />
      <nav className="visible flex items-center justify-center lg:invisible lg:ml-auto lg:hidden">
        <div>=</div>
      </nav>
    </div>
  </header>
)

export default HeaderLite
