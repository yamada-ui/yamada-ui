import { forwardRef } from "@yamada-ui/core"
import { Dog as DogIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DogProps = LucideIconProps

/**
 * `Dog` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Dog = forwardRef<DogProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DogIcon} {...props} />
))
