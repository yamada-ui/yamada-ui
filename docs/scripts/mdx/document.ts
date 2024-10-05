import { readFile } from "fs/promises"
import matter from "gray-matter"
import { getEditUrl, getSlug, getTableOfContents } from "./utils"
import type { Document, FrontMatter } from "mdx"

export async function generateMDX(filePath: string): Promise<Document> {
  filePath = filePath.replace(/\\/g, "/")

  const file = await readFile(filePath, "utf-8")
  const slug = getSlug(filePath)
  const paths = slug.split("/")

  const { data, content } = matter(file)
  const {
    title,
    description,
    with_table_of_contents,
    with_children_description,
    table_of_contents_max_lv,
    is_active,
    order,
  } = data as FrontMatter

  return {
    ...data,
    title,
    description,
    is_active: is_active ?? true,
    with_table_of_contents: with_table_of_contents ?? true,
    with_children_description: with_children_description ?? true,
    order: order ?? 530000,
    body: content,
    paths,
    slug: "/" + slug,
    is_expanded: false,
    edit_url: getEditUrl(filePath),
    contents: getTableOfContents(content, table_of_contents_max_lv),
  }
}
