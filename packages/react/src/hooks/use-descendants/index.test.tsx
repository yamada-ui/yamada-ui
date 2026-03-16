import type { FC, PropsWithChildren } from "react"
import type { DescendantProps } from "."
import { render, renderHook } from "#test/browser"
import { createDescendants } from "."

describe("useDescendant", () => {
  const initializeDescendants = async () => {
    const { result } = await renderHook(() => createDescendants())

    const { DescendantsContext, useDescendant, useDescendants } = result.current

    return { DescendantsContext, useDescendant, useDescendants }
  }

  const setup = async () => {
    const { DescendantsContext, useDescendant, useDescendants } =
      await initializeDescendants()

    const { result } = await renderHook(() => useDescendants())
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

  test("Register and unregister", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const count = 1

    const Item: FC<DescendantProps> = ({ ...props }) => {
      const { register } = useDescendant(props)

      return <div ref={register}>Item</div>
    }

    await render(<Wrapper>{renderItems(count, Item)}</Wrapper>)

    expect(descendants.count()).toBe(count)

    const { node } = descendants.value(0) ?? {}

    descendants.unregister(node!)

    expect(descendants.count()).toBe(0)
  })

  test("Index and value retrieval", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC<DescendantProps> = ({ ...props }) => {
      const { register } = useDescendant(props)

      return <div ref={register}>Item</div>
    }

    await render(<Wrapper>{renderItems(2, Item)}</Wrapper>)

    expect(descendants.count()).toBe(2)
    expect(descendants.indexOf(descendants.values()[0]?.node)).toBe(0)
    expect(descendants.indexOf(descendants.values()[1]?.node)).toBe(1)
  })

  test("Retrieve of valid indexes and values", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC<DescendantProps> = ({ ...props }) => {
      const { register } = useDescendant(props)

      return <div ref={register}>Item</div>
    }

    await render(
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

  test("Retrieve of next and previous values", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC = () => {
      const { register } = useDescendant()

      return <div ref={register}>Item</div>
    }

    await render(<Wrapper>{renderItems(3, Item)}</Wrapper>)

    expect(descendants.nextValue(2)?.node).toBe(descendants.values()[0]?.node)
    expect(descendants.prevValue(0)?.node).toBe(descendants.values()[2]?.node)
  })

  test("Retrieve of valid next and previous values", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC<DescendantProps> = ({ ...props }) => {
      const { register } = useDescendant(props)

      return <div ref={register}>Item</div>
    }

    await render(
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

  test("Retrieve of first and last values", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC<DescendantProps> = ({ ...props }) => {
      const { register } = useDescendant(props)

      return <div ref={register}>Item</div>
    }

    await render(<Wrapper>{renderItems(3, Item)}</Wrapper>)

    expect(descendants.firstValue()?.node).toBe(descendants.values()[0]?.node)
    expect(descendants.lastValue()?.node).toBe(descendants.values()[2]?.node)
  })

  test("Retrieve of valid first and last values", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC<DescendantProps> = ({ ...props }) => {
      const { register } = useDescendant(props)

      return <div ref={register}>Item</div>
    }

    await render(
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

  test("Return undefined for invalid indexes or elements", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC<DescendantProps> = ({ ...props }) => {
      const { register } = useDescendant(props)

      return <div ref={register}>Item</div>
    }

    await render(<Wrapper>{renderItems(0, Item)}</Wrapper>)

    expect(descendants.indexOf(null)).toBe(-1)
    expect(descendants.indexOf(document.createElement("div"))).toBe(-1)
    expect(descendants.value(0)).toBeUndefined()
    expect(descendants.enabledValue(0)).toBeUndefined()
    expect(descendants.enabledPrevValue(0)).toBeUndefined()
    expect(descendants.enabledNextValue(0)).toBeUndefined()
  })

  test("indexOf with a Descendant object", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC<DescendantProps> = ({ ...props }) => {
      const { register } = useDescendant(props)

      return <div ref={register}>Item</div>
    }

    await render(<Wrapper>{renderItems(2, Item)}</Wrapper>)

    const descendant = descendants.values()[1]!

    expect(descendants.indexOf(descendant)).toBe(1)
  })

  test("enabledIndexOf with a Descendant object", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC<DescendantProps> = ({ ...props }) => {
      const { register } = useDescendant(props)

      return <div ref={register}>Item</div>
    }

    await render(
      <Wrapper>
        <Item />
        <Item disabled />
        <Item />
      </Wrapper>,
    )

    const descendant = descendants.values()[2]!

    expect(descendants.enabledIndexOf(descendant)).toBe(1)
  })

  test("value with a node element", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC<DescendantProps> = ({ ...props }) => {
      const { register } = useDescendant(props)

      return <div ref={register}>Item</div>
    }

    await render(<Wrapper>{renderItems(2, Item)}</Wrapper>)

    const node = descendants.values()[0]!.node

    expect(descendants.value(node)?.index).toBe(0)
  })

  test("prevValue and nextValue with a Descendant object", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC = () => {
      const { register } = useDescendant()

      return <div ref={register}>Item</div>
    }

    await render(<Wrapper>{renderItems(3, Item)}</Wrapper>)

    const descendant1 = descendants.values()[1]!
    const descendant2 = descendants.values()[2]!

    expect(descendants.prevValue(descendant1)?.node).toBe(
      descendants.values()[0]?.node,
    )
    expect(descendants.nextValue(descendant1)?.node).toBe(
      descendants.values()[2]?.node,
    )
    expect(descendants.prevValue(descendant2)?.node).toBe(
      descendants.values()[1]?.node,
    )
  })

  test("prevValue and nextValue with a node element", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC = () => {
      const { register } = useDescendant()

      return <div ref={register}>Item</div>
    }

    await render(<Wrapper>{renderItems(3, Item)}</Wrapper>)

    const node = descendants.values()[1]!.node

    expect(descendants.prevValue(node)?.node).toBe(
      descendants.values()[0]?.node,
    )
    expect(descendants.nextValue(node)?.node).toBe(
      descendants.values()[2]?.node,
    )
  })

  test("active with a Descendant object", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC = () => {
      const { register } = useDescendant()

      return <div ref={register}>Item</div>
    }

    await render(<Wrapper>{renderItems(3, Item)}</Wrapper>)

    const descendant = descendants.values()[1]!

    descendants.active(descendant)

    expect(descendant.node.dataset.activedescendant).toBe("")
  })

  test("active with focus options", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC = () => {
      const { register } = useDescendant()

      return <div ref={register}>Item</div>
    }

    await render(<Wrapper>{renderItems(2, Item)}</Wrapper>)

    const node = descendants.values()[0]!.node
    const focusSpy = vi.spyOn(node, "focus")

    descendants.active(node, { preventScroll: true })

    expect(node.dataset.activedescendant).toBe("")
    expect(focusSpy).toHaveBeenCalledWith({ preventScroll: true })
  })

  test("active skips if already active", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC = () => {
      const { register } = useDescendant()

      return <div ref={register}>Item</div>
    }

    await render(<Wrapper>{renderItems(2, Item)}</Wrapper>)

    const node = descendants.values()[0]!.node

    node.dataset.activedescendant = ""

    const focusSpy = vi.spyOn(node, "focus")

    descendants.active(node, { preventScroll: true })

    expect(focusSpy).not.toHaveBeenCalled()
  })

  test("nextValue without loop returns undefined at the end", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC = () => {
      const { register } = useDescendant()

      return <div ref={register}>Item</div>
    }

    await render(<Wrapper>{renderItems(3, Item)}</Wrapper>)

    expect(descendants.nextValue(2, false)).toBeUndefined()
  })

  test("prevValue without loop returns undefined at the start", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC = () => {
      const { register } = useDescendant()

      return <div ref={register}>Item</div>
    }

    await render(<Wrapper>{renderItems(3, Item)}</Wrapper>)

    expect(descendants.prevValue(0, false)).toBeUndefined()
  })

  test("enabledNextValue with loop wraps around", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC<DescendantProps> = ({ ...props }) => {
      const { register } = useDescendant(props)

      return <div ref={register}>Item</div>
    }

    await render(
      <Wrapper>
        <Item />
        <Item disabled />
        <Item />
      </Wrapper>,
    )

    const result = descendants.enabledNextValue(2)

    expect(result?.node).toBe(descendants.values()[0]?.node)
    expect(result?.recurred).toBeTruthy()
  })

  test("enabledPrevValue with loop wraps around", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC<DescendantProps> = ({ ...props }) => {
      const { register } = useDescendant(props)

      return <div ref={register}>Item</div>
    }

    await render(
      <Wrapper>
        <Item />
        <Item disabled />
        <Item />
      </Wrapper>,
    )

    const result = descendants.enabledPrevValue(0)

    expect(result?.node).toBe(descendants.values()[2]?.node)
    expect(result?.recurred).toBeTruthy()
  })

  test("enabledNextValue without loop returns undefined at the end", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC<DescendantProps> = ({ ...props }) => {
      const { register } = useDescendant(props)

      return <div ref={register}>Item</div>
    }

    await render(
      <Wrapper>
        <Item />
        <Item />
        <Item disabled />
      </Wrapper>,
    )

    expect(descendants.enabledNextValue(1, false)).toBeUndefined()
  })

  test("enabledPrevValue without loop returns undefined at the start", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC<DescendantProps> = ({ ...props }) => {
      const { register } = useDescendant(props)

      return <div ref={register}>Item</div>
    }

    await render(
      <Wrapper>
        <Item disabled />
        <Item />
        <Item />
      </Wrapper>,
    )

    expect(descendants.enabledPrevValue(1, false)).toBeUndefined()
  })

  test("prevValue and nextValue return undefined for unknown node", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC = () => {
      const { register } = useDescendant()

      return <div ref={register}>Item</div>
    }

    await render(<Wrapper>{renderItems(3, Item)}</Wrapper>)

    const unknownNode = document.createElement("div")

    expect(descendants.prevValue(unknownNode)).toBeUndefined()
    expect(descendants.nextValue(unknownNode)).toBeUndefined()
  })

  test("unregister with null does nothing", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC = () => {
      const { register } = useDescendant()

      return <div ref={register}>Item</div>
    }

    await render(<Wrapper>{renderItems(2, Item)}</Wrapper>)

    descendants.unregister(null)

    expect(descendants.count()).toBe(2)
  })

  test("sortNodes returns -1 when node a precedes node b", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC = () => {
      const { register } = useDescendant()

      return <div ref={register}>Item</div>
    }

    await render(<Wrapper>{renderItems(3, Item)}</Wrapper>)

    const values = descendants.values()

    expect(values[0]!.index).toBe(0)
    expect(values[1]!.index).toBe(1)
    expect(values[2]!.index).toBe(2)
  })

  test("sortNodes returns 1 when node a follows node b", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC = () => {
      const { register } = useDescendant()

      return <div ref={register}>Item</div>
    }

    await render(<Wrapper>{renderItems(2, Item)}</Wrapper>)

    const nodeA = descendants.values()[1]!.node
    const nodeB = descendants.values()[0]!.node

    const position = nodeA.compareDocumentPosition(nodeB)

    expect(
      position & Node.DOCUMENT_POSITION_PRECEDING ||
        position & Node.DOCUMENT_POSITION_CONTAINS,
    ).toBeTruthy()
  })

  test("sortNodes warns and returns 0 for disconnected nodes", async () => {
    const { descendants, useDescendant, Wrapper } = await setup()

    const Item: FC = () => {
      const { register } = useDescendant()

      return <div ref={register}>Item</div>
    }

    await render(<Wrapper>{renderItems(1, Item)}</Wrapper>)

    const warnSpy = vi.spyOn(console, "warn").mockImplementation(vi.fn())

    const newNode = document.createElement("div")
    const newNodeSpy = vi.spyOn(newNode, "compareDocumentPosition")
    newNodeSpy.mockReturnValue(Node.DOCUMENT_POSITION_DISCONNECTED)

    const registeredNode = descendants.values()[0]!.node
    const registeredNodeSpy = vi.spyOn(
      registeredNode,
      "compareDocumentPosition",
    )
    registeredNodeSpy.mockReturnValue(Node.DOCUMENT_POSITION_DISCONNECTED)

    descendants.register()(newNode)

    expect(warnSpy).toHaveBeenCalledWith("Cannot sort the given nodes.")

    newNodeSpy.mockRestore()
    registeredNodeSpy.mockRestore()
    warnSpy.mockRestore()
  })
})
