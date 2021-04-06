import { GetStaticPaths, GetStaticProps } from "next"
import React from "react"
import { getAllPostIds, getPostData } from "../../lib/posts"
import AppLayout from "../../src/layouts/AppLayout"
import { TPost } from "../../src/utils/types"
import DatePlaceholder from "../../src/components/DatePlaceholder"
import Divider from "../../src/components/Divider"

const PostPage: React.FC<{ post: TPost }> = ({ post }) => (
  <AppLayout>
    <div className="container">
      <div className="columns">
        <div className="column" />
        <div className="column is-6">
          <p className="title has-text-centered">{post.title}</p>
          <br />
          <div className="content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          <Divider />
          <p className="is-italic">Published <DatePlaceholder dateString={post.date} /></p>
        </div>
        <div className="column" />
      </div>
    </div>
  </AppLayout>
)

export default PostPage

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }): Promise<{ props: { post: TPost } }> => {
  const post = await getPostData(params.id as string)

  return {
    props: {
      post,
    },
  }
}
