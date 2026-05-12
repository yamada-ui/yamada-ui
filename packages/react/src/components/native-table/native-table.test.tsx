import type { FC } from "react"
import { a11y, render, screen } from "#test"
import { NativeTable } from "./"

describe("<NativeTable />", () => {
  const Table: FC<NativeTable.RootProps> = (props) => {
    return (
      <NativeTable.Root data-testid="root" {...props}>
        <NativeTable.Caption data-testid="caption" placement="start">
          Table Caption
        </NativeTable.Caption>

        <NativeTable.Colgroup data-testid="colgroup">
          <NativeTable.Col data-testid="col" />
        </NativeTable.Colgroup>

        <NativeTable.Thead data-testid="thead">
          <NativeTable.Tr data-testid="tr">
            <NativeTable.Th data-testid="th">First Name</NativeTable.Th>
            <NativeTable.Th>Last Name</NativeTable.Th>
            <NativeTable.Th numeric>Work</NativeTable.Th>
          </NativeTable.Tr>
        </NativeTable.Thead>

        <NativeTable.Tbody data-testid="tbody">
          <NativeTable.Tr>
            <NativeTable.Td data-testid="td">John</NativeTable.Td>
            <NativeTable.Td>Doe</NativeTable.Td>
            <NativeTable.Td numeric>Teacher</NativeTable.Td>
          </NativeTable.Tr>
        </NativeTable.Tbody>

        <NativeTable.Tfoot data-testid="tfoot">
          <NativeTable.Tr>
            <NativeTable.Th>First Name</NativeTable.Th>
            <NativeTable.Th>Last Name</NativeTable.Th>
            <NativeTable.Th numeric>Work</NativeTable.Th>
          </NativeTable.Tr>
        </NativeTable.Tfoot>
      </NativeTable.Root>
    )
  }

  test("renders component correctly", async () => {
    await a11y(<Table />)
  })

  test("renders Caption with `placement='end'` correctly", () => {
    render(
      <NativeTable.Root>
        <NativeTable.Caption data-testid="caption" placement="end">
          Table Caption
        </NativeTable.Caption>
      </NativeTable.Root>,
    )

    expect(screen.getByTestId("caption")).toHaveAttribute(
      "data-placement",
      "end",
    )
  })

  test("renders Caption with `placement='start'` correctly", () => {
    render(
      <NativeTable.Root>
        <NativeTable.Caption data-testid="caption" placement="start">
          Table Caption
        </NativeTable.Caption>
      </NativeTable.Root>,
    )

    expect(screen.getByTestId("caption")).toHaveAttribute(
      "data-placement",
      "start",
    )
  })

  test("renders numeric Th and Td with `data-numeric` correctly", () => {
    render(
      <NativeTable.Root>
        <NativeTable.Thead>
          <NativeTable.Tr>
            <NativeTable.Th data-testid="th-numeric" numeric>
              Work
            </NativeTable.Th>
          </NativeTable.Tr>
        </NativeTable.Thead>

        <NativeTable.Tbody>
          <NativeTable.Tr>
            <NativeTable.Td data-testid="td-numeric" numeric>
              Teacher
            </NativeTable.Td>
          </NativeTable.Tr>
        </NativeTable.Tbody>
      </NativeTable.Root>,
    )

    expect(screen.getByTestId("th-numeric")).toHaveAttribute("data-numeric")
    expect(screen.getByTestId("td-numeric")).toHaveAttribute("data-numeric")
  })

  test("renders with scroll area when `withScrollArea` is true", () => {
    render(
      <Table
        withScrollArea
        scrollAreaProps={{ "data-testid": "scroll-area" }}
      />,
    )

    expect(screen.getByTestId("scroll-area")).toBeInTheDocument()
    expect(screen.getByTestId("scroll-area").tagName).toBe("DIV")
    expect(screen.getByTestId("root").tagName).toBe("TABLE")
  })

  test("renders sub-components with correct HTML tags", () => {
    render(<Table />)

    expect(screen.getByTestId("root").tagName).toBe("TABLE")
    expect(screen.getByTestId("caption").tagName).toBe("CAPTION")
    expect(screen.getByTestId("colgroup").tagName).toBe("COLGROUP")
    expect(screen.getByTestId("col").tagName).toBe("COL")
    expect(screen.getByTestId("thead").tagName).toBe("THEAD")
    expect(screen.getByTestId("tbody").tagName).toBe("TBODY")
    expect(screen.getByTestId("tfoot").tagName).toBe("TFOOT")
    expect(screen.getByTestId("tr").tagName).toBe("TR")
    expect(screen.getByTestId("th").tagName).toBe("TH")
    expect(screen.getByTestId("td").tagName).toBe("TD")
  })
})
