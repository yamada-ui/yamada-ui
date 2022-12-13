import {
  ui,
  forwardRef,
  HTMLUIProps,
  ThemeProps,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
} from '@yamada-ui/core'
import { InfoIcon, WarningIcon, CheckIcon } from '@yamada-ui/media-and-icons'
import { createContext, cx } from '@yamada-ui/utils'
import { Loading, LoadingProps } from './'

const statuses = {
  info: { icon: InfoIcon, colorStyle: 'blue' },
  success: { icon: CheckIcon, colorStyle: 'green' },
  warning: { icon: WarningIcon, colorStyle: 'orange' },
  error: { icon: WarningIcon, colorStyle: 'red' },
  loading: { icon: Loading, colorStyle: 'blue' },
} as const

type Status = keyof typeof statuses

type AlertContext = {
  status: Status
  styles: Record<string, CSSUIObject>
}

const [AlertProvider, useAlert] = createContext<AlertContext>({
  name: `AlertStylesContext`,
  errorMessage: `useAlert returned is 'undefined'. Seems you forgot to wrap the components in "<Alert />" `,
})

export const getStatusColorStyle = (status: Status) => statuses[status].colorStyle

export const getStatusIcon = (status: Status) => statuses[status].icon

type AlertOptions = {
  status?: Status
}

export type AlertProps = HTMLUIProps<'div'> & ThemeProps<'Alert'> & AlertOptions

export const Alert = forwardRef<AlertProps, 'div'>(
  ({ status = 'info', colorStyle, ...props }, ref) => {
    colorStyle = colorStyle ?? getStatusColorStyle(status)

    const styles = useMultiComponentStyle('Alert', { ...props, colorStyle })
    const { className, children, ...rest } = omitThemeProps({ ...props, colorStyle })

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
        <ui.div ref={ref} className={cx('ui-alert', className)} __css={css} {...rest}>
          {children}
        </ui.div>
      </AlertProvider>
    )
  },
)

export type AlertIconProps = HTMLUIProps<'span'> & { variant?: LoadingProps['variant'] }

export const AlertIcon = ({ className, children, variant = 'oval', ...rest }: AlertIconProps) => {
  const { status, styles } = useAlert()

  const Icon = getStatusIcon(status)
  const css: CSSUIObject = {
    ...(status === 'loading' ? styles.loading : styles.icon),
  }

  return (
    <ui.span display='inherit' className={cx('ui-alert-icon', className)} __css={css} {...rest}>
      {children || (
        <Icon
          boxSize='100%'
          {...(status === 'loading' ? { variant, color: 'currentcolor' } : {})}
        />
      )}
    </ui.span>
  )
}

export type AlertTitleProps = HTMLUIProps<'p'>

export const AlertTitle = forwardRef<AlertTitleProps, 'p'>(({ className, ...rest }, ref) => {
  const { styles } = useAlert()

  const css: CSSUIObject = {
    display: 'block',
    ...styles.title,
  }

  return <ui.p ref={ref} className={cx('ui-alert-title', className)} __css={css} {...rest} />
})

export type AlertDescriptionProps = HTMLUIProps<'span'>

export const AlertDescription = forwardRef<AlertDescriptionProps, 'span'>(
  ({ className, ...rest }, ref) => {
    const { styles } = useAlert()

    const css: CSSUIObject = {
      ...styles.description,
    }

    return <ui.span ref={ref} className={cx('ui-alert-desc', className)} __css={css} {...rest} />
  },
)
