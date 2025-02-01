import type { HTMLUIProps, ThemeProps } from "../../core"
import type { EmStyle } from "./em.style"
import { createComponent } from "../../core"
import { emStyle } from "./em.style"

export interface EmProps extends HTMLUIProps<"em">, ThemeProps<EmStyle> {}

export const {
  PropsContext: EmPropsContext,
  usePropsContext: useEmPropsContext,
  withContext,
} = createComponent<EmProps, EmStyle>("em", emStyle)

/**
 * `Em` is a component that represents emphasized text. By default, it renders a `em` element.
 *
 * @see Docs https://yamada-ui.com/components/typography/em
 */
export const Em = withContext("em")()
