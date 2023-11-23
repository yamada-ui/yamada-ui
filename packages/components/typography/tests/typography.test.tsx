import { render } from "@yamada-ui/test"
import { Heading, Text } from "../src"

describe("<Heading />", () => {
  test("renders heading correctly", () => {
    render(<Heading>Heading</Heading>)
  })

  test("as - prop works correctly", () => {
    const { getByText } = render(
      <Heading as="a" href="www.google.com">
        Heading
      </Heading>,
    )

    expect(getByText("Heading").nodeName).toBe("A")
  })
})

describe("<Text />", () => {
  test("renders text correctly", () => {
    render(<Text>Text</Text>)
  })

  test("as - prop works correctly", () => {
    const { getByText } = render(
      <Text as="a" href="www.google.com">
        Text
      </Text>,
    )

    expect(getByText("Text").nodeName).toBe("A")
  })
})
