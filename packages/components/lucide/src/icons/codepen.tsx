import { forwardRef } from "@yamada-ui/core"
import { Codepen as CodepenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CodepenProps = LucideIconProps

/**
 * `Codepen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Codepen = forwardRef<CodepenProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CodepenIcon} {...props} />
))
