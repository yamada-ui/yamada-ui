import type { Meta, StoryFn } from "@storybook/react"
import type { FC } from "react"
import { useState } from "react"
import { colorSchemes } from "../../components"
import {
  NativeTable,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  ScrollArea,
  Box,
  defaultTheme,
  TableContainer,
  isString,
} from "@yamada-ui/react"
import type { NativeTableProps } from "@yamada-ui/react"

type Story = StoryFn<typeof NativeTable>

const meta: Meta<typeof NativeTable> = {
  title: "Components / Data Display / NativeTable",
  component: NativeTable,
}

export default meta

export const basic: Story = () => {
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

export const withSize: Story = () => {
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

export const withVariant: Story = () => {
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

export const withColorScheme: Story = () => {
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
      {colorSchemes.map((colorScheme) => (
        <Table key={colorScheme} variant="striped" colorScheme={colorScheme} />
      ))}
    </>
  )
}

export const withColumnBorders: Story = () => {
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

export const withBorder: Story = () => {
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

export const withHighlightOnHover: Story = () => {
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

export const withCaption: Story = () => {
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

export const withStickyHeader: Story = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <TableContainer w="full">
      <ScrollArea
        w="full"
        h="xs"
        onScrollPositionChange={({ y }) => setIsScrolled(y !== 0)}
      >
        <NativeTable>
          <Thead
            position="sticky"
            top={0}
            bg={["white", "black"]}
            transitionProperty="box-shadow"
            transitionDuration="slow"
            boxShadow={isScrolled ? "md" : undefined}
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
                <Box maxW="0.25rem" h="9xs" bg="red.500" />
              </Td>
            </Tr>
            <Tr>
              <Td>sm</Td>
              <Td isNumeric>0.5rem</Td>
              <Td isNumeric>8px</Td>
              <Td>
                <Box maxW="0.5rem" h="9xs" bg="red.500" />
              </Td>
            </Tr>
            <Tr>
              <Td>md</Td>
              <Td isNumeric>1rem</Td>
              <Td isNumeric>16px</Td>
              <Td>
                <Box maxW="1rem" h="9xs" bg="red.500" />
              </Td>
            </Tr>
            <Tr>
              <Td>normal</Td>
              <Td isNumeric>1.5rem</Td>
              <Td isNumeric>24px</Td>
              <Td>
                <Box maxW="1.5rem" h="9xs" bg="red.500" />
              </Td>
            </Tr>
            <Tr>
              <Td>lg</Td>
              <Td isNumeric>2rem</Td>
              <Td isNumeric>32px</Td>
              <Td>
                <Box maxW="2rem" h="9xs" bg="red.500" />
              </Td>
            </Tr>
            <Tr>
              <Td>xl</Td>
              <Td isNumeric>3rem</Td>
              <Td isNumeric>48px</Td>
              <Td>
                <Box maxW="3rem" h="9xs" bg="red.500" />
              </Td>
            </Tr>
            <Tr>
              <Td>2xl</Td>
              <Td isNumeric>4.5rem</Td>
              <Td isNumeric>72px</Td>
              <Td>
                <Box maxW="4.5rem" h="9xs" bg="red.500" />
              </Td>
            </Tr>
            <Tr>
              <Td>3xl</Td>
              <Td isNumeric>6rem</Td>
              <Td isNumeric>96px</Td>
              <Td>
                <Box maxW="6rem" h="9xs" bg="red.500" />
              </Td>
            </Tr>
            <Tr>
              <Td>4xl</Td>
              <Td isNumeric>10rem</Td>
              <Td isNumeric>160px</Td>
              <Td>
                <Box maxW="10rem" h="9xs" bg="red.500" />
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
                      <Box maxW={value} h="9xs" bg="green.500" />
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
