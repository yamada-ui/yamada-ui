import { forwardRef } from "@yamada-ui/core"
import { Codesandbox as CodesandboxIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CodesandboxProps = LucideIconProps

/**
 * `Codesandbox` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Codesandbox = forwardRef<CodesandboxProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CodesandboxIcon} {...props} />
))
