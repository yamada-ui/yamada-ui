import type { Steps } from "./"
import { a11y, render, screen } from "../../../test"
import { Stepper } from "./"

export const steps: Steps = [
  {
    description: "Description for Step 1",
    title: "Step 1 Title",
  },
  {
    description: "Description for Step 2",
    title: "Step 2 Title",
  },
  {
    description: "Description for Step 3",
    title: "Step 3 Title",
  },
]

const props: Steps[number] = {
  hasSeparator: false,
  statusProps: {
    active: <span>active</span>,
    complete: <span>complete</span>,
    incomplete: <span>incomplete</span>,
  },
}

export const stepsWithProps: Steps = steps.map((step) => ({
  ...step,
  ...props,
}))

describe("<Stepper />", () => {
  test("renders with no errors", async () => {
    const { container } = render(<Stepper index={2} steps={steps} />)

    await a11y(container)
  })

  test("correctly renders empty step", () => {
    render(<Stepper index={0} steps={[{}]} />)

    screen.getByText(1)
  })

  test("renders with children", () => {
    render(
      <Stepper index={0} steps={steps}>
        Test
      </Stepper>,
    )
    screen.getByText("Test")
  })

  test("separator renders correctly", () => {
    const { rerender } = render(<Stepper index={0} steps={steps} />)
    expect(screen.getAllByRole("separator")).toHaveLength(2)

    rerender(<Stepper index={0} steps={stepsWithProps} />)
    expect(screen.queryAllByRole("separator")).toHaveLength(0)
  })

  test.each([
    { stepIndex: 0, stepStatus: ["active", "incomplete", "incomplete"] },
    { stepIndex: 1, stepStatus: ["complete", "active", "incomplete"] },
    { stepIndex: 2, stepStatus: ["complete", "complete", "active"] },
    { stepIndex: 3, stepStatus: ["complete", "complete", "complete"] },
  ])("stepper's statuses changes correctly", ({ stepIndex, stepStatus }) => {
    render(<Stepper index={stepIndex} steps={stepsWithProps} />)

    stepStatus.forEach((status, index) => {
      const stepTitle = `Step ${index + 1} Title`
      const step = screen.getByText(stepTitle)

      expect(step).toHaveAttribute("data-status", status)
    })
  })

  test("when the status properties are not specified, the default status behavior is applied", () => {
    const { container, rerender } = render(<Stepper index={0} steps={steps} />)

    screen.getByText(1)
    screen.getByText(2)
    screen.getByText(3)

    rerender(<Stepper index={1} steps={steps} />)

    container.querySelector("svg")
    screen.getByText(2)
    screen.getByText(3)

    rerender(<Stepper index={2} steps={steps} />)

    expect(container.querySelectorAll("svg")).toHaveLength(2)
    screen.getByText(3)

    rerender(<Stepper index={3} steps={steps} />)

    expect(container.querySelectorAll("svg")).toHaveLength(3)
  })
})
