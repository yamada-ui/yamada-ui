import { CloseIcon } from '@yamada-ui/media-and-icons'
import {
  ui,
  forwardRef,
  HTMLUIProps,
  ThemeProps,
  CSSUIObject,
  useComponentStyle,
  omitThemeProps,
} from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'

type CloseButtonOptions = {
  isDisabled?: boolean
}

export type CloseButtonProps = HTMLUIProps<'button'> &
  ThemeProps<'CloseButton'> &
  CloseButtonOptions

export const CloseButton = forwardRef<CloseButtonProps, 'button'>((props, ref) => {
  const styles = useComponentStyle('CloseButton', props)
  const { className, children, isDisabled, ...rest } = omitThemeProps(props)

  const css: CSSUIObject = {
    outline: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    ...styles,
  }

  return (
    <ui.button
      ref={ref}
      type='button'
      className={cx('ui-close-button', className)}
      disabled={isDisabled}
      __css={css}
      {...rest}
    >
      {children || <CloseIcon width='1em' height='1em' />}
    </ui.button>
  )
})
