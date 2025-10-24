"use client"

import type { ReactNode } from "react"
import type {
  Direction,
  HTMLProps,
  HTMLStyledProps,
  ThemeProps,
  WithoutThemeProps,
} from "../../core"
import type { ColorSwatchProps } from "../color-swatch"
import type { UseInputBorderProps } from "../input"
import type { ColorPickerStyle } from "./color-picker.style"
import type {
  UseColorPickerProps,
  UseColorPickerReturn,
} from "./use-color-picker"
import { useMemo } from "react"
import { createSlotComponent } from "../../core"
import { cast } from "../../utils"
import { ColorSelector } from "../color-selector"
import { ColorSwatch } from "../color-swatch"
import { useGroupItemProps } from "../group"
import { PipetteIcon } from "../icon"
import { InputGroup, useInputBorder, useInputPropsContext } from "../input"
import { Popover, usePopoverProps } from "../popover"
import { colorPickerStyle } from "./color-picker.style"
import { useColorPicker } from "./use-color-picker"

interface ComponentContext
  extends Pick<ColorPickerProps, "inputProps">,
    Pick<
      UseColorPickerReturn,
      "getEyeDropperProps" | "getInputProps" | "value"
    > {}

export interface ColorPickerProps
  extends Omit<HTMLStyledProps, "defaultValue" | "offset" | "onChange" | "ref">,
    UseColorPickerProps,
    Omit<
      WithoutThemeProps<Popover.RootProps, ColorPickerStyle>,
      | "autoFocus"
      | "children"
      | "initialFocusRef"
      | "modal"
      | "transform"
      | "updateRef"
      | "withCloseButton"
    >,
    Pick<
      ColorSelector.RootProps,
      | "alphaSliderProps"
      | "colorSwatches"
      | "colorSwatchGroupColumns"
      | "colorSwatchGroupLabel"
      | "colorSwatchGroupLabelProps"
      | "colorSwatchGroupProps"
      | "colorSwatchItemProps"
      | "hueSliderProps"
      | "saturationSliderProps"
    >,
    ThemeProps<ColorPickerStyle>,
    UseInputBorderProps {
  /**
   * The placement of the popper relative to its reference.
   *
   * @default 'end-start'
   */
  placement?: Direction
  /**
   * If `true`, the color swatch component will be displayed.
   *
   * @default true
   */
  withColorSwatch?: boolean
  /**
   * If `true`, the eye dropper component will be displayed.
   *
   * @default true
   */
  withEyeDropper?: boolean
  /**
   * Props for the color swatch component.
   */
  colorSwatchProps?: ColorPickerColorSwatchProps
  /**
   * Props for content element.
   */
  contentProps?: ColorPickerContentProps
  /**
   * The props for the input element.
   */
  elementProps?: InputGroup.ElementProps
  /**
   * The props for the end element.
   */
  endElementProps?: InputGroup.ElementProps
  /**
   * Props for the eye dropper component.
   */
  eyeDropperProps?: ColorPickerEyeDropperProps
  /**
   * The props for the field component.
   */
  fieldProps?: ColorPickerFieldProps
  /**
   * The props for the input element.
   */
  inputProps?: HTMLStyledProps<"input">
  /**
   * Props for root element.
   */
  rootProps?: InputGroup.RootProps
  /**
   * Props for the selector component.
   */
  selectorProps?: ColorSelector.RootProps
  /**
   * The props for the start element.
   */
  startElementProps?: InputGroup.ElementProps
}

const {
  ComponentContext,
  PropsContext: ColorPickerPropsContext,
  useComponentContext,
  usePropsContext: useColorPickerPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<ColorPickerProps, ColorPickerStyle, ComponentContext>(
  "color-picker",
  colorPickerStyle,
)

export { ColorPickerPropsContext, useColorPickerPropsContext }

/**
 * `ColorPicker` is a component used by the user to select a color or enter an arbitrary color value.
 *
 * @see https://yamada-ui.com/docs/components/color-picker
 */
export const ColorPicker = withProvider<"input", ColorPickerProps, "size">(
  (props) => {
    const [groupItemProps, mergedProps] = useGroupItemProps(props)
    const [
      popoverProps,
      {
        className,
        css,
        colorScheme,
        size,
        colorSwatches,
        colorSwatchGroupColumns,
        colorSwatchGroupLabel,
        errorBorderColor,
        focusBorderColor,
        withColorSwatch = true,
        withEyeDropper = true,
        alphaSliderProps,
        colorSwatchGroupLabelProps,
        colorSwatchGroupProps,
        colorSwatchItemProps,
        colorSwatchProps,
        contentProps,
        elementProps,
        endElementProps,
        eyeDropperProps,
        fieldProps,
        hueSliderProps,
        inputProps,
        rootProps,
        saturationSliderProps,
        selectorProps,
        startElementProps,
        ...rest
      },
    ] = usePopoverProps(mergedProps, [
      "disabled",
      "open",
      "defaultOpen",
      "onOpen",
      "onClose",
      "openOnClick",
    ])
    const {
      interactive,
      open,
      value,
      getContentProps,
      getEyeDropperProps,
      getFieldProps,
      getInputProps,
      getRootProps,
      getSelectorProps,
      onClose,
      onOpen,
    } = useColorPicker(rest)
    const mergedPopoverProps = useMemo<Popover.RootProps>(
      () => ({
        animationScheme: "block-start",
        autoFocus: false,
        matchWidth: true,
        placement: "end-start",
        ...popoverProps,
        disabled: !interactive,
        open,
        onClose,
        onOpen,
      }),
      [interactive, onClose, onOpen, open, popoverProps],
    )
    const varProps = useInputBorder({ errorBorderColor, focusBorderColor })
    const componentContext = useMemo(
      () => ({ value, getEyeDropperProps, getInputProps, inputProps }),
      [getEyeDropperProps, getInputProps, inputProps, value],
    )

    return (
      <ComponentContext value={componentContext}>
        <Popover.Root {...mergedPopoverProps}>
          <InputGroup.Root
            className={className}
            css={css}
            colorScheme={colorScheme}
            {...getRootProps({ ...groupItemProps, ...rootProps })}
          >
            {withColorSwatch ? (
              <InputGroup.Element {...elementProps} {...startElementProps}>
                <ColorPickerColorSwatch {...colorSwatchProps} />
              </InputGroup.Element>
            ) : null}

            <Popover.Trigger>
              <ColorPickerField
                {...getFieldProps({ ...varProps, ...fieldProps })}
              />
            </Popover.Trigger>

            {withEyeDropper ? (
              <InputGroup.Element
                clickable
                {...elementProps}
                {...endElementProps}
              >
                <ColorPickerEyeDropper
                  {...getEyeDropperProps(eyeDropperProps)}
                />
              </InputGroup.Element>
            ) : null}
          </InputGroup.Root>

          <ColorPickerContent
            {...cast<ColorPickerContentProps>(
              getContentProps(cast<HTMLProps>(contentProps)),
            )}
          >
            <ColorSelector.Root
              size={size}
              {...getSelectorProps({
                colorSwatches,
                colorSwatchGroupColumns,
                colorSwatchGroupLabel,
                alphaSliderProps,
                colorSwatchGroupLabelProps,
                colorSwatchGroupProps,
                colorSwatchItemProps,
                hueSliderProps,
                saturationSliderProps,
                ...selectorProps,
              })}
            />
          </ColorPickerContent>
        </Popover.Root>
      </ComponentContext>
    )
  },
  "root",
  { transferProps: ["size"] },
)((props) => {
  const context = useInputPropsContext()

  return { ...context, ...props }
})

interface ColorPickerFieldProps extends HTMLStyledProps {}

const ColorPickerField = withContext<"div", ColorPickerFieldProps>(
  "div",
  "field",
)({ "data-group-propagate": "" }, (props) => {
  const { getInputProps, inputProps } = useComponentContext()

  return {
    children: <ColorPickerInput {...getInputProps(inputProps)} />,
    ...props,
  }
})

interface ColorPickerInputProps extends HTMLStyledProps<"input"> {}

const ColorPickerInput = withContext<"input", ColorPickerInputProps>(
  "input",
  "input",
)()

interface ColorPickerColorSwatchProps extends ColorSwatchProps {}

const ColorPickerColorSwatch = withContext<"div", ColorPickerColorSwatchProps>(
  ColorSwatch,
  "colorSwatch",
)(undefined, (props) => {
  const { value } = useComponentContext()

  return { variant: "circle", color: value, ...props }
})

interface ColorPickerEyeDropperProps extends HTMLStyledProps {
  icon?: ReactNode
}

const ColorPickerEyeDropper = withContext<"div", ColorPickerEyeDropperProps>(
  "div",
  "eyeDropper",
)(undefined, ({ children, icon, ...rest }) => {
  const { getEyeDropperProps } = useComponentContext()

  return getEyeDropperProps({
    children: icon || children || <PipetteIcon />,
    ...rest,
  })
})

interface ColorPickerContentProps extends Popover.ContentProps {}

const ColorPickerContent = withContext<"div", ColorPickerContentProps>(
  Popover.Content,
  "content",
)()
