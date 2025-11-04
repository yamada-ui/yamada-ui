import type { Props } from "@/data"
import { Box, Code, Grid, NativeTable, Text } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { Fragment } from "react"
import { getProps, isNamespace, isSingle } from "@/utils/props"
import { mdToHtml } from "@/utils/string"
import { H3 } from "./heading"
import { Link } from "./link"

export interface PropsTableProps {
  name: string
  all?: boolean
  omit?: string[]
  pick?: string[]
}

export async function PropsTable({
  name,
  all = false,
  omit,
  pick,
}: PropsTableProps) {
  const data = await getProps(name, { omit, pick })
  const single = isSingle(data)
  const namespace = Object.values(data).some((data) => isNamespace(data))

  return Object.entries(data).map(([rootName, propsOrNamespace], index) => {
    if (isNamespace(propsOrNamespace)) {
      return Object.entries(propsOrNamespace)

        .map(([name, props], index) => {
          return (
            <Fragment key={index}>
              {!single ? (
                <H3>
                  {rootName}.{name}
                </H3>
              ) : null}
              <Table props={props} />
            </Fragment>
          )
        })
    } else if (!namespace || all) {
      return (
        <Fragment key={index}>
          {!single ? <H3>{rootName}</H3> : null}
          <Table props={propsOrNamespace} />
        </Fragment>
      )
    }
  })
}

interface TableProps {
  props: Props
}

function Table({ props }: TableProps) {
  const t = useTranslations("component.propsTable")

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
              {t("default")}
            </NativeTable.Th>
            <NativeTable.Th fontSize="sm" textAlign="start" whiteSpace="nowrap">
              {t("type")}
            </NativeTable.Th>
          </NativeTable.Tr>
        </NativeTable.Thead>

        <NativeTable.Tbody>
          {Object.entries(props).map(
            ([name, { type, defaultValue, description, see }], index) => {
              return (
                <NativeTable.Tr key={index}>
                  <NativeTable.Td>
                    <Code
                      variant="surface"
                      verticalAlign="middle"
                      whiteSpace="nowrap"
                    >
                      {name}
                    </Code>
                  </NativeTable.Td>
                  <NativeTable.Td>
                    {defaultValue ? (
                      <Code
                        variant="surface"
                        verticalAlign="middle"
                        whiteSpace="nowrap"
                      >
                        {defaultValue}
                      </Code>
                    ) : (
                      "-"
                    )}
                  </NativeTable.Td>
                  <NativeTable.Td>
                    <Grid
                      gap="xs"
                      minW={{ base: "auto", md: "lg" }}
                      whiteSpace="wrap"
                    >
                      <Code
                        variant="surface"
                        justifySelf="flex-start"
                        verticalAlign="middle"
                      >
                        {type}
                      </Code>

                      <Text color="fg.emphasized" lineHeight="1.8">
                        {mdToHtml(description)}
                      </Text>

                      {see ? (
                        <Link href={see} external lineClamp={1}>
                          {see}
                        </Link>
                      ) : null}
                    </Grid>
                  </NativeTable.Td>
                </NativeTable.Tr>
              )
            },
          )}
        </NativeTable.Tbody>
      </NativeTable.Root>
    </Box>
  )
}
