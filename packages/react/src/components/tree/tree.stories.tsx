import type { Meta, StoryFn } from "@storybook/react-vite"
import type { TreeNode as TreeNodeType } from "./tree"
import { PropsTable } from "#storybook"
import { useState } from "react"
import { COLOR_SCHEMES } from "../../utils"
import { Button } from "../button"
import { Input } from "../input"
import { HStack, VStack } from "../stack"
import { Tree } from "./index"
import { createTreeCollection } from "./tree"

type Story = StoryFn<typeof Tree.Root>

const meta: Meta<typeof Tree.Root> = {
  component: Tree.Root,
  parameters: { layout: "centered" },
  title: "Components / Tree",
}

export default meta

const sampleNodes: TreeNodeType[] = [
  {
    id: "1",
    name: "Documents",
    children: [
      {
        id: "1-1",
        name: "Work",
        children: [
          { id: "1-1-1", name: "Project A" },
          { id: "1-1-2", name: "Project B" },
        ],
      },
      { id: "1-2", name: "Personal" },
    ],
  },
  {
    id: "2",
    name: "Pictures",
    children: [
      { id: "2-1", name: "Vacation" },
      { id: "2-2", name: "Family" },
    ],
  },
  { id: "3", name: "Music" },
]

// Create a tree collection for advanced examples
const treeCollection = createTreeCollection({
  nodeToString: (node) => node.name,
  nodeToValue: (node) => node.id,
  rootNode: {
    id: "root",
    name: "Root",
    children: sampleNodes,
  },
})

export const BasicTree = () => (
  <Tree.Root nodes={sampleNodes}>
    <Tree.Tree>
      {sampleNodes.map((node, index) => (
        <Tree.Node key={node.id || index} node={node} />
      ))}
    </Tree.Tree>
  </Tree.Root>
)

export const BasicTreeWithCollection = () => (
  <Tree.Root collection={treeCollection}>
    <Tree.Tree>
      <Tree.Node
        node={treeCollection.getNode("root")!}
        render={({ node, nodeState }) =>
          nodeState.isBranch ? (
            <Tree.Branch>
              <Tree.BranchControl>
                <Tree.BranchIndicator />
                <Tree.BranchText>{node.name}</Tree.BranchText>
              </Tree.BranchControl>
              <Tree.BranchContent>
                <Tree.BranchIndentGuide />
                {node.children?.map((child) => (
                  <Tree.Node
                    key={treeCollection.getNodeValue(child)}
                    node={child}
                  />
                ))}
              </Tree.BranchContent>
            </Tree.Branch>
          ) : (
            <Tree.Item>
              <Tree.ItemText>{node.name}</Tree.ItemText>
            </Tree.Item>
          )
        }
      />
    </Tree.Tree>
  </Tree.Root>
)

export const WithDefaultExpanded = () => (
  <Tree.Root defaultExpanded={["1", "1-1"]} nodes={sampleNodes}>
    <Tree.Tree>
      {sampleNodes.map((node, index) => (
        <Tree.Node key={node.id || index} node={node} />
      ))}
    </Tree.Tree>
  </Tree.Root>
)

export const WithCheckbox = () => {
  return (
    <Tree.Root
      defaultExpanded={["1", "2"]}
      nodes={sampleNodes}
      selectionMode="checkbox"
    >
      <Tree.Tree>
        {sampleNodes.map((node, index) => (
          <Tree.Node key={node.id || index} node={node} />
        ))}
      </Tree.Tree>
    </Tree.Root>
  )
}

export const WithMultipleSelection = () => {
  return (
    <Tree.Root
      defaultExpanded={["1", "2"]}
      nodes={sampleNodes}
      selectionMode="multiple"
    >
      <Tree.Tree>
        {sampleNodes.map((node, index) => (
          <Tree.Node key={node.id || index} node={node} />
        ))}
      </Tree.Tree>
    </Tree.Root>
  )
}

export const ExpandCollapseAll = () => {
  const [expandedIds, setExpandedIds] = useState<string[]>([])

  const handleExpandedChange = (newExpandedIds: string[]) => {
    setExpandedIds(newExpandedIds)
  }

  const getAllBranchIds = (nodes: TreeNodeType[]): string[] => {
    const branchIds: string[] = []

    const traverse = (nodeList: TreeNodeType[]) => {
      for (const node of nodeList) {
        if (node.children && node.children.length > 0) {
          branchIds.push(node.id)
          traverse(node.children)
        }
      }
    }

    traverse(nodes)
    return branchIds
  }

  return (
    <VStack>
      <HStack>
        <Button
          onClick={() => {
            const allBranchIds = getAllBranchIds(sampleNodes)
            setExpandedIds(allBranchIds)
          }}
        >
          Expand All
        </Button>
        <Button onClick={() => setExpandedIds([])}>Collapse All</Button>
      </HStack>
      <Tree.Root
        expandedIds={expandedIds}
        nodes={sampleNodes}
        onExpandedChange={handleExpandedChange}
      >
        <Tree.Tree>
          {sampleNodes.map((node, index) => (
            <Tree.Node key={node.id || index} node={node} />
          ))}
        </Tree.Tree>
      </Tree.Root>
    </VStack>
  )
}

export const AsyncLoading = () => {
  const loadChildren = async (node: TreeNodeType): Promise<TreeNodeType[]> => {
    if (node.id.includes("static")) {
      return [
        { id: `${node.id}-static-1`, name: `${node.name} Static 1` },
        { id: `${node.id}-static-2`, name: `${node.name} Static 2` },
      ]
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return [
      { id: `${node.id}-async-1`, name: `${node.name} Child 1` },
      { id: `${node.id}-async-2`, name: `${node.name} Child 2` },
    ]
  }

  const asyncNodes: TreeNodeType[] = [
    {
      id: "async-1",
      name: "Async Folder 1",
    },
    {
      id: "async-2",
      name: "Async Folder 2",
    },
    { id: "static", name: "Static Item" },
  ]

  return (
    <Tree.Root loadChildren={loadChildren} nodes={asyncNodes}>
      <Tree.Tree>
        {asyncNodes.map((node, index) => (
          <Tree.Node key={node.id || index} node={node} />
        ))}
      </Tree.Tree>
    </Tree.Root>
  )
}

export const CustomIcons = () => {
  return (
    <Tree.Root defaultExpanded={["1", "2"]} nodes={sampleNodes}>
      <Tree.Tree>
        {sampleNodes.map((node, index) => (
          <Tree.Node
            key={node.id || index}
            node={node}
            render={({ children, node, nodeState }) =>
              nodeState.isBranch ? (
                <Tree.Branch>
                  <Tree.BranchControl>
                    <Tree.BranchIndicator>📁</Tree.BranchIndicator>
                    <Tree.BranchText>{node.name}</Tree.BranchText>
                  </Tree.BranchControl>
                  <Tree.BranchContent>{children}</Tree.BranchContent>
                </Tree.Branch>
              ) : (
                <Tree.Item>
                  <Tree.ItemIndicator>🎵</Tree.ItemIndicator>
                  <Tree.ItemText>{node.name}</Tree.ItemText>
                </Tree.Item>
              )
            }
          />
        ))}
      </Tree.Tree>
    </Tree.Root>
  )
}

export const DisabledNodes = () => {
  const disabledNodes: TreeNodeType[] = [
    {
      id: "1",
      name: "Enabled Folder",
      children: [
        { id: "1-1", name: "Enabled Child" },
        { id: "1-2", name: "Disabled Child", disabled: true },
      ],
    },
    {
      id: "2",
      name: "Disabled Folder",
      children: [{ id: "2-1", name: "Child in disabled folder" }],
      disabled: true,
    },
    { id: "3", name: "Enabled Item" },
  ]

  return (
    <Tree.Root nodes={disabledNodes}>
      <Tree.Tree>
        {disabledNodes.map((node, index) => (
          <Tree.Node key={node.id || index} node={node} />
        ))}
      </Tree.Tree>
    </Tree.Root>
  )
}

export const ControlledExpansion = () => {
  const [expandedIds, setExpandedIds] = useState<string[]>(["1"])

  const handleExpandedChange = (newExpandedIds: string[]) => {
    setExpandedIds(newExpandedIds)
  }

  return (
    <VStack>
      <HStack>
        <Button onClick={() => setExpandedIds(["1", "1-1"])}>
          Expand Work
        </Button>
        <Button onClick={() => setExpandedIds(["2"])}>Expand Pictures</Button>
        <Button onClick={() => setExpandedIds([])}>Collapse All</Button>
      </HStack>
      <Tree.Root
        expandedIds={expandedIds}
        nodes={sampleNodes}
        onExpandedChange={handleExpandedChange}
      >
        <Tree.Tree>
          {sampleNodes.map((node, index) => (
            <Tree.Node key={node.id || index} node={node} />
          ))}
        </Tree.Tree>
      </Tree.Root>
    </VStack>
  )
}

export const WithoutIndentation = () => {
  return (
    <Tree.Root nodes={sampleNodes} showIndentGuide={false}>
      <Tree.Tree>
        <Tree.Label>Tree without indentation guides</Tree.Label>
        {sampleNodes.map((node, index) => (
          <Tree.Node key={node.id || index} node={node} />
        ))}
      </Tree.Tree>
    </Tree.Root>
  )
}

export const Variants: Story = () => {
  return (
    <PropsTable
      columns={["ghost", "outline", "solid", "subtle", "surface"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <Tree.Root
            key={key}
            colorScheme={row}
            variant={column}
            defaultExpanded={["1", "2"]}
            nodes={sampleNodes}
          >
            <Tree.Tree>
              <Tree.Label>{`${row} ${column}`}</Tree.Label>
              {sampleNodes.map((node, index) => (
                <Tree.Node key={node.id || index} node={node} />
              ))}
            </Tree.Tree>
          </Tree.Root>
        )
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
        return (
          <Tree.Root
            key={key}
            colorScheme={row}
            size={column}
            defaultExpanded={["1", "2"]}
            nodes={sampleNodes}
          >
            <Tree.Tree>
              <Tree.Label>{`${row} ${column}`}</Tree.Label>
              {sampleNodes.map((node, index) => (
                <Tree.Node key={node.id || index} node={node} />
              ))}
            </Tree.Tree>
          </Tree.Root>
        )
      }}
    </PropsTable>
  )
}

export const WithFiltering = () => {
  const [filterQuery, setFilterQuery] = useState("")

  const filterFunction = (node: TreeNodeType, query: string) => {
    return node.name.toLowerCase().includes(query.toLowerCase())
  }

  return (
    <VStack gap="4">
      <Input
        placeholder="Filter nodes..."
        value={filterQuery}
        onChange={(e) => setFilterQuery(e.target.value)}
      />
      <Tree.Root
        defaultExpanded={["1", "2"]}
        filterNodes={filterFunction}
        filterQuery={filterQuery}
        nodes={sampleNodes}
      >
        <Tree.Tree>
          <Tree.Label>
            Filtered Tree (
            {filterQuery
              ? `showing results for "${filterQuery}"`
              : "showing all"}
            )
          </Tree.Label>
          {sampleNodes.map((node, index) => (
            <Tree.Node key={node.id || index} node={node} />
          ))}
        </Tree.Tree>
      </Tree.Root>
    </VStack>
  )
}

export const ShowIndentGuide = () => {
  return (
    <VStack gap="4">
      <Tree.Root
        defaultExpanded={["1", "2"]}
        nodes={sampleNodes}
        showIndentGuide
      >
        <Tree.Tree>
          <Tree.Label>Tree with Indent Guide</Tree.Label>
          {sampleNodes.map((node, index) => (
            <Tree.Node key={node.id || index} node={node} />
          ))}
        </Tree.Tree>
      </Tree.Root>
    </VStack>
  )
}
