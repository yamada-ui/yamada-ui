"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UsersRoundCollaboration as OriginalUsersRoundCollaborationIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UsersRoundCollaborationIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UsersRoundCollaborationIcon = component(Icon)({
  as: OriginalUsersRoundCollaborationIcon,
}) as Component<"svg", IconProps>
