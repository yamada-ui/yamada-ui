import type { FC } from "react"
import { a11y, render, screen } from "#test"
import { useMemo } from "react"
import { Steps } from "."
import { ButtonGroup } from "../button"

interface TestComponentProps extends Steps.RootProps {
  itemProps?: Required<Steps.RootProps>["items"][number]
}

const TestComponent: FC<TestComponentProps> = ({ itemProps, ...rest }) => {
  const items: Steps.RootProps["items"] = useMemo(
    () =>
      [
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
      ].map((item) => ({ ...item, ...itemProps })),
    [itemProps],
  )

  return (
    <Steps.Root data-testid="root" items={items} {...rest}>
      <Steps.List />
      <Steps.Contents />
      <Steps.CompletedContent data-testid="completedContent">
        地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。
      </Steps.CompletedContent>

      <ButtonGroup.Root>
        <Steps.PrevTrigger>
          <ButtonGroup.Item>Prev</ButtonGroup.Item>
        </Steps.PrevTrigger>
        <Steps.NextTrigger>
          <ButtonGroup.Item>Next</ButtonGroup.Item>
        </Steps.NextTrigger>
      </ButtonGroup.Root>
    </Steps.Root>
  )
}

describe("<Stepper />", () => {
  test("renders component correctly", async () => {
    await a11y(<TestComponent />)
  })

  test("sets `displayName` correctly", () => {
    expect(Steps.Root.displayName).toBe("StepsRoot")
    expect(Steps.List.displayName).toBe("StepsList")
    expect(Steps.Item.displayName).toBe("StepsItem")
    expect(Steps.Indicator.displayName).toBe("StepsIndicator")
    expect(Steps.Number.displayName).toBe("StepsNumber")
    expect(Steps.Title.displayName).toBe("StepsTitle")
    expect(Steps.Description.displayName).toBe("StepsDescription")
    expect(Steps.Separator.displayName).toBe("StepsSeparator")
    expect(Steps.Contents.name).toBe("StepsContents")
    expect(Steps.Content.displayName).toBe("StepsContent")
    expect(Steps.CompletedContent.displayName).toBe("StepsCompletedContent")
  })

  test("sets `className` correctly", () => {
    render(<TestComponent />)
    const root = screen.getByTestId("root")
    expect(root).toHaveClass("ui-steps__root")
    expect(screen.getByRole("list")).toHaveClass("ui-steps__list")
    expect(screen.getAllByRole("listitem")[0]).toHaveClass("ui-steps__item")
    expect(screen.getAllByRole("heading")[0]).toHaveClass("ui-steps__title")
    expect(screen.getAllByRole("paragraph")[0]).toHaveClass(
      "ui-steps__description",
    )
    expect(screen.getAllByRole("separator")[0]).toHaveClass(
      "ui-steps__separator",
    )
    expect(root.children[1]).toHaveClass("ui-steps__content")
    expect(screen.getByTestId("completedContent")).toHaveClass(
      "ui-steps__content--completed",
    )
    expect(screen.getByRole("button", { name: /Prev/i })).toHaveClass(
      "ui-steps__trigger--prev",
    )
    expect(screen.getByRole("button", { name: /Next/i })).toHaveClass(
      "ui-steps__trigger--next",
    )
  })

  test("renders HTML tag correctly", () => {
    render(<TestComponent />)
    const root = screen.getByTestId("root")
    expect(root.tagName).toBe("DIV")
    expect(screen.getByRole("list").tagName).toBe("OL")
    expect(screen.getAllByRole("listitem")[0]?.tagName).toBe("LI")
    expect(screen.getAllByRole("heading")[0]?.tagName).toBe("H3")
    expect(screen.getAllByRole("paragraph")[0]?.tagName).toBe("P")
    expect(screen.getAllByRole("separator")[0]?.tagName).toBe("DIV")
    expect(root.children[1]?.tagName).toBe("DIV")
    expect(screen.getByTestId("completedContent").tagName).toBe("DIV")
    expect(screen.getByRole("button", { name: /Prev/i }).tagName).toBe("BUTTON")
    expect(screen.getByRole("button", { name: /Next/i }).tagName).toBe("BUTTON")
  })
})
