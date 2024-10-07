import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { WholeWord as WholeWordIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WholeWord` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WholeWord = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WholeWordIcon} {...props} />
))
