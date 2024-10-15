import type {
  ButtonProps,
  IconButtonProps,
  Merge,
  LinkProps as UILinkProps,
} from "@yamada-ui/react"
import type { LinkProps } from "next/link"
import type { FC } from "react"
import { Button, IconButton, Link as UILink } from "@yamada-ui/react"
import Link from "next/link"

export interface NextLinkProps extends UILinkProps {}

export const NextLink: FC<NextLinkProps> = ({ ...rest }) => {
  return <UILink as={Link} {...rest} />
}

export interface NextLinkButtonProps
  extends Omit<Merge<LinkProps, ButtonProps>, "as"> {
  isExternal?: boolean
}

export const NextLinkButton: FC<NextLinkButtonProps> = ({
  isExternal,
  ...rest
}) => {
  return (
    <Button
      as={Link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener" : undefined}
      {...rest}
    />
  )
}

export interface NextLinkIconButtonProps
  extends Omit<Merge<LinkProps, IconButtonProps>, "as"> {
  isExternal?: boolean
}

export const NextLinkIconButton: FC<NextLinkIconButtonProps> = ({
  isExternal,
  ...rest
}) => {
  return (
    <IconButton
      as={Link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener" : undefined}
      {...rest}
    />
  )
}
