import { a11y, render, screen } from "../../../test"
import { Stepper } from "./"

export const steps: Stepper.Steps = [
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

const props: Stepper.Steps[number] = {
  hasSeparator: false,
  statusProps: {
    active: <span>active</span>,
    complete: <span>complete</span>,
    incomplete: <span>incomplete</span>,
  },
}

export const stepsWithProps: Stepper.Steps = steps.map((step) => ({
  ...step,
  ...props,
}))

describe("<Stepper />", () => {
  test("renders with no errors", async () => {
    const { container } = render(<Stepper.Root index={2} steps={steps} />)

    await a11y(container)
  })

  test("sets `displayName` correctly", () => {
    expect(Stepper.Root.displayName).toBe("StepperRoot")
    expect(Stepper.Step.displayName).toBe("StepperStep")
    expect(Stepper.StepStatus.displayName).toBe("StepperStatus")
    expect(Stepper.StepNumber.displayName).toBe("StepperNumber")
    expect(Stepper.StepIcon.displayName).toBe("StepperIcon")
    expect(Stepper.StepDescription.displayName).toBe("StepperDescription")
    expect(Stepper.StepSeparator.displayName).toBe("StepperSeparator")
    expect(Stepper.StepTitle.displayName).toBe("StepperTitle")
  })

  test("sets `className` correctly", () => {
    render(
      <Stepper.Root data-testid="root" index={0}>
        {steps.map(({ description, title }, index) => (
          <Stepper.Step key={index} data-testid="step">
            <Stepper.StepStatus data-testid="status" />
            <Stepper.StepTitle data-testid="title">{title}</Stepper.StepTitle>
            <Stepper.StepDescription data-testid="description">
              {description}
            </Stepper.StepDescription>
            <Stepper.StepSeparator data-testid="separator" />
          </Stepper.Step>
        ))}
      </Stepper.Root>,
    )
    expect(screen.getByTestId("root")).toHaveClass("ui-stepper__root")

    const stepEls = screen.getAllByTestId("step")
    stepEls.forEach((el) => expect(el).toHaveClass("ui-stepper__step"))

    const statusEls = screen.getAllByTestId("status")
    statusEls.forEach((el) => {
      expect(el).toHaveClass("ui-stepper__status")
    })

    const titleEls = screen.getAllByTestId("title")
    titleEls.forEach((el) => {
      expect(el).toHaveClass("ui-stepper__title")
    })

    const descriptionEls = screen.getAllByTestId("description")
    descriptionEls.forEach((el) => {
      expect(el).toHaveClass("ui-stepper__description")
    })

    const separatorEls = screen.getAllByTestId("separator")
    separatorEls.forEach((el) => {
      expect(el).toHaveClass("ui-stepper__separator")
    })
  })

  test("correctly renders empty step", () => {
    render(<Stepper.Root index={0} steps={[{}]} />)

    screen.getByText(1)
  })

  test("renders with children", () => {
    render(
      <Stepper.Root index={0} steps={steps}>
        Test
      </Stepper.Root>,
    )
    screen.getByText("Test")
  })

  test("separator renders correctly", () => {
    const { rerender } = render(<Stepper.Root index={0} steps={steps} />)
    expect(screen.getAllByRole("separator")).toHaveLength(2)

    rerender(<Stepper.Root index={0} steps={stepsWithProps} />)
    expect(screen.queryAllByRole("separator")).toHaveLength(0)
  })

  test.each([
    { stepIndex: 0, stepStatus: ["active", "incomplete", "incomplete"] },
    { stepIndex: 1, stepStatus: ["complete", "active", "incomplete"] },
    { stepIndex: 2, stepStatus: ["complete", "complete", "active"] },
    { stepIndex: 3, stepStatus: ["complete", "complete", "complete"] },
  ])("stepper's statuses changes correctly", ({ stepIndex, stepStatus }) => {
    render(<Stepper.Root index={stepIndex} steps={stepsWithProps} />)

    stepStatus.forEach((status, index) => {
      const stepTitle = `Step ${index + 1} Title`
      const step = screen.getByText(stepTitle)

      expect(step).toHaveAttribute("data-status", status)
    })
  })

  test("when the status properties are not specified, the default status behavior is applied", () => {
    const { container, rerender } = render(
      <Stepper.Root index={0} steps={steps} />,
    )

    screen.getByText(1)
    screen.getByText(2)
    screen.getByText(3)

    rerender(<Stepper.Root index={1} steps={steps} />)

    container.querySelector("svg")
    screen.getByText(2)
    screen.getByText(3)

    rerender(<Stepper.Root index={2} steps={steps} />)

    expect(container.querySelectorAll("svg")).toHaveLength(2)
    screen.getByText(3)

    rerender(<Stepper.Root index={3} steps={steps} />)

    expect(container.querySelectorAll("svg")).toHaveLength(3)
  })
})
