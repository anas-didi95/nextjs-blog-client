import Link from "next/link"
import React from "react"
import { TPost } from "../utils/types"
import DatePlaceholder from "./DatePlaceholder"

const PostList: React.FC<{ posts: TPost[] }> = ({ posts }) => (
  <>
    {posts.map((post) => (
      <div key={post.id} className="mb-6">
        <p className="mb-1">
          <span className="has-text-weight-bold">
            <DatePlaceholder dateString={post.date} />
          </span>
          &nbsp;
          <span className="ml-2 has-text-weight-semibold has-text-info">
            TYPOGRAPGY
          </span>
        </p>
        <Link href={`/posts/${post.id}`}>
          <a href="#" className="title postlist-link">
            {post.title}
          </a>
        </Link>
        <p className="mt-4 mb-3">{post.excerpt}</p>
        <Link href={`/posts/${post.id}`}>
          <a>Read</a>
        </Link>
      </div>
    ))}
  </>
)

export default PostList
