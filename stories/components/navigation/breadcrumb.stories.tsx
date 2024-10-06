import type { Meta, StoryFn } from "@storybook/react"
import type { BreadcrumbGenerateItem } from "@yamada-ui/react"
import { ChevronsRight } from "@yamada-ui/lucide"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@yamada-ui/react"
import { useMemo } from "react"
import { BreadcrumbEllipsis } from "../../../packages/components/breadcrumb/src/breadcrumb"

type Story = StoryFn<typeof Breadcrumb>

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  title: "Components / Navigation / Breadcrumb",
}

export default meta

export const basic: Story = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">サイヤ人編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">ナメック星編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export const withItems: Story = () => {
  const items = useMemo<BreadcrumbGenerateItem[]>(
    () => [
      { name: "サイヤ人編", href: "/" },
      { name: "ナメック星編", href: "/" },
      { name: "人造人間編", href: "/" },
      { name: "魔人ブウ編", href: "/", isCurrentPage: true },
    ],
    [],
  )

  return <Breadcrumb items={items} />
}

export const withBoundaries: Story = () => {
  const items = useMemo<BreadcrumbGenerateItem[]>(
    () => [
      { name: "サイヤ人編", href: "/" },
      { name: "ナメック星編", href: "/" },
      { name: "人造人間編", href: "/" },
      { name: "魔人ブウ編", href: "/", isCurrentPage: true },
    ],
    [],
  )

  return <Breadcrumb endBoundaries={1} items={items} startBoundaries={1} />
}

export const customBoundaries: Story = () => {
  const items = useMemo<BreadcrumbGenerateItem[]>(
    () => [
      { name: "サイヤ人編", href: "/" },
      { name: "ナメック星編", href: "/", isEllipsisPage: true },
      { name: "人造人間編", href: "/", isEllipsisPage: true },
      { name: "魔人ブウ編", href: "/", isCurrentPage: true },
    ],
    [],
  )

  return <Breadcrumb items={items} />
}

export const customEllipsis: Story = () => {
  const items = useMemo<BreadcrumbGenerateItem[]>(
    () => [
      { name: "サイヤ人編", href: "/" },
      { name: "ナメック星編", href: "/" },
      { name: "人造人間編", href: "/" },
      { name: "魔人ブウ編", href: "/", isCurrentPage: true },
    ],
    [],
  )

  return (
    <Breadcrumb
      ellipsis={({ items }) => {
        return (
          <Menu>
            <MenuButton>
              <BreadcrumbEllipsis />
            </MenuButton>

            <MenuList>
              {items.map(({ name, href }, index) => (
                <MenuItem key={index} as="a" href={href}>
                  {name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        )
      }}
      endBoundaries={1}
      items={items}
      startBoundaries={1}
    />
  )
}

export const withSeparator: Story = () => {
  return (
    <Breadcrumb separator="-">
      <BreadcrumbItem>
        <BreadcrumbLink href="/">サイヤ人編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">ナメック星編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export const withCustomSeparator: Story = () => {
  return (
    <Breadcrumb separator={<ChevronsRight color="gray.300" />}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">サイヤ人編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">ナメック星編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export const withEllipsis: Story = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">孫悟空少年編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbEllipsis />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export const withMenu: Story = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">孫悟空少年編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Menu>
          <MenuButton>
            <BreadcrumbEllipsis />
          </MenuButton>

          <MenuList>
            <MenuItem as="a" href="/">
              ピッコロ大魔王編
            </MenuItem>
            <MenuItem as="a" href="/">
              サイヤ人編
            </MenuItem>
            <MenuItem as="a" href="/">
              フリーザ編
            </MenuItem>
          </MenuList>
        </Menu>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
