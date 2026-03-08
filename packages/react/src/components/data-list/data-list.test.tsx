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

  test("DataListItem renders array term prop", () => {
    render(
      <DataList.Root>
        <DataList.Item description="魔女" term={["白石うらら", "山田竜"]} />
      </DataList.Root>,
    )

    expect(screen.getByText("白石うらら")).toBeInTheDocument()
    expect(screen.getByText("山田竜")).toBeInTheDocument()
    expect(screen.getByText("魔女")).toBeInTheDocument()
  })

  test("DataListItem renders array description prop", () => {
    render(
      <DataList.Root>
        <DataList.Item
          description={["入れ替わりの魔女", "テレポーテーション"]}
          term="白石うらら"
        />
      </DataList.Root>,
    )

    expect(screen.getByText("白石うらら")).toBeInTheDocument()
    expect(screen.getByText("入れ替わりの魔女")).toBeInTheDocument()
    expect(screen.getByText("テレポーテーション")).toBeInTheDocument()
  })

  test("DataList calculates columns from children with DataListItem", () => {
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

  test("DataList passes termProps and descriptionProps through context", () => {
    render(
      <DataList.Root
        items={[{ description: "入れ替わりの魔女", term: "白石うらら" }]}
        descriptionProps={{ "data-testid": "context-desc" } as any}
        termProps={{ "data-testid": "context-term" } as any}
      />,
    )

    expect(screen.getByTestId("context-term")).toBeInTheDocument()
    expect(screen.getByTestId("context-desc")).toBeInTheDocument()
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

  test("DataListItem merges item-level termProps and descriptionProps", () => {
    render(
      <DataList.Root>
        <DataList.Item
          description="入れ替わりの魔女"
          term="白石うらら"
          descriptionProps={{ "data-testid": "item-desc" } as any}
          termProps={{ "data-testid": "item-term" } as any}
        />
      </DataList.Root>,
    )

    expect(screen.getByTestId("item-term")).toHaveTextContent("白石うらら")
    expect(screen.getByTestId("item-desc")).toHaveTextContent(
      "入れ替わりの魔女",
    )
  })

  test("DataListItem merges context and item-level termProps/descriptionProps", () => {
    render(
      <DataList.Root
        descriptionProps={{ "data-custom": "root-desc" } as any}
        termProps={{ "data-custom": "root-term" } as any}
      >
        <DataList.Item
          description="入れ替わりの魔女"
          term="白石うらら"
          descriptionProps={{ "data-testid": "merged-desc" } as any}
          termProps={{ "data-testid": "merged-term" } as any}
        />
      </DataList.Root>,
    )

    const term = screen.getByTestId("merged-term")
    const desc = screen.getByTestId("merged-desc")

    expect(term).toHaveTextContent("白石うらら")
    expect(desc).toHaveTextContent("入れ替わりの魔女")
  })

  test("DataList renders items with array terms and descriptions for column calculation", () => {
    const items: DataListItemProps[] = [
      {
        description: ["入れ替わりの魔女", "絶望的味覚音痴"],
        term: ["白石うらら", "清集院桃子"],
      },
    ]

    render(<DataList.Root data-testid="root" items={items} />)

    expect(screen.getByTestId("root").style.getPropertyValue("--col")).toBe("4")
  })

  test("DataList renders empty items array", () => {
    render(<DataList.Root data-testid="root" items={[]} />)

    expect(screen.getByTestId("root")).toBeInTheDocument()
    expect(screen.getByTestId("root").style.getPropertyValue("--col")).toBe("0")
  })

  test("DataListItem with array term applies termProps to each term", () => {
    render(
      <DataList.Root>
        <DataList.Item
          description="入れ替わりの魔女"
          term={["白石うらら", "山田竜"]}
          termProps={{ "data-custom": "term-prop" } as any}
        />
      </DataList.Root>,
    )

    const terms = screen.getAllByText(/白石うらら|山田竜/)
    expect(terms).toHaveLength(2)
  })

  test("DataListItem with array description applies descriptionProps to each description", () => {
    render(
      <DataList.Root>
        <DataList.Item
          description={["入れ替わりの魔女", "テレポーテーション"]}
          term="白石うらら"
          descriptionProps={{ "data-custom": "desc-prop" } as any}
        />
      </DataList.Root>,
    )

    const descriptions =
      screen.getAllByText(/入れ替わりの魔女|テレポーテーション/)
    expect(descriptions).toHaveLength(2)
  })

  test("DataList children take precedence over items prop", () => {
    render(
      <DataList.Root data-testid="root">
        <DataList.Item>
          <DataList.Term>子要素の用語</DataList.Term>
          <DataList.Description>子要素の説明</DataList.Description>
        </DataList.Item>
      </DataList.Root>,
    )

    expect(screen.getByText("子要素の用語")).toBeInTheDocument()
    expect(screen.getByText("子要素の説明")).toBeInTheDocument()
  })

  test("DataList items with both term and description omitted", () => {
    const items: DataListItemProps[] = [{}]

    render(<DataList.Root data-testid="root" items={items} />)

    expect(screen.getByTestId("root").style.getPropertyValue("--col")).toBe("0")
  })

  test("DataListItem renders with multiple custom Term children", () => {
    render(
      <DataList.Root>
        <DataList.Item>
          <DataList.Term>用語1</DataList.Term>
          <DataList.Term>用語2</DataList.Term>
          <DataList.Description>説明</DataList.Description>
        </DataList.Item>
      </DataList.Root>,
    )

    expect(screen.getByText("用語1")).toBeInTheDocument()
    expect(screen.getByText("用語2")).toBeInTheDocument()
    expect(screen.getByText("説明")).toBeInTheDocument()
  })

  test("DataListItem renders with multiple custom Description children", () => {
    render(
      <DataList.Root>
        <DataList.Item>
          <DataList.Term>用語</DataList.Term>
          <DataList.Description>説明1</DataList.Description>
          <DataList.Description>説明2</DataList.Description>
        </DataList.Item>
      </DataList.Root>,
    )

    expect(screen.getByText("用語")).toBeInTheDocument()
    expect(screen.getByText("説明1")).toBeInTheDocument()
    expect(screen.getByText("説明2")).toBeInTheDocument()
  })

  test("DataList with context termProps applies to items generated from items prop", () => {
    render(
      <DataList.Root
        items={[
          { description: "入れ替わりの魔女", term: ["白石うらら", "山田竜"] },
        ]}
        termProps={{ "data-testid": "ctx-term" } as any}
      />,
    )

    const terms = screen.getAllByTestId("ctx-term")
    expect(terms).toHaveLength(2)
    expect(terms[0]).toHaveTextContent("白石うらら")
    expect(terms[1]).toHaveTextContent("山田竜")
  })

  test("DataList with context descriptionProps applies to items generated from items prop", () => {
    render(
      <DataList.Root
        items={[
          {
            description: ["入れ替わりの魔女", "テレポーテーション"],
            term: "白石うらら",
          },
        ]}
        descriptionProps={{ "data-testid": "ctx-desc" } as any}
      />,
    )

    const descriptions = screen.getAllByTestId("ctx-desc")
    expect(descriptions).toHaveLength(2)
    expect(descriptions[0]).toHaveTextContent("入れ替わりの魔女")
    expect(descriptions[1]).toHaveTextContent("テレポーテーション")
  })
})
