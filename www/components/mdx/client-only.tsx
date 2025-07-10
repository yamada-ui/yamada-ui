"use client"

import { getComponent } from "./get-component"

export interface ClientOnlyProps {
  code: string
  lang?: string
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
