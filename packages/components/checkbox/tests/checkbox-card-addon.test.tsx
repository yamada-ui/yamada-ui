import { a11y, render, screen } from "@yamada-ui/test"
import {
  CheckboxCard,
  CheckboxCardAddon,
  CheckboxCardDescription,
  CheckboxCardGroup,
  CheckboxCardLabel,
} from "../src"

describe("<CheckboxCardAddon />", () => {
  test("CheckboxCardAddon renders correctly", async () => {
    await a11y(
      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard value="ドラえもん">
          <CheckboxCardLabel>ドラえもん</CheckboxCardLabel>
          <CheckboxCardDescription>
            22世紀の未来から来たネコ型ロボット。
          </CheckboxCardDescription>
          <CheckboxCardAddon>藤子・F・不二雄</CheckboxCardAddon>
        </CheckboxCard>

        <CheckboxCard value="ドラミ">
          <CheckboxCardLabel>ドラミ</CheckboxCardLabel>
          <CheckboxCardDescription>
            ドラえもんの妹のロボット。
          </CheckboxCardDescription>
          <CheckboxCardAddon>藤子・F・不二雄</CheckboxCardAddon>
        </CheckboxCard>

        <CheckboxCard value="ガチャ子">
          <CheckboxCardLabel>ガチャ子</CheckboxCardLabel>
          <CheckboxCardDescription>
            アヒル型のロボット。
          </CheckboxCardDescription>
          <CheckboxCardAddon>藤子・F・不二雄</CheckboxCardAddon>
        </CheckboxCard>
      </CheckboxCardGroup>,
    )
  })

  test("CheckboxCardAddon renders correctly as child of CheckboxCard", async () => {
    render(
      <CheckboxCardGroup data-testid="checkbox-group" defaultValue={["Rabbit"]}>
        <CheckboxCard value="Rabbit">
          <CheckboxCardLabel>Rabbit</CheckboxCardLabel>
          <CheckboxCardDescription>Running Rabbit</CheckboxCardDescription>
          <CheckboxCardAddon>Enhanced Rabbit</CheckboxCardAddon>
        </CheckboxCard>
      </CheckboxCardGroup>,
    )

    const CheckboxGroupComponent = await screen.findByTestId("checkbox-group")
    expect(CheckboxGroupComponent).toBeInTheDocument()

    expect(screen.getByText("Enhanced Rabbit")).toBeInTheDocument()
  })
})
