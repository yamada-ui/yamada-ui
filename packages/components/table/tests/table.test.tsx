import { render } from "@testing-library/react"
import { Table } from "@yamada-ui/table"
import { a11y } from "@yamada-ui/test"

describe("<Table />", () => {
  const columns = [{ header: "作品名", accessorKey: "name" }]
  const data = [{ name: "ドラゴンボール" }]

  test("Table renders correctly", async () => {
    const { container } = render(<Table columns={columns} data={data} />)
    await a11y(container)
  })

  test("columns property renders correctly", async () => {
    const { getByText } = render(<Table columns={columns} data={data} />)
    expect(getByText("作品名")).toBeVisible()
  })

  test("data property renders correctly", async () => {
    const { getByText } = render(<Table columns={columns} data={data} />)
    expect(getByText("ドラゴンボール")).toBeVisible()
  })
})
