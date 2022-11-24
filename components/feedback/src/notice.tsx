import { CloseButton } from '@yamada-ui/forms'
import {
  ui,
  useTheme,
  CSSUIObject,
  NoticePlacement,
  NoticeComponentProps,
  NoticeConfigOptions,
} from '@yamada-ui/system'
import { merge } from '@yamada-ui/utils'
import { FC, ReactNode, useMemo } from 'react'
import { AlertProps, Alert, AlertDescription, AlertIcon, AlertTitle } from '.'

export type UseNoticeOptions = NoticeConfigOptions

export type NoticeOptions = {
  id: string | number
  placement: NoticePlacement
  duration: UseNoticeOptions['duration']
  status: UseNoticeOptions['status']
  message: (props: NoticeComponentProps) => ReactNode
  isDelete?: boolean
  onDelete: () => void
  onCloseComplete?: () => void
  style?: CSSUIObject
}

const findId = (options: NoticeOptions[], id: string | number): NoticeOptions | undefined =>
  options.find((notice) => notice.id === id)

const findNotice = (
  state: State,
  id: string | number,
): {
  placement: NoticePlacement | undefined
  index: number
} => {
  const placement = getNoticePlacement(state, id)

  const index = placement ? state[placement].findIndex((notice) => notice.id === id) : -1

  return { placement, index }
}

const getNoticePlacement = (state: State, id: string | number): NoticePlacement | undefined => {
  for (const [placement, values] of Object.entries(state)) {
    if (findId(values, id)) return placement as NoticePlacement
  }
}

type CreateNoticeOptions = Partial<
  Pick<NoticeOptions, 'id' | 'placement' | 'status' | 'duration' | 'onCloseComplete' | 'style'>
>

let counter = 0

const createNotice = (
  message: (props: NoticeComponentProps) => ReactNode,
  { id, placement = 'top', duration, onCloseComplete, status, style }: CreateNoticeOptions,
) => {
  counter += 1

  id = id ?? counter

  return {
    id,
    placement,
    status,
    duration,
    message,
    onDelete: () => noticeStore.remove(String(id), placement),
    isDelete: false,
    onCloseComplete,
    style,
  }
}

const createRender = (options: UseNoticeOptions): FC<NoticeComponentProps> => {
  const { component } = options

  const Render: FC<NoticeComponentProps> = (props) => {
    if (typeof component === 'function') {
      return component({ ...props, ...options }) as JSX.Element
    } else {
      return <Notice {...props} {...options} />
    }
  }

  return Render
}

const createNoticeFunc = (defaultOptions: UseNoticeOptions) => {
  const { theme } = useTheme()

  const themeOptions = theme.__config.notice?.options ?? {}

  const computedOptions = (options: UseNoticeOptions) =>
    merge(themeOptions, merge(defaultOptions, options))

  const notice = (options: UseNoticeOptions = {}) => {
    options = computedOptions(options)

    const message = createRender(options)

    return noticeStore.create(message, options)
  }

  notice.update = (id: string | number, options: Omit<UseNoticeOptions, 'id'>) => {
    options = computedOptions(options)

    noticeStore.update(id, options)
  }

  notice.closeAll = noticeStore.closeAll
  notice.close = noticeStore.close
  notice.isActive = noticeStore.isActive

  return notice
}

type CreateNoticeReturn = ReturnType<typeof createNoticeFunc>

export const useNotice = (defaultOptions?: UseNoticeOptions): CreateNoticeReturn => {
  return useMemo(() => createNoticeFunc(defaultOptions ?? {}), [defaultOptions])
}

type State = {
  [K in NoticePlacement]: NoticeOptions[]
}

type Store = {
  subscribe: (onStoreChange: () => void) => () => void
  getSnapshot: () => State
  create: (
    message: (props: NoticeComponentProps) => ReactNode,
    options: UseNoticeOptions,
  ) => string | number
  close: (id: string | number) => void
  closeAll: (options?: { placement?: NoticePlacement[] }) => void
  update: (id: string | number, options: Omit<UseNoticeOptions, 'id'>) => void
  remove: (id: string | number, placement: NoticePlacement) => void
  isActive: (id: string | number) => boolean
}

const initialState = {
  top: [],
  'top-left': [],
  'top-right': [],
  bottom: [],
  'bottom-left': [],
  'bottom-right': [],
}

const createNoticeStore = (initialState: State): Store => {
  let state = initialState
  const listeners = new Set<() => void>()

  const setState = (setStateFn: (values: State) => State) => {
    state = setStateFn(state)
    listeners.forEach((l) => l())
  }

  return {
    getSnapshot: () => state,

    subscribe: (listener) => {
      listeners.add(listener)

      return () => {
        setState(() => initialState)
        listeners.delete(listener)
      }
    },

    remove: (id, placement) => {
      setState((prevState) => ({
        ...prevState,
        [placement]: prevState[placement].filter((notice) => notice.id != id),
      }))
    },

    create: (message, options) => {
      const limit = (options.limit ?? 0) - 1

      const notice = createNotice(message, options)
      const { placement, id } = notice

      setState((prev) => {
        let prevNotices = prev[placement] ?? []

        if (limit > 0 && prevNotices.length > limit) {
          const n = prevNotices.length - limit
          const notices = placement.includes('top')
            ? prevNotices.slice(n * -1)
            : prevNotices.slice(0, n)

          const ids = notices.map(({ id }) => id)

          prevNotices = prevNotices.map((notice) =>
            ids.includes(notice.id) ? { ...notice, isDelete: true } : notice,
          )
        }

        const notices = placement.includes('top')
          ? [notice, ...prevNotices]
          : [...prevNotices, notice]

        return { ...prev, [placement]: notices }
      })

      return id
    },

    update: (id, options) => {
      setState((prev) => {
        const next = { ...prev }
        const { placement, index } = findNotice(next, id)

        if (placement && index !== -1) {
          next[placement][index] = {
            ...next[placement][index],
            ...options,
            message: createRender(options),
          }
        }

        return next
      })
    },

    closeAll: ({ placement } = {}) => {
      setState((prev) => {
        let placements: NoticePlacement[] = [
          'bottom',
          'bottom-right',
          'bottom-left',
          'top',
          'top-left',
          'top-right',
        ]

        if (placement) placements = placement

        return placements.reduce(
          (acc, placement) => {
            acc[placement] = prev[placement].map((notice) => ({ ...notice, isDelete: true }))

            return acc
          },
          { ...prev },
        )
      })
    },

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

    isActive: (id) => Boolean(findNotice(noticeStore.getSnapshot(), id).placement),
  }
}

export const noticeStore = createNoticeStore(initialState)

export type NoticeProps = Omit<AlertProps, keyof UseNoticeOptions> &
  UseNoticeOptions & {
    onClose?: () => void
  }

const Notice: FC<NoticeProps> = ({
  variant = 'subtle',
  colorStyle,
  status,
  icon,
  title,
  description,
  isClosable,
  onClose,
}) => {
  return (
    <Alert
      status={status}
      variant={variant}
      colorStyle={colorStyle}
      alignItems='start'
      boxShadow='lg'
      pe={isClosable ? 8 : undefined}
    >
      <AlertIcon variant={icon?.variant} {...(icon?.color ? { color: icon.color } : {})}>
        {icon?.children}
      </AlertIcon>

      <ui.div flex='1'>
        {title ? <AlertTitle noOfLines={1}>{title}</AlertTitle> : null}
        {description ? <AlertDescription noOfLines={3}>{description}</AlertDescription> : null}
      </ui.div>

      {isClosable ? (
        <CloseButton size='sm' onClick={onClose} position='absolute' top={2} right={2} />
      ) : null}
    </Alert>
  )
}
