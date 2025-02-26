import type { HTMLUIProps, ThemeProps } from "../../core"
import type { MarkStyle } from "./mark.style"
import { createComponent } from "../../core"
import { markStyle } from "./mark.style"

export interface MarkProps extends HTMLUIProps<"mark">, ThemeProps<MarkStyle> {}

export const {
  PropsContext: MarkPropsContext,
  usePropsContext: useMarkPropsContext,
  withContext,
} = createComponent<MarkProps, MarkStyle>("mark", markStyle)

export const Mark = withContext<"mark", MarkProps>("mark")()
