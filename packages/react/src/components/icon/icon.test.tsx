import { FaMarkdown } from "react-icons/fa"
import { a11y, render } from "../../../test"
import { Icon } from "./icon"
import {
  CheckIcon,
  ChevronDownIcon,
  InfoIcon,
  TriangleAlertIcon,
  XIcon,
} from "./icons"

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
    { name: "Warning", Component: TriangleAlertIcon },
    { name: "Close", Component: XIcon },
    { name: "Chevron", Component: ChevronDownIcon },
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
