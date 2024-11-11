import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { Gamepad2 as OriginalGamepad2 } from "lucide-react"

/**
 * `Gamepad2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Gamepad2Icon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalGamepad2} {...props} />
))

/**
 * `Gamepad2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `Gamepad2Icon` instead.
 */
export const Gamepad2 = Gamepad2Icon
