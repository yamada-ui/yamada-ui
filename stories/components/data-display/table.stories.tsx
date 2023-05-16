import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  Table,
  Column,
  TableCaption,
  Checkbox,
  Button,
  SetAllSelect,
  SetSelect,
  SetSortBy,
  ToggleSortBy,
} from '@yamada-ui/react'
import { useMemo, useRef } from 'react'

export default {
  title: 'Components / Data Display / Table',
  component: Table,
} as ComponentMeta<typeof Table>

type Data = {
  name: string
  broadcastPeriod: string
  episode: string
}

export const basic: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return <Table columns={columns} data={data} />
}

export const withSize: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return (
    <>
      <Table size='sm' columns={columns} data={data} />
      <Table size='md' columns={columns} data={data} />
      <Table size='lg' columns={columns} data={data} />
      <Table size='xl' columns={columns} data={data} />
    </>
  )
}

export const withVariant: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return (
    <>
      <Table variant='simple' columns={columns} data={data} />
      <Table variant='striped' columns={columns} data={data} />
    </>
  )
}

export const withColorStyle: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return (
    <>
      <Table variant='striped' colorStyle='primary' columns={columns} data={data} />

      <Table variant='striped' colorStyle='secondary' columns={columns} data={data} />

      <Table variant='striped' colorStyle='warning' columns={columns} data={data} />

      <Table variant='striped' colorStyle='danger' columns={columns} data={data} />

      <Table variant='striped' colorStyle='link' columns={columns} data={data} />

      <Table variant='striped' colorStyle='gray' columns={columns} data={data} />

      <Table variant='striped' colorStyle='red' columns={columns} data={data} />

      <Table variant='striped' colorStyle='orange' columns={columns} data={data} />

      <Table variant='striped' colorStyle='yellow' columns={columns} data={data} />

      <Table variant='striped' colorStyle='green' columns={columns} data={data} />

      <Table variant='striped' colorStyle='teal' columns={columns} data={data} />

      <Table variant='striped' colorStyle='blue' columns={columns} data={data} />

      <Table variant='striped' colorStyle='cyan' columns={columns} data={data} />

      <Table variant='striped' colorStyle='purple' columns={columns} data={data} />

      <Table variant='striped' colorStyle='pink' columns={columns} data={data} />

      <Table variant='striped' colorStyle='linkedin' columns={columns} data={data} />

      <Table variant='striped' colorStyle='facebook' columns={columns} data={data} />

      <Table variant='striped' colorStyle='messenger' columns={columns} data={data} />

      <Table variant='striped' colorStyle='whatsapp' columns={columns} data={data} />

      <Table variant='striped' colorStyle='twitter' columns={columns} data={data} />

      <Table variant='striped' colorStyle='line' columns={columns} data={data} />

      <Table variant='striped' colorStyle='instagram' columns={columns} data={data} />

      <Table variant='striped' colorStyle='youtube' columns={columns} data={data} />
    </>
  )
}

export const withColumnBorders: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return <Table columns={columns} data={data} withColumnBorders />
}

export const withBorder: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return <Table columns={columns} data={data} withBorder />
}

export const withHighlightOnHover: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return <Table columns={columns} data={data} highlightOnHover />
}

export const withCaption: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return (
    <>
      <Table variant='simple' columns={columns} data={data}>
        <TableCaption placement='top'>©バードスタジオ/集英社・東映アニメーション</TableCaption>
      </Table>
      <Table variant='striped' columns={columns} data={data}>
        <TableCaption placement='bottom'>©バードスタジオ/集英社・東映アニメーション</TableCaption>
      </Table>
    </>
  )
}

export const withFooter: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
        Footer: '作品名',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
        Footer: '放送期間',
      },
      {
        Header: '話数',
        accessor: 'episode',
        Footer: '話数',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
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

export const withGeneratingRowIdFromAccessor: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return <Table columns={columns} data={data} generatingRowIdFromAccessor='name' />
}

export const withDefaultSortBy: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return (
    <Table
      columns={columns}
      data={data}
      generatingRowIdFromAccessor='name'
      defaultSortBy={[{ id: 'name', desc: false }]}
      onChangeSortBy={(sortBy) => {
        console.log('sortBy', sortBy)
      }}
    />
  )
}

export const manualSortBy: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return (
    <Table
      columns={columns}
      data={data}
      generatingRowIdFromAccessor='name'
      manualSortBy
      onChangeSortBy={(sortBy) => {
        console.log('sortBy', sortBy)
      }}
    />
  )
}

export const withMaxMultiSortColCount: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return (
    <Table
      columns={columns}
      data={data}
      generatingRowIdFromAccessor='name'
      maxMultiSortColCount={2}
      onChangeSortBy={(sortBy) => {
        console.log('sortBy', sortBy)
      }}
    />
  )
}

export const disabledSortBy: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
        disableSortBy: true,
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return (
    <>
      <Table columns={columns} data={data} disableSortBy />

      <Table
        columns={columns}
        data={data}
        onChangeSortBy={(sortBy) => {
          console.log('sortBy', sortBy)
        }}
      />
    </>
  )
}

export const withSortDescFirst: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
        sortDescFirst: true,
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return (
    <Table
      columns={columns}
      data={data}
      onChangeSortBy={(sortBy) => {
        console.log('sortBy', sortBy)
      }}
    />
  )
}

export const disabledMultiSort: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return (
    <Table
      columns={columns}
      data={data}
      disableMultiSort
      onChangeSortBy={(sortBy) => {
        console.log('sortBy', sortBy)
      }}
    />
  )
}

export const withDefaultSelectedRowIds: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return (
    <Table
      columns={columns}
      data={data}
      generatingRowIdFromAccessor='name'
      defaultSelectedRowIds={['ドラゴンボール']}
      onChangeSelect={(selectedIds) => {
        console.log('selectedIds', selectedIds)
      }}
    />
  )
}

export const disabledRowIds: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return (
    <Table
      columns={columns}
      data={data}
      generatingRowIdFromAccessor='name'
      disabledRowIds={['ドラゴンボールZ']}
      onChangeSelect={(selectedIds) => {
        console.log('selectedIds', selectedIds)
      }}
    />
  )
}

export const withRowsClickSelect: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return (
    <Table
      columns={columns}
      data={data}
      generatingRowIdFromAccessor='name'
      rowsClickSelect
      onChangeSelect={(selectedIds) => {
        console.log('selectedIds', selectedIds)
      }}
    />
  )
}

export const disabledSelect: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return <Table columns={columns} data={data} disableSelect />
}

export const useClickRow: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return (
    <Table
      columns={columns}
      data={data}
      onClickRow={(row) => {
        console.log('row', row)
      }}
    />
  )
}

export const withCheckboxProps: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return <Table columns={columns} data={data} checkboxProps={{ colorStyle: 'red' }} />
}

export const withSelectColumnProps: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return <Table columns={columns} data={data} selectColumnProps={{ css: { w: '40px' } }} />
}

export const withColumnStyles: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
        css: { color: 'primary' },
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
        sx: { color: 'secondary' },
      },
      {
        Header: '話数',
        accessor: 'episode',
        style: { color: 'red' },
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return <Table columns={columns} data={data} />
}

export const useToggleSortBy: ComponentStory<typeof Table> = () => {
  const toggleSortByRef = useRef<ToggleSortBy<Data>>(null)

  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return (
    <>
      <Button onClick={() => toggleSortByRef.current?.('name')}>Toggle sort '作品名'</Button>

      <Table
        columns={columns}
        data={data}
        generatingRowIdFromAccessor='name'
        toggleSortByRef={toggleSortByRef}
        onChangeSelect={(selectedIds) => {
          console.log('selectedIds', selectedIds)
        }}
      />
    </>
  )
}

export const useSetSortBy: ComponentStory<typeof Table> = () => {
  const setSortByRef = useRef<SetSortBy<Data>>(null)

  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return (
    <>
      <Button onClick={() => setSortByRef.current?.([{ id: 'name', desc: false }])}>
        Set sort asc '作品名'
      </Button>

      <Button onClick={() => setSortByRef.current?.([])}>Clear sort</Button>

      <Table
        columns={columns}
        data={data}
        generatingRowIdFromAccessor='name'
        setSortByRef={setSortByRef}
        onChangeSelect={(selectedIds) => {
          console.log('selectedIds', selectedIds)
        }}
      />
    </>
  )
}

export const useToggleRowsSelected: ComponentStory<typeof Table> = () => {
  const setSelectRef = useRef<SetSelect<Data>>(null)

  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return (
    <>
      <Button onClick={() => setSelectRef.current?.('ドラゴンボール', true)}>
        Select 'ドラゴンボール'
      </Button>

      <Button onClick={() => setSelectRef.current?.(['ドラゴンボールZ', 'ドラゴンボールGT'])}>
        Select 'ドラゴンボールZ' and 'ドラゴンボールGT'
      </Button>

      <Table
        columns={columns}
        data={data}
        generatingRowIdFromAccessor='name'
        setSelectRef={setSelectRef}
        onChangeSelect={(selectedIds) => {
          console.log('selectedIds', selectedIds)
        }}
      />
    </>
  )
}

export const useSetAllSelect: ComponentStory<typeof Table> = () => {
  const setAllSelectRef = useRef<SetAllSelect<Data>>(null)

  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
      },
      {
        Header: '話数',
        accessor: 'episode',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
      },
    ],
    [],
  )

  return (
    <>
      <Checkbox onChange={(e) => setAllSelectRef.current?.(e.target.checked)}>All Select</Checkbox>

      <Table
        columns={columns}
        data={data}
        generatingRowIdFromAccessor='name'
        setAllSelectRef={setAllSelectRef}
        onChangeSelect={(selectedIds) => {
          console.log('selectedIds', selectedIds)
        }}
      />
    </>
  )
}

export const controlProps: ComponentStory<typeof Table> = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: '作品名',
        accessor: 'name',
        Footer: '作品名',
      },
      {
        Header: '放送期間',
        accessor: 'broadcastPeriod',
        Footer: '放送期間',
      },
      {
        Header: '話数',
        accessor: 'episode',
        Footer: '話数',
      },
    ],
    [],
  )

  const data: Data[] = useMemo(
    () => [
      {
        name: 'ドラゴンボール',
        broadcastPeriod: '1986年2月26日 - 1989年4月19日',
        episode: '全153話',
      },
      {
        name: 'ドラゴンボールZ',
        broadcastPeriod: '1989年4月26日 - 1996年1月31日',
        episode: '全291話 + スペシャル2話',
      },
      {
        name: 'ドラゴンボールGT',
        broadcastPeriod: '1996年2月7日 - 1997年11月19日',
        episode: '全64話 + 番外編1話',
      },
      {
        name: 'ドラゴンボール改',
        broadcastPeriod: '2009年4月5日 - 2015年6月28日',
        episode: '全159話',
      },
      {
        name: 'ドラゴンボール超',
        broadcastPeriod: '2015年7月5日 - 2018年3月25日',
        episode: '全131話',
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
        theadProps={{ bg: ['red.200', 'red.700'] }}
        tbodyProps={{ bg: ['green.200', 'green.700'] }}
        tfootProps={{ bg: ['blue.200', 'blue.700'] }}
      />

      <Table
        columns={columns}
        data={data}
        withFooter
        theadProps={{
          headerGroupProps: { bg: ['red.200', 'red.700'] },
        }}
        tbodyProps={{
          rowProps: { bg: ['green.200', 'green.700'] },
        }}
        tfootProps={{
          footerGroupProps: { bg: ['blue.200', 'blue.700'] },
        }}
      />

      <Table
        columns={columns}
        data={data}
        withFooter
        theadProps={{
          headerProps: ({ Header }) => {
            if (Header === '作品名') return { color: ['red.400', 'red.300'] }
          },
        }}
        tbodyProps={{
          cellProps: ({ column }) => {
            if (column.Header === '作品名') return { color: ['red.400', 'red.300'] }
          },
        }}
        tfootProps={{
          footerProps: ({ Header }) => {
            if (Header === '作品名') return { color: ['red.400', 'red.300'] }
          },
        }}
      />
    </>
  )
}
