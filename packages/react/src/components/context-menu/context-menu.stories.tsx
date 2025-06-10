// type Story = StoryFn<typeof ContextMenu>

import type { Meta, StoryFn } from "@storybook/react-vite"

// const meta: Meta<typeof ContextMenu> = {
//   component: ContextMenu,
//   title: "Components / ContextMenu",
// }
//

type Story = StoryFn

const meta: Meta = {
  title: "Components / ContextMenu",
}

export default meta

// export const Basic: Story = () => {
//   return (
//     <ContextMenu>
//       <ContextMenuTrigger
//         as={Center}
//         borderStyle="dashed"
//         borderWidth="1px"
//         h="xs"
//         p="md"
//         rounded="md"
//         w="full"
//       >
//         <Text>Right click here</Text>
//       </ContextMenuTrigger>

//       <MenuList>
//         <MenuItem>Undo</MenuItem>
//         <MenuItem>Redo</MenuItem>
//         <MenuSeparator />
//         <MenuItem disabled>Cut</MenuItem>
//         <MenuItem>Copy</MenuItem>
//         <MenuItem>Paste</MenuItem>
//       </MenuList>
//     </ContextMenu>
//   )
// }

export const temp: Story = () => {
  return <>temp</>
}
