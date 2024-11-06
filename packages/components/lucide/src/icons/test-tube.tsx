import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TestTube as LucideTestTubeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TestTubeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TestTubeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTestTubeIcon} {...props} />
))

/**
 * @deprecated Use `TestTubeIcon` instead.
 */
export const TestTube = TestTubeIcon
