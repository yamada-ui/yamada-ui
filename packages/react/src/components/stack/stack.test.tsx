import type { FC } from "react"
import { a11y, page, render } from "#test/browser"
import { useEffect, useState } from "react"
import { Box } from "../box"
import { Flex } from "../flex"
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

  test("sets `displayName` correctly", () => {
    expect(Stack.displayName).toBe("Stack")
  })

  test("sets `className` correctly", async () => {
    await render(
      <Stack data-testid="stack">
        <Box>Stack Item</Box>
      </Stack>,
    )
    await expect.element(page.getByTestId("stack")).toHaveClass("ui-stack")
  })

  test("renders HTML tag correctly", async () => {
    await render(
      <Stack data-testid="stack">
        <Box>Stack Item</Box>
      </Stack>,
    )
    expect(page.getByTestId("stack").element().tagName).toBe("DIV")
  })

  test("renders all the allowed shorthand style props", async () => {
    await render(
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

    await expect.element(page.getByTestId("stack")).toHaveStyle({
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
    await render(
      <Stack>
        {data.map(({ name }) => (
          <Component key={name} name={name} />
        ))}
      </Stack>,
    )

    const items = page.getByTestId("character").elements()
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

    const { user } = await render(<Wrapper data={data} />)

    const items = page.getByTestId("character").elements()

    expect(items).toHaveLength(6)
    expect(unMountMock).not.toHaveBeenCalled()

    await user.click(page.getByTestId("delete-button"))
    await expect.poll(() => unMountMock.mock.calls.length).toBe(1)
    expect(unMountMock).toHaveBeenCalledExactlyOnceWith("孫悟空")

    expect(unMountMock).toHaveBeenCalledTimes(1)
  })
})
