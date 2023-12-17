import type { Meta, StoryFn } from "@storybook/react"
import { TableCaption, Button, Text } from "@yamada-ui/react"
import type { Column, Sort } from "@yamada-ui/table"
import { Table } from "@yamada-ui/table"
import { useMemo, useState } from "react"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof Table>

const meta: Meta<typeof Table> = {
  title: "Components / Data Display / Table",
  component: Table,
}

export default meta

type Data = {
  name: string
  broadcastPeriod: string
  episode: string
}

export const basic: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return <Table columns={columns} data={data} />
}

export const withSize: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return (
    <>
      <Table size="sm" columns={columns} data={data} />
      <Table size="md" columns={columns} data={data} />
      <Table size="lg" columns={columns} data={data} />
      <Table size="xl" columns={columns} data={data} />
    </>
  )
}

export const withVariant: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return (
    <>
      <Table variant="simple" columns={columns} data={data} />
      <Table variant="striped" columns={columns} data={data} />
    </>
  )
}

export const withColorScheme: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return (
    <>
      {colorSchemes.map((colorScheme) => (
        <Table
          key={colorScheme}
          variant="striped"
          colorScheme={colorScheme}
          columns={columns}
          data={data}
        />
      ))}
    </>
  )
}

export const withColumnBorders: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return <Table columns={columns} data={data} withColumnBorders />
}

export const withBorder: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return <Table columns={columns} data={data} withBorder />
}

export const withHighlightOnHover: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return <Table columns={columns} data={data} highlightOnHover />
}

export const withCaption: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return (
    <>
      <Table variant="simple" columns={columns} data={data}>
        <TableCaption placement="top">
          ©バードスタジオ/集英社・東映アニメーション
        </TableCaption>
      </Table>
      <Table variant="striped" columns={columns} data={data}>
        <TableCaption placement="bottom">
          ©バードスタジオ/集英社・東映アニメーション
        </TableCaption>
      </Table>
    </>
  )
}

export const withFooter: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return (
    <>
      <Table columns={columns} data={data} withFooter />
      <Table columns={columns} data={data} withFooter withFooterSelect />
    </>
  )
}

export const withRowId: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return <Table columns={columns} data={data} rowId="name" />
}

export const withDefaultSort: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return (
    <Table
      columns={columns}
      data={data}
      rowId="name"
      defaultSort={[{ id: "name", desc: false }]}
      onChangeSort={(sort) => {
        console.log("sort", sort)
      }}
    />
  )
}

export const manualSort: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return (
    <Table
      columns={columns}
      data={data}
      rowId="name"
      manualSorting
      onChangeSort={(sort) => {
        console.log("sort", sort)
      }}
    />
  )
}

export const customControlSort: Story = () => {
  const [sort, onChangeSort] = useState<Sort<Data>>([])

  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return (
    <>
      <Button onClick={() => onChangeSort([])}>Reset sort</Button>

      <Table
        columns={columns}
        data={data}
        rowId="name"
        manualSorting
        sort={sort}
        onChangeSort={onChangeSort}
      />
    </>
  )
}

export const withMaxMultiSortColCount: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return (
    <Table
      columns={columns}
      data={data}
      rowId="name"
      maxMultiSortColCount={2}
      onChangeSort={(sort) => {
        console.log("sort", sort)
      }}
    />
  )
}

export const disabledSort: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
        enableSorting: false,
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return (
    <>
      <Table columns={columns} data={data} enableSorting={false} />

      <Table
        columns={columns}
        data={data}
        onChangeSort={(sort) => {
          console.log("sort", sort)
        }}
      />
    </>
  )
}

export const withSortDescFirst: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
        sortDescFirst: true,
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return (
    <>
      <Table
        columns={columns}
        data={data}
        sortDescFirst
        onChangeSort={(sort) => {
          console.log("sort", sort)
        }}
      />
      <Table
        columns={columns}
        data={data}
        onChangeSort={(sort) => {
          console.log("sort", sort)
        }}
      />
    </>
  )
}

export const disabledMultiSort: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return (
    <Table
      columns={columns}
      data={data}
      enableMultiSort={false}
      onChangeSort={(sort) => {
        console.log("sort", sort)
      }}
    />
  )
}

export const withDefaultSelectedRowIds: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return (
    <Table
      columns={columns}
      data={data}
      rowId="name"
      defaultSelectedRowIds={["ドラゴンボール"]}
      onChangeSelect={(selectedIds) => {
        console.log("selectedIds", selectedIds)
      }}
    />
  )
}

export const disabledRowIds: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return (
    <Table
      columns={columns}
      data={data}
      rowId="name"
      disabledRowIds={["ドラゴンボールZ"]}
      onChangeSelect={(selectedIds) => {
        console.log("selectedIds", selectedIds)
      }}
    />
  )
}

export const withRowsClickSelect: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return (
    <Table
      columns={columns}
      data={data}
      rowId="name"
      rowsClickSelect
      onChangeSelect={(selectedIds) => {
        console.log("selectedIds", selectedIds)
      }}
    />
  )
}

export const disabledSelect: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return <Table columns={columns} data={data} enableRowSelection={false} />
}

export const customControlSelect: Story = () => {
  const [selectedRowIds, onChangeSelect] = useState<string[]>([])

  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return (
    <>
      <Button onClick={() => onChangeSelect([])}>Reset select</Button>

      <Table
        columns={columns}
        data={data}
        rowId="name"
        selectedRowIds={selectedRowIds}
        onChangeSelect={onChangeSelect}
      />
    </>
  )
}

export const useClickRow: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return (
    <Table
      columns={columns}
      data={data}
      onClickRow={(row) => {
        console.log("row", row)
      }}
    />
  )
}

export const withCheckboxProps: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return (
    <Table
      columns={columns}
      data={data}
      checkboxProps={{ colorScheme: "red" }}
    />
  )
}

export const withSelectColumnProps: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return (
    <Table
      columns={columns}
      data={data}
      selectColumnProps={{ css: { w: "40px" } }}
    />
  )
}

export const disabledSelectColumn: Story = () => {
  const [selectedRowIds, onChangeSelect] = useState<string[]>([])

  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
      },
      {
        header: "話数",
        accessorKey: "episode",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return (
    <>
      <Text>Select ids {selectedRowIds.join(", ")}</Text>

      <Table
        columns={columns}
        data={data}
        selectColumnProps={false}
        rowsClickSelect
        selectedRowIds={selectedRowIds}
        onChangeSelect={onChangeSelect}
      />
    </>
  )
}

export const withColumnStyles: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
        css: { color: "primary" },
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
        sx: { color: "secondary" },
      },
      {
        header: "話数",
        accessorKey: "episode",
        style: { color: "red" },
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )

  return <Table columns={columns} data={data} />
}

export const customProps: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "作品名",
        accessorKey: "name",
        footer: "作品名",
        "aria-label": "作品名",
      },
      {
        header: "放送期間",
        accessorKey: "broadcastPeriod",
        footer: "放送期間",
        "aria-label": "放送期間",
      },
      {
        header: "話数",
        accessorKey: "episode",
        footer: "話数",
        "aria-label": "話数",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(
    () => [
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
    ],
    [],
  )
  return (
    <>
      <Table
        columns={columns}
        data={data}
        withFooter
        theadProps={{ bg: ["red.200", "red.700"] }}
        tbodyProps={{ bg: ["green.200", "green.700"] }}
        tfootProps={{ bg: ["blue.200", "blue.700"] }}
      />

      <Table
        columns={columns}
        data={data}
        withFooter
        headerGroupProps={{ bg: ["red.200", "red.700"] }}
        rowProps={{ bg: ["green.200", "green.700"] }}
        footerGroupProps={{ bg: ["blue.200", "blue.700"] }}
      />

      <Table
        columns={columns}
        data={data}
        withFooter
        headerProps={({ column }) => {
          if (column.columnDef.header === "作品名")
            return { color: ["red.400", "red.300"] }
        }}
        cellProps={({ column }) => {
          if (column.columnDef.header === "作品名")
            return { color: ["red.400", "red.300"] }
        }}
        footerProps={({ column }) => {
          if (column.columnDef.footer === "作品名")
            return { color: ["red.400", "red.300"] }
        }}
      />
    </>
  )
}
