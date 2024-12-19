import { a11y } from "../../../test"
import { CheckboxCard, CheckboxCardGroup } from "./"

describe("<CheckboxCard />", () => {
  test("CheckboxCard renders correctly", async () => {
    await a11y(
      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard
          description="22世紀の未来から来たネコ型ロボット。"
          label="ドラえもん"
          value="ドラえもん"
        />
        <CheckboxCard
          description="ドラえもんの妹のロボット。"
          label="ドラミ"
          value="ドラミ"
        />
        <CheckboxCard
          description="アヒル型のロボット。"
          label="ガチャ子"
          value="ガチャ子"
        />
      </CheckboxCardGroup>,
    )
  })
})
