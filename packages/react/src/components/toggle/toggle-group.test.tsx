import { a11y, fireEvent, render, screen } from "#test"
import { ToggleGroup } from "."

describe("<ToggleGroup />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <ToggleGroup.Root>
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    expect(screen.getByRole("group")).toBeInTheDocument()
    expect(screen.getByText("Option 1")).toBeInTheDocument()
    expect(screen.getByText("Option 2")).toBeInTheDocument()
  })

  test("should update checked toggle when controlled value prop changes", () => {
    const { rerender } = render(
      <ToggleGroup.Root value="opt1">
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    expect(screen.getByText("Option 1")).toHaveAttribute("data-checked")
    expect(screen.getByText("Option 2")).not.toHaveAttribute("data-checked")

    rerender(
      <ToggleGroup.Root value="opt2">
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    expect(screen.getByText("Option 1")).not.toHaveAttribute("data-checked")
    expect(screen.getByText("Option 2")).toHaveAttribute("data-checked")

    rerender(
      <ToggleGroup.Root value={undefined}>
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    expect(screen.getByText("Option 1")).not.toHaveAttribute("data-checked")
    expect(screen.getByText("Option 2")).not.toHaveAttribute("data-checked")
  })

  test.each([{ defaultValue: "opt1" }, { defaultValue: ["opt1", "opt2"] }])(
    "should generate items with defaultValue $defaultValue",
    ({ defaultValue }) => {
      render(
        <ToggleGroup.Root<string | string[]>
          defaultValue={defaultValue}
          items={[
            {
              "aria-label": "Option 1",
              children: "Option 1",
              value: "opt1",
            },
            {
              "aria-label": "Option 2",
              children: <span>Option 2</span>,
              value: "opt2",
            },
          ]}
        />,
      )

      expect(screen.getAllByRole("button")).toHaveLength(2)
      expect(screen.getByText("Option 1")).toHaveAttribute(
        "aria-pressed",
        "true",
      )
      expect(screen.getByRole("button", { name: "Option 2" })).toHaveAttribute(
        "aria-pressed",
        String(Array.isArray(defaultValue)),
      )
      expect(screen.getByText("Option 2")).toBeInTheDocument()
      expect(screen.getByRole("group")).not.toHaveAttribute("items")
    },
  )

  test("should pass individual props to generated toggles", () => {
    render(
      <ToggleGroup.Root
        items={[
          {
            "aria-label": "Disabled option",
            disabled: true,
            icon: <span>Icon</span>,
            label: "Fallback name",
            value: "opt1",
          },
          {
            label: "Option 2",
            readOnly: true,
            value: "opt2",
          },
        ]}
      />,
    )

    expect(
      screen.getByRole("button", { name: "Disabled option" }),
    ).toBeDisabled()
    expect(screen.getByText("Icon")).toBeInTheDocument()
    expect(screen.queryByText("Fallback name")).not.toBeInTheDocument()
    expect(screen.queryByText("Option 2")).not.toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Option 2" })).toHaveAttribute(
      "data-readonly",
    )
  })

  test("should prefer children over items", () => {
    render(
      <ToggleGroup.Root items={[{ children: "Option 1", value: "opt1" }]}>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    expect(screen.queryByText("Option 1")).not.toBeInTheDocument()
    expect(screen.getByText("Option 2")).toBeInTheDocument()
    expect(screen.getAllByRole("button")).toHaveLength(1)
  })

  test("should update checked toggles when controlled array value prop changes", () => {
    const { rerender } = render(
      <ToggleGroup.Root value={[]}>
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    expect(screen.getByText("Option 1")).not.toHaveAttribute("data-checked")
    expect(screen.getByText("Option 2")).not.toHaveAttribute("data-checked")

    rerender(
      <ToggleGroup.Root value={["opt1", "opt2"]}>
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    expect(screen.getByText("Option 1")).toHaveAttribute("data-checked")
    expect(screen.getByText("Option 2")).toHaveAttribute("data-checked")
  })

  test("should call onChange callback with the correct value when a toggle is clicked", () => {
    const onChange = vi.fn()

    render(
      <ToggleGroup.Root onChange={onChange}>
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
        <ToggleGroup.Item value={undefined}>Option 3</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    fireEvent.click(screen.getByText("Option 1"))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith("opt1")

    fireEvent.click(screen.getByText("Option 2"))
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenLastCalledWith("opt2")

    fireEvent.click(screen.getByText("Option 3"))
    expect(onChange).toHaveBeenCalledTimes(2)
  })

  test("should call onChange callback with undefined when a checked toggle is clicked", () => {
    const onChange = vi.fn()

    render(
      <ToggleGroup.Root value="opt1" onChange={onChange}>
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    fireEvent.click(screen.getByText("Option 1"))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith(undefined)

    fireEvent.click(screen.getByText("Option 2"))
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenLastCalledWith("opt2")
  })

  test("should call onChange callback with updated array when toggles are clicked", () => {
    const onChange = vi.fn()

    render(
      <ToggleGroup.Root value={["opt1"]} onChange={onChange}>
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    fireEvent.click(screen.getByText("Option 1"))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith([])

    fireEvent.click(screen.getByText("Option 2"))
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenLastCalledWith(["opt1", "opt2"])
  })

  test("should call onChange callback when hidden checkbox is clicked", () => {
    const onChange = vi.fn()

    render(
      <ToggleGroup.Root defaultValue={[]} onChange={onChange}>
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    const checkbox = screen.getByRole("checkbox", { hidden: true })
    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenLastCalledWith(["opt1"])

    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenLastCalledWith([])
  })

  test("should set all toggles to readonly when readOnly prop is true", () => {
    render(
      <ToggleGroup.Root readOnly>
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    expect(screen.getByText("Option 1")).toHaveAttribute("data-readonly")
    expect(screen.getByText("Option 2")).toHaveAttribute("data-readonly")
  })

  test("should set the initial checked toggle based on the defaultValue prop", () => {
    render(
      <ToggleGroup.Root defaultValue="opt2">
        <ToggleGroup.Item value="opt1">Option 1</ToggleGroup.Item>
        <ToggleGroup.Item value="opt2">Option 2</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    expect(screen.getByText("Option 1")).not.toHaveAttribute("data-checked")
    expect(screen.getByText("Option 2")).toHaveAttribute("data-checked")
  })
})
