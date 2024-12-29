import type { HTMLUIProps, ThemeProps } from "../../core"
import type { CenterStyle } from "./center.style"
import { createComponent } from "../../core"
import { centerStyle } from "./center.style"

export interface CenterProps extends HTMLUIProps, ThemeProps<CenterStyle> {}

export const {
  PropsContext: CenterPropsContext,
  usePropsContext: useCenterPropsContext,
  withContext,
} = createComponent<CenterProps, CenterStyle>("center", centerStyle)

/**
 * `Center` is a component that aligns the child elements in the center within the component.
 *
 * @see Docs https://yamada-ui.com/components/layouts/center
 */
export const Center = withContext("div", {
  base: {
    display: "flex",
    placeContent: "center",
    placeItems: "center",
  },
})()
