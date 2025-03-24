import { useCallback, useEffect, useState } from "react"
import { isFunction } from "../../utils"
import { useWindowEvent } from "../use-window-event"

export type StorageType = "localStorage" | "sessionStorage"

export interface StorageProps<T> {
  key: string
  defaultValue?: T
  deserialize?: (value: string | undefined) => T
  getInitialValueInEffect?: boolean
  serialize?: (value: T) => string
}

const serializeJSON = <T>(value: T, name: string) => {
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

export const createStorage = <T>(type: StorageType, name: string) => {
  const eventName =
    type === "localStorage" ? "ui-local-storage" : "ui-session-storage"

  return ({
    key,
    defaultValue = undefined,
    deserialize = deserializeJSON,
    getInitialValueInEffect = true,
    serialize = (value: T) => serializeJSON(value, name),
  }: StorageProps<T>) => {
    const readStorageValue = useCallback(
      (skipStorage?: boolean): T => {
        if (
          typeof window === "undefined" ||
          !(type in window) ||
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          window[type] == null ||
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
      (valOrFunc: ((prevState: T) => T) | T) => {
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

/**
 * `useLocalStorage` is a custom hook for storing, updating, and retrieving values in local storage.
 *
 * @see https://yamada-ui.com/hooks/use-local-storage
 */
export const useLocalStorage = <T = string>(props: StorageProps<T>) =>
  createStorage<T>("localStorage", "use-local-storage")(props)
