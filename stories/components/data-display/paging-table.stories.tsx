import { faker } from "@faker-js/faker"
import type { Meta, StoryFn } from "@storybook/react"
import { useCallback, useEffect, useMemo, useState } from "react"
import { colorSchemes } from "../../components"
import { ChevronLeft, ChevronRight } from "@yamada-ui/lucide"
import {
  HStack,
  IconButton,
  Text,
  SegmentedControl,
  SegmentedControlButton,
  Spacer,
  NumberInput,
  useLoading,
} from "@yamada-ui/react"
import type { Column } from "@yamada-ui/table"
import { PagingTable } from "@yamada-ui/table"

type Story = StoryFn<typeof PagingTable>

const meta: Meta<typeof PagingTable> = {
  title: "Components / Data Display / PagingTable",
  component: PagingTable,
}

export default meta

type Data = {
  id: string
  firstName: string
  lastName: string
  age: number
  email: string
}

const wait = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

const createData = (n: number = 100): Data[] => {
  let mergedData: Data[] = []

  for (let i = 0; i < n; i++) {
    mergedData = [
      ...mergedData,
      {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: faker.number.int(75),
        email: faker.internet.email(),
      },
    ]
  }

  return mergedData
}

export const basic: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "First Name",
        accessorKey: "firstName",
      },
      {
        header: "Last Name",
        accessorKey: "lastName",
      },
      {
        header: "Age",
        accessorKey: "age",
      },
      {
        header: "Email",
        accessorKey: "email",
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
        header: "First Name",
        accessorKey: "firstName",
      },
      {
        header: "Last Name",
        accessorKey: "lastName",
      },
      {
        header: "Age",
        accessorKey: "age",
      },
      {
        header: "Email",
        accessorKey: "email",
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
        header: "First Name",
        accessorKey: "firstName",
      },
      {
        header: "Last Name",
        accessorKey: "lastName",
      },
      {
        header: "Age",
        accessorKey: "age",
      },
      {
        header: "Email",
        accessorKey: "email",
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
        header: "First Name",
        accessorKey: "firstName",
      },
      {
        header: "Last Name",
        accessorKey: "lastName",
      },
      {
        header: "Age",
        accessorKey: "age",
      },
      {
        header: "Email",
        accessorKey: "email",
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
          variant="striped"
          colorScheme={colorScheme}
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
        header: "First Name",
        accessorKey: "firstName",
      },
      {
        header: "Last Name",
        accessorKey: "lastName",
      },
      {
        header: "Age",
        accessorKey: "age",
      },
      {
        header: "Email",
        accessorKey: "email",
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
        header: "First Name",
        accessorKey: "firstName",
      },
      {
        header: "Last Name",
        accessorKey: "lastName",
      },
      {
        header: "Age",
        accessorKey: "age",
      },
      {
        header: "Email",
        accessorKey: "email",
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
        header: "First Name",
        accessorKey: "firstName",
      },
      {
        header: "Last Name",
        accessorKey: "lastName",
      },
      {
        header: "Age",
        accessorKey: "age",
      },
      {
        header: "Email",
        accessorKey: "email",
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
        header: "First Name",
        accessorKey: "firstName",
      },
      {
        header: "Last Name",
        accessorKey: "lastName",
      },
      {
        header: "Age",
        accessorKey: "age",
      },
      {
        header: "Email",
        accessorKey: "email",
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
        header: "First Name",
        accessorKey: "firstName",
      },
      {
        header: "Last Name",
        accessorKey: "lastName",
      },
      {
        header: "Age",
        accessorKey: "age",
      },
      {
        header: "Email",
        accessorKey: "email",
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
        header: "First Name",
        accessorKey: "firstName",
      },
      {
        header: "Last Name",
        accessorKey: "lastName",
      },
      {
        header: "Age",
        accessorKey: "age",
      },
      {
        header: "Email",
        accessorKey: "email",
      },
    ],
    [],
  )

  const hasData = data.length

  return (
    <>
      {hasData ? (
        <PagingTable
          columns={columns}
          data={data}
          manualPagination
          pageCount={pageCount}
          rowId="id"
          pageIndex={pageIndex}
          onChangePageIndex={onChangePageIndex}
          pageSize={pageSize}
          onChangePageSize={onChangePageSize}
        />
      ) : null}
    </>
  )
}

export const withFormatPageSizeLabel: Story = () => {
  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        header: "First Name",
        accessorKey: "firstName",
      },
      {
        header: "Last Name",
        accessorKey: "lastName",
      },
      {
        header: "Age",
        accessorKey: "age",
      },
      {
        header: "Email",
        accessorKey: "email",
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
        header: "First Name",
        accessorKey: "firstName",
      },
      {
        header: "Last Name",
        accessorKey: "lastName",
      },
      {
        header: "Age",
        accessorKey: "age",
      },
      {
        header: "Email",
        accessorKey: "email",
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
        pagingControlProps={{ py: 4, bg: "gray.100" }}
      />

      <PagingTable
        columns={columns}
        data={data}
        defaultPageSize={5}
        paginationProps={{ variant: "outline", colorScheme: "pink" }}
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
        header: "First Name",
        accessorKey: "firstName",
      },
      {
        header: "Last Name",
        accessorKey: "lastName",
      },
      {
        header: "Age",
        accessorKey: "age",
      },
      {
        header: "Email",
        accessorKey: "email",
      },
    ],
    [],
  )

  const data = useMemo<Data[]>(createData, [])

  return (
    <PagingTable columns={columns} data={data}>
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
      }) => {
        return (
          <HStack>
            <Text>
              Page {pageIndex + 1} of {totalPage}
            </Text>

            <IconButton
              size="sm"
              icon={<ChevronLeft fontSize="lg" />}
              isDisabled={!getCanPreviousPage()}
              onClick={previousPage}
              aria-label="Go to previous page"
            />

            <NumberInput
              variant="flushed"
              size="sm"
              min={1}
              max={totalPage}
              value={pageIndex + 1}
              onChange={(_, page) => setPageIndex(page - 1)}
              aria-label="Change page"
            />

            <IconButton
              size="sm"
              icon={<ChevronRight fontSize="lg" />}
              isDisabled={!getCanNextPage()}
              onClick={nextPage}
              aria-label="Go to next page"
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
