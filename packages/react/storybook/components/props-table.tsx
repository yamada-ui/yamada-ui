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
      <Grid templateColumns={`auto repeat(${columns.length}, 1fr)`} w="full">
        <GridItem />

        {columns.map((column, colIndex) => (
          <GridItem
            key={colIndex}
            color="fg.emphasized"
            fontWeight="medium"
            p="md"
            textAlign="center"
          >
            {toTitleCase(column)}
          </GridItem>
        ))}

        <For each={rows}>
          {(row, rowIndex) => (
            <Fragment key={rowIndex}>
              <Flex
                align="center"
                color="fg.emphasized"
                fontWeight="medium"
                p="md"
              >
                {toTitleCase(row)}
              </Flex>

              <For each={columns}>
                {(column, colIndex) => (
                  <GridItem
                    key={colIndex}
                    as={Center}
                    borderBottomWidth="1px"
                    borderColor="purple.ghost"
                    borderLeftWidth={!colIndex ? "1px" : undefined}
                    borderRightWidth="1px"
                    borderTopWidth={!rowIndex ? "1px" : undefined}
                    p="md"
                    roundedBottomLeft={
                      !colIndex && rowIndex === rows.length - 1
                        ? "l3"
                        : undefined
                    }
                    roundedBottomRight={
                      colIndex === columns.length - 1 &&
                      rowIndex === rows.length - 1
                        ? "l3"
                        : undefined
                    }
                    roundedTopLeft={!colIndex && !rowIndex ? "l3" : undefined}
                    roundedTopRight={
                      colIndex === columns.length - 1 && !rowIndex
                        ? "l3"
                        : undefined
                    }
                  >
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
            <Heading as="h2" size="md">
              {toTitleCase(column)}
            </Heading>

            <Grid
              borderColor="purple.ghost"
              borderWidth="1px"
              rounded="l3"
              templateColumns="auto 1fr"
              w="full"
            >
              <For each={rows}>
                {(row, rowIndex) => (
                  <Fragment key={rowIndex}>
                    <GridItem
                      alignItems="center"
                      borderColor="purple.ghost"
                      borderRightWidth="1px"
                      borderTopWidth={!!rowIndex ? "1px" : undefined}
                      color="fg.emphasized"
                      display="flex"
                      fontWeight="medium"
                      p="md"
                    >
                      {toTitleCase(row)}
                    </GridItem>

                    <GridItem
                      borderColor="purple.ghost"
                      borderTopWidth={!!rowIndex ? "1px" : undefined}
                      p="md"
                    >
                      {children(
                        column,
                        row,
                        `${colIndex}-${rowIndex}`,
                        colIndex,
                        rowIndex,
                      )}
                    </GridItem>
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
