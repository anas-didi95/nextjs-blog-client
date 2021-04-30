import Link from "next/link"
import React from "react"
import { TArticle } from "../utils/types"
import DatePlaceholder from "./DatePlaceholder"
import styles from "../../styles/ArticleList.module.css"

const ArticleList: React.FC<{ articles: TArticle[] }> = ({ articles }) => (
  <>
    {articles.map((article) => (
      <div key={article.id} className="mb-6">
        <p className="mb-1">
          <span className="has-text-weight-bold">
            <DatePlaceholder dateString={article.date} />
          </span>
          &nbsp;
          <span className="ml-2 has-text-weight-semibold has-text-info">
            TYPOGRAPGY
          </span>
        </p>
        <Link href={`/articles/${article.id}`}>
          <a href="#" className={`title ${styles.link}`}>
            {article.title}
          </a>
        </Link>
        <p className="mt-4 mb-3">{article.excerpt}</p>
        <Link href={`/articles/${article.id}`}>
          <a>Read</a>
        </Link>
      </div>
    ))}
  </>
)

export default ArticleList
