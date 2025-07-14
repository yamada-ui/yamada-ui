"use client"

import type { Path, Value } from "@yamada-ui/utils"
import {
  getMemoizedObject,
  isArray,
  isObject,
  isUndefined,
  runIfFn,
  toArray,
} from "@yamada-ui/utils"
import { useSyncExternalStore } from "react"

const DEFAULT_IDENTIFIER = "default"

interface Subscribe {
  (listener: () => void): () => void
}

interface Store<Y> {
  ref: { current: Y }
  get: () => Y
  queue: Map<string, (() => void)[]>
  set: (nextState: ((prevState: Y) => Y) | Y, key?: string | string[]) => void
  update: (key?: string | string[]) => void
  key?: string
}

type IndexOrPath<Y> = Y extends any[]
  ? number
  : Y extends object
    ? Path<Y>
    : undefined

type ReturnArrayValue<Y extends any[], D> = D extends number
  ? undefined | Y[D]
  : Y

type ReturnObjectValue<Y extends object, D> = D extends string ? Value<Y, D> : Y

type ReturnValue<Y, D> = Y extends any[]
  ? ReturnArrayValue<Y, D>
  : Y extends object
    ? ReturnObjectValue<Y, D>
    : Y

interface UseStore<Y> {
  <D extends IndexOrPath<Y>>(path?: D, key?: string): ReturnValue<Y, D>
}

interface CreateMethod<Y, M extends Function> {
  (store: Store<Y>): M
}

type Methods<Y, M extends CustomMethods<Y>> = {
  [D in keyof M]: ReturnType<M[D]>
} & {
  get: () => Y
  set: (nextState: ((prevState: Y) => Y) | Y, key?: string | string[]) => void
  update: () => void
}

interface CustomMethods<Y> {
  [key: string]: CreateMethod<Y, (...args: any[]) => Promise<void> | void>
}

interface CreateStoreOptions<Y> {
  proxyHandler?: ProxyHandler<{ current: Y }>
  subscribe?: CreateMethod<Y, Subscribe>
}

export function createStore<Y, M extends CustomMethods<Y>>(
  initialState: (() => Y) | Y,
  additionalMethods?: M,
  options: CreateStoreOptions<Y> = {},
): [UseStore<Y>, Methods<Y, M>] {
  const queue = new Map<string, (() => void)[]>()
  const ref = new Proxy(
    { current: runIfFn(initialState) },
    { ...options.proxyHandler },
  )

  function get() {
    return ref.current
  }

  function executeQueue(key: string) {
    const listeners = queue.get(key) ?? []

    if (!listeners.length)
      console.warn(`createStore: ${key} is not subscribed.`)

    listeners.forEach((listener) => listener())
  }

  function update(key?: string | string[]) {
    if (!isUndefined(key)) {
      toArray(key).forEach(executeQueue)
    }

    executeQueue(DEFAULT_IDENTIFIER)
  }

  function set(nextState: ((prevState: Y) => Y) | Y, key?: string | string[]) {
    ref.current = runIfFn(nextState, ref.current)

    update(key)
  }

  const methods = { ref, get, queue, set, update }

  function useStore<D extends IndexOrPath<Y>>(path?: D, key?: string) {
    const customSubscribe = options.subscribe?.({
      key,
      ...methods,
    })

    const subscribe = function (listener: () => void) {
      if (key) {
        const listeners = queue.get(key) ?? []

        if (listeners.length)
          console.warn(`createStore: ${key} is already subscribed.`)

        queue.set(key, [listener])
      } else {
        const listeners = queue.get(DEFAULT_IDENTIFIER) ?? []

        queue.set(DEFAULT_IDENTIFIER, [...listeners, listener])
      }

      return function () {
        if (key) {
          queue.delete(key)
        } else {
          const listeners = queue.get(DEFAULT_IDENTIFIER) ?? []

          queue.set(
            DEFAULT_IDENTIFIER,
            listeners.filter((fn) => fn !== listener),
          )
        }
      }
    }

    function getSnapshot<H extends ReturnValue<Y, D>>(): H {
      if (!isUndefined(path)) {
        if (isObject(ref.current)) {
          return getMemoizedObject(ref.current, path) as H
        } else if (isArray(ref.current)) {
          return ref.current[path as number] as unknown as H
        }
      }

      return ref.current as unknown as H
    }

    return useSyncExternalStore(
      customSubscribe ?? subscribe,
      getSnapshot,
      getSnapshot,
    )
  }

  const customMethods = Object.fromEntries(
    Object.entries(additionalMethods ?? {}).map(([key, value]) => [
      key,
      value(methods),
    ]),
  ) as { [D in keyof M]: ReturnType<M[D]> }

  return [useStore, { ...methods, ...customMethods }]
}
