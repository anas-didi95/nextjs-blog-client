import { GetStaticProps } from "next"
import React from "react"
import { getSortedPostsData } from "../lib/posts"
import { TPost } from "../src/utils/types"
import AppLayout from "../src/layouts/AppLayout"
import PostList from "../src/components/PostList"
import Divider from "../src/components/Divider"
import ProfileInfo from "../src/components/ProfileInfo"
import NavMenu from "../src/components/NavMenu"
import SocialLink from "../src/components/SocialLink"

const IndexPage: React.FC<{ posts: TPost[] }> = ({ posts }) => (
  <AppLayout>
    <div className="container">
      <div className="columns">
        <div className="column is-1 is-hidden-mobile" />
        <div className="column is-3">
          <InfoColumn />
        </div>
        <div className="column is-1">
          <DividerColumn />
        </div>
        <div className="column">
          <PostList posts={posts} />
        </div>
        <div className="column is-1" />
      </div>
    </div>
  </AppLayout>
)

const InfoColumn: React.FC<{}> = () => (
  <>
    <ProfileInfo />
    <NavMenu active="articles" />
    <br />
    <SocialLink />
  </>
)

const DividerColumn: React.FC<{}> = () => (
  <>
    <div
      style={{ display: "flex", height: "75vh" }}
      className="is-hidden-mobile">
      <div style={{ flex: 1, height: "75vh" }}></div>
      <Divider isVertical isHideMobile />
      <div style={{ flex: 1, height: "75vh" }}></div>
    </div>
    <Divider isHideDesktop />
  </>
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
