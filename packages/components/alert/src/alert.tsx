import {
  ui,
  forwardRef,
  HTMLUIProps,
  ThemeProps,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  useTheme,
  AlertStatuses,
} from '@yamada-ui/core'
import { InfoIcon, WarningIcon, CheckIcon } from '@yamada-ui/icon'
import { Loading, LoadingProps } from '@yamada-ui/loading'
import { createContext, cx } from '@yamada-ui/utils'
import { FC } from 'react'

const defaultStatuses = {
  info: { icon: InfoIcon, colorScheme: 'info' },
  success: { icon: CheckIcon, colorScheme: 'success' },
  warning: { icon: WarningIcon, colorScheme: 'warning' },
  error: { icon: WarningIcon, colorScheme: 'danger' },
  loading: { icon: Loading, colorScheme: 'primary' },
} as const

type Status = keyof typeof defaultStatuses

type AlertContext = {
  status: Status
  styles: Record<string, CSSUIObject>
}

const [AlertProvider, useAlert] = createContext<AlertContext>({
  name: `AlertStylesContext`,
  errorMessage: `useAlert returned is 'undefined'. Seems you forgot to wrap the components in "<Alert />" `,
})

export const getStatusColorScheme = (
  status: Status,
  statuses?: AlertStatuses,
) => statuses?.[status]?.colorScheme ?? defaultStatuses[status].colorScheme

export const getStatusIcon = (status: Status, statuses?: AlertStatuses) =>
  statuses?.[status]?.icon ?? defaultStatuses[status].icon

type AlertOptions = {
  /**
   * The status of the alert.
   *
   * @default 'info'
   */
  status?: Status
}

export type AlertProps = HTMLUIProps<'div'> & ThemeProps<'Alert'> & AlertOptions

export const Alert = forwardRef<AlertProps, 'div'>(
  ({ status = 'info', colorScheme, ...props }, ref) => {
    const { theme } = useTheme()
    const statuses = theme.__config?.alert?.statuses ?? {}

    colorScheme = colorScheme ?? getStatusColorScheme(status, statuses)

    const [styles, mergedProps] = useMultiComponentStyle('Alert', {
      ...props,
      colorScheme,
    })
    const { className, children, ...rest } = omitThemeProps(mergedProps)

    const css: CSSUIObject = {
      w: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      ...styles.container,
    }

    return (
      <AlertProvider value={{ status, styles }}>
        <ui.div
          ref={ref}
          className={cx('ui-alert', className)}
          role='alert'
          __css={css}
          {...rest}
        >
          {children}
        </ui.div>
      </AlertProvider>
    )
  },
)

export type AlertIconProps = HTMLUIProps<'span'> & {
  variant?: LoadingProps['variant']
}

export const AlertIcon: FC<AlertIconProps> = ({
  className,
  children,
  variant = 'oval',
  ...rest
}) => {
  const { status, styles } = useAlert()
  const { theme } = useTheme()
  const statuses = theme.__config?.alert?.statuses ?? {}

  const Icon = getStatusIcon(status, statuses)
  const css: CSSUIObject = {
    ...(status === 'loading' ? styles.loading : styles.icon),
  }

  return (
    <ui.span
      display='inherit'
      className={cx('ui-alert-icon', className)}
      __css={css}
      {...rest}
    >
      {children || (
        <Icon
          {...(status === 'loading'
            ? { variant, color: 'currentcolor' }
            : { boxSize: '100%' })}
        />
      )}
    </ui.span>
  )
}

export type AlertTitleProps = HTMLUIProps<'p'>

export const AlertTitle = forwardRef<AlertTitleProps, 'p'>(
  ({ className, ...rest }, ref) => {
    const { styles } = useAlert()

    const css: CSSUIObject = {
      display: 'block',
      ...styles.title,
    }

    return (
      <ui.p
        ref={ref}
        className={cx('ui-alert-title', className)}
        __css={css}
        {...rest}
      />
    )
  },
)

export type AlertDescriptionProps = HTMLUIProps<'span'>

export const AlertDescription = forwardRef<AlertDescriptionProps, 'span'>(
  ({ className, ...rest }, ref) => {
    const { styles } = useAlert()

    const css: CSSUIObject = {
      ...styles.description,
    }

    return (
      <ui.span
        ref={ref}
        className={cx('ui-alert-desc', className)}
        __css={css}
        {...rest}
      />
    )
  },
)
