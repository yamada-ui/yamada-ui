import { FaMarkdown } from "react-icons/fa"
import { a11y, render } from "../../../test"
import {
  CheckIcon,
  ChevronIcon,
  CloseIcon,
  Icon,
  InfoIcon,
  WarningIcon,
} from "./icon"

describe("<Icon />", () => {
  test("passes a11y test", async () => {
    await a11y(<Icon />)
  })

  test("passes a11y test given a third-party icon", async () => {
    await a11y(<Icon as={FaMarkdown} />)
  })

  const iconComponents = [
    { name: "Check", Component: CheckIcon },
    { name: "Info", Component: InfoIcon },
    { name: "Warning", Component: WarningIcon },
    { name: "Close", Component: CloseIcon },
    { name: "Chevron", Component: ChevronIcon },
  ]

  test.each(iconComponents)(
    "passes a11y test and render the $name Icon correctly",
    async ({ name, Component }) => {
      const testId = `${name.toLowerCase()}Icon`
      const { getByTestId } = render(<Component data-testid={testId} />)
      const iconElement = getByTestId(testId)
      expect(iconElement).toBeInTheDocument()
      await a11y(<Component />)
    },
  )
})
