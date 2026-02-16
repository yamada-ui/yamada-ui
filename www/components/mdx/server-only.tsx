import { getComponent } from "./get-component"

export interface ServerOnlyProps {
  lang?: string
  code: string
  functional?: boolean
}

export function ServerOnly({
  lang = "tsx",
  code,
  functional,
}: ServerOnlyProps) {
  const component = getComponent(code, { lang, functional })

  return component
}
