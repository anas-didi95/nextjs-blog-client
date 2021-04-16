import { GetStaticProps } from "next"
import React from "react"
import { getSortedPostsData } from "../lib/posts"
import { TPost } from "../src/utils/types"
import AppLayout from "../src/layouts/AppLayout"
import CommonLayout from "../src/layouts/CommonLayout"
import PostList from "../src/components/PostList"

const IndexPage: React.FC<{ posts: TPost[] }> = ({ posts }) => (
  <AppLayout>
    <CommonLayout>
      <PostList posts={posts} />
    </CommonLayout>
  </AppLayout>
)



export default IndexPage

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: { posts: TPost[] }
}> => {
  const posts = getSortedPostsData()

  return {
    props: {
      posts,
    },
  }
}
