import {
  ui,
  forwardRef,
  HTMLUIProps,
  ThemeProps,
  CSSUIObject,
  useComponentStyle,
  omitThemeProps,
} from '@yamada-ui/core'
import { Loading as LoadingIcon, LoadingProps } from '@yamada-ui/loading'
import { cx, useMergeRefs, merge, dataAttr } from '@yamada-ui/utils'
import {
  ElementType,
  FC,
  ReactElement,
  useCallback,
  useMemo,
  useState,
} from 'react'
import { useButtonGroup } from './button-group'

type ButtonOptions = {
  /**
   * The type of button. Accepts `button`, `reset`, or `submit`.
   *
   * @default 'button'
   */
  type?: 'button' | 'reset' | 'submit'
  /**
   * If `true`, the loading state of the button is represented.
   *
   * @default false
   */
  isLoading?: boolean
  /**
   * If `true`, the button is represented as active.
   *
   * @default false
   */
  isActive?: boolean
  /**
   * If `true`, the button is disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * The icon to display at the left side of the button.
   */
  leftIcon?: ReactElement
  /**
   * The icon to display at the right side of the button.
   */
  rightIcon?: ReactElement
  /**
   * The icon to display when the button is loading.
   */
  loadingIcon?: ReactElement | LoadingProps['variant']
  /**
   * The text to display when the button is loading.
   */
  loadingText?: string
  /**
   * The placement of the loading indicator. Accepts `start` or `end`.
   *
   * @default 'start'
   */
  loadingPlacement?: 'start' | 'end'
}

export type ButtonProps = HTMLUIProps<'button'> &
  ThemeProps<'Button'> &
  ButtonOptions

export const Button = forwardRef<ButtonProps, 'button'>(
  ({ children, ...props }, customRef) => {
    const group = useButtonGroup()
    const [styles, mergedProps] = useComponentStyle('Button', {
      ...group,
      ...props,
    })
    const {
      className,
      as,
      type,
      isLoading,
      isActive,
      isDisabled = group?.isDisabled,
      leftIcon,
      rightIcon,
      loadingIcon,
      loadingText,
      loadingPlacement = 'start',
      __css,
      ...rest
    } = omitThemeProps(mergedProps)

    const { ref: buttonRef, type: defaultType } = useButtonType(as)
    const ref = useMergeRefs(customRef, buttonRef)

    const css: CSSUIObject = useMemo(() => {
      const _focus =
        '_focus' in styles
          ? merge(styles._focus ?? {}, { zIndex: 'yamcha' })
          : {}

      return {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2',
        appearance: 'none',
        userSelect: 'none',
        position: 'relative',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        outline: 'none',
        ...styles,
        ...__css,
        ...(!!group ? { _focus } : {}),
      }
    }, [styles, __css, group])

    const contentProps = {
      leftIcon,
      rightIcon,
      children,
    }

    const loadingProps = {
      loadingIcon,
      loadingText,
    }

    return (
      <ui.button
        ref={ref}
        as={as}
        className={cx('ui-button', className)}
        type={type ?? defaultType}
        disabled={isDisabled || isLoading}
        data-active={dataAttr(isActive)}
        data__loading={dataAttr(isLoading)}
        __css={css}
        {...rest}
      >
        {isLoading && loadingPlacement === 'start' ? (
          <Loading className='ui-button__loading--start' {...loadingProps} />
        ) : null}

        {isLoading ? (
          loadingText || (
            <ui.span opacity={0}>
              <Content {...contentProps} />
            </ui.span>
          )
        ) : (
          <Content {...contentProps} />
        )}

        {isLoading && loadingPlacement === 'end' ? (
          <Loading className='ui-button__loading--end' {...loadingProps} />
        ) : null}
      </ui.button>
    )
  },
)

const Loading: FC<
  Pick<ButtonProps, 'className' | 'loadingIcon' | 'loadingText'>
> = ({ className, loadingIcon, loadingText }) => {
  const css = useMemo(
    (): CSSUIObject => ({
      display: 'flex',
      alignItems: 'center',
      position: loadingText ? 'relative' : 'absolute',
      fontSize: '1em',
      lineHeight: 'normal',
    }),
    [loadingText],
  )

  const element = useMemo(() => {
    if (typeof loadingIcon === 'string') {
      return <LoadingIcon color='current' variant={loadingIcon} />
    } else {
      return loadingIcon || <LoadingIcon color='current' />
    }
  }, [loadingIcon])

  return (
    <ui.div className={cx('ui-button__loading', className)} __css={css}>
      {element}
    </ui.div>
  )
}

const Content: FC<Pick<ButtonProps, 'leftIcon' | 'rightIcon' | 'children'>> = ({
  leftIcon,
  rightIcon,
  children,
}) => {
  return (
    <>
      {leftIcon ? <Icon>{leftIcon}</Icon> : null}
      {children}
      {rightIcon ? <Icon>{rightIcon}</Icon> : null}
    </>
  )
}

const Icon: FC<HTMLUIProps<'span'>> = ({ children, className, ...rest }) => {
  return (
    <ui.span
      className={cx('ui-button__icon', className)}
      display='inline-flex'
      alignSelf='center'
      flexShrink={0}
      aria-hidden={true}
      {...rest}
    >
      {children}
    </ui.span>
  )
}

export const useButtonType = (value?: ElementType) => {
  const [isButton, setIsButton] = useState(!value)

  const ref = useCallback((node: HTMLElement | null) => {
    if (node) setIsButton(node.tagName === 'BUTTON')
  }, [])

  const type = isButton ? 'button' : undefined

  return { ref, type } as const
}
