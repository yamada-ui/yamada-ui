import type { Meta, StoryFn } from "@storybook/react-vite"
import type { Column } from "."
import { faker } from "@faker-js/faker"
import { COLOR_SCHEMES } from "@yamada-ui/utils"
import { useCallback, useEffect, useMemo, useState } from "react"
import { PagingTable } from "."
import { IconButton } from "../../components/button"
import { Spacer } from "../../components/flex"
import { ChevronLeftIcon, ChevronRightIcon } from "../../components/icon"
import { useLoading } from "../../components/loading"
import { HStack } from "../../components/stack"
import { Text } from "../../components/text"
import { NumberInput } from "../number-input"
import { SegmentedControl, SegmentedControlButton } from "../segmented-control"

type Story = StoryFn<typeof PagingTable>

const meta: Meta<typeof PagingTable> = {
  component: PagingTable,
  title: "Components / PagingTable",
}

export default meta

interface Data {
  id: string
  age: number
  email: string
  firstName: string
  lastName: string
}

const wait = async (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

const createData = (n = 100): Data[] => {
  let mergedData: Data[] = []

  for (let i = 0; i < n; i++) {
    mergedData = [
      ...mergedData,
      {
        id: faker.string.uuid(),
        age: faker.number.int(75),
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
      },
    ]
  }

  return mergedData
}

export const Basic: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "age",
        header: "Age",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(createData, [])

  return <PagingTable columns={columns} data={data} />
}

export const WithSize: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "age",
        header: "Age",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(createData, [])

  return (
    <>
      <PagingTable
        size="sm"
        columns={columns}
        data={data}
        defaultPageSize={5}
      />
      <PagingTable
        size="md"
        columns={columns}
        data={data}
        defaultPageSize={5}
      />
      <PagingTable
        size="lg"
        columns={columns}
        data={data}
        defaultPageSize={5}
      />
      <PagingTable
        size="xl"
        columns={columns}
        data={data}
        defaultPageSize={5}
      />
    </>
  )
}

export const WithVariant: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "age",
        header: "Age",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(createData, [])

  return (
    <>
      <PagingTable
        variant="simple"
        columns={columns}
        data={data}
        defaultPageSize={5}
      />
      <PagingTable
        variant="striped"
        columns={columns}
        data={data}
        defaultPageSize={5}
      />
    </>
  )
}

export const WithColorScheme: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "age",
        header: "Age",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(createData, [])

  return (
    <>
      {COLOR_SCHEMES.map((colorScheme) => (
        <PagingTable
          key={colorScheme}
          colorScheme={colorScheme}
          variant="striped"
          columns={columns}
          data={data}
          defaultPageSize={5}
        />
      ))}
    </>
  )
}

export const WithDefaultPageSize: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "age",
        header: "Age",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(createData, [])

  return (
    <PagingTable
      columns={columns}
      data={data}
      defaultPageSize={10}
      onChangePageSize={(pageSize) => {
        console.log("pageSize", pageSize)
      }}
    />
  )
}

export const WithPageSizeList: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "age",
        header: "Age",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(createData, [])

  return (
    <PagingTable
      columns={columns}
      data={data}
      defaultPageSize={30}
      pageSizeList={[30, 60, 90]}
      onChangePageSize={(pageSize) => {
        console.log("pageSize", pageSize)
      }}
    />
  )
}

export const CustomControlPageSize: Story = () => {
  const [pageSize, onChangePageSize] = useState<number>(20)

  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "age",
        header: "Age",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(createData, [])

  return (
    <PagingTable
      columns={columns}
      data={data}
      pageSize={pageSize}
      onChangePageSize={onChangePageSize}
    />
  )
}

export const WithDefaultPageIndex: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "age",
        header: "Age",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(createData, [])

  return (
    <PagingTable
      columns={columns}
      data={data}
      defaultPageIndex={2}
      onChangePageIndex={(pageIndex) => {
        console.log("pageIndex", pageIndex)
      }}
    />
  )
}

export const CustomControlPageIndex: Story = () => {
  const [pageIndex, onChangePageIndex] = useState<number>(0)

  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "age",
        header: "Age",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(createData, [])

  return (
    <PagingTable
      columns={columns}
      data={data}
      pageIndex={pageIndex}
      onChangePageIndex={onChangePageIndex}
    />
  )
}

export const WithManualPagination: Story = () => {
  const [pageIndex, onChangePageIndex] = useState<number>(0)
  const [pageSize, onChangePageSize] = useState<number>(20)
  const [data, setData] = useState<Data[]>([])
  const initData = useMemo<Data[]>(() => createData(1000), [])
  const maxPageCount = initData.length
  const [pageCount, setPageCount] = useState<number>(maxPageCount / pageSize)
  const { page } = useLoading()

  const fetchData = useCallback(
    async (pageIndex: number, pageSize: number) => {
      page.start()

      const data = initData.slice(
        pageIndex * pageSize,
        (pageIndex + 1) * pageSize,
      )
      const pageCount = maxPageCount / pageSize

      await wait(1000)

      setData(data)
      setPageCount(pageCount)

      page.finish()
    },
    [page, initData, maxPageCount],
  )

  useEffect(() => {
    fetchData(pageIndex, pageSize)
  }, [fetchData, pageIndex, pageSize])

  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "age",
        header: "Age",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
    ],
    [],
  )

  const hasData = data.length

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!hasData) return <></>

  return (
    <PagingTable
      columns={columns}
      data={data}
      manualPagination
      pageCount={pageCount}
      pageIndex={pageIndex}
      pageSize={pageSize}
      rowId="id"
      onChangePageIndex={onChangePageIndex}
      onChangePageSize={onChangePageSize}
    />
  )
}

export const WithFormatPageSizeLabel: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "age",
        header: "Age",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(createData, [])

  return (
    <PagingTable
      columns={columns}
      data={data}
      formatPageSizeLabel={(pageSize) => `${pageSize} Page`}
    />
  )
}

export const CustomProps: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "age",
        header: "Age",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(createData, [])

  return (
    <>
      <PagingTable
        columns={columns}
        data={data}
        defaultPageSize={5}
        containerProps={{ flexDirection: "column-reverse" }}
      />

      <PagingTable
        columns={columns}
        data={data}
        defaultPageSize={5}
        pagingControlProps={{ bg: "gray.100", py: 4 }}
      />

      <PagingTable
        columns={columns}
        data={data}
        defaultPageSize={5}
        paginationProps={{ colorScheme: "pink", variant: "outline" }}
      />

      <PagingTable
        columns={columns}
        data={data}
        defaultPageSize={5}
        selectProps={{ variant: "flushed" }}
      />
    </>
  )
}

export const CustomPagination: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "age",
        header: "Age",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(createData, [])

  return (
    <PagingTable columns={columns} data={data}>
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
      }) => {
        return (
          <HStack>
            <Text>
              Page {pageIndex + 1} of {totalPage}
            </Text>

            <IconButton
              size="sm"
              aria-label="Go to previous page"
              disabled={!getCanPreviousPage()}
              icon={<ChevronLeftIcon fontSize="lg" />}
              onClick={previousPage}
            />

            <NumberInput
              size="sm"
              variant="flushed"
              aria-label="Change page"
              max={totalPage}
              min={1}
              value={pageIndex + 1}
              onChange={(_, page) => setPageIndex(page - 1)}
            />

            <IconButton
              size="sm"
              aria-label="Go to next page"
              disabled={!getCanNextPage()}
              icon={<ChevronRightIcon fontSize="lg" />}
              onClick={nextPage}
            />

            <Spacer />

            <SegmentedControl
              size="sm"
              value={String(pageSize)}
              onChange={(pageSize) => setPageSize(Number(pageSize))}
            >
              <SegmentedControlButton value="20">20</SegmentedControlButton>
              <SegmentedControlButton value="50">50</SegmentedControlButton>
              <SegmentedControlButton value="100">100</SegmentedControlButton>
            </SegmentedControl>
          </HStack>
        )
      }}
    </PagingTable>
  )
}
