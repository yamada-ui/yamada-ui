import type { HeadingProps } from "@yamada-ui/react"
import type { FC } from "react"
import { Link as LinkIcon } from "@yamada-ui/lucide"
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
          _focus={{ outline: "none" }}
          _focusVisible={{ boxShadow: "none" }}
          _hover={{ opacity: 1 }}
          color="link"
          display={{ base: "inline-block", md: "none" }}
          href={`#${id}`}
          opacity="0"
          ps="2"
          tabIndex={-1}
          aria-label="anchor"
        >
          <LinkIcon fontSize="0.875em" />
        </Link>
      ) : null}
    </Text>
  )
}
