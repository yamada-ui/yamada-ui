import { forwardRef } from "@yamada-ui/core"
import { Brain as BrainIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BrainProps = LucideIconProps

/**
 * `Brain` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Brain = forwardRef<BrainProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BrainIcon} {...props} />
))
