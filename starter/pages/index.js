import React from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Home = ({ categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col py-12 md:py-24 items-center mx-auto">
          <div className="font-sansbold text-5xl text-black-300 dark:text-white mb-4">
            {homepage.hero.title}
          </div>
          <div className="font-sans text-lg text-grey-400 dark:text-grey-200">
            {homepage.hero.description}
          </div>
        </div>
        <div className="divide-y divide-grey-100 dark:divide-black-100">
          {categories.find((category) => category.slug === "featured") ? (
            <Articles
              category={categories.find(
                (category) => category.slug === "featured"
              )}
            />
          ) : null}
          {categories.map((category) => {
            if (category.slug !== "featured" && category.articles.length) {
              return <Articles category={category} />
            }
          })}
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])

  return {
    props: { articles, categories, homepage },
  }
}

export default Home
