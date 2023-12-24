import type { FlexProps } from "@yamada-ui/react"
import { Avatar, Wrap } from "@yamada-ui/react"
import type { FC } from "react"
import { NextLink } from "components/navigation"
import { CONSTANT } from "constant"

export type ContributorsProps = FlexProps

export const Contributors: FC<ContributorsProps> = ({ ...rest }) => {
  return (
    <Wrap gap="sm" {...rest}>
      {CONSTANT.CONTRIBUTORS.map(({ id, name, icon, url }) => (
        <NextLink key={id} href={url} isExternal>
          <Avatar name={name} src={icon} />
        </NextLink>
      ))}
    </Wrap>
  )
}
