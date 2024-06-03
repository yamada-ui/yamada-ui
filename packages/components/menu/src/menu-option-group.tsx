import type { ComponentArgs, HTMLUIProps } from "@yamada-ui/core"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { cx, getValidChildren, isArray } from "@yamada-ui/utils"
import type { ForwardedRef, Ref } from "react"
import { cloneElement, forwardRef, useCallback } from "react"
import { MenuGroup } from "./menu-group"
import { MenuOptionItem } from "./menu-item"

type MenuOptionGroupOptions<Y extends string | string[] = string> = {
  /**
   * The label of the option group.
   */
  label?: string
  /**
   * The value of the menu item group.
   */
  value?: Y
  /**
   * The initial value of the menu item group.
   */
  defaultValue?: Y
  /**
   * The type of the menu option group.
   *
   * @default 'checkbox'
   */
  type?: "radio" | "checkbox"
  /**
   * The callback fired when any children checkbox is checked or unchecked.
   */
  onChange?: (value: Y) => void
}

export type MenuOptionGroupProps<Y extends string | string[] = string> = Omit<
  HTMLUIProps<"div">,
  keyof MenuOptionGroupOptions
> &
  MenuOptionGroupOptions<Y>

export const MenuOptionGroup = forwardRef(
  <Y extends string | string[] = string>(
    {
      className,
      value: valueProp,
      defaultValue,
      onChange: onChangeProp,
      type,
      children,
      ...rest
    }: MenuOptionGroupProps<Y>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const isRadio = type === "radio"

    defaultValue ??= (isRadio ? "" : []) as Y

    const [value, setValue] = useControllableState({
      value: valueProp,
      defaultValue,
      onChange: onChangeProp,
    })

    const onChange = useCallback(
      (selectedValue: string) => {
        if (isRadio && typeof value === "string") setValue(selectedValue as Y)

        if (!isRadio && isArray(value)) {
          const nextValue = value.includes(selectedValue)
            ? value.filter((item) => item !== selectedValue)
            : value.concat(selectedValue)

          setValue(nextValue as Y)
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

      const isChecked =
        !isRadio && isArray(value)
          ? value.includes(child.props.value)
          : child.props.value === value

      return cloneElement(child, { type, onClick, isChecked })
    })

    return (
      <MenuGroup
        ref={ref}
        className={cx("ui-menu__group--option", className)}
        {...rest}
      >
        {cloneChildren}
      </MenuGroup>
    )
  },
) as {
  <Y extends string | string[] = string>(
    props: MenuOptionGroupProps<Y> & { ref?: Ref<HTMLDivElement> },
  ): JSX.Element
} & ComponentArgs

MenuOptionGroup.displayName = "MenuOptionGroup"
