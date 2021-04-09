import { GetStaticProps } from "next"
import React from "react"
import { getSortedPostsData } from "../lib/posts"
import { TPost } from "../src/utils/types"
import AppLayout from "../src/layouts/AppLayout"
import Image from "next/image"
import PostList from "../src/components/PostList"
import Divider from "../src/components/Divider"
import ProfileInfo from "../src/components/ProfileInfo"

const IndexPage: React.FC<{ posts: TPost[] }> = ({ posts }) => (
  <AppLayout>
    <div className="container">
      <div className="columns">
        <div className="column is-1" />
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
    <aside className="menu">
      <ul className="menu-list">
        <li>
          <ul>
            <li>
              <a className="is-active">Articles</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>About Me</a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
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
