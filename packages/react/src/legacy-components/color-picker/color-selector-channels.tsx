import type { ReactNode } from "react"
import type { CSSUIObject, HTMLUIProps } from "../../core"
import type { InputProps } from "../input"
import { useId } from "react"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"
import { Input } from "../input"
import { useColorSelectorContext } from "./use-color-selector"

interface ColorSelectorChannelsOptions {
  /**
   * Props for the chancel component.
   */
  channelProps?: Omit<ColorSelectorChannelProps, "channelLabel">
}

export interface ColorSelectorChannelsProps
  extends Omit<HTMLUIProps, "children">,
    ColorSelectorChannelsOptions {}

export const ColorSelectorChannels = forwardRef<
  ColorSelectorChannelsProps,
  "div"
>(({ className, channelProps, ...rest }, ref) => {
  const { channels, styles, withAlpha, getChannelProps } =
    useColorSelectorContext()

  const css: CSSUIObject = {
    display: "grid",
    gridTemplateColumns: `repeat(${withAlpha ? "4" : "3"}, 1fr)`,
    ...styles.channels,
  }

  return (
    <ui.div
      ref={ref}
      className={cx("ui-color-selector__channels", className)}
      __css={css}
      {...rest}
    >
      {channels.map(({ label, max, min, space, value }) => (
        <ColorSelectorChannel
          key={label}
          channelLabel={label}
          {...getChannelProps({ ...channelProps, max, min, space, value })}
        />
      ))}
    </ui.div>
  )
})

ColorSelectorChannels.displayName = "ColorSelectorChannels"
ColorSelectorChannels.__ui__ = "ColorSelectorChannels"

interface ColorSelectorChannelOptions {
  channelLabel?: ReactNode
}

export type ColorSelectorChannelProps = ColorSelectorChannelOptions &
  Omit<
    InputProps,
    "defaultValue" | "max" | "min" | "pattern" | "type" | "value"
  >

export const ColorSelectorChannel = forwardRef<
  ColorSelectorChannelProps,
  "input"
>(({ className, channelLabel, ...rest }, ref) => {
  const id = useId()
  let { size, disabled, readOnly, styles } = useColorSelectorContext()

  if (size === "full") size = "lg"

  const css: CSSUIObject = { ...styles.channel }

  return (
    <ui.div className={cx("ui-color-selector__channel", className)}>
      {channelLabel ? (
        <ui.label
          htmlFor={id}
          style={{ cursor: disabled ? "not-allowed" : undefined }}
          __css={{
            display: "block",
            pointerEvents: readOnly ? "none" : undefined,
            ...styles.channelLabel,
          }}
        >
          {channelLabel}
        </ui.label>
      ) : null}

      <Input id={id} ref={ref} size={size} __css={css} {...rest} />
    </ui.div>
  )
})

ColorSelectorChannel.displayName = "ColorSelectorChannel"
ColorSelectorChannel.__ui__ = "ColorSelectorChannel"
