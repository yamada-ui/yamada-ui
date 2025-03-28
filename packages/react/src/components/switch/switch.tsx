import type { InputHTMLAttributes, ReactElement, Ref } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { SwitchStyle } from "./switch.style"
import type { UseSwitchProps } from "./use-switch"
import { cloneElement } from "react"
import { createSlotComponent, styled } from "../../core"
import { dataAttr } from "../../utils"
import { switchStyle } from "./switch.style"
import { useSwitch } from "./use-switch"

export interface SwitchIconProps {
  active?: boolean
  checked?: boolean
  focused?: boolean
  hovered?: boolean
}

export interface SwitchProps
  extends Merge<
      Omit<HTMLStyledProps<"label">, "ref">,
      Omit<UseSwitchProps, "isIndeterminate">
    >,
    ThemeProps<SwitchStyle> {
  /**
   * Ref of input element.
   */
  ref?: Ref<HTMLInputElement>
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
  ({ ref, children, icon, inputProps, labelProps, ...computedProps }) => {
    const {
      active,
      checked,
      focused,
      hovered,
      getIconProps,
      getInputProps,
      getLabelProps,
      getRootProps,
    } = useSwitch({ selectOnEnter: true, ...computedProps })
    const cloneIcon = icon
      ? cloneElement(icon, {
          active,
          checked,
          focused,
          hovered,
        })
      : null

    return (
      <styled.label {...getRootProps()}>
        <SwitchInput {...getInputProps({ ref, ...inputProps })} />

        {cloneIcon ?? (
          <SwitchTrack {...getIconProps()}>
            <SwitchThumb data-checked={dataAttr(checked)} />
          </SwitchTrack>
        )}

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

interface SwitchInputProps extends HTMLStyledProps<"input"> {}

const SwitchInput = withContext<"input", SwitchInputProps>("input", "input")()

interface SwitchTrackProps extends HTMLStyledProps {}

const SwitchTrack = withContext<"div", SwitchTrackProps>("div", "track")()

interface SwitchLabelProps extends HTMLStyledProps<"span"> {}

const SwitchLabel = withContext<"span", SwitchLabelProps>("span", "label")()
