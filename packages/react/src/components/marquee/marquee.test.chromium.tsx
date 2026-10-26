import { cdp } from "vitest/browser"
import { page, render } from "#test/browser"
import { Marquee } from "./"

describe("<Marquee />", () => {
  afterEach(async () => {
    await cdp().send("Emulation.setEmulatedMedia", { features: [] })
  })

  test("disables motion and hides copies when reduced motion is preferred", async () => {
    await cdp().send("Emulation.setEmulatedMedia", {
      features: [{ name: "prefers-reduced-motion", value: "reduce" }],
    })

    await render(
      <Marquee.Root aria-label="Brands" w="100px">
        <Marquee.Content data-testid="content">
          <Marquee.Item w="200px">Yamada UI</Marquee.Item>
        </Marquee.Content>
      </Marquee.Root>,
    )

    await expect.element(page.getByTestId("content")).toHaveStyle({
      animationName: "none",
      transform: "none",
    })
    await expect
      .element(page.getByRole("region", { name: "Brands" }))
      .toHaveStyle({
        overflow: "auto",
      })
    const [original, ...copies] = page
      .getByText("Yamada UI", { exact: true })
      .all()

    await expect.element(original!).toBeVisible()
    for (const copy of copies) await expect.element(copy).not.toBeVisible()
  })
})
