"use client"

import type { RefCallback } from "react"
import { useRef } from "react"
import {
  createContext,
  isTruthyDataAttr,
  mergeRefs,
  runIfFn,
  useSafeLayoutEffect,
} from "../../utils"

const sortNodes = (nodes: Node[]) =>
  nodes.sort((a, b) => {
    const compare = a.compareDocumentPosition(b)

    if (
      compare & Node.DOCUMENT_POSITION_FOLLOWING ||
      compare & Node.DOCUMENT_POSITION_CONTAINED_BY
    )
      return -1

    if (
      compare & Node.DOCUMENT_POSITION_PRECEDING ||
      compare & Node.DOCUMENT_POSITION_CONTAINS
    )
      return 1

    if (
      compare & Node.DOCUMENT_POSITION_DISCONNECTED ||
      compare & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
    ) {
      console.warn("Cannot sort the given nodes.")
      return 0
    } else {
      return 0
    }
  })

const getNextIndex = (current: number, max: number, loop: boolean) => {
  let next = current + 1

  if (loop && next >= max) next = 0

  return next
}

const getPrevIndex = (current: number, max: number, loop: boolean) => {
  let next = current - 1

  if (loop && next < 0) next = max

  return next
}

export type DescendantProps<Y extends HTMLElement = HTMLElement, M = {}> = M & {
  disabled?: ((node: Y) => boolean) | boolean
}

export type Descendant<
  Y extends HTMLElement = HTMLElement,
  M = {},
> = DescendantProps<Y, M> & {
  index: number
  node: Y
}

const descendantManager = <Y extends HTMLElement = HTMLElement, M = {}>() => {
  const descendants = new Map<Y, Descendant<Y, M>>()

  const setIndexes = (next: Node[]) => {
    descendants.forEach((descendant) => {
      const index = next.indexOf(descendant.node)

      descendant.index = index
      descendant.node.dataset.index = descendant.index.toString()
    })
  }

  const set = (node: null | Y, props?: DescendantProps<Y, M>) => {
    if (!node || descendants.has(node)) return

    const keys = Array.from(descendants.keys()).concat(node)
    const sorted = sortNodes(keys)

    const descendant = { ...props, index: -1, node } as Descendant<Y, M>

    descendants.set(node, descendant)

    setIndexes(sorted)
  }

  const destroy = () => descendants.clear()

  const register = (props?: DescendantProps<Y, M>): RefCallback<Y> => {
    return (node: null | Y) => set(node, props)
  }

  const unregister = (node?: null | Y) => {
    if (node == null) return

    descendants.delete(node)

    const sorted = sortNodes(Array.from(descendants.keys()))

    setIndexes(sorted)
  }

  const count = () => values().length

  const enabledCount = () => enabledValues().length

  const focus = (target?: null | Y, options?: FocusOptions) => {
    if (!target) return

    if (isTruthyDataAttr(target.dataset.activedescendant)) return

    const values = enabledValues()

    values.forEach(({ node }) => {
      delete node.dataset.activedescendant
    })

    target.dataset.activedescendant = ""

    target.focus(options)
  }

  const indexOf = (target?: null | Y) =>
    !target ? -1 : (descendants.get(target)?.index ?? -1)

  const enabledIndexOf = (target?: null | Y) =>
    target == null
      ? -1
      : enabledValues().findIndex(({ node }) => node.isSameNode(target))

  const values = () =>
    Array.from(descendants.values()).sort((a, b) => a.index - b.index)

  const enabledValues = () =>
    values().filter(({ disabled, node }) => !runIfFn(disabled, node))

  const value = (index: number) => {
    if (!count()) return undefined

    return values()[index]
  }

  const enabledValue = (index: number) => {
    if (!enabledCount()) return undefined

    return enabledValues()[index]
  }

  const firstValue = () => value(0)

  const enabledFirstValue = () => enabledValue(0)

  const lastValue = () => value(count() - 1)

  const enabledLastValue = () => enabledValue(enabledCount() - 1)

  const prevValue = (index: number, loop = true) => {
    const prev = getPrevIndex(index, count() - 1, loop)

    return value(prev)
  }

  const enabledPrevValue = (index: number, loop = true) => {
    const target = value(index)

    if (!target) return

    const enabledIndex = enabledIndexOf(target.node)
    const prevEnabledIndex = getPrevIndex(
      enabledIndex,
      enabledCount() - 1,
      loop,
    )

    return enabledValue(prevEnabledIndex)
  }

  const nextValue = (index: number, loop = true) => {
    const next = getNextIndex(index, count(), loop)

    return value(next)
  }

  const enabledNextValue = (index: number, loop = true) => {
    const target = value(index)

    if (!target) return

    const enabledIndex = enabledIndexOf(target.node)
    const nextEnabledIndex = getNextIndex(enabledIndex, enabledCount(), loop)

    return enabledValue(nextEnabledIndex)
  }

  return {
    count,
    destroy,
    enabledCount,
    enabledFirstValue,
    enabledIndexOf,
    enabledLastValue,
    enabledNextValue,
    enabledPrevValue,
    enabledValue,
    enabledValues,
    firstValue,
    focus,
    indexOf,
    lastValue,
    nextValue,
    prevValue,
    register,
    unregister,
    value,
    values,
  }
}

export type Descendants<Y extends HTMLElement, M = {}> = ReturnType<
  typeof descendantManager<Y, M>
>

export type CreateDescendantRegister<Y extends HTMLElement, M = {}> = (
  props?: DescendantProps<Y, M>,
) => RefCallback<Y>

/**
 * `useDescendants` is a custom hook that manages descendants.
 *
 * @see https://yamada-ui.com/hooks/use-descendants
 */
export const createDescendants = <
  Y extends HTMLElement = HTMLElement,
  M = {},
>() => {
  const [DescendantsContext, useDescendantsContext] = createContext<
    Descendants<Y, M>
  >({
    name: "DescendantsContext",
  })

  const useDescendantRegister = (descendants?: Descendants<Y, M>) => {
    const ref = useRef<Y>(null)

    useSafeLayoutEffect(() => {
      return () => {
        if (ref.current) descendants?.unregister(ref.current)
      }
    }, [])

    return (props?: DescendantProps<Y, M>): RefCallback<Y> =>
      mergeRefs(ref, descendants?.register(props))
  }

  const useDescendants = () => {
    const descendants = useRef(descendantManager<Y, M>())

    useSafeLayoutEffect(() => {
      return () => descendants.current.destroy()
    })

    return descendants.current
  }

  const useDescendant = (props?: DescendantProps<Y, M>) => {
    const descendants = useDescendantsContext()
    const createRegister = useDescendantRegister(descendants)

    return {
      descendants,
      register: createRegister(props),
    }
  }

  return {
    DescendantsContext,
    useDescendant,
    useDescendantRegister,
    useDescendants,
    useDescendantsContext,
  }
}
