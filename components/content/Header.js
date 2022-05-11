import Link from '@/components/Link'

const Header = () => (
  <header className="relative">
    <div className="invisible absolute flex h-20 w-full flex-row place-content-between items-center px-10 md:h-24 lg:visible lg:px-40">
      <h1>
        <Link href="#">
          <img className="w-3/5 sm:w-3/5" src="images/logo.svg" alt="logo image" />
        </Link>
      </h1>
      <nav className="flex flex-row items-center justify-center space-x-5 text-base ">
        <ul className="flex flex-row space-x-10 text-lg font-medium text-white">
          <li className="font-noto-kr">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="font-noto-kr">
            <Link href="mailto:admin@wedesk.space">Contact us</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className="visible absolute flex h-20 w-full flex-row place-content-between items-center px-10 md:h-24 lg:invisible lg:px-40">
      <h1>
        <Link href="#">
          <img className="w-2/5 sm:w-3/5" src="images/logo_w.svg" alt="logo image" />
        </Link>
      </h1>

      <nav className="flex items-center justify-center lg:ml-auto lg:hidden">
        <div>=</div>
      </nav>
    </div>
  </header>
)

export default Header
