"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Workflow as OriginalWorkflowIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WorkflowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WorkflowIcon = component(Icon)({
  as: OriginalWorkflowIcon,
}) as Component<"svg", IconProps>
