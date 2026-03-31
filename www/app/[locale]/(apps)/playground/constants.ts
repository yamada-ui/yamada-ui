export const DEFAULT_CODE = `export default function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  return (
    <VStack gap="md" p="lg" bg="bg">
      <Text fontSize="2xl" fontWeight="bold">
        Welcome to Yamada UI Playground!
      </Text>

      <VStack gap="sm">
        <Text fontSize="lg">Counter: {count}</Text>
        <Button
          colorScheme="primary"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </Button>
      </VStack>

      <VStack gap="sm">
        <Input
          placeholder="Enter your name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        {name ? <Text fontSize="lg">Hello, {name}!</Text> : null}
      </VStack>
    </VStack>
  )
}
`
export const MISC_SOURCE = `import type { CSSProps } from "@yamada-ui/react"
import { createColumnHelper } from "@yamada-ui/react"
import { faker } from "@faker-js/faker"
import dayjs from "dayjs"

export interface TableData {
  age: number
  createdAt: Date
  email: string
  firstName: string
  id: string
  lastName: string
  phone: string
  role: string
  status: string
  updatedAt: Date
}

export const columnHelper = createColumnHelper<TableData>()

export const columns = [
  columnHelper.accessor("id", {
    cellProps: { numeric: true },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("firstName", {
    footer: (info) => info.column.id,
    lineClamp: 1,
  }),
  columnHelper.accessor("lastName", {
    footer: (info) => info.column.id,
    lineClamp: 1,
  }),
  columnHelper.accessor("age", {
    cellProps: { numeric: true },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("email", {
    footer: (info) => info.column.id,
    lineClamp: 1,
  }),
]

export const columnsFull = [
  ...columns,
  columnHelper.accessor("phone", {
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("role", {
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("status", {
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("createdAt", {
    cell: (info) => info.getValue().toLocaleDateString(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("updatedAt", {
    cell: (info) => info.getValue().toLocaleDateString(),
    footer: (info) => info.column.id,
  }),
]

export function createTableData(length = 10): TableData[] {
  return Array.from({ length }, (_, index) => ({
    age: faker.number.int({ max: 65, min: 18 }),
    createdAt: faker.date.past(),
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    id: index.toString(),
    lastName: faker.person.lastName(),
    phone: faker.phone.number(),
    role: faker.helpers.arrayElement(["admin", "user"]),
    status: faker.helpers.arrayElement(["active", "inactive"]),
    updatedAt: faker.date.past(),
  }))
}

export interface CartesianChartData {
  date: string
  desktop: null | number | number[]
  mobile: null | number | number[]
  tablet: null | number | number[]
}

export function createCartesianChartData(
  length = 6,
  min = 1000,
  max = 5000,
): CartesianChartData[] {
  return Array.from({ length }, (_, index) => ({
    date: dayjs().add(index, "month").format("YYYY-MM-DD"),
    desktop: faker.number.int({ max, min }),
    mobile: faker.number.int({ max, min }),
    tablet: faker.number.int({ max, min }),
  }))
}

export interface PolarChartData {
  browser: string
  downloads: null | number
  fill?: CSSProps["fill"]
  visits: null | number
}

export function createPolarChartData(min = 1000, max = 5000): PolarChartData[] {
  return [
    {
      browser: "chrome",
      downloads: faker.number.int({ max, min }),
      visits: faker.number.int({ max, min }),
    },
    {
      browser: "edge",
      downloads: faker.number.int({ max, min }),
      visits: faker.number.int({ max, min }),
    },
    {
      browser: "firefox",
      downloads: faker.number.int({ max, min }),
      visits: faker.number.int({ max, min }),
    },
    {
      browser: "opera",
      downloads: faker.number.int({ max, min }),
      visits: faker.number.int({ max, min }),
    },
    {
      browser: "safari",
      downloads: faker.number.int({ max, min }),
      visits: faker.number.int({ max, min }),
    },
    {
      browser: "other",
      downloads: faker.number.int({ max, min }),
      visits: faker.number.int({ max, min }),
    },
  ]
}
`
