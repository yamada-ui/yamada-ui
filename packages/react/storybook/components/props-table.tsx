import type { FC, ReactNode } from "react"
import { Fragment } from "react"
import { Center, Flex, For, Grid, GridItem, toTitleCase } from "../../src"

interface PropsTableProps {
  children: (
    column: string,
    row: string,
    key: string,
    colIndex: number,
    rowIndex: number,
  ) => ReactNode
  columns: string[]
  rows: string[]
}

export const PropsTable: FC<PropsTableProps> = ({
  children,
  columns,
  rows,
}) => {
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
}
