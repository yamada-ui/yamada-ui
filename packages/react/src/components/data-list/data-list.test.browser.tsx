import { page, render } from "#test/browser"
import { DataList } from "./"

describe("<DataList />", () => {
  test("DataListItem merges event and className for term props", async () => {
    const onContextTermClick = vi.fn()
    const onItemTermClick = vi.fn()

    const { user } = await render(
      <DataList.Root
        termProps={{
          className: "context-term",
          onClick: onContextTermClick,
        }}
      >
        <DataList.Item
          description="入れ替わりの魔女"
          term="白石うらら"
          termProps={{
            className: "item-term",
            onClick: onItemTermClick,
          }}
        />
      </DataList.Root>,
    )

    const term = page.getByText("白石うらら")

    await user.click(term)

    await expect.element(term).toHaveClass("context-term", "item-term")
    expect(onContextTermClick).toHaveBeenCalledTimes(1)
    expect(onItemTermClick).toHaveBeenCalledTimes(1)
  })

  test("DataListItem merges event and className for description props", async () => {
    const onContextDescriptionClick = vi.fn()
    const onItemDescriptionClick = vi.fn()

    const { user } = await render(
      <DataList.Root
        descriptionProps={{
          className: "context-description",
          onClick: onContextDescriptionClick,
        }}
      >
        <DataList.Item
          description="入れ替わりの魔女"
          term="白石うらら"
          descriptionProps={{
            className: "item-description",
            onClick: onItemDescriptionClick,
          }}
        />
      </DataList.Root>,
    )

    const description = page.getByText("入れ替わりの魔女")

    await user.click(description)

    await expect
      .element(description)
      .toHaveClass("context-description", "item-description")
    expect(onContextDescriptionClick).toHaveBeenCalledTimes(1)
    expect(onItemDescriptionClick).toHaveBeenCalledTimes(1)
  })
})
