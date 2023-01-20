import { ui, CSSUIObject, HTMLUIProps, forwardRef } from '@yamada-ui/core'
import { ChevronIcon, CloseIcon } from '@yamada-ui/icon'
import { useClickable } from '@yamada-ui/use-clickable'
import { cx, getValidChildren, isValidElement } from '@yamada-ui/utils'
import { cloneElement, FC, HTMLAttributes, useRef } from 'react'
import { useAutocompleteContext } from './use-autocomplete'

export type AutocompleteIconProps = HTMLUIProps<'div'>

export const AutocompleteIcon = forwardRef<AutocompleteIconProps, 'div'>(
  ({ className, children, __css, ...rest }, ref) => {
    const { styles } = useAutocompleteContext()

    const css: CSSUIObject = {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      cursor: 'pointer',
      ...styles.icon,
      ...__css,
    }

    const validChildren = getValidChildren(children)

    const cloneChildren = validChildren.map((child) =>
      cloneElement(child, {
        focusable: false,
        'aria-hidden': true,
        style: {
          maxWidth: '1em',
          maxHeight: '1em',
          color: 'currentColor',
        },
      }),
    )

    return (
      <ui.div ref={ref} className={cx('ui-autocomplete-icon', className)} __css={css} {...rest}>
        {isValidElement(children) ? cloneChildren : <ChevronIcon />}
      </ui.div>
    )
  },
)

export type AutocompleteClearIconProps = AutocompleteIconProps & { disabled?: boolean }

export const AutocompleteClearIcon: FC<AutocompleteClearIconProps> = ({
  className,
  children,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { styles } = useAutocompleteContext()

  const isDisabled = props.disabled

  const rest = useClickable({
    ref,
    isDisabled,
    ...(props as HTMLAttributes<HTMLElement>),
  })

  return (
    <AutocompleteIcon
      className={cx('ui-autocomplete-clear-icon', className)}
      __css={styles.clearIcon}
      {...rest}
    >
      {children ?? <CloseIcon w='0.5em' h='0.5em' />}
    </AutocompleteIcon>
  )
}
