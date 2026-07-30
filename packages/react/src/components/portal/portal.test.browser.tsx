import { createPortal } from "react-dom"
import { a11y, page, render } from "#test/browser"
import { Button } from "../button"
import { Modal } from "../modal"
import { Portal } from "./portal"

const Component = () => {
  return (
    <Modal.Root>
      <Modal.OpenTrigger>
        <Button>Open Modal</Button>
      </Modal.OpenTrigger>

      <Modal.Content>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Button>Modal Action</Button>
          <Portal>
            <Button>Portal Action</Button>
          </Portal>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

describe("<Portal />", () => {
  test("passes a11y checks", async () => {
    await a11y(<Component />)
  })

  test("keeps focus within a modal in shadow DOM", async () => {
    const host = document.createElement("div")
    const shadowRoot = host.attachShadow({ mode: "open" })
    document.body.appendChild(host)

    try {
      const { user } = await render(createPortal(<Component />, shadowRoot), {
        providerProps: { rootNode: shadowRoot },
      })
      const portalAction = page.getByRole("button", { name: "Portal Action" })

      await user.click(page.getByRole("button", { name: "Open Modal" }))
      await user.click(portalAction)

      await expect
        .poll(() => shadowRoot.activeElement)
        .toBe(portalAction.element())
    } finally {
      host.remove()
    }
  })
})
