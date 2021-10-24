import React, { useContext } from "react"
import Link from "next/link"
import Image from "../components/image"
import { GlobalContext } from "../pages/_app"
import { FiSun, FiMoon } from "react-icons/fi"
import { useTheme } from "next-themes"

const Nav = () => {
  const { navLogo } = useContext(GlobalContext)
  const { theme, setTheme } = useTheme()

  const renderThemeToggle = () => {
    return (
      <span
        aria-label="Toggle Dark Mode"
        className="group hidden md:block cursor-pointer px-2 py-2 rounded-full"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <FiMoon size={24} className="text-white group-hover:text-green-200" />
        ) : (
          <FiSun
            size={24}
            className="text-grey-300 group-hover:text-green-200"
          />
        )}
      </span>
    )
  }

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between flex-wrap bg-white dark:bg-black-200 border-b border-grey-600 dark:border-black-300 py-3 px-3 md:px-32">
      <Link href="/" passHref={true}>
        <div className="flex items-center flex-shrink-0 text-white w-28 h-8 cursor-pointer">
          <Image
            image={navLogo}
            width={162}
            height={50}
            alt="Parcel Logo Lockup"
          />
        </div>
      </Link>
      <div className="flex lg:w-auto space-x-2 md:space-x-3 items-center">
        {renderThemeToggle()}
        <a
          href="https://discord.gg/7qUaAQf2Hs"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 rounded-md hover:shadow-none hover:text-green-200 hover:no-underline text-green-100 text-base md:text-base font-semibold hover:shadow-sm transition"
        >
          Join our chat
        </a>
        <a
          href="https://meetparcel.com/explorer"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 rounded-md bg-green-100 hover:bg-green-200 hover:shadow-none hover:text-white hover:no-underline text-white text-base md:text-base font-semibold hover:shadow-smdarkgreen transition"
        >
          Launch App
        </a>
      </div>
    </nav>
  )
}

export default Nav
