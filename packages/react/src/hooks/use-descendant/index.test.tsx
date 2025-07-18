import type { FC, PropsWithChildren } from "react"
import type { DescendantProps } from "./"
import { render, renderHook } from "#test"
import { createDescendant } from "./"

describe("useDescendant", () => {
  const initializeDescendants = () => {
    const { result } = renderHook(() => createDescendant())

    const { DescendantsContext, useDescendant, useDescendants } = result.current

    return { DescendantsContext, useDescendant, useDescendants }
  }

  const setup = () => {
    const { DescendantsContext, useDescendant, useDescendants } =
      initializeDescendants()

    const { result } = renderHook(() => useDescendants())
    const descendants = result.current

    const Wrapper: FC<PropsWithChildren> = ({ children }) => {
      return (
        <DescendantsContext value={descendants}>{children}</DescendantsContext>
      )
    }

    return { descendants, useDescendant, Wrapper }
  }

  const renderItems = (count: number, Component: FC) =>
    Array(count)
      .fill(0)
      .map((_, index) => <Component key={index} />)

  test("Register and unregister", () => {
    const { descendants, useDescendant, Wrapper } = setup()

    const count = 1

    const Item: FC<DescendantProps> = ({ ...props }) => {
      const { register } = useDescendant(props)

      return <div ref={register}>Item</div>
    }

    render(<Wrapper>{renderItems(count, Item)}</Wrapper>)

    expect(descendants.count()).toBe(count)

    const { node } = descendants.value(0) ?? {}

    descendants.unregister(node!)

    expect(descendants.count()).toBe(0)
  })

  test("Index and value retrieval", () => {
    const { descendants, useDescendant, Wrapper } = setup()

    const Item: FC<DescendantProps> = ({ ...props }) => {
      const { register } = useDescendant(props)

      return <div ref={register}>Item</div>
    }

    render(<Wrapper>{renderItems(2, Item)}</Wrapper>)

    expect(descendants.count()).toBe(2)
    expect(descendants.indexOf(descendants.values()[0]?.node)).toBe(0)
    expect(descendants.indexOf(descendants.values()[1]?.node)).toBe(1)
  })

  test("Retrieve of valid indexes and values", () => {
    const { descendants, useDescendant, Wrapper } = setup()

    const Item: FC<DescendantProps> = ({ ...props }) => {
      const { register } = useDescendant(props)

      return <div ref={register}>Item</div>
    }

    render(
      <Wrapper>
        {renderItems(2, Item)}
        <Item disabled />
      </Wrapper>,
    )

    expect(descendants.count()).toBe(3)
    expect(descendants.enabledCount()).toBe(2)
    expect(descendants.enabledIndexOf(descendants.values()[0]?.node)).toBe(0)
    expect(descendants.enabledIndexOf(descendants.values()[1]?.node)).toBe(1)
    expect(descendants.enabledIndexOf(descendants.values()[2]?.node)).toBe(-1)
  })

  test("Retrieve of next and previous values", () => {
    const { descendants, useDescendant, Wrapper } = setup()

    const Item: FC = () => {
      const { register } = useDescendant()

      return <div ref={register}>Item</div>
    }

    render(<Wrapper>{renderItems(3, Item)}</Wrapper>)

    expect(descendants.nextValue(2)?.node).toBe(descendants.values()[0]?.node)
    expect(descendants.prevValue(0)?.node).toBe(descendants.values()[2]?.node)
  })

  test("Retrieve of valid next and previous values", () => {
    const { descendants, useDescendant, Wrapper } = setup()

    const Item: FC<DescendantProps> = ({ ...props }) => {
      const { register } = useDescendant(props)

      return <div ref={register}>Item</div>
    }

    render(
      <Wrapper>
        <Item />
        <Item disabled />
        <Item />
      </Wrapper>,
    )

    expect(descendants.enabledNextValue(0)?.node).toBe(
      descendants.values()[2]?.node,
    )
    expect(descendants.enabledPrevValue(2)?.node).toBe(
      descendants.values()[0]?.node,
    )
  })

  test("Retrieve of first and last values", () => {
    const { descendants, useDescendant, Wrapper } = setup()

    const Item: FC<DescendantProps> = ({ ...props }) => {
      const { register } = useDescendant(props)

      return <div ref={register}>Item</div>
    }

    render(<Wrapper>{renderItems(3, Item)}</Wrapper>)

    expect(descendants.firstValue()?.node).toBe(descendants.values()[0]?.node)
    expect(descendants.lastValue()?.node).toBe(descendants.values()[2]?.node)
  })

  test("Retrieve of valid first and last values", () => {
    const { descendants, useDescendant, Wrapper } = setup()

    const Item: FC<DescendantProps> = ({ ...props }) => {
      const { register } = useDescendant(props)

      return <div ref={register}>Item</div>
    }

    render(
      <Wrapper>
        <Item disabled />
        <Item />
        <Item />
        <Item disabled />
      </Wrapper>,
    )

    expect(descendants.enabledFirstValue()?.node).toBe(
      descendants.values()[1]?.node,
    )
    expect(descendants.enabledLastValue()?.node).toBe(
      descendants.values()[2]?.node,
    )
  })

  test("Return undefined for invalid indexes or elements", () => {
    const { descendants, useDescendant, Wrapper } = setup()

    const Item: FC<DescendantProps> = ({ ...props }) => {
      const { register } = useDescendant(props)

      return <div ref={register}>Item</div>
    }

    render(<Wrapper>{renderItems(0, Item)}</Wrapper>)

    expect(descendants.indexOf(null)).toBe(-1)
    expect(descendants.indexOf(document.createElement("div"))).toBe(-1)
    expect(descendants.value(0)).toBeUndefined()
    expect(descendants.enabledValue(0)).toBeUndefined()
    expect(descendants.enabledPrevValue(0)).toBeUndefined()
    expect(descendants.enabledNextValue(0)).toBeUndefined()
  })
})
