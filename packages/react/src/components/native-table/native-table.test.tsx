import type { FC } from "react"
import { a11y, render, screen } from "../../../test"
import { NativeTable } from "./"

describe("<NativeTable />", () => {
  const Table: FC<NativeTable.RootProps> = (props) => {
    return (
      <NativeTable.Root data-testid="root" {...props}>
        <NativeTable.Caption data-testid="caption" placement="top">
          Table Caption
        </NativeTable.Caption>

        <NativeTable.Thead data-testid="thead">
          <NativeTable.Tr data-testid="tr">
            <NativeTable.Th data-testid="th">First Name</NativeTable.Th>
            <NativeTable.Th>Last Name</NativeTable.Th>
            <NativeTable.Th numeric>Work</NativeTable.Th>
          </NativeTable.Tr>
        </NativeTable.Thead>

        <NativeTable.Tbody data-testid="tbody">
          <NativeTable.Tr>
            <NativeTable.Td>John</NativeTable.Td>
            <NativeTable.Td>Doe</NativeTable.Td>
            <NativeTable.Td>Teacher</NativeTable.Td>
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

  test("NativeTable renders correctly", async () => {
    await a11y(<Table />)
  })

  test("NativeTable sets `displayName` correctly", () => {
    expect(NativeTable.Root.displayName).toBe("NativeTableRoot")
    expect(NativeTable.Caption.displayName).toBe("NativeTableCaption")
    expect(NativeTable.Thead.displayName).toBe("NativeTableThead")
    expect(NativeTable.Tbody.displayName).toBe("NativeTableTbody")
    expect(NativeTable.Tfoot.displayName).toBe("NativeTableTfoot")
    expect(NativeTable.Tr.displayName).toBe("NativeTableTr")
    expect(NativeTable.Th.displayName).toBe("NativeTableTh")
    expect(NativeTable.Td.displayName).toBe("NativeTableTd")
  })

  test("NativeTable sets `className` correctly", () => {
    render(<Table />)
    expect(screen.getByTestId("root")).toHaveClass("ui-native-table__root")
    expect(screen.getByTestId("caption")).toHaveClass(
      "ui-native-table__caption",
    )
    expect(screen.getByTestId("thead")).toHaveClass("ui-native-table__thead")
    expect(screen.getByTestId("tbody")).toHaveClass("ui-native-table__tbody")
    expect(screen.getByTestId("tfoot")).toHaveClass("ui-native-table__tfoot")
    expect(screen.getByTestId("tr")).toHaveClass("ui-native-table__tr")
    expect(screen.getByTestId("th")).toHaveClass("ui-native-table__th")
  })

  test("NativeTable renders HTML tag correctly", () => {
    render(<Table />)
    expect(screen.getByTestId("root").tagName).toBe("TABLE")
    expect(screen.getByTestId("caption").tagName).toBe("CAPTION")
    expect(screen.getByTestId("thead").tagName).toBe("THEAD")
    expect(screen.getByTestId("tbody").tagName).toBe("TBODY")
    expect(screen.getByTestId("tfoot").tagName).toBe("TFOOT")
    expect(screen.getByTestId("tr").tagName).toBe("TR")
    expect(screen.getByTestId("th").tagName).toBe("TH")
  })
})
