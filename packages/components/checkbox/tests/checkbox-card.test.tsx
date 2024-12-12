import { a11y, render, screen } from "@yamada-ui/test"
import {
  CheckboxCard,
  CheckboxCardAddon,
  CheckboxCardDescription,
  CheckboxCardGroup,
  CheckboxCardLabel,
} from "../src"

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

  test("CheckboxCard renders correctly with children", async () => {
    render(
      <CheckboxCardGroup
        data-testid="checkbox-group"
        defaultValue={["Rabbit"]}
        w="fit-content"
        withIcon={false}
      >
        <CheckboxCard value="Rabbit">
          <CheckboxCardLabel>
            <div>Rabbit</div>
          </CheckboxCardLabel>
        </CheckboxCard>

        <CheckboxCard value="Snail">
          <CheckboxCardLabel>
            <div>Snail</div>
          </CheckboxCardLabel>
        </CheckboxCard>
      </CheckboxCardGroup>,
    )

    const CheckboxGroupComponent = await screen.findByTestId("checkbox-group")
    expect(CheckboxGroupComponent).toBeInTheDocument()

    expect(screen.getByText("Rabbit")).toBeInTheDocument()
    expect(screen.getByText("Snail")).toBeInTheDocument()
  })

  test("CheckboxCard renders correctly with addon", async () => {
    render(
      <CheckboxCardGroup
        data-testid="checkbox-group"
        defaultValue={["Rabbit"]}
        w="fit-content"
        withIcon={false}
      >
        <CheckboxCard
          addon={<CheckboxCardAddon>Enhanced Rabbit</CheckboxCardAddon>}
        >
          <CheckboxCardLabel>Rabbit</CheckboxCardLabel>
          <CheckboxCardDescription>Rabbit in the lawn</CheckboxCardDescription>
        </CheckboxCard>
      </CheckboxCardGroup>,
    )
    const CheckboxGroupComponent = await screen.findByTestId("checkbox-group")
    expect(CheckboxGroupComponent).toBeInTheDocument()

    expect(screen.getByText("Rabbit")).toBeInTheDocument()
    expect(screen.getByText("Enhanced Rabbit")).toBeInTheDocument()
    expect(screen.getByText("Rabbit in the lawn")).toBeInTheDocument()
  })
})
