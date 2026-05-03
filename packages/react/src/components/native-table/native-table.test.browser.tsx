import type { FC } from "react"
import { a11y, page, render } from "#test/browser"
import { NativeTable } from "./"

describe("<NativeTable />", () => {
  const Table: FC<NativeTable.RootProps> = (props) => {
    return (
      <NativeTable.Root data-testid="root" {...props}>
        <NativeTable.Caption data-testid="caption" placement="start">
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

  test("renders component correctly", async () => {
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

  test("NativeTable sets `className` correctly", async () => {
    await render(<Table />)
    await expect
      .element(page.getByTestId("root"))
      .toHaveClass("ui-native-table__root")
    await expect
      .element(page.getByTestId("caption"))
      .toHaveClass("ui-native-table__caption")
    await expect
      .element(page.getByTestId("thead"))
      .toHaveClass("ui-native-table__thead")
    await expect
      .element(page.getByTestId("tbody"))
      .toHaveClass("ui-native-table__tbody")
    await expect
      .element(page.getByTestId("tfoot"))
      .toHaveClass("ui-native-table__tfoot")
    await expect
      .element(page.getByTestId("tr"))
      .toHaveClass("ui-native-table__tr")
    await expect
      .element(page.getByTestId("th"))
      .toHaveClass("ui-native-table__th")
  })

  test("NativeTable renders HTML tag correctly", async () => {
    await render(<Table />)
    expect(page.getByTestId("root").element().tagName).toBe("TABLE")
    expect(page.getByTestId("caption").element().tagName).toBe("CAPTION")
    expect(page.getByTestId("thead").element().tagName).toBe("THEAD")
    expect(page.getByTestId("tbody").element().tagName).toBe("TBODY")
    expect(page.getByTestId("tfoot").element().tagName).toBe("TFOOT")
    expect(page.getByTestId("tr").element().tagName).toBe("TR")
    expect(page.getByTestId("th").element().tagName).toBe("TH")
  })

  test("renders with scroll area when withScrollArea is true", async () => {
    await render(
      <Table
        withScrollArea
        scrollAreaProps={{ "data-testid": "scroll-area" } as any}
      />,
    )
    await expect.element(page.getByTestId("scroll-area")).toBeInTheDocument()
    expect(page.getByTestId("scroll-area").element().tagName).toBe("DIV")
    expect(page.getByTestId("root").element().tagName).toBe("TABLE")
  })
})
