import type { Steps } from "../src"

export const mockSteps: Steps = [
  {
    title: "Step 1 Title",
    description: "Description for Step 1",
  },
  {
    title: "Step 2 Title",
    description: "Description for Step 2",
  },
  {
    title: "Step 3 Title",
    description: "Description for Step 3",
  },
]

const extraProps = {
  statusProps: {
    complete: <span>complete</span>,
    active: <span>active</span>,
    incomplete: <span>incomplete</span>,
  },
  hasSeparator: false,
}

export const mockStepsWithExtraProps: Steps = mockSteps.map((step) => ({
  ...step,
  ...extraProps,
}))
