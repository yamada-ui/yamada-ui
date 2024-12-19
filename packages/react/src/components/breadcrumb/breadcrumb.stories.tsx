import type { Meta, StoryFn } from "@storybook/react"
import type { BreadcrumbGenerateItem } from "./breadcrumb"
import { useMemo } from "react"
import { ChevronsRightIcon } from "../icon"
import { Menu, MenuButton, MenuItem, MenuList } from "../menu"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
} from "./breadcrumb"

type Story = StoryFn<typeof Breadcrumb>

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  title: "Components / Breadcrumb",
}

export default meta

export const Basic: Story = () => {
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
      <BreadcrumbItem currentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export const WithItems: Story = () => {
  const items = useMemo<BreadcrumbGenerateItem[]>(
    () => [
      { href: "/", name: "サイヤ人編" },
      { href: "/", name: "ナメック星編" },
      { href: "/", name: "人造人間編" },
      { href: "/", name: "魔人ブウ編", currentPage: true },
    ],
    [],
  )

  return <Breadcrumb items={items} />
}

export const WithBoundaries: Story = () => {
  const items = useMemo<BreadcrumbGenerateItem[]>(
    () => [
      { href: "/", name: "サイヤ人編" },
      { href: "/", name: "ナメック星編" },
      { href: "/", name: "人造人間編" },
      { href: "/", name: "魔人ブウ編", currentPage: true },
    ],
    [],
  )

  return <Breadcrumb endBoundaries={1} items={items} startBoundaries={1} />
}

export const CustomBoundaries: Story = () => {
  const items = useMemo<BreadcrumbGenerateItem[]>(
    () => [
      { href: "/", name: "サイヤ人編" },
      { href: "/", name: "ナメック星編", ellipsisPage: true },
      { href: "/", name: "人造人間編", ellipsisPage: true },
      { href: "/", name: "魔人ブウ編", currentPage: true },
    ],
    [],
  )

  return <Breadcrumb items={items} />
}

export const CustomEllipsis: Story = () => {
  const items = useMemo<BreadcrumbGenerateItem[]>(
    () => [
      { href: "/", name: "サイヤ人編" },
      { href: "/", name: "ナメック星編" },
      { href: "/", name: "人造人間編" },
      { href: "/", name: "魔人ブウ編", currentPage: true },
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
              {items.map(({ href, name }, index) => (
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

export const WithSeparator: Story = () => {
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
      <BreadcrumbItem currentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export const WithCustomSeparator: Story = () => {
  return (
    <Breadcrumb
      separator={<ChevronsRightIcon color="gray.300" />}
      separatorProps={{
        alignItems: "center",
        display: "inline-flex",
        justifyContent: "center",
      }}
    >
      <BreadcrumbItem>
        <BreadcrumbLink href="/">サイヤ人編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">ナメック星編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem currentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export const WithEllipsis: Story = () => {
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
      <BreadcrumbItem currentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export const WithMenu: Story = () => {
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
      <BreadcrumbItem currentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
