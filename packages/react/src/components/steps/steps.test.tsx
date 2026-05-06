import type { FC } from "react"
import { useMemo } from "react"
import { a11y, render, screen } from "#test"
import { Steps } from "."
import { ButtonGroup } from "../button"
import { useSteps, useStepsItem } from "./use-steps"

interface TestComponentProps extends Steps.RootProps {
  itemProps?: Required<Steps.RootProps>["items"][number]
}

const TestComponent: FC<TestComponentProps> = ({ itemProps, ...rest }) => {
  const items: Steps.Item[] = useMemo(
    () =>
      [
        {
          content: "Content A",
          description: "Description A",
          title: "Title A",
        },
        {
          content: "Content B",
          description: "Description B",
          title: "Title B",
        },
        {
          content: "Content C",
          description: "Description C",
          title: "Title C",
        },
      ].map((item) => ({ ...item, ...itemProps })),
    [itemProps],
  )

  return (
    <Steps.Root data-testid="root" items={items} {...rest}>
      <Steps.List />
      <Steps.Contents />
      <Steps.CompletedContent data-testid="completedContent">
        Completed
      </Steps.CompletedContent>

      <ButtonGroup.Root>
        <Steps.PrevTrigger>
          <ButtonGroup.Item>Prev</ButtonGroup.Item>
        </Steps.PrevTrigger>
        <Steps.NextTrigger>
          <ButtonGroup.Item>Next</ButtonGroup.Item>
        </Steps.NextTrigger>
      </ButtonGroup.Root>
    </Steps.Root>
  )
}

describe("<Steps />", () => {
  test("renders component correctly", async () => {
    await a11y(<TestComponent />)
  })

  test("merges root props correctly in `useSteps.getRootProps`", async () => {
    const hookRef = vi.fn()
    const getterRef = vi.fn()
    const hookClick = vi.fn()
    const getterClick = vi.fn()

    const UseStepsRootProbe = () => {
      const { getRootProps } = useSteps({
        ref: hookRef,
        className: "hook-root",
        style: { padding: "1px" },
        onClick: hookClick,
      })

      return (
        <div
          data-testid="use-steps-root"
          {...getRootProps({
            ref: getterRef,
            className: "getter-root",
            style: { margin: "2px" },
            onClick: getterClick,
          })}
        />
      )
    }

    const { user } = render(<UseStepsRootProbe />)

    const root = screen.getByTestId("use-steps-root")

    expect(root).toHaveClass("hook-root")
    expect(root).toHaveClass("getter-root")
    expect(root).toHaveStyle({ padding: "1px" })
    expect(root).toHaveStyle({ margin: "2px" })

    await user.click(root)

    expect(hookRef).toHaveBeenCalledWith(root)
    expect(getterRef).toHaveBeenCalledWith(root)
    expect(hookClick).toHaveBeenCalledTimes(1)
    expect(getterClick).toHaveBeenCalledTimes(1)
  })

  test("merges item props correctly in `useStepsItem.getRootProps`", async () => {
    const hookRef = vi.fn()
    const getterRef = vi.fn()
    const hookClick = vi.fn()
    const getterClick = vi.fn()

    const UseStepsItemProbe = () => {
      const { getRootProps } = useStepsItem({
        ref: hookRef,
        className: "hook-item",
        style: { padding: "1px" },
        index: 0,
        onClick: hookClick,
      })

      return (
        <li
          data-testid="use-steps-item"
          {...getRootProps({
            ref: getterRef,
            className: "getter-item",
            style: { margin: "2px" },
            onClick: getterClick,
          })}
        />
      )
    }

    const { user } = render(
      <Steps.Root>
        <UseStepsItemProbe />
      </Steps.Root>,
    )

    const item = screen.getByTestId("use-steps-item")

    expect(item).toHaveClass("hook-item")
    expect(item).toHaveClass("getter-item")
    expect(item).toHaveStyle({ padding: "1px" })
    expect(item).toHaveStyle({ margin: "2px" })

    await user.click(item)

    expect(hookRef).toHaveBeenCalledWith(item)
    expect(getterRef).toHaveBeenCalledWith(item)
    expect(hookClick).toHaveBeenCalledTimes(1)
    expect(getterClick).toHaveBeenCalledTimes(1)
  })
})
