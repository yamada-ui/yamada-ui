"use client"

import type { RefCallback } from "react"
import { useRef } from "react"
import {
  createContext,
  isNumber,
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
  recurred?: boolean
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

  const active = (
    target?: Descendant<Y, M> | null | Y,
    options?: FocusOptions,
  ) => {
    if (!target) return

    if (!(target instanceof Node)) target = target.node

    if (isTruthyDataAttr(target.dataset.activedescendant)) return

    const descendants = values()

    descendants.forEach(({ node }) => {
      delete node.dataset.activedescendant
    })

    target.dataset.activedescendant = ""

    if (options) target.focus(options)
  }

  const indexOf = (target?: Descendant<Y, M> | null | Y) => {
    if (!target) return -1

    if (target instanceof Node) {
      return descendants.get(target)?.index ?? -1
    } else {
      return descendants.get(target.node)?.index ?? -1
    }
  }

  const enabledIndexOf = (target?: Descendant<Y, M> | null | Y) => {
    if (!target) return -1

    if (target instanceof Node) {
      return enabledValues().findIndex(({ node }) => node.isSameNode(target))
    } else {
      return enabledValues().findIndex(({ node }) =>
        node.isSameNode(target.node),
      )
    }
  }

  const values = () =>
    Array.from(descendants.values()).sort((a, b) => a.index - b.index)

  const enabledValues = () =>
    values().filter(({ disabled, node }) => !runIfFn(disabled, node))

  const value = (indexOrNode: null | number | Y) => {
    if (!count() || indexOrNode == null) return undefined

    return isNumber(indexOrNode)
      ? values()[indexOrNode]
      : descendants.get(indexOrNode)
  }

  const enabledValue = (index: number) => {
    if (!enabledCount()) return undefined

    return enabledValues()[index]
  }

  const firstValue = () => value(0)

  const enabledFirstValue = () => enabledValue(0)

  const lastValue = () => value(count() - 1)

  const enabledLastValue = () => enabledValue(enabledCount() - 1)

  const prevValue = (
    indexOrNode: Descendant<Y, M> | null | number | Y,
    loop = true,
  ) => {
    if (!count()) return undefined

    const currentIndex = isNumber(indexOrNode)
      ? indexOrNode
      : indexOf(indexOrNode)

    if (currentIndex === -1) return undefined

    const prevIndex = getPrevIndex(currentIndex, count() - 1, loop)

    return value(prevIndex)
  }

  const enabledPrevValue = (
    indexOrNode: Descendant<Y, M> | null | number | Y,
    loop = true,
  ) => {
    if (!enabledCount()) return undefined

    let index = isNumber(indexOrNode) ? indexOrNode : indexOf(indexOrNode)
    let enabledValue = null
    let recurred = false

    while (enabledValue == null) {
      index--

      if (index < 0) {
        if (!loop) return

        index = count() - 1
        recurred = true
      }

      const descendant = value(index)

      enabledValue =
        descendant && !runIfFn(descendant.disabled, descendant.node)
          ? descendant
          : null
    }

    if (recurred) enabledValue.recurred = recurred

    return enabledValue
  }

  const nextValue = (
    indexOrNode: Descendant<Y, M> | null | number | Y,
    loop = true,
  ) => {
    if (!count()) return undefined

    const currentIndex = isNumber(indexOrNode)
      ? indexOrNode
      : indexOf(indexOrNode)

    if (currentIndex === -1) return undefined

    const nextIndex = getNextIndex(currentIndex, count(), loop)

    return value(nextIndex)
  }

  const enabledNextValue = (
    indexOrNode: Descendant<Y, M> | null | number | Y,
    loop = true,
  ) => {
    if (!enabledCount()) return undefined

    let index = isNumber(indexOrNode) ? indexOrNode : indexOf(indexOrNode)
    let enabledValue = null
    let recurred = false

    while (enabledValue == null) {
      index++

      if (index >= count()) {
        if (!loop) return

        index = 0
        recurred = true
      }

      const descendant = value(index)

      enabledValue =
        descendant && !runIfFn(descendant.disabled, descendant.node)
          ? descendant
          : null
    }

    if (recurred) enabledValue.recurred = recurred

    return enabledValue
  }

  return {
    active,
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
 * @see https://yamada-ui.com/docs/hooks/use-descendants
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
