"use client"

import { getComponent } from "./get-component"

export interface ClientOnlyProps {
  code: string
  functional?: boolean
  lang?: string
}

export function ClientOnly({
  lang = "tsx",
  code,
  functional,
}: ClientOnlyProps) {
  const component = getComponent(code, { lang, functional })

  return component
}
