import { GetStaticPaths, GetStaticProps } from "next"
import React from "react"
import AppLayout from "../../src/layouts/AppLayout"
import { TArticle } from "../../src/utils/types"
import DatePlaceholder from "../../src/components/DatePlaceholder"
import Divider from "../../src/components/Divider"
import { getAllArticlesIds, getArticleData } from "../../lib/articles"

const PostPage: React.FC<{ article: TArticle }> = ({ article }) => (
  <AppLayout>
    <div className="container">
      <div className="columns">
        <div className="column" />
        <div className="column is-6">
          <p className="title has-text-centered">{article.title}</p>
          <br />
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />
          <Divider />
          <p className="is-italic">
            Published <DatePlaceholder dateString={article.date} />
          </p>
        </div>
        <div className="column" />
      </div>
    </div>
  </AppLayout>
)

export default PostPage

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllArticlesIds()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{ props: { article: TArticle } }> => {
  const article = await getArticleData(params.id as string)

  return {
    props: {
      article,
    },
  }
}
