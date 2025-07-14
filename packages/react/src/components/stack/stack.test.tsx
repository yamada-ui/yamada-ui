import type { FC } from "react"
import { a11y, fireEvent, render, screen, waitFor } from "#test"
import { useEffect, useState } from "react"
import { Box } from "../box"
import { Flex } from "../flex"
import { Separator } from "../separator"
import { Stack } from "./stack"

describe("<Stack />", () => {
  test("renders stack correctly", async () => {
    await a11y(
      <Stack>
        <Box>Stack Item</Box>
      </Stack>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(Stack.displayName).toBe("Stack")
  })

  test("sets `className` correctly", () => {
    render(
      <Stack data-testid="stack">
        <Box>Stack Item</Box>
      </Stack>,
    )
    expect(screen.getByTestId("stack")).toHaveClass("ui-stack")
  })

  test("renders HTML tag correctly", () => {
    render(
      <Stack data-testid="stack">
        <Box>Stack Item</Box>
      </Stack>,
    )
    expect(screen.getByTestId("stack").tagName).toBe("DIV")
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
