import type { Meta, StoryFn } from "@storybook/react"
import type { NativeTableProps } from "@yamada-ui/react"
import type { FC } from "react"
import {
  Box,
  defaultTheme,
  isString,
  NativeTable,
  ScrollArea,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@yamada-ui/react"
import { useState } from "react"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof NativeTable>

const meta: Meta<typeof NativeTable> = {
  component: NativeTable,
  title: "Components / Data Display / NativeTable",
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
            <Th numeric>話数</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>ドラゴンボール</Td>
            <Td>1986年2月26日 - 1989年4月19日</Td>
            <Td numeric>全153話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールZ</Td>
            <Td>1989年4月26日 - 1996年1月31日</Td>
            <Td numeric>全291話 + スペシャル2話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールGT</Td>
            <Td>1996年2月7日 - 1997年11月19日</Td>
            <Td numeric>全64話 + 番外編1話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール改</Td>
            <Td>2009年4月5日 - 2015年6月28日</Td>
            <Td numeric>全159話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール超</Td>
            <Td>2015年7月5日 - 2018年3月25日</Td>
            <Td numeric>全131話</Td>
          </Tr>
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th numeric>話数</Th>
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
              <Th numeric>話数</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>ドラゴンボール</Td>
              <Td>1986年2月26日 - 1989年4月19日</Td>
              <Td numeric>全153話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボールZ</Td>
              <Td>1989年4月26日 - 1996年1月31日</Td>
              <Td numeric>全291話 + スペシャル2話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボールGT</Td>
              <Td>1996年2月7日 - 1997年11月19日</Td>
              <Td numeric>全64話 + 番外編1話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボール改</Td>
              <Td>2009年4月5日 - 2015年6月28日</Td>
              <Td numeric>全159話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボール超</Td>
              <Td>2015年7月5日 - 2018年3月25日</Td>
              <Td numeric>全131話</Td>
            </Tr>
          </Tbody>

          <Tfoot>
            <Tr>
              <Th>作品名</Th>
              <Th>放送期間</Th>
              <Th numeric>話数</Th>
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
              <Th numeric>話数</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>ドラゴンボール</Td>
              <Td>1986年2月26日 - 1989年4月19日</Td>
              <Td numeric>全153話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボールZ</Td>
              <Td>1989年4月26日 - 1996年1月31日</Td>
              <Td numeric>全291話 + スペシャル2話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボールGT</Td>
              <Td>1996年2月7日 - 1997年11月19日</Td>
              <Td numeric>全64話 + 番外編1話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボール改</Td>
              <Td>2009年4月5日 - 2015年6月28日</Td>
              <Td numeric>全159話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボール超</Td>
              <Td>2015年7月5日 - 2018年3月25日</Td>
              <Td numeric>全131話</Td>
            </Tr>
          </Tbody>

          <Tfoot>
            <Tr>
              <Th>作品名</Th>
              <Th>放送期間</Th>
              <Th numeric>話数</Th>
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
              <Th numeric>話数</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>ドラゴンボール</Td>
              <Td>1986年2月26日 - 1989年4月19日</Td>
              <Td numeric>全153話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボールZ</Td>
              <Td>1989年4月26日 - 1996年1月31日</Td>
              <Td numeric>全291話 + スペシャル2話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボールGT</Td>
              <Td>1996年2月7日 - 1997年11月19日</Td>
              <Td numeric>全64話 + 番外編1話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボール改</Td>
              <Td>2009年4月5日 - 2015年6月28日</Td>
              <Td numeric>全159話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボール超</Td>
              <Td>2015年7月5日 - 2018年3月25日</Td>
              <Td numeric>全131話</Td>
            </Tr>
          </Tbody>

          <Tfoot>
            <Tr>
              <Th>作品名</Th>
              <Th>放送期間</Th>
              <Th numeric>話数</Th>
            </Tr>
          </Tfoot>
        </NativeTable>
      </TableContainer>
    )
  }

  return (
    <>
      {colorSchemes.map((colorScheme) => (
        <Table key={colorScheme} colorScheme={colorScheme} variant="striped" />
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
            <Th numeric>話数</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>ドラゴンボール</Td>
            <Td>1986年2月26日 - 1989年4月19日</Td>
            <Td numeric>全153話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールZ</Td>
            <Td>1989年4月26日 - 1996年1月31日</Td>
            <Td numeric>全291話 + スペシャル2話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールGT</Td>
            <Td>1996年2月7日 - 1997年11月19日</Td>
            <Td numeric>全64話 + 番外編1話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール改</Td>
            <Td>2009年4月5日 - 2015年6月28日</Td>
            <Td numeric>全159話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール超</Td>
            <Td>2015年7月5日 - 2018年3月25日</Td>
            <Td numeric>全131話</Td>
          </Tr>
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th numeric>話数</Th>
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
            <Th numeric>話数</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>ドラゴンボール</Td>
            <Td>1986年2月26日 - 1989年4月19日</Td>
            <Td numeric>全153話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールZ</Td>
            <Td>1989年4月26日 - 1996年1月31日</Td>
            <Td numeric>全291話 + スペシャル2話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールGT</Td>
            <Td>1996年2月7日 - 1997年11月19日</Td>
            <Td numeric>全64話 + 番外編1話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール改</Td>
            <Td>2009年4月5日 - 2015年6月28日</Td>
            <Td numeric>全159話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール超</Td>
            <Td>2015年7月5日 - 2018年3月25日</Td>
            <Td numeric>全131話</Td>
          </Tr>
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th numeric>話数</Th>
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
            <Th numeric>話数</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>ドラゴンボール</Td>
            <Td>1986年2月26日 - 1989年4月19日</Td>
            <Td numeric>全153話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールZ</Td>
            <Td>1989年4月26日 - 1996年1月31日</Td>
            <Td numeric>全291話 + スペシャル2話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールGT</Td>
            <Td>1996年2月7日 - 1997年11月19日</Td>
            <Td numeric>全64話 + 番外編1話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール改</Td>
            <Td>2009年4月5日 - 2015年6月28日</Td>
            <Td numeric>全159話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール超</Td>
            <Td>2015年7月5日 - 2018年3月25日</Td>
            <Td numeric>全131話</Td>
          </Tr>
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th numeric>話数</Th>
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
              <Th numeric>話数</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>ドラゴンボール</Td>
              <Td>1986年2月26日 - 1989年4月19日</Td>
              <Td numeric>全153話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボールZ</Td>
              <Td>1989年4月26日 - 1996年1月31日</Td>
              <Td numeric>全291話 + スペシャル2話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボールGT</Td>
              <Td>1996年2月7日 - 1997年11月19日</Td>
              <Td numeric>全64話 + 番外編1話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボール改</Td>
              <Td>2009年4月5日 - 2015年6月28日</Td>
              <Td numeric>全159話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボール超</Td>
              <Td>2015年7月5日 - 2018年3月25日</Td>
              <Td numeric>全131話</Td>
            </Tr>
          </Tbody>

          <Tfoot>
            <Tr>
              <Th>作品名</Th>
              <Th>放送期間</Th>
              <Th numeric>話数</Th>
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
              <Th numeric>話数</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>ドラゴンボール</Td>
              <Td>1986年2月26日 - 1989年4月19日</Td>
              <Td numeric>全153話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボールZ</Td>
              <Td>1989年4月26日 - 1996年1月31日</Td>
              <Td numeric>全291話 + スペシャル2話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボールGT</Td>
              <Td>1996年2月7日 - 1997年11月19日</Td>
              <Td numeric>全64話 + 番外編1話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボール改</Td>
              <Td>2009年4月5日 - 2015年6月28日</Td>
              <Td numeric>全159話</Td>
            </Tr>
            <Tr>
              <Td>ドラゴンボール超</Td>
              <Td>2015年7月5日 - 2018年3月25日</Td>
              <Td numeric>全131話</Td>
            </Tr>
          </Tbody>

          <Tfoot>
            <Tr>
              <Th>作品名</Th>
              <Th>放送期間</Th>
              <Th numeric>話数</Th>
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
              <Th numeric>Rem</Th>
              <Th numeric>Pixel</Th>
              <Th>Progress</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>xs</Td>
              <Td numeric>0.25rem</Td>
              <Td numeric>4px</Td>
              <Td>
                <Box bg="red.500" h="9xs" maxW="0.25rem" />
              </Td>
            </Tr>
            <Tr>
              <Td>sm</Td>
              <Td numeric>0.5rem</Td>
              <Td numeric>8px</Td>
              <Td>
                <Box bg="red.500" h="9xs" maxW="0.5rem" />
              </Td>
            </Tr>
            <Tr>
              <Td>md</Td>
              <Td numeric>1rem</Td>
              <Td numeric>16px</Td>
              <Td>
                <Box bg="red.500" h="9xs" maxW="1rem" />
              </Td>
            </Tr>
            <Tr>
              <Td>normal</Td>
              <Td numeric>1.5rem</Td>
              <Td numeric>24px</Td>
              <Td>
                <Box bg="red.500" h="9xs" maxW="1.5rem" />
              </Td>
            </Tr>
            <Tr>
              <Td>lg</Td>
              <Td numeric>2rem</Td>
              <Td numeric>32px</Td>
              <Td>
                <Box bg="red.500" h="9xs" maxW="2rem" />
              </Td>
            </Tr>
            <Tr>
              <Td>xl</Td>
              <Td numeric>3rem</Td>
              <Td numeric>48px</Td>
              <Td>
                <Box bg="red.500" h="9xs" maxW="3rem" />
              </Td>
            </Tr>
            <Tr>
              <Td>2xl</Td>
              <Td numeric>4.5rem</Td>
              <Td numeric>72px</Td>
              <Td>
                <Box bg="red.500" h="9xs" maxW="4.5rem" />
              </Td>
            </Tr>
            <Tr>
              <Td>3xl</Td>
              <Td numeric>6rem</Td>
              <Td numeric>96px</Td>
              <Td>
                <Box bg="red.500" h="9xs" maxW="6rem" />
              </Td>
            </Tr>
            <Tr>
              <Td>4xl</Td>
              <Td numeric>10rem</Td>
              <Td numeric>160px</Td>
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
                    <Td numeric>{value}</Td>
                    <Td numeric>{`${parseFloat(value) * 16}px`}</Td>
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
