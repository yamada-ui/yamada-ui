import { ui, forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/core'
import { useControllableState } from '@yamada-ui/use-controllable-state'
import { cx, getValidChildren, isArray, omitObject } from '@yamada-ui/utils'
import { cloneElement, useCallback } from 'react'
import { useMenu, MenuOptionItem } from './'

export type MenuGroupProps = HTMLUIProps<'div'>

export const MenuGroup = forwardRef<MenuGroupProps, 'div'>(
  ({ className, title, children, ...rest }, ref) => {
    const { styles } = useMenu()

    const css: CSSUIObject = { ...styles.group }

    return (
      <ui.div
        ref={ref}
        className={cx('ui-menu-group', className)}
        role='group'
        __css={css}
        {...rest}
      >
        {title ? (
          <ui.span className={cx('ui-menu-group-title')} __css={styles.groupTitle}>
            {title}
          </ui.span>
        ) : null}

        {children}
      </ui.div>
    )
  },
)

type MenuOptionGroupOptions = {
  value?: string | string[]
  defaultValue?: string | string[]
  type?: 'radio' | 'checkbox'
  onChange?: (value: string | string[]) => void
}

export type MenuOptionGroupProps = Omit<MenuGroupProps, 'value' | 'defaultValue' | 'onChange'> &
  MenuOptionGroupOptions

export const MenuOptionGroup = forwardRef<MenuOptionGroupProps, 'div'>(
  ({ className, defaultValue, type, children, ...rest }, ref) => {
    const isRadio = type === 'radio'

    defaultValue = isRadio ? '' : []

    const [value, setValue] = useControllableState({
      ...rest,
      defaultValue,
    })

    const onChange = useCallback(
      (selectedValue: string) => {
        if (isRadio && typeof value === 'string') setValue(selectedValue)

        if (!isRadio && isArray(value)) {
          const nextValue = value.includes(selectedValue)
            ? value.filter((item) => item !== selectedValue)
            : value.concat(selectedValue)

          setValue(nextValue)
        }
      },
      [isRadio, value, setValue],
    )

    const validChildren = getValidChildren(children)

    const cloneChildren = validChildren.map((child) => {
      if (child.type !== MenuOptionItem) return child

      const onClick = (ev: MouseEvent) => {
        onChange(child.props.value)
        child.props.onClick?.(ev)
      }

      const isChecked = isRadio ? child.props.value === value : value.includes(child.props.value)

      return cloneElement(child, { type, onClick, isChecked })
    })

    return (
      <MenuGroup
        ref={ref}
        className={cx('ui-menu-option-group', className)}
        {...omitObject(rest, ['value', 'onChange'])}
      >
        {cloneChildren}
      </MenuGroup>
    )
  },
)
