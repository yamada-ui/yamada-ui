import { forwardRef } from "@yamada-ui/core"
import { Code as CodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CodeProps = LucideIconProps

/**
 * `Code` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Code = forwardRef<CodeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CodeIcon} {...props} />
))
