import type { FC, PropsWithChildren } from "react"
import { render } from "#test"
import { createComponent, createSlotComponent } from "./create-component"

interface DemoProps extends PropsWithChildren {
  suppressHydrationWarning?: boolean
}

describe("createComponent", () => {
  describe("HydrationContext", () => {
    test("exposes HydrationContext and useHydrationContext", () => {
      const api = createComponent<DemoProps>("demo")

      expect(api.HydrationContext).toBeDefined()
      expect(typeof api.useHydrationContext).toBe("function")
    })

    test("propagates suppressHydrationWarning from withContext to nested component via context", () => {
      const InnerSpy = vi.fn<FC<any>>((props) => <span {...props} />)

      const { component, withContext } = createComponent<DemoProps>("demo")
      const Root = withContext("div")()
      const Inner = component(InnerSpy)()

      render(
        <Root suppressHydrationWarning>
          <Inner />
        </Root>,
      )

      expect(InnerSpy.mock.calls[0]![0].suppressHydrationWarning).toBeTruthy()
    })

    test("does not set suppressHydrationWarning on nested component when root omits it", () => {
      const InnerSpy = vi.fn<FC<any>>((props) => <span {...props} />)

      const { component, withContext } = createComponent<DemoProps>("demo")
      const Root = withContext("div")()
      const Inner = component(InnerSpy)()

      render(
        <Root>
          <Inner />
        </Root>,
      )

      expect(
        InnerSpy.mock.calls[0]![0].suppressHydrationWarning,
      ).toBeUndefined()
    })

    test("nested component can opt out via explicit suppressHydrationWarning={false}", () => {
      const InnerSpy = vi.fn<FC<any>>((props) => <span {...props} />)

      const { component, withContext } = createComponent<DemoProps>("demo")
      const Root = withContext("div")()
      const Inner = component(InnerSpy)()

      render(
        <Root suppressHydrationWarning>
          <Inner suppressHydrationWarning={false} />
        </Root>,
      )

      expect(InnerSpy.mock.calls[0]![0].suppressHydrationWarning).toBeFalsy()
    })

    test("propagates when suppressHydrationWarning is set via withContext initialProps", () => {
      const InnerSpy = vi.fn<FC<any>>((props) => <span {...props} />)

      const { component, withContext } = createComponent<DemoProps>("demo")
      const Root = withContext("div")({ suppressHydrationWarning: true })
      const Inner = component(InnerSpy)()

      render(
        <Root>
          <Inner />
        </Root>,
      )

      expect(InnerSpy.mock.calls[0]![0].suppressHydrationWarning).toBeTruthy()
    })
  })
})

describe("createSlotComponent", () => {
  describe("HydrationContext", () => {
    test("exposes HydrationContext and useHydrationContext", () => {
      const api = createSlotComponent<DemoProps>("demo")

      expect(api.HydrationContext).toBeDefined()
      expect(typeof api.useHydrationContext).toBe("function")
    })

    test("propagates suppressHydrationWarning from withProvider root to withContext slot", () => {
      const ChildSpy = vi.fn<FC<any>>((props) => <span {...props} />)

      const { withContext, withProvider } =
        createSlotComponent<DemoProps>("demo")
      const Root = withProvider("div", "root")()
      const Child = withContext(ChildSpy, "item")()

      render(
        <Root suppressHydrationWarning>
          <Child />
        </Root>,
      )

      expect(ChildSpy.mock.calls[0]![0].suppressHydrationWarning).toBeTruthy()
    })

    test("propagates suppressHydrationWarning to slots created with component()", () => {
      const ChildSpy = vi.fn<FC<any>>((props) => <span {...props} />)

      const { component, withProvider } = createSlotComponent<DemoProps>("demo")
      const Root = withProvider("div", "root")()
      const Child = component(ChildSpy, "item")()

      render(
        <Root suppressHydrationWarning>
          <Child />
        </Root>,
      )

      expect(ChildSpy.mock.calls[0]![0].suppressHydrationWarning).toBeTruthy()
    })

    test("does not set suppressHydrationWarning on slots when root omits it", () => {
      const ChildSpy = vi.fn<FC<any>>((props) => <span {...props} />)

      const { withContext, withProvider } =
        createSlotComponent<DemoProps>("demo")
      const Root = withProvider("div", "root")()
      const Child = withContext(ChildSpy, "item")()

      render(
        <Root>
          <Child />
        </Root>,
      )

      expect(
        ChildSpy.mock.calls[0]![0].suppressHydrationWarning,
      ).toBeUndefined()
    })

    test("slot can opt out via explicit suppressHydrationWarning={false}", () => {
      const ChildSpy = vi.fn<FC<any>>((props) => <span {...props} />)

      const { withContext, withProvider } =
        createSlotComponent<DemoProps>("demo")
      const Root = withProvider("div", "root")()
      const Child = withContext(ChildSpy, "item")()

      render(
        <Root suppressHydrationWarning>
          <Child suppressHydrationWarning={false} />
        </Root>,
      )

      expect(ChildSpy.mock.calls[0]![0].suppressHydrationWarning).toBeFalsy()
    })

    test("propagates when suppressHydrationWarning is set via withProvider initialProps", () => {
      const ChildSpy = vi.fn<FC<any>>((props) => <span {...props} />)

      const { withContext, withProvider } =
        createSlotComponent<DemoProps>("demo")
      const Root = withProvider(
        "div",
        "root",
      )({
        suppressHydrationWarning: true,
      })
      const Child = withContext(ChildSpy, "item")()

      render(
        <Root>
          <Child />
        </Root>,
      )

      expect(ChildSpy.mock.calls[0]![0].suppressHydrationWarning).toBeTruthy()
    })

    test("propagates suppressHydrationWarning to deeply nested slots", () => {
      const LeafSpy = vi.fn<FC<any>>((props) => <span {...props} />)

      const { withContext, withProvider } =
        createSlotComponent<DemoProps>("demo")
      const Root = withProvider("div", "root")()
      const Middle = withContext("div", "middle")()
      const Leaf = withContext(LeafSpy, "leaf")()

      render(
        <Root suppressHydrationWarning>
          <Middle>
            <Leaf />
          </Middle>
        </Root>,
      )

      expect(LeafSpy.mock.calls[0]![0].suppressHydrationWarning).toBeTruthy()
    })
  })
})
