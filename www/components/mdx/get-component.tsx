import type { CSSProps } from "@yamada-ui/react"
import type { ComponentType } from "react"
import type { Transform } from "sucrase"
import { faker } from "@faker-js/faker"
import { burger } from "@lucide/lab"
import * as Components from "@yamada-ui/react"
import { createColumnHelper, isFunction, Text } from "@yamada-ui/react"
import dayjs from "dayjs"
import { AnimatePresence } from "motion/react"
import React, { isValidElement } from "react"
import { useForm } from "react-hook-form"
import { transform as originalTransform } from "sucrase"

interface TableData {
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

const columnHelper = createColumnHelper<TableData>()

const columns = [
  columnHelper.accessor("id", {
    footer: (info) => info.column.id,
    cellProps: { numeric: true },
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
    footer: (info) => info.column.id,
    cellProps: { numeric: true },
  }),
  columnHelper.accessor("email", {
    footer: (info) => info.column.id,
    lineClamp: 1,
  }),
]

const columnsFull = [
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

function createTableData(length = 10): TableData[] {
  return Array.from({ length }, function (_, index) {
    return {
      id: index.toString(),
      age: faker.number.int({ max: 65, min: 18 }),
      createdAt: faker.date.past(),
      email: faker.internet.email(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      phone: faker.phone.number(),
      role: faker.helpers.arrayElement(["admin", "user"]),
      status: faker.helpers.arrayElement(["active", "inactive"]),
      updatedAt: faker.date.past(),
    }
  })
}

interface CartesianChartData {
  date: string
  desktop: null | number | number[]
  mobile: null | number | number[]
  tablet: null | number | number[]
}

function createCartesianChartData(
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

interface PolarChartData {
  browser: string
  downloads: null | number
  visits: null | number
  fill?: CSSProps["fill"]
}

function createPolarChartData(min = 1000, max = 5000): PolarChartData[] {
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

const components = {
  AnimatePresence,
  burger,
  columnHelper,
  columns,
  columnsFull,
  createCartesianChartData,
  createPolarChartData,
  createTableData,
  dayjs,
  faker,
  React,
  useForm,
  ...React,
  ...Components,
}

function trim(code: string) {
  return code.trim().replace(/;$/, "")
}

function pipe<Y>(...functions: ((...args: Y[]) => Y)[]) {
  return functions.reduce(function (acc, cb) {
    return function (...args: Y[]) {
      return acc(cb(...args))
    }
  })
}

function transform(...transforms: (Transform | undefined)[]) {
  return function (code: string) {
    return originalTransform(code, {
      transforms: transforms.filter(Boolean) as Transform[],
    }).code
  }
}

function evalCode(
  code: string,
  args: { [key: string]: unknown },
): ComponentType {
  return new Function(...Object.keys(args), code)(...Object.values(args))
}

interface GetComponentOptions {
  lang: string
  functional?: boolean
}

export function getComponent(
  code: string,
  { lang, functional }: GetComponentOptions,
) {
  try {
    if (functional && !code.startsWith("function"))
      code = `function Demo() { ${code} }`

    const ts = ["ts", "tsx"].includes(lang)
    const transformedCode = pipe<string>(
      function (code) {
        return 'const _jsxFileName = "";' + code
      },
      transform("imports"),
      function (code: string) {
        return code.replace('const _jsxFileName = "";', "").trim()
      },
      trim,
      transform("jsx", ts ? "typescript" : undefined),
      (code: string) => `return (${code})`,
      trim,
    )(code)

    const Component = evalCode(transformedCode, components)

    if (isFunction(Component)) {
      return <Component />
    } else if (isValidElement(Component)) {
      return Component
    } else {
      return null
    }
  } catch (e) {
    if (process.env.NODE_ENV === "development") {
      if (e instanceof Error) {
        return <Text color="error">{e.toString()}</Text>
      } else {
        return null
      }
    } else {
      throw e
    }
  }
}
