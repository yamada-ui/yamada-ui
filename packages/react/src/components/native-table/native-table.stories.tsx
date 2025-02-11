import type { Meta, StoryFn } from "@storybook/react"
import type { FC } from "react"
// import defaultTheme from "../../theme"
import { COLOR_SCHEMES } from "../../utils"
// import { ScrollArea } from "../scroll-area"
import { NativeTable } from "./"

type Story = StoryFn<typeof NativeTable.Root>

const meta: Meta<typeof NativeTable.Root> = {
  component: NativeTable.Root,
  title: "Components / NativeTable",
}

export default meta

export const Basic: Story = () => {
  return (
    <NativeTable.Container>
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
    </NativeTable.Container>
  )
}

export const Size: Story = () => {
  const Table: FC<NativeTable.RootProps> = (props) => {
    return (
      <NativeTable.Container>
        <NativeTable.Root {...props}>
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
      </NativeTable.Container>
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

export const Variant: Story = () => {
  const Table: FC<NativeTable.RootProps> = (props) => {
    return (
      <NativeTable.Container>
        <NativeTable.Root {...props}>
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
      </NativeTable.Container>
    )
  }

  return (
    <>
      <Table variant="simple" />
      <Table variant="striped" />
    </>
  )
}

export const ColorScheme: Story = () => {
  const Table: FC<NativeTable.RootProps> = (props) => {
    return (
      <NativeTable.Container>
        <NativeTable.Root {...props}>
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
      </NativeTable.Container>
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

export const ColumnBorders: Story = () => {
  return (
    <NativeTable.Container>
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
    </NativeTable.Container>
  )
}

export const Border: Story = () => {
  return (
    <NativeTable.Container>
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
    </NativeTable.Container>
  )
}

export const HighlightOnHover: Story = () => {
  return (
    <NativeTable.Container>
      <NativeTable.Root highlightOnHover>
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
    </NativeTable.Container>
  )
}

export const Caption: Story = () => {
  return (
    <>
      <NativeTable.Container>
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
      </NativeTable.Container>
      <NativeTable.Container>
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
      </NativeTable.Container>
    </>
  )
}

// export const StickyHeader: Story = () => {
//   const [scrolled, setScrolled] = useState(false)

//   return (
//     <NativeTable.Container w="full">
//       <ScrollArea
//         h="xs"
//         w="full"
//         onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
//       >
//         <NativeTable.Root>
//           <NativeTable.Thead
//             bg={["white", "black"]}
//             boxShadow={scrolled ? "md" : undefined}
//             position="sticky"
//             top={0}
//             NativeTable.transitionDuration="slow"
//             NativeTable.transitionProperty="box-shadow"
//           >
//             <NativeTable.Tr>
//               <NativeTable.Th>Name</NativeTable.Th>
//               <NativeTable.Th numeric>Rem</NativeTable.Th>
//               <NativeTable.Th numeric>Pixel</NativeTable.Th>
//               <NativeTable.Th>Progress</NativeTable.Th>
//             </NativeTable.Tr>
//           </NativeTable.Thead>

//           <NativeTable.Tbody>
//             <NativeTable.Tr>
//               <NativeTable.Td>xs</NativeTable.Td>
//               <NativeTable.Td numeric>0.25rem</NativeTable.Td>
//               <NativeTable.Td numeric>4px</NativeTable.Td>
//               <NativeTable.Td>
//                 <Box bg="red.500" h="9xs" maxW="0.25rem" />
//               </NativeTable.Td>
//             </NativeTable.Tr>
//             <NativeTable.Tr>
//               <NativeTable.Td>sm</NativeTable.Td>
//               <NativeTable.Td numeric>0.5rem</NativeTable.Td>
//               <NativeTable.Td numeric>8px</NativeTable.Td>
//               <NativeTable.Td>
//                 <Box bg="red.500" h="9xs" maxW="0.5rem" />
//               </NativeTable.Td>
//             </NativeTable.Tr>
//             <NativeTable.Tr>
//               <NativeTable.Td>md</NativeTable.Td>
//               <NativeTable.Td numeric>1rem</NativeTable.Td>
//               <NativeTable.Td numeric>16px</NativeTable.Td>
//               <NativeTable.Td>
//                 <Box bg="red.500" h="9xs" maxW="1rem" />
//               </NativeTable.Td>
//             </NativeTable.Tr>
//             <NativeTable.Tr>
//               <NativeTable.Td>normal</NativeTable.Td>
//               <NativeTable.Td numeric>1.5rem</NativeTable.Td>
//               <NativeTable.Td numeric>24px</NativeTable.Td>
//               <NativeTable.Td>
//                 <Box bg="red.500" h="9xs" maxW="1.5rem" />
//               </NativeTable.Td>
//             </NativeTable.Tr>
//             <NativeTable.Tr>
//               <NativeTable.Td>lg</NativeTable.Td>
//               <NativeTable.Td numeric>2rem</NativeTable.Td>
//               <NativeTable.Td numeric>32px</NativeTable.Td>
//               <NativeTable.Td>
//                 <Box bg="red.500" h="9xs" maxW="2rem" />
//               </NativeTable.Td>
//             </NativeTable.Tr>
//             <NativeTable.Tr>
//               <NativeTable.Td>xl</NativeTable.Td>
//               <NativeTable.Td numeric>3rem</NativeTable.Td>
//               <NativeTable.Td numeric>48px</NativeTable.Td>
//               <NativeTable.Td>
//                 <Box bg="red.500" h="9xs" maxW="3rem" />
//               </NativeTable.Td>
//             </NativeTable.Tr>
//             <NativeTable.Tr>
//               <NativeTable.Td>2xl</NativeTable.Td>
//               <NativeTable.Td numeric>4.5rem</NativeTable.Td>
//               <NativeTable.Td numeric>72px</NativeTable.Td>
//               <NativeTable.Td>
//                 <Box bg="red.500" h="9xs" maxW="4.5rem" />
//               </NativeTable.Td>
//             </NativeTable.Tr>
//             <NativeTable.Tr>
//               <NativeTable.Td>3xl</NativeTable.Td>
//               <NativeTable.Td numeric>6rem</NativeTable.Td>
//               <NativeTable.Td numeric>96px</NativeTable.Td>
//               <NativeTable.Td>
//                 <Box bg="red.500" h="9xs" maxW="6rem" />
//               </NativeTable.Td>
//             </NativeTable.Tr>
//             <NativeTable.Tr>
//               <NativeTable.Td>4xl</NativeTable.Td>
//               <NativeTable.Td numeric>10rem</NativeTable.Td>
//               <NativeTable.Td numeric>160px</NativeTable.Td>
//               <NativeTable.Td>
//                 <Box bg="red.500" h="9xs" maxW="10rem" />
//               </NativeTable.Td>
//             </NativeTable.Tr>
//             {Object.enNativeTable.tries(defaultTheme.spaces)
//               .filter(([key]) => !isNaN(Number(key)))
//               .sort(([a], [b]) => Number(a) - Number(b))
//               .map(([key, value]) => {
//                 if (!isString(value)) return null

//                 return (
//                   <NativeTable.Tr key={key}>
//                     <NativeTable.Td>{key}</NativeTable.Td>
//                     <NativeTable.Td numeric>{value}</NativeTable.Td>
//                     <NativeTable.Td numeric>{`${parseFloat(value) * 16}px`}</NativeTable.Td>
//                     <NativeTable.Td>
//                       <Box bg="green.500" h="9xs" maxW={value} />
//                     </NativeTable.Td>
//                   </NativeTable.Tr>
//                 )
//               })}
//           </NativeTable.Tbody>
//         </NativeTable.Root>
//       </ScrollArea>
//     </NativeTable.Container>
//   )
// }
