"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { SaturationSliderStyle } from "./saturation-slider.style"
import type {
  UseSaturationSliderProps,
  UseSaturationSliderReturn,
} from "./use-saturation-slider"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { saturationSliderStyle } from "./saturation-slider.style"
import { useSaturationSlider } from "./use-saturation-slider"

interface ComponentContext extends Pick<
  UseSaturationSliderReturn,
  "getThumbProps" | "getTrackProps"
> {}

export interface SaturationSliderRootProps
  extends
    Merge<HTMLStyledProps, UseSaturationSliderProps>,
    ThemeProps<SaturationSliderStyle> {
  /**
   * Props for the input element.
   */
  inputProps?: HTMLStyledProps<"input">
  /**
   * Props for the thumb element.
   */
  thumbProps?: SaturationSliderThumbProps
  /**
   * Props for the track element.
   */
  trackProps?: SaturationSliderTrackProps
}

const {
  ComponentContext,
  PropsContext: SaturationSliderPropsContext,
  useComponentContext,
  usePropsContext: useSaturationSliderPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<
  SaturationSliderRootProps,
  SaturationSliderStyle,
  ComponentContext
>("saturation-slider", saturationSliderStyle)

export { SaturationSliderPropsContext, useSaturationSliderPropsContext }

/**
 * `SaturationSlider` is a component used to allow the user to select a color saturation.
 *
 * @see https://yamada-ui.com/docs/components/saturation-slider
 */
export const SaturationSliderRoot = withProvider<
  "input",
  SaturationSliderRootProps
>(({ children, inputProps, thumbProps, trackProps, ...rest }) => {
  const { getInputProps, getRootProps, getThumbProps, getTrackProps } =
    useSaturationSlider(rest)
  const computedChildren = useMemo(() => {
    if (children) return children

    return (
      <SaturationSliderTrack {...trackProps}>
        <SaturationSliderThumb {...thumbProps} />
      </SaturationSliderTrack>
    )
  }, [children, thumbProps, trackProps])
  const context = useMemo(
    () => ({ getThumbProps, getTrackProps }),
    [getThumbProps, getTrackProps],
  )

  return (
    <ComponentContext value={context}>
      <styled.div {...getRootProps()}>
        <styled.input {...getInputProps(inputProps)} />
        {computedChildren}
      </styled.div>
    </ComponentContext>
  )
}, "root")()

export interface SaturationSliderTrackProps extends HTMLStyledProps {}

export const SaturationSliderTrack = withContext<
  "div",
  SaturationSliderTrackProps
>("div", "track")(undefined, (props) => {
  const { getTrackProps } = useComponentContext()

  return getTrackProps(props)
})

export interface SaturationSliderThumbProps extends HTMLStyledProps {}

export const SaturationSliderThumb = withContext<
  "div",
  SaturationSliderThumbProps
>("div", "thumb")(undefined, (props) => {
  const { getThumbProps } = useComponentContext()

  return getThumbProps(props)
})
