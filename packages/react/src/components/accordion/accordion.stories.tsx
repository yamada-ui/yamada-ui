import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { useMemo, useState } from "react"
import { expect, screen, within } from "storybook/test"
import { MinusIcon, PlusIcon } from "../icon"
import { Accordion } from "./"

type Story = StoryFn<typeof Accordion.Root>

const meta: Meta<typeof Accordion.Root> = {
  component: Accordion.Root,
  title: "Components / Accordion",
}

export default meta

export const Basic: Story = () => {
  const items = useMemo(
    () => [
      {
        button: "孫悟空少年編",
        content:
          "地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",
      },
      {
        button: "ピッコロ大魔王編",
        content:
          "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",
      },
      {
        button: "サイヤ人編",
        content:
          "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",
      },
    ],
    [],
  )

  return (
    <Accordion.Root items={items}>
      {items.map(({ button, content }, index) => (
        <Accordion.Item key={index} button={button} index={index}>
          {content}
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

Basic.play = async ({ canvas, userEvent }) => {
  const trigger = canvas.getByRole("button", { name: /孫悟空少年編/ })
  await userEvent.click(trigger)
  const panelId = trigger.getAttribute("aria-controls")
  const panel = panelId ? document.getElementById(panelId) : null
  if (!panel) {
    throw new Error("Expected accordion panel")
  }
  await expect(
    await within(panel).findByText(
      /地球の人里離れた山奥に住む尻尾の生えた少年/,
    ),
  ).toBeVisible()
}

export const Items: Story = () => {
  const items = useMemo<Accordion.Item[]>(
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

  return <Accordion.Root items={items} />
}

Items.play = async ({ canvas, userEvent }) => {
  const trigger = canvas.getByRole("button", { name: /孫悟空少年編/ })
  await userEvent.click(trigger)
  const panelId = trigger.getAttribute("aria-controls")
  const panel = panelId ? document.getElementById(panelId) : null
  if (!panel) {
    throw new Error("Expected accordion panel")
  }
  await expect(
    await within(panel).findByText(
      /地球の人里離れた山奥に住む尻尾の生えた少年/,
    ),
  ).toBeVisible()
}

export const Variant: Story = () => {
  const items = useMemo<Accordion.Item[]>(
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

  return (
    <PropsTable variant="stack" rows={["plain", "panel"]}>
      {(_, row, key) => {
        const variantItems = items.map((item) => ({
          ...item,
          button: `${item.button} (${row})`,
        }))

        return <Accordion.Root key={key} variant={row} items={variantItems} />
      }}
    </PropsTable>
  )
}

Variant.play = async ({ canvas, userEvent }) => {
  const trigger = canvas.getAllByRole("button", {
    name: /孫悟空少年編/,
  })[0]
  await userEvent.click(trigger)
  const panelId = trigger.getAttribute("aria-controls")
  const panel = panelId ? document.getElementById(panelId) : null
  if (!panel) {
    throw new Error("Expected accordion panel")
  }
  await expect(
    await within(panel).findByText(
      /地球の人里離れた山奥に住む尻尾の生えた少年/,
    ),
  ).toBeVisible()
}

export const DefaultIndex: Story = () => {
  const items = useMemo<Accordion.Item[]>(
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

  return <Accordion.Root defaultIndex={1} items={items} />
}

DefaultIndex.play = async () => {
  const trigger = screen.getByRole("button", { name: /ピッコロ大魔王編/ })
  const panelId = trigger.getAttribute("aria-controls")
  const panel = panelId ? document.getElementById(panelId) : null
  if (!panel) {
    throw new Error("Expected accordion panel")
  }
  await expect(
    await within(panel).findByText(
      /天下一武道会終了後、ピラフ一味によって復活した/,
    ),
  ).toBeVisible()
}

export const Toggle: Story = () => {
  const items = useMemo<Accordion.Item[]>(
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

  return <Accordion.Root items={items} toggle />
}

Toggle.play = async ({ canvas, userEvent }) => {
  const trigger = canvas.getByRole("button", { name: /孫悟空少年編/ })
  await userEvent.click(trigger)
  const panelId = trigger.getAttribute("aria-controls")
  const panel = panelId ? document.getElementById(panelId) : null
  if (!panel) {
    throw new Error("Expected accordion panel")
  }
  await expect(
    await within(panel).findByText(
      /地球の人里離れた山奥に住む尻尾の生えた少年/,
    ),
  ).toBeVisible()
}

export const Multiple: Story = () => {
  const items = useMemo<Accordion.Item[]>(
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

  return <Accordion.Root defaultIndex={[1, 2]} items={items} multiple />
}

Multiple.play = async () => {
  const trigger1 = screen.getByRole("button", { name: /ピッコロ大魔王編/ })
  const panelId1 = trigger1.getAttribute("aria-controls")
  const panel1 = panelId1 ? document.getElementById(panelId1) : null
  if (!panel1) {
    throw new Error("Expected accordion panel")
  }
  await expect(
    await within(panel1).findByText(
      /天下一武道会終了後、ピラフ一味によって復活した/,
    ),
  ).toBeVisible()

  const trigger2 = screen.getByRole("button", { name: /サイヤ人編/ })
  const panelId2 = trigger2.getAttribute("aria-controls")
  const panel2 = panelId2 ? document.getElementById(panelId2) : null
  if (!panel2) {
    throw new Error("Expected accordion panel")
  }
  await expect(
    await within(panel2).findByText(
      /ピッコロ（マジュニア）との闘いから約5年後/,
    ),
  ).toBeVisible()
}

export const IconHidden: Story = () => {
  const items = useMemo<Accordion.Item[]>(
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

  return <Accordion.Root iconHidden items={items} />
}

IconHidden.play = async ({ canvas, userEvent }) => {
  const trigger = canvas.getByRole("button", { name: /孫悟空少年編/ })
  await userEvent.click(trigger)
  const panelId = trigger.getAttribute("aria-controls")
  const panel = panelId ? document.getElementById(panelId) : null
  if (!panel) {
    throw new Error("Expected accordion panel")
  }
  await expect(
    await within(panel).findByText(
      /地球の人里離れた山奥に住む尻尾の生えた少年/,
    ),
  ).toBeVisible()
}

export const Disabled: Story = () => {
  const items = useMemo<Accordion.Item[]>(
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
        disabled: true,
      },
      {
        button: "サイヤ人編",
        children:
          "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",
      },
    ],
    [],
  )

  return <Accordion.Root items={items} />
}

Disabled.play = async ({ canvas, userEvent }) => {
  const trigger = canvas.getByRole("button", { name: /孫悟空少年編/ })
  await userEvent.click(trigger)
  const panelId = trigger.getAttribute("aria-controls")
  const panel = panelId ? document.getElementById(panelId) : null
  if (!panel) {
    throw new Error("Expected accordion panel")
  }
  await expect(
    await within(panel).findByText(
      /地球の人里離れた山奥に住む尻尾の生えた少年/,
    ),
  ).toBeVisible()
}

export const CustomLabel: Story = () => {
  return (
    <Accordion.Root>
      <Accordion.Item index={0}>
        <Accordion.Button _expanded={{ bg: "bg.panel" }}>
          孫悟空少年編
        </Accordion.Button>

        <Accordion.Panel pt={3}>
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item index={1}>
        <Accordion.Button _expanded={{ bg: "bg.panel" }}>
          ピッコロ大魔王編
        </Accordion.Button>

        <Accordion.Panel pt={3}>
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item index={2}>
        <Accordion.Button _expanded={{ bg: "bg.panel" }}>
          サイヤ人編
        </Accordion.Button>

        <Accordion.Panel pt={3}>
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  )
}

CustomLabel.play = async ({ canvas, userEvent }) => {
  const trigger = canvas.getByRole("button", { name: /孫悟空少年編/ })
  await userEvent.click(trigger)
  const panelId = trigger.getAttribute("aria-controls")
  const panel = panelId ? document.getElementById(panelId) : null
  if (!panel) {
    throw new Error("Expected accordion panel")
  }
  await expect(
    await within(panel).findByText(
      /地球の人里離れた山奥に住む尻尾の生えた少年/,
    ),
  ).toBeVisible()
}

export const CustomPanel: Story = () => {
  const items = useMemo(
    () => [
      {
        button: "孫悟空少年編",
        content:
          "地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",
      },
      {
        button: "ピッコロ大魔王編",
        content:
          "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",
      },
      {
        button: "サイヤ人編",
        content:
          "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",
      },
    ],
    [],
  )

  return (
    <Accordion.Root>
      {items.map(({ button, content }, index) => (
        <Accordion.Item key={index} button={button} index={index}>
          <Accordion.Panel bg="bg.panel" pt={3}>
            {content}
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

CustomPanel.play = async ({ canvas, userEvent }) => {
  const trigger = canvas.getByRole("button", { name: /孫悟空少年編/ })
  await userEvent.click(trigger)
  const panelId = trigger.getAttribute("aria-controls")
  const panel = panelId ? document.getElementById(panelId) : null
  if (!panel) {
    throw new Error("Expected accordion panel")
  }
  await expect(
    await within(panel).findByText(
      /地球の人里離れた山奥に住む尻尾の生えた少年/,
    ),
  ).toBeVisible()
}

export const CustomIcon: Story = () => {
  const items = useMemo<Accordion.Item[]>(
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

  return (
    <Accordion.Root
      icon={({ expanded }) => (!expanded ? <PlusIcon /> : <MinusIcon />)}
      items={items}
    />
  )
}

CustomIcon.play = async ({ canvas, userEvent }) => {
  const trigger = canvas.getByRole("button", { name: /孫悟空少年編/ })
  await userEvent.click(trigger)
  const panelId = trigger.getAttribute("aria-controls")
  const panel = panelId ? document.getElementById(panelId) : null
  if (!panel) {
    throw new Error("Expected accordion panel")
  }
  await expect(
    await within(panel).findByText(
      /地球の人里離れた山奥に住む尻尾の生えた少年/,
    ),
  ).toBeVisible()
}

export const CustomControl: Story = () => {
  const items = useMemo<Accordion.Item[]>(
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
  const [index, onChange] = useState<Accordion.RootProps["index"] | undefined>(
    undefined,
  )

  return <Accordion.Root index={index} items={items} onChange={onChange} />
}

CustomControl.play = async ({ canvas, userEvent }) => {
  const trigger = canvas.getByRole("button", { name: /孫悟空少年編/ })
  await userEvent.click(trigger)
  const panelId = trigger.getAttribute("aria-controls")
  const panel = panelId ? document.getElementById(panelId) : null
  if (!panel) {
    throw new Error("Expected accordion panel")
  }
  await expect(
    await within(panel).findByText(
      /地球の人里離れた山奥に住む尻尾の生えた少年/,
    ),
  ).toBeVisible()
}
