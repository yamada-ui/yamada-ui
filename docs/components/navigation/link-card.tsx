import type { CardProps, StringLiteral } from "@yamada-ui/react"
import {
  Card,
  CardBody,
  CardHeader,
  forwardRef,
  Heading,
} from "@yamada-ui/react"
import Link from "next/link"
import type { ReactNode } from "react"
import { memo } from "react"
import { Label } from "components/data-display"
import { TextWithCode } from "components/typography"
import { usePage } from "contexts/page-context"

export type LinkCardProps = CardProps & {
  href: string
  title: ReactNode
  label: StringLiteral
  description: ReactNode
  with_description?: boolean
}

export const LinkCard = memo(
  forwardRef<LinkCardProps, "div">(
    (
      { title, label, description, href, with_description = true, ...rest },
      ref,
    ) => {
      const { documentMap } = usePage()

      if (href.startsWith("/")) {
        const document = documentMap.find(({ slug }) => slug === href)

        if (document) {
          title ??= document.title
          label ??= document.label
          description ??= document.description
        }
      }

      return (
        <Card
          as={Link}
          ref={ref}
          href={href}
          variant="outline"
          h={with_description ? { base: "40", md: "auto" } : "auto"}
          size="normal"
          bg={["gray.100", "whiteAlpha.50"]}
          _focus={{ outline: "none" }}
          _focusVisible={{ boxShadow: "outline" }}
          _hover={{ bg: ["gray.200", "whiteAlpha.200"] }}
          _active={{ bg: ["gray.300", "whiteAlpha.300"] }}
          transitionProperty="colors"
          transitionDuration="normal"
          {...rest}
        >
          <CardHeader
            as="div"
            pt="md"
            pb={!with_description ? "md" : undefined}
            gap="sm"
          >
            <Heading size="md" noOfLines={1}>
              {title}
            </Heading>

            <Label>{label}</Label>
          </CardHeader>

          {with_description ? (
            <CardBody as="div" pt="md">
              <TextWithCode color="muted" noOfLines={3}>
                {description}
              </TextWithCode>
            </CardBody>
          ) : null}
        </Card>
      )
    },
  ),
)
