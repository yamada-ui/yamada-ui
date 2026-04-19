/* eslint-disable perfectionist/sort-objects */

import type { Lang } from "@/utils/i18n"
import sdk from "@stackblitz/sdk"
import * as Components from "@yamada-ui/react"
import React from "react"
import { fixUnusedImports } from "./eslint-plugin-unused-imports"
import { format } from "./oxfmt"

export interface ExternalModules {
  [key: string]: [string, ...string[]] | string
}

const VITE_ENV = `/// <reference types="vite/client" />`
const INDEX = `<!doctype html>
<html lang="{{lang}}">
  <head>
    <meta charset="UTF-8" />
    <title>Yamada UI example</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`
const VITE_CONFIG = `import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
})
`
const MAIN = `import { Box, UIProvider } from "@yamada-ui/react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "@/app.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UIProvider>
      <Box p="lg">
        <App />
      </Box>
    </UIProvider>
  </StrictMode>,
)`
const MISC = `import type { CSSProps, Tree } from "@yamada-ui/react"
import {
  Avatar,
  Center,
  ChevronsUpDownIcon,
  createColumnHelper,
  GalleryVerticalEndIcon,
  Grid,
  Menu,
  Sidebar,
  Text,
} from "@yamada-ui/react"
import dayjs from "dayjs"
import { faker } from "@faker-js/faker"

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
  visits: null | number
  fill?: CSSProps["fill"]
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

export const treeItems: Tree.ItemType[] = [
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

export const sidebarItems: Sidebar.ItemType[] = [
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

export function SidebarDocumentMenuButton() {
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

export function SidebarUserMenuButton() {
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
`

const STACKBLITZRC = {
  startCommand: ["pnpm install", "pnpm dev"].join(" && "),
  installDependencies: false,
}
const PACKAGE = {
  name: "yamada-ui-example",
  private: true,
  version: "0.0.0",
  type: "module",
  engines: { node: ">=22" },
  scripts: {
    dev: "vite",
    build: "tsc -b && vite build",
    preview: "vite preview",
  },
  dependencies: {
    "@yamada-ui/cli": "^2",
    "@yamada-ui/react": "^2",
    react: "^19",
    "react-dom": "^19",
    dayjs: "^1",
    "@faker-js/faker": "^10",
  },
  devDependencies: {
    "@types/node": "^24",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@vitejs/plugin-react-swc": "^4",
    typescript: "^5",
    vite: "^7",
    "vite-tsconfig-paths": "^6",
  },
}
const TSCONFIG = {
  files: [],
  references: [
    { path: "./tsconfig.app.json" },
    { path: "./tsconfig.node.json" },
  ],
}
const TSCONFIG_APP = {
  compilerOptions: {
    tsBuildInfoFile: "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    target: "ES2023",
    useDefineForClassFields: true,
    lib: ["ES2023", "DOM", "DOM.Iterable"],
    module: "ESNext",
    types: ["vite/client"],
    skipLibCheck: true,

    /* Bundler mode */
    moduleResolution: "bundler",
    allowImportingTsExtensions: true,
    verbatimModuleSyntax: false,
    moduleDetection: "force",
    noEmit: true,
    jsx: "react-jsx",

    /* Linting */
    strict: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    erasableSyntaxOnly: true,
    noFallthroughCasesInSwitch: true,
    noUncheckedSideEffectImports: true,

    paths: { "@/*": ["./src/*"] },
  },
  include: ["src"],
}
const TSCONFIG_NODE = {
  compilerOptions: {
    tsBuildInfoFile: "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    target: "ES2023",
    lib: ["ES2023"],
    module: "ESNext",
    types: ["node"],
    skipLibCheck: true,

    /* Bundler mode */
    moduleResolution: "bundler",
    allowImportingTsExtensions: true,
    verbatimModuleSyntax: false,
    moduleDetection: "force",
    noEmit: true,

    /* Linting */
    strict: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    erasableSyntaxOnly: true,
    noFallthroughCasesInSwitch: true,
    noUncheckedSideEffectImports: true,

    paths: { "@/*": ["./src/*"] },
  },
  include: ["vite.config.ts"],
}

const EXTERNAL_MODULES: ExternalModules = {
  "motion/react": ["AnimatePresence"],
  "react-hook-form": ["useForm", "SubmitHandler"],
  dayjs: "dayjs",
  "@faker-js/faker": ["faker"],
  "@lucide/lab": ["burger"],
}
const EXCLUDED_REACT_EXPORTS = new Set([
  "__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE",
  "__COMPILER_RUNTIME",
  "act",
  "version",
])
const REACT_EXPORTS = Object.keys(React).filter(
  (id) => !EXCLUDED_REACT_EXPORTS.has(id),
)
const COMPONENT_EXPORTS = Object.keys(Components)
const IMPORTS = [
  `import { ${COMPONENT_EXPORTS.join(", ")} } from "@yamada-ui/react"`,
  `import { ${REACT_EXPORTS.join(", ")} } from "react"`,
  `import { ${[
    "TableData",
    "columnHelper",
    "columns",
    "columnsFull",
    "createTableData",
    "CartesianChartData",
    "createCartesianChartData",
    "PolarChartData",
    "createPolarChartData",
    "treeItems",
    "sidebarItems",
    "SidebarDocumentMenuButton",
    "SidebarUserMenuButton",
  ].join(", ")} } from "@/misc"`,
  ...Object.entries(EXTERNAL_MODULES).map(([source, value]) => {
    if (Array.isArray(value)) {
      return `import { ${value.join(", ")} } from "${source}"`
    } else {
      return `import ${value} from "${source}"`
    }
  }),
]

function generateDependencies(code: string) {
  const dependencies: { [key: string]: string } = {}

  for (const name of Object.keys(EXTERNAL_MODULES)) {
    if (code.includes(` from "${name}"`)) dependencies[name] = "latest"
  }

  return dependencies
}

function generateIndex(lang: string) {
  return INDEX.replace("{{lang}}", lang)
}

function generatePackage(additionalDependencies: { [key: string]: string }) {
  const { dependencies, ...rest } = PACKAGE

  return {
    ...rest,
    dependencies: { ...dependencies, ...additionalDependencies },
  }
}

interface GenerateCodeOptions extends Pick<
  StackblitzOptions,
  "client" | "functional"
> {}

async function generateCode(
  content: string,
  { client, functional }: GenerateCodeOptions,
) {
  let code = `${IMPORTS.join("\n")}\n\nfunction App() { {{content}} }`

  if (functional) {
    code = code.replace("{{content}}", content)
  } else {
    code = code.replace("{{content}}", `return ( ${content} )`)
  }

  if (client) code = `"use client"\n\n` + code

  code = code + `\n\nexport default App`
  code = await fixUnusedImports(code)
  code = await format(code)

  const dependencies = generateDependencies(code)

  return { code, dependencies }
}

export interface StackblitzOptions {
  code: string
  client?: boolean
  description?: string
  functional?: boolean
  lang?: Lang
  title?: string
}

export async function stackblitz({
  lang = "en",
  client,
  code,
  description = "Yamada UI example.",
  functional,
  title = "Yamada UI Example",
}: StackblitzOptions) {
  const { code: APP, dependencies } = await generateCode(code, {
    client,
    functional,
  })
  const files = {
    ".stackblitzrc": JSON.stringify(STACKBLITZRC, null, 2),
    "index.html": generateIndex(lang),
    "package.json": JSON.stringify(generatePackage(dependencies), null, 2),
    "src/app.tsx": APP,
    "src/main.tsx": MAIN,
    "src/misc.tsx": MISC,
    "src/vite-env.d.ts": VITE_ENV,
    "tsconfig.app.json": JSON.stringify(TSCONFIG_APP, null, 2),
    "tsconfig.json": JSON.stringify(TSCONFIG, null, 2),
    "tsconfig.node.json": JSON.stringify(TSCONFIG_NODE, null, 2),
    "vite.config.ts": VITE_CONFIG,
  }

  sdk.openProject(
    { description, files, template: "node", title },
    { openFile: "src/app.tsx", showSidebar: false },
  )
}
