import { forwardRef } from "@yamada-ui/core"
import { PoundSterling as PoundSterlingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PoundSterlingProps = LucideIconProps

/**
 * `PoundSterling` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PoundSterling = forwardRef<PoundSterlingProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PoundSterlingIcon} {...props} />,
)
