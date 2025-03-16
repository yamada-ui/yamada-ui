import type { Meta, StoryFn } from "@storybook/react"
import type { Column } from "@yamada-ui/table"
import { faker } from "@faker-js/faker"
import { ChevronLeftIcon, ChevronRightIcon } from "@yamada-ui/lucide"
import {
  HStack,
  IconButton,
  NumberInput,
  SegmentedControl,
  SegmentedControlButton,
  Spacer,
  Text,
  useLoading,
} from "@yamada-ui/react"
import { PagingTable } from "@yamada-ui/table"
import { useCallback, useEffect, useMemo, useState } from "react"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof PagingTable>

const meta: Meta<typeof PagingTable> = {
  component: PagingTable,
  title: "Components / Data Display / PagingTable",
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

export const basic: Story = () => {
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

export const withSize: Story = () => {
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

export const withVariant: Story = () => {
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

export const withColorScheme: Story = () => {
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
      {colorSchemes.map((colorScheme) => (
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

export const withDefaultPageSize: Story = () => {
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

export const withPageSizeList: Story = () => {
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

export const customControlPageSize: Story = () => {
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

export const withDefaultPageIndex: Story = () => {
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

export const customControlPageIndex: Story = () => {
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

export const withManualPagination: Story = () => {
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

export const withFormatPageSizeLabel: Story = () => {
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

export const customProps: Story = () => {
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

export const customPagination: Story = () => {
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
