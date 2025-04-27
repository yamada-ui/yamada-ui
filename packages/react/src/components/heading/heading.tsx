import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { HeadingStyle } from "./heading.style"
import { createComponent } from "../../core"
import { headingStyle } from "./heading.style"

export interface HeadingProps
  extends HTMLStyledProps<"h1">,
    ThemeProps<HeadingStyle> {}

export const {
  PropsContext: HeadingPropsContext,
  usePropsContext: useHeadingPropsContext,
  withContext,
} = createComponent<HeadingProps, HeadingStyle>("heading", headingStyle)

/**
 * `Heading` is a component that represents section headings. By default, it renders an `h1` element.
 *
 * @see https://yamada-ui.com/components/heading
 */
export const Heading = withContext("h1")()
