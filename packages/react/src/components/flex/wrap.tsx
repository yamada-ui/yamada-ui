import type { FC } from "../../core"
import type { FlexProps } from "./flex"
import { Flex } from "./flex"

export interface WrapProps extends FlexProps {}

/**
 * `Wrap` is a component that has `wrap` set on `Flex`. It inherits convenient style shorthand from `Flex`.
 *
 * @see Docs https://yamada-ui.com/components/layouts/wrap
 */
export const Wrap: FC<WrapProps> = (props) => <Flex wrap="wrap" {...props} />

Wrap.__ui__ = "Wrap"
