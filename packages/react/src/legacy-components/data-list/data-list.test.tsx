import type { DataListItemProps } from "./"
import { a11y } from "../../../test"
import { DataList } from "./"

describe("<DataList />", () => {
  test("DataList renders correctly", async () => {
    const items: DataListItemProps[] = [
      { description: "入れ替わりの魔女", term: "白石うらら" },
      { description: "虜の魔女", term: "小田切寧々" },
      { description: "思念（テレパシー）の魔女", term: "大塚芽子" },
      { description: "未来視の魔女", term: "猿島マリア" },
      { description: "過去視の魔女", term: "滝川ノア" },
      { description: "透明の魔女", term: "飛鳥美琴" },
      { description: "記憶操作の魔女", term: "西園寺リカ" },
    ]

    await a11y(<DataList items={items} />)
  })
})
