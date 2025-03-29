import type { DataListItemProps } from "../src"
import { a11y, render, screen } from "@yamada-ui/test"
import {
  DataList,
  DataListDescription,
  DataListItem,
  DataListTerm,
} from "../src"

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

  test("renders with null description", () => {
    const itemsWithNullDescription: DataListItemProps[] = [
      { description: null, term: "term" },
    ]
    render(<DataList data-testid="DataList" items={itemsWithNullDescription} />)
    expect(screen.getByTestId("DataList")).toBeInTheDocument()
  })

  test("renders with array description", () => {
    const itemsWithArrayDescription: DataListItemProps[] = [
      {
        description: ["description1", "description2", "description3"],
        term: "term",
      },
    ]
    render(
      <DataList data-testid="DataList" items={itemsWithArrayDescription} />,
    )
    expect(screen.getByTestId("DataList")).toBeInTheDocument()
  })

  test("updates column count", () => {
    const { rerender } = render(
      <DataList col={1} w="fit-content">
        <DataListItem>
          <DataListTerm>term1</DataListTerm>
        </DataListItem>

        <DataListItem>
          <DataListTerm>term2</DataListTerm>
        </DataListItem>

        <DataListItem>
          <DataListTerm>term3</DataListTerm>
        </DataListItem>
      </DataList>,
    )

    rerender(
      <DataList data-testid="DataList" col={2}>
        <DataListItem>
          <DataListTerm>term1</DataListTerm>
          <DataListDescription>description1</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>term2</DataListTerm>
          <DataListDescription>description2</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>term3</DataListTerm>
          <DataListDescription>description3</DataListDescription>
        </DataListItem>
      </DataList>,
    )
    expect(screen.getByTestId("DataList")).toBeInTheDocument()
  })

  test("update items", () => {
    const initialItems: DataListItemProps[] = [
      { description: "description1", term: "term1" },
      { description: "description2", term: "term2" },
    ]

    const { rerender } = render(
      <DataList data-testid="DataList" items={initialItems} />,
    )

    // update items
    const newItems: DataListItemProps[] = [
      { description: "description3", term: "term3" },
      { description: "description4", term: "term4" },
    ]
    rerender(<DataList data-testid="DataList" items={newItems} />)
    expect(screen.getByTestId("DataList")).toBeInTheDocument()

    // update items without description
    const newItemsWithoutDescription: DataListItemProps[] = [
      { term: "term1" },
      { term: "term2" },
    ]

    rerender(
      <DataList data-testid="DataList" items={newItemsWithoutDescription} />,
    )
    expect(screen.getByTestId("DataList")).toBeInTheDocument()

    // update items with array description and term
    const newItemsWithArrayDescription: DataListItemProps[] = [
      {
        description: ["description1", "description2"],
        term: ["term1", "term2"],
      },
    ]
    rerender(
      <DataList data-testid="DataList" items={newItemsWithArrayDescription} />,
    )
    expect(screen.getByTestId("DataList")).toBeInTheDocument()
  })
})
