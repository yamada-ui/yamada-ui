import type { ComponentArgs, ThemeProps } from "@yamada-ui/core"
import type { ForwardedRef, ReactElement, RefAttributes } from "react"
import type { RadioCardProps } from "./radio-card"
import type { RadioCardGroupContext } from "./radio-context"
import type { RadioGroupSharedProps } from "./radio-group"
import { useFormControl } from "@yamada-ui/form-control"
import { Flex } from "@yamada-ui/layouts"
import { cx, getValidChildren } from "@yamada-ui/utils"
import { forwardRef } from "react"
import { RadioCard } from "./radio-card"
import { RadioCardGroupProvider } from "./radio-context"
import { useRadioGroup } from "./use-radio-group"

export type RadioCardItem<Y extends number | string = string> =
  RadioCardProps<Y>

export interface RadioCardGroupProps<Y extends number | string = string>
  extends RadioGroupSharedProps<Y>,
    Pick<
      RadioCardProps,
      "addonProps" | "descriptionProps" | "labelProps" | "withIcon"
    >,
    ThemeProps<"RadioCard"> {
  /**
   * If provided, generate radio cards based on items.
   *
   * @default '[]'
   */
  items?: RadioCardItem<Y>[]
}

/**
 * `RadioCardGroup` is a component that groups `RadioCard` components.
 *
 * @see Docs https://yamada-ui.com/components/forms/radio-card
 */
export const RadioCardGroup = forwardRef(
  <Y extends number | string = string>(
    {
      id: idProp,
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
    }: RadioCardGroupProps<Y>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { disabled, invalid, labelId, readOnly, required, ...computedProps } =
      useFormControl({
        id: idProp,
        ...props,
      })
    const {
      id,
      name,
      props: rest,
      value,
      getContainerProps,
      onChange,
    } = useRadioGroup(computedProps)

    const validChildren = getValidChildren(children)
    let computedChildren: ReactElement[] = []

    if (!validChildren.length && items.length)
      computedChildren = items.map((props, i) => (
        <RadioCard key={i} {...props} />
      ))

    return (
      <RadioCardGroupProvider
        value={
          {
            name,
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
          } as RadioCardGroupContext
        }
      >
        <Flex
          ref={ref}
          className={cx("ui-radio-card-group", className)}
          gap={gap}
          w="100%"
          {...getContainerProps({
            id,
            "aria-labelledby": labelId,
            ...rest,
          })}
          direction={direction}
        >
          {children ?? computedChildren}
        </Flex>
      </RadioCardGroupProvider>
    )
  },
) as {
  <Y extends number | string = string>(
    props: RadioCardGroupProps<Y> & RefAttributes<HTMLDivElement>,
  ): ReactElement
} & ComponentArgs

RadioCardGroup.displayName = "RadioCardGroup"
RadioCardGroup.__ui__ = "RadioCardGroup"
