import { MenuList, MenuItem, MenuDivider } from "@yamada-ui/menu"
import { render, fireEvent } from "@yamada-ui/test"
import { Text } from "@yamada-ui/typography"
import { ContextMenu, ContextMenuTrigger } from "../src"

describe("<ContextMenu />", () => {
  test("ContextMenu renders correctly", async () => {
    const { getByText, findByText } = render(
      <ContextMenu>
        <ContextMenuTrigger>
          <Text style={{ textAlign: "center" }}>Right Click Here</Text>
        </ContextMenuTrigger>
        <MenuList>
          <MenuItem>Undo</MenuItem>
          <MenuItem>Redo</MenuItem>
          <MenuDivider />
          <MenuItem isDisabled>Cut</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Paste</MenuItem>
        </MenuList>
      </ContextMenu>,
    )

    await fireEvent.contextMenu(getByText("Right Click Here"))
    const undoText = await findByText("Undo")
    expect(undoText).toBeVisible()
  })
})
