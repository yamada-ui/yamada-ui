import { page, render } from "#test/browser"
import { Pagination } from "./"

describe("<Pagination />", () => {
  test("navigates to next page when next trigger is clicked", async () => {
    const onChange = vi.fn()
    const { user } = await render(
      <Pagination.Root defaultPage={1} total={10} onChange={onChange} />,
    )

    await user.click(page.getByRole("button", { name: /Go to next page/i }))

    expect(onChange).toHaveBeenCalledWith(2)
  })

  test("navigates to previous page when prev trigger is clicked", async () => {
    const onChange = vi.fn()
    const { user } = await render(
      <Pagination.Root defaultPage={3} total={10} onChange={onChange} />,
    )

    await user.click(page.getByRole("button", { name: /Go to previous page/i }))

    expect(onChange).toHaveBeenCalledWith(2)
  })

  test("navigates to last page when end trigger is clicked", async () => {
    const onChange = vi.fn()
    const { user } = await render(
      <Pagination.Root
        defaultPage={1}
        total={10}
        withEdges
        onChange={onChange}
      />,
    )

    await user.click(page.getByRole("button", { name: /Go to last page/i }))

    expect(onChange).toHaveBeenCalledWith(10)
  })

  test("navigates to first page when start trigger is clicked", async () => {
    const onChange = vi.fn()
    const { user } = await render(
      <Pagination.Root
        defaultPage={5}
        total={10}
        withEdges
        onChange={onChange}
      />,
    )

    await user.click(page.getByRole("button", { name: /Go to first page/i }))

    expect(onChange).toHaveBeenCalledWith(1)
  })

  test("navigates to specific page when page button is clicked", async () => {
    const onChange = vi.fn()
    const { user } = await render(
      <Pagination.Root defaultPage={1} total={10} onChange={onChange} />,
    )

    await user.click(page.getByRole("button", { name: /Go to page 3/i }))

    expect(onChange).toHaveBeenCalledWith(3)
  })
})
