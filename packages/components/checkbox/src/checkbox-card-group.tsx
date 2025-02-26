import type { ComponentArgs, ThemeProps } from "@yamada-ui/core"
import type { ForwardedRef, ReactElement, RefAttributes } from "react"
import type { CheckboxCardProps } from "./checkbox-card"
import type { CheckboxCardGroupContext } from "./checkbox-context"
import type { CheckboxGroupSharedProps } from "./checkbox-group"
import { useFormControl } from "@yamada-ui/form-control"
import { Flex } from "@yamada-ui/layouts"
import { cx, getValidChildren } from "@yamada-ui/utils"
import { forwardRef } from "react"
import { CheckboxCard } from "./checkbox-card"
import { CheckboxCardGroupProvider } from "./checkbox-context"
import { useCheckboxGroup } from "./use-checkbox-group"

export type CheckboxCardItem<Y extends number | string = string> =
  CheckboxCardProps<Y>

export interface CheckboxCardGroupProps<Y extends number | string = string>
  extends CheckboxGroupSharedProps<Y>,
    Pick<
      CheckboxCardProps,
      "addonProps" | "descriptionProps" | "labelProps" | "withIcon"
    >,
    ThemeProps<"CheckboxCard"> {
  /**
   * If provided, generate checkbox cards based on items.
   *
   * @default '[]'
   */
  items?: CheckboxCardItem<Y>[]
}

/**
 * `CheckboxCardGroup` is a component that groups `CheckboxCard` components.
 *
 * @see Docs https://yamada-ui.com/components/forms/checkbox-card
 */
export const CheckboxCardGroup = forwardRef(
  <Y extends number | string = string>(
    {
      className,
      colorScheme,
      size,
      variant,
      children,
      direction = "row",
      gap = "0.5rem",
      items = [],
      withIcon = true,
      addonProps,
      descriptionProps,
      labelProps,
      ...props
    }: CheckboxCardGroupProps<Y>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const {
      props: computedProps,
      value,
      getContainerProps,
      onChange,
    } = useCheckboxGroup<Y>(props)
    const {
      disabled,
      invalid,
      isDisabled: _isDisabled,
      isInvalid: _isInvalid,
      isReadOnly: _isReadOnly,
      isRequired: _isRequired,
      labelId,
      readOnly,
      required,
      ...rest
    } = useFormControl(computedProps)
    const validChildren = getValidChildren(children)

    let computedChildren: ReactElement[] = []

    if (!validChildren.length && items.length)
      computedChildren = items.map((props, i) => (
        <CheckboxCard key={i} {...props} />
      ))

    return (
      <CheckboxCardGroupProvider
        value={
          {
            colorScheme,
            size,
            variant,
            disabled,
            invalid,
            readOnly,
            required,
            value,
            withIcon,
            addonProps,
            descriptionProps,
            labelProps,
            onChange,
          } as CheckboxCardGroupContext
        }
      >
        <Flex
          ref={ref}
          className={cx("ui-checkbox-card-group", className)}
          gap={gap}
          w="100%"
          {...getContainerProps({
            "aria-labelledby": labelId,
            ...rest,
          })}
          direction={direction}
        >
          {children ?? computedChildren}
        </Flex>
      </CheckboxCardGroupProvider>
    )
  },
) as {
  <Y extends number | string = string>(
    props: CheckboxCardGroupProps<Y> & RefAttributes<HTMLDivElement>,
  ): ReactElement
} & ComponentArgs

CheckboxCardGroup.displayName = "CheckboxCardGroup"
CheckboxCardGroup.__ui__ = "CheckboxCardGroup"
