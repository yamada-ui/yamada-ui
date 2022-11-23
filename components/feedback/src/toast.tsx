import { CloseButton } from '@yamada-ui/forms'
import { ui, useTheme, CSSUIObject, ThemeProps } from '@yamada-ui/system'
import { merge } from '@yamada-ui/utils'
import { FC, useMemo } from 'react'
import { AlertProps, AlertIconProps, Alert, AlertDescription, AlertIcon, AlertTitle } from './'

type Placement = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right'

export type ToastComponentProps = UseToastOptions & { onClose: () => void }

export type UseToastOptions = ThemeProps<'Alert'> & {
  placement?: Placement
  duration?: number | null
  status?: AlertProps['status']
  icon?: {
    variant?: AlertIconProps['variant']
    color?: AlertIconProps['color']
    children?: React.ReactNode
  }
  title?: React.ReactNode
  description?: React.ReactNode
  isClosable?: boolean
  component?: (props: ToastComponentProps) => React.ReactNode
  onCloseComplete?: () => void
  style?: CSSUIObject
}

export type ToastOptions = {
  id: string | number
  placement: Placement
  duration: UseToastOptions['duration']
  status: AlertProps['status']
  message: (props: ToastComponentProps) => React.ReactNode
  isDelete?: boolean
  onDelete: () => void
  onCloseComplete?: () => void
  style?: CSSUIObject
}

const findId = (options: ToastOptions[], id: string | number): ToastOptions | undefined =>
  options.find((toast) => toast.id === id)

const findToast = (
  state: State,
  id: string | number,
): {
  placement: Placement | undefined
  index: number
} => {
  const placement = getToastPlacement(state, id)

  const index = placement ? state[placement].findIndex((toast) => toast.id === id) : -1

  return { placement, index }
}

const getToastPlacement = (state: State, id: string | number): Placement | undefined => {
  for (const [placement, values] of Object.entries(state)) {
    if (findId(values, id)) return placement as Placement
  }
}

type CreateToastOptions = Partial<
  Pick<ToastOptions, 'id' | 'placement' | 'status' | 'duration' | 'onCloseComplete' | 'style'>
>

let counter = 0

const createToast = (
  message: (props: ToastComponentProps) => React.ReactNode,
  { id, placement = 'top', duration, onCloseComplete, status, style }: CreateToastOptions = {},
) => {
  counter += 1

  id = id ?? counter

  return {
    id,
    placement,
    status,
    duration,
    message,
    onDelete: () => toastStore.remove(String(id), placement),
    isDelete: false,
    onCloseComplete,
    style,
  }
}

const createRender = (options: UseToastOptions): FC<ToastComponentProps> => {
  const { component } = options

  const Render: FC<ToastComponentProps> = (props) => {
    if (typeof component === 'function') {
      return component({ ...props, ...options }) as JSX.Element
    } else {
      return <Toast {...props} {...options} />
    }
  }

  return Render
}

const createToastFunc = (defaultOptions: UseToastOptions) => {
  const { theme } = useTheme()

  const themeOptions = theme.__config.toast?.options ?? {}

  const computedOptions = (options: UseToastOptions) =>
    merge(themeOptions, merge(defaultOptions, options))

  const toast = (options: UseToastOptions = {}) => {
    options = computedOptions(options)

    const message = createRender(options)

    return toastStore.create(message, options)
  }

  toast.update = (id: string | number, options: Omit<UseToastOptions, 'id'>) => {
    options = computedOptions(options)

    toastStore.update(id, options)
  }

  toast.closeAll = toastStore.closeAll
  toast.close = toastStore.close
  toast.isActive = toastStore.isActive

  return toast
}

type CreateToastReturn = ReturnType<typeof createToastFunc>

export const useToast = (defaultOptions?: UseToastOptions): CreateToastReturn => {
  return useMemo(() => createToastFunc(defaultOptions ?? {}), [defaultOptions])
}

type State = {
  [K in Placement]: ToastOptions[]
}

type Store = {
  subscribe: (onStoreChange: () => void) => () => void
  getSnapshot: () => State
  create: (
    message: (props: ToastComponentProps) => React.ReactNode,
    options?: CreateToastOptions,
  ) => string | number
  close: (id: string | number) => void
  closeAll: (options?: { placement?: Placement[] }) => void
  update: (id: string | number, options: Omit<UseToastOptions, 'id'>) => void
  remove: (id: string | number, placement: Placement) => void
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

const createToastStore = (initialState: State): Store => {
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
        [placement]: prevState[placement].filter((toast) => toast.id != id),
      }))
    },

    create: (message, options) => {
      const toast = createToast(message, options)
      const { placement, id } = toast

      setState((prev) => {
        const toasts = placement.includes('top')
          ? [toast, ...(prev[placement] ?? [])]
          : [...(prev[placement] ?? []), toast]

        return { ...prev, [placement]: toasts }
      })

      return id
    },

    update: (id, options) => {
      setState((prev) => {
        const next = { ...prev }
        const { placement, index } = findToast(next, id)

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
        let placements: Placement[] = [
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
            acc[placement] = prev[placement].map((toast) => ({ ...toast, isDelete: true }))

            return acc
          },
          { ...prev },
        )
      })
    },

    close: (id) => {
      setState((prev) => {
        const placement = getToastPlacement(prev, id)

        if (!placement) return prev

        return {
          ...prev,
          [placement]: prev[placement].map((toast) => {
            if (toast.id == id) return { ...toast, isDelete: true }

            return toast
          }),
        }
      })
    },

    isActive: (id) => Boolean(findToast(toastStore.getSnapshot(), id).placement),
  }
}

export const toastStore = createToastStore(initialState)

export type ToastProps = Omit<AlertProps, keyof UseToastOptions> &
  UseToastOptions & {
    onClose?: () => void
  }

const Toast: FC<ToastProps> = ({
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
      <AlertIcon variant={icon?.variant} color={icon?.color}>
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
