import type { Steps } from "../src"

export const mockSteps: Steps = [
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

const extraProps = {
  hasSeparator: false,
  statusProps: {
    active: <span>active</span>,
    complete: <span>complete</span>,
    incomplete: <span>incomplete</span>,
  },
}

export const mockStepsWithExtraProps: Steps = mockSteps.map((step) => ({
  ...step,
  ...extraProps,
}))
