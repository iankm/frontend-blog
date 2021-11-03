import ReactMarkdown from "react-markdown"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { fetchAPI } from "../../lib/api"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import { FiLink, FiChevronRight } from "react-icons/fi"
import CopyToClipboard from "react-copy-to-clipboard"
import Image from "../../components/image"
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share"

const Article = ({ article, categories }) => {
  const breadcrumbs = [
    { name: "Learn", slug: "/" },
    { name: `${article.title}`, slug: `/article/${article.slug}` },
  ]

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  }

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div className="w-11/12 mx-auto pb-16">
        <div className="flex flex-row w-full pt-8">
          {breadcrumbs.map((crumb, i) => {
            return (
              <div key={`crumb__key__${i}`} className="flex flex-row">
                <a
                  className="capitalize font-sans text-xl text-grey-300 dark:text-grey-200 hover:text-green-200 dark:hover:text-green-200 hover:no-underline"
                  href={crumb.slug}
                >
                  {crumb.name}
                </a>
                {i < breadcrumbs.length - 1 ? (
                  <FiChevronRight className="text-grey-300 dark:text-grey-200 self-end text-2xl" />
                ) : null}
              </div>
            )
          })}
        </div>
        <div className="flex flex-col-reverse md:flex-row w-full">
          <div className="w-full md:w-8/12">
            <div className="mb-8">
              <div className="pt-2 pb-8">
                <div className="font-sansbold text-4xl md:text-6xl text-black-300 dark:text-white pb-2 md:pb-4">
                  {article.title}
                </div>
                {article.description && (
                  <div className="font-sans text-base md:text-lg text-grey-400 dark:text-grey-200">
                    {article.description}
                  </div>
                )}
              </div>
              <div className="object-contain overflow-hidden rounded-md aspect-w-16 aspect-h-9">
                <Image id="banner" image={article.image} />
              </div>
            </div>
            <div className="mb-8 divide-y-0 divide-grey-600">
              <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>
                {article.content}
              </ReactMarkdown>
            </div>
          </div>
          <div className="block w-6/12 md:w-4/12 mt-4 md:mt-0 md:px-8">
            <div className="flex flex-row md:fixed w-auto items-center justify-center px-6 md:px-8 py-3 border border-grey-100 rounded-md space-x-6 lg:space-x-12">
              <CopyToClipboard
                text={typeof window !== "undefined" ? window.location.href : ""}
              >
                <FiLink className="text-grey-300 cursor-pointer text-2xl hover:text-green-200 transition transform hover:scale-110" />
              </CopyToClipboard>
              <TwitterShareButton
                url={typeof window !== "undefined" ? window.location.href : ""}
                className="transition transform hover:scale-110"
              >
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
              <FacebookShareButton
                url={typeof window !== "undefined" ? window.location.href : ""}
                className="transition transform hover:scale-110"
              >
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
              <LinkedinShareButton
                url={typeof window !== "undefined" ? window.location.href : ""}
                className="transition transform hover:scale-110"
              >
                <LinkedinIcon size={32} round={true} />
              </LinkedinShareButton>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSidePaths() {
  const articles = await fetchAPI("/articles")

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  }
}

export async function getServerSideProps({ params }) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`)
  const categories = await fetchAPI("/categories")

  return {
    props: { article: articles[0], categories },
  }
}

export default Article
