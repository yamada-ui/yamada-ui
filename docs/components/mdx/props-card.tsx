import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  type CardProps,
  Tag,
  Text,
} from "@yamada-ui/react"
import type { FC } from "react"
import { Link } from "./link"
import { TextWithCode } from "components/typography"
import { useI18n } from "contexts/i18n-context"

export type PropsCardProps = CardProps & {
  name: string
  type?: string
  required?: boolean
  description?: string
  defaultValue?: string
  docs?: string
}

export const PropsCard: FC<PropsCardProps> = ({
  name,
  type,
  required,
  description,
  defaultValue,
  docs,
}) => {
  const { t } = useI18n()

  return (
    <Card variant="outline" mt="8" position="relative">
      <CardHeader
        position="absolute"
        top="0"
        left="2"
        transform="translateY(-50%)"
        py="0"
        px="2"
        gap="2"
        bg={["white", "black"]}
      >
        <Heading as="h4" fontSize="lg" fontWeight="medium" apply="mdx.code">
          {name}
        </Heading>

        {required ? (
          <Tag colorScheme="danger" size="sm">
            {t("component.props-card.required")}
          </Tag>
        ) : null}
      </CardHeader>

      <CardBody
        display="grid"
        gridTemplateColumns="auto 1fr"
        pt="6"
        rowGap="4"
        columnGap="6"
      >
        {typeof description !== "undefined" ? (
          <>
            <Text
              lineHeight="1.5rem"
              color="muted"
              fontWeight="medium"
              fontSize="sm"
            >
              {t("component.props-card.description")}
            </Text>

            <TextWithCode whiteSpace="pre-line">{description}</TextWithCode>
          </>
        ) : null}

        {typeof type !== "undefined" ? (
          <>
            <Text
              lineHeight="1.5rem"
              color="muted"
              fontWeight="medium"
              fontSize="sm"
            >
              {t("component.props-card.type")}
            </Text>

            <Text as="code" apply="mdx.code">
              {type}
            </Text>
          </>
        ) : null}

        {typeof defaultValue !== "undefined" ? (
          <>
            <Text
              lineHeight="1.5rem"
              color="muted"
              fontWeight="medium"
              fontSize="sm"
            >
              {t("component.props-card.default")}
            </Text>

            <Text as="code" apply="mdx.code">
              {defaultValue}
            </Text>
          </>
        ) : null}

        {typeof docs !== "undefined" ? (
          <>
            <Text
              lineHeight="1.5rem"
              color="muted"
              fontWeight="medium"
              fontSize="sm"
            >
              {t("component.props-card.docs")}
            </Text>

            <Link href={docs} isExternal>
              {docs}
            </Link>
          </>
        ) : null}
      </CardBody>
    </Card>
  )
}
