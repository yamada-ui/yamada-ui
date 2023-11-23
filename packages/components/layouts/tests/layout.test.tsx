import { render, a11y, screen, fireEvent, waitFor } from "@yamada-ui/test"
import { useState, useEffect, FC } from "react"
import {
  Box,
  Container,
  Flex,
  Divider,
  Stack,
  HStack,
  VStack,
  Grid,
} from "../src"

describe("<Box />", () => {
  test("passes a11y test", async () => {
    await a11y(<Box>Box</Box>)
  })

  test("as - prop works correctly", () => {
    const { getByText } = render(
      <Box as="a" href="www.google.com">
        Box
      </Box>,
    )

    expect(getByText("Box").nodeName).toBe("A")
  })
})

describe("<Container />", () => {
  test("renders container correctly", () => {
    render(<Container>Container</Container>)
  })

  test("centerContent - prop works correctly", () => {
    const { getByText } = render(<Container centerContent>Container</Container>)

    expect(getByText("Container")).toHaveStyle({ alignItems: "center" })
  })
})

describe("<Flex />", () => {
  test("renders flex correctly", () => {
    render(<Flex>Flex</Flex>)
  })

  test("renders all the allowed shorthand style props", () => {
    const { getByText } = render(
      <Flex
        direction="row"
        justify="start"
        align="stretch"
        wrap="nowrap"
        basis="auto"
        grow={1}
        shrink={0}
      >
        Flex
      </Flex>,
    )

    expect(getByText("Flex")).toHaveStyle({
      flexDirection: "row",
      justifyContent: "start",
      alignItems: "stretch",
      flexWrap: "nowrap",
      flexBasis: "auto",
      flexGrow: 1,
      flexShrink: 0,
    })
  })
})

describe("<Divider />", () => {
  test("renders divider correctly", () => {
    render(<Divider />)
  })

  test("overrides the theming props", () => {
    const { getByTestId } = render(
      <Divider data-testid="divider" variant="dashed" />,
    )

    expect(getByTestId("divider")).toHaveStyle({ borderStyle: "dashed" })
  })

  test("renders vertically correctly", () => {
    const { getByTestId } = render(
      <Divider data-testid="divider" orientation="vertical" />,
    )

    expect(getByTestId("divider")).toHaveStyle({
      borderLeftWidth: "1px",
      height: "100%",
    })
  })
})

describe("<Stack />", () => {
  test("renders stack correctly", () => {
    render(<Stack>Stack</Stack>)
  })

  test("renders h-stack correctly", () => {
    const { getByTestId } = render(
      <HStack data-testid="h-stack">HStack</HStack>,
    )

    expect(getByTestId("h-stack")).toHaveStyle({ flexDirection: "row" })
  })

  test("renders v-stack correctly", () => {
    const { getByTestId } = render(
      <VStack data-testid="v-stack">VStack</VStack>,
    )

    expect(getByTestId("v-stack")).toHaveStyle({ flexDirection: "column" })
  })

  test("renders all the allowed shorthand style props", () => {
    const { getByTestId } = render(
      <Stack
        data-testid="stack"
        direction="row"
        justify="start"
        align="stretch"
        wrap="nowrap"
      >
        Stack
      </Stack>,
    )

    expect(getByTestId("stack")).toHaveStyle({
      flexDirection: "row",
      justifyContent: "start",
      alignItems: "stretch",
      flexWrap: "nowrap",
    })
  })

  const data = [
    { name: "孫悟空" },
    { name: "ベジータ" },
    { name: "フリーザ" },
    { name: "ナッパ" },
    { name: "クリリン" },
    { name: "ギニュー" },
  ]

  type ComponentProps = {
    name: string
    onUnmount?: (v: string) => void
  }

  const Component: FC<ComponentProps> = ({ name, onUnmount }) => {
    useEffect(() => {
      return () => {
        if (onUnmount) onUnmount(name)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <Flex data-testid="character">{name}</Flex>
  }

  test("renders list of items correctly", async () => {
    render(
      <Stack>
        {data.map(({ name }) => (
          <Component key={name} name={name} />
        ))}
      </Stack>,
    )

    const items = await screen.findAllByTestId("character")

    expect(items).toHaveLength(6)
  })

  test("renders list of items with provided keys when cloning children", async () => {
    const unMountMock = jest.fn()

    const Wrapper = ({ data }: { data: Record<string, string>[] }) => {
      const [characters, setCharacters] = useState(data)

      return (
        <>
          <Box
            data-testid="delete-button"
            onClick={() => setCharacters((prev) => prev.slice(1))}
          >
            delete character
          </Box>

          <Stack divider={<Divider />}>
            {characters.map(({ name }) => (
              <Component key={name} name={name} onUnmount={unMountMock} />
            ))}
          </Stack>
        </>
      )
    }

    render(<Wrapper data={data} />)

    const items = await screen.findAllByTestId("character")

    expect(items).toHaveLength(6)
    expect(unMountMock).not.toHaveBeenCalled()

    const onClick = await screen.findByTestId("delete-button")

    fireEvent.click(onClick)

    await waitFor(() => {
      expect(unMountMock).toHaveBeenCalledWith("孫悟空")
    })

    expect(unMountMock).toHaveBeenCalledTimes(1)
  })
})

describe("<Grid />", () => {
  test("renders grid correctly", () => {
    render(<Grid>Grid</Grid>)
  })

  test("renders all the allowed shorthand style props", () => {
    const { getByTestId } = render(
      <Grid
        data-testid="grid"
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(2, 1fr)"
      >
        Grid
      </Grid>,
    )

    expect(getByTestId("grid")).toHaveStyle({
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
    })
  })
})
