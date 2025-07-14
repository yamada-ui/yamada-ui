import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { useMemo } from "react"
import { ChevronsRightIcon } from "../icon"
// import { Menu, MenuButton, MenuItem, MenuList } from "../menu"
import { Breadcrumb } from "./"

type Story = StoryFn<typeof Breadcrumb.Root>

const meta: Meta<typeof Breadcrumb.Root> = {
  component: Breadcrumb.Root,
  title: "Components / Breadcrumb",
}

export default meta

export const Basic: Story = () => {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.Link href="/">サイヤ人編</Breadcrumb.Link>
      <Breadcrumb.Link href="/">ナメック星編</Breadcrumb.Link>
      <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
      <Breadcrumb.Link href="/" currentPage>
        魔人ブウ編
      </Breadcrumb.Link>
    </Breadcrumb.Root>
  )
}

export const Items: Story = () => {
  const items = useMemo<Breadcrumb.RootProps["items"]>(
    () => [
      { href: "/", label: "サイヤ人編" },
      { href: "/", label: "ナメック星編" },
      { href: "/", label: "人造人間編" },
      { href: "/", currentPage: true, label: "魔人ブウ編" },
    ],
    [],
  )

  return <Breadcrumb.Root items={items} />
}

export const Variant: Story = () => {
  const items = useMemo<Breadcrumb.RootProps["items"]>(
    () => [
      { href: "/", label: "サイヤ人編" },
      { href: "/", label: "ナメック星編" },
      { href: "/", label: "人造人間編" },
      { href: "/", currentPage: true, label: "魔人ブウ編" },
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["plain", "underline"]}>
      {(_, row, key) => (
        <Breadcrumb.Root key={key} variant={row} items={items} />
      )}
    </PropsTable>
  )
}

export const Size: Story = () => {
  const items = useMemo<Breadcrumb.RootProps["items"]>(
    () => [
      { href: "/", label: "サイヤ人編" },
      { href: "/", label: "ナメック星編" },
      { href: "/", label: "人造人間編" },
      { href: "/", currentPage: true, label: "魔人ブウ編" },
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => <Breadcrumb.Root key={key} size={row} items={items} />}
    </PropsTable>
  )
}

export const Boundaries: Story = () => {
  const items = useMemo<Breadcrumb.RootProps["items"]>(
    () => [
      { href: "/", label: "サイヤ人編" },
      { href: "/", label: "ナメック星編" },
      { href: "/", label: "人造人間編" },
      { href: "/", currentPage: true, label: "魔人ブウ編" },
    ],
    [],
  )

  return <Breadcrumb.Root endBoundaries={1} items={items} startBoundaries={1} />
}

export const Ellipsis: Story = () => {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.Link href="/">孫悟空少年編</Breadcrumb.Link>
      <Breadcrumb.Ellipsis />
      <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
      <Breadcrumb.Link href="/" currentPage>
        魔人ブウ編
      </Breadcrumb.Link>
    </Breadcrumb.Root>
  )
}

export const Separator: Story = () => {
  return (
    <>
      <Breadcrumb.Root separator="/">
        <Breadcrumb.Link href="/">サイヤ人編</Breadcrumb.Link>
        <Breadcrumb.Link href="/">ナメック星編</Breadcrumb.Link>
        <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
        <Breadcrumb.Link href="/" currentPage>
          魔人ブウ編
        </Breadcrumb.Link>
      </Breadcrumb.Root>

      <Breadcrumb.Root separator={<ChevronsRightIcon />}>
        <Breadcrumb.Link href="/">サイヤ人編</Breadcrumb.Link>
        <Breadcrumb.Link href="/">ナメック星編</Breadcrumb.Link>
        <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
        <Breadcrumb.Link href="/" currentPage>
          魔人ブウ編
        </Breadcrumb.Link>
      </Breadcrumb.Root>
    </>
  )
}

// export const CustomEllipsis: Story = () => {
//   const items = useMemo<Breadcrumb.RootProps["items"]>(
//     () => [
//       { href: "/", label: "サイヤ人編" },
//       { href: "/", label: "ナメック星編" },
//       { href: "/", label: "人造人間編" },
//       { href: "/", currentPage: true, label: "魔人ブウ編" },
//     ],
//     [],
//   )

//   return (
//     <>
//       <Breadcrumb.Root
//         ellipsis={({ items }) => {
//           return (
//             <Menu>
//               <MenuButton>
//                 <Breadcrumb.Ellipsis />
//               </MenuButton>

//               <MenuList>
//                 {items.map(({ href, label }, index) => (
//                   <MenuItem key={index} as="a" href={href}>
//                     {label}
//                   </MenuItem>
//                 ))}
//               </MenuList>
//             </Menu>
//           )
//         }}
//         endBoundaries={1}
//         items={items}
//         startBoundaries={1}
//       />

//       <Breadcrumb.Root>
//         <Breadcrumb.Link href="/">孫悟空少年編</Breadcrumb.Link>
//         <Menu>
//           <MenuButton>
//             <Breadcrumb.Ellipsis />
//           </MenuButton>

//           <MenuList>
//             <MenuItem as="a" href="/">
//               ピッコロ大魔王編
//             </MenuItem>
//             <MenuItem as="a" href="/">
//               サイヤ人編
//             </MenuItem>
//             <MenuItem as="a" href="/">
//               フリーザ編
//             </MenuItem>
//           </MenuList>
//         </Menu>
//         <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
//         <Breadcrumb.Link href="/" currentPage>
//           魔人ブウ編
//         </Breadcrumb.Link>
//       </Breadcrumb.Root>
//     </>
//   )
// }
