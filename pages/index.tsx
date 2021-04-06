import { GetStaticProps } from "next"
import React from "react"
import { getSortedPostsData } from "../lib/posts"
import { TPost } from "../src/utils/types"
import AppLayout from "../src/layouts/AppLayout"
import Image from "next/image"
import PostList from "../src/components/PostList"
import Divider from "../src/components/Divider"

const IndexPage: React.FC<{ posts: TPost[] }> = ({ posts }) => (
  <AppLayout>
    <div className="container">
      <div className="columns">
        <div className="column is-1" />
        <div className="column is-3">
          <figure className="image is-128x128 mb-5">
            <Image
              src="/images/profile-pic.jpg"
              alt="Profile picture"
              width={128}
              height={128}
              className="is-rounded"
            />
          </figure>
          <div className="mb-5">
            <p className="title is-4">Anas Juwaidi Bin Mohd Jeffry</p>
            <p className="subtitle is-5">Software Engineer</p>
          </div>
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
        </div>
        <div className="column is-1 p-0">
          <div
            style={{ display: "flex", height: "75vh" }}
            className="is-hidden-mobile">
            <div style={{ flex: 1, height: "75vh" }}></div>
            <Divider isVertical isHideMobile />
            <div style={{ flex: 1, height: "75vh" }}></div>
          </div>
          <Divider isHideDesktop />
        </div>
        <div className="column">
          <PostList posts={posts} />
        </div>
        <div className="column is-2" />
      </div>
    </div>
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
