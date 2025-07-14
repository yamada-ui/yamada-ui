"use client"

import type { ReactElement } from "react"
import type {
  GenericsComponent,
  ThemeProps,
  WithoutThemeProps,
} from "../../core"
import type { IconButtonProps } from "../icon-button"
import type { UseInputBorderProps } from "../input"
import type { ToggleStyle } from "./toggle.style"
import type { UseToggleProps } from "./use-toggle"
import { createSlotComponent, styled } from "../../core"
import { IconButton } from "../icon-button"
import { useInputBorder } from "../input"
import { Portal } from "../portal"
import { toggleStyle } from "./toggle.style"
import { useToggle } from "./use-toggle"

export interface ToggleProps<Y extends string = string>
  extends Omit<
      WithoutThemeProps<IconButtonProps, ToggleStyle>,
      "aria-label" | "onChange" | "ref" | "value"
    >,
    UseToggleProps<Y>,
    Pick<UseInputBorderProps, "errorBorderColor">,
    ThemeProps<ToggleStyle> {}

const {
  component,
  PropsContext: TogglePropsContext,
  usePropsContext: useTogglePropsContext,
  withProvider,
  useRootComponentProps,
} = createSlotComponent<ToggleProps, ToggleStyle>("toggle", toggleStyle)

export {
  component,
  TogglePropsContext,
  useRootComponentProps,
  useTogglePropsContext,
}

/**
 * `Toggle` is a two-state button that can be either on or off.
 *
 * @see https://yamada-ui.com/components/toggle
 */
export const Toggle = withProvider<"button", ToggleProps>(
  ({ errorBorderColor, icon, ...rest }: ToggleProps) => {
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
)() as GenericsComponent<{
  <Y extends string = string>(props: ToggleProps<Y>): ReactElement
}>
