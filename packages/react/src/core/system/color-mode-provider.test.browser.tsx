import { page, render } from "#test/browser"
import { Box } from "../../components/box"
import { Button } from "../../components/button"
import { Modal } from "../../components/modal"
import { extendTheme } from "../../providers/default-provider"
import { ColorModeScope } from "./color-mode-provider"

const theme = extendTheme({
  semanticTokens: { colors: { bg: { panel: ["#ffffff", "#000000"] } } },
})
const providerProps = { colorModeStorageKey: "color-mode-scope-test", theme }

describe("<ColorModeScope />", () => {
  test("applies dark tokens inside the scope without changing the document mode", async () => {
    await render(
      <>
        <Box bg="bg.panel">Outside panel</Box>
        <ColorModeScope colorMode="dark">
          <section>
            <Box bg="bg.panel">Dark panel</Box>
            <ColorModeScope colorMode="light">
              <Box bg="bg.panel">Nested light panel</Box>
            </ColorModeScope>
          </section>
        </ColorModeScope>
        <ColorModeScope colorMode="dark">
          <ColorModeScope colorMode="light">
            <Box bg="bg.panel">Directly nested light panel</Box>
          </ColorModeScope>
        </ColorModeScope>
      </>,
      { providerProps },
    )

    await expect
      .element(page.getByText("Outside panel"))
      .toHaveStyle({ backgroundColor: "rgb(255, 255, 255)" })
    await expect
      .element(page.getByText("Dark panel"))
      .toHaveStyle({ backgroundColor: "rgb(0, 0, 0)" })
    await expect
      .element(page.getByText("Nested light panel"))
      .toHaveStyle({ backgroundColor: "rgb(255, 255, 255)" })
    await expect
      .element(page.getByText("Directly nested light panel"))
      .toHaveStyle({ backgroundColor: "rgb(255, 255, 255)" })
    expect(document.documentElement.dataset.mode).toBe("light")
  })

  test("uses the directly nested mode for a portalled modal", async () => {
    const { user } = await render(
      <ColorModeScope colorMode="light">
        <ColorModeScope colorMode="dark">
          <section aria-label="Dark section">
            <Modal.Root>
              <Modal.OpenTrigger>
                <Button>Open scoped modal</Button>
              </Modal.OpenTrigger>
              <Modal.Content bg="bg.panel">
                <Modal.Header>
                  <Modal.Title>Scoped modal</Modal.Title>
                </Modal.Header>
              </Modal.Content>
            </Modal.Root>
          </section>
        </ColorModeScope>
      </ColorModeScope>,
      { providerProps },
    )

    const section = page.getByRole("region", { name: "Dark section" })

    await user.click(section.getByRole("button", { name: "Open scoped modal" }))

    const modal = page.getByRole("dialog", { name: "Scoped modal" })

    await expect.element(modal).toHaveStyle({ backgroundColor: "rgb(0, 0, 0)" })
    await expect
      .element(
        page
          .getByRole("region", { includeHidden: true })
          .getByText("Scoped modal"),
      )
      .not.toBeInTheDocument()
  })

  test("resolves light tokens while dark ancestor conditions still match", async () => {
    await render(
      <>
        <Box bg="bg.panel">Outside panel</Box>
        <ColorModeScope colorMode="light">
          <section>
            <Box bg="bg.panel" color="#000000" _dark={{ color: "#ff0000" }}>
              Scoped panel
            </Box>
          </section>
        </ColorModeScope>
      </>,
      {
        providerProps: {
          ...providerProps,
          colorModeStorageKey: "color-mode-scope-dark-document-test",
          config: { defaultColorMode: "dark" },
        },
      },
    )

    await expect
      .element(page.getByText("Outside panel"))
      .toHaveStyle({ backgroundColor: "rgb(0, 0, 0)" })

    const panel = page.getByText("Scoped panel")

    await expect
      .element(panel)
      .toHaveStyle({ backgroundColor: "rgb(255, 255, 255)" })
    await expect.element(panel).toHaveStyle({ color: "rgb(255, 0, 0)" })
  })
})
