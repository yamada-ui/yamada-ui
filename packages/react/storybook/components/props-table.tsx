import type { ReactNode } from "react"
import { Fragment } from "react"
import {
  Center,
  Flex,
  For,
  Grid,
  GridItem,
  Heading,
  toTitleCase,
} from "../../src"

interface PropsTableProps<Y extends string, M extends string> {
  children: (
    column: Y,
    row: M,
    key: string,
    colIndex: number,
    rowIndex: number,
  ) => ReactNode
  columns: Y[]
  rows: M[]
  variant?: "column" | "grid"
}

export const PropsTable = <Y extends string, M extends string>({
  variant = "grid",
  children,
  columns,
  rows,
}: PropsTableProps<Y, M>) => {
  if (variant === "grid") {
    return (
      <Grid templateColumns={`repeat(${columns.length + 1}, 1fr)`} w="full">
        <GridItem />

        {columns.map((column, colIndex) => (
          <GridItem
            key={colIndex}
            color="muted"
            fontWeight="semibold"
            p="md"
            textAlign="center"
          >
            {toTitleCase(column)}
          </GridItem>
        ))}

        <For each={rows}>
          {(row, rowIndex) => (
            <Fragment key={rowIndex}>
              <Flex align="center" color="muted" fontWeight="semibold" p="md">
                {toTitleCase(row)}
              </Flex>

              <For each={columns}>
                {(column, colIndex) => (
                  <GridItem key={colIndex} as={Center} p="md">
                    {children(
                      column,
                      row,
                      `${colIndex}-${rowIndex}`,
                      colIndex,
                      rowIndex,
                    )}
                  </GridItem>
                )}
              </For>
            </Fragment>
          )}
        </For>
      </Grid>
    )
  } else {
    return (
      <For each={columns}>
        {(column, colIndex) => (
          <Fragment key={colIndex}>
            <Heading as="h2" size="lg">
              {toTitleCase(column)}
            </Heading>

            <Grid gap="md" templateColumns="auto 1fr" w="full">
              <For each={rows}>
                {(row, rowIndex) => (
                  <Fragment key={rowIndex}>
                    <GridItem color="muted" fontWeight="semibold" p="md">
                      {toTitleCase(row)}
                    </GridItem>

                    {children(
                      column,
                      row,
                      `${colIndex}-${rowIndex}`,
                      colIndex,
                      rowIndex,
                    )}
                  </Fragment>
                )}
              </For>
            </Grid>
          </Fragment>
        )}
      </For>
    )
  }
}
