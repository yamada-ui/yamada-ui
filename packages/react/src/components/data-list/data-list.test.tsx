import type { DataListItemProps } from "./"
import { a11y, render, screen } from "#test"
import { DataList } from "./"

describe("<DataList />", () => {
  test("renders component correctly", async () => {
    const items: DataListItemProps[] = [
      { description: "入れ替わりの魔女", term: "白石うらら" },
      { description: "虜の魔女", term: "小田切寧々" },
      { description: "思念（テレパシー）の魔女", term: "大塚芽子" },
    ]

    await a11y(<DataList.Root items={items} />)
  })

  test("sets `className` and tag correctly", () => {
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
    expect(screen.getByTestId("root").tagName).toBe("DL")
    expect(screen.getByTestId("item")).toHaveClass("ui-data-list__item")
    expect(screen.getByTestId("item").tagName).toBe("DIV")
    expect(screen.getByTestId("term")).toHaveClass("ui-data-list__term")
    expect(screen.getByTestId("term").tagName).toBe("DT")
    expect(screen.getByTestId("description")).toHaveClass(
      "ui-data-list__description",
    )
    expect(screen.getByTestId("description").tagName).toBe("DD")
  })

  test("renders items with array terms and array descriptions", () => {
    const items: DataListItemProps[] = [
      {
        description: ["入れ替わりの魔女", "テレポーテーション"],
        term: ["白石うらら", "山田竜"],
      },
    ]

    render(<DataList.Root data-testid="root" items={items} />)

    expect(screen.getByText("白石うらら")).toBeInTheDocument()
    expect(screen.getByText("山田竜")).toBeInTheDocument()
    expect(screen.getByText("入れ替わりの魔女")).toBeInTheDocument()
    expect(screen.getByText("テレポーテーション")).toBeInTheDocument()
    expect(screen.getByTestId("root").style.getPropertyValue("--col")).toBe("4")
  })

  test("calculates columns from items prop with mixed term and description shapes", () => {
    const items: DataListItemProps[] = [
      { term: ["白石うらら", "山田竜"] },
      { description: ["入れ替わりの魔女", "テレポーテーション"] },
      { description: "虜の魔女", term: "小田切寧々" },
    ]

    render(<DataList.Root data-testid="root" items={items} />)

    expect(screen.getByTestId("root").style.getPropertyValue("--col")).toBe("2")
  })

  test("calculates columns from children with multiple terms and description", () => {
    render(
      <DataList.Root data-testid="root">
        <DataList.Item>
          <DataList.Term>白石うらら</DataList.Term>
          <DataList.Term>清集院桃子</DataList.Term>
          <DataList.Description>入れ替わりの魔女</DataList.Description>
        </DataList.Item>
        <DataList.Item>
          <DataList.Term>小田切寧々</DataList.Term>
          <DataList.Description>虜の魔女</DataList.Description>
        </DataList.Item>
      </DataList.Root>,
    )

    expect(screen.getByTestId("root").style.getPropertyValue("--col")).toBe("3")
  })

  test("renders empty items array with col=0", () => {
    render(<DataList.Root data-testid="root" items={[]} />)

    expect(screen.getByTestId("root")).toBeInTheDocument()
    expect(screen.getByTestId("root").style.getPropertyValue("--col")).toBe("0")
  })

  test("renders items where both term and description are omitted", () => {
    const items: DataListItemProps[] = [{}]

    render(<DataList.Root data-testid="root" items={items} />)

    expect(screen.getByTestId("root").style.getPropertyValue("--col")).toBe("0")
  })

  test("DataListItem renders single term and description via props", () => {
    render(
      <DataList.Root>
        <DataList.Item description="入れ替わりの魔女" term="白石うらら" />
      </DataList.Root>,
    )

    expect(screen.getByText("白石うらら").tagName).toBe("DT")
    expect(screen.getByText("入れ替わりの魔女").tagName).toBe("DD")
  })

  test("DataListItem renders array term and array description via props", () => {
    render(
      <DataList.Root>
        <DataList.Item
          description={["入れ替わりの魔女", "テレポーテーション"]}
          term={["白石うらら", "山田竜"]}
        />
      </DataList.Root>,
    )

    expect(screen.getByText("白石うらら")).toBeInTheDocument()
    expect(screen.getByText("山田竜")).toBeInTheDocument()
    expect(screen.getByText("入れ替わりの魔女")).toBeInTheDocument()
    expect(screen.getByText("テレポーテーション")).toBeInTheDocument()
  })

  test("DataListItem prefers children Term/Description over props", () => {
    render(
      <DataList.Root>
        <DataList.Item description="propDescription" term="propTerm">
          <DataList.Term>childTerm</DataList.Term>
          <DataList.Description>childDescription</DataList.Description>
        </DataList.Item>
      </DataList.Root>,
    )

    expect(screen.getByText("childTerm")).toBeInTheDocument()
    expect(screen.getByText("childDescription")).toBeInTheDocument()
    expect(screen.queryByText("propTerm")).not.toBeInTheDocument()
    expect(screen.queryByText("propDescription")).not.toBeInTheDocument()
  })

  test("DataListItem renders extra children alongside Term and Description", () => {
    render(
      <DataList.Root>
        <DataList.Item>
          <DataList.Term>白石うらら</DataList.Term>
          <DataList.Description>入れ替わりの魔女</DataList.Description>
          <span data-testid="extra">extra content</span>
        </DataList.Item>
      </DataList.Root>,
    )

    expect(screen.getByText("白石うらら")).toBeInTheDocument()
    expect(screen.getByText("入れ替わりの魔女")).toBeInTheDocument()
    expect(screen.getByTestId("extra")).toBeInTheDocument()
  })

  test("DataListItem renders multiple custom Term and Description children", () => {
    render(
      <DataList.Root>
        <DataList.Item>
          <DataList.Term>用語1</DataList.Term>
          <DataList.Term>用語2</DataList.Term>
          <DataList.Description>説明1</DataList.Description>
          <DataList.Description>説明2</DataList.Description>
        </DataList.Item>
      </DataList.Root>,
    )

    expect(screen.getByText("用語1")).toBeInTheDocument()
    expect(screen.getByText("用語2")).toBeInTheDocument()
    expect(screen.getByText("説明1")).toBeInTheDocument()
    expect(screen.getByText("説明2")).toBeInTheDocument()
  })

  test("children take precedence over items prop", () => {
    render(
      <DataList.Root items={[{ description: "items説明", term: "items用語" }]}>
        <DataList.Item>
          <DataList.Term>子要素の用語</DataList.Term>
          <DataList.Description>子要素の説明</DataList.Description>
        </DataList.Item>
      </DataList.Root>,
    )

    expect(screen.getByText("子要素の用語")).toBeInTheDocument()
    expect(screen.getByText("子要素の説明")).toBeInTheDocument()
    expect(screen.queryByText("items用語")).not.toBeInTheDocument()
    expect(screen.queryByText("items説明")).not.toBeInTheDocument()
  })

  test("DataListItem merges item-level termProps and descriptionProps", () => {
    render(
      <DataList.Root>
        <DataList.Item
          description="入れ替わりの魔女"
          term="白石うらら"
          descriptionProps={{ "data-testid": "item-desc" }}
          termProps={{ "data-testid": "item-term" }}
        />
      </DataList.Root>,
    )

    expect(screen.getByTestId("item-term")).toHaveTextContent("白石うらら")
    expect(screen.getByTestId("item-desc")).toHaveTextContent(
      "入れ替わりの魔女",
    )
  })

  test("DataListItem merges context-level and item-level termProps/descriptionProps", () => {
    render(
      <DataList.Root
        descriptionProps={{ className: "context-desc" }}
        termProps={{ className: "context-term" }}
      >
        <DataList.Item
          description="入れ替わりの魔女"
          term="白石うらら"
          descriptionProps={{
            className: "item-desc",
            "data-testid": "merged-desc",
          }}
          termProps={{
            className: "item-term",
            "data-testid": "merged-term",
          }}
        />
      </DataList.Root>,
    )

    expect(screen.getByTestId("merged-term")).toHaveClass(
      "context-term",
      "item-term",
    )
    expect(screen.getByTestId("merged-desc")).toHaveClass(
      "context-desc",
      "item-desc",
    )
  })

  test("context termProps and descriptionProps apply to items generated from items prop", () => {
    render(
      <DataList.Root
        items={[
          {
            description: ["入れ替わりの魔女", "テレポーテーション"],
            term: ["白石うらら", "山田竜"],
          },
        ]}
        descriptionProps={{ "data-testid": "ctx-desc" }}
        termProps={{ "data-testid": "ctx-term" }}
      />,
    )

    expect(screen.getAllByTestId("ctx-term")).toHaveLength(2)
    expect(screen.getAllByTestId("ctx-desc")).toHaveLength(2)
    expect(screen.getByText("白石うらら")).toHaveAttribute(
      "data-testid",
      "ctx-term",
    )
    expect(screen.getByText("入れ替わりの魔女")).toHaveAttribute(
      "data-testid",
      "ctx-desc",
    )
  })
})
