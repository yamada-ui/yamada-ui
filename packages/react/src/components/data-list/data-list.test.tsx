import type { DataListItemProps } from "."
import { a11y, render, screen } from "#test"
import { DataList } from "./"

describe("<DataList />", () => {
  test("renders component correctly", async () => {
    const items: DataListItemProps[] = [
      { description: "入れ替わりの魔女", term: "白石うらら" },
      { description: "虜の魔女", term: "小田切寧々" },
      { description: "思念（テレパシー）の魔女", term: "大塚芽子" },
      { description: "未来視の魔女", term: "猿島マリア" },
      { description: "過去視の魔女", term: "滝川ノア" },
      { description: "透明の魔女", term: "飛鳥美琴" },
      { description: "記憶操作の魔女", term: "西園寺リカ" },
    ]

    await a11y(<DataList.Root items={items} />)
  })

  test("DataList sets `displayName` correctly", () => {
    expect(DataList.Root.displayName).toBe("DataListRoot")
    expect(DataList.Item.displayName).toBe("DataListItem")
    expect(DataList.Term.displayName).toBe("DataListTerm")
    expect(DataList.Description.displayName).toBe("DataListDescription")
  })

  test("DataList sets `className` correctly", () => {
    render(
      <DataList.Root data-testid="root">
        <DataList.Item data-testid="item">
          <DataList.Term data-testid="term">白石うらら</DataList.Term>
          <DataList.Description data-testid="description">
            入れ替わりの魔女
          </DataList.Description>
        </DataList.Item>
      </DataList.Root>,
    )

    expect(screen.getByTestId("root")).toHaveClass("ui-data-list__root")
    expect(screen.getByTestId("item")).toHaveClass("ui-data-list__item")
    expect(screen.getByTestId("term")).toHaveClass("ui-data-list__term")
    expect(screen.getByTestId("description")).toHaveClass(
      "ui-data-list__description",
    )
  })

  test("DataList renders HTML tag correctly", () => {
    render(
      <DataList.Root data-testid="root">
        <DataList.Item data-testid="item">
          <DataList.Term>白石うらら</DataList.Term>
          <DataList.Description>入れ替わりの魔女</DataList.Description>
        </DataList.Item>
      </DataList.Root>,
    )

    expect(screen.getByTestId("root").tagName).toBe("DL")
    expect(screen.getByTestId("item").tagName).toBe("DIV")
    expect(screen.getByText("白石うらら").tagName).toBe("DT")
    expect(screen.getByText("入れ替わりの魔女").tagName).toBe("DD")
  })

  test("DataList renders array terms correctly", () => {
    const items: DataListItemProps[] = [
      {
        description: "入れ替わりの魔女",
        term: ["白石うらら", "山田竜"],
      },
    ]

    render(<DataList.Root items={items} />)

    expect(screen.getByText("白石うらら")).toBeInTheDocument()
    expect(screen.getByText("山田竜")).toBeInTheDocument()
    expect(screen.getByText("入れ替わりの魔女")).toBeInTheDocument()
  })

  test("DataList renders array descriptions correctly", () => {
    const items: DataListItemProps[] = [
      {
        description: ["入れ替わりの魔女", "テレポーテーション"],
        term: "白石うらら",
      },
    ]

    render(<DataList.Root items={items} />)

    expect(screen.getByText("白石うらら")).toBeInTheDocument()
    expect(screen.getByText("入れ替わりの魔女")).toBeInTheDocument()
    expect(screen.getByText("テレポーテーション")).toBeInTheDocument()
  })

  test("DataList calculates columns when description is omitted", () => {
    const items: DataListItemProps[] = [
      { term: ["白石うらら", "山田竜"] },
      { description: "虜の魔女", term: "小田切寧々" },
    ]

    render(<DataList.Root data-testid="root" items={items} />)

    expect(screen.getByTestId("root").style.getPropertyValue("--col")).toBe("2")
  })

  test("DataList calculates columns when term is omitted", () => {
    const items: DataListItemProps[] = [
      { description: ["入れ替わりの魔女", "テレポーテーション"] },
      { description: "虜の魔女", term: "小田切寧々" },
    ]

    render(<DataList.Root data-testid="root" items={items} />)

    expect(screen.getByTestId("root").style.getPropertyValue("--col")).toBe("2")
  })
})
