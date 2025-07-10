"use client"

import type { RefCallback } from "react"
import { useRef, useState } from "react"
import {
  cast,
  createContext,
  isHTMLElement,
  mergeRefs,
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

export type DescendantOptions<
  T extends HTMLElement = HTMLElement,
  K = {},
> = K & {
  id?: string
  disabled?: boolean
  filter?: FilterDescendant<T, K>
}

export type Descendant<
  T extends HTMLElement = HTMLElement,
  K = {},
> = DescendantOptions<T, K> & {
  index: number
  node: T
}

export type FilterDescendant<T extends HTMLElement = HTMLElement, K = {}> = (
  value: Descendant<T, K>,
  index: number,
  array: Descendant<T, K>[],
) => boolean

const descendantsManager = <T extends HTMLElement = HTMLElement, K = {}>() => {
  const descendants = new Map<T, Descendant<T, K>>()

  const assignIndex = (newDescendants: Node[]) => {
    descendants.forEach((descendant) => {
      const index = newDescendants.indexOf(descendant.node)

      descendant.index = index
      descendant.node.dataset.index = descendant.index.toString()
    })
  }

  const setDescendants = (
    node: null | T,
    options?: DescendantOptions<T, K>,
  ) => {
    if (!node || descendants.has(node)) return

    const keys = Array.from(descendants.keys()).concat(node)
    const sorted = sortNodes(keys)

    if (options?.disabled) options.disabled = !!options.disabled

    const descendant = { index: -1, node, ...options }

    descendants.set(node, descendant as Descendant<T, K>)

    assignIndex(sorted)
  }

  const register = (nodeOrOptions?: DescendantOptions<T, K> | null | T) => {
    if (nodeOrOptions == null) return

    if (isHTMLElement(nodeOrOptions)) return setDescendants(nodeOrOptions)

    return (node: null | T) => setDescendants(node, nodeOrOptions)
  }

  const unregister = (node?: T) => {
    if (node == null) return

    descendants.delete(node)

    const sorted = sortNodes(Array.from(descendants.keys()))

    assignIndex(sorted)
  }

  const destroy = () => descendants.clear()

  const count = (filter?: FilterDescendant<T, K>) => values(filter).length

  const enabledCount = (filter?: FilterDescendant<T, K>) =>
    enabledValues(filter).length

  const indexOf = (node?: null | T) =>
    !node ? -1 : (descendants.get(node)?.index ?? -1)

  const enabledIndexOf = (node?: null | T, filter?: FilterDescendant<T, K>) =>
    node == null
      ? -1
      : enabledValues(filter).findIndex((i) => i.node.isSameNode(node))

  const values = (filter?: FilterDescendant<T, K>) => {
    const values = Array.from(descendants.values())

    if (filter) {
      return values.filter(filter).sort((a, b) => a.index - b.index)
    } else {
      return values.sort((a, b) => a.index - b.index)
    }
  }

  const enabledValues = (filter?: FilterDescendant<T, K>) =>
    values(filter).filter(({ disabled }) => !disabled)

  const value = (index: number, filter?: FilterDescendant<T, K>) => {
    if (count(filter) === 0) return undefined

    return values(filter)[index]
  }

  const enabledValue = (index: number, filter?: FilterDescendant<T, K>) => {
    if (enabledCount(filter) === 0) return undefined

    return enabledValues(filter)[index]
  }

  const firstValue = (filter?: FilterDescendant<T, K>) => value(0, filter)

  const enabledFirstValue = (filter?: FilterDescendant<T, K>) =>
    enabledValue(0, filter)

  const lastValue = (filter?: FilterDescendant<T, K>) =>
    value(descendants.size - 1, filter)

  const enabledLastValue = (filter?: FilterDescendant<T, K>) =>
    enabledValue(enabledValues(filter).length - 1, filter)

  const prevValue = (
    index: number,
    filter?: FilterDescendant<T, K>,
    loop = true,
  ) => {
    const prev = getPrevIndex(index, count(filter) - 1, loop)

    return value(prev, filter)
  }

  const enabledPrevValue = (
    index: number,
    filter?: FilterDescendant<T, K>,
    loop = true,
  ) => {
    const target = value(index)

    if (!target) return

    const enabledIndex = enabledIndexOf(target.node, filter)
    const prevEnabledIndex = getPrevIndex(
      enabledIndex,
      enabledCount(filter) - 1,
      loop,
    )

    return enabledValue(prevEnabledIndex, filter)
  }

  const nextValue = (
    index: number,
    filter?: FilterDescendant<T, K>,
    loop = true,
  ) => {
    const next = getNextIndex(index, count(filter), loop)

    return value(next, filter)
  }

  const enabledNextValue = (
    index: number,
    filter?: FilterDescendant<T, K>,
    loop = true,
  ) => {
    const target = value(index)

    if (!target) return

    const enabledIndex = enabledIndexOf(target.node, filter)
    const nextEnabledIndex = getNextIndex(
      enabledIndex,
      enabledCount(filter),
      loop,
    )

    return enabledValue(nextEnabledIndex, filter)
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

export type DescendantsManager<
  T extends HTMLElement,
  K extends { [key: string]: any } = {},
> = ReturnType<typeof descendantsManager<T, K>>

export const createDescendant = <
  T extends HTMLElement = HTMLElement,
  K extends { [key: string]: any } = {},
>() => {
  const [DescendantsContext, useDescendantsContext] = createContext<
    DescendantsManager<T, K>
  >({
    name: "DescendantsContext",
  })

  const useDescendants = () => {
    const descendants = useRef(descendantsManager<T, K>())

    useSafeLayoutEffect(() => {
      return () => descendants.current.destroy()
    })

    return descendants.current
  }

  const useDescendant = (options?: DescendantOptions<T, K>) => {
    const descendants = useDescendantsContext()
    const [index, setIndex] = useState<number>(-1)
    const ref = useRef<T>(null)

    useSafeLayoutEffect(() => {
      return () => {
        if (!ref.current) return

        descendants.unregister(ref.current)
      }
    }, [])

    useSafeLayoutEffect(() => {
      if (!ref.current) return

      const dataIndex = Number(ref.current.dataset.index)

      if (index != dataIndex && !Number.isNaN(dataIndex)) setIndex(dataIndex)
    })

    const refCallback = options
      ? cast<RefCallback<T>>(descendants.register(options))
      : cast<RefCallback<T>>(descendants.register)

    return {
      descendants,
      enabledIndex: descendants.enabledIndexOf(ref.current, options?.filter),
      index,
      register: mergeRefs(refCallback, ref),
    }
  }

  return {
    DescendantsContext,
    useDescendant,
    useDescendants,
    useDescendantsContext,
  }
}
