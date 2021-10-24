import React from "react"
import Card from "./card"

const Articles = ({ category }) => {
  if (category.articles.length) {
    return category.slug === "featured" ? (
      <Featured articles={category.articles} />
    ) : (
      <General articles={category.articles} title={category.name} />
    )
  } else {
    return null
  }
}

const Featured = ({ articles }) => {
  const featuredArticle = articles[0]
  const popularArticles = articles.slice(1, articles.length)
  return (
    <div className="flex flex-col md:flex-row w-full mb-8">
      <div className="flex flex-col w-full md:w-2/3">
        <div className="font-sanssemibold text-xl text-grey-500 dark:text-grey-600 mb-4">
          {"Featured"}
        </div>
        <Card
          article={featuredArticle}
          key={`article__featured__${featuredArticle.slug}`}
        />
      </div>
      {popularArticles.length ? (
        <div className="w-1/3 flex flex-col ml-8">
          <div className="font-sanssemibold text-xl text-grey-500 dark:text-grey-600 mb-4">
            {"Popular"}
          </div>
          {popularArticles.map((article, i) => {
            return (
              <Card
                article={article}
                textOnly={true}
                key={`article__popular__${article.slug}`}
              />
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

const General = ({ articles, title }) => {
  const featuredArticles = articles.slice(0, 2)
  const otherArticles = articles.slice(2, articles.length)
  return (
    <div className="w-full py-8">
      <div className="flex flex-col py-8 items-center mx-auto">
        <div className="font-sansbold capitalize text-5xl text-black-300 dark:text-grey-600 mb-4">
          {title}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 mb-6">
        {featuredArticles.map((article, i) => {
          return (
            <Card
              article={article}
              key={`article__featured__${article.slug}`}
            />
          )
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-12">
        {otherArticles.map((article, i) => {
          return (
            <Card article={article} key={`article__other__${article.slug}`} />
          )
        })}
      </div>
    </div>
  )
}

export default Articles
