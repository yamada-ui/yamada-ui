import { forwardRef } from "@yamada-ui/core"
import { Component as ComponentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ComponentProps = LucideIconProps

/**
 * `Component` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Component = forwardRef<ComponentProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ComponentIcon} {...props} />
))
