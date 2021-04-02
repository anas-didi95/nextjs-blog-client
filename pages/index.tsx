import { GetStaticProps } from "next"
import Link from "next/link"
import React from "react"
import { getSortedPostsData } from "../lib/posts"
import { TPost } from "../src/utils/types"
import AppLayout from "../src/layouts/AppLayout"
import Image from "next/image"

const IndexPage: React.FC<{ allPostsData: TPost[] }> = ({ allPostsData }) => (
  <AppLayout>
    <div className="container py-6">
      <div className="columns">
        <div className="column is-2" />
        <div className="column is-2">
          <figure className="image is-128x128 mb-5">
            <Image src="/images/profile-pic.jpg" alt="Profile picture" width={128} height={128} className="is-rounded" />
          </figure>
          <p className="title is-4">Anas Juwaidi Bin Mohd Jeffry</p>
          <p className="subtitle is-6">Software Engineer</p>
        </div>
        <div className="column is-1">1</div>
        <div className="column is-3">3</div>
        <div className="column is-2" />
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
