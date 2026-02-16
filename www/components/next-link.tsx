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

export interface NextLinkProps extends LinkProps {}

export const NextLink: FC<NextLinkProps> = ({ ...rest }) => {
  return <Link as={OriginalLink} colorScheme="mono" {...rest} />
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
