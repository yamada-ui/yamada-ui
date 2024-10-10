import type { CardProps } from "@yamada-ui/react"
import type { FC } from "react"
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  isUndefined,
  Tag,
  Text,
} from "@yamada-ui/react"
import { TextWithCode } from "components/typography"
import { useI18n } from "contexts"
import { Link } from "./link"

export interface PropsCardProps extends CardProps {
  id: string
  name: string
  type?: string
  defaultValue?: string
  deprecated?: string
  description?: string
  docs?: string
  required?: boolean
}

export const PropsCard: FC<PropsCardProps> = ({
  id,
  type,
  name,
  defaultValue,
  deprecated,
  description,
  docs,
  required,
}) => {
  const { t } = useI18n()

  return (
    <Card
      id={id}
      css={{ scrollMarginBlock: "6rem" }}
      variant="outline"
      mt="8"
      position="relative"
    >
      <CardHeader
        bg={["white", "black"]}
        gap="2"
        left="2"
        position="absolute"
        px="2"
        py="0"
        top="0"
        transform="translateY(-50%)"
      >
        <Heading as="h4" apply="mdx.code" fontSize="lg" fontWeight="medium">
          {name}
        </Heading>

        {required ? (
          <Tag colorScheme="danger" size="sm">
            {t("component.props-card.required")}
          </Tag>
        ) : null}

        {!isUndefined(deprecated) ? (
          <Tag colorScheme="neutral" size="sm">
            {t("component.props-card.deprecated")}
          </Tag>
        ) : null}
      </CardHeader>

      <CardBody
        columnGap="6"
        display="grid"
        gridTemplateColumns="auto 1fr"
        pt="6"
        rowGap="4"
      >
        {!isUndefined(description) ? (
          <>
            <Text
              color="muted"
              fontSize="sm"
              fontWeight="medium"
              lineHeight="1.5rem"
            >
              {t("component.props-card.description")}
            </Text>

            <TextWithCode whiteSpace="pre-line">{description}</TextWithCode>
          </>
        ) : null}

        {!isUndefined(deprecated) ? (
          <>
            <Text
              color="muted"
              fontSize="sm"
              fontWeight="medium"
              lineHeight="1.5rem"
            >
              {t("component.props-card.deprecated")}
            </Text>

            <TextWithCode whiteSpace="pre-line">{deprecated}</TextWithCode>
          </>
        ) : null}

        {!isUndefined(type) ? (
          <>
            <Text
              color="muted"
              fontSize="sm"
              fontWeight="medium"
              lineHeight="1.5rem"
            >
              {t("component.props-card.type")}
            </Text>

            <Text as="code" apply="mdx.code">
              {type}
            </Text>
          </>
        ) : null}

        {!isUndefined(defaultValue) ? (
          <>
            <Text
              color="muted"
              fontSize="sm"
              fontWeight="medium"
              lineHeight="1.5rem"
            >
              {t("component.props-card.default")}
            </Text>

            <Text as="code" apply="mdx.code">
              {defaultValue}
            </Text>
          </>
        ) : null}

        {!isUndefined(docs) ? (
          <>
            <Text
              color="muted"
              fontSize="sm"
              fontWeight="medium"
              lineHeight="1.5rem"
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
