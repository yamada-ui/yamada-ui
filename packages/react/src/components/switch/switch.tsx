import type { ReactNode } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { SwitchStyle } from "./switch.style"
import type { UseSwitchProps } from "./use-switch"
import { createSlotComponent, styled } from "../../core"
import { isObject } from "../../utils"
import { switchStyle } from "./switch.style"
import { useSwitch } from "./use-switch"

export interface SwitchProps
  extends Merge<HTMLStyledProps<"label">, UseSwitchProps>,
    ThemeProps<SwitchStyle> {
  /**
   * The switch icon to use.
   */
  icon?: ReactNode | { off: ReactNode; on: ReactNode }
  /**
   * Props for switch input element.
   */
  inputProps?: HTMLStyledProps<"input">
  /**
   * Props for switch label element.
   */
  labelProps?: HTMLStyledProps<"span">
}

export const {
  PropsContext: SwitchPropsContext,
  usePropsContext: useSwitchPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<SwitchProps, SwitchStyle>("switch", switchStyle)

/**
 * `Switch` is a component used to toggle between on and off states.
 *
 * @see https://yamada-ui.com/components/switch
 */
export const Switch = withProvider<"input", SwitchProps>(
  ({ children, icon, inputProps, labelProps, ...props }) => {
    const {
      checked,
      getInputProps,
      getLabelProps,
      getRootProps,
      getThumbProps,
      getTrackProps,
    } = useSwitch(props)

    return (
      <styled.label {...getRootProps()}>
        <styled.input data-peer {...getInputProps(inputProps)} />

        <SwitchTrack {...getTrackProps()}>
          <SwitchThumb {...getThumbProps()}>
            {icon && isObject(icon) && "on" in icon
              ? checked
                ? icon.on
                : icon.off
              : icon}
          </SwitchThumb>
        </SwitchTrack>

        {children ? (
          <SwitchLabel {...getLabelProps(labelProps)}>{children}</SwitchLabel>
        ) : null}
      </styled.label>
    )
  },
  "root",
)()

interface SwitchThumbProps extends HTMLStyledProps {}

const SwitchThumb = withContext<"div", SwitchThumbProps>("div", "thumb")()

interface SwitchTrackProps extends HTMLStyledProps {}

const SwitchTrack = withContext<"div", SwitchTrackProps>("div", "track")()

interface SwitchLabelProps extends HTMLStyledProps<"span"> {}

const SwitchLabel = withContext<"span", SwitchLabelProps>("span", "label")()
