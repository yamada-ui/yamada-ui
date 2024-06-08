import { forwardRef } from "@yamada-ui/core"
import { Divide as DivideIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DivideProps = LucideIconProps

/**
 * `Divide` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Divide = forwardRef<DivideProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DivideIcon} {...props} />
))
