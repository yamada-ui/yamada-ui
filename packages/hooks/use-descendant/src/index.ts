import { cast, createContext, isElement, mergeRefs, useSafeLayoutEffect } from '@yamada-ui/utils'
import { Provider, RefCallback, useRef, useState } from 'react'

const sortNodes = (nodes: Node[]) =>
  nodes.sort((a, b) => {
    const compare = a.compareDocumentPosition(b)

    if (compare & Node.DOCUMENT_POSITION_FOLLOWING || compare & Node.DOCUMENT_POSITION_CONTAINED_BY)
      return -1

    if (compare & Node.DOCUMENT_POSITION_PRECEDING || compare & Node.DOCUMENT_POSITION_CONTAINS)
      return 1

    if (
      compare & Node.DOCUMENT_POSITION_DISCONNECTED ||
      compare & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
    ) {
      throw Error('Cannot sort the given nodes.')
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

type DescendantOptions<T = {}> = T & {
  disabled?: boolean
  id?: string
}

type Descendant<T, K> = DescendantOptions<K> & {
  node: T
  index: number
}

const descendantsManager = <T extends HTMLElement, K extends Record<string, any> = {}>() => {
  const descendants = new Map<T, Descendant<T, K>>()

  const assignIndex = (newDescendants: Node[]) => {
    descendants.forEach((descendant) => {
      const index = newDescendants.indexOf(descendant.node)

      descendant.index = index
      descendant.node.dataset.index = descendant.index.toString()
    })
  }

  const setDescendants = (node: T | null, options?: DescendantOptions<K>) => {
    if (!node || descendants.has(node)) return

    const keys = Array.from(descendants.keys()).concat(node)
    const sorted = sortNodes(keys)

    if (options?.disabled) options.disabled = !!options.disabled

    const descendant = { node, index: -1, ...options }

    descendants.set(node, descendant as Descendant<T, K>)

    assignIndex(sorted)
  }

  const register = (nodeOrOptions: T | null | DescendantOptions<K>) => {
    if (nodeOrOptions == null) return

    if (isElement(nodeOrOptions)) return setDescendants(nodeOrOptions)

    return (node: T | null) => setDescendants(node, nodeOrOptions)
  }

  const unregister = (node: T) => {
    descendants.delete(node)

    const sorted = sortNodes(Array.from(descendants.keys()))

    assignIndex(sorted)
  }

  const destroy = () => descendants.clear()

  const count = () => descendants.size

  const enabledCount = () => enabledValues().length

  const indexOf = (node: T | null) => (!node ? -1 : descendants.get(node)?.index ?? -1)

  const enabledIndexOf = (node: T | null) =>
    node == null ? -1 : enabledValues().findIndex((i) => i.node.isSameNode(node))

  const values = (
    filter?: (value: Descendant<T, K>, index: number, array: Descendant<T, K>[]) => boolean,
  ) => {
    const values = Array.from(descendants.values())

    if (filter) {
      return values.filter(filter).sort((a, b) => a.index - b.index)
    } else {
      return values.sort((a, b) => a.index - b.index)
    }
  }

  const enabledValues = (
    filter?: (value: Descendant<T, K>, index: number, array: Descendant<T, K>[]) => boolean,
  ) => values(filter).filter(({ disabled }) => !disabled)

  const value = (index: number) => {
    if (count() === 0) return undefined

    return values()[index]
  }

  const enabledValue = (index: number) => {
    if (enabledCount() === 0) return undefined

    return enabledValues()[index]
  }

  const firstValue = () => value(0)

  const enabledfirstValue = () => enabledValue(0)

  const lastValue = () => value(descendants.size - 1)

  const enabledlastValue = () => enabledValue(enabledValues().length - 1)

  const prevValue = (index: number, loop = true) => {
    const prev = getPrevIndex(index, count() - 1, loop)

    return value(prev)
  }

  const enabledPrevValue = (index: number, loop = true) => {
    const target = value(index)

    if (!target) return

    const enabledIndex = enabledIndexOf(target.node)
    const prevEnabledIndex = getPrevIndex(enabledIndex, enabledCount() - 1, loop)

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
    register,
    unregister,
    destroy,
    count,
    values,
    value,
    indexOf,
    firstValue,
    lastValue,
    prevValue,
    nextValue,
    enabledCount,
    enabledValues,
    enabledValue,
    enabledIndexOf,
    enabledfirstValue,
    enabledlastValue,
    enabledPrevValue,
    enabledNextValue,
  }
}

export type DescendantsManager<
  T extends HTMLElement,
  K extends Record<string, any> = {},
> = ReturnType<typeof descendantsManager<T, K>>

const useDescendants = <
  T extends HTMLElement = HTMLElement,
  K extends Record<string, any> = {},
>() => {
  const descendants = useRef(descendantsManager<T, K>())

  useSafeLayoutEffect(() => {
    return () => descendants.current.destroy()
  })

  return descendants.current
}

type UseDescendantsReturn = ReturnType<typeof useDescendants>

const [DescendantsContextProvider, useDescendantsContext] = createContext<UseDescendantsReturn>({
  name: 'DescendantsProvider',
  errorMessage: 'useDescendantsContext must be used within DescendantsContextProvider',
})

const useDescendant = <T extends HTMLElement = HTMLElement, K extends Record<string, any> = {}>(
  options?: DescendantOptions<K>,
) => {
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
    index,
    enabledIndex: descendants.enabledIndexOf(ref.current),
    register: mergeRefs(refCallback, ref),
  }
}

export const createDescendant = <
  T extends HTMLElement = HTMLElement,
  K extends Record<string, any> = {},
>() =>
  ({
    DescendantsContextProvider: cast<Provider<DescendantsManager<T, K>>>(
      DescendantsContextProvider,
    ),
    useDescendantsContext: () => cast<DescendantsManager<T, K>>(useDescendantsContext()),
    useDescendants: () => useDescendants<T, K>(),
    useDescendant: (options?: DescendantOptions<K>) => useDescendant<T, K>(options),
  } as const)
