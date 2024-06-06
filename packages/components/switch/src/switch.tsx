import type { UseCheckboxProps } from "@yamada-ui/checkbox"
import { useCheckbox } from "@yamada-ui/checkbox"
import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  omitThemeProps,
  useMultiComponentStyle,
} from "@yamada-ui/core"
import type { MotionTransition } from "@yamada-ui/motion"
import { motion } from "@yamada-ui/motion"
import type { Merge } from "@yamada-ui/utils"
import { cx, dataAttr } from "@yamada-ui/utils"
import type { DOMAttributes, InputHTMLAttributes, ReactElement } from "react"
import { cloneElement } from "react"

export type SwitchIconProps = {
  isChecked?: boolean
  isFocused?: boolean
  isHovered?: boolean
  isActive?: boolean
}

type SwitchOptions = {
  /**
   * The switch icon to use.
   */
  icon?: ReactElement<SwitchIconProps>
  /**
   * Props for switch input element.
   */
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  /**
   * Props for switch label element.
   */
  labelProps?: HTMLUIProps<"span">
  /**
   * Change switch label from right to left.
   *
   * @default false
   */
  isReverse?: boolean
  /**
   * Motion transition settings.
   */
  transition?: MotionTransition
}

export type SwitchProps = Merge<
  HTMLUIProps<"label">,
  Omit<UseCheckboxProps, "isIndeterminate">
> &
  ThemeProps<"Switch"> &
  SwitchOptions

/**
 * `Switch` is a component used to toggle between on and off states.
 *
 * @see Docs https://yamada-ui.com/components/forms/switch
 */
export const Switch = forwardRef<SwitchProps, "input">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("Switch", props)
  const {
    className,
    gap = "0.5rem",
    children,
    icon,
    inputProps,
    labelProps,
    isReverse,
    flexDirection,
    transition = {
      type: "spring",
      stiffness: 700,
      damping: 40,
    },
    ...computedProps
  } = omitThemeProps(mergedProps)

  const {
    isChecked,
    isFocused,
    isHovered,
    isActive,
    getContainerProps,
    getIconProps,
    getInputProps,
    getLabelProps,
    props: rest,
  } = useCheckbox(computedProps)

  const cloneIcon = icon
    ? cloneElement(icon, {
        isChecked,
        isFocused,
        isHovered,
        isActive,
      })
    : null

  return (
    <ui.label
      ref={ref}
      className={cx("ui-switch", className)}
      __css={{
        flexDirection: flexDirection ?? (isReverse ? "row-reverse" : "row"),

        gap,
        ...styles.container,
      }}
      {...getContainerProps()}
      {...rest}
    >
      <ui.input
        className={cx("ui-switch__input", className)}
        {...getInputProps(inputProps, ref)}
      />

      {cloneIcon ?? (
        <ui.span
          className={cx("ui-switch__track", className)}
          __css={{
            ...styles.track,
          }}
          {...getIconProps()}
        >
          <ui.span
            as={motion.span}
            className={cx("ui-switch__thumb", className)}
            data-checked={dataAttr(isChecked)}
            layout
            transition={transition}
            __css={{ ...styles.thumb }}
          />
        </ui.span>
      )}

      {children ? (
        <ui.span
          className={cx("ui-switch__label", className)}
          __css={{ ...styles.label }}
          {...getLabelProps(labelProps as DOMAttributes<HTMLElement>)}
        >
          {children}
        </ui.span>
      ) : null}
    </ui.label>
  )
})
