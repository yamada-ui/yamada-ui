import { a11y, render, screen } from "@yamada-ui/test"
import { Stepper } from "../src"
import { mockSteps, mockStepsWithExtraProps } from "./stepper.mocks"

describe("<Stepper />", () => {
  test("renders with no errors", async () => {
    const { container } = render(<Stepper index={2} steps={mockSteps} />)

    await a11y(container)
  })

  test("correctly renders empty step", async () => {
    render(<Stepper index={0} steps={[{}]} />)

    screen.getByText(1)
  })

  test("renders with children", () => {
    render(
      <Stepper index={0} steps={mockSteps}>
        Test
      </Stepper>,
    )
    screen.getByText("Test")
  })

  test("separator renders correctly", () => {
    const { rerender } = render(<Stepper index={0} steps={mockSteps} />)
    expect(screen.getAllByRole("separator")).toHaveLength(2)

    rerender(<Stepper index={0} steps={mockStepsWithExtraProps} />)
    expect(screen.queryAllByRole("separator")).toHaveLength(0)
  })

  test.each([
    { stepIndex: 0, stepStatus: ["active", "incomplete", "incomplete"] },
    { stepIndex: 1, stepStatus: ["complete", "active", "incomplete"] },
    { stepIndex: 2, stepStatus: ["complete", "complete", "active"] },
    { stepIndex: 3, stepStatus: ["complete", "complete", "complete"] },
  ])("stepper's statuses changes correctly", ({ stepIndex, stepStatus }) => {
    render(<Stepper index={stepIndex} steps={mockStepsWithExtraProps} />)

    stepStatus.forEach((status, index) => {
      const stepTitle = `Step ${index + 1} Title`
      const step = screen.getByText(stepTitle)

      expect(step).toHaveAttribute("data-status", status)
    })
  })

  test("when the status properties are not specified, the default status behavior is applied", () => {
    const { container, rerender } = render(
      <Stepper index={0} steps={mockSteps} />,
    )

    screen.getByText(1)
    screen.getByText(2)
    screen.getByText(3)

    rerender(<Stepper index={1} steps={mockSteps} />)

    container.querySelector("svg")
    screen.getByText(2)
    screen.getByText(3)

    rerender(<Stepper index={2} steps={mockSteps} />)

    expect(container.querySelectorAll("svg")).toHaveLength(2)
    screen.getByText(3)

    rerender(<Stepper index={3} steps={mockSteps} />)

    expect(container.querySelectorAll("svg")).toHaveLength(3)
  })
})
