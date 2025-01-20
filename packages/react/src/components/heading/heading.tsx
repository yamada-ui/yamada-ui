import type { HTMLUIProps, ThemeProps } from "../../core"
import type { HeadingStyle } from "./heading.style"
import { createComponent } from "../../core"
import { headingStyle } from "./heading.style"

export interface HeadingProps
  extends HTMLUIProps<"h1">,
    ThemeProps<HeadingStyle> {}

export const {
  PropsContext: HeadingPropsContext,
  usePropsContext: useHeadingPropsContext,
  withContext,
} = createComponent<HeadingProps, HeadingStyle>("heading", headingStyle)

/**
 * `Heading` is a component that represents section headings. By default, it renders an `h1` element.
 *
 * @see Docs https://yamada-ui.com/components/typography/heading
 */
export const Heading = withContext("h1")()
