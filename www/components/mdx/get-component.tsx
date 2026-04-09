import type { CSSProps, Tree } from "@yamada-ui/react"
import type { ComponentType } from "react"
import type { Transform } from "sucrase"
import { faker } from "@faker-js/faker"
import { burger } from "@lucide/lab"
import * as Components from "@yamada-ui/react"
import {
  Avatar,
  Center,
  ChevronsUpDownIcon,
  createColumnHelper,
  GalleryVerticalEndIcon,
  Grid,
  isFunction,
  Menu,
  Sidebar,
  Text,
} from "@yamada-ui/react"
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

const treeItems: Tree.ItemType[] = [
  {
    children: [
      { label: "react" },
      { label: "react-dom" },
      {
        children: [{ label: "react" }, { label: "utils" }],
        label: "@yamada-ui",
      },
    ],
    label: "node_modules",
  },
  {
    children: [
      {
        children: [{ label: "tree.tsx" }, { label: "index.ts" }],
        label: "components",
      },
      {
        children: [
          {
            children: [{ label: "layout.tsx" }, { label: "page.tsx" }],
            label: "about",
          },
          { label: "layout.tsx" },
          { label: "page.tsx" },
        ],
        label: "app",
      },
    ],
    label: "src",
  },
  { label: "pnpm-lock.yaml" },
  { label: "package.json" },
  { label: "tsconfig.json" },
  { label: "README.md" },
]

const sidebarItems: Sidebar.ItemType[] = [
  {
    children: [
      { label: "Installation", value: "/get-started/installation" },
      { label: "CLI", value: "/get-started/cli" },
      {
        children: [
          {
            label: "Next.js (App)",
            value: "/get-started/frameworks/next-app",
          },
          {
            label: "Next.js (Pages)",
            value: "/get-started/frameworks/next-pages",
          },
          { label: "Vite", value: "/get-started/frameworks/vite" },
          {
            label: "React Router",
            value: "/get-started/frameworks/react-router",
          },
          {
            label: "TanStack Start",
            value: "/get-started/frameworks/tanstack-start",
          },
          {
            label: "TanStack Router",
            value: "/get-started/frameworks/tanstack-router",
          },
        ],
        label: "Frameworks",
        value: "/get-started/frameworks",
      },
    ],
    group: true,
    label: "Get Started",
  },
  {
    children: [
      { label: "Overview", value: "/styling/overview" },
      { label: "Style Props", value: "/styling/style-props" },
    ],
    group: true,
    label: "Styling",
  },
  {
    children: [
      { label: "Overview", value: "/theming/overview" },
      { label: "Customization", value: "/theming/customization" },
    ],
    group: true,
    label: "Theming",
  },
]

function SidebarDocumentMenuButton() {
  return (
    <Menu.Root
      animationScheme={{ base: "inline-start", md: "block-start" }}
      gutter={{ base: 16, md: 8 }}
      matchWidth={{ base: false, md: true }}
      placement={{ base: "center-end-start", md: "end" }}
    >
      <Menu.Trigger>
        <Sidebar.MenuButton>
          <Center
            bg="colorScheme.solid"
            color="colorScheme.contrast"
            fontSize="{side-panel-item-icon-size}"
            minBoxSize="{side-panel-item-size}"
            rounded="{side-panel-item-rounded}"
          >
            <GalleryVerticalEndIcon />
          </Center>

          <Grid flex="1" gap="xs" lineHeight="1" textAlign="start">
            <Text truncated>Documentation</Text>
            <Text color="fg.muted" truncated>
              v2.2.0
            </Text>
          </Grid>

          <ChevronsUpDownIcon
            color="fg.muted"
            fontSize="{side-panel-item-icon-size}"
          />
        </Sidebar.MenuButton>
      </Menu.Trigger>

      <Menu.Content
        items={[
          { label: "v0.9.10", value: "v0.9.10" },
          { label: "v1.7.8", value: "v1.7.8" },
          { label: "v2.2.0", value: "v2.2.0" },
        ]}
      />
    </Menu.Root>
  )
}

function SidebarUserMenuButton() {
  return (
    <Menu.Root
      animationScheme={{ base: "inline-start", md: "block-end" }}
      gutter={{ base: 16, md: 8 }}
      matchWidth={{ base: false, md: true }}
      placement={{ base: "center-end-end", md: "start" }}
    >
      <Menu.Trigger>
        <Sidebar.MenuButton>
          <Avatar
            name="Hirotomo Yamada"
            src="https://avatars.githubusercontent.com/u/84060430?v=4"
            size="xs"
            rounded="{side-panel-item-rounded}"
          />

          <Grid flex="1" gap="xs" lineHeight="1" textAlign="start">
            <Text truncated>Hirotomo Yamada</Text>
            <Text color="fg.muted" truncated>
              hirotomo.yamada@avap.co.jp
            </Text>
          </Grid>

          <ChevronsUpDownIcon
            color="fg.muted"
            fontSize="{side-panel-item-icon-size}"
          />
        </Sidebar.MenuButton>
      </Menu.Trigger>

      <Menu.Content
        items={[
          { label: "Upgrade to Pro", value: "Upgrade to Pro" },
          { type: "separator" },
          { label: "Account", value: "Account" },
          { label: "Billing", value: "Billing" },
          { label: "Notification", value: "Notification" },
          { type: "separator" },
          { label: "Logout", value: "Logout" },
        ]}
      />
    </Menu.Root>
  )
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
  SidebarDocumentMenuButton,
  sidebarItems,
  SidebarUserMenuButton,
  treeItems,
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
