import { a11y, render, screen } from "#test"
import { Box } from "../box"
import { Separator } from "../separator"
import { Stack } from "./stack"

describe("<Stack />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Stack>
        <Box>Stack Item</Box>
      </Stack>,
    )
  })

  test("renders all the allowed shorthand style props", () => {
    render(
      <Stack
        data-testid="stack"
        align="stretch"
        direction="row"
        justify="start"
        wrap="nowrap"
      >
        <Box>Stack Item</Box>
      </Stack>,
    )

    expect(screen.getByTestId("stack")).toHaveStyle({
      alignItems: "stretch",
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "start",
    })
  })

  test("renders separator between children with column direction", () => {
    render(
      <Stack data-testid="stack" separator={<Separator data-testid="sep" />}>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </Stack>,
    )

    expect(screen.getAllByTestId("sep")).toHaveLength(2)
  })

  test("renders separator between children with row direction", () => {
    render(
      <Stack
        data-testid="stack"
        direction="row"
        separator={<Separator data-testid="sep" />}
      >
        <Box>Item 1</Box>
        <Box>Item 2</Box>
      </Stack>,
    )

    expect(screen.getAllByTestId("sep")).toHaveLength(1)
  })
})
