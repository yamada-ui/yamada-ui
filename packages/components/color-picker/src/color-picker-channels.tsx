import { forwardRef, ui } from "@yamada-ui/core"
import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { Input } from "@yamada-ui/input"
import type { InputProps } from "@yamada-ui/input"
import { cx } from "@yamada-ui/utils"
import { useId, type ReactNode } from "react"
import { useColorPickerContext } from "./use-color-picker"

type ColorPickerChannelsOptions = {
  /**
   * Props for the chancel component.
   */
  channelProps?: Omit<ColorPickerChannelProps, "channelLabel">
}

export type ColorPickerChannelsProps = Omit<HTMLUIProps<"div">, "children"> &
  ColorPickerChannelsOptions

export const ColorPickerChannels = forwardRef<ColorPickerChannelsProps, "div">(
  ({ className, channelProps, ...rest }, ref) => {
    const { withAlpha, channels, getChannelProps, styles } =
      useColorPickerContext()

    const css: CSSUIObject = {
      display: "grid",
      gridTemplateColumns: `repeat(${withAlpha ? "4" : "3"}, 1fr)`,
      ...styles.channels,
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-color-picker__channels", className)}
        __css={css}
        {...rest}
      >
        {channels.map(({ label, space, value, min, max }) => (
          <ColorPickerChannel
            key={label}
            channelLabel={label}
            {...getChannelProps({ ...channelProps, space, value, min, max })}
          />
        ))}
      </ui.div>
    )
  },
)

type ColorPickerChannelOptions = {
  channelLabel?: ReactNode
}

export type ColorPickerChannelProps = Omit<
  InputProps,
  "type" | "pattern" | "min" | "max" | "value" | "defaultValue"
> &
  ColorPickerChannelOptions

export const ColorPickerChannel = forwardRef<ColorPickerChannelProps, "input">(
  ({ className, channelLabel, ...rest }, ref) => {
    const id = useId()
    let { size, disabled, readOnly, styles } = useColorPickerContext()

    if (size === "full") size = "lg"

    const css: CSSUIObject = { ...styles.channel }

    return (
      <ui.div className={cx("ui-color-picker__channel", className)}>
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

        <Input ref={ref} id={id} size={size} __css={css} {...rest} />
      </ui.div>
    )
  },
)
