"use client"

import type { ReactNode } from "react"
import type { SnacksConfig } from "../../core"
import type { Alert } from "../alert"
import type { SnackCloseButtonProps, SnackContentProps } from "./snacks"
import { useCallback, useMemo, useState } from "react"
import { useSystem } from "../../core"

export interface Snack
  extends Omit<UseSnacksOptions, "direction" | "limit" | "startIndex"> {
  id: string
  onClose: () => void
  onCloseComplete?: () => void
}

let counter = 0

interface SnackMethodsOptions extends Partial<Omit<Snack, "onClose">> {}

export interface UseSnacksOptions
  extends Omit<Alert.RootProps, "direction" | "title">,
    Pick<Alert.LoadingProps, "loadingScheme">,
    SnacksConfig {
  /**
   * The description of the snack.
   */
  description?: ReactNode
  /**
   * The title of the snack.
   */
  title?: ReactNode
  /**
   * If `true`, the snack will have an icon.
   *
   * @default true
   */
  withIcon?: boolean
  /**
   * Props for the snack close button.
   */
  closeButtonProps?: SnackCloseButtonProps
  /**
   * Props for the snack content component.
   */
  contentProps?: SnackContentProps
  /**
   * Props for the alert description component.
   */
  descriptionProps?: Alert.DescriptionProps
  /**
   * Props for the alert icon component.
   */
  iconProps?: Alert.IconProps
  /**
   * Props for the alert loading component.
   */
  loadingProps?: Alert.LoadingProps
  /**
   * Props for the alert title component.
   */
  titleProps?: Alert.TitleProps
}

/**
 * `useSnacks` is a custom hook for controlling notifications used in forms and the like.
 *
 * @see https://yamada-ui.com/docs/hooks/use-snacks
 */
export const useSnacks = (options: UseSnacksOptions = {}) => {
  const [items, setItems] = useState<Snack[]>([])
  const { config } = useSystem()

  const systemOptions = useMemo(() => config.snacks ?? {}, [config])
  const defaultOptions = useMemo(
    () => ({ ...systemOptions, ...options }),
    [options, systemOptions],
  )
  const { direction, limit = 3, startIndex } = defaultOptions

  const getOptions = useCallback(
    (options: SnackMethodsOptions) => ({ ...defaultOptions, ...options }),
    [defaultOptions],
  )

  const snack = useMemo(() => {
    const methods = (options: SnackMethodsOptions = {}) => {
      options = getOptions(options)
      counter += 1

      const { id = counter.toString(), ...rest } = options
      const onClose = () =>
        setItems((prev) => prev.filter((prevOptions) => prevOptions.id !== id))

      const snack: Snack = { id, onClose, ...rest }

      setItems((prev) => [
        ...prev.splice(-1 * ((limit ?? Infinity) - 1)),
        snack,
      ])

      return id
    }

    methods.update = (
      id: number | string,
      options: Omit<SnackMethodsOptions, "id">,
    ) => {
      options = getOptions(options)

      setItems((prev) =>
        prev.map((prevOptions) =>
          prevOptions.id === id ? { ...prevOptions, ...options } : prevOptions,
        ),
      )
    }

    methods.closeAll = () => {
      setItems([])
    }

    methods.close = (id: number | string) => {
      setItems((prev) => prev.filter((prevOptions) => prevOptions.id !== id))
    }

    methods.isActive = (id: number | string) =>
      !!items.find((prevOptions) => prevOptions.id === id)

    return methods
  }, [items, limit, getOptions])

  const snacks = useMemo(
    () => ({ direction, items, startIndex }),
    [direction, startIndex, items],
  )

  return { snack, snacks }
}

export type UseSnacksReturn = ReturnType<typeof useSnacks>
