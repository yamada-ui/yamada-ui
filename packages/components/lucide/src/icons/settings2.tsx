import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Settings2 as LucideSettings2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Settings2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Settings2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideSettings2Icon} {...props} />,
)

/**
 * @deprecated Use `Settings2Icon` instead.
 */
export const Settings2 = Settings2Icon
