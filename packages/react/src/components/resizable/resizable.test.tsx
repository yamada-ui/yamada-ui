import { a11y, render, screen } from "#test"
import { GripVerticalIcon } from "../icon"
import { Resizable } from "./"

describe("<Resizable />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Resizable.Root>
        <Resizable.Item>One</Resizable.Item>
        <Resizable.Trigger />

        <Resizable.Item>Two</Resizable.Item>
      </Resizable.Root>,
    )
  })
})

describe("<ResizableTriggerIcon />", () => {
  test("icon renders correctly", () => {
    render(
      <Resizable.Root>
        <Resizable.Item>One</Resizable.Item>

        <Resizable.Trigger
          id="trigger"
          icon={<GripVerticalIcon data-testid="icon" />}
        />

        <Resizable.Item>Two</Resizable.Item>
      </Resizable.Root>,
    )
    expect(screen.getByTestId("trigger")).toBeInTheDocument()
    expect(screen.getByTestId("icon")).toBeInTheDocument()
  })
})
