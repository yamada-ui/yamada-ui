import type { TreeNode as TreeNodeType } from "./tree";
import React from "react"
import { TreeNode, TreeRoot } from "./tree"

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

export const BasicTree = () => (
  <TreeRoot nodes={sampleNodes}>
    <TreeNode node={sampleNodes[0]} />
    <TreeNode node={sampleNodes[1]} />
    <TreeNode node={sampleNodes[2]} />
  </TreeRoot>
)

export const TreeWithDefaultExpanded = () => (
  <TreeRoot defaultExpanded={["1", "1-1"]} nodes={sampleNodes}>
    <TreeNode node={sampleNodes[0]} />
    <TreeNode node={sampleNodes[1]} />
    <TreeNode node={sampleNodes[2]} />
  </TreeRoot>
)

export const TreeWithMultipleSelection = () => (
  <TreeRoot
    defaultSelected={["1-1-1", "2-1"]}
    nodes={sampleNodes}
    selectionMode="multiple"
  >
    <TreeNode node={sampleNodes[0]} />
    <TreeNode node={sampleNodes[1]} />
    <TreeNode node={sampleNodes[2]} />
  </TreeRoot>
)
