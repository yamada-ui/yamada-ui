import type { FC, PropsWithChildren } from "react"
import { __unsafe_useEmotionCache } from "@emotion/react"
import { createPortal } from "react-dom"
import { page, render } from "#test/browser"
import { Box } from "../../components/box"
import { Portal } from "../../components/portal"
import { UIProvider } from "../../providers/ui-provider"
import { useColorMode } from "../system"
import { styled } from "../system/factory"
import { useCSS } from "./use-css"

const ColorModeComponent: FC = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <>
      <Box bg={["red", "blue"]}>Box</Box>
      <button onClick={toggleColorMode}>Toggle color mode</button>
    </>
  )
}

const ShadowCacheContainer: FC<
  PropsWithChildren<{ container: ShadowRoot }>
> = ({ children, container }) => {
  const cache = __unsafe_useEmotionCache()

  if (cache) cache.sheet.container = container

  return children
}

describe("useCSS", () => {
  test("applies color mode styles in Shadow DOM", async () => {
    const host = document.createElement("div")
    const shadowRoot = host.attachShadow({ mode: "open" })
    document.body.appendChild(host)

    try {
      const { user } = await render(
        createPortal(
          <ShadowCacheContainer container={shadowRoot}>
            <UIProvider
              config={{ defaultColorMode: "light" }}
              rootNode={shadowRoot}
            >
              <Portal>
                <ColorModeComponent />
              </Portal>
            </UIProvider>
          </ShadowCacheContainer>,
          shadowRoot,
        ),
        { withProvider: false },
      )
      const box = page.getByText("Box")

      await expect
        .element(box)
        .toHaveStyle("background-color: rgb(234, 67, 52)")

      await user.click(page.getByRole("button", { name: "Toggle color mode" }))

      await expect
        .element(box)
        .toHaveStyle("background-color: rgb(67, 135, 244)")
    } finally {
      host.remove()
    }
  })

  test("returns styles with theme values", async () => {
    const Component: FC<any> = () => {
      const className = useCSS({
        fontSize: "md",
      })

      return <styled.div className={className} data-testid="component" />
    }

    await render(<Component />)

    await expect.element(page.getByTestId("component")).toHaveStyle({
      fontSize: "var(--ui-fontSizes-md)",
    })
  })
})
