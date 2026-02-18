"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CodeXml as OriginalCodeXmlIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CodeXmlIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CodeXmlIcon = component(Icon)({
  as: OriginalCodeXmlIcon,
}) as Component<"svg", IconProps>
