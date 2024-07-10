import { PagingTable, Table } from "@yamada-ui/table"
import { render, screen, a11y } from "@yamada-ui/test"

describe("<Table />", () => {
  const columns = [{ header: "作品名", accessorKey: "name" }]
  const data = [{ name: "ドラゴンボール" }]

  test("Table renders correctly", async () => {
    await a11y(<Table columns={columns} data={data} />)
  })

  test("columns property renders correctly", () => {
    render(<Table columns={columns} data={data} />)
    expect(screen.getByText("作品名")).toBeVisible()
  })

  test("data property renders correctly", () => {
    render(<Table columns={columns} data={data} />)
    expect(screen.getByText("ドラゴンボール")).toBeVisible()
  })

  test("whether it works correctly when enableRowSelection is false", () => {
    render(<Table columns={columns} data={data} enableRowSelection={false} />)
    expect(screen.queryAllByRole("checkbox")).toHaveLength(0)
  })
})

describe("<Tfoot />", () => {
  const columns = [
    {
      header: "作品名",
      accessorKey: "name",
      footer: "作品名",
    },
    {
      header: "放送期間",
      accessorKey: "broadcastPeriod",
      footer: "放送期間",
    },
    {
      header: "話数",
      accessorKey: "episode",
      footer: "話数",
    },
  ]
  const data = [
    {
      name: "ドラゴンボール",
      broadcastPeriod: "1986年2月26日 - 1989年4月19日",
      episode: "全153話",
    },
  ]

  test("renders footer when withFooter is provided", () => {
    const { container } = render(
      <Table columns={columns} data={data} withFooter />,
    )
    const tfootElement = container.querySelector("tfoot")
    expect(tfootElement).toBeInTheDocument()
  })

  test("does not render footer when withFooter is not provided", () => {
    const { container } = render(<Table columns={columns} data={data} />)
    const tfootElement = container.querySelector("tfoot")
    expect(tfootElement).toBeNull()
  })
})

describe("<PagingTable />", () => {
  const columns = [
    { header: "Name", accessorKey: "Name" },
    { header: "Age", accessorKey: "age" },
    { header: "Email", accessorKey: "email" },
  ]
  const data = [
    {
      Name: "Goku",
      age: 35,
      email: "goku@dbz.com",
    },
    {
      Name: "Vegeta",
      age: 37,
      email: "vegeta@dbz.com",
    },
  ]

  test("columns property renders correctly", () => {
    render(<PagingTable columns={columns} data={data} />)
    expect(screen.getByText("Name")).toBeVisible()
    expect(screen.getByText("Age")).toBeVisible()
    expect(screen.getByText("Email")).toBeVisible()
  })

  test("data property renders correctly", () => {
    render(<PagingTable columns={columns} data={data} />)
    expect(screen.getByText("Goku")).toBeVisible()
    expect(screen.getByText("35")).toBeVisible()
    expect(screen.getByText("goku@dbz.com")).toBeVisible()
  })

  test("renders custom pagination when children is a function", async () => {
    const { user, getByTestId } = render(
      <PagingTable
        columns={columns}
        data={data}
        defaultPageSize={1}
        defaultPageIndex={0}
      >
        {({
          pageIndex,
          pageSize,
          totalPage,
          getCanNextPage,
          getCanPreviousPage,
          setPageIndex,
          previousPage,
          nextPage,
          setPageSize,
        }) => (
          <div>
            <p>Page: {pageIndex + 1}</p>
            <button
              onClick={previousPage}
              disabled={!getCanPreviousPage()}
              data-testid="previous-button"
            >
              Previous
            </button>
            <button
              onClick={nextPage}
              disabled={!getCanNextPage()}
              data-testid="next-button"
            >
              Next
            </button>
            <input
              type="number"
              value={pageSize}
              min={1}
              max={totalPage}
              data-testid="page-index-input"
              onChange={(e) => setPageIndex(parseInt(e.target.value) - 1)}
            />
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              data-testid="page-size-select"
            >
              {[1, 2, 3, 4, 5].map((size) => (
                <option key={size} value={size}>
                  {size} items per page
                </option>
              ))}
            </select>
          </div>
        )}
      </PagingTable>,
    )
    expect(screen.getByText("Name")).toBeVisible()
    expect(screen.getByText("Age")).toBeVisible()
    expect(screen.getByText("Email")).toBeVisible()

    expect(screen.getByText("Page: 1")).toBeVisible()
    expect(screen.getByRole("button", { name: "Previous" })).toBeDisabled()
    expect(screen.getByRole("button", { name: "Next" })).toBeEnabled()

    expect(screen.getByText("Goku")).toBeVisible()
    expect(screen.getByText("35")).toBeVisible()
    expect(screen.getByText("goku@dbz.com")).toBeVisible()

    await user.click(getByTestId("next-button"))
    expect(screen.getByText("Page: 2")).toBeVisible()
    expect(screen.getByRole("button", { name: "Previous" })).toBeEnabled()
    expect(screen.getByRole("button", { name: "Next" })).toBeDisabled()

    expect(screen.getByText("Vegeta")).toBeVisible()
    expect(screen.getByText("37")).toBeVisible()
    expect(screen.getByText("vegeta@dbz.com")).toBeVisible()

    await user.click(getByTestId("previous-button"))
    expect(screen.getByText("Page: 1")).toBeVisible()
    expect(screen.getByRole("button", { name: "Previous" })).toBeDisabled()
    expect(screen.getByRole("button", { name: "Next" })).toBeEnabled()

    user.click(getByTestId("page-index-input"))
    user.keyboard("2")
    expect(screen.getByText("Page: 1")).toBeVisible()
    expect(screen.getByRole("button", { name: "Previous" })).toBeDisabled()
    expect(screen.getByRole("button", { name: "Next" })).toBeEnabled()
    expect(screen.getByText("Goku")).toBeVisible()
    expect(screen.getByText("35")).toBeVisible()
    expect(screen.getByText("goku@dbz.com")).toBeVisible()
    expect(screen.queryByText("Vegeta")).toBeNull()
    expect(screen.queryByText("37")).toBeNull()
    expect(screen.queryByText("vegeta@dbz.com")).toBeNull()

    await user.selectOptions(getByTestId("page-size-select"), "2")
    expect(screen.getByText("Page: 1")).toBeVisible()
    expect(screen.getByText("Goku")).toBeVisible()
    expect(screen.getByText("Vegeta")).toBeVisible()
    expect(screen.getByRole("button", { name: "Previous" })).toBeDisabled()
    expect(screen.getByRole("button", { name: "Next" })).toBeDisabled()
  })

  test("renders custom pagination when children is not a function", async () => {
    render(
      <PagingTable columns={columns} data={data}>
        <div>customPagination</div>
      </PagingTable>,
    )
    expect(screen.getByText("Name")).toBeVisible()
    expect(screen.getByText("Age")).toBeVisible()
    expect(screen.getByText("Email")).toBeVisible()
    expect(screen.getByText("customPagination")).toBeVisible()
  })
})

describe("<Thead />", () => {
  const columns = [
    {
      header: "作品名",
      accessorKey: "name",
    },
    {
      header: "放送期間",
      accessorKey: "broadcastPeriod",
      columns: [
        {
          header: "初回放送",
          accessorKey: "firstBroadcast",
        },
        {
          header: "最終回放送",
          accessorKey: "lastBroadcast",
        },
      ],
    },
    {
      header: "話数",
      accessorKey: "episode",
    },
  ]
  const data = [
    {
      name: "ドラゴンボール超",
      firstBroadcast: "2015年7月5日",
      lastBroadcast: "2018年3月25日",
      episode: "全131話",
    },
  ]

  test("nested header renders collectly", () => {
    render(<Table columns={columns} data={data} />)
    expect(screen.getByText("初回放送")).toBeVisible()
    expect(screen.getByText("最終回放送")).toBeVisible()
  })
  test("data property renders collectly", () => {
    render(<Table columns={columns} data={data} />)
    expect(screen.getByText("2015年7月5日")).toBeVisible()
    expect(screen.getByText("2018年3月25日")).toBeVisible()
  })
})
