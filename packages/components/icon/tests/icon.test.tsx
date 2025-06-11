import { a11y, render } from "@yamada-ui/test"
import { FaMarkdown } from "react-icons/fa"
import {
  CheckIcon,
  ChevronIcon,
  CloseIcon,
  Icon,
  InfoIcon,
  WarningIcon,
} from "../src"

describe("<Icon />", () => {
  test("passes a11y test", async () => {
    await a11y(<Icon />)
  })

  test("passes a11y test given a third-party icon", async () => {
    await a11y(<Icon as={FaMarkdown} />)
  })

  const iconComponents = [
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    { name: "Check", Component: CheckIcon },
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    { name: "Info", Component: InfoIcon },
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    { name: "Warning", Component: WarningIcon },
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    { name: "Close", Component: CloseIcon },
    // eslint-disable-next-line @typescript-eslint/no-deprecated
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
