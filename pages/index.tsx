import { GetStaticProps } from "next"
import Link from "next/link"
import React from "react"
import { getSortedPostsData } from "../lib/posts"
import { TPost } from "../src/utils/types"
import AppLayout from "../src/layouts/AppLayout"
import Image from "next/image"

const IndexPage: React.FC<{ allPostsData: TPost[] }> = ({ allPostsData }) => (
  <AppLayout>
    <div className="container">
      <div className="columns">
        <div className="column is-1" />
        <div className="column is-3">
          <figure className="image is-128x128 mb-5">
            <Image src="/images/profile-pic.jpg" alt="Profile picture" width={128} height={128} className="is-rounded" />
          </figure>
          <div className="mb-5">
            <p className="title is-4">Anas Juwaidi Bin Mohd Jeffry</p>
            <p className="subtitle is-5">Software Engineer</p>
          </div>
          <aside className="menu">
            <ul className="menu-list">
              <li>
                <ul>
                  <li><a className="is-active">Articles</a></li>
                  <li><a>Projects</a></li>
                  <li><a>About Me</a></li>
                </ul>
              </li>
            </ul>
          </aside>
        </div>
        <div className="column is-1 p-0">
          <div style={{ display: "flex", height: "75vh" }} className="is-hidden-mobile">
            <div style={{ flex: 1, height: "75vh" }}></div>
            <div className="divider is-vertical">~</div>
            <div style={{ flex: 1, height: "75vh", }}></div>
          </div>
          <div className="divider is-hidden-desktop">~</div>
        </div>
        <div className="column">
          <div className="mb-6">
            <p className="mb-1">
              <span className="has-text-weight-bold">2020, AUGUST 02</span>&nbsp;<a className="ml-2 has-text-weight-semibold has-text-info">TYPOGRAPGY</a>
            </p>
            <a className="title">Humane Typography in the Digital Age</a>
            <p className="mt-4 mb-3">An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.</p>
            <a>Read</a>
          </div>
          <div className="mb-6">
            <p className="mb-1">
              <span className="has-text-weight-bold">2020, AUGUST 02</span>&nbsp;<a className="ml-2 has-text-weight-semibold has-text-info">TYPOGRAPGY</a>
            </p>
            <a className="title">Humane Typography in the Digital Age</a>
            <p className="mt-4 mb-3">An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.</p>
            <a>Read</a>
          </div>
        </div>
        <div className="column is-1" />
      </div>
    </div>
  </AppLayout>
)

export default IndexPage

const a = (): number => 1

export const getStaticProps: GetStaticProps = async (): Promise<{ props: { allPostsData: TPost[] } }> => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
