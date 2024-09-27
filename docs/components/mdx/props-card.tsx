import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Tag,
  Text,
  isUndefined,
} from "@yamada-ui/react"
import type { CardProps } from "@yamada-ui/react"
import type { FC } from "react"
import { Link } from "./link"
import { TextWithCode } from "components/typography"
import { useI18n } from "contexts"

export interface PropsCardProps extends CardProps {
  id: string
  name: string
  type?: string
  required?: boolean
  description?: string
  deprecated?: string
  defaultValue?: string
  docs?: string
}

export const PropsCard: FC<PropsCardProps> = ({
  id,
  name,
  type,
  required,
  description,
  deprecated,
  defaultValue,
  docs,
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

        {!isUndefined(deprecated) ? (
          <Tag colorScheme="neutral" size="sm">
            {t("component.props-card.deprecated")}
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
        {!isUndefined(description) ? (
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

        {!isUndefined(deprecated) ? (
          <>
            <Text
              lineHeight="1.5rem"
              color="muted"
              fontWeight="medium"
              fontSize="sm"
            >
              {t("component.props-card.deprecated")}
            </Text>

            <TextWithCode whiteSpace="pre-line">{deprecated}</TextWithCode>
          </>
        ) : null}

        {!isUndefined(type) ? (
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

        {!isUndefined(defaultValue) ? (
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

        {!isUndefined(docs) ? (
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
