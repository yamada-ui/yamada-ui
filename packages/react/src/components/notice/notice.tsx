import type { ReactNode } from "react"
import type { FC, HTMLStyledProps, StyledTheme } from "../../core"
import type {
  AlertDescriptionProps,
  AlertIconProps,
  AlertLoadingProps,
  AlertRootProps,
  AlertTitleProps,
} from "../alert"
import type { CloseButtonProps } from "../close-button"
import type {
  NoticeComponentProps,
  NoticeConfig,
  NoticePlacement,
} from "./types"
import { useMemo } from "react"
import { styled } from "../../core"
import { useTheme } from "../../providers/theme-provider"
import { handlerAll, isFunction, merge } from "../../utils"
import { Alert } from "../alert"
import { CloseButton } from "../close-button"
import { withContext } from "./notice-provider"

export interface UseNoticeOptions extends Omit<NoticeConfig, "onDragEnd"> {}

export interface NoticeOptions extends UseNoticeOptions {
  id: number | string
  message: (props: NoticeComponentProps) => ReactNode
  placement: NoticePlacement
  onClose: () => void
  onDelete: () => void
  isDelete?: boolean
  onCloseComplete?: () => void
}

const findId = (
  options: NoticeOptions[],
  id: number | string,
): NoticeOptions | undefined => {
  return options.find((notice) => notice.id === id)
}

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
    if (findId(values, id)) {
      return placement as NoticePlacement
    }
  }
}

interface CreateNoticeOptions
  extends Partial<
    Pick<
      NoticeOptions,
      "duration" | "id" | "onCloseComplete" | "placement" | "status"
    >
  > {}

let counter = 0

const createNotice = (
  message: (props: NoticeComponentProps) => ReactNode,
  {
    id,
    duration,
    placement = "start-center",
    status,
    onCloseComplete,
    ...props
  }: CreateNoticeOptions,
) => {
  counter += 1

  id ??= counter

  return {
    id,
    duration,
    isDelete: false,
    message,
    placement,
    status,
    onCloseComplete,
    onDelete: () => noticeStore.remove(String(id), placement),
    ...props,
  }
}

interface createRenderOptions extends Omit<NoticeConfig, "itemProps"> {}

const createRender = (
  options: createRenderOptions,
): FC<NoticeComponentProps> => {
  const { component, ...rest } = options

  const Render: FC<NoticeComponentProps> = (props) => {
    if (isFunction(component)) {
      return component({ ...props, ...rest })
    } else {
      return <Notice {...props} {...rest} />
    }
  }

  return Render
}

const createNoticeFunc = (
  defaultOptions: UseNoticeOptions,
  theme: StyledTheme,
) => {
  const themeOptions = theme.__config?.notice ?? {}

  const computedOptions = (options: UseNoticeOptions) => {
    return merge(themeOptions, merge(defaultOptions, options))
  }

  const notice = (options: UseNoticeOptions = {}) => {
    const mergedOptions = computedOptions(options)
    const message = createRender(mergedOptions)

    return noticeStore.create(message, mergedOptions)
  }

  notice.update = (
    id: number | string,
    options: Omit<UseNoticeOptions, "id">,
  ) => {
    const mergedOptions = computedOptions(options)
    noticeStore.update(id, mergedOptions)
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
}

const createNoticeStore = (initialState: State): Store => {
  let state = initialState
  const storeChangeCache = new Set<() => void>()

  const setState = (setStateFunc: (values: State) => State) => {
    state = setStateFunc(state)
    for (const onStoreChange of storeChangeCache) {
      onStoreChange()
    }
  }

  return {
    close: (id) => {
      setState((prev) => {
        const placement = getNoticePlacement(prev, id)

        if (!placement) return prev

        return {
          ...prev,
          [placement]: prev[placement].map((notice) =>
            notice.id.toString() === id.toString()
              ? { ...notice, isDelete: true }
              : notice,
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
        [placement]: prevState[placement].filter(
          (notice) => notice.id.toString() !== id.toString(),
        ),
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
  extends Omit<HTMLStyledProps, keyof UseNoticeOptions>,
    Omit<UseNoticeOptions, "itemProps"> {
  onClose?: () => void
}

const Notice = withContext<"div", NoticeProps>(
  ({
    id,
    colorScheme,
    variant = "plain",
    closable,
    closeOnDrag,
    closeStrategy = "button",
    description,
    icon,
    status,
    title,
    onClose,
    ...props
  }) => {
    const isButtonClosable =
      closable &&
      (closeStrategy === "button" || closeStrategy === "both") &&
      !closeOnDrag
    const isElementClosable =
      closable &&
      (closeStrategy === "element" || closeStrategy === "both") &&
      !closeOnDrag
    const dragClosable = closeOnDrag && closable

    return (
      <NoticeRoot
        id={id}
        colorScheme={colorScheme}
        variant={variant}
        status={status}
        onClick={
          isElementClosable && !dragClosable
            ? () => {
                onClose?.()
              }
            : undefined
        }
        {...props}
      >
        {status === "loading" ? (
          <NoticeLoading loadingScheme={icon?.loadingScheme} />
        ) : (
          <NoticeIcon {...(icon?.color ? { color: icon.color } : {})} />
        )}
        {title || description ? (
          <NoticeContent>
            {title ? <NoticeTitle>{title}</NoticeTitle> : null}
            {description ? (
              <NoticeDescription>{description}</NoticeDescription>
            ) : null}
          </NoticeContent>
        ) : null}

        {closable && isButtonClosable ? (
          <NoticeCloseButton
            id={id}
            onClose={() => {
              onClose?.()
            }}
          />
        ) : null}
      </NoticeRoot>
    )
  },
  "root",
)()

interface NoticeRootOptions
  extends Omit<AlertRootProps, "status">,
    Pick<NoticeOptions, "description" | "icon" | "status"> {}

export interface NoticeRootProps extends NoticeRootOptions {}

export const NoticeRoot = withContext<"div", NoticeRootProps>(
  ({ status, ...props }) => {
    return (
      <Alert.Root
        status={status === "loading" ? undefined : status}
        {...props}
      />
    )
  },
  "root",
)()

interface NoticeContentProps extends HTMLStyledProps {}

export const NoticeContent = withContext<"div", NoticeContentProps>(
  ({ ...props }) => {
    return <styled.div {...props} />
  },
  "content",
)()

export interface NoticeIconProps extends AlertIconProps {}

export const NoticeIcon = withContext<"div", NoticeIconProps>(
  ({ ...props }) => {
    return <Alert.Icon {...props} />
  },
  "icon",
)()

export interface NoticeLoadingProps extends AlertLoadingProps {}

export const NoticeLoading = withContext<"svg", NoticeLoadingProps>(
  ({ ...props }) => {
    return <Alert.Loading {...props} />
  },
  ["icon", "loading"],
)()

export interface NoticeTitleProps extends AlertTitleProps {}

export const NoticeTitle = withContext<"div", NoticeTitleProps>(
  ({ ...props }) => {
    return <Alert.Title {...props} />
  },
  "title",
)()

export interface NoticeDescriptionProps extends AlertDescriptionProps {}

export const NoticeDescription = withContext<"div", NoticeDescriptionProps>(
  ({ ...props }) => {
    return <Alert.Description {...props} />
  },
  "description",
)()

export interface NoticeCloseButtonProps
  extends Pick<NoticeOptions, "description">,
    CloseButtonProps {
  onClose: () => void
}

export const NoticeCloseButton = withContext<"button", NoticeCloseButtonProps>(
  ({ onClick, onClose, ...props }) => {
    return (
      <CloseButton
        colorScheme="gray"
        onClick={(e) => {
          handlerAll(onClick, () => {
            e.stopPropagation()
            onClose()
          })(e)
        }}
        {...props}
      />
    )
  },
  "closeButton",
)()
