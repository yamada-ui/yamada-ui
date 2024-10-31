import type { FC } from "react"
import { a11y, fireEvent, render, screen, waitFor } from "@yamada-ui/test"
import { useEffect, useState } from "react"
import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Separator,
  SimpleGrid,
  Stack,
  VStack,
  ZStack,
} from "../src"

describe("<AspectRatio />", () => {
  test("passes a11y test", async () => {
    await a11y(
      <AspectRatio>
        <img src="https://image.xyz/source" alt="placeholder" />
      </AspectRatio>,
    )
  })
})

describe("<Box />", () => {
  test("passes a11y test", async () => {
    await a11y(<Box>Box</Box>)
  })

  test("as - prop works correctly", () => {
    render(
      <Box as="a" href="www.google.com">
        Box
      </Box>,
    )

    expect(screen.getByRole("link", { name: /Box/i })).toBeInTheDocument()
  })
})

describe("<Container />", () => {
  test("renders container correctly", () => {
    render(<Container>Container</Container>)
  })

  test("centerContent - prop works correctly", () => {
    render(<Container centerContent>Container</Container>)

    expect(screen.getByText("Container")).toHaveStyle({ alignItems: "center" })
  })
})

describe("<Flex />", () => {
  test("renders flex correctly", () => {
    render(<Flex>Flex</Flex>)
  })

  test("renders all the allowed shorthand style props", () => {
    render(
      <Flex
        align="stretch"
        basis="auto"
        direction="row"
        grow={1}
        justify="start"
        shrink={0}
        wrap="nowrap"
      >
        Flex
      </Flex>,
    )

    expect(screen.getByText("Flex")).toHaveStyle({
      alignItems: "stretch",
      flexBasis: "auto",
      flexDirection: "row",
      flexGrow: 1,
      flexShrink: 0,
      flexWrap: "nowrap",
      justifyContent: "start",
    })
  })
})

describe("<Separator />", () => {
  test("renders separator correctly", () => {
    render(<Separator />)
  })

  test("overrides the theming props", () => {
    render(<Separator variant="dashed" />)

    expect(screen.getByRole("separator")).toHaveStyle({ borderStyle: "dashed" })
  })

  test("renders vertically correctly", () => {
    render(<Separator orientation="vertical" />)

    expect(screen.getByRole("separator")).toHaveStyle({
      borderLeftWidth: "1px",
      height: "100%",
    })
  })
})

describe("<SimpleGrid />", () => {
  test("passes a11y test", async () => {
    await a11y(<SimpleGrid>GridSimple</SimpleGrid>)
  })

  test("minChildWidth - prop works correctly(minChildWidth prop takes precedence over the columns prop)", () => {
    render(
      <SimpleGrid columns={2} minChildWidth={{ base: "4" }}>
        SimpleGrid
      </SimpleGrid>,
    )

    expect(screen.getByText("SimpleGrid")).toHaveStyle({
      gridTemplateColumns: "repeat(auto-fit, minmax(1rem, 1fr))",
    })
  })

  test("columns - prop works correctly", () => {
    render(<SimpleGrid columns={3}>SimpleGrid</SimpleGrid>)
    expect(screen.getByText("SimpleGrid")).toHaveStyle({
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    })
  })
})

describe("<Stack />", () => {
  test("renders stack correctly", () => {
    render(<Stack>Stack</Stack>)
  })

  test("renders h-stack correctly", () => {
    render(<HStack data-testid="h-stack">HStack</HStack>)

    expect(screen.getByTestId("h-stack")).toHaveStyle({ flexDirection: "row" })
  })

  test("renders v-stack correctly", () => {
    render(<VStack data-testid="v-stack">VStack</VStack>)

    expect(screen.getByTestId("v-stack")).toHaveStyle({
      flexDirection: "column",
    })
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
        Stack
      </Stack>,
    )

    expect(screen.getByTestId("stack")).toHaveStyle({
      alignItems: "stretch",
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "start",
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

  interface ComponentProps {
    name?: string
    onUnmount?: (name: string) => void
  }

  const Component: FC<ComponentProps> = ({ name, onUnmount }) => {
    useEffect(() => {
      return () => {
        if (name && onUnmount) onUnmount(name)
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
    const unMountMock = vi.fn()

    const Wrapper = ({ data }: { data: { [key: string]: string }[] }) => {
      const [characters, setCharacters] = useState(data)

      return (
        <>
          <Box
            data-testid="delete-button"
            onClick={() => setCharacters((prev) => prev.slice(1))}
          >
            delete character
          </Box>

          <Stack separator={<Separator />}>
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
    render(
      <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)">
        Grid
      </Grid>,
    )

    expect(screen.getByText("Grid")).toHaveStyle({
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
    })
  })
})

describe("<GridItem />", () => {
  test("passes a11y test", async () => {
    await a11y(<GridItem>GridItem</GridItem>)
  })

  test("renders all the allowed shorthand style props", () => {
    render(
      <GridItem colSpan={2} rowSpan={2}>
        GridItem
      </GridItem>,
    )
    expect(screen.getByText("GridItem")).toHaveStyle({
      gridColumn: "span 2/span 2",
      gridRow: "span 2/span 2",
    })
  })
})

describe("<ZStack />", () => {
  test("ZStack renders correctly", () => {
    render(<ZStack>ZStack</ZStack>)
  })

  test("startIndex property works correctly", () => {
    render(
      <ZStack startIndex={10}>
        <Box>ZStack Item</Box>
      </ZStack>,
    )

    expect(screen.getByText("ZStack Item")).toHaveStyle({ zIndex: 10 })
  })

  test("Child elements are correctly overlaid and rendered", () => {
    render(
      <ZStack>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
      </ZStack>,
    )

    expect(screen.getByText("Item 1")).toHaveStyle({ position: "absolute" })
    expect(screen.getByText("Item 2")).toHaveStyle({ position: "absolute" })
  })

  test("Whether the direction is working properly", () => {
    render(
      <ZStack direction="right">
        <Box>Item 1</Box>
        <Box>Item 2</Box>
      </ZStack>,
    )
    expect(screen.getByText("Item 1")).toHaveStyle({
      position: "absolute",
      zIndex: 0,
    })
    expect(screen.getByText("Item 2")).toHaveStyle({
      position: "absolute",
      zIndex: 1,
    })
  })

  test("Whether the reverse is working properly", () => {
    render(
      <ZStack reverse>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
      </ZStack>,
    )
    expect(screen.getByText("Item 1")).toHaveStyle({
      position: "absolute",
      zIndex: 0,
    })
    expect(screen.getByText("Item 2")).toHaveStyle({
      position: "absolute",
      zIndex: 1,
    })
  })

  test("applies correct styles with direction set to top", () => {
    render(
      <ZStack direction="top">
        <Box>Box1</Box>
        <Box>Box2</Box>
      </ZStack>,
    )

    expect(screen.getByText("Box1")).toHaveStyle({
      left: 0,
      position: "absolute",
      zIndex: 0,
    })
    expect(screen.getByText("Box2")).toHaveStyle({
      left: 0,
      position: "absolute",
      zIndex: 1,
    })
  })

  test("applies correct styles with direction set to left", () => {
    render(
      <ZStack direction="left">
        <Box>Box1</Box>
        <Box>Box2</Box>
      </ZStack>,
    )

    expect(screen.getByText("Box1")).toHaveStyle({
      position: "absolute",
      top: 0,
      zIndex: 0,
    })
    expect(screen.getByText("Box2")).toHaveStyle({
      position: "absolute",
      top: 0,
      zIndex: 1,
    })
  })
})
