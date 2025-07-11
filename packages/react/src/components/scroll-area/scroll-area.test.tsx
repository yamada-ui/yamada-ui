import type { FC } from "react"
import { ScrollArea } from "."
import { a11y, act, fireEvent, render, screen, waitFor } from "../../../test"

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

      <h1>フリーザ編</h1>

      <p>
        地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。出し抜かれて願いが叶えられなかったフリーザは激怒し、一行は対決を強いられる。フリーザの持つ圧倒的な力の前にはベジータやピッコロ、悟空すら歯が立たず仲間たちが次々と命を落としていった。怒りを爆発させた悟空は伝説の戦士・超（スーパー）サイヤ人へと覚醒。フルパワーを解放したフリーザに勝利する。ポルンガによって地球に帰還した悟飯たちは復活したドラゴンボールによりサイヤ人やフリーザ一味に殺された人々を蘇生させた。一方の悟空も爆発するナメック星を辛くも脱出、ヤードラット星に漂着し一命を取り留めた。
      </p>

      <h1>人造人間・セル編</h1>

      <p>
        ナメック星での闘いから約1年後、密かに生き延びていたフリーザとその一味が地球を襲撃するが、謎の超サイヤ人によって撃退される。トランクスと名乗るその青年は、自分は未来からやってきたブルマとベジータの息子であることを悟空にだけ明かすと同時に、悟空は心臓病によって命を落とすこと、3年後に現れる2体の人造人間が絶望の未来をもたらすことを告げる。その後本当に心臓病によって危篤状態になるも、トランクスから渡された特効薬によって生還、来るべき日に備えて3年間各々に修行してその日を迎える悟空たちであったが、事態はトランクスが知っている歴史とは大きく違うものとなり、彼さえ知らなかった人造人間たちまで現れ、さらに究極の人造人間・セルが未来から出現。悟空らの想定を遥かに超えた戦士が続々と現れた。
        人造人間17号と人造人間18号を吸収することで完全体となったセルは地球の命運を賭けた武道会「セルゲーム」の開催を全世界に宣言する。悟空らは天界にある1日で1年の修行が行えるも過酷な環境に晒される「精神と時の部屋」で修行し、強さを増してセルゲームに臨むが、悟空はこのセルとの闘いの中で地球を守るために命を落とす。だが、その遺志を受け継いだ息子・悟飯が超サイヤ人2へと覚醒、父・悟空の幻影と共にかめはめ波を放ちセルを撃破。セルゲームを制した悟飯たちは、ドラゴンボールによりセルに殺された人々を蘇生させるが、悟空は自分が悪人を引き寄せているという理由で生き返りを拒否し、あの世に残ることを選ぶ。
      </p>

      <h1>魔人ブウ編</h1>

      <p>
        セルゲームより約7年後、高校生に成長した悟飯が天下一武道会に出場することを知った悟空は、自らも出場するために占いババの力によって1日だけこの世に戻る。天下一武道会の最中、悟空たちは界王よりもさらに高位の存在である界王神から、恐ろしい力を持つ魔人ブウの封印が解かれようとしていることを知らされる。復活した魔人ブウにより悟飯やベジータが倒され、悟空はあの世に帰ったため、地球の命運は悟空の次男・孫悟天と少年トランクスの幼い二人に託される。
        一方、魔人ブウは様々な人間との出会いからより邪悪で強力な魔人へと変貌。悟天とトランクスが「フュージョン（融合）」して誕生した戦士・ゴテンクスや、潜在能力を解放し、パワーアップを遂げて帰ってきた悟飯らが応戦するが、戦士たちを次々と吸収し姿を変えていく魔人ブウに苦戦を強いられる。危機に陥った悟飯らを救うため現世に舞い戻った悟空とベジータは、界王神界で真の姿となった魔人ブウとの最終決戦に臨む。ドラゴンボールの協力もあり、地球・ナメック星・あの世の人々のエネルギーによって作り上げられた超特大の元気玉によって魔人ブウは完全に消滅する。
        それから10年後、悟空は孫のパンと共に天下一武道会に久しぶりに出場し、魔人ブウの生まれ変わりである少年・ウーブと出会う。悟空はウーブと共に見果てぬ強さを追い求めて修行に旅立ち、物語は幕を閉じる。
      </p>
    </>
  )
}

describe("<ScrollArea />", () => {
  test("renders with no errors", async () => {
    const { container } = render(
      <ScrollArea data-testid="scroll-area" h="xs">
        <TestContent />
      </ScrollArea>,
    )

    expect(screen.getByTestId("scroll-area")).toBeInTheDocument()
    await a11y(container)
  })

  test("renders children content correctly", () => {
    render(
      <ScrollArea>
        <p>Item 1</p>
      </ScrollArea>,
    )

    expect(screen.getByText("Item 1")).toBeInTheDocument()
  })

  test("updates scroll position when controlled externally", () => {
    const { container } = render(
      <ScrollArea>
        <TestContent />
      </ScrollArea>,
    )

    act(() => {
      fireEvent.scroll(container, {
        target: { scrollTop: 0 },
      })
      expect(container.scrollTop).toBe(0)
    })

    act(() => {
      fireEvent.scroll(container, {
        target: { scrollTop: 200 },
      })
      expect(container.scrollTop).toBe(200)
    })
  })

  test("calls onScrollPositionChange when scrolled", () => {
    const mockScrollPositionChange = vi.fn()

    render(
      <ScrollArea
        data-testid="scroll-area"
        onScrollPositionChange={mockScrollPositionChange}
      >
        <TestContent />
      </ScrollArea>,
    )

    act(() => {
      fireEvent.scroll(screen.getByTestId("scroll-area"), {
        target: { scrollTop: 100 },
      })
    })

    expect(mockScrollPositionChange).toHaveBeenCalledWith({ x: 0, y: 100 })
  })

  test("shows scroll indicators on hover and hides them on leave", async () => {
    render(
      <ScrollArea type="hover" data-testid="scroll-area">
        <TestContent />
      </ScrollArea>,
    )

    const scrollArea = screen.getByTestId("scroll-area")

    expect(scrollArea).not.toHaveAttribute("data-hover")

    await act(() => fireEvent.mouseEnter(scrollArea))
    expect(scrollArea).toHaveAttribute("data-hover")

    await act(() => fireEvent.mouseLeave(scrollArea))
    await waitFor(
      () => {
        expect(scrollArea).not.toHaveAttribute("data-hover")
      },
      { timeout: 2000 },
    )
  })

  test("applies safari specific key format", () => {
    // Mock Safari environment
    Object.defineProperty(window.navigator, "platform", {
      value: "MacOS",
      writable: true,
    })
    Object.defineProperty(window.navigator, "vendor", {
      value: "Apple Computer, Inc.",
      writable: true,
    })

    render(
      <ScrollArea type="never" data-testid="scroll-area">
        <TestContent />
      </ScrollArea>,
    )

    const scrollArea = screen.getByTestId("scroll-area")

    expect(scrollArea).toHaveAttribute("data-key")

    // The key should end with the expected pattern
    expect(scrollArea.getAttribute("data-key")).toMatch(/-false-false$/)
  })
})
