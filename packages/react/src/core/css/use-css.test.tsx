import type { FC } from "react"
import { page, render } from "#test/browser"
import { styled } from "../system/factory"
import { useCSS } from "./use-css"

describe("useCSS", () => {
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
