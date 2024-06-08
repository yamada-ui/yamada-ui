import { forwardRef } from "@yamada-ui/core"
import { TestTubes as TestTubesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TestTubesProps = LucideIconProps

/**
 * `TestTubes` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TestTubes = forwardRef<TestTubesProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TestTubesIcon} {...props} />
))
