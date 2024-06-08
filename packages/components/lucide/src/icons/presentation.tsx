import { forwardRef } from "@yamada-ui/core"
import { Presentation as PresentationIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PresentationProps = LucideIconProps

/**
 * `Presentation` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Presentation = forwardRef<PresentationProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PresentationIcon} {...props} />,
)
