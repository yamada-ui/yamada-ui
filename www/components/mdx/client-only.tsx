"use client"

import { getComponent } from "./get-component"

export interface ClientOnlyProps {
  lang?: string
  code: string
  functional?: boolean
}

export function ClientOnly({
  lang = "tsx",
  code,
  functional,
}: ClientOnlyProps) {
  const component = getComponent(code, { lang, functional })

  return component
}
