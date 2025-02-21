import type { FC, ReactNode } from "react"
import type { AlertProps } from "../../components/alert"
import type {
  CSSUIObject,
  CSSUIProps,
  SnackComponentProps,
  SnackConfigOptions,
} from "../../core"
import { useCallback, useMemo, useState } from "react"
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "../../components/alert"
import { forwardRef, ui } from "../../core"
import { useTheme } from "../../providers/theme-provider"
import { cx, merge } from "../../utils"
import { CloseButton } from "../close-button"

const createRender = (options: UseSnacksOptions): FC<SnackComponentProps> => {
  const { component } = options

  const Render: FC<SnackComponentProps> = (props) => {
    if (typeof component === "function") {
      return component({ ...props, ...options })
    } else {
      return <Snack {...props} {...options} />
    }
  }

  return Render
}

export interface Snack {
  id: number | string
  duration: UseSnacksOptions["duration"]
  message: (props: SnackComponentProps) => ReactNode
  status: UseSnacksOptions["status"]
  onClose: () => void
  style?: CSSUIObject
  boxShadow?: CSSUIProps["boxShadow"]
  onCloseComplete?: () => void
}

let counter = 0

interface SnackMethodsOptions
  extends Omit<UseSnacksOptions, "direction" | "limit" | "startIndex">,
    Partial<Pick<Snack, "id" | "onCloseComplete">> {}

export interface UseSnacksOptions extends SnackConfigOptions {}

/**
 * `useSnacks` is a custom hook for controlling notifications used in forms and the like.
 *
 * @see Docs https://yamada-ui.com/hooks/use-snacks
 */
export const useSnacks = (defaultOptions: UseSnacksOptions = {}) => {
  const [items, setItems] = useState<Snack[]>([])
  const { theme } = useTheme()

  const themeOptions = useMemo(
    () => theme.__config?.snacks?.options ?? {},
    [theme],
  )

  const computedOptions = useMemo(
    () => merge<UseSnacksOptions>(themeOptions, defaultOptions),
    [defaultOptions, themeOptions],
  )
  const { direction, limit = 3, startIndex } = computedOptions

  const getOptions = useCallback(
    (options: SnackMethodsOptions) => merge(computedOptions, options),
    [computedOptions],
  )

  const snack = useMemo(() => {
    const methods = (options: SnackMethodsOptions = {}) => {
      options = getOptions(options)

      const message = createRender(options)

      counter += 1

      const {
        id = counter,
        style,
        boxShadow,
        duration,
        status,
        onCloseComplete,
      } = options

      const onClose = () =>
        setItems((prev) => prev.filter((child) => child.id !== id))

      const snack: Snack = {
        id,
        style,
        boxShadow,
        duration,
        message,
        status,
        onClose,
        onCloseComplete,
      }

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

    methods.close = (id: number | string) => {
      setItems((prev) => prev.filter((props) => props.id !== id))
    }

    methods.isActive = (id: number | string) =>
      !!items.find((props) => props.id === id)

    return methods
  }, [items, limit, getOptions])

  const snacks = useMemo(
    () => ({ direction, items, startIndex }),
    [direction, startIndex, items],
  )

  return { snack, snacks }
}

export type UseSnacksReturn = ReturnType<typeof useSnacks>

export interface SnackProps
  extends Omit<AlertProps, keyof UseSnacksOptions>,
    UseSnacksOptions {
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
      className,
      colorScheme,
      variant = "basic",
      boxShadow = defaultBoxShadow,
      closeStrategy = "button",
      description,
      icon,
      index,
      isClosable = true,
      status,
      title,
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
        colorScheme={colorScheme}
        variant={variant}
        alignItems="start"
        boxShadow={index ? boxShadow : undefined}
        pe={isButtonClosable ? 8 : undefined}
        status={status}
        onClick={isElementClosable ? onClose : undefined}
      >
        <AlertIcon
          className="ui-snack__icon"
          variant={icon?.variant}
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
            <AlertDescription className="ui-snack__desc" lineClamp={3}>
              {description}
            </AlertDescription>
          ) : null}
        </ui.div>

        {isButtonClosable ? (
          <CloseButton
            className="ui-snack__close-button"
            size="sm"
            position="absolute"
            right={2}
            top={2}
            onClick={(ev) => {
              ev.stopPropagation()

              onClose?.()
            }}
          />
        ) : null}
      </Alert>
    )
  },
)

Snack.displayName = "Snack"
Snack.__ui__ = "Snack"
