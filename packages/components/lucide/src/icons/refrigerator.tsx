import { forwardRef } from "@yamada-ui/core"
import { Refrigerator as RefrigeratorIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RefrigeratorProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Refrigerator = forwardRef<RefrigeratorProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={RefrigeratorIcon} {...props} />,
)
