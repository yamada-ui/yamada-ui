import { fireEvent, render, screen, waitFor } from "#test/browser"
import { Calendar } from "./"

describe("<Calendar />", () => {
  test("clicking a day selects it", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Calendar.Root defaultMonth={new Date(2024, 5, 1)} onChange={onChange} />,
    )

    const day15 = screen.getByText("15").closest("td")!
    await user.click(day15)

    expect(onChange).toHaveBeenCalledWith(new Date(2024, 5, 15))
  })

  test("clicking a selected day deselects it", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={new Date(2024, 5, 15)}
        onChange={onChange}
      />,
    )

    const day15 = screen.getByText("15").closest("td")!
    await user.click(day15)

    expect(onChange).toHaveBeenCalledWith(undefined)
  })

  test("navigates to previous month", async () => {
    const { user } = await render(
      <Calendar.Root defaultMonth={new Date(2024, 5, 1)} />,
    )

    const prevButton = screen.getByRole("button", {
      name: /previous month/i,
    })
    await user.click(prevButton)

    const grid = screen.getByRole("grid")
    expect(grid).toHaveAttribute("aria-label", expect.stringContaining("May"))
  })

  test("navigates to next month", async () => {
    const { user } = await render(
      <Calendar.Root defaultMonth={new Date(2024, 5, 1)} />,
    )

    const nextButton = screen.getByRole("button", { name: /next month/i })
    await user.click(nextButton)

    const grid = screen.getByRole("grid")
    expect(grid).toHaveAttribute("aria-label", expect.stringContaining("July"))
  })

  test("multiple selection allows removing when at max", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={[new Date(2024, 5, 10), new Date(2024, 5, 20)]}
        max={2}
        multiple
        onChange={onChange}
      />,
    )

    const day10 = screen.getByText("10").closest("td")!
    await user.click(day10)

    expect(onChange).toHaveBeenCalledWith([new Date(2024, 5, 20)])
  })

  test("range selection: clicking start clears range", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={{
          end: undefined,
          start: new Date(2024, 5, 10),
        }}
        range
        onChange={onChange}
      />,
    )

    const day10 = screen.getByText("10").closest("td")!
    await user.click(day10)

    expect(onChange).toHaveBeenCalledWith({
      end: undefined,
      start: undefined,
    })
  })

  test("range selection: clicking before start swaps", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={{
          end: undefined,
          start: new Date(2024, 5, 15),
        }}
        range
        onChange={onChange}
      />,
    )

    const day5 = screen
      .getByRole("grid")
      .querySelector<HTMLTableCellElement>('td[data-value="2024-06-05"]')!
    await user.click(day5)

    expect(onChange).toHaveBeenCalledWith({
      end: new Date(2024, 5, 15),
      start: new Date(2024, 5, 5),
    })
  })

  test("range selection: clicking after start sets end", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={{
          end: undefined,
          start: new Date(2024, 5, 10),
        }}
        range
        onChange={onChange}
      />,
    )

    const day20 = screen.getByText("20").closest("td")!
    await user.click(day20)

    expect(onChange).toHaveBeenCalledWith({
      end: new Date(2024, 5, 20),
      start: new Date(2024, 5, 10),
    })
  })

  test("range selection: clicking when both start and end are set resets", async () => {
    const onChange = vi.fn()

    const { user } = await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={{
          end: new Date(2024, 5, 20),
          start: new Date(2024, 5, 10),
        }}
        range
        onChange={onChange}
      />,
    )

    const day25 = screen.getByText("25").closest("td")!
    await user.click(day25)

    expect(onChange).toHaveBeenCalledWith({
      end: undefined,
      start: new Date(2024, 5, 25),
    })
  })

  test("keyboard ArrowRight navigates to next day", async () => {
    await render(<Calendar.Root defaultMonth={new Date(2024, 5, 1)} />)

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, { key: "ArrowRight" })

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })
  })

  test("keyboard ArrowLeft navigates to previous day", async () => {
    await render(<Calendar.Root defaultMonth={new Date(2024, 5, 1)} />)

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, { key: "ArrowLeft" })

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })
  })

  test("keyboard Enter selects a day", async () => {
    const onChange = vi.fn()
    await render(
      <Calendar.Root defaultMonth={new Date(2024, 5, 1)} onChange={onChange} />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, { key: "Enter" })

    expect(onChange).toHaveBeenCalledWith(expect.any(Date))
  })

  test("keyboard Space selects a day", async () => {
    const onChange = vi.fn()
    await render(
      <Calendar.Root defaultMonth={new Date(2024, 5, 1)} onChange={onChange} />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, { key: " ", code: "Space" })

    expect(onChange).toHaveBeenCalledWith(expect.any(Date))
  })

  test("keyboard ArrowDown navigates to next week", async () => {
    await render(<Calendar.Root defaultMonth={new Date(2024, 5, 1)} />)

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, { key: "ArrowDown" })

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })
  })

  test("keyboard ArrowUp navigates to previous week", async () => {
    await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={new Date(2024, 5, 15)}
      />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, { key: "ArrowUp" })

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })
  })

  test("keyboard Home navigates to start of week", async () => {
    await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={new Date(2024, 5, 12)}
      />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, { key: "Home" })

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })
  })

  test("keyboard End navigates to end of week", async () => {
    await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={new Date(2024, 5, 12)}
      />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, { key: "End" })

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })
  })

  test("keyboard PageDown navigates to next month", async () => {
    await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={new Date(2024, 5, 15)}
      />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, { key: "PageDown" })

    await waitFor(() => {
      const newGrid = screen.getByRole("grid")
      expect(newGrid).toHaveAttribute(
        "aria-label",
        expect.stringContaining("July"),
      )
    })
  })

  test("keyboard PageUp navigates to previous month", async () => {
    await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={new Date(2024, 5, 15)}
      />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, { key: "PageUp" })

    await waitFor(() => {
      const newGrid = screen.getByRole("grid")
      expect(newGrid).toHaveAttribute(
        "aria-label",
        expect.stringContaining("May"),
      )
    })
  })

  test("keyboard Shift+PageDown navigates to next year", async () => {
    await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={new Date(2024, 5, 15)}
      />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, {
      key: "PageDown",
      shiftKey: true,
    })

    await waitFor(() => {
      const newGrid = screen.getByRole("grid")
      expect(newGrid).toHaveAttribute(
        "aria-label",
        expect.stringContaining("2025"),
      )
    })
  })

  test("keyboard Shift+PageUp navigates to previous year", async () => {
    await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={new Date(2024, 5, 15)}
      />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })

    fireEvent.keyDown(document.activeElement!, {
      key: "PageUp",
      shiftKey: true,
    })

    await waitFor(() => {
      const newGrid = screen.getByRole("grid")
      expect(newGrid).toHaveAttribute(
        "aria-label",
        expect.stringContaining("2023"),
      )
    })
  })

  test("onFocus focuses on value date for array value", async () => {
    await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={[new Date(2024, 5, 10)]}
        multiple
      />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })
  })

  test("onFocus focuses on start date for range value", async () => {
    await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={{
          end: new Date(2024, 5, 20),
          start: new Date(2024, 5, 10),
        }}
        range
      />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })
  })

  test("onFocus focuses on end date for range value with only end", async () => {
    await render(
      <Calendar.Root
        defaultMonth={new Date(2024, 5, 1)}
        defaultValue={{
          end: new Date(2024, 5, 20),
          start: undefined,
        }}
        range
      />,
    )

    const grid = screen.getByRole("grid")
    fireEvent.focus(grid)

    await waitFor(() => {
      expect(document.activeElement?.tagName).toBe("TD")
    })
  })
})
