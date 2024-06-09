import { forwardRef, ui } from "@yamada-ui/core"
import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { Input } from "@yamada-ui/input"
import type { InputProps } from "@yamada-ui/input"
import { cx } from "@yamada-ui/utils"
import { useId, type ReactNode } from "react"
import { useColorSelectorContext } from "./use-color-selector"

type ColorSelectorChannelsOptions = {
  /**
   * Props for the chancel component.
   */
  channelProps?: Omit<ColorSelectorChannelProps, "channelLabel">
}

export type ColorSelectorChannelsProps = Omit<HTMLUIProps<"div">, "children"> &
  ColorSelectorChannelsOptions

export const ColorSelectorChannels = forwardRef<
  ColorSelectorChannelsProps,
  "div"
>(({ className, channelProps, ...rest }, ref) => {
  const { withAlpha, channels, getChannelProps, styles } =
    useColorSelectorContext()

  const css: CSSUIObject = {
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
      {channels.map(({ label, space, value, min, max }) => (
        <ColorSelectorChannel
          key={label}
          channelLabel={label}
          {...getChannelProps({ ...channelProps, space, value, min, max })}
        />
      ))}
    </ui.div>
  )
})

type ColorSelectorChannelOptions = {
  channelLabel?: ReactNode
}

export type ColorSelectorChannelProps = Omit<
  InputProps,
  "type" | "pattern" | "min" | "max" | "value" | "defaultValue"
> &
  ColorSelectorChannelOptions

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
})
