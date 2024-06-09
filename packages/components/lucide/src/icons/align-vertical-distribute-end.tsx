import { forwardRef } from "@yamada-ui/core"
import { AlignVerticalDistributeEnd as AlignVerticalDistributeEndIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlignVerticalDistributeEndProps = LucideIconProps

/**
 * `AlignVerticalDistributeEnd` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalDistributeEnd = forwardRef<
  AlignVerticalDistributeEndProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={AlignVerticalDistributeEndIcon} {...props} />
))
