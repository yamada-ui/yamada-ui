import { a11y } from "#test"
import { Button } from "../button"
import { Drawer } from "./"
import { useDrawer } from "./use-drawer"

describe("<Drawer />", () => {
  test("passes a11y checks", async () => {
    await a11y(<Drawer.Root trigger={<Button>Open modal</Button>} />)
  })

  test("passes a11y checks with dragHandleOnly and a custom drag trigger when open", async () => {
    await a11y(
      <Drawer.Root
        closeOnDrag
        dragHandleOnly
        open
        withCloseButton
        portalProps={{ disabled: true }}
      >
        <Drawer.Content>
          <Drawer.DragTrigger>
            <Drawer.Header>
              <Drawer.Title>Title</Drawer.Title>
            </Drawer.Header>
          </Drawer.DragTrigger>
          <Drawer.Body>Content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>,
    )
  })
})

describe("scroll-aware dragging", () => {
  test("passes a11y checks", async () => {
    const Scrollable = () => {
      const { getContentProps } = useDrawer({
        closeOnDrag: true,
        open: true,
        placement: "block-end",
      })
      const { onPointerDown, onPointerMove } = getContentProps()

      return (
        <div
          style={{ height: 100, overflow: "auto", width: 100 }}
          aria-label="Scrollable content"
          dir="ltr"
          role="region"
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
        >
          <div style={{ flexShrink: 0, height: 400, width: 400 }}>Content</div>
        </div>
      )
    }

    await a11y(<Scrollable />)
  })
})
