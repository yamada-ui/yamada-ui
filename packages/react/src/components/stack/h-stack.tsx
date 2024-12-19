import type { FC } from "../../core"
import type { StackProps } from "./stack"
import { cx } from "../../utils"
import { Stack } from "./stack"

export interface HStackProps extends StackProps {}

/**
 * `HStack` is a component that groups elements and provides space between child elements.
 *
 * @see Docs https://yamada-ui.com/components/layouts/stack
 */
export const HStack: FC<HStackProps> = ({ className, ...rest }) => (
  <Stack
    className={cx("ui-stack--horizontal", className)}
    align="center"
    direction="row"
    {...rest}
  />
)

HStack.__ui__ = "HStack"
