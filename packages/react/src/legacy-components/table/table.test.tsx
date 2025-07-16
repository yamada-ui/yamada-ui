import type { Column } from "."
import { PagingTable, Table } from "."
import { a11y, render, screen, waitFor } from "#test"

describe("<Table />", () => {
  const columns = [{ accessorKey: "name", header: "作品名" }]
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

  describe("Keyboard Navigation", () => {
    interface Data {
      name: string
      broadcastPeriod: string
      episode: string
    }

    const columns: Column<Data>[] = [
      {
        accessorKey: "name",
        header: "作品名",
      },
      {
        accessorKey: "broadcastPeriod",
        header: "放送期間",
      },
      {
        accessorKey: "episode",
        header: "話数",
      },
    ]

    const data: Data[] = [
      {
        name: "ドラゴンボール",
        broadcastPeriod: "1986年2月26日 - 1989年4月19日",
        episode: "全153話",
      },
      {
        name: "ドラゴンボールZ",
        broadcastPeriod: "1989年4月26日 - 1996年1月31日",
        episode: "全291話 + スペシャル2話",
      },
      {
        name: "ドラゴンボールGT",
        broadcastPeriod: "1996年2月7日 - 1997年11月19日",
        episode: "全64話 + 番外編1話",
      },
      {
        name: "ドラゴンボール改",
        broadcastPeriod: "2009年4月5日 - 2015年6月28日",
        episode: "全159話",
      },
      {
        name: "ドラゴンボール超",
        broadcastPeriod: "2015年7月5日 - 2018年3月25日",
        episode: "全131話",
      },
    ]

    test("if the `ArrowRight`/`ArrowLeft` keys are pressed, the focus should move to the next/previous column", async () => {
      const { user } = render(<Table columns={columns} data={data} />)

      const selectAllRowsCheckbox = await screen.findByRole("checkbox", {
        name: /Select all row/i,
      })
      expect(selectAllRowsCheckbox).toBeInTheDocument()

      await user.tab()
      expect(selectAllRowsCheckbox).toHaveFocus()

      await user.keyboard("{ArrowRight}")
      const nameHeaderCell = await screen.findByRole("columnheader", {
        name: /作品名/i,
      })
      expect(nameHeaderCell).toHaveFocus()

      await user.keyboard("{ArrowRight}")
      const broadcastPeriodHeaderCell = await screen.findByRole(
        "columnheader",
        { name: /放送期間/i },
      )
      expect(broadcastPeriodHeaderCell).toHaveFocus()

      await user.keyboard("{ArrowRight}")
      const episodeHeaderCell = await screen.findByRole("columnheader", {
        name: /話数/i,
      })
      expect(episodeHeaderCell).toHaveFocus()

      await user.keyboard("{ArrowLeft}")
      expect(broadcastPeriodHeaderCell).toHaveFocus()

      await user.keyboard("{ArrowLeft}")
      expect(nameHeaderCell).toHaveFocus()

      await user.keyboard("{ArrowLeft}")
      const selectAllRowsCheckbox2 = await screen.findByRole("checkbox", {
        name: /Select all row/i,
      })
      expect(selectAllRowsCheckbox2).toHaveFocus()
    })

    test("if the `ArrowDown`/`ArrowUp` keys are pressed, the focus should move to the next/previous row", async () => {
      const { user } = render(<Table columns={columns} data={data} />)

      const selectAllRowsCheckbox = await screen.findByRole("checkbox", {
        name: /Select all row/i,
      })
      expect(selectAllRowsCheckbox).toBeInTheDocument()

      await user.tab()
      expect(selectAllRowsCheckbox).toHaveFocus()

      await user.keyboard("{ArrowRight}")
      const nameHeaderCell = await screen.findByRole("columnheader", {
        name: /作品名/i,
      })
      expect(nameHeaderCell).toHaveFocus()

      await user.keyboard("{ArrowDown}")
      const dragonBallCell = await screen.findByRole("cell", {
        name: "ドラゴンボール",
      })
      expect(dragonBallCell).toHaveFocus()

      await user.keyboard("{ArrowDown}")
      const dragonBallZCell = await screen.findByRole("cell", {
        name: /ドラゴンボールZ/i,
      })
      expect(dragonBallZCell).toHaveFocus()

      await user.keyboard("{ArrowDown}")
      const dragonBallGTCell = await screen.findByRole("cell", {
        name: /ドラゴンボールGT/i,
      })
      expect(dragonBallGTCell).toHaveFocus()

      await user.keyboard("{ArrowDown}")
      const dragonBallKaiCell = await screen.findByRole("cell", {
        name: /ドラゴンボール改/i,
      })
      expect(dragonBallKaiCell).toHaveFocus()

      await user.keyboard("{ArrowDown}")
      const dragonBallSuperCell = await screen.findByRole("cell", {
        name: /ドラゴンボール超/i,
      })
      expect(dragonBallSuperCell).toHaveFocus()

      await user.keyboard("{ArrowUp}")
      expect(dragonBallKaiCell).toHaveFocus()

      await user.keyboard("{ArrowUp}")
      expect(dragonBallGTCell).toHaveFocus()

      await user.keyboard("{ArrowUp}")
      expect(dragonBallZCell).toHaveFocus()

      await user.keyboard("{ArrowUp}")
      expect(dragonBallCell).toHaveFocus()

      await user.keyboard("{ArrowUp}")
      expect(nameHeaderCell).toHaveFocus()
    })

    test("if the `End` key is pressed, the focus should move to the last column", async () => {
      const { user } = render(<Table columns={columns} data={data} />)

      const selectAllRowsCheckbox = await screen.findByRole("checkbox", {
        name: /Select all row/i,
      })
      expect(selectAllRowsCheckbox).toBeInTheDocument()

      await user.tab()
      expect(selectAllRowsCheckbox).toHaveFocus()

      await user.keyboard("{End}")
      const episodeHeaderCell = await screen.findByRole("columnheader", {
        name: /話数/i,
      })
      expect(episodeHeaderCell).toHaveFocus()
    })

    test("if the `Home` key is pressed, the focus should move to the first column", async () => {
      const { user } = render(<Table columns={columns} data={data} />)

      await user.tab()
      const selectAllRowsCheckbox = await screen.findByRole("checkbox", {
        name: /Select all row/i,
      })
      expect(selectAllRowsCheckbox).toHaveFocus()

      await user.keyboard("{End}")
      const episodeHeaderCell = await screen.findByRole("columnheader", {
        name: /話数/i,
      })
      expect(episodeHeaderCell).toHaveFocus()

      await user.keyboard("{Home}")
      const selectAllRowsCheckbox2 = await screen.findByRole("checkbox", {
        name: /Select all row/i,
      })
      expect(selectAllRowsCheckbox2).toHaveFocus()
    })

    test("if the `ArrowLeft` key is pressed on the first column, the focus should not move", async () => {
      const { user } = render(<Table columns={columns} data={data} />)

      const selectAllRowsCheckbox = await screen.findByRole("checkbox", {
        name: /Select all row/i,
      })
      expect(selectAllRowsCheckbox).toBeInTheDocument()

      await user.tab()
      expect(selectAllRowsCheckbox).toHaveFocus()

      await user.keyboard("{ArrowLeft}")
      expect(selectAllRowsCheckbox).toHaveFocus()
    })

    test("if the `ArrowRight` key is pressed on the last column, the focus should not move", async () => {
      const { user } = render(<Table columns={columns} data={data} />)

      const selectAllRowsCheckbox = await screen.findByRole("checkbox", {
        name: /Select all row/i,
      })
      expect(selectAllRowsCheckbox).toBeInTheDocument()

      await user.tab()
      expect(selectAllRowsCheckbox).toHaveFocus()

      await user.keyboard("{End}")
      const episodeHeaderCell = await screen.findByRole("columnheader", {
        name: /話数/i,
      })
      expect(episodeHeaderCell).toHaveFocus()

      await user.keyboard("{ArrowRight}")
      expect(episodeHeaderCell).toHaveFocus()
    })

    test("if the `ArrowUp` key is pressed on the first row, the focus should not move", async () => {
      const { user } = render(<Table columns={columns} data={data} />)

      const selectAllRowsCheckbox = await screen.findByRole("checkbox", {
        name: /Select all row/i,
      })
      expect(selectAllRowsCheckbox).toBeInTheDocument()

      await user.tab()
      expect(selectAllRowsCheckbox).toHaveFocus()

      await user.keyboard("{ArrowUp}")
      expect(selectAllRowsCheckbox).toHaveFocus()
    })

    test("if the `ArrowDown` key is pressed on the last row, the focus should not move", async () => {
      const { user } = render(<Table columns={columns} data={data} />)

      const selectAllRowsCheckbox = await screen.findByRole("checkbox", {
        name: /Select all row/i,
      })
      expect(selectAllRowsCheckbox).toBeInTheDocument()

      await user.tab()
      expect(selectAllRowsCheckbox).toHaveFocus()

      await user.keyboard("{ArrowRight}")
      const nameHeaderCell = await screen.findByRole("columnheader", {
        name: /作品名/i,
      })
      expect(nameHeaderCell).toHaveFocus()

      await user.keyboard("{ArrowDown}")
      const dragonBallCell = await screen.findByRole("cell", {
        name: "ドラゴンボール",
      })
      expect(dragonBallCell).toHaveFocus()

      await user.keyboard("{ArrowDown}")
      const dragonBallZCell = await screen.findByRole("cell", {
        name: /ドラゴンボールZ/i,
      })
      expect(dragonBallZCell).toHaveFocus()

      await user.keyboard("{ArrowDown}")
      const dragonBallGTCell = await screen.findByRole("cell", {
        name: /ドラゴンボールGT/i,
      })
      expect(dragonBallGTCell).toHaveFocus()

      await user.keyboard("{ArrowDown}")
      const dragonBallKaiCell = await screen.findByRole("cell", {
        name: /ドラゴンボール改/i,
      })
      expect(dragonBallKaiCell).toHaveFocus()

      await user.keyboard("{ArrowDown}")
      const dragonBallSuperCell = await screen.findByRole("cell", {
        name: /ドラゴンボール超/i,
      })
      expect(dragonBallSuperCell).toHaveFocus()

      await user.keyboard("{ArrowDown}")
      expect(dragonBallSuperCell).toHaveFocus()
    })

    test("if an unrelated key is pressed, focus should not move", async () => {
      const { user } = render(<Table columns={columns} data={data} />)

      const selectAllRowsCheckbox = await screen.findByRole("checkbox", {
        name: /Select all row/i,
      })
      expect(selectAllRowsCheckbox).toBeInTheDocument()

      await user.tab()
      expect(selectAllRowsCheckbox).toHaveFocus()

      await user.keyboard("b")
      expect(selectAllRowsCheckbox).toHaveFocus()
    })
  })
})

describe("<Tfoot />", () => {
  const columns = [
    {
      accessorKey: "name",
      footer: "作品名",
      header: "作品名",
    },
    {
      accessorKey: "broadcastPeriod",
      footer: "放送期間",
      header: "放送期間",
    },
    {
      accessorKey: "episode",
      footer: "話数",
      header: "話数",
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

  test("renders footer when withFooterSelect is provided", () => {
    const { container } = render(
      <Table columns={columns} data={data} withFooter withFooterSelect />,
    )

    const tfootElement = container.querySelector("tfoot")
    expect(tfootElement).toBeInTheDocument()

    const checkbox = tfootElement!.querySelector(
      "input[type='checkbox'].ui-checkbox__input",
    )
    expect(checkbox).toBeInTheDocument()
  })
})

describe("<PagingTable />", () => {
  const columns = [
    { accessorKey: "Name", header: "Name" },
    { accessorKey: "age", header: "Age" },
    { accessorKey: "email", header: "Email" },
  ]
  const data = [
    {
      age: 35,
      email: "goku@dbz.com",
      Name: "Goku",
    },
    {
      age: 37,
      email: "vegeta@dbz.com",
      Name: "Vegeta",
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
    const { getByTestId, user } = render(
      <PagingTable
        columns={columns}
        data={data}
        defaultPageIndex={0}
        defaultPageSize={1}
      >
        {({
          getCanNextPage,
          getCanPreviousPage,
          nextPage,
          pageIndex,
          pageSize,
          previousPage,
          setPageIndex,
          setPageSize,
          totalPage,
        }) => (
          <div>
            <p>Page: {pageIndex + 1}</p>
            <button
              data-testid="previous-button"
              disabled={!getCanPreviousPage()}
              onClick={previousPage}
            >
              Previous
            </button>
            <button
              data-testid="next-button"
              disabled={!getCanNextPage()}
              onClick={nextPage}
            >
              Next
            </button>
            <input
              type="number"
              data-testid="page-index-input"
              max={totalPage}
              min={1}
              value={pageSize}
              onChange={(e) => setPageIndex(parseInt(e.target.value) - 1)}
            />
            <select
              data-testid="page-size-select"
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
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

  test("renders custom pagination when children is not a function", () => {
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

  test.each([
    { size: "xl", expected: "lg" },
    { size: "lg", expected: "md" },
    { size: "md", expected: "sm" },
    { size: "sm", expected: "xs" },
  ])(
    "renders Select component with correct size when table size is $size",
    ({ size, expected }) => {
      render(<PagingTable size={size} columns={columns} data={data} />)
      expect(screen.getByText("Goku")).toHaveStyle(
        `font-size: var(--ui-fontSizes-${expected})`,
      )
    },
  )
})

describe("<Thead />", () => {
  const columns = [
    {
      accessorKey: "name",
      header: "作品名",
    },
    {
      accessorKey: "broadcastPeriod",
      columns: [
        {
          accessorKey: "firstBroadcast",
          header: "初回放送",
        },
        {
          accessorKey: "lastBroadcast",
          header: "最終回放送",
        },
      ],
      header: "放送期間",
    },
    {
      accessorKey: "episode",
      header: "話数",
    },
  ]
  const data = [
    {
      name: "ドラゴンボール超",
      episode: "全131話",
      firstBroadcast: "2015年7月5日",
      lastBroadcast: "2018年3月25日",
    },
  ]

  test("nested header renders correctly", () => {
    render(<Table columns={columns} data={data} />)
    expect(screen.getByText("初回放送")).toBeVisible()
    expect(screen.getByText("最終回放送")).toBeVisible()
  })
  test("data property renders correctly", () => {
    render(<Table columns={columns} data={data} />)
    expect(screen.getByText("2015年7月5日")).toBeVisible()
    expect(screen.getByText("2018年3月25日")).toBeVisible()
  })
})

describe("<Tbody />", () => {
  const columns = [
    { accessorKey: "Name", header: "Name" },
    { accessorKey: "age", header: "Age" },
    { accessorKey: "email", header: "Email" },
  ]
  const data = [
    {
      age: 35,
      email: "goku@dbz.com",
      Name: "Goku",
    },
  ]

  test("checkbox can be clicked and toggled", async () => {
    const { user } = render(<Table columns={columns} data={data} />)
    const checkbox = screen.getByLabelText("Select row")
    await waitFor(() => {
      expect(checkbox).not.toBeChecked()
    })
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  test("if rowsClickSelect is true, you can select a row by clicking on it", async () => {
    const { user } = render(
      <Table columns={columns} data={data} rowsClickSelect />,
    )
    const row = screen.getByRole("row", { name: /Goku/i })
    await waitFor(() => {
      expect(row).not.toHaveAttribute("aria-selected")
    })
    await user.click(row)
    expect(row).toHaveAttribute("aria-selected", "true")
  })

  test("When double-clicked, the handler receives information about the clicked row", async () => {
    const handler = vi.fn()
    const { user } = render(
      <Table columns={columns} data={data} onDoubleClickRow={handler} />,
    )

    const row = await screen.findByRole("row", { name: /Goku/i })
    await user.dblClick(row)

    expect(handler).toHaveBeenCalledWith(
      expect.objectContaining({ original: data[0] }),
    )
  })
})

describe("Sort", () => {
  const columns = [
    { accessorKey: "Name", header: "Name" },
    { accessorKey: "age", header: "Age" },
    { accessorKey: "email", header: "Email" },
  ]
  const data = [
    {
      age: 35,
      email: "goku@dbz.com",
      Name: "Goku",
    },
    {
      age: 37,
      email: "vegeta@dbz.com",
      Name: "Vegeta",
    },
  ]

  test("column header click cycles through sort states", async () => {
    const { user } = render(<Table columns={columns} data={data} />)
    const nameHeader = screen.getByText("Name")
    await waitFor(() => {
      expect(nameHeader.parentElement).toHaveAttribute("aria-sort", "none")
    })
    await user.click(nameHeader)
    expect(nameHeader.parentElement).toHaveAttribute("aria-sort", "ascending")
    await user.click(nameHeader)
    expect(nameHeader.parentElement).toHaveAttribute("aria-sort", "descending")
  })
})
