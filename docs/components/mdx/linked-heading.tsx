import type { HeadingProps } from "@yamada-ui/react"
import type { FC } from "react"
import { LinkIcon } from "@yamada-ui/lucide"
import { Link, Text } from "@yamada-ui/react"

export interface LinkedHeadingProps extends HeadingProps {}

export const LinkedHeading: FC<LinkedHeadingProps> = ({
  id,
  children,
  ...rest
}) => {
  return (
    <Text
      id={id}
      css={{ scrollMarginBlock: "6rem" }}
      _hover={{
        base: { "& > a": { opacity: 1 } },
        md: { "& > a": { opacity: 0 } },
      }}
      {...rest}
    >
      {children}

      {id ? (
        <Link
          href={`#${id}`}
          aria-label="anchor"
          color="link"
          display={{ base: "inline-block", md: "none" }}
          opacity="0"
          ps="2"
          tabIndex={-1}
          _focus={{ outline: "none" }}
          _focusVisible={{ boxShadow: "none" }}
          _hover={{ opacity: 1 }}
        >
          <LinkIcon fontSize="0.75em" />
        </Link>
      ) : null}
    </Text>
  )
}
