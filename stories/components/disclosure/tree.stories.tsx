import {
  faFolder,
  faMinus,
  faPlus,
  faPoo,
} from "@fortawesome/free-solid-svg-icons"
import type { Meta, StoryFn } from "@storybook/react"
import { Icon } from "@yamada-ui/fontawesome"
import { Tree, TreeItem } from "@yamada-ui/react"

type Story = StoryFn<typeof Tree>

const meta: Meta<typeof Tree> = {
  title: "Components / Disclosure / Tree",
  component: Tree,
}

export default meta

export const basic: Story = () => {
  return (
    <Tree>
      <TreeItem>Item 1 (no-item)</TreeItem>
      <TreeItem>
        Item 1
        <TreeItem>
          Item 2<TreeItem>Item 3</TreeItem>
        </TreeItem>
      </TreeItem>
    </Tree>
  )
}

export const outline: Story = () => {
  return (
    <Tree variant="outline">
      <TreeItem>Item 1 (no-item)</TreeItem>
      <TreeItem>
        Item 1
        <TreeItem>
          Item 2
          <TreeItem>
            Item 3<TreeItem>Item 4</TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeItem>
      <TreeItem>
        Item 5<TreeItem>Item 6</TreeItem>
      </TreeItem>
    </Tree>
  )
}

export const notExpanded: Story = () => {
  return (
    <Tree variant="outline" isDefaultExpanded={false}>
      <TreeItem>Item 1 (no-item)</TreeItem>
      <TreeItem>
        Item 1
        <TreeItem>
          Item 2
          <TreeItem>
            Item 3<TreeItem>Item 4</TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeItem>
      <TreeItem>
        Item 5<TreeItem>Item 6</TreeItem>
      </TreeItem>
    </Tree>
  )
}

export const iconHidden: Story = () => {
  return (
    <Tree variant="outline" iconHidden>
      <TreeItem>Item 1 (no-item)</TreeItem>
      <TreeItem>
        Item 1
        <TreeItem>
          Item 2
          <TreeItem>
            Item 3<TreeItem>Item 4</TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeItem>
      <TreeItem>
        Item 5<TreeItem>Item 6</TreeItem>
      </TreeItem>
    </Tree>
  )
}

export const customIcon: Story = () => {
  return (
    <Tree variant="outline" icon={<Icon icon={faPoo} color="orange.700" />}>
      <TreeItem>Item 1 (no-item)</TreeItem>
      <TreeItem>
        Item 1
        <TreeItem>
          Item 2
          <TreeItem>
            Item 3<TreeItem>Item 4</TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeItem>
      <TreeItem>
        Item 5<TreeItem>Item 6</TreeItem>
      </TreeItem>
    </Tree>
  )
}

export const controlledIcon: Story = () => {
  return (
    <Tree
      variant="outline"
      icon={({ isExpanded }) => (
        <Icon
          icon={!isExpanded ? faPlus : faMinus}
          color={["blackAlpha.800", "whiteAlpha.700"]}
        />
      )}
    >
      <TreeItem>Item 1 (no-item)</TreeItem>
      <TreeItem>
        Item 1
        <TreeItem>
          Item 2
          <TreeItem>
            Item 3<TreeItem>Item 4</TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeItem>
      <TreeItem>
        Item 5<TreeItem>Item 6</TreeItem>
      </TreeItem>
    </Tree>
  )
}

export const leftIcon: Story = () => {
  return (
    <Tree variant="outline" leftIcon={<Icon icon={faFolder} mx="2" />}>
      <TreeItem>
        Item 1
        <TreeItem leftIcon={<Icon icon={faPoo} color="orange.700" mx="2" />}>
          Item 2
          <TreeItem>
            Item 3<TreeItem iconHidden>Item 4</TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeItem>
      <TreeItem
        leftIcon={({ isExpanded }) => (
          <Icon
            icon={!isExpanded ? faPlus : faMinus}
            color={["blackAlpha.800", "whiteAlpha.700"]}
          />
        )}
      >
        Item 5<TreeItem>Item 6</TreeItem>
      </TreeItem>
    </Tree>
  )
}

export const selectMultiple: Story = () => {
  return (
    <Tree
      defaultSelectedValue={[1, 3]}
      variant="outline"
      onSelect={(i) => console.log("Selected", i)}
      selectMultiple
    >
      <TreeItem>Item 1 (no-item)</TreeItem>
      <TreeItem>
        Item 1
        <TreeItem>
          Item 2
          <TreeItem>
            Item 3<TreeItem>Item 4</TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeItem>
      <TreeItem>
        Item 5<TreeItem>Item 6</TreeItem>
      </TreeItem>
    </Tree>
  )
}

export const notSelectable: Story = () => {
  return (
    <Tree variant="outline" isSelectable={false}>
      <TreeItem>Item 1 (no-item)</TreeItem>
      <TreeItem>
        Item 1
        <TreeItem>
          Item 2
          <TreeItem>
            Item 3<TreeItem>Item 4</TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeItem>
      <TreeItem>
        Item 5<TreeItem>Item 6</TreeItem>
      </TreeItem>
    </Tree>
  )
}

export const disableItems: Story = () => {
  return (
    <Tree variant="outline">
      <TreeItem>Item 1 (no-item)</TreeItem>
      <TreeItem>
        Item 1
        <TreeItem isDisabled>
          Item 2
          <TreeItem>
            Item 3<TreeItem>Item 4</TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeItem>
      <TreeItem>
        Item 5<TreeItem>Item 6</TreeItem>
      </TreeItem>
    </Tree>
  )
}
