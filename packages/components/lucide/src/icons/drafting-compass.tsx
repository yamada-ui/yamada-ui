import { forwardRef } from "@yamada-ui/core"
import { DraftingCompass as DraftingCompassIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DraftingCompassProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DraftingCompass = forwardRef<DraftingCompassProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={DraftingCompassIcon} {...props} />,
)
