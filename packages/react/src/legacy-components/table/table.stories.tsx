import type { Meta, StoryFn } from "@storybook/react"
import type { Column, Sort } from "."
import { COLOR_SCHEMES } from "@yamada-ui/utils"
import { useMemo, useState } from "react"
import { Table } from "."
import { Button } from "../../components/button"
import { Text } from "../../components/text"
import { Link } from "../link"
import { TableCaption } from "../native-table"

type Story = StoryFn<typeof Table>

const meta: Meta<typeof Table> = {
  component: Table,
  title: "Components / Table",
}

export default meta

interface Data {
  name: string
  broadcastPeriod: string
  episode: string
}

export const Basic: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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

export const WithSize: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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

export const WithVariant: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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

export const WithColorScheme: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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
      {COLOR_SCHEMES.map((colorScheme) => (
        <Table
          key={colorScheme}
          colorScheme={colorScheme}
          variant="striped"
          columns={columns}
          data={data}
        />
      ))}
    </>
  )
}

export const WithColumnBorders: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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

export const WithBorder: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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

export const WithHighlightOnHover: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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

export const WithCaption: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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

export const WithFooter: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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

export const WithRowId: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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

export const WithRowHeader: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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

  return <Table columns={columns} data={data} rowHeader="name" />
}

export const WithDefaultSort: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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
      defaultSort={[{ id: "name", desc: false }]}
      rowId="name"
      onChangeSort={(sort) => {
        console.log("sort", sort)
      }}
    />
  )
}

export const ManualSort: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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
      manualSorting
      rowId="name"
      onChangeSort={(sort) => {
        console.log("sort", sort)
      }}
    />
  )
}

export const CustomControlSort: Story = () => {
  const [sort, onChangeSort] = useState<Sort<Data>>([])

  const columns = useMemo<Column<Data>[]>(
    () => [
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
        manualSorting
        rowId="name"
        sort={sort}
        onChangeSort={onChangeSort}
      />
    </>
  )
}

export const WithMaxMultiSortColCount: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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
      maxMultiSortColCount={2}
      rowId="name"
      onChangeSort={(sort) => {
        console.log("sort", sort)
      }}
    />
  )
}

export const DisabledSort: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        accessorKey: "name",
        header: "作品名",
      },
      {
        accessorKey: "broadcastPeriod",
        enableSorting: false,
        header: "放送期間",
      },
      {
        accessorKey: "episode",
        header: "話数",
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

export const WithSortDescFirst: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        accessorKey: "name",
        header: "作品名",
        sortDescFirst: true,
      },
      {
        accessorKey: "broadcastPeriod",
        header: "放送期間",
      },
      {
        accessorKey: "episode",
        header: "話数",
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

export const DisabledMultiSort: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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

export const WithDefaultSelectedRowIds: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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
      defaultSelectedRowIds={["ドラゴンボール"]}
      rowId="name"
      onChangeSelect={(selectedIds) => {
        console.log("selectedIds", selectedIds)
      }}
    />
  )
}

export const DisabledRowIds: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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
      disabledRowIds={["ドラゴンボールZ"]}
      rowId="name"
      onChangeSelect={(selectedIds) => {
        console.log("selectedIds", selectedIds)
      }}
    />
  )
}

export const WithRowsClickSelect: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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

export const DisabledSelect: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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

export const CustomControlSelect: Story = () => {
  const [selectedRowIds, onChangeSelect] = useState<string[]>([])

  const columns = useMemo<Column<Data>[]>(
    () => [
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

export const UseClickRow: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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

export const UseDoubleClickRow: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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
      onDoubleClickRow={(row) => {
        console.log("row", row)
      }}
    />
  )
}

export const WithCheckboxProps: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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

export const WithSelectColumnProps: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
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

export const DisabledSelectColumn: Story = () => {
  const [selectedRowIds, onChangeSelect] = useState<string[]>([])

  const columns = useMemo<Column<Data>[]>(
    () => [
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
        rowsClickSelect
        selectedRowIds={selectedRowIds}
        selectColumnProps={false}
        onChangeSelect={onChangeSelect}
      />
    </>
  )
}

export const WithColumnStyles: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        css: { color: "primary" },
        accessorKey: "name",
        header: "作品名",
      },
      {
        sx: { color: "secondary" },
        accessorKey: "broadcastPeriod",
        header: "放送期間",
      },
      {
        style: { color: "red" },
        accessorKey: "episode",
        header: "話数",
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

export const CustomCell: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        accessorKey: "name",
        cell: ({ getValue, referenceRef, tabIndex }) => {
          return (
            <Link
              ref={referenceRef}
              href="https://dragon-ball-official.com/"
              external
              tabIndex={tabIndex}
            >
              {getValue()}
            </Link>
          )
        },
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

export const CustomProps: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        "aria-label": "作品名",
        accessorKey: "name",
        footer: "作品名",
        header: "作品名",
      },
      {
        "aria-label": "放送期間",
        accessorKey: "broadcastPeriod",
        footer: "放送期間",
        header: "放送期間",
      },
      {
        "aria-label": "話数",
        accessorKey: "episode",
        footer: "話数",
        header: "話数",
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
        tbodyProps={{ bg: ["green.200", "green.700"] }}
        tfootProps={{ bg: ["blue.200", "blue.700"] }}
        theadProps={{ bg: ["red.200", "red.700"] }}
      />

      <Table
        columns={columns}
        data={data}
        withFooter
        footerGroupProps={{ bg: ["blue.200", "blue.700"] }}
        headerGroupProps={{ bg: ["red.200", "red.700"] }}
        rowProps={{ bg: ["green.200", "green.700"] }}
      />

      <Table
        columns={columns}
        data={data}
        withFooter
        cellProps={({ column }) => {
          if (column.columnDef.header === "作品名")
            return { color: ["red.400", "red.300"] }
        }}
        footerProps={({ column }) => {
          if (column.columnDef.footer === "作品名")
            return { color: ["red.400", "red.300"] }
        }}
        headerProps={({ column }) => {
          if (column.columnDef.header === "作品名")
            return { color: ["red.400", "red.300"] }
        }}
      />
    </>
  )
}
