import type { Document, FrontMatter } from "mdx"
import { readFile } from "fs/promises"
import matter from "gray-matter"
import { getEditUrl, getSlug, getTableOfContents } from "./utils"

export async function generateMDX(filePath: string): Promise<Document> {
  filePath = filePath.replace(/\\/g, "/")

  const file = await readFile(filePath, "utf-8")
  const slug = getSlug(filePath)
  const paths = slug.split("/")

  const { content, data } = matter(file)
  const {
    description = "",
    is_active,
    order,
    table_of_contents_max_lv,
    title = "",
    with_children_description,
    with_table_of_contents,
  } = data as Partial<FrontMatter>

  return {
    ...data,
    body: content,
    contents: getTableOfContents(content, table_of_contents_max_lv),
    description,
    edit_url: getEditUrl(filePath),
    is_active: is_active ?? true,
    is_expanded: false,
    order: order ?? 530000,
    paths,
    slug: "/" + slug,
    title,
    with_children_description: with_children_description ?? true,
    with_table_of_contents: with_table_of_contents ?? true,
  }
}
