import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { useCallback, useMemo, useRef, useState } from "react"
import { COLOR_SCHEMES, isString, isUndefined, match, wait } from "../../utils"
import { ButtonGroup } from "../button"
import {
  FileIcon,
  FolderClosedIcon,
  FolderOpenIcon,
  LockKeyholeIcon,
  SquareArrowOutUpRightIcon,
  SquareMinusIcon,
  SquarePlusIcon,
} from "../icon"
import { Input } from "../input"
import { VStack } from "../stack"
import { Text } from "../text"
import { Tree } from "./"

type Story = StoryFn<typeof Tree.Root>

const meta: Meta<typeof Tree.Root> = {
  component: Tree.Root,
  title: "Components / Tree",
}

export default meta

export const Basic: Story = () => {
  return (
    <Tree.Root>
      <Tree.Item label="node_modules">
        <Tree.Item label="react" />
        <Tree.Item label="react-dom" />
        <Tree.Item label="@yamada-ui">
          <Tree.Item label="react" />
          <Tree.Item label="utils" />
        </Tree.Item>
      </Tree.Item>
      <Tree.Item label="src">
        <Tree.Item label="components">
          <Tree.Item label="tree.tsx" />
          <Tree.Item label="index.ts" />
        </Tree.Item>
        <Tree.Item label="app">
          <Tree.Item label="about">
            <Tree.Item label="layout.tsx" />
            <Tree.Item label="page.tsx" />
          </Tree.Item>
          <Tree.Item label="layout.tsx" />
          <Tree.Item label="page.tsx" />
        </Tree.Item>
      </Tree.Item>
      <Tree.Item label="pnpm-lock.yaml" />
      <Tree.Item label="package.json" />
      <Tree.Item label="tsconfig.json" />
      <Tree.Item label="README.md" />
    </Tree.Root>
  )
}

export const Items: Story = () => {
  const items = useMemo<Tree.ItemType[]>(
    () => [
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
    ],
    [],
  )

  return <Tree.Root items={items} />
}

export const Variant: Story = () => {
  const items = useMemo<Tree.ItemType[]>(
    () => [
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
    ],
    [],
  )

  return (
    <PropsTable
      variant="stack"
      columns={["subtle", "solid"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <Tree.Root
            key={key}
            colorScheme={row}
            variant={column}
            defaultSelectedValue="node_modules"
            items={items}
          />
        )
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  const items = useMemo<Tree.ItemType[]>(
    () => [
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
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
        return (
          <Tree.Root
            key={key}
            size={row}
            defaultExpandedValue={["src"]}
            defaultSelectedValue="node_modules"
            items={items}
          />
        )
      }}
    </PropsTable>
  )
}

export const Shape: Story = () => {
  const items = useMemo<Tree.ItemType[]>(
    () => [
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
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["rounded", "square", "circle"]}>
      {(_, row, key) => {
        return (
          <Tree.Root
            key={key}
            defaultSelectedValue="node_modules"
            items={items}
            shape={row}
          />
        )
      }}
    </PropsTable>
  )
}

export const DisabledItem: Story = () => {
  const items = useMemo<Tree.ItemType[]>(
    () => [
      {
        children: [
          { label: "react" },
          { label: "react-dom" },
          {
            children: [{ label: "react" }, { label: "utils" }],
            label: "@yamada-ui",
          },
        ],
        disabled: true,
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
      { disabled: true, label: "pnpm-lock.yaml" },
      { label: "package.json" },
      { label: "tsconfig.json" },
      { label: "README.md" },
    ],
    [],
  )

  return <Tree.Root items={items} />
}

export const LinkedItem: Story = () => {
  const items = useMemo<Tree.ItemType[]>(
    () => [
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
      {
        label: "pnpm-lock.yaml",
      },
      { label: "package.json" },
      { label: "tsconfig.json" },
      {
        as: "a",
        href: "https://yamada-ui.com",
        rel: "noopener",
        target: "_blank",
        endElement: <SquareArrowOutUpRightIcon />,
        label: "README.md",
      },
    ],
    [],
  )

  return <Tree.Root items={items} />
}

export const Filtering: Story = () => {
  const defaultItems = useMemo<Tree.ItemType[]>(
    () => [
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
    ],
    [],
  )
  const [items, setItems] = useState<Tree.ItemType[]>(defaultItems)

  const searchItems = useCallback(
    (value: string, items: Tree.ItemType[]): Tree.ItemType[] => {
      if (!value.length) return items

      return items
        .map((item) => {
          if ("children" in item) {
            if (isString(item.label) && match(item.label, value)) {
              return item
            } else {
              const children = searchItems(value, item.children)

              if (children.length) return { ...item, children }
            }
          } else if (isString(item.label) && match(item.label, value)) {
            return item
          }
        })
        .filter((item) => !isUndefined(item))
    },
    [],
  )

  return (
    <VStack gap="sm" maxW="2xs">
      <Input
        placeholder="Search"
        onChange={(ev) => {
          setItems(searchItems(ev.target.value, defaultItems))
        }}
      />
      <Tree.Root items={items} />
    </VStack>
  )
}

export const GuideLine: Story = () => {
  const items = useMemo<Tree.ItemType[]>(
    () => [
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
    ],
    [],
  )

  return <Tree.Root items={items} withGuideLine />
}

export const IndicatorHidden: Story = () => {
  const items = useMemo<Tree.ItemType[]>(
    () => [
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
    ],
    [],
  )

  return <Tree.Root indicatorHidden items={items} />
}

export const Animated: Story = () => {
  const items = useMemo<Tree.ItemType[]>(
    () => [
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
    ],
    [],
  )

  return <Tree.Root animated items={items} />
}

export const Multiple: Story = () => {
  const items = useMemo<Tree.ItemType[]>(
    () => [
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
    ],
    [],
  )

  return <Tree.Root items={items} multiple />
}

export const DefaultSelected: Story = () => {
  const items = useMemo<Tree.ItemType[]>(
    () => [
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
    ],
    [],
  )

  return <Tree.Root defaultSelectedValue="node_modules" items={items} />
}

export const Checkable: Story = () => {
  const items = useMemo<Tree.ItemType[]>(
    () => [
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
    ],
    [],
  )

  return <Tree.Root checkable items={items} />
}

export const DefaultChecked: Story = () => {
  const items = useMemo<Tree.ItemType[]>(
    () => [
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
    ],
    [],
  )

  return (
    <Tree.Root checkable defaultCheckedValue={["package.json"]} items={items} />
  )
}

export const DefaultExpanded: Story = () => {
  const items = useMemo<Tree.ItemType[]>(
    () => [
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
    ],
    [],
  )

  return (
    <Tree.Root defaultExpandedValue={["src", "src/components"]} items={items} />
  )
}

export const ExpandCollapseAll: Story = () => {
  const controlRef = useRef<Tree.Control>(null)
  const items = useMemo<Tree.ItemType[]>(
    () => [
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
    ],
    [],
  )

  return (
    <>
      <ButtonGroup.Root>
        <ButtonGroup.Item onClick={() => controlRef.current?.expand()}>
          Expand All
        </ButtonGroup.Item>
        <ButtonGroup.Item onClick={() => controlRef.current?.collapse()}>
          Collapse All
        </ButtonGroup.Item>
      </ButtonGroup.Root>

      <Tree.Root controlRef={controlRef} items={items} />
    </>
  )
}

export const Async: Story = () => {
  const items = useMemo<Tree.ItemType[]>(
    () => [
      {
        asyncChildren: async () => {
          await wait(1000)

          return [
            { label: "react" },
            { label: "react-dom" },
            {
              children: [{ label: "react" }, { label: "utils" }],
              label: "@yamada-ui",
            },
          ]
        },
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
    ],
    [],
  )

  return <Tree.Root items={items} />
}

export const LoadingScheme: Story = () => {
  const items = useMemo<Tree.ItemType[]>(
    () => [
      {
        asyncChildren: async () => {
          await wait(1000)

          return [
            { label: "react" },
            { label: "react-dom" },
            {
              children: [{ label: "react" }, { label: "utils" }],
              label: "@yamada-ui",
            },
          ]
        },
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
    ],
    [],
  )

  return <Tree.Root items={items} loadingScheme="dots" />
}

export const StartElement: Story = () => {
  const items = useMemo<Tree.ItemType[]>(
    () => [
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
    ],
    [],
  )

  return (
    <Tree.Root
      items={items}
      startElement={{
        group: ({ expanded }) =>
          expanded ? <FolderOpenIcon /> : <FolderClosedIcon />,
        item: <FileIcon />,
      }}
    />
  )
}

export const EndElement: Story = () => {
  const items = useMemo<Tree.ItemType[]>(
    () => [
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
    ],
    [],
  )

  return <Tree.Root endElement={<LockKeyholeIcon />} items={items} />
}

export const CustomIndicator: Story = () => {
  const items = useMemo<Tree.ItemType[]>(
    () => [
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
    ],
    [],
  )

  return (
    <Tree.Root
      indicator={({ expanded }) =>
        expanded ? <SquareMinusIcon /> : <SquarePlusIcon />
      }
      items={items}
      indicatorProps={{ _expanded: { transform: "rotate(0deg)" } }}
    />
  )
}

export const CustomControl: Story = () => {
  const [selectedValue, setSelectedValue] = useState<string>("package.json")
  const [checkedValue, setCheckedValue] = useState<string[]>(["README.md"])
  const [expandedValue, setExpandedValue] = useState<string[]>(["node_modules"])
  const items = useMemo<Tree.ItemType[]>(
    () => [
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
    ],
    [],
  )

  return (
    <>
      <VStack gap="0">
        <Text>Selected Value: {selectedValue}</Text>
        <Text>Checked Value: {checkedValue.join(", ")}</Text>
        <Text>Expanded Value: {expandedValue.join(", ")}</Text>
      </VStack>

      <Tree.Root
        checkable
        checkedValue={checkedValue}
        expandedValue={expandedValue}
        items={items}
        selectedValue={selectedValue}
        onCheckedChange={setCheckedValue}
        onExpandedChange={setExpandedValue}
        onSelectedChange={setSelectedValue}
      />
    </>
  )
}
