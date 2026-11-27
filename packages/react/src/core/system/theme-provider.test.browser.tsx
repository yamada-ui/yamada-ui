import type { ThemeScheme } from "./index.type"
import { page, render } from "#test/browser"
import { Box } from "../../components/box"
import { Button } from "../../components/button"
import { Modal } from "../../components/modal"
import { extendTheme } from "../../providers/default-provider"
import { SemanticTokenScope, ThemeSchemeScope } from "./theme-provider"

const theme = extendTheme({
  colors: { purple: { 50: "#f0e0ff", 950: "#201030" } },
  semanticTokens: {
    colors: {
      bg: { panel: ["#ffffff", "#000000"] },
      purple: { solid: ["#8030d0", "#b080f0"] },
    },
  },
})

describe("<ThemeSchemeScope />", () => {
  test("applies a registered scheme without changing the document scheme", async () => {
    const theme = extendTheme({
      semanticTokens: {
        colors: {
          blue: { solid: "#204080" },
          pink: { solid: "#c04080" },
        },
        colorSchemes: { primary: "blue" },
      },
      themeSchemes: {
        pink: { semanticTokens: { colorSchemes: { primary: "pink" } } },
      },
    })

    await render(
      <>
        <Button colorScheme="primary">Outside action</Button>

        <ThemeSchemeScope themeScheme={"pink" as ThemeScheme}>
          <section aria-label="Pink section">
            <Button colorScheme="primary">Inside action</Button>
          </section>
        </ThemeSchemeScope>
      </>,
      {
        providerProps: {
          theme,
          themeSchemeStorageKey: "theme-scheme-scope-test",
        },
      },
    )

    await expect
      .element(page.getByRole("button", { name: "Outside action" }))
      .toHaveStyle({ backgroundColor: "rgb(32, 64, 128)" })
    await expect
      .element(page.getByRole("button", { name: "Inside action" }))
      .toHaveStyle({ backgroundColor: "rgb(192, 64, 128)" })
    expect(document.documentElement.dataset.theme).toBe("base")
  })
})

describe("<SemanticTokenScope />", () => {
  test("uses the supplied name for the attribute and style selector", async () => {
    const name = "preview-panel"

    await render(
      <SemanticTokenScope
        name={name}
        tokens={{ colors: { bg: { panel: "purple.50" } } }}
      >
        <Box bg="bg.panel">Named panel</Box>
      </SemanticTokenScope>,
      { providerProps: { theme } },
    )

    const panel = page.getByText("Named panel")

    await expect.element(panel).toHaveAttribute("data-semantic-token", name)
    await expect
      .element(panel)
      .toHaveStyle({ backgroundColor: "rgb(240, 224, 255)" })
  })

  test.each([
    {
      mode: "light",
      outsideColor: "rgb(255, 255, 255)",
      panelColor: "rgb(240, 224, 255)",
      primaryColor: "rgb(128, 48, 208)",
    },
    {
      mode: "dark",
      outsideColor: "rgb(0, 0, 0)",
      panelColor: "rgb(32, 16, 48)",
      primaryColor: "rgb(176, 128, 240)",
    },
  ])(
    "overrides existing semantic tokens only inside the scope in $mode mode",
    async ({ mode, outsideColor, panelColor, primaryColor }) => {
      await render(
        <div data-mode={mode}>
          <Box bg="bg.panel">Outside panel</Box>

          <SemanticTokenScope
            tokens={{
              colors: { bg: { panel: ["purple.50", "purple.950"] } },
              colorSchemes: { primary: "purple" },
            }}
          >
            <section aria-label="Scoped panel">
              <Box bg="bg.panel">Inside panel</Box>
              <Button colorScheme="primary">Primary action</Button>
            </section>
          </SemanticTokenScope>
        </div>,
        { providerProps: { theme } },
      )

      await expect
        .element(page.getByText("Outside panel"))
        .toHaveStyle({ backgroundColor: outsideColor })
      await expect
        .element(page.getByText("Inside panel"))
        .toHaveStyle({ backgroundColor: panelColor })
      await expect
        .element(page.getByRole("button", { name: "Primary action" }))
        .toHaveStyle({ backgroundColor: primaryColor })
    },
  )

  test("updates and removes overrides without remounting the child", async () => {
    const { rerender, user } = await render(
      <SemanticTokenScope tokens={{ colors: { bg: { panel: "purple.50" } } }}>
        <Box as="label" bg="bg.panel">
          Name
          <input />
        </Box>
      </SemanticTokenScope>,
      { providerProps: { theme } },
    )
    const label = page.getByText("Name")
    const input = page.getByRole("textbox", { name: "Name" })

    await expect
      .element(label)
      .toHaveStyle({ backgroundColor: "rgb(240, 224, 255)" })
    await user.fill(input, "Yamada")

    await rerender(
      <SemanticTokenScope tokens={{}}>
        <Box as="label" bg="bg.panel">
          Name
          <input />
        </Box>
      </SemanticTokenScope>,
    )

    await expect
      .element(label)
      .toHaveStyle({ backgroundColor: "rgb(255, 255, 255)" })
    await expect.element(input).toHaveValue("Yamada")
  })
})

describe("Theme scopes in a portalled modal", () => {
  test("inherits the theme scheme and semantic tokens", async () => {
    const theme = extendTheme({
      colors: { purple: { 950: "#201030" } },
      semanticTokens: { colors: { pink: { solid: "#c04080" } } },
      themeSchemes: {
        pink: { semanticTokens: { colorSchemes: { primary: "pink" } } },
      },
    })
    const { user } = await render(
      <ThemeSchemeScope themeScheme={"pink" as ThemeScheme}>
        <div>
          <SemanticTokenScope
            tokens={{ colors: { bg: { panel: "purple.950" } } }}
          >
            <div>
              <Modal.Root>
                <Modal.OpenTrigger>
                  <Button>Open scoped modal</Button>
                </Modal.OpenTrigger>
                <Modal.Content bg="bg.panel">
                  <Modal.Header>
                    <Modal.Title>Scoped modal</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Button colorScheme="primary">Scoped action</Button>
                  </Modal.Body>
                </Modal.Content>
              </Modal.Root>
            </div>
          </SemanticTokenScope>
        </div>
      </ThemeSchemeScope>,
      {
        providerProps: {
          theme,
          themeSchemeStorageKey: "scoped-modal-theme-scheme-test",
        },
      },
    )

    await user.click(page.getByRole("button", { name: "Open scoped modal" }))

    const modal = page.getByRole("dialog", { name: "Scoped modal" })

    await expect
      .element(modal)
      .toHaveStyle({ backgroundColor: "rgb(32, 16, 48)" })
    await expect
      .element(modal.getByRole("button", { name: "Scoped action" }))
      .toHaveStyle({ backgroundColor: "rgb(192, 64, 128)" })
  })
})
