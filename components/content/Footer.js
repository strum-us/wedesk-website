import Link from '@/components/Link'

const Footer = () => (
  <footer className="bg-gray-900">
    <div className="mx-auto flex w-full flex-col place-content-between items-start justify-center space-y-6 px-10 py-12 lg:w-10/12 lg:py-16">
      <a href="#">
        <img className="w-2/3" src="/images/logo.svg" alt="" />
      </a>

      <div className="flex w-full flex-col place-content-between items-start justify-center space-y-4 lg:flex-row lg:space-y-0">
        <div className="flex flex-col space-y-1 lg:w-2/3 lg:space-y-2">
          <ul className="flex flex-row flex-wrap space-x-3 lg:flex-nowrap">
            <li className="flex flex-row items-center space-x-3 font-noto-kr text-sm text-gray-500">
              <a href="#">Strum Technology Corp</a>
              <samp className="h-3/5 w-0.5 bg-gray-400" />
            </li>
            <li className="flex flex-row items-center space-x-3 font-noto-kr text-sm text-gray-500">
              <a href="mailto:admin@wedesk.space">admin@wedesk.space</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col lg:w-1/3 lg:items-end lg:space-y-2">
          <ul className="flex flex-row space-x-3">
            <li className="flex flex-row items-center space-x-3 font-noto-kr text-sm text-gray-500">
              <Link href="#">Contact us</Link>
              <samp className="h-3/5 w-0.5 bg-gray-400" />
            </li>
            <li className="flex flex-row items-center space-x-3 font-noto-kr text-sm text-gray-500">
              <Link href="/terms">Terms and condition</Link>
              <samp className="h-3/5 w-0.5 bg-gray-400" />
            </li>
            <li className="flex flex-row items-center space-x-3 font-noto-kr text-sm text-gray-500">
              <Link href="/privacy">Privacy policy</Link>
            </li>
          </ul>
          <div>
            <p className="font-noto-kr text-sm text-gray-500">Copyright WeDesk 2022</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
