import { a11y, page, render } from "#test/browser"
import { Pagination } from "./"

describe("<Pagination />", () => {
  test("renders component correctly", async () => {
    await a11y(<Pagination.Root total={10} />)
  }, 10000)

  test("merges `controlProps` with `controlPrevProps` without overwriting props", async () => {
    const onControlClick = vi.fn()
    const onControlPrevClick = vi.fn()

    const { user } = await render(
      <Pagination.Root
        defaultPage={2}
        total={10}
        controlPrevProps={{
          className: "from-control-prev",
          style: { backgroundColor: "blue" },
          onClick: onControlPrevClick,
        }}
        controlProps={{
          className: "from-control",
          style: { color: "red" },
          onClick: onControlClick,
        }}
      />,
    )

    const prevButton = page.getByRole("button", {
      name: /Go to previous page/i,
    })

    await expect
      .element(prevButton)
      .toHaveClass("from-control", "from-control-prev")
    await expect.element(prevButton).toHaveStyle({ color: "rgb(255, 0, 0)" })
    await expect
      .element(prevButton)
      .toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" })

    await user.click(prevButton)

    expect(onControlClick).toHaveBeenCalledTimes(1)
    expect(onControlPrevClick).toHaveBeenCalledTimes(1)
  })

  test("merges `edgeProps` with `edgeStartProps` without overwriting props", async () => {
    const onEdgeClick = vi.fn()
    const onEdgeStartClick = vi.fn()

    const { user } = await render(
      <Pagination.Root
        defaultPage={2}
        total={10}
        withEdges
        edgeProps={{
          className: "from-edge",
          style: { color: "red" },
          onClick: onEdgeClick,
        }}
        edgeStartProps={{
          className: "from-edge-start",
          style: { backgroundColor: "blue" },
          onClick: onEdgeStartClick,
        }}
      />,
    )

    const startButton = page.getByRole("button", {
      name: /Go to first page/i,
    })

    await expect
      .element(startButton)
      .toHaveClass("from-edge", "from-edge-start")
    await expect.element(startButton).toHaveStyle({ color: "rgb(255, 0, 0)" })
    await expect
      .element(startButton)
      .toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" })

    await user.click(startButton)

    expect(onEdgeClick).toHaveBeenCalledTimes(1)
    expect(onEdgeStartClick).toHaveBeenCalledTimes(1)
  })

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
