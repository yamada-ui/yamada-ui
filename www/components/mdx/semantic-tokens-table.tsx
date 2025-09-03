import { Box, defaultTheme, isObject, NativeTable } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { Row } from "./tokens-table"

export interface SemanticTokensTableProps {
  token: Exclude<keyof typeof defaultTheme.semanticTokens, "colorSchemes">
  fractional?: boolean
}

export function SemanticTokensTable({
  fractional,
  token,
}: SemanticTokensTableProps) {
  const t = useTranslations("component.tokensTable")
  const sizes = token === "sizes"
  const semanticTokens = sizes
    ? fractional
      ? Object.fromEntries(
          Object.entries(defaultTheme.semanticTokens.sizes).filter(([key]) =>
            key.includes("/"),
          ),
        )
      : Object.fromEntries(
          Object.entries(defaultTheme.semanticTokens.sizes).filter(
            ([key]) => !key.includes("/"),
          ),
        )
    : defaultTheme.semanticTokens[token]

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
          {Object.entries(semanticTokens).map(
            ([semanticToken, semanticValue], index) => {
              if (isObject(semanticValue)) {
                return Object.entries(semanticValue).map(
                  ([key, value], index) => {
                    return (
                      <Row
                        key={index}
                        token={`${semanticToken}.${key}`}
                        value={value}
                      />
                    )
                  },
                )
              } else {
                return (
                  <Row
                    key={index}
                    token={semanticToken}
                    value={semanticValue}
                  />
                )
              }
            },
          )}
        </NativeTable.Tbody>
      </NativeTable.Root>
    </Box>
  )
}
