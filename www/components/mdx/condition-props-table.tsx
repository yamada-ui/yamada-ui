import type { Dict } from "@yamada-ui/react"
import { Box, Code, NativeTable } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { useMemo } from "react"
import pseudoClasses from "@/data/pseudo-classes.json"
import pseudoElements from "@/data/pseudo-elements.json"
import selectors from "@/data/selectors.json"

export interface ConditionPropsTable {
  type: string
}

export function ConditionPropsTable({ type }: ConditionPropsTable) {
  const t = useTranslations("component.stylePropsTable")
  const rows = useMemo(() => {
    let conditions: Dict<string> = {}

    if (type === "pseudoElement") conditions = pseudoElements
    if (type === "pseudoClass") conditions = pseudoClasses
    if (type === "selector") conditions = selectors

    return Object.entries(conditions)
      .map(([prop, value]) => ({
        prop,
        value: (
          <Code lineClamp={3} w="fit-content">
            {value}
          </Code>
        ),
      }))
      .sort((a, b) => a.prop.localeCompare(b.prop))
  }, [type])

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
          </NativeTable.Tr>
        </NativeTable.Thead>

        <NativeTable.Tbody>
          {rows.map(({ prop, value }, index) => (
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
              <NativeTable.Td>{value}</NativeTable.Td>
            </NativeTable.Tr>
          ))}
        </NativeTable.Tbody>
      </NativeTable.Root>
    </Box>
  )
}
