import type { Meta, StoryFn } from "@storybook/react"
import type { FC } from "react"
import type { NativeTableProps } from "./"
import { useState } from "react"
import defaultTheme from "../../theme"
import { COLOR_SCHEMES, isString } from "../../utils"
import { Box } from "../box"
import { ScrollArea } from "../scroll-area"
import {
  NativeTable,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "./"

type Story = StoryFn<typeof NativeTable>

const meta: Meta<typeof NativeTable> = {
  component: NativeTable,
  title: "Components / NativeTable",
}

export default meta

export const Basic: Story = () => {
  return (
    <TableContainer>
      <NativeTable>
        <Thead>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>ドラゴンボール</Td>
            <Td>1986年2月26日 - 1989年4月19日</Td>
            <Td isNumeric>全153話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールZ</Td>
            <Td>1989年4月26日 - 1996年1月31日</Td>
            <Td isNumeric>全291話 + スペシャル2話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールGT</Td>
            <Td>1996年2月7日 - 1997年11月19日</Td>
            <Td isNumeric>全64話 + 番外編1話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール改</Td>
            <Td>2009年4月5日 - 2015年6月28日</Td>
            <Td isNumeric>全159話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール超</Td>
            <Td>2015年7月5日 - 2018年3月25日</Td>
            <Td isNumeric>全131話</Td>
          </Tr>
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Tfoot>
      </NativeTable>
    </TableContainer>
  )
}

export const WithSize: Story = () => {
  const Table: FC<NativeTableProps> = (props) => {
    return (
      <TableContainer>
        <NativeTable {...props}>
          <Thead>
            <Tr>
              <Th>作品名</Th>
              <Th>放送期間</Th>
              <Th isNumeric>話数</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>ドラゴンボール</Td>
              <Td>1986年2月26日 - 1989年4月19日</Td>
              <Td isNumeric>全153話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボールZ</Td>
              <Td>1989年4月26日 - 1996年1月31日</Td>
              <Td isNumeric>全291話 + スペシャル2話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボールGT</Td>
              <Td>1996年2月7日 - 1997年11月19日</Td>
              <Td isNumeric>全64話 + 番外編1話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボール改</Td>
              <Td>2009年4月5日 - 2015年6月28日</Td>
              <Td isNumeric>全159話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボール超</Td>
              <Td>2015年7月5日 - 2018年3月25日</Td>
              <Td isNumeric>全131話</Td>
            </Tr>
          </Tbody>

          <Tfoot>
            <Tr>
              <Th>作品名</Th>
              <Th>放送期間</Th>
              <Th isNumeric>話数</Th>
            </Tr>
          </Tfoot>
        </NativeTable>
      </TableContainer>
    )
  }

  return (
    <>
      <Table size="sm" />
      <Table size="md" />
      <Table size="lg" />
      <Table size="xl" />
    </>
  )
}

export const WithVariant: Story = () => {
  const Table: FC<NativeTableProps> = (props) => {
    return (
      <TableContainer>
        <NativeTable {...props}>
          <Thead>
            <Tr>
              <Th>作品名</Th>
              <Th>放送期間</Th>
              <Th isNumeric>話数</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>ドラゴンボール</Td>
              <Td>1986年2月26日 - 1989年4月19日</Td>
              <Td isNumeric>全153話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボールZ</Td>
              <Td>1989年4月26日 - 1996年1月31日</Td>
              <Td isNumeric>全291話 + スペシャル2話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボールGT</Td>
              <Td>1996年2月7日 - 1997年11月19日</Td>
              <Td isNumeric>全64話 + 番外編1話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボール改</Td>
              <Td>2009年4月5日 - 2015年6月28日</Td>
              <Td isNumeric>全159話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボール超</Td>
              <Td>2015年7月5日 - 2018年3月25日</Td>
              <Td isNumeric>全131話</Td>
            </Tr>
          </Tbody>

          <Tfoot>
            <Tr>
              <Th>作品名</Th>
              <Th>放送期間</Th>
              <Th isNumeric>話数</Th>
            </Tr>
          </Tfoot>
        </NativeTable>
      </TableContainer>
    )
  }

  return (
    <>
      <Table variant="simple" />
      <Table variant="striped" />
    </>
  )
}

export const WithColorScheme: Story = () => {
  const Table: FC<NativeTableProps> = (props) => {
    return (
      <TableContainer>
        <NativeTable {...props}>
          <Thead>
            <Tr>
              <Th>作品名</Th>
              <Th>放送期間</Th>
              <Th isNumeric>話数</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>ドラゴンボール</Td>
              <Td>1986年2月26日 - 1989年4月19日</Td>
              <Td isNumeric>全153話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボールZ</Td>
              <Td>1989年4月26日 - 1996年1月31日</Td>
              <Td isNumeric>全291話 + スペシャル2話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボールGT</Td>
              <Td>1996年2月7日 - 1997年11月19日</Td>
              <Td isNumeric>全64話 + 番外編1話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボール改</Td>
              <Td>2009年4月5日 - 2015年6月28日</Td>
              <Td isNumeric>全159話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボール超</Td>
              <Td>2015年7月5日 - 2018年3月25日</Td>
              <Td isNumeric>全131話</Td>
            </Tr>
          </Tbody>

          <Tfoot>
            <Tr>
              <Th>作品名</Th>
              <Th>放送期間</Th>
              <Th isNumeric>話数</Th>
            </Tr>
          </Tfoot>
        </NativeTable>
      </TableContainer>
    )
  }

  return (
    <>
      {COLOR_SCHEMES.map((colorScheme) => (
        <Table key={colorScheme} colorScheme={colorScheme} variant="striped" />
      ))}
    </>
  )
}

export const WithColumnBorders: Story = () => {
  return (
    <TableContainer>
      <NativeTable withColumnBorders>
        <Thead>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>ドラゴンボール</Td>
            <Td>1986年2月26日 - 1989年4月19日</Td>
            <Td isNumeric>全153話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールZ</Td>
            <Td>1989年4月26日 - 1996年1月31日</Td>
            <Td isNumeric>全291話 + スペシャル2話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールGT</Td>
            <Td>1996年2月7日 - 1997年11月19日</Td>
            <Td isNumeric>全64話 + 番外編1話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール改</Td>
            <Td>2009年4月5日 - 2015年6月28日</Td>
            <Td isNumeric>全159話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール超</Td>
            <Td>2015年7月5日 - 2018年3月25日</Td>
            <Td isNumeric>全131話</Td>
          </Tr>
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Tfoot>
      </NativeTable>
    </TableContainer>
  )
}

export const WithBorder: Story = () => {
  return (
    <TableContainer>
      <NativeTable withBorder>
        <Thead>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>ドラゴンボール</Td>
            <Td>1986年2月26日 - 1989年4月19日</Td>
            <Td isNumeric>全153話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールZ</Td>
            <Td>1989年4月26日 - 1996年1月31日</Td>
            <Td isNumeric>全291話 + スペシャル2話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールGT</Td>
            <Td>1996年2月7日 - 1997年11月19日</Td>
            <Td isNumeric>全64話 + 番外編1話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール改</Td>
            <Td>2009年4月5日 - 2015年6月28日</Td>
            <Td isNumeric>全159話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール超</Td>
            <Td>2015年7月5日 - 2018年3月25日</Td>
            <Td isNumeric>全131話</Td>
          </Tr>
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Tfoot>
      </NativeTable>
    </TableContainer>
  )
}

export const WithHighlightOnHover: Story = () => {
  return (
    <TableContainer>
      <NativeTable highlightOnHover>
        <Thead>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>ドラゴンボール</Td>
            <Td>1986年2月26日 - 1989年4月19日</Td>
            <Td isNumeric>全153話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールZ</Td>
            <Td>1989年4月26日 - 1996年1月31日</Td>
            <Td isNumeric>全291話 + スペシャル2話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールGT</Td>
            <Td>1996年2月7日 - 1997年11月19日</Td>
            <Td isNumeric>全64話 + 番外編1話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール改</Td>
            <Td>2009年4月5日 - 2015年6月28日</Td>
            <Td isNumeric>全159話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール超</Td>
            <Td>2015年7月5日 - 2018年3月25日</Td>
            <Td isNumeric>全131話</Td>
          </Tr>
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Tfoot>
      </NativeTable>
    </TableContainer>
  )
}

export const WithCaption: Story = () => {
  return (
    <>
      <TableContainer>
        <NativeTable>
          <TableCaption placement="top">
            ©バードスタジオ/集英社・東映アニメーション
          </TableCaption>

          <Thead>
            <Tr>
              <Th>作品名</Th>
              <Th>放送期間</Th>
              <Th isNumeric>話数</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>ドラゴンボール</Td>
              <Td>1986年2月26日 - 1989年4月19日</Td>
              <Td isNumeric>全153話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボールZ</Td>
              <Td>1989年4月26日 - 1996年1月31日</Td>
              <Td isNumeric>全291話 + スペシャル2話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボールGT</Td>
              <Td>1996年2月7日 - 1997年11月19日</Td>
              <Td isNumeric>全64話 + 番外編1話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボール改</Td>
              <Td>2009年4月5日 - 2015年6月28日</Td>
              <Td isNumeric>全159話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボール超</Td>
              <Td>2015年7月5日 - 2018年3月25日</Td>
              <Td isNumeric>全131話</Td>
            </Tr>
          </Tbody>

          <Tfoot>
            <Tr>
              <Th>作品名</Th>
              <Th>放送期間</Th>
              <Th isNumeric>話数</Th>
            </Tr>
          </Tfoot>
        </NativeTable>
      </TableContainer>
      <TableContainer>
        <NativeTable>
          <TableCaption placement="bottom">
            ©バードスタジオ/集英社・東映アニメーション
          </TableCaption>

          <Thead>
            <Tr>
              <Th>作品名</Th>
              <Th>放送期間</Th>
              <Th isNumeric>話数</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>ドラゴンボール</Td>
              <Td>1986年2月26日 - 1989年4月19日</Td>
              <Td isNumeric>全153話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボールZ</Td>
              <Td>1989年4月26日 - 1996年1月31日</Td>
              <Td isNumeric>全291話 + スペシャル2話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボールGT</Td>
              <Td>1996年2月7日 - 1997年11月19日</Td>
              <Td isNumeric>全64話 + 番外編1話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボール改</Td>
              <Td>2009年4月5日 - 2015年6月28日</Td>
              <Td isNumeric>全159話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボール超</Td>
              <Td>2015年7月5日 - 2018年3月25日</Td>
              <Td isNumeric>全131話</Td>
            </Tr>
          </Tbody>

          <Tfoot>
            <Tr>
              <Th>作品名</Th>
              <Th>放送期間</Th>
              <Th isNumeric>話数</Th>
            </Tr>
          </Tfoot>
        </NativeTable>
      </TableContainer>
    </>
  )
}

export const WithStickyHeader: Story = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <TableContainer w="full">
      <ScrollArea
        h="xs"
        w="full"
        onScrollPositionChange={({ y }) => setIsScrolled(y !== 0)}
      >
        <NativeTable>
          <Thead
            bg={["white", "black"]}
            boxShadow={isScrolled ? "md" : undefined}
            position="sticky"
            top={0}
            transitionDuration="slow"
            transitionProperty="box-shadow"
          >
            <Tr>
              <Th>Name</Th>
              <Th isNumeric>Rem</Th>
              <Th isNumeric>Pixel</Th>
              <Th>Progress</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>xs</Td>
              <Td isNumeric>0.25rem</Td>
              <Td isNumeric>4px</Td>
              <Td>
                <Box bg="red.500" h="9xs" maxW="0.25rem" />
              </Td>
            </Tr>
            <Tr>
              <Td>sm</Td>
              <Td isNumeric>0.5rem</Td>
              <Td isNumeric>8px</Td>
              <Td>
                <Box bg="red.500" h="9xs" maxW="0.5rem" />
              </Td>
            </Tr>
            <Tr>
              <Td>md</Td>
              <Td isNumeric>1rem</Td>
              <Td isNumeric>16px</Td>
              <Td>
                <Box bg="red.500" h="9xs" maxW="1rem" />
              </Td>
            </Tr>
            <Tr>
              <Td>normal</Td>
              <Td isNumeric>1.5rem</Td>
              <Td isNumeric>24px</Td>
              <Td>
                <Box bg="red.500" h="9xs" maxW="1.5rem" />
              </Td>
            </Tr>
            <Tr>
              <Td>lg</Td>
              <Td isNumeric>2rem</Td>
              <Td isNumeric>32px</Td>
              <Td>
                <Box bg="red.500" h="9xs" maxW="2rem" />
              </Td>
            </Tr>
            <Tr>
              <Td>xl</Td>
              <Td isNumeric>3rem</Td>
              <Td isNumeric>48px</Td>
              <Td>
                <Box bg="red.500" h="9xs" maxW="3rem" />
              </Td>
            </Tr>
            <Tr>
              <Td>2xl</Td>
              <Td isNumeric>4.5rem</Td>
              <Td isNumeric>72px</Td>
              <Td>
                <Box bg="red.500" h="9xs" maxW="4.5rem" />
              </Td>
            </Tr>
            <Tr>
              <Td>3xl</Td>
              <Td isNumeric>6rem</Td>
              <Td isNumeric>96px</Td>
              <Td>
                <Box bg="red.500" h="9xs" maxW="6rem" />
              </Td>
            </Tr>
            <Tr>
              <Td>4xl</Td>
              <Td isNumeric>10rem</Td>
              <Td isNumeric>160px</Td>
              <Td>
                <Box bg="red.500" h="9xs" maxW="10rem" />
              </Td>
            </Tr>
            {Object.entries(defaultTheme.spaces)
              .filter(([key]) => !isNaN(Number(key)))
              .sort(([a], [b]) => Number(a) - Number(b))
              .map(([key, value]) => {
                if (!isString(value)) return null

                return (
                  <Tr key={key}>
                    <Td>{key}</Td>
                    <Td isNumeric>{value}</Td>
                    <Td isNumeric>{`${parseFloat(value) * 16}px`}</Td>
                    <Td>
                      <Box bg="green.500" h="9xs" maxW={value} />
                    </Td>
                  </Tr>
                )
              })}
          </Tbody>
        </NativeTable>
      </ScrollArea>
    </TableContainer>
  )
}