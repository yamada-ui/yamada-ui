import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PhilippinePeso as PhilippinePesoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PhilippinePeso` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhilippinePeso = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PhilippinePesoIcon} {...props} />,
)
