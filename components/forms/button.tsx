import { FC, useMemo } from 'react'
import { useComponentStyle, omitThemeProps } from '../../functions'
import { useButtonType } from '../../hooks'
import { ui, forwardRef } from '../../system'
import { HTMLUIProps, ThemeProps, CSSUIObject } from '../../types'
import { cx, useMergeRefs, merge } from '../../utils'
import { Loading as LoadingIcon, LoadingProps } from '../feedback'
import { useButtonGroup } from './'

type ButtonOptions = {
  type?: 'button' | 'reset' | 'submit'
  isLoading?: boolean
  isActive?: boolean
  isDisabled?: boolean
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  loadingIcon?: React.ReactElement | LoadingProps['variant']
  loadingText?: string
  loadingPlacement?: 'start' | 'end'
}

export type ButtonProps = HTMLUIProps<'button'> & ThemeProps<'Button'> & ButtonOptions

export const Button = forwardRef<ButtonProps, 'button'>((props, customRef) => {
  const group = useButtonGroup()
  const style = useComponentStyle('Button', { ...group, ...props })
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
    children,
    ...rest
  } = omitThemeProps(props)

  const { ref: buttonRef, type: defaultType } = useButtonType(as)
  const ref = useMergeRefs(customRef, buttonRef)

  const css: CSSUIObject = useMemo(() => {
    // @ts-ignore
    const _focus = merge(style._focus ?? {}, { zIndex: 1 })

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
      ...style,
      ...(!!group ? { _focus } : {}),
    }
  }, [style, group])

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
    // @ts-ignore
    <ui.button
      ref={ref}
      className={cx('ui-button', className)}
      type={type ?? defaultType}
      disabled={isDisabled || isLoading}
      data-active={isActive}
      data-loading={isLoading}
      __css={css}
      {...rest}
    >
      {isLoading && loadingPlacement === 'start' ? (
        <Loading className='ui-button-loading--start' {...loadingProps} />
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
        <Loading className='ui-button-loading--end' {...loadingProps} />
      ) : null}
    </ui.button>
  )
})

const Loading: FC<Pick<ButtonProps, 'className' | 'loadingIcon' | 'loadingText'>> = ({
  className,
  loadingIcon,
  loadingText,
}) => {
  const css = useMemo(
    () => ({
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
    // @ts-ignore
    <ui.div className={cx('ui-button-loading', className)} __css={css}>
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
    // @ts-ignore
    <ui.span
      className={cx('ui-button-icon', className)}
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
