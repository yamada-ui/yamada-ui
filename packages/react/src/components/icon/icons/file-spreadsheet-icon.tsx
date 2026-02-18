"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileSpreadsheet as OriginalFileSpreadsheetIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileSpreadsheetIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileSpreadsheetIcon = component(Icon)({
  as: OriginalFileSpreadsheetIcon,
}) as Component<"svg", IconProps>
