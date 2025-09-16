import type { ThemeToken } from "@yamada-ui/react"
import type { ReactNode } from "react"
import {
  Box,
  Code,
  isObject,
  NativeTable,
  toKebabCase,
  VStack,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { useMemo } from "react"
import styles from "@/data/styles.json"
import { NextLink } from "../next-link"

function createRow(prop: string, { as, docs, properties, token }: Config) {
  let value: ReactNode

  if (as) {
    const property = prop.startsWith("--") ? prop : toKebabCase(prop)
    const href = isObject(docs) ? docs[property]?.see : undefined

    if (href) {
      value = (
        <Code
          as="a"
          href={href}
          rel="noopener"
          target="_blank"
          variant="surface"
          verticalAlign="middle"
          whiteSpace="nowrap"
        >
          {property}
        </Code>
      )
    } else {
      value = property
    }
  } else if (properties) {
    value = (
      <VStack alignItems="flex-start" gap="xs">
        {properties.map((property, index) => {
          property = property.startsWith("--")
            ? property
            : toKebabCase(property)
          const href = isObject(docs) ? docs[property]?.see : undefined

          if (href) {
            return (
              <Code
                key={index}
                as="a"
                href={href}
                rel="noopener"
                target="_blank"
                variant="surface"
                verticalAlign="middle"
                whiteSpace="nowrap"
              >
                {property}
              </Code>
            )
          } else {
            return (
              <Code
                key={index}
                variant="surface"
                verticalAlign="middle"
                whiteSpace="nowrap"
              >
                {property}
              </Code>
            )
          }
        })}
      </VStack>
    )
  }

  return {
    token: token ? (
      <NextLink
        href={`/docs/theming/tokens/${toKebabCase(token)}`}
        colorScheme="mono"
      >
        {token}
      </NextLink>
    ) : undefined,
    value,
  }
}

export interface Doc {
  deprecated: boolean
  description: string
  experimental: boolean
  see?: string
}

export interface Docs {
  [key: string]: Doc
}

export interface Config {
  as?: boolean
  type?: string
  docs?: Docs | string
  properties?: string[]
  shorthands?: string[]
  token?: ThemeToken
}

export function StylePropsTable() {
  const t = useTranslations("component.stylePropsTable")
  const rows = useMemo(() => {
    return (["standard", "additional", "styled"] as const)
      .flatMap((type) => {
        const data = styles[type] as { [key: string]: Config }

        return Object.entries(data).flatMap(([prop, config]) => {
          const rows = [{ prop, ...createRow(prop, config) }]

          if (config.shorthands) {
            config.shorthands.forEach((shorthandProp) => {
              rows.push({ prop: shorthandProp, ...createRow(prop, config) })
            })
          }

          return rows
        })
      })
      .sort((a, b) => a.prop.localeCompare(b.prop))
  }, [])

  return (
    <Box my="lg">
      <NativeTable.Root
        variant="outline"
        withScrollArea
        scrollAreaProps={{
          borderWidth: "1px",
          rounded: "l2",
          whiteSpace: { base: "inherit", md: "nowrap" },
        }}
      >
        <NativeTable.Thead>
          <NativeTable.Tr>
            <NativeTable.Th fontSize="sm" textAlign="start" whiteSpace="nowrap">
              {t("prop")}
            </NativeTable.Th>
            <NativeTable.Th fontSize="sm" textAlign="start" whiteSpace="nowrap">
              {t("property")}
            </NativeTable.Th>
            <NativeTable.Th fontSize="sm" textAlign="start" whiteSpace="nowrap">
              {t("token")}
            </NativeTable.Th>
          </NativeTable.Tr>
        </NativeTable.Thead>

        <NativeTable.Tbody>
          {rows.map(({ prop, token, value }, index) => (
            <NativeTable.Tr key={index}>
              <NativeTable.Td>
                <Code
                  variant="surface"
                  verticalAlign="middle"
                  whiteSpace="nowrap"
                >
                  {prop}
                </Code>
              </NativeTable.Td>
              <NativeTable.Td>{value ?? "-"}</NativeTable.Td>
              <NativeTable.Td>{token ?? "-"}</NativeTable.Td>
            </NativeTable.Tr>
          ))}
        </NativeTable.Tbody>
      </NativeTable.Root>
    </Box>
  )
}
