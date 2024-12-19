import type { FC } from "../../core"
import type { StackProps } from "./stack"
import { cx } from "../../utils"
import { Stack } from "./stack"

export interface VStackProps extends StackProps {}

/**
 * `VStack` is a component that groups elements and provides space between child elements.
 *
 * @see Docs https://yamada-ui.com/components/layouts/stack
 */
export const VStack: FC<VStackProps> = ({ className, ...rest }) => (
  <Stack
    className={cx("ui-stack--vertical", className)}
    align="stretch"
    direction="column"
    w="100%"
    {...rest}
  />
)

VStack.__ui__ = "VStack"
