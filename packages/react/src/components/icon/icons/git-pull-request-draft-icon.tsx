"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GitPullRequestDraft as OriginalGitPullRequestDraftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GitPullRequestDraftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GitPullRequestDraftIcon = component(Icon)({
  as: OriginalGitPullRequestDraftIcon,
}) as Component<"svg", IconProps>
