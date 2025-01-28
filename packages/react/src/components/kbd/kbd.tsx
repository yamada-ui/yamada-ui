import type { HTMLUIProps, ThemeProps } from "../../core"
import type { KbdStyle } from "./kbd.style"
import { createComponent } from "../../core"
import { kbdStyle } from "./kbd.style"

export interface KbdProps extends HTMLUIProps<"kbd">, ThemeProps<KbdStyle> {}

export const {
  PropsContext: KbdPropsContext,
  usePropsContext: useKbdPropsContext,
  withContext,
} = createComponent<KbdProps, KbdStyle>("kbd", kbdStyle)

/**
 * `Kbd` is a component that represents keyboard input.
 *
 * @see Docs https://yamada-ui.com/components/data-display/kbd
 */
export const Kbd = withContext("kbd")()
