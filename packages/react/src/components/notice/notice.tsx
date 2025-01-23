import type { ReactNode } from "react"
import type {
  CSSObject,
  FC,
  NoticeComponentProps,
  NoticeConfigOptions,
  NoticePlacement,
  StyledTheme,
  ThemeProps,
} from "../../core"
import type { AlertRootProps, AlertStyle } from "../alert"
import { useMemo } from "react"
import { ui } from "../../core"
import { useTheme } from "../../providers/theme-provider"
import { cx, isFunction, merge } from "../../utils"
import { Alert } from "../alert"
import { CloseButton } from "../close-button"

export interface UseNoticeOptions
  extends ThemeProps<AlertStyle>,
    NoticeConfigOptions {}

export interface NoticeOptions {
  id: number | string
  duration: UseNoticeOptions["duration"]
  message: (props: NoticeComponentProps) => ReactNode
  placement: NoticePlacement
  status: UseNoticeOptions["status"]
  onDelete: () => void
  style?: CSSObject
  isDelete?: boolean
  onCloseComplete?: () => void
}

const findId = (
  options: NoticeOptions[],
  id: number | string,
): NoticeOptions | undefined => options.find((notice) => notice.id === id)

const findNotice = (
  state: State,
  id: number | string,
): {
  index: number
  placement: NoticePlacement | undefined
} => {
  const placement = getNoticePlacement(state, id)

  const index = placement
    ? state[placement].findIndex((notice) => notice.id === id)
    : -1

  return { index, placement }
}

const getNoticePlacement = (
  state: State,
  id: number | string,
): NoticePlacement | undefined => {
  for (const [placement, values] of Object.entries(state)) {
    if (findId(values, id)) return placement as NoticePlacement
  }
}

interface CreateNoticeOptions
  extends Partial<
    Pick<
      NoticeOptions,
      "duration" | "id" | "onCloseComplete" | "placement" | "status" | "style"
    >
  > {}

let counter = 0

const createNotice = (
  message: (props: NoticeComponentProps) => ReactNode,
  {
    id,
    style,
    duration,
    placement = "start",
    status,
    onCloseComplete,
  }: CreateNoticeOptions,
) => {
  counter += 1

  id ??= counter

  return {
    id,
    style,
    duration,
    isDelete: false,
    message,
    placement,
    status,
    onCloseComplete,
    onDelete: () => noticeStore.remove(String(id), placement),
  }
}

const createRender = (options: UseNoticeOptions): FC<NoticeComponentProps> => {
  const { component } = options

  const Render: FC<NoticeComponentProps> = (props) => {
    if (isFunction(component)) {
      return component({ ...props, ...options })
    } else {
      return <Notice {...props} {...options} />
    }
  }

  return Render
}

const createNoticeFunc = (
  defaultOptions: UseNoticeOptions,
  theme: StyledTheme,
) => {
  const themeOptions = theme.__config?.notice?.options ?? {}

  const computedOptions = (options: UseNoticeOptions) =>
    merge(themeOptions, merge(defaultOptions, options))

  const notice = (options: UseNoticeOptions = {}) => {
    options = computedOptions(options)

    const message = createRender(options)

    return noticeStore.create(message, options)
  }

  notice.update = (
    id: number | string,
    options: Omit<UseNoticeOptions, "id">,
  ) => {
    options = computedOptions(options)

    noticeStore.update(id, options)
  }

  notice.closeAll = noticeStore.closeAll
  notice.close = noticeStore.close
  notice.isActive = noticeStore.isActive

  return notice
}

type CreateNoticeReturn = ReturnType<typeof createNoticeFunc>

/**
 * `useNotice` is a custom hook that controls the notifications of the application.
 *
 * @see Docs https://yamada-ui.com/hooks/use-notice
 */
export const useNotice = (
  defaultOptions?: UseNoticeOptions,
): CreateNoticeReturn => {
  const { theme } = useTheme()

  return useMemo(
    () => createNoticeFunc(defaultOptions ?? {}, theme),
    [defaultOptions, theme],
  )
}

type State = {
  [K in NoticePlacement]: NoticeOptions[]
}

interface Store {
  close: (id: number | string) => void
  closeAll: (options?: { placement?: NoticePlacement[] }) => void
  create: (
    message: (props: NoticeComponentProps) => ReactNode,
    options: UseNoticeOptions,
  ) => number | string
  getSnapshot: () => State
  isActive: (id: number | string) => boolean
  remove: (id: number | string, placement: NoticePlacement) => void
  subscribe: (onStoreChange: () => void) => () => void
  update: (id: number | string, options: Omit<UseNoticeOptions, "id">) => void
}

const initialState = {
  end: [],
  "end-center": [],
  "end-end": [],
  "end-start": [],
  start: [],
  "start-center": [],
  "start-end": [],
  "start-start": [],
} as {
  [K in NoticePlacement]: []
}

const createNoticeStore = (initialState: State): Store => {
  let state = initialState
  const storeChangeCache = new Set<() => void>()

  const setState = (setStateFunc: (values: State) => State) => {
    state = setStateFunc(state)
    storeChangeCache.forEach((onStoreChange) => onStoreChange())
  }

  return {
    close: (id) => {
      setState((prev) => {
        const placement = getNoticePlacement(prev, id)

        if (!placement) return prev

        return {
          ...prev,
          [placement]: prev[placement].map((notice) =>
            notice.id == id ? { ...notice, isDelete: true } : notice,
          ),
        }
      })
    },

    closeAll: ({ placement } = {}) => {
      setState((prev) => {
        let placements: NoticePlacement[] = [
          "end",
          "end-center",
          "end-end",
          "end-start",
          "start",
          "start-center",
          "start-end",
          "start-start",
        ]

        if (placement) placements = placement

        return placements.reduce(
          (acc, placement) => {
            acc[placement] = prev[placement].map((notice) => ({
              ...notice,
              isDelete: true,
            }))

            return acc
          },
          { ...prev },
        )
      })
    },

    create: (message, options) => {
      const limit = options.limit

      const notice = createNotice(message, options)
      const { id, placement } = notice

      setState((prev) => {
        let prevNotices = prev[placement]

        if (
          limit !== undefined &&
          limit > 0 &&
          prevNotices.length > limit - 1
        ) {
          const n = prevNotices.length - (limit - 1)
          const notices = placement.includes("top")
            ? prevNotices.slice(n * -1)
            : prevNotices.slice(0, n)

          const ids = notices.map(({ id }) => id)

          prevNotices = prevNotices.map((notice) =>
            ids.includes(notice.id) ? { ...notice, isDelete: true } : notice,
          )
        }

        const notices = placement.includes("top")
          ? [notice, ...prevNotices]
          : [...prevNotices, notice]

        return { ...prev, [placement]: notices }
      })

      return id
    },

    getSnapshot: () => state,

    isActive: (id) =>
      Boolean(findNotice(noticeStore.getSnapshot(), id).placement),

    remove: (id, placement) => {
      setState((prevState) => ({
        ...prevState,
        [placement]: prevState[placement].filter((notice) => notice.id != id),
      }))
    },

    subscribe: (onStoreChange) => {
      storeChangeCache.add(onStoreChange)

      return () => {
        setState(() => initialState)
        storeChangeCache.delete(onStoreChange)
      }
    },

    update: (id, options) => {
      setState((prev) => {
        const next = { ...prev }
        const { index, placement } = findNotice(next, id)

        if (placement && index !== -1 && next[placement][index]) {
          next[placement][index] = {
            ...next[placement][index],
            ...options,
            message: createRender(options),
          }
        }

        return next
      })
    },
  }
}

export const noticeStore = createNoticeStore(initialState)

export interface NoticeProps
  extends Omit<AlertRootProps, keyof UseNoticeOptions>,
    UseNoticeOptions {
  onClose?: () => void
}

const Notice: FC<NoticeProps> = ({
  className,
  colorScheme,
  variant = "basic",
  closeStrategy = "button",
  description,
  icon,
  isClosable,
  status,
  title,
  onClose,
}) => {
  const isButtonClosable =
    isClosable && (closeStrategy === "button" || closeStrategy === "both")
  const isElementClosable =
    isClosable && (closeStrategy === "element" || closeStrategy === "both")

  return (
    <Alert.Root
      className={cx("ui-notice", className)}
      colorScheme={colorScheme}
      variant={variant}
      alignItems="start"
      boxShadow="fallback(lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05))"
      pe={isButtonClosable ? 8 : undefined}
      status={status === "loading" ? undefined : status}
      onClick={isElementClosable ? onClose : undefined}
    >
      {status === "loading" ? (
        <Alert.Loading className="ui-notice__loading" loadingScheme="puff" />
      ) : (
        <Alert.Icon
          className="ui-notice__icon"
          variant={icon?.variant}
          {...(icon?.color ? { color: icon.color } : {})}
        >
          {icon?.children}
        </Alert.Icon>
      )}

      <ui.div flex="1">
        {title ? (
          <Alert.Title className="ui-notice__title" lineClamp={1}>
            {title}
          </Alert.Title>
        ) : null}
        {description ? (
          <Alert.Description className="ui-notice__desc" lineClamp={3}>
            {description}
          </Alert.Description>
        ) : null}
      </ui.div>

      {isButtonClosable ? (
        <CloseButton
          className="ui-notice__close-button"
          position="absolute"
          size="sm"
          right={2}
          top={2}
          boxSize={6}
          minW="unset"
          onClick={(ev) => {
            ev.stopPropagation()

            onClose?.()
          }}
        />
      ) : null}
    </Alert.Root>
  )
}

Notice.displayName = "Notice"
Notice.__ui__ = "Notice"
