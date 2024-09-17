import { Avatar, Wrap } from "@yamada-ui/react"
import type { FlexProps } from "@yamada-ui/react"
import { NextLink } from "components/navigation"
import { CONSTANT } from "constant"
import type { FC } from "react"

export interface ContributorsProps extends FlexProps {}

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
