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
