import { useWindowEvent } from "@yamada-ui/use-window-event"
import { isFunction } from "@yamada-ui/utils"
import { useState, useCallback, useEffect } from "react"

export type StorageType = "localStorage" | "sessionStorage"

export type StorageProps<T> = {
  key: string
  defaultValue?: T
  getInitialValueInEffect?: boolean
  serialize?: (value: T) => string
  deserialize?: (value: string | undefined) => T
}

const serializeJSON = <T>(value: T, name: string) => {
  try {
    return JSON.stringify(value)
  } catch (error) {
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

export const createStorage = <T>(type: StorageType, name: string) => {
  const eventName =
    type === "localStorage" ? "ui-local-storage" : "ui-session-storage"

  return ({
    key,
    defaultValue = undefined,
    getInitialValueInEffect = true,
    deserialize = deserializeJSON,
    serialize = (value: T) => serializeJSON(value, name),
  }: StorageProps<T>) => {
    const readStorageValue = useCallback(
      (skipStorage?: boolean): T => {
        if (
          typeof window === "undefined" ||
          !(type in window) ||
          window[type] === null ||
          skipStorage
        ) {
          return (defaultValue ?? "") as T
        }

        const storageValue = window[type].getItem(key)

        return storageValue !== null
          ? deserialize(storageValue)
          : ((defaultValue ?? "") as T)
      },
      [key, deserialize, defaultValue],
    )

    const [value, setValue] = useState<T>(
      readStorageValue(getInitialValueInEffect),
    )

    const setStorageValue = useCallback(
      (valOrFunc: T | ((prevState: T) => T)) => {
        if (isFunction(valOrFunc)) {
          setValue((current) => {
            const result = valOrFunc(current)

            window[type].setItem(key, serialize(result))
            window.dispatchEvent(
              new CustomEvent(eventName, {
                detail: { key, value: valOrFunc(current) },
              }),
            )

            return result
          })
        } else {
          window[type].setItem(key, serialize(valOrFunc))
          window.dispatchEvent(
            new CustomEvent(eventName, { detail: { key, value: valOrFunc } }),
          )

          setValue(valOrFunc)
        }
      },
      [key, serialize],
    )

    const removeStorageValue = useCallback(() => {
      window[type].removeItem(key)
      setValue(defaultValue as T)
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

export const useLocalStorage = <T = string>(props: StorageProps<T>) =>
  createStorage<T>("localStorage", "use-local-storage")(props)
