"use client"

import type {
  ButtonProps,
  HTMLRefAttributes,
  IconButtonProps,
  LinkProps,
  Merge,
} from "@yamada-ui/react"
import type { FC } from "react"
import type { LinkProps as OriginalLinkProps } from "@/i18n"
import { Button, IconButton, Link } from "@yamada-ui/react"
import { Link as OriginalLink } from "@/i18n"

export interface NextLinkProps extends Omit<
  Merge<OriginalLinkProps, Omit<LinkProps, "href">>,
  "as"
> {}

export const NextLink: FC<NextLinkProps> = ({ href, children, ...rest }) => {
  return (
    <Link colorScheme="mono" asChild {...rest}>
      <OriginalLink href={href}>{children}</OriginalLink>
    </Link>
  )
}

export interface NextLinkButtonProps
  extends
    Omit<Merge<OriginalLinkProps, ButtonProps>, "as" | "ref">,
    HTMLRefAttributes<"a"> {
  external?: boolean
}

export const NextLinkButton: FC<NextLinkButtonProps> = ({
  external,
  ...rest
}) => {
  return (
    <Button
      ref={null}
      as={OriginalLink}
      rel={external ? "noopener" : undefined}
      target={external ? "_blank" : undefined}
      {...rest}
    />
  )
}

export interface NextLinkIconButtonProps
  extends
    Omit<Merge<OriginalLinkProps, IconButtonProps>, "as" | "ref">,
    HTMLRefAttributes<"a"> {
  external?: boolean
}

export const NextLinkIconButton: FC<NextLinkIconButtonProps> = ({
  external,
  ...rest
}) => {
  return (
    <IconButton
      as={OriginalLink}
      rel={external ? "noopener" : undefined}
      target={external ? "_blank" : undefined}
      {...rest}
    />
  )
}
