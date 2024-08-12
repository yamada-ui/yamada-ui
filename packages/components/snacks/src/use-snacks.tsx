import type { AlertProps } from "@yamada-ui/alert"
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@yamada-ui/alert"
import { CloseButton } from "@yamada-ui/close-button"
import type {
  CSSUIObject,
  CSSUIProps,
  SnackComponentProps,
  SnackConfigOptions,
} from "@yamada-ui/core"
import { forwardRef, ui, useTheme } from "@yamada-ui/core"
import { cx, merge } from "@yamada-ui/utils"
import type { FC, ReactNode } from "react"
import { useCallback, useMemo, useState } from "react"

const createRender = (options: UseSnacksOptions): FC<SnackComponentProps> => {
  const { component } = options

  const Render: FC<SnackComponentProps> = (props) => {
    if (typeof component === "function") {
      return component({ ...props, ...options }) as JSX.Element
    } else {
      return <Snack {...props} {...options} />
    }
  }

  return Render
}

export type Snack = {
  id: string | number
  duration: UseSnacksOptions["duration"]
  status: UseSnacksOptions["status"]
  message: (props: SnackComponentProps) => ReactNode
  onClose: () => void
  onCloseComplete?: () => void
  boxShadow?: CSSUIProps["boxShadow"]
  style?: CSSUIObject
}

let counter = 0

type SnackMethodsOptions = Omit<
  UseSnacksOptions,
  "direction" | "limit" | "startIndex"
> &
  Partial<Pick<Snack, "id" | "onCloseComplete">>

export type UseSnacksOptions = SnackConfigOptions

/**
 * `useSnacks` is a custom hook for controlling notifications used in forms and the like.
 *
 * @see Docs https://yamada-ui.com/hooks/use-snacks
 */
export const useSnacks = (defaultOptions: UseSnacksOptions = {}) => {
  const [items, setItems] = useState<Snack[]>([])
  const { theme } = useTheme()

  const themeOptions = useMemo(
    () => theme.__config.snacks?.options ?? {},
    [theme],
  )

  const computedOptions = useMemo(
    () => merge<UseSnacksOptions>(themeOptions, defaultOptions),
    [defaultOptions, themeOptions],
  )
  const { direction, startIndex, limit = 3 } = computedOptions

  const getOptions = useCallback(
    (options: SnackMethodsOptions) => merge(computedOptions, options),
    [computedOptions],
  )

  const snack = useMemo(() => {
    const methods = (options: SnackMethodsOptions = {}) => {
      options = getOptions(options)

      const message = createRender(options)

      counter += 1

      let {
        id = counter,
        duration,
        onCloseComplete,
        status,
        boxShadow,
        style,
      } = options

      const onClose = () =>
        setItems((prev) => prev.filter((child) => child.id !== id))

      const snack: Snack = {
        id,
        status,
        duration,
        message,
        onClose,
        onCloseComplete,
        boxShadow,
        style,
      }

      setItems((prev) => [
        ...prev.splice(-1 * ((limit ?? Infinity) - 1)),
        snack,
      ])

      return id
    }

    methods.update = (
      id: string | number,
      options: Omit<SnackMethodsOptions, "id">,
    ) => {
      options = getOptions(options)

      setItems((prev) =>
        prev.map((props) => {
          if (props.id === id) {
            return { ...props, ...options, message: createRender(options) }
          } else {
            return props
          }
        }),
      )
    }

    methods.closeAll = () => {
      setItems([])
    }

    methods.close = (id: string | number) => {
      setItems((prev) => prev.filter((props) => props.id !== id))
    }

    methods.isActive = (id: string | number) =>
      !!items.find((props) => props.id === id)

    return methods
  }, [items, limit, getOptions])

  const snacks = useMemo(
    () => ({ direction, startIndex, items }),
    [direction, startIndex, items],
  )

  return { snack, snacks }
}

export type UseSnacksReturn = ReturnType<typeof useSnacks>

export type SnackProps = Omit<AlertProps, keyof UseSnacksOptions> &
  UseSnacksOptions & {
    index: number
    onClose?: () => void
  }

const defaultBoxShadow: CSSUIProps["boxShadow"] = [
  "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  "0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px -1px 2px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.2)",
]

const Snack = forwardRef<SnackProps, "div">(
  (
    {
      variant = "basic",
      colorScheme,
      status,
      icon,
      title,
      description,
      isClosable = true,
      closeStrategy = "button",
      boxShadow = defaultBoxShadow,
      className,
      index,
      onClose,
    },
    ref,
  ) => {
    const isButtonClosable =
      isClosable && (closeStrategy === "button" || closeStrategy === "both")
    const isElementClosable =
      isClosable && (closeStrategy === "element" || closeStrategy === "both")

    return (
      <Alert
        ref={ref}
        className={cx("ui-snack", className)}
        status={status}
        variant={variant}
        colorScheme={colorScheme}
        alignItems="start"
        boxShadow={index ? boxShadow : undefined}
        pe={isButtonClosable ? 8 : undefined}
        onClick={isElementClosable ? onClose : undefined}
      >
        <AlertIcon
          variant={icon?.variant}
          className="ui-snack__icon"
          {...(icon?.color ? { color: icon.color } : {})}
        >
          {icon?.children}
        </AlertIcon>

        <ui.div flex="1">
          {title ? (
            <AlertTitle className="ui-snack__title" lineClamp={1}>
              {title}
            </AlertTitle>
          ) : null}
          {description ? (
            <AlertDescription className="ui-snack__description" lineClamp={3}>
              {description}
            </AlertDescription>
          ) : null}
        </ui.div>

        {isButtonClosable ? (
          <CloseButton
            className="ui-snack__close-button"
            size="sm"
            onClick={(ev) => {
              ev.stopPropagation()

              onClose?.()
            }}
            position="absolute"
            top={2}
            right={2}
          />
        ) : null}
      </Alert>
    )
  },
)
