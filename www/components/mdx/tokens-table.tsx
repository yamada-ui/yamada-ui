import type { ThemeToken } from "@yamada-ui/react"
import {
  Box,
  Code,
  defaultTheme,
  isArray,
  isObject,
  isString,
  NativeTable,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"

export interface TokensTableProps {
  token: ThemeToken
}

export function TokensTable({ token }: TokensTableProps) {
  const t = useTranslations("component.tokensTable")
  const tokens = defaultTheme[token]
  const keyframes = token === "keyframes"

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
              {t("token")}
            </NativeTable.Th>
            <NativeTable.Th fontSize="sm" textAlign="start" whiteSpace="nowrap">
              {t("value")}
            </NativeTable.Th>
          </NativeTable.Tr>
        </NativeTable.Thead>

        <NativeTable.Tbody>
          {Object.entries(tokens).map(([token, value], index) => {
            if (isObject(value) && !keyframes) {
              return Object.entries(value).map(([key, value], index) => {
                return (
                  <Row key={index} token={`${token}.${key}`} value={value} />
                )
              })
            } else {
              return <Row key={index} token={token} value={value} />
            }
          })}
        </NativeTable.Tbody>
      </NativeTable.Root>
    </Box>
  )
}

export interface RowProps {
  token: string
  value: any
}

export function Row({ token, value }: RowProps) {
  return (
    <NativeTable.Tr>
      <NativeTable.Td>
        <Code variant="surface" verticalAlign="middle" whiteSpace="nowrap">
          {token}
        </Code>
      </NativeTable.Td>
      <NativeTable.Td>
        <Code variant="surface" verticalAlign="middle">
          {isObject(value) || isArray(value)
            ? JSON.stringify(value)
                .replace(/"(\w+)":/g, " $1: ")
                .replace(/}$/, " }")
            : isString(value)
              ? `\"${value.replace(/"/g, "'")}\"`
              : value}
        </Code>
      </NativeTable.Td>
    </NativeTable.Tr>
  )
}
