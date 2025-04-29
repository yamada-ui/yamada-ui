import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { MarkStyle } from "./mark.style"
import { createComponent } from "../../core"
import { markStyle } from "./mark.style"

export interface MarkProps
  extends HTMLStyledProps<"mark">,
    ThemeProps<MarkStyle> {}

export const {
  PropsContext: MarkPropsContext,
  usePropsContext: useMarkPropsContext,
  withContext,
} = createComponent<MarkProps, MarkStyle>("mark", markStyle)

export const Mark = withContext<"mark", MarkProps>("mark")()
