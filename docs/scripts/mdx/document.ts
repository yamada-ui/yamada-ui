import { readFile } from "fs/promises"
import { CONSTANT } from "constant"
import matter from "gray-matter"
import type { Document, FrontMatter } from "mdx"
import { getSlug, getTableOfContents } from "./utils"

export async function generateMDX(filePath: string): Promise<Document> {
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
    edit_url: `${CONSTANT.SNS.GITHUB.DOC_EDIT_URL}/${filePath}`,
    contents: getTableOfContents(content, table_of_contents_max_lv),
  }
}
