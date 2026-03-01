import { getComponent } from "./get-component"

export interface ServerOnlyProps {
  code: string
  functional?: boolean
  lang?: string
}

export function ServerOnly({
  lang = "tsx",
  code,
  functional,
}: ServerOnlyProps) {
  const component = getComponent(code, { lang, functional })

  return component
}
