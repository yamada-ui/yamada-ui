import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { useMemo } from "react"
import { expect, screen, within } from "storybook/test"
import { ChevronsDownIcon } from "../icon"
import { NativeAccordion } from "./index"

type Story = StoryFn<typeof NativeAccordion.Root>

const meta: Meta<typeof NativeAccordion.Root> = {
  component: NativeAccordion.Root,
  title: "Components / NativeAccordion",
}

export default meta

export const Basic: Story = () => {
  const items = useMemo<NativeAccordion.Item[]>(
    () => [
      {
        button: "孫悟空少年編",
        children:
          "地球の人里離れた山奥に住む尻尾の生えた少年-孫悟空はある日、西の都からやって来た少女-ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",
      },
      {
        button: "ピッコロ大魔王編",
        children:
          "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",
      },
      {
        button: "サイヤ人編",
        children:
          "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄-ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族-サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",
      },
    ],
    [],
  )

  return (
    <NativeAccordion.Root>
      {items.map(({ button, children }, index) => (
        <NativeAccordion.Item key={index} button={button}>
          {children}
        </NativeAccordion.Item>
      ))}
    </NativeAccordion.Root>
  )
}

Basic.play = async ({ canvas, userEvent }) => {
  const trigger = canvas.getByText(/孫悟空少年編/).closest("summary")
  if (!trigger) {
    throw new Error("Expected accordion summary")
  }
  await userEvent.click(trigger)
  const details = trigger.closest("details")
  if (!details || !(details instanceof HTMLElement)) {
    throw new Error("Expected details")
  }
  await expect(
    await within(details).findByText(
      /地球の人里離れた山奥に住む尻尾の生えた少年/,
    ),
  ).toBeVisible()
}

export const Items: Story = () => {
  const items = useMemo<NativeAccordion.Item[]>(
    () => [
      {
        button: "孫悟空少年編",
        children:
          "地球の人里離れた山奥に住む尻尾の生えた少年-孫悟空はある日、西の都からやって来た少女-ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",
      },
      {
        button: "ピッコロ大魔王編",
        children:
          "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",
      },
      {
        button: "サイヤ人編",
        children:
          "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄-ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族-サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",
      },
    ],
    [],
  )

  return <NativeAccordion.Root items={items} />
}

Items.play = async ({ canvas, userEvent }) => {
  const trigger = canvas.getByText(/孫悟空少年編/).closest("summary")
  if (!trigger) {
    throw new Error("Expected accordion summary")
  }
  await userEvent.click(trigger)
  const details = trigger.closest("details")
  if (!details || !(details instanceof HTMLElement)) {
    throw new Error("Expected details")
  }
  await expect(
    await within(details).findByText(
      /地球の人里離れた山奥に住む尻尾の生えた少年/,
    ),
  ).toBeVisible()
}

export const Variant: Story = () => {
  const items = useMemo<NativeAccordion.Item[]>(
    () => [
      {
        button: "孫悟空少年編",
        children:
          "地球の人里離れた山奥に住む尻尾の生えた少年-孫悟空はある日、西の都からやって来た少女-ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",
      },
      {
        button: "ピッコロ大魔王編",
        children:
          "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",
      },
      {
        button: "サイヤ人編",
        children:
          "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄-ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族-サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",
      },
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["plain", "panel"]}>
      {(_, row, key) => (
        <NativeAccordion.Root key={key} variant={row} items={items} />
      )}
    </PropsTable>
  )
}

Variant.play = async ({ canvas, userEvent }) => {
  const trigger = canvas.getAllByText(/孫悟空少年編/)[0]!.closest("summary")
  if (!trigger) {
    throw new Error("Expected accordion summary")
  }
  await userEvent.click(trigger)
  const details = trigger.closest("details")
  if (!details || !(details instanceof HTMLElement)) {
    throw new Error("Expected details")
  }
  await expect(
    await within(details).findByText(
      /地球の人里離れた山奥に住む尻尾の生えた少年/,
    ),
  ).toBeVisible()
}

export const DefaultOpen: Story = () => {
  const items = useMemo<NativeAccordion.Item[]>(
    () => [
      {
        button: "孫悟空少年編",
        children:
          "地球の人里離れた山奥に住む尻尾の生えた少年-孫悟空はある日、西の都からやって来た少女-ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",
      },
      {
        button: "ピッコロ大魔王編",
        children:
          "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",
        open: true,
      },
      {
        button: "サイヤ人編",
        children:
          "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄-ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族-サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",
      },
    ],
    [],
  )

  return <NativeAccordion.Root items={items} />
}

DefaultOpen.play = async () => {
  const trigger = screen.getByText(/ピッコロ大魔王編/).closest("summary")
  if (!trigger) {
    throw new Error("Expected accordion summary")
  }
  const details = trigger.closest("details")
  if (!details || !(details instanceof HTMLElement)) {
    throw new Error("Expected details")
  }
  await expect(
    await within(details).findByText(
      /天下一武道会終了後、ピラフ一味によって復活した/,
    ),
  ).toBeVisible()
}

export const Multiple: Story = () => {
  const items = useMemo<NativeAccordion.Item[]>(
    () => [
      {
        button: "孫悟空少年編",
        children:
          "地球の人里離れた山奥に住む尻尾の生えた少年-孫悟空はある日、西の都からやって来た少女-ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",
      },
      {
        button: "ピッコロ大魔王編",
        children:
          "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",
      },
      {
        button: "サイヤ人編",
        children:
          "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄-ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族-サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",
      },
    ],
    [],
  )

  return <NativeAccordion.Root items={items} multiple />
}

Multiple.play = async ({ canvas, userEvent }) => {
  const trigger1 = canvas.getByText(/孫悟空少年編/).closest("summary")
  if (!trigger1) {
    throw new Error("Expected accordion summary")
  }
  await userEvent.click(trigger1)
  const details1 = trigger1.closest("details")
  if (!details1 || !(details1 instanceof HTMLElement)) {
    throw new Error("Expected details")
  }
  await expect(
    await within(details1).findByText(
      /地球の人里離れた山奥に住む尻尾の生えた少年/,
    ),
  ).toBeVisible()

  const trigger2 = canvas.getByText(/ピッコロ大魔王編/).closest("summary")
  if (!trigger2) {
    throw new Error("Expected accordion summary")
  }
  await userEvent.click(trigger2)
  const details2 = trigger2.closest("details")
  if (!details2 || !(details2 instanceof HTMLElement)) {
    throw new Error("Expected details")
  }
  await expect(
    await within(details2).findByText(
      /天下一武道会終了後、ピラフ一味によって復活した/,
    ),
  ).toBeVisible()
}

export const IconHidden: Story = () => {
  const items = useMemo<NativeAccordion.Item[]>(
    () => [
      {
        button: "孫悟空少年編",
        children:
          "地球の人里離れた山奥に住む尻尾の生えた少年-孫悟空はある日、西の都からやって来た少女-ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",
      },
      {
        button: "ピッコロ大魔王編",
        children:
          "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",
      },
      {
        button: "サイヤ人編",
        children:
          "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄-ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族-サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",
      },
    ],
    [],
  )

  return <NativeAccordion.Root iconHidden items={items} />
}

IconHidden.play = async ({ canvas, userEvent }) => {
  const trigger = canvas.getByText(/孫悟空少年編/).closest("summary")
  if (!trigger) {
    throw new Error("Expected accordion summary")
  }
  await userEvent.click(trigger)
  const details = trigger.closest("details")
  if (!details || !(details instanceof HTMLElement)) {
    throw new Error("Expected details")
  }
  await expect(
    await within(details).findByText(
      /地球の人里離れた山奥に住む尻尾の生えた少年/,
    ),
  ).toBeVisible()
}

export const Disabled: Story = () => {
  const items = useMemo<NativeAccordion.Item[]>(
    () => [
      {
        button: "孫悟空少年編",
        children:
          "地球の人里離れた山奥に住む尻尾の生えた少年-孫悟空はある日、西の都からやって来た少女-ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",
      },
      {
        button: "ピッコロ大魔王編",
        children:
          "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する.闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",
        disabled: true,
      },
      {
        button: "サイヤ人編",
        children:
          "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄-ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族-サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",
      },
    ],
    [],
  )

  return <NativeAccordion.Root items={items} />
}

Disabled.play = async ({ canvas, userEvent }) => {
  const trigger = canvas.getByText(/孫悟空少年編/).closest("summary")
  if (!trigger) {
    throw new Error("Expected accordion summary")
  }
  await userEvent.click(trigger)
  const details = trigger.closest("details")
  if (!details || !(details instanceof HTMLElement)) {
    throw new Error("Expected details")
  }
  await expect(
    await within(details).findByText(
      /地球の人里離れた山奥に住む尻尾の生えた少年/,
    ),
  ).toBeVisible()
}

export const CustomLabel: Story = () => {
  return (
    <NativeAccordion.Root>
      <NativeAccordion.Item>
        <NativeAccordion.Button _groupOpen={{ bg: "bg.panel" }}>
          孫悟空少年編
        </NativeAccordion.Button>

        <NativeAccordion.Panel css={{ "& > div": { _groupOpen: { pt: "3" } } }}>
          地球の人里離れた山奥に住む尻尾の生えた少年-孫悟空はある日、西の都からやって来た少女-ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </NativeAccordion.Panel>
      </NativeAccordion.Item>

      <NativeAccordion.Item>
        <NativeAccordion.Button _groupOpen={{ bg: "bg.panel" }}>
          ピッコロ大魔王編
        </NativeAccordion.Button>

        <NativeAccordion.Panel css={{ "& > div": { _groupOpen: { pt: "3" } } }}>
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </NativeAccordion.Panel>
      </NativeAccordion.Item>

      <NativeAccordion.Item>
        <NativeAccordion.Button _groupOpen={{ bg: "bg.panel" }}>
          サイヤ人編
        </NativeAccordion.Button>

        <NativeAccordion.Panel css={{ "& > div": { _groupOpen: { pt: "3" } } }}>
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄-ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族-サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </NativeAccordion.Panel>
      </NativeAccordion.Item>
    </NativeAccordion.Root>
  )
}

CustomLabel.play = async ({ canvas, userEvent }) => {
  const trigger = canvas.getByText(/孫悟空少年編/).closest("summary")
  if (!trigger) {
    throw new Error("Expected accordion summary")
  }
  await userEvent.click(trigger)
  const details = trigger.closest("details")
  if (!details || !(details instanceof HTMLElement)) {
    throw new Error("Expected details")
  }
  await expect(
    await within(details).findByText(
      /地球の人里離れた山奥に住む尻尾の生えた少年/,
    ),
  ).toBeVisible()
}

export const CustomPanel: Story = () => {
  const items = useMemo(
    () => [
      {
        button: "孫悟空少年編",
        children:
          "地球の人里離れた山奥に住む尻尾の生えた少年-孫悟空はある日、西の都からやって来た少女-ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",
      },
      {
        button: "ピッコロ大魔王編",
        children:
          "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する.闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",
      },
      {
        button: "サイヤ人編",
        children:
          "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄-ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族-サイヤ人であることを知らされる.さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",
      },
    ],
    [],
  )

  return (
    <NativeAccordion.Root>
      {items.map(({ button, children }, index) => (
        <NativeAccordion.Item key={index} button={button}>
          <NativeAccordion.Panel bg="bg.panel" pt={3}>
            {children}
          </NativeAccordion.Panel>
        </NativeAccordion.Item>
      ))}
    </NativeAccordion.Root>
  )
}

CustomPanel.play = async ({ canvas, userEvent }) => {
  const trigger = canvas.getByText(/孫悟空少年編/).closest("summary")
  if (!trigger) {
    throw new Error("Expected accordion summary")
  }
  await userEvent.click(trigger)
  const details = trigger.closest("details")
  if (!details || !(details instanceof HTMLElement)) {
    throw new Error("Expected details")
  }
  await expect(
    await within(details).findByText(
      /地球の人里離れた山奥に住む尻尾の生えた少年/,
    ),
  ).toBeVisible()
}

export const CustomIcon: Story = () => {
  const items = useMemo<NativeAccordion.Item[]>(
    () => [
      {
        button: "孫悟空少年編",
        children:
          "地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",
      },
      {
        button: "ピッコロ大魔王編",
        children:
          "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",
      },
      {
        button: "サイヤ人編",
        children:
          "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",
      },
    ],
    [],
  )

  return <NativeAccordion.Root icon={<ChevronsDownIcon />} items={items} />
}

CustomIcon.play = async ({ canvas, userEvent }) => {
  const trigger = canvas.getByText(/孫悟空少年編/).closest("summary")
  if (!trigger) {
    throw new Error("Expected accordion summary")
  }
  await userEvent.click(trigger)
  const details = trigger.closest("details")
  if (!details || !(details instanceof HTMLElement)) {
    throw new Error("Expected details")
  }
  await expect(
    await within(details).findByText(
      /地球の人里離れた山奥に住む尻尾の生えた少年/,
    ),
  ).toBeVisible()
}
