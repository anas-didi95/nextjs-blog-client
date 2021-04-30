import fs from "fs"
import path from "path"
import matter from "gray-matter"
import remark from "remark"
import html from "remark-html"
import { TArticle } from "../src/utils/types"

const articlesDirectory = path.join(process.cwd(), "content/articles")

function getExcerpt(file, options) {
  let excerpt: string = file.content.split("\n").slice(0, 2).join(" ")
  file.excerpt = excerpt.split(" ").slice(0, 30).join(" ") + "..."
  return excerpt.trim()
}

export function getSortedArticlesData(): TArticle[] {
  // Get folder names under content/articles
  const folderNames = fs.readdirSync(articlesDirectory)

  const allPostsData = folderNames.map((folderName) => {
    // Read markdown file as string
    const fullPath = path.join(articlesDirectory, folderName, "index.md")
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents, { excerpt: getExcerpt })

    // Combine the data with the id
    return {
      id: folderName,
      excerpt: matterResult.excerpt,
      ...(matterResult.data as { date: string; title: string }),
      contentHtml: "",
    }
  })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(articlesDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    }
  })
}

export async function getPostData(id: string): Promise<TArticle> {
  const fullPath = path.join(articlesDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents, { excerpt: getExcerpt })

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
    excerpt: "",
  }
}
