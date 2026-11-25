import { page, render } from "#test/browser"
import { Sidebar } from "."
import { extendConfig } from "../../providers/ui-provider"

describe("<Sidebar />", () => {
  test("shows the desktop side panel with upward breakpoints", async () => {
    await page.viewport(1512, 900)

    await render(
      <Sidebar.Root>
        <Sidebar.SidePanel items={[{ label: "Home", value: "/" }]} />
      </Sidebar.Root>,
      {
        providerProps: {
          config: extendConfig({ breakpoint: { direction: "up" } }),
        },
      },
    )

    await expect.element(page.getByRole("complementary")).toBeVisible()
  })
})
