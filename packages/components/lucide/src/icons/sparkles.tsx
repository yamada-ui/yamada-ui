import { forwardRef } from "@yamada-ui/core"
import { Sparkles as SparklesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SparklesProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Sparkles = forwardRef<SparklesProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SparklesIcon} {...props} />
))
