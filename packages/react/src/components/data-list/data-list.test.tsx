import type { DataListItemProps } from "."
import { a11y, page, render } from "#test/browser"
import { DataList } from "./"

const getTestElement = (testId: string) => page.getByTestId(testId)

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

  test("DataList sets `className` correctly", async () => {
    await render(
      <DataList.Root data-testid="root">
        <DataList.Item data-testid="item">
          <DataList.Term data-testid="term">白石うらら</DataList.Term>
          <DataList.Description data-testid="description">
            入れ替わりの魔女
          </DataList.Description>
        </DataList.Item>
      </DataList.Root>,
    )

    await expect
      .element(getTestElement("root"))
      .toHaveClass("ui-data-list__root")
    await expect
      .element(getTestElement("item"))
      .toHaveClass("ui-data-list__item")
    await expect
      .element(getTestElement("term"))
      .toHaveClass("ui-data-list__term")
    await expect
      .element(getTestElement("description"))
      .toHaveClass("ui-data-list__description")
  })

  test("DataList renders HTML tag correctly", async () => {
    await render(
      <DataList.Root data-testid="root">
        <DataList.Item data-testid="item">
          <DataList.Term>白石うらら</DataList.Term>
          <DataList.Description>入れ替わりの魔女</DataList.Description>
        </DataList.Item>
      </DataList.Root>,
    )

    expect(getTestElement("root").element().tagName).toBe("DL")
    expect(getTestElement("item").element().tagName).toBe("DIV")
    expect(page.getByText("白石うらら").element().tagName).toBe("DT")
    expect(page.getByText("入れ替わりの魔女").element().tagName).toBe("DD")
  })

  test("DataList renders array terms correctly", async () => {
    const items: DataListItemProps[] = [
      {
        description: "入れ替わりの魔女",
        term: ["白石うらら", "山田竜"],
      },
    ]

    await render(<DataList.Root items={items} />)

    await expect
      .poll(() => page.getByText(/白石うらら|山田竜/).elements().length)
      .toBe(2)
    await expect.element(page.getByText("白石うらら")).toBeInTheDocument()
    await expect.element(page.getByText("山田竜")).toBeInTheDocument()
    await expect.element(page.getByText("入れ替わりの魔女")).toBeInTheDocument()
  })

  test("DataList renders array descriptions correctly", async () => {
    const items: DataListItemProps[] = [
      {
        description: ["入れ替わりの魔女", "テレポーテーション"],
        term: "白石うらら",
      },
    ]

    await render(<DataList.Root items={items} />)

    await expect
      .poll(
        () =>
          page.getByText(/入れ替わりの魔女|テレポーテーション/).elements()
            .length,
      )
      .toBe(2)
    await expect.element(page.getByText("白石うらら")).toBeInTheDocument()
    await expect.element(page.getByText("入れ替わりの魔女")).toBeInTheDocument()
    await expect
      .element(page.getByText("テレポーテーション"))
      .toBeInTheDocument()
  })

  test("DataList calculates columns when description is omitted", async () => {
    const items: DataListItemProps[] = [
      { term: ["白石うらら", "山田竜"] },
      { description: "虜の魔女", term: "小田切寧々" },
    ]

    await render(<DataList.Root data-testid="root" items={items} />)

    expect(
      getTestElement("root").element().style.getPropertyValue("--col"),
    ).toBe("2")
  })

  test("DataList calculates columns when term is omitted", async () => {
    const items: DataListItemProps[] = [
      { description: ["入れ替わりの魔女", "テレポーテーション"] },
      { description: "虜の魔女", term: "小田切寧々" },
    ]

    await render(<DataList.Root data-testid="root" items={items} />)

    expect(
      getTestElement("root").element().style.getPropertyValue("--col"),
    ).toBe("2")
  })

  test("DataListItem renders array term prop", async () => {
    await render(
      <DataList.Root>
        <DataList.Item description="魔女" term={["白石うらら", "山田竜"]} />
      </DataList.Root>,
    )

    await expect
      .poll(() => page.getByText(/白石うらら|山田竜/).elements().length)
      .toBe(2)
    await expect.element(page.getByText("白石うらら")).toBeInTheDocument()
    await expect.element(page.getByText("山田竜")).toBeInTheDocument()
    await expect.element(page.getByText("魔女")).toBeInTheDocument()
  })

  test("DataListItem renders array description prop", async () => {
    await render(
      <DataList.Root>
        <DataList.Item
          description={["入れ替わりの魔女", "テレポーテーション"]}
          term="白石うらら"
        />
      </DataList.Root>,
    )

    await expect
      .poll(
        () =>
          page.getByText(/入れ替わりの魔女|テレポーテーション/).elements()
            .length,
      )
      .toBe(2)
    await expect.element(page.getByText("白石うらら")).toBeInTheDocument()
    await expect.element(page.getByText("入れ替わりの魔女")).toBeInTheDocument()
    await expect
      .element(page.getByText("テレポーテーション"))
      .toBeInTheDocument()
  })

  test("DataList calculates columns from children with DataListItem", async () => {
    await render(
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

    expect(
      getTestElement("root").element().style.getPropertyValue("--col"),
    ).toBe("3")
  })

  test("DataList passes termProps and descriptionProps through context", async () => {
    await render(
      <DataList.Root
        items={[{ description: "入れ替わりの魔女", term: "白石うらら" }]}
        descriptionProps={{ "data-testid": "context-desc" } as any}
        termProps={{ "data-testid": "context-term" } as any}
      />,
    )

    await expect.element(getTestElement("context-term")).toBeInTheDocument()
    await expect.element(getTestElement("context-desc")).toBeInTheDocument()
  })

  test("DataListItem renders single term and description via props", async () => {
    await render(
      <DataList.Root>
        <DataList.Item description="入れ替わりの魔女" term="白石うらら" />
      </DataList.Root>,
    )

    expect(page.getByText("白石うらら").element().tagName).toBe("DT")
    expect(page.getByText("入れ替わりの魔女").element().tagName).toBe("DD")
  })

  test("DataListItem prefers children Term/Description over props", async () => {
    await render(
      <DataList.Root>
        <DataList.Item description="propDescription" term="propTerm">
          <DataList.Term>childTerm</DataList.Term>
          <DataList.Description>childDescription</DataList.Description>
        </DataList.Item>
      </DataList.Root>,
    )

    await expect.element(page.getByText("childTerm")).toBeInTheDocument()
    await expect.element(page.getByText("childDescription")).toBeInTheDocument()
    await expect
      .element(page.getByText("propTerm").query())
      .not.toBeInTheDocument()
    await expect
      .element(page.getByText("propDescription").query())
      .not.toBeInTheDocument()
  })

  test("DataListItem renders extra children alongside Term and Description", async () => {
    await render(
      <DataList.Root>
        <DataList.Item>
          <DataList.Term>白石うらら</DataList.Term>
          <DataList.Description>入れ替わりの魔女</DataList.Description>
          <span data-testid="extra">extra content</span>
        </DataList.Item>
      </DataList.Root>,
    )

    await expect.element(page.getByText("白石うらら")).toBeInTheDocument()
    await expect.element(page.getByText("入れ替わりの魔女")).toBeInTheDocument()
    await expect.element(getTestElement("extra")).toBeInTheDocument()
  })

  test("DataListItem merges item-level termProps and descriptionProps", async () => {
    await render(
      <DataList.Root>
        <DataList.Item
          description="入れ替わりの魔女"
          term="白石うらら"
          descriptionProps={{ "data-testid": "item-desc" } as any}
          termProps={{ "data-testid": "item-term" } as any}
        />
      </DataList.Root>,
    )

    await expect
      .element(getTestElement("item-term"))
      .toHaveTextContent("白石うらら")
    await expect
      .element(getTestElement("item-desc"))
      .toHaveTextContent("入れ替わりの魔女")
  })

  test("DataListItem merges context and item-level termProps/descriptionProps", async () => {
    await render(
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

    const term = getTestElement("merged-term")
    const desc = getTestElement("merged-desc")

    await expect.element(term).toHaveTextContent("白石うらら")
    await expect.element(desc).toHaveTextContent("入れ替わりの魔女")
  })

  test("DataListItem merges event and className for term props", async () => {
    const onContextTermClick = vi.fn()
    const onItemTermClick = vi.fn()

    const { user } = await render(
      <DataList.Root
        termProps={
          {
            className: "context-term",
            onClick: onContextTermClick,
          } as any
        }
      >
        <DataList.Item
          description="入れ替わりの魔女"
          term="白石うらら"
          termProps={
            {
              className: "item-term",
              onClick: onItemTermClick,
            } as any
          }
        />
      </DataList.Root>,
    )

    const term = page.getByText("白石うらら")

    await user.click(term)

    await expect.element(term).toHaveClass("context-term")
    await expect.element(term).toHaveClass("item-term")
    expect(onContextTermClick).toHaveBeenCalledTimes(1)
    expect(onItemTermClick).toHaveBeenCalledTimes(1)
  })

  test("DataListItem merges event and className for description props", async () => {
    const onContextDescriptionClick = vi.fn()
    const onItemDescriptionClick = vi.fn()

    const { user } = await render(
      <DataList.Root
        descriptionProps={
          {
            className: "context-description",
            onClick: onContextDescriptionClick,
          } as any
        }
      >
        <DataList.Item
          description="入れ替わりの魔女"
          term="白石うらら"
          descriptionProps={
            {
              className: "item-description",
              onClick: onItemDescriptionClick,
            } as any
          }
        />
      </DataList.Root>,
    )

    const description = page.getByText("入れ替わりの魔女")

    await user.click(description)

    await expect.element(description).toHaveClass("context-description")
    await expect.element(description).toHaveClass("item-description")
    expect(onContextDescriptionClick).toHaveBeenCalledTimes(1)
    expect(onItemDescriptionClick).toHaveBeenCalledTimes(1)
  })

  test("DataList renders items with array terms and descriptions for column calculation", async () => {
    const items: DataListItemProps[] = [
      {
        description: ["入れ替わりの魔女", "絶望的味覚音痴"],
        term: ["白石うらら", "清集院桃子"],
      },
    ]

    await render(<DataList.Root data-testid="root" items={items} />)

    expect(
      getTestElement("root").element().style.getPropertyValue("--col"),
    ).toBe("4")
  })

  test("DataList renders empty items array", async () => {
    await render(<DataList.Root data-testid="root" items={[]} />)

    await expect.element(getTestElement("root")).toBeInTheDocument()
    expect(
      getTestElement("root").element().style.getPropertyValue("--col"),
    ).toBe("0")
  })

  test("DataListItem with array term applies termProps to each term", async () => {
    await render(
      <DataList.Root>
        <DataList.Item
          description="入れ替わりの魔女"
          term={["白石うらら", "山田竜"]}
          termProps={{ "data-custom": "term-prop" } as any}
        />
      </DataList.Root>,
    )

    await expect
      .element(page.getByText("白石うらら"))
      .toHaveAttribute("data-custom", "term-prop")
    await expect
      .poll(() => page.getByText(/白石うらら|山田竜/).elements().length)
      .toBe(2)
    await expect
      .element(page.getByText("山田竜"))
      .toHaveAttribute("data-custom", "term-prop")
  })

  test("DataListItem with array description applies descriptionProps to each description", async () => {
    await render(
      <DataList.Root>
        <DataList.Item
          description={["入れ替わりの魔女", "テレポーテーション"]}
          term="白石うらら"
          descriptionProps={{ "data-custom": "desc-prop" } as any}
        />
      </DataList.Root>,
    )

    await expect
      .poll(
        () =>
          page.getByText(/入れ替わりの魔女|テレポーテーション/).elements()
            .length,
      )
      .toBe(2)
    await expect
      .element(page.getByText("入れ替わりの魔女"))
      .toHaveAttribute("data-custom", "desc-prop")
    await expect
      .element(page.getByText("テレポーテーション"))
      .toHaveAttribute("data-custom", "desc-prop")
  })

  test("DataList children take precedence over items prop", async () => {
    await render(
      <DataList.Root data-testid="root">
        <DataList.Item>
          <DataList.Term>子要素の用語</DataList.Term>
          <DataList.Description>子要素の説明</DataList.Description>
        </DataList.Item>
      </DataList.Root>,
    )

    await expect.element(page.getByText("子要素の用語")).toBeInTheDocument()
    await expect.element(page.getByText("子要素の説明")).toBeInTheDocument()
  })

  test("DataList items with both term and description omitted", async () => {
    const items: DataListItemProps[] = [{}]

    await render(<DataList.Root data-testid="root" items={items} />)

    expect(
      getTestElement("root").element().style.getPropertyValue("--col"),
    ).toBe("0")
  })

  test("DataListItem renders with multiple custom Term children", async () => {
    await render(
      <DataList.Root>
        <DataList.Item>
          <DataList.Term>用語1</DataList.Term>
          <DataList.Term>用語2</DataList.Term>
          <DataList.Description>説明</DataList.Description>
        </DataList.Item>
      </DataList.Root>,
    )

    await expect.element(page.getByText("用語1")).toBeInTheDocument()
    await expect.element(page.getByText("用語2")).toBeInTheDocument()
    await expect.element(page.getByText("説明")).toBeInTheDocument()
  })

  test("DataListItem renders with multiple custom Description children", async () => {
    await render(
      <DataList.Root>
        <DataList.Item>
          <DataList.Term>用語</DataList.Term>
          <DataList.Description>説明1</DataList.Description>
          <DataList.Description>説明2</DataList.Description>
        </DataList.Item>
      </DataList.Root>,
    )

    await expect.element(page.getByText("用語")).toBeInTheDocument()
    await expect.element(page.getByText("説明1")).toBeInTheDocument()
    await expect.element(page.getByText("説明2")).toBeInTheDocument()
  })

  test("DataList with context termProps applies to items generated from items prop", async () => {
    await render(
      <DataList.Root
        items={[
          { description: "入れ替わりの魔女", term: ["白石うらら", "山田竜"] },
        ]}
        termProps={{ "data-testid": "ctx-term" } as any}
      />,
    )

    await expect
      .poll(() => page.getByTestId("ctx-term").elements().length)
      .toBe(2)
    await expect
      .element(page.getByText("白石うらら"))
      .toHaveAttribute("data-testid", "ctx-term")
    await expect
      .element(page.getByText("山田竜"))
      .toHaveAttribute("data-testid", "ctx-term")
  })

  test("DataListItem merges event and className for array term props", async () => {
    const onContextTermClick = vi.fn()
    const onItemTermClick = vi.fn()

    const { user } = await render(
      <DataList.Root
        termProps={
          {
            className: "context-term",
            onClick: onContextTermClick,
          } as any
        }
      >
        <DataList.Item
          description="入れ替わりの魔女"
          term={["白石うらら", "山田竜"]}
          termProps={
            {
              className: "item-term",
              onClick: onItemTermClick,
            } as any
          }
        />
      </DataList.Root>,
    )

    const firstTerm = page.getByText("白石うらら")
    const secondTerm = page.getByText("山田竜")

    await expect
      .poll(() => page.getByText(/白石うらら|山田竜/).elements().length)
      .toBe(2)
    await expect.element(firstTerm).toHaveClass("context-term", "item-term")
    await expect.element(secondTerm).toHaveClass("context-term", "item-term")

    await user.click(firstTerm)

    expect(onContextTermClick).toHaveBeenCalledTimes(1)
    expect(onItemTermClick).toHaveBeenCalledTimes(1)
  })

  test("DataListItem merges event and className for array description props", async () => {
    const onContextDescriptionClick = vi.fn()
    const onItemDescriptionClick = vi.fn()

    const { user } = await render(
      <DataList.Root
        descriptionProps={
          {
            className: "context-description",
            onClick: onContextDescriptionClick,
          } as any
        }
      >
        <DataList.Item
          description={["入れ替わりの魔女", "テレポーテーション"]}
          term="白石うらら"
          descriptionProps={
            {
              className: "item-description",
              onClick: onItemDescriptionClick,
            } as any
          }
        />
      </DataList.Root>,
    )

    const firstDescription = page.getByText("入れ替わりの魔女")
    const secondDescription = page.getByText("テレポーテーション")

    await expect
      .poll(
        () =>
          page.getByText(/入れ替わりの魔女|テレポーテーション/).elements()
            .length,
      )
      .toBe(2)
    await expect
      .element(firstDescription)
      .toHaveClass("context-description", "item-description")
    await expect
      .element(secondDescription)
      .toHaveClass("context-description", "item-description")

    await user.click(firstDescription)

    expect(onContextDescriptionClick).toHaveBeenCalledTimes(1)
    expect(onItemDescriptionClick).toHaveBeenCalledTimes(1)
  })

  test("DataList with context descriptionProps applies to items generated from items prop", async () => {
    await render(
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

    await expect
      .poll(() => page.getByTestId("ctx-desc").elements().length)
      .toBe(2)
    await expect
      .element(page.getByText("入れ替わりの魔女"))
      .toHaveAttribute("data-testid", "ctx-desc")
    await expect
      .element(page.getByText("テレポーテーション"))
      .toHaveAttribute("data-testid", "ctx-desc")
  })
})
