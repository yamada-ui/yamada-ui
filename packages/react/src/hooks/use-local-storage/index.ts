"use client"

import { useCallback, useEffect, useState } from "react"
import { isFunction } from "../../utils"
import { useWindowEvent } from "../use-window-event"

export type StorageType = "localStorage" | "sessionStorage"

export interface StorageProps<Y> {
  key: string
  defaultValue?: Y
  deserialize?: (value: string | undefined) => Y
  getInitialValueInEffect?: boolean
  serialize?: (value: Y) => string
}

const serializeJSON = <Y>(value: Y, name: string) => {
  try {
    return JSON.stringify(value)
  } catch {
    throw new Error(`useLocalStorage ${name}: Failed to serialize the value`)
  }
}

const deserializeJSON = (value: string | undefined) => {
  if (!value) return value

  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}

export const createStorage = <Y>(type: StorageType, name: string) => {
  const eventName =
    type === "localStorage" ? "local-storage" : "session-storage"

  return ({
    key,
    defaultValue = undefined,
    deserialize = deserializeJSON,
    getInitialValueInEffect = true,
    serialize = (value: Y) => serializeJSON(value, name),
  }: StorageProps<Y>) => {
    const readStorageValue = useCallback(
      (skipStorage?: boolean): Y => {
        if (
          typeof window === "undefined" ||
          !(type in window) ||
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          window[type] == null ||
          skipStorage
        ) {
          return (defaultValue ?? "") as Y
        }

        const storageValue = window[type].getItem(key)

        return storageValue !== null
          ? deserialize(storageValue)
          : ((defaultValue ?? "") as Y)
      },
      [key, deserialize, defaultValue],
    )

    const [value, setValue] = useState<Y>(
      readStorageValue(getInitialValueInEffect),
    )

    const setStorageValue = useCallback(
      (valOrFn: ((prevState: Y) => Y) | Y) => {
        if (isFunction(valOrFn)) {
          setValue((current) => {
            const result = valOrFn(current)

            window[type].setItem(key, serialize(result))
            window.dispatchEvent(
              new CustomEvent(eventName, {
                detail: { key, value: valOrFn(current) },
              }),
            )

            return result
          })
        } else {
          window[type].setItem(key, serialize(valOrFn))
          window.dispatchEvent(
            new CustomEvent(eventName, { detail: { key, value: valOrFn } }),
          )

          setValue(valOrFn)
        }
      },
      [key, serialize],
    )

    const removeStorageValue = useCallback(() => {
      window[type].removeItem(key)
      setValue(defaultValue as Y)
    }, [defaultValue, key])

    useWindowEvent("storage", (ev) => {
      if (ev.storageArea === window[type] && ev.key === key)
        setValue(deserialize(ev.newValue ?? undefined))
    })

    useWindowEvent(eventName, (ev) => {
      if (ev.detail.key === key) setValue(ev.detail.value)
    })

    useEffect(() => {
      if (defaultValue !== undefined && value === undefined)
        setStorageValue(defaultValue)
    }, [defaultValue, value, setStorageValue])

    useEffect(() => {
      if (getInitialValueInEffect) setValue(readStorageValue())
    }, [getInitialValueInEffect, readStorageValue])

    return [
      value === undefined ? defaultValue : value,
      setStorageValue,
      removeStorageValue,
    ] as const
  }
}

/**
 * `useLocalStorage` is a custom hook for storing, updating, and retrieving values in local storage.
 *
 * @see https://yamada-ui.com/hooks/use-local-storage
 */
export const useLocalStorage = <Y = string>(props: StorageProps<Y>) =>
  createStorage<Y>("localStorage", "use-local-storage")(props)
