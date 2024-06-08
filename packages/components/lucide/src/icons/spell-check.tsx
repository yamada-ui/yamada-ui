import { forwardRef } from "@yamada-ui/core"
import { SpellCheck as SpellCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SpellCheckProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SpellCheck = forwardRef<SpellCheckProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SpellCheckIcon} {...props} />
))
