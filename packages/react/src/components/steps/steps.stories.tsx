import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { useMemo, useState } from "react"
import { Steps } from "."
import { COLOR_SCHEMES } from "../../utils"
import { Box } from "../box"
import { Button, ButtonGroup } from "../button"
import { VStack } from "../stack"

type Story = StoryFn<typeof Steps.Root>

const meta: Meta<typeof Steps.Root> = {
  component: Steps.Root,
  title: "Components / Steps",
}

export default meta

export const Basic: Story = () => {
  const items: Steps.RootProps["items"] = useMemo(
    () => [
      {
        content:
          "地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",
        description: "レッドリボン軍",
        title: "孫悟空少年編",
      },
      {
        content:
          "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",
        description: "ピッコロ大魔王",
        title: "ピッコロ大魔王編",
      },
      {
        content:
          "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",
        description: "ベジータ・ナッパ",
        title: "サイヤ人編",
      },
    ],
    [],
  )

  return (
    <Steps.Root items={items}>
      <Steps.List />
      <Steps.Contents />
      <Steps.CompletedContent>
        地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。
      </Steps.CompletedContent>

      <ButtonGroup>
        <Steps.PrevTrigger>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>
  )
}

export const Variant: Story = () => {
  const items: Steps.RootProps["items"] = useMemo(
    () => [
      { description: "レッドリボン軍", title: "孫悟空少年編" },
      { description: "ピッコロ大魔王", title: "ピッコロ大魔王編" },
      { description: "ベジータ・ナッパ", title: "サイヤ人編" },
    ],
    [],
  )

  return (
    <PropsTable
      variant="stack"
      columns={["solid", "subtle"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <Steps.Root
            key={key}
            colorScheme={row}
            variant={column}
            defaultIndex={1}
            items={items}
          >
            <Steps.List />
            <Steps.Contents />

            <ButtonGroup>
              <Steps.PrevTrigger>
                <Button>Prev</Button>
              </Steps.PrevTrigger>

              <Steps.NextTrigger>
                <Button>Next</Button>
              </Steps.NextTrigger>
            </ButtonGroup>
          </Steps.Root>
        )
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  const items: Steps.RootProps["items"] = useMemo(
    () => [
      { description: "レッドリボン軍", title: "孫悟空少年編" },
      { description: "ピッコロ大魔王", title: "ピッコロ大魔王編" },
      { description: "ベジータ・ナッパ", title: "サイヤ人編" },
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
        return (
          <Steps.Root key={key} size={row} defaultIndex={1} items={items}>
            <Steps.List />
            <Steps.Contents />

            <ButtonGroup>
              <Steps.PrevTrigger>
                <Button>Prev</Button>
              </Steps.PrevTrigger>

              <Steps.NextTrigger>
                <Button>Next</Button>
              </Steps.NextTrigger>
            </ButtonGroup>
          </Steps.Root>
        )
      }}
    </PropsTable>
  )
}

export const Orientation: Story = () => {
  const items: Steps.RootProps["items"] = useMemo(
    () => [
      {
        content:
          "地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",
        description: "レッドリボン軍",
        title: "孫悟空少年編",
      },
      {
        content:
          "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",
        description: "ピッコロ大魔王",
        title: "ピッコロ大魔王編",
      },
      {
        content:
          "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",
        description: "ベジータ・ナッパ",
        title: "サイヤ人編",
      },
    ],
    [],
  )

  return (
    <>
      <Steps.Root items={items} orientation="horizontal">
        <Steps.List />
        <Steps.Contents />
        <Steps.CompletedContent>
          地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。
        </Steps.CompletedContent>

        <ButtonGroup>
          <Steps.PrevTrigger>
            <Button>Prev</Button>
          </Steps.PrevTrigger>
          <Steps.NextTrigger>
            <Button>Next</Button>
          </Steps.NextTrigger>
        </ButtonGroup>
      </Steps.Root>

      <Steps.Root h="lg" items={items} orientation="vertical">
        <Steps.List />

        <VStack flex="1">
          <Steps.Contents />
          <Steps.CompletedContent>
            地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。
          </Steps.CompletedContent>

          <ButtonGroup>
            <Steps.PrevTrigger>
              <Button>Prev</Button>
            </Steps.PrevTrigger>
            <Steps.NextTrigger>
              <Button>Next</Button>
            </Steps.NextTrigger>
          </ButtonGroup>
        </VStack>
      </Steps.Root>
    </>
  )
}

export const Lazy: Story = () => {
  const items: Steps.RootProps["items"] = useMemo(
    () => [
      {
        content:
          "地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",
        description: "レッドリボン軍",
        title: "孫悟空少年編",
      },
      {
        content:
          "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",
        description: "ピッコロ大魔王",
        title: "ピッコロ大魔王編",
      },
      {
        content:
          "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",
        description: "ベジータ・ナッパ",
        title: "サイヤ人編",
      },
    ],
    [],
  )

  return (
    <Steps.Root items={items} lazy>
      <Steps.List />
      <Steps.Contents />
      <Steps.CompletedContent>
        地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。
      </Steps.CompletedContent>

      <ButtonGroup>
        <Steps.PrevTrigger>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>
  )
}

export const LazyBehavior: Story = () => {
  const items: Steps.RootProps["items"] = useMemo(
    () => [
      {
        content:
          "地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",
        description: "レッドリボン軍",
        title: "孫悟空少年編",
      },
      {
        content:
          "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",
        description: "ピッコロ大魔王",
        title: "ピッコロ大魔王編",
      },
      {
        content:
          "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",
        description: "ベジータ・ナッパ",
        title: "サイヤ人編",
      },
    ],
    [],
  )

  return (
    <Steps.Root items={items} lazy lazyBehavior="keepMounted">
      <Steps.List />
      <Steps.Contents />
      <Steps.CompletedContent>
        地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。
      </Steps.CompletedContent>

      <ButtonGroup>
        <Steps.PrevTrigger>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>
  )
}

export const CustomIndicator: Story = () => {
  const items: Steps.RootProps["items"] = useMemo(
    () => [
      {
        complete: `😇`,
        current: `😎`,
        description: "レッドリボン軍",
        incomplete: `😑`,
        title: "孫悟空少年編",
      },
      {
        complete: `😇`,
        current: `😎`,
        description: "ピッコロ大魔王",
        incomplete: `😑`,
        title: "ピッコロ大魔王編",
      },
      {
        complete: `😇`,
        current: `😎`,
        description: "ベジータ・ナッパ",
        incomplete: `😑`,
        title: "サイヤ人編",
      },
    ],
    [],
  )

  return (
    <Steps.Root items={items}>
      <Steps.List />

      <ButtonGroup>
        <Steps.PrevTrigger>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>
  )
}

export const CustomComponent: Story = () => {
  return (
    <Steps.Root count={3}>
      <Steps.List>
        <Steps.Item index={0}>
          <Steps.Indicator />
          <Box>
            <Steps.Title>孫悟空少年編</Steps.Title>
            <Steps.Description>レッドリボン軍</Steps.Description>
          </Box>
          <Steps.Separator />
        </Steps.Item>
        <Steps.Item index={1}>
          <Steps.Indicator />
          <Box>
            <Steps.Title>ピッコロ大魔王編</Steps.Title>
            <Steps.Description>ピッコロ大魔王</Steps.Description>
          </Box>
          <Steps.Separator />
        </Steps.Item>
        <Steps.Item index={2}>
          <Steps.Indicator />
          <Box>
            <Steps.Title>サイヤ人編</Steps.Title>
            <Steps.Description>ベジータ・ナッパ</Steps.Description>
          </Box>
          <Steps.Separator />
        </Steps.Item>
      </Steps.List>

      <Steps.Contents>
        <Steps.Content index={0}>
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </Steps.Content>
        <Steps.Content index={1}>
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </Steps.Content>
        <Steps.Content index={2}>
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </Steps.Content>
      </Steps.Contents>

      <Steps.CompletedContent>
        地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。
      </Steps.CompletedContent>

      <ButtonGroup>
        <Steps.PrevTrigger>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>
  )
}

export const CustomControl: Story = () => {
  const [index, setIndex] = useState(0)
  const items: Steps.RootProps["items"] = useMemo(
    () => [
      { description: "レッドリボン軍", title: "孫悟空少年編" },
      { description: "ピッコロ大魔王", title: "ピッコロ大魔王編" },
      { description: "ベジータ・ナッパ", title: "サイヤ人編" },
    ],
    [],
  )

  return (
    <Steps.Root index={index} items={items} onChange={setIndex}>
      <Steps.List />

      <ButtonGroup>
        <Steps.PrevTrigger>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>
  )
}
