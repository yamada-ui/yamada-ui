import type { ThemeProps, WithoutThemeProps } from "../../core"
import type { IconButtonProps } from "../button"
import type { UseInputBorderProps } from "../input"
import type { ToggleStyle } from "./toggle.style"
import type { UseToggleProps } from "./use-toggle"
import { styled } from "../../core"
import { createSlotComponent } from "../../core"
import { IconButton } from "../button"
import { useInputBorder } from "../input"
import { Portal } from "../portal"
import { toggleStyle } from "./toggle.style"
import { useToggle } from "./use-toggle"

export interface ToggleProps<Y extends number | string = string>
  extends Omit<
      WithoutThemeProps<IconButtonProps, ToggleStyle>,
      "aria-label" | "onChange" | "ref" | "value"
    >,
    UseToggleProps<Y>,
    Pick<UseInputBorderProps, "errorBorderColor">,
    ThemeProps<ToggleStyle> {}

export const {
  component,
  PropsContext: TogglePropsContext,
  usePropsContext: useTogglePropsContext,
  withProvider,
  useRootComponentProps,
} = createSlotComponent<ToggleProps, ToggleStyle>("toggle", toggleStyle)

/**
 * `Toggle` is a two-state button that can be either on or off.
 *
 * @see https://yamada-ui.com/components/toggle
 */
export const Toggle = withProvider<"button", ToggleProps>(
  <Y extends number | string = string>({
    errorBorderColor,
    icon,
    ...rest
  }: ToggleProps<Y>) => {
    const { getButtonProps, getInputProps } = useToggle(rest)
    const varProps = useInputBorder({ errorBorderColor })

    return (
      <>
        <Portal>
          <styled.input {...getInputProps()} />
        </Portal>

        <IconButton icon={icon} {...varProps} {...getButtonProps()} />
      </>
    )
  },
  "root",
)()
