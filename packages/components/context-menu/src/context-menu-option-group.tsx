import type { ComponentArgs, HTMLUIProps } from "@yamada-ui/core"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { cx, getValidChildren, omitObject, isArray } from "@yamada-ui/utils"
import type { ForwardedRef, Ref } from "react"
import { cloneElement, forwardRef, useCallback } from "react"
import { ContextMenuGroup } from "./context-menu-group"
import { ContextMenuOptionItem } from "./context-menu-item"

type ContextMenuOptionGroupOptions<Y extends string | string[] = string> = {
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

export type ContextMenuOptionGroupProps<Y extends string | string[] = string> =
  Omit<HTMLUIProps<"div">, keyof ContextMenuOptionGroupOptions> &
    ContextMenuOptionGroupOptions<Y>

export const ContextMenuOptionGroup = forwardRef(
  <Y extends string | string[] = string>(
    {
      className,
      defaultValue,
      type,
      children,
      ...rest
    }: ContextMenuOptionGroupProps<Y>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const isRadio = type === "radio"

    defaultValue = (isRadio ? "" : []) as Y

    const [value, setValue] = useControllableState({
      ...rest,
      defaultValue,
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
      if (child.type !== ContextMenuOptionItem) return child

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
      <ContextMenuGroup
        ref={ref}
        className={cx("ui-context-menu__item--group--option", className)}
        {...omitObject(rest, ["value", "onChange"])}
      >
        {cloneChildren}
      </ContextMenuGroup>
    )
  },
) as {
  <Y extends string | string[] = string>(
    props: ContextMenuOptionGroupProps<Y> & { ref?: Ref<HTMLDivElement> },
  ): JSX.Element
} & ComponentArgs

ContextMenuOptionGroup.displayName = "ContextMenuOptionGroup"
