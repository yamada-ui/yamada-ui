import { forwardRef } from "@yamada-ui/core"
import { Github as GithubIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GithubProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Github = forwardRef<GithubProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GithubIcon} {...props} />
))
