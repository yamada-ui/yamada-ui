import { forwardRef } from "@yamada-ui/core"
import { Workflow as WorkflowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WorkflowProps = LucideIconProps

/**
 * `Workflow` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Workflow = forwardRef<WorkflowProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WorkflowIcon} {...props} />
))
