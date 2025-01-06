import type { ComponentArgs } from "@yamada-ui/core"
import type { ForwardedRef, ReactElement, RefAttributes } from "react"
import type { MenuGroupProps } from "./menu-group"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { cx, getValidChildren, isArray, isString } from "@yamada-ui/utils"
import { cloneElement, forwardRef, useCallback } from "react"
import { MenuGroup } from "./menu-group"
import { MenuOptionItem } from "./menu-item"

interface MenuOptionGroupOptions<Y extends string | string[] = string> {
  /**
   * The type of the menu option group.
   *
   * @default 'checkbox'
   */
  type?: "checkbox" | "radio"
  /**
   * The initial value of the menu item group.
   */
  defaultValue?: Y
  /**
   * The value of the menu item group.
   */
  value?: Y
  /**
   * The callback fired when any children checkbox is checked or unchecked.
   */
  onChange?: (value: Y) => void
}

export interface MenuOptionGroupProps<Y extends string | string[] = string>
  extends Omit<MenuGroupProps, keyof MenuOptionGroupOptions>,
    MenuOptionGroupOptions<Y> {}

export const MenuOptionGroup = forwardRef(
  <Y extends string | string[] = string>(
    {
      type,
      className,
      children,
      defaultValue,
      value: valueProp,
      onChange: onChangeProp,
      ...rest
    }: MenuOptionGroupProps<Y>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const radio = type === "radio"

    defaultValue ??= (radio ? "" : []) as Y

    const [value, setValue] = useControllableState({
      defaultValue,
      value: valueProp,
      onChange: onChangeProp,
    })

    const onChange = useCallback(
      (selectedValue: string) => {
        if (radio && isString(value)) setValue(selectedValue as Y)

        if (!radio && isArray(value)) {
          const nextValue = value.includes(selectedValue)
            ? value.filter((item) => item !== selectedValue)
            : value.concat(selectedValue)

          setValue(nextValue as Y)
        }
      },
      [radio, value, setValue],
    )

    const validChildren = getValidChildren(children)

    const cloneChildren = validChildren.map((child) => {
      if (child.type !== MenuOptionItem) return child

      const onClick = (ev: MouseEvent) => {
        onChange(child.props.value)
        child.props.onClick?.(ev)
      }

      const checked =
        !radio && isArray(value)
          ? value.includes(child.props.value)
          : child.props.value === value

      return cloneElement(child, { type, checked, onClick })
    })

    return (
      <MenuGroup
        ref={ref}
        className={cx("ui-menu__item--group--option", className)}
        {...rest}
      >
        {cloneChildren}
      </MenuGroup>
    )
  },
) as {
  <Y extends string | string[] = string>(
    props: MenuOptionGroupProps<Y> & RefAttributes<HTMLDivElement>,
  ): ReactElement
} & ComponentArgs

MenuOptionGroup.displayName = "MenuOptionGroup"
MenuOptionGroup.__ui__ = "MenuOptionGroup"
