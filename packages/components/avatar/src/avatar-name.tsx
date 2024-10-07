import type { CSSUIObject, FC, HTMLUIProps } from "@yamada-ui/core"
import type { AvatarProps } from "./avatar"
import { ui } from "@yamada-ui/core"
import { useAvatarContext } from "./avatar"

const defaultFormat = (name: string) => {
  const names = name.trim().split(" ")
  const firstName = names[0] ?? ""
  const lastName = names.length > 1 ? names[names.length - 1] : ""

  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0)
}

export interface AvatarNameProps
  extends HTMLUIProps,
    Pick<AvatarProps, "format" | "name"> {}

export const AvatarName: FC<AvatarNameProps> = ({
  name,
  format = defaultFormat,
  ...rest
}) => {
  const styles = useAvatarContext()

  const css: CSSUIObject = { ...styles.name }

  return (
    <ui.div
      className="ui-avatar__name"
      aria-label={name}
      role="img"
      __css={css}
      {...rest}
    >
      {name ? format(name) : null}
    </ui.div>
  )
}

AvatarName.displayName = "AvatarName"
AvatarName.__ui__ = "AvatarName"
