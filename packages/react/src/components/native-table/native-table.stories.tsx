import type { Meta, StoryFn } from "@storybook/react-vite"
// import { ScrollArea } from "../scroll-area"
import { PropsTable } from "../../../storybook/components"
// import defaultTheme from "../../theme"
import { COLOR_SCHEMES } from "../../utils"
import { NativeTable } from "./"

type Story = StoryFn<typeof NativeTable.Root>

const meta: Meta<typeof NativeTable.Root> = {
  component: NativeTable.Root,
  title: "Components / NativeTable",
}

export default meta

export const Basic: Story = () => {
  return (
    <NativeTable.Root>
      <NativeTable.Thead>
        <NativeTable.Tr>
          <NativeTable.Th>作品名</NativeTable.Th>
          <NativeTable.Th>放送期間</NativeTable.Th>
          <NativeTable.Th numeric>話数</NativeTable.Th>
        </NativeTable.Tr>
      </NativeTable.Thead>

      <NativeTable.Tbody>
        <NativeTable.Tr>
          <NativeTable.Td>ドラゴンボール</NativeTable.Td>
          <NativeTable.Td>1986年2月26日 - 1989年4月19日</NativeTable.Td>
          <NativeTable.Td numeric>全153話</NativeTable.Td>
        </NativeTable.Tr>
        <NativeTable.Tr>
          <NativeTable.Td>ドラゴンボールZ</NativeTable.Td>
          <NativeTable.Td>1989年4月26日 - 1996年1月31日</NativeTable.Td>
          <NativeTable.Td numeric>全291話 + スペシャル2話</NativeTable.Td>
        </NativeTable.Tr>
        <NativeTable.Tr>
          <NativeTable.Td>ドラゴンボールGT</NativeTable.Td>
          <NativeTable.Td>1996年2月7日 - 1997年11月19日</NativeTable.Td>
          <NativeTable.Td numeric>全64話 + 番外編1話</NativeTable.Td>
        </NativeTable.Tr>
        <NativeTable.Tr>
          <NativeTable.Td>ドラゴンボール改</NativeTable.Td>
          <NativeTable.Td>2009年4月5日 - 2015年6月28日</NativeTable.Td>
          <NativeTable.Td numeric>全159話</NativeTable.Td>
        </NativeTable.Tr>
        <NativeTable.Tr>
          <NativeTable.Td>ドラゴンボール超</NativeTable.Td>
          <NativeTable.Td>2015年7月5日 - 2018年3月25日</NativeTable.Td>
          <NativeTable.Td numeric>全131話</NativeTable.Td>
        </NativeTable.Tr>
      </NativeTable.Tbody>

      <NativeTable.Tfoot>
        <NativeTable.Tr>
          <NativeTable.Th>作品名</NativeTable.Th>
          <NativeTable.Th>放送期間</NativeTable.Th>
          <NativeTable.Th numeric>話数</NativeTable.Th>
        </NativeTable.Tr>
      </NativeTable.Tfoot>
    </NativeTable.Root>
  )
}

export const Variant: Story = () => {
  return (
    <PropsTable variant="stack" rows={["line", "outline"]}>
      {(_, row, key) => (
        <NativeTable.Root key={key} variant={row}>
          <NativeTable.Thead>
            <NativeTable.Tr>
              <NativeTable.Th>作品名</NativeTable.Th>
              <NativeTable.Th>放送期間</NativeTable.Th>
              <NativeTable.Th numeric>話数</NativeTable.Th>
            </NativeTable.Tr>
          </NativeTable.Thead>

          <NativeTable.Tbody>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボール</NativeTable.Td>
              <NativeTable.Td>1986年2月26日 - 1989年4月19日</NativeTable.Td>
              <NativeTable.Td numeric>全153話</NativeTable.Td>
            </NativeTable.Tr>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボールZ</NativeTable.Td>
              <NativeTable.Td>1989年4月26日 - 1996年1月31日</NativeTable.Td>
              <NativeTable.Td numeric>全291話 + スペシャル2話</NativeTable.Td>
            </NativeTable.Tr>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボールGT</NativeTable.Td>
              <NativeTable.Td>1996年2月7日 - 1997年11月19日</NativeTable.Td>
              <NativeTable.Td numeric>全64話 + 番外編1話</NativeTable.Td>
            </NativeTable.Tr>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボール改</NativeTable.Td>
              <NativeTable.Td>2009年4月5日 - 2015年6月28日</NativeTable.Td>
              <NativeTable.Td numeric>全159話</NativeTable.Td>
            </NativeTable.Tr>
            <NativeTable.Tr>
              <NativeTable.Th>ドラゴンボール超</NativeTable.Th>
              <NativeTable.Td>2015年7月5日 - 2018年3月25日</NativeTable.Td>
              <NativeTable.Td numeric>全131話</NativeTable.Td>
            </NativeTable.Tr>
          </NativeTable.Tbody>

          <NativeTable.Tfoot>
            <NativeTable.Tr>
              <NativeTable.Th>作品名</NativeTable.Th>
              <NativeTable.Th>放送期間</NativeTable.Th>
              <NativeTable.Th numeric>話数</NativeTable.Th>
            </NativeTable.Tr>
          </NativeTable.Tfoot>
        </NativeTable.Root>
      )}
    </PropsTable>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => (
        <NativeTable.Root key={key} size={row}>
          <NativeTable.Thead>
            <NativeTable.Tr>
              <NativeTable.Th>作品名</NativeTable.Th>
              <NativeTable.Th>放送期間</NativeTable.Th>
              <NativeTable.Th numeric>話数</NativeTable.Th>
            </NativeTable.Tr>
          </NativeTable.Thead>

          <NativeTable.Tbody>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボール</NativeTable.Td>
              <NativeTable.Td>1986年2月26日 - 1989年4月19日</NativeTable.Td>
              <NativeTable.Td numeric>全153話</NativeTable.Td>
            </NativeTable.Tr>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボールZ</NativeTable.Td>
              <NativeTable.Td>1989年4月26日 - 1996年1月31日</NativeTable.Td>
              <NativeTable.Td numeric>全291話 + スペシャル2話</NativeTable.Td>
            </NativeTable.Tr>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボールGT</NativeTable.Td>
              <NativeTable.Td>1996年2月7日 - 1997年11月19日</NativeTable.Td>
              <NativeTable.Td numeric>全64話 + 番外編1話</NativeTable.Td>
            </NativeTable.Tr>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボール改</NativeTable.Td>
              <NativeTable.Td>2009年4月5日 - 2015年6月28日</NativeTable.Td>
              <NativeTable.Td numeric>全159話</NativeTable.Td>
            </NativeTable.Tr>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボール超</NativeTable.Td>
              <NativeTable.Td>2015年7月5日 - 2018年3月25日</NativeTable.Td>
              <NativeTable.Td numeric>全131話</NativeTable.Td>
            </NativeTable.Tr>
          </NativeTable.Tbody>

          <NativeTable.Tfoot>
            <NativeTable.Tr>
              <NativeTable.Th>作品名</NativeTable.Th>
              <NativeTable.Th>放送期間</NativeTable.Th>
              <NativeTable.Th numeric>話数</NativeTable.Th>
            </NativeTable.Tr>
          </NativeTable.Tfoot>
        </NativeTable.Root>
      )}
    </PropsTable>
  )
}

export const Striped: Story = () => {
  return (
    <PropsTable variant="stack" rows={["line", "outline"]}>
      {(_, row, key) => (
        <NativeTable.Root key={key} variant={row} striped>
          <NativeTable.Thead>
            <NativeTable.Tr>
              <NativeTable.Th>作品名</NativeTable.Th>
              <NativeTable.Th>放送期間</NativeTable.Th>
              <NativeTable.Th numeric>話数</NativeTable.Th>
            </NativeTable.Tr>
          </NativeTable.Thead>

          <NativeTable.Tbody>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボール</NativeTable.Td>
              <NativeTable.Td>1986年2月26日 - 1989年4月19日</NativeTable.Td>
              <NativeTable.Td numeric>全153話</NativeTable.Td>
            </NativeTable.Tr>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボールZ</NativeTable.Td>
              <NativeTable.Td>1989年4月26日 - 1996年1月31日</NativeTable.Td>
              <NativeTable.Td numeric>全291話 + スペシャル2話</NativeTable.Td>
            </NativeTable.Tr>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボールGT</NativeTable.Td>
              <NativeTable.Td>1996年2月7日 - 1997年11月19日</NativeTable.Td>
              <NativeTable.Td numeric>全64話 + 番外編1話</NativeTable.Td>
            </NativeTable.Tr>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボール改</NativeTable.Td>
              <NativeTable.Td>2009年4月5日 - 2015年6月28日</NativeTable.Td>
              <NativeTable.Td numeric>全159話</NativeTable.Td>
            </NativeTable.Tr>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボール超</NativeTable.Td>
              <NativeTable.Td>2015年7月5日 - 2018年3月25日</NativeTable.Td>
              <NativeTable.Td numeric>全131話</NativeTable.Td>
            </NativeTable.Tr>
          </NativeTable.Tbody>

          <NativeTable.Tfoot>
            <NativeTable.Tr>
              <NativeTable.Th>作品名</NativeTable.Th>
              <NativeTable.Th>放送期間</NativeTable.Th>
              <NativeTable.Th numeric>話数</NativeTable.Th>
            </NativeTable.Tr>
          </NativeTable.Tfoot>
        </NativeTable.Root>
      )}
    </PropsTable>
  )
}

export const ColorScheme: Story = () => {
  return (
    <PropsTable
      variant="stack"
      columns={["outline", "striped"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => (
        <NativeTable.Root
          key={key}
          colorScheme={row}
          variant={column !== "striped" ? "outline" : undefined}
          striped={column === "striped"}
        >
          <NativeTable.Thead>
            <NativeTable.Tr>
              <NativeTable.Th>作品名</NativeTable.Th>
              <NativeTable.Th>放送期間</NativeTable.Th>
              <NativeTable.Th numeric>話数</NativeTable.Th>
            </NativeTable.Tr>
          </NativeTable.Thead>

          <NativeTable.Tbody>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボール</NativeTable.Td>
              <NativeTable.Td>1986年2月26日 - 1989年4月19日</NativeTable.Td>
              <NativeTable.Td numeric>全153話</NativeTable.Td>
            </NativeTable.Tr>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボールZ</NativeTable.Td>
              <NativeTable.Td>1989年4月26日 - 1996年1月31日</NativeTable.Td>
              <NativeTable.Td numeric>全291話 + スペシャル2話</NativeTable.Td>
            </NativeTable.Tr>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボールGT</NativeTable.Td>
              <NativeTable.Td>1996年2月7日 - 1997年11月19日</NativeTable.Td>
              <NativeTable.Td numeric>全64話 + 番外編1話</NativeTable.Td>
            </NativeTable.Tr>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボール改</NativeTable.Td>
              <NativeTable.Td>2009年4月5日 - 2015年6月28日</NativeTable.Td>
              <NativeTable.Td numeric>全159話</NativeTable.Td>
            </NativeTable.Tr>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボール超</NativeTable.Td>
              <NativeTable.Td>2015年7月5日 - 2018年3月25日</NativeTable.Td>
              <NativeTable.Td numeric>全131話</NativeTable.Td>
            </NativeTable.Tr>
          </NativeTable.Tbody>

          <NativeTable.Tfoot>
            <NativeTable.Tr>
              <NativeTable.Th>作品名</NativeTable.Th>
              <NativeTable.Th>放送期間</NativeTable.Th>
              <NativeTable.Th numeric>話数</NativeTable.Th>
            </NativeTable.Tr>
          </NativeTable.Tfoot>
        </NativeTable.Root>
      )}
    </PropsTable>
  )
}

export const Border: Story = () => {
  return (
    <>
      <NativeTable.Root withBorder>
        <NativeTable.Thead>
          <NativeTable.Tr>
            <NativeTable.Th>作品名</NativeTable.Th>
            <NativeTable.Th>放送期間</NativeTable.Th>
            <NativeTable.Th numeric>話数</NativeTable.Th>
          </NativeTable.Tr>
        </NativeTable.Thead>

        <NativeTable.Tbody>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボール</NativeTable.Td>
            <NativeTable.Td>1986年2月26日 - 1989年4月19日</NativeTable.Td>
            <NativeTable.Td numeric>全153話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボールZ</NativeTable.Td>
            <NativeTable.Td>1989年4月26日 - 1996年1月31日</NativeTable.Td>
            <NativeTable.Td numeric>全291話 + スペシャル2話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボールGT</NativeTable.Td>
            <NativeTable.Td>1996年2月7日 - 1997年11月19日</NativeTable.Td>
            <NativeTable.Td numeric>全64話 + 番外編1話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボール改</NativeTable.Td>
            <NativeTable.Td>2009年4月5日 - 2015年6月28日</NativeTable.Td>
            <NativeTable.Td numeric>全159話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボール超</NativeTable.Td>
            <NativeTable.Td>2015年7月5日 - 2018年3月25日</NativeTable.Td>
            <NativeTable.Td numeric>全131話</NativeTable.Td>
          </NativeTable.Tr>
        </NativeTable.Tbody>

        <NativeTable.Tfoot>
          <NativeTable.Tr>
            <NativeTable.Th>作品名</NativeTable.Th>
            <NativeTable.Th>放送期間</NativeTable.Th>
            <NativeTable.Th numeric>話数</NativeTable.Th>
          </NativeTable.Tr>
        </NativeTable.Tfoot>
      </NativeTable.Root>

      <NativeTable.Root withBorder withColumnBorders>
        <NativeTable.Thead>
          <NativeTable.Tr>
            <NativeTable.Th>作品名</NativeTable.Th>
            <NativeTable.Th>放送期間</NativeTable.Th>
            <NativeTable.Th numeric>話数</NativeTable.Th>
          </NativeTable.Tr>
        </NativeTable.Thead>

        <NativeTable.Tbody>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボール</NativeTable.Td>
            <NativeTable.Td>1986年2月26日 - 1989年4月19日</NativeTable.Td>
            <NativeTable.Td numeric>全153話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボールZ</NativeTable.Td>
            <NativeTable.Td>1989年4月26日 - 1996年1月31日</NativeTable.Td>
            <NativeTable.Td numeric>全291話 + スペシャル2話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボールGT</NativeTable.Td>
            <NativeTable.Td>1996年2月7日 - 1997年11月19日</NativeTable.Td>
            <NativeTable.Td numeric>全64話 + 番外編1話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボール改</NativeTable.Td>
            <NativeTable.Td>2009年4月5日 - 2015年6月28日</NativeTable.Td>
            <NativeTable.Td numeric>全159話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボール超</NativeTable.Td>
            <NativeTable.Td>2015年7月5日 - 2018年3月25日</NativeTable.Td>
            <NativeTable.Td numeric>全131話</NativeTable.Td>
          </NativeTable.Tr>
        </NativeTable.Tbody>

        <NativeTable.Tfoot>
          <NativeTable.Tr>
            <NativeTable.Th>作品名</NativeTable.Th>
            <NativeTable.Th>放送期間</NativeTable.Th>
            <NativeTable.Th numeric>話数</NativeTable.Th>
          </NativeTable.Tr>
        </NativeTable.Tfoot>
      </NativeTable.Root>
    </>
  )
}

export const ColumnBorders: Story = () => {
  return (
    <NativeTable.Root withColumnBorders>
      <NativeTable.Thead>
        <NativeTable.Tr>
          <NativeTable.Th>作品名</NativeTable.Th>
          <NativeTable.Th>放送期間</NativeTable.Th>
          <NativeTable.Th numeric>話数</NativeTable.Th>
        </NativeTable.Tr>
      </NativeTable.Thead>

      <NativeTable.Tbody>
        <NativeTable.Tr>
          <NativeTable.Td>ドラゴンボール</NativeTable.Td>
          <NativeTable.Td>1986年2月26日 - 1989年4月19日</NativeTable.Td>
          <NativeTable.Td numeric>全153話</NativeTable.Td>
        </NativeTable.Tr>
        <NativeTable.Tr>
          <NativeTable.Td>ドラゴンボールZ</NativeTable.Td>
          <NativeTable.Td>1989年4月26日 - 1996年1月31日</NativeTable.Td>
          <NativeTable.Td numeric>全291話 + スペシャル2話</NativeTable.Td>
        </NativeTable.Tr>
        <NativeTable.Tr>
          <NativeTable.Td>ドラゴンボールGT</NativeTable.Td>
          <NativeTable.Td>1996年2月7日 - 1997年11月19日</NativeTable.Td>
          <NativeTable.Td numeric>全64話 + 番外編1話</NativeTable.Td>
        </NativeTable.Tr>
        <NativeTable.Tr>
          <NativeTable.Td>ドラゴンボール改</NativeTable.Td>
          <NativeTable.Td>2009年4月5日 - 2015年6月28日</NativeTable.Td>
          <NativeTable.Td numeric>全159話</NativeTable.Td>
        </NativeTable.Tr>
        <NativeTable.Tr>
          <NativeTable.Td>ドラゴンボール超</NativeTable.Td>
          <NativeTable.Td>2015年7月5日 - 2018年3月25日</NativeTable.Td>
          <NativeTable.Td numeric>全131話</NativeTable.Td>
        </NativeTable.Tr>
      </NativeTable.Tbody>

      <NativeTable.Tfoot>
        <NativeTable.Tr>
          <NativeTable.Th>作品名</NativeTable.Th>
          <NativeTable.Th>放送期間</NativeTable.Th>
          <NativeTable.Th numeric>話数</NativeTable.Th>
        </NativeTable.Tr>
      </NativeTable.Tfoot>
    </NativeTable.Root>
  )
}

export const HighlightOnHover: Story = () => {
  return (
    <PropsTable
      variant="stack"
      columns={["outline", "striped"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => (
        <NativeTable.Root
          key={key}
          colorScheme={row}
          variant={column !== "striped" ? "outline" : undefined}
          highlightOnHover
          striped={column === "striped"}
        >
          <NativeTable.Thead>
            <NativeTable.Tr>
              <NativeTable.Th>作品名</NativeTable.Th>
              <NativeTable.Th>放送期間</NativeTable.Th>
              <NativeTable.Th numeric>話数</NativeTable.Th>
            </NativeTable.Tr>
          </NativeTable.Thead>

          <NativeTable.Tbody>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボール</NativeTable.Td>
              <NativeTable.Td>1986年2月26日 - 1989年4月19日</NativeTable.Td>
              <NativeTable.Td numeric>全153話</NativeTable.Td>
            </NativeTable.Tr>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボールZ</NativeTable.Td>
              <NativeTable.Td>1989年4月26日 - 1996年1月31日</NativeTable.Td>
              <NativeTable.Td numeric>全291話 + スペシャル2話</NativeTable.Td>
            </NativeTable.Tr>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボールGT</NativeTable.Td>
              <NativeTable.Td>1996年2月7日 - 1997年11月19日</NativeTable.Td>
              <NativeTable.Td numeric>全64話 + 番外編1話</NativeTable.Td>
            </NativeTable.Tr>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボール改</NativeTable.Td>
              <NativeTable.Td>2009年4月5日 - 2015年6月28日</NativeTable.Td>
              <NativeTable.Td numeric>全159話</NativeTable.Td>
            </NativeTable.Tr>
            <NativeTable.Tr>
              <NativeTable.Td>ドラゴンボール超</NativeTable.Td>
              <NativeTable.Td>2015年7月5日 - 2018年3月25日</NativeTable.Td>
              <NativeTable.Td numeric>全131話</NativeTable.Td>
            </NativeTable.Tr>
          </NativeTable.Tbody>

          <NativeTable.Tfoot>
            <NativeTable.Tr>
              <NativeTable.Th>作品名</NativeTable.Th>
              <NativeTable.Th>放送期間</NativeTable.Th>
              <NativeTable.Th numeric>話数</NativeTable.Th>
            </NativeTable.Tr>
          </NativeTable.Tfoot>
        </NativeTable.Root>
      )}
    </PropsTable>
  )
}

export const ScrollArea: Story = () => {
  return (
    <NativeTable.Root
      variant="outline"
      withScrollArea
      scrollAreaProps={{ maxW: "lg" }}
    >
      <NativeTable.Thead>
        <NativeTable.Tr>
          <NativeTable.Th>作品名</NativeTable.Th>
          <NativeTable.Th>放送期間</NativeTable.Th>
          <NativeTable.Th numeric>話数</NativeTable.Th>
        </NativeTable.Tr>
      </NativeTable.Thead>

      <NativeTable.Tbody>
        <NativeTable.Tr>
          <NativeTable.Td>ドラゴンボール</NativeTable.Td>
          <NativeTable.Td>1986年2月26日 - 1989年4月19日</NativeTable.Td>
          <NativeTable.Td numeric>全153話</NativeTable.Td>
        </NativeTable.Tr>
        <NativeTable.Tr>
          <NativeTable.Td>ドラゴンボールZ</NativeTable.Td>
          <NativeTable.Td>1989年4月26日 - 1996年1月31日</NativeTable.Td>
          <NativeTable.Td numeric>全291話 + スペシャル2話</NativeTable.Td>
        </NativeTable.Tr>
        <NativeTable.Tr>
          <NativeTable.Td>ドラゴンボールGT</NativeTable.Td>
          <NativeTable.Td>1996年2月7日 - 1997年11月19日</NativeTable.Td>
          <NativeTable.Td numeric>全64話 + 番外編1話</NativeTable.Td>
        </NativeTable.Tr>
        <NativeTable.Tr>
          <NativeTable.Td>ドラゴンボール改</NativeTable.Td>
          <NativeTable.Td>2009年4月5日 - 2015年6月28日</NativeTable.Td>
          <NativeTable.Td numeric>全159話</NativeTable.Td>
        </NativeTable.Tr>
        <NativeTable.Tr>
          <NativeTable.Td>ドラゴンボール超</NativeTable.Td>
          <NativeTable.Td>2015年7月5日 - 2018年3月25日</NativeTable.Td>
          <NativeTable.Td numeric>全131話</NativeTable.Td>
        </NativeTable.Tr>
      </NativeTable.Tbody>

      <NativeTable.Tfoot>
        <NativeTable.Tr>
          <NativeTable.Th>作品名</NativeTable.Th>
          <NativeTable.Th>放送期間</NativeTable.Th>
          <NativeTable.Th numeric>話数</NativeTable.Th>
        </NativeTable.Tr>
      </NativeTable.Tfoot>
    </NativeTable.Root>
  )
}

export const Sticky: Story = () => {
  return (
    <>
      <NativeTable.Root
        variant="outline"
        stickyHeader
        withScrollArea
        scrollAreaProps={{ maxH: "3xs", rounded: "l2" }}
      >
        <NativeTable.Thead>
          <NativeTable.Tr>
            <NativeTable.Th>作品名</NativeTable.Th>
            <NativeTable.Th>放送期間</NativeTable.Th>
            <NativeTable.Th numeric>話数</NativeTable.Th>
          </NativeTable.Tr>
        </NativeTable.Thead>

        <NativeTable.Tbody>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボール</NativeTable.Td>
            <NativeTable.Td>1986年2月26日 - 1989年4月19日</NativeTable.Td>
            <NativeTable.Td numeric>全153話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボールZ</NativeTable.Td>
            <NativeTable.Td>1989年4月26日 - 1996年1月31日</NativeTable.Td>
            <NativeTable.Td numeric>全291話 + スペシャル2話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボールGT</NativeTable.Td>
            <NativeTable.Td>1996年2月7日 - 1997年11月19日</NativeTable.Td>
            <NativeTable.Td numeric>全64話 + 番外編1話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボール改</NativeTable.Td>
            <NativeTable.Td>2009年4月5日 - 2015年6月28日</NativeTable.Td>
            <NativeTable.Td numeric>全159話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボール超</NativeTable.Td>
            <NativeTable.Td>2015年7月5日 - 2018年3月25日</NativeTable.Td>
            <NativeTable.Td numeric>全131話</NativeTable.Td>
          </NativeTable.Tr>
        </NativeTable.Tbody>
      </NativeTable.Root>

      <NativeTable.Root
        variant="outline"
        stickyFooter
        stickyHeader
        withScrollArea
        scrollAreaProps={{ maxH: "3xs", rounded: "l2" }}
      >
        <NativeTable.Thead>
          <NativeTable.Tr>
            <NativeTable.Th>作品名</NativeTable.Th>
            <NativeTable.Th>放送期間</NativeTable.Th>
            <NativeTable.Th numeric>話数</NativeTable.Th>
          </NativeTable.Tr>
        </NativeTable.Thead>

        <NativeTable.Tbody>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボール</NativeTable.Td>
            <NativeTable.Td>1986年2月26日 - 1989年4月19日</NativeTable.Td>
            <NativeTable.Td numeric>全153話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボールZ</NativeTable.Td>
            <NativeTable.Td>1989年4月26日 - 1996年1月31日</NativeTable.Td>
            <NativeTable.Td numeric>全291話 + スペシャル2話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボールGT</NativeTable.Td>
            <NativeTable.Td>1996年2月7日 - 1997年11月19日</NativeTable.Td>
            <NativeTable.Td numeric>全64話 + 番外編1話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボール改</NativeTable.Td>
            <NativeTable.Td>2009年4月5日 - 2015年6月28日</NativeTable.Td>
            <NativeTable.Td numeric>全159話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボール超</NativeTable.Td>
            <NativeTable.Td>2015年7月5日 - 2018年3月25日</NativeTable.Td>
            <NativeTable.Td numeric>全131話</NativeTable.Td>
          </NativeTable.Tr>
        </NativeTable.Tbody>

        <NativeTable.Tfoot>
          <NativeTable.Tr>
            <NativeTable.Th>作品名</NativeTable.Th>
            <NativeTable.Th>放送期間</NativeTable.Th>
            <NativeTable.Th numeric>話数</NativeTable.Th>
          </NativeTable.Tr>
        </NativeTable.Tfoot>
      </NativeTable.Root>
    </>
  )
}

export const Caption: Story = () => {
  return (
    <>
      <NativeTable.Root>
        <NativeTable.Caption placement="top">
          ©バードスタジオ/集英社・東映アニメーション
        </NativeTable.Caption>

        <NativeTable.Thead>
          <NativeTable.Tr>
            <NativeTable.Th>作品名</NativeTable.Th>
            <NativeTable.Th>放送期間</NativeTable.Th>
            <NativeTable.Th numeric>話数</NativeTable.Th>
          </NativeTable.Tr>
        </NativeTable.Thead>

        <NativeTable.Tbody>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボール</NativeTable.Td>
            <NativeTable.Td>1986年2月26日 - 1989年4月19日</NativeTable.Td>
            <NativeTable.Td numeric>全153話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボールZ</NativeTable.Td>
            <NativeTable.Td>1989年4月26日 - 1996年1月31日</NativeTable.Td>
            <NativeTable.Td numeric>全291話 + スペシャル2話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボールGT</NativeTable.Td>
            <NativeTable.Td>1996年2月7日 - 1997年11月19日</NativeTable.Td>
            <NativeTable.Td numeric>全64話 + 番外編1話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボール改</NativeTable.Td>
            <NativeTable.Td>2009年4月5日 - 2015年6月28日</NativeTable.Td>
            <NativeTable.Td numeric>全159話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボール超</NativeTable.Td>
            <NativeTable.Td>2015年7月5日 - 2018年3月25日</NativeTable.Td>
            <NativeTable.Td numeric>全131話</NativeTable.Td>
          </NativeTable.Tr>
        </NativeTable.Tbody>

        <NativeTable.Tfoot>
          <NativeTable.Tr>
            <NativeTable.Th>作品名</NativeTable.Th>
            <NativeTable.Th>放送期間</NativeTable.Th>
            <NativeTable.Th numeric>話数</NativeTable.Th>
          </NativeTable.Tr>
        </NativeTable.Tfoot>
      </NativeTable.Root>

      <NativeTable.Root>
        <NativeTable.Caption placement="bottom">
          ©バードスタジオ/集英社・東映アニメーション
        </NativeTable.Caption>

        <NativeTable.Thead>
          <NativeTable.Tr>
            <NativeTable.Th>作品名</NativeTable.Th>
            <NativeTable.Th>放送期間</NativeTable.Th>
            <NativeTable.Th numeric>話数</NativeTable.Th>
          </NativeTable.Tr>
        </NativeTable.Thead>

        <NativeTable.Tbody>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボール</NativeTable.Td>
            <NativeTable.Td>1986年2月26日 - 1989年4月19日</NativeTable.Td>
            <NativeTable.Td numeric>全153話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボールZ</NativeTable.Td>
            <NativeTable.Td>1989年4月26日 - 1996年1月31日</NativeTable.Td>
            <NativeTable.Td numeric>全291話 + スペシャル2話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボールGT</NativeTable.Td>
            <NativeTable.Td>1996年2月7日 - 1997年11月19日</NativeTable.Td>
            <NativeTable.Td numeric>全64話 + 番外編1話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボール改</NativeTable.Td>
            <NativeTable.Td>2009年4月5日 - 2015年6月28日</NativeTable.Td>
            <NativeTable.Td numeric>全159話</NativeTable.Td>
          </NativeTable.Tr>
          <NativeTable.Tr>
            <NativeTable.Td>ドラゴンボール超</NativeTable.Td>
            <NativeTable.Td>2015年7月5日 - 2018年3月25日</NativeTable.Td>
            <NativeTable.Td numeric>全131話</NativeTable.Td>
          </NativeTable.Tr>
        </NativeTable.Tbody>

        <NativeTable.Tfoot>
          <NativeTable.Tr>
            <NativeTable.Th>作品名</NativeTable.Th>
            <NativeTable.Th>放送期間</NativeTable.Th>
            <NativeTable.Th numeric>話数</NativeTable.Th>
          </NativeTable.Tr>
        </NativeTable.Tfoot>
      </NativeTable.Root>
    </>
  )
}

export const Colgroup: Story = () => {
  return (
    <NativeTable.Root>
      <NativeTable.Colgroup>
        <NativeTable.Col width="30%" />
        <NativeTable.Col width="40%" />
        <NativeTable.Col width="30%" />
      </NativeTable.Colgroup>

      <NativeTable.Thead>
        <NativeTable.Tr>
          <NativeTable.Th>作品名</NativeTable.Th>
          <NativeTable.Th>放送期間</NativeTable.Th>
          <NativeTable.Th numeric>話数</NativeTable.Th>
        </NativeTable.Tr>
      </NativeTable.Thead>

      <NativeTable.Tbody>
        <NativeTable.Tr>
          <NativeTable.Td>ドラゴンボール</NativeTable.Td>
          <NativeTable.Td>1986年2月26日 - 1989年4月19日</NativeTable.Td>
          <NativeTable.Td numeric>全153話</NativeTable.Td>
        </NativeTable.Tr>
        <NativeTable.Tr>
          <NativeTable.Td>ドラゴンボールZ</NativeTable.Td>
          <NativeTable.Td>1989年4月26日 - 1996年1月31日</NativeTable.Td>
          <NativeTable.Td numeric>全291話 + スペシャル2話</NativeTable.Td>
        </NativeTable.Tr>
        <NativeTable.Tr>
          <NativeTable.Td>ドラゴンボールGT</NativeTable.Td>
          <NativeTable.Td>1996年2月7日 - 1997年11月19日</NativeTable.Td>
          <NativeTable.Td numeric>全64話 + 番外編1話</NativeTable.Td>
        </NativeTable.Tr>
        <NativeTable.Tr>
          <NativeTable.Td>ドラゴンボール改</NativeTable.Td>
          <NativeTable.Td>2009年4月5日 - 2015年6月28日</NativeTable.Td>
          <NativeTable.Td numeric>全159話</NativeTable.Td>
        </NativeTable.Tr>
        <NativeTable.Tr>
          <NativeTable.Td>ドラゴンボール超</NativeTable.Td>
          <NativeTable.Td>2015年7月5日 - 2018年3月25日</NativeTable.Td>
          <NativeTable.Td numeric>全131話</NativeTable.Td>
        </NativeTable.Tr>
      </NativeTable.Tbody>

      <NativeTable.Tfoot>
        <NativeTable.Tr>
          <NativeTable.Th>作品名</NativeTable.Th>
          <NativeTable.Th>放送期間</NativeTable.Th>
          <NativeTable.Th numeric>話数</NativeTable.Th>
        </NativeTable.Tr>
      </NativeTable.Tfoot>
    </NativeTable.Root>
  )
}
