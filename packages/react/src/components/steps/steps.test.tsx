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

  test("sets `displayName` correctly", () => {
    expect(Steps.Root.displayName).toBe("StepsRoot")
    expect(Steps.List.displayName).toBe("StepsList")
    expect(Steps.Item.displayName).toBe("StepsItem")
    expect(Steps.Indicator.displayName).toBe("StepsIndicator")
    expect(Steps.Number.displayName).toBe("StepsNumber")
    expect(Steps.Title.displayName).toBe("StepsTitle")
    expect(Steps.Description.displayName).toBe("StepsDescription")
    expect(Steps.Separator.displayName).toBe("StepsSeparator")
    expect(Steps.Contents.name).toBe("StepsContents")
    expect(Steps.Content.displayName).toBe("StepsContent")
    expect(Steps.CompletedContent.displayName).toBe("StepsCompletedContent")
    expect(Steps.PrevTrigger.displayName).toBe("StepsPrevTrigger")
    expect(Steps.NextTrigger.displayName).toBe("StepsNextTrigger")
  })

  test("sets `className` correctly", () => {
    render(<TestComponent />)

    const root = screen.getByTestId("root")
    const list = screen.getByRole("list")
    const item = screen.getAllByRole("listitem")[0]!
    const indicator = item.querySelector(".ui-steps__indicator")
    const number = item.querySelector(".ui-steps__number")
    const title = screen.getByRole("heading", { name: "Title A" })
    const description = screen.getByText("Description A")
    const separator = item.querySelector("[role='separator']")
    const content = screen.getByText("Content A")
    const completedContent = screen.getByTestId("completedContent")
    const prevTrigger = screen.getByRole("button", { name: /Prev/i })
    const nextTrigger = screen.getByRole("button", { name: /Next/i })

    expect(root).toHaveClass("ui-steps__root")
    expect(list).toHaveClass("ui-steps__list")
    expect(item).toHaveClass("ui-steps__item")
    expect(indicator).toHaveClass("ui-steps__indicator")
    expect(number).toHaveClass("ui-steps__number")
    expect(title).toHaveClass("ui-steps__title")
    expect(description).toHaveClass("ui-steps__description")
    expect(separator).toHaveClass("ui-steps__separator")
    expect(content).toHaveClass("ui-steps__content")
    expect(completedContent).toHaveClass("ui-steps__content--completed")
    expect(prevTrigger).toHaveClass("ui-steps__trigger--prev")
    expect(nextTrigger).toHaveClass("ui-steps__trigger--next")
  })

  test("renders HTML tag correctly", () => {
    render(<TestComponent />)

    const root = screen.getByTestId("root")
    const list = screen.getByRole("list")
    const item = screen.getAllByRole("listitem")[0]!
    const indicator = item.querySelector(".ui-steps__indicator")
    const number = item.querySelector(".ui-steps__number")
    const title = screen.getByRole("heading", { name: "Title A" })
    const description = screen.getByText("Description A")
    const separator = item.querySelector("[role='separator']")
    const content = screen.getByText("Content A")
    const completedContent = screen.getByTestId("completedContent")
    const prevTrigger = screen.getByRole("button", { name: /Prev/i })
    const nextTrigger = screen.getByRole("button", { name: /Next/i })

    expect(root.tagName).toBe("DIV")
    expect(list.tagName).toBe("OL")
    expect(item.tagName).toBe("LI")
    expect(indicator?.tagName).toBe("DIV")
    expect(number?.tagName).toBe("SPAN")
    expect(title.tagName).toBe("H3")
    expect(description.tagName).toBe("P")
    expect(separator?.tagName).toBe("DIV")
    expect(content.tagName).toBe("DIV")
    expect(completedContent.tagName).toBe("DIV")
    expect(prevTrigger.tagName).toBe("BUTTON")
    expect(nextTrigger.tagName).toBe("BUTTON")
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
