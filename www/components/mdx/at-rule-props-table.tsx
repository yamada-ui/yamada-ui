import type { ReactNode } from "react"
import type { Config } from "./style-props-table"
import { Box, Code, isObject, NativeTable, toKebabCase } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { useMemo } from "react"
import styles from "@/data/styles.json"
import { NextLink } from "../next-link"

function createRow(prop: string, { docs, token }: Config) {
  let value: ReactNode

  const [name, { see } = {}] =
    (isObject(docs) ? Object.entries(docs)[0] : undefined) ?? []

  if (name && see) {
    value = (
      <Code
        as="a"
        href={see}
        rel="noopener"
        target="_blank"
        variant="surface"
        verticalAlign="middle"
        whiteSpace="nowrap"
      >
        @{name}
      </Code>
    )
  }

  return {
    prop,
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

export function AtRulePropsTable() {
  const t = useTranslations("component.stylePropsTable")
  const rows = useMemo(() => {
    const data = styles.atRule as { [key: string]: Config }

    return Object.entries(data)
      .map(([prop, config]) => {
        return createRow(prop, config)
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
