import { GetStaticProps } from "next"
import React from "react"
import { TArticle } from "../src/utils/types"
import AppLayout from "../src/layouts/AppLayout"
import CommonLayout from "../src/layouts/CommonLayout"
import ArticleList from "../src/components/ArticleList"
import { getSortedArticlesData } from "../lib/articles"

const IndexPage: React.FC<{ articles: TArticle[] }> = ({ articles }) => (
  <AppLayout>
    <CommonLayout active="articles">
      <ArticleList articles={articles} />
    </CommonLayout>
  </AppLayout>
)

export default IndexPage

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: { articles: TArticle[] }
}> => {
  const articles = getSortedArticlesData()

  return {
    props: {
      articles,
    },
  }
}
