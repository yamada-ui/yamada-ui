import type { HTMLUIProps } from "../../core"
import { createComponent } from "../../core"

export interface BoxProps extends HTMLUIProps {}

export const {
  PropsContext: BoxPropsContext,
  usePropsContext: useBoxPropsContext,
  withContext,
} = createComponent<BoxProps>("box")

/**
 * `Box` is the most abstract component on which all other components are built. By default, it renders a `div` element.
 *
 * @see Docs https://yamada-ui.com/components/layouts/box
 */
export const Box = withContext("div")()
