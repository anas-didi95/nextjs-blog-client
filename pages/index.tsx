import { GetStaticProps } from "next"
import Link from "next/link"
import React from "react"
import { getSortedPostsData } from "../lib/posts"
import { TPost } from "../src/utils/types"
import Date from "../src/components/Date"

const IndexPage: React.FC<{ allPostsData: TPost[] }> = ({ allPostsData }) => (
  <section className="hero is-primary">
    <div className="hero-body">
      <p className="title">
        Primary hero
    </p>
      <p className="subtitle">
        Primary subtitle
    </p>
      {allPostsData.map(({ id, date, title }) => (
        <li key={id}>
          <Link href={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
          <small>
            <Date dateString={date} />
          </small>
        </li>
      ))}
    </div>
  </section>
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
