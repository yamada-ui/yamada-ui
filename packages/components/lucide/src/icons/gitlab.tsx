import { forwardRef } from "@yamada-ui/core"
import { Gitlab as GitlabIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GitlabProps = LucideIconProps

/**
 * `Gitlab` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Gitlab = forwardRef<GitlabProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GitlabIcon} {...props} />
))
