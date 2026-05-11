import { a11y } from "#test"
import { Button } from "../button"
import { Menu } from "./"
import { fullItems } from "./menu.test.fixtures"

describe("<Menu />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Menu.Root defaultOpen>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content items={fullItems} />
      </Menu.Root>,
    )
  })
})
