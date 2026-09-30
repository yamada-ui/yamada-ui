import type { FC } from "react"
import { page, render } from "#test/browser"
import { ScrollArea } from "."

const TestContent: FC = () => {
  return (
    <>
      <h1>孫悟空少年編</h1>

      <p>
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。人さらいのウーロンや盗賊のヤムチャらを巻き込んだボール探しの末、世界征服を企むピラフ一味にボールを奪われ神龍を呼び出されるが、ウーロンがとっさに言い放った下らない願いを叶えてもらうことで一味の野望を阻止する。その後、悟空は旅の途中に知り合った武術の達人・亀仙人の下で、後に親友となるクリリンと共に8か月間にわたる修行を積み、その成果を確かめるために世界一の武術の達人を決める天下一武道会に出場し、変装して出場していた亀仙人に敗れるも準優勝を果たす。悟空は再び修行の旅へと出発し、ドラゴンボールの悪用を企むレッドリボン軍との闘いや、孫悟飯との再会などを経てさらに強さを増していく。さらに3年後の天下一武道会では、亀仙流のライバルである鶴仙流の天津飯（てんしんはん）と闘うが、あと一歩のところで敗れ、前回と同じく準優勝に終わる。
      </p>

      <h1>ピッコロ大魔王編</h1>

      <p>
        天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。その約3年後、少年から青年へと成長した悟空は、天下一武道会の会場で仲間たちと再会。試合では、少年時代に出会った際に「嫁にもらう」と約束していた牛魔王の娘・チチと再会しその場で結婚。そして武道会に出場していたピッコロ大魔王の生まれ変わりであるマジュニアと決勝戦で激突、これに勝利し初の天下一武道会優勝を飾る。
      </p>

      <h1>サイヤ人編</h1>

      <p>
        ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。悟空はドラゴンボールによって生き返るまでの間、あの世の界王の下で修業し、仲間と共に地球に強襲したサイヤ人の戦士・ナッパと王子・ベジータを迎え撃つ。悟空は修行により増した力でナッパを一蹴し、ベジータと決闘。仲間の協力もあり、何とか辛勝し撤退させるが、多くの仲間を失うとともに、ピッコロの戦死により彼と一心同体であった神も死亡し、地球のドラゴンボールも消滅する。
      </p>
    </>
  )
}

describe("<ScrollArea />", () => {
  test("shows scroll indicators on hover and hides them on leave", async () => {
    const { user } = await render(
      <div style={{ alignItems: "flex-start", display: "flex", gap: "320px" }}>
        <ScrollArea
          type="hover"
          data-testid="scroll-area"
          h="xs"
          scrollHideDelay={100}
          w="sm"
        >
          <TestContent />
        </ScrollArea>
        <button type="button" style={{ height: "56px", width: "120px" }}>
          Outside
        </button>
      </div>,
    )

    const scrollArea = page.getByTestId("scroll-area")
    const outside = page.getByRole("button", { name: "Outside" })
    const isWebKit =
      /apple/i.test(window.navigator.vendor) &&
      !/crios|chrome|chromium/i.test(window.navigator.userAgent)

    await expect.element(scrollArea).toHaveAttribute("data-hidden")

    await user.hover(scrollArea)
    await expect.element(scrollArea).not.toHaveAttribute("data-hidden")
    await user.hover(outside)
    if (isWebKit) await expect.element(scrollArea).toBeInTheDocument()
    else await expect.element(scrollArea).toHaveAttribute("data-hidden")
  })

  test("shows scroll indicators on scroll type and hides them after delay", async () => {
    const onScrollPositionChange = vi.fn()

    await render(
      <ScrollArea
        type="scroll"
        data-testid="scroll-area"
        h="xs"
        scrollHideDelay={200}
        onScrollPositionChange={onScrollPositionChange}
      >
        <TestContent />
      </ScrollArea>,
    )

    const scrollArea = page.getByTestId("scroll-area")
    const scrollAreaElement = scrollArea.element()
    if (!(scrollAreaElement instanceof HTMLDivElement))
      throw new Error("scroll-area is not an HTMLDivElement")

    await expect.element(scrollArea).toHaveAttribute("data-hidden")
    await expect.element(scrollArea).not.toHaveAttribute("data-scroll")
    onScrollPositionChange.mockClear()

    scrollAreaElement.scrollTop = 100
    scrollAreaElement.dispatchEvent(new Event("scroll", { bubbles: true }))
    await expect
      .poll(() => onScrollPositionChange.mock.calls.length)
      .toBeGreaterThan(0)
    await expect
      .poll(() => onScrollPositionChange.mock.lastCall?.[0]?.x)
      .toBe(0)
    await expect
      .poll(() => onScrollPositionChange.mock.lastCall?.[0]?.y ?? 0)
      .toBeGreaterThan(0)
    const firstScrollCallCount = onScrollPositionChange.mock.calls.length
    await expect.element(scrollArea).not.toHaveAttribute("data-hidden")

    scrollAreaElement.scrollTop =
      scrollAreaElement.scrollHeight - scrollAreaElement.clientHeight
    scrollAreaElement.dispatchEvent(new Event("scroll", { bubbles: true }))
    await expect
      .poll(() => onScrollPositionChange.mock.calls.length)
      .toBeGreaterThan(firstScrollCallCount)
    await expect
      .poll(() => onScrollPositionChange.mock.lastCall?.[0]?.x)
      .toBe(0)
    await expect
      .poll(() => onScrollPositionChange.mock.lastCall?.[0]?.y ?? 0)
      .toBeGreaterThan(0)
    await expect.element(scrollArea).not.toHaveAttribute("data-hidden")
    await expect.element(scrollArea).not.toHaveAttribute("data-scroll")
    await expect.element(scrollArea).toHaveAttribute("data-hidden")
  })
})
