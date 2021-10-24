import React from "react"
import Link from "next/link"
import Image from "./image"

const Card = ({ article, textOnly = false }) => {
  return textOnly ? (
    <Link href={`/article/${article.slug}`}>
      <a className="w-full">
        <div className="group rounded-lg overflow-hidden transition">
          <div className="group w-full">
            <p
              id="title"
              className="text-black-200 dark:text-white font-sanssemibold text-2xl mb-1 group-hover:text-green-200"
            >
              {article.title}
            </p>
            <p id="title" className="text-black-100 font-sans text-base">
              {article.description}
            </p>
          </div>
        </div>
      </a>
    </Link>
  ) : (
    <Link href={`/article/${article.slug}`}>
      <a>
        <div className="group transform transition hover:-translate-y-1">
          <div className="rounded-lg overflow-hidden group-hover:shadow-md aspect-w-16 aspect-h-9">
            <Image image={article.image} />
          </div>
          <div className="group w-full px-1 pt-3">
            <p
              id="title"
              className="text-black-200 dark:text-grey-600 font-sanssemibold text-3xl mb-1 group-hover:text-green-200 group-hover:no-underline"
            >
              {article.title}
            </p>
            <p
              id="title"
              className="text-black-100 dark:text-grey-200 font-sans text-base group-hover:no-underline"
            >
              {article.description}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card
