import { forwardRef } from "@yamada-ui/core"
import { TestTube as TestTubeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TestTubeProps = LucideIconProps

/**
 * `TestTube` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TestTube = forwardRef<TestTubeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TestTubeIcon} {...props} />
))
