import { a11y, fireEvent, render, screen } from "#test"
import { useEffect, useState } from "react"
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

  test("renders list of items with provided keys when cloning children", () => {
    const unmountMock = vi.fn()
    const data = [{ name: "Alice" }, { name: "Bob" }, { name: "Carol" }]

    const Character = ({
      name,
      onUnmount,
    }: {
      name: string
      onUnmount: (name: string) => void
    }) => {
      useEffect(() => {
        return () => {
          onUnmount(name)
        }
      }, [name, onUnmount])

      return <Box data-testid="character">{name}</Box>
    }

    const Wrapper = ({ items }: { items: { name: string }[] }) => {
      const [characters, setCharacters] = useState(items)

      return (
        <>
          <Box
            as="button"
            type="button"
            data-testid="delete-button"
            onClick={() => setCharacters((prev) => prev.slice(1))}
          >
            delete character
          </Box>
          <Stack separator={<Separator />}>
            {characters.map(({ name }) => (
              <Character key={name} name={name} onUnmount={unmountMock} />
            ))}
          </Stack>
        </>
      )
    }

    render(<Wrapper items={data} />)

    expect(screen.getAllByTestId("character")).toHaveLength(3)
    expect(unmountMock).not.toHaveBeenCalled()

    fireEvent.click(screen.getByTestId("delete-button"))

    expect(screen.getAllByTestId("character")).toHaveLength(2)
    expect(unmountMock).toHaveBeenCalledTimes(1)
    expect(unmountMock).toHaveBeenCalledWith("Alice")
  })
})
