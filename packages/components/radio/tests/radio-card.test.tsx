import { a11y, render, screen } from "@yamada-ui/test"
import { RadioCard, RadioCardGroup } from "../src"

describe("<RadioCard />", () => {
  test("passes a11y test", async () => {
    await a11y(
      <RadioCardGroup defaultValue="ビアンカ">
        <RadioCard
          description="パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。"
          label="ビアンカ"
          value="ビアンカ"
        />
        <RadioCard
          description="大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。"
          label="フローラ"
          value="フローラ"
        />
        <RadioCard
          description="なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。"
          label="ルドマン"
          value="ルドマン"
        />
      </RadioCardGroup>,
    )
  })

  test("renders correctly with <RadioCardAddon>", async () => {
    render(
      <RadioCard
        addon="ドラゴンクエストV 天空の花嫁（DQ5）"
        description="大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。"
        label="フローラ"
        value="フローラ"
      />,
    )

    await screen.findByText("ドラゴンクエストV 天空の花嫁（DQ5）")
  })
})
