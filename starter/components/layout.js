import Nav from "./nav"

const Layout = (pageProps) => {
  const { children, categories, seo } = pageProps

  return (
    <>
      <Nav categories={categories} />
      {children}
    </>
  )
}

export default Layout
