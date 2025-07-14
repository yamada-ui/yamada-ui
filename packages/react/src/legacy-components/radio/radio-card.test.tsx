import { a11y, fireEvent, render, screen } from "#test"
import {
  RadioCard,
  RadioCardDescription,
  RadioCardGroup,
  RadioCardLabel,
} from "./"

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

  test("renders correctly without children", () => {
    render(<RadioCard data-testid="radio-card-rabbit" value="rabbit" />)

    const RadioCardRabbitComponent = screen.getByTestId("radio-card-rabbit")
    expect(RadioCardRabbitComponent).toBeInTheDocument()
  })

  test("renders correctly with children", () => {
    render(
      <RadioCardGroup data-testid="radio-group">
        <RadioCard data-testid="radio-card-rabbit" value="rabbit">
          <RadioCardLabel data-testid="radio-card-label-rabbit">
            Rabbit
          </RadioCardLabel>
          <RadioCardDescription data-testid="radio-card-description-rabbit">
            Rabbits are mammals
          </RadioCardDescription>
        </RadioCard>

        <RadioCard data-testid="radio-card-snail" value="snail">
          <RadioCardLabel data-testid="radio-card-label-snail">
            Snail
          </RadioCardLabel>
          <RadioCardDescription data-testid="radio-card-description-snail">
            snail is a shelled gastropod
          </RadioCardDescription>
        </RadioCard>
      </RadioCardGroup>,
    )

    const RadioCardGroupComponent = screen.getByTestId("radio-group")
    const RadioCardWithRabbitValueComponent =
      screen.getByTestId("radio-card-rabbit")
    const RadioCardLabelForRabbitComponent = screen.getByTestId(
      "radio-card-label-rabbit",
    )
    const RadioCardDescriptionForRabbitComponent = screen.getByTestId(
      "radio-card-description-rabbit",
    )
    const RadioCardWithSnailValueComponent =
      screen.getByTestId("radio-card-snail")
    const RadioCardLabelForSnailComponent = screen.getByTestId(
      "radio-card-label-snail",
    )
    const RadioCardDescriptionForSnailComponent = screen.getByTestId(
      "radio-card-description-snail",
    )

    expect(RadioCardGroupComponent).toBeInTheDocument()
    expect(RadioCardGroupComponent).toContainElement(
      RadioCardWithRabbitValueComponent,
    )
    expect(RadioCardWithRabbitValueComponent).toContainElement(
      RadioCardLabelForRabbitComponent,
    )
    expect(RadioCardWithRabbitValueComponent).toContainElement(
      RadioCardDescriptionForRabbitComponent,
    )
    expect(RadioCardGroupComponent).toContainElement(
      RadioCardWithSnailValueComponent,
    )
    expect(RadioCardWithSnailValueComponent).toContainElement(
      RadioCardLabelForSnailComponent,
    )
    expect(RadioCardWithSnailValueComponent).toContainElement(
      RadioCardDescriptionForSnailComponent,
    )
  })

  test("renders correctly with addon", async () => {
    render(
      <RadioCard
        data-testid="radio-card-rabbit"
        addon={<div>Addon Text</div>}
        value="rabbit"
      >
        <RadioCardLabel data-testid="radio-card-label-rabbit">
          Rabbit
        </RadioCardLabel>
      </RadioCard>,
    )

    const RadioCardRabbitComponent = screen.getByTestId("radio-card-rabbit")
    expect(RadioCardRabbitComponent).toBeInTheDocument()
    const AddonComponent = await screen.findByText("Addon Text")
    expect(RadioCardRabbitComponent).toContainElement(AddonComponent)
  })

  test("renders correctly when disabled", () => {
    const { rerender } = render(
      <RadioCard data-testid="radio-card-rabbit" value="rabbit">
        <RadioCardLabel data-testid="radio-card-label-rabbit">
          Rabbit
        </RadioCardLabel>
        <RadioCardDescription data-testid="radio-card-description-rabbit">
          Rabbits are mammals
        </RadioCardDescription>
      </RadioCard>,
    )

    const RadioCardRabbitComponent = screen.getByTestId("radio-card-rabbit")
    const InputOfTypeRadio = screen.getByRole("radio")
    expect(RadioCardRabbitComponent).toBeInTheDocument()
    expect(RadioCardRabbitComponent).toContainElement(InputOfTypeRadio)

    expect(InputOfTypeRadio).not.toHaveAttribute("disabled")

    rerender(
      <RadioCard data-testid="radio-card-rabbit" disabled value="rabbit">
        <RadioCardLabel data-testid="radio-card-label-rabbit">
          Rabbit
        </RadioCardLabel>
        <RadioCardDescription data-testid="radio-card-description-rabbit">
          Rabbits are mammals
        </RadioCardDescription>
      </RadioCard>,
    )

    expect(InputOfTypeRadio).toHaveAttribute("disabled", "")
  })

  test("renders correctly when readonly", () => {
    const { rerender } = render(
      <RadioCard data-testid="radio-card-rabbit" value="rabbit">
        <RadioCardLabel data-testid="radio-card-label-rabbit">
          Rabbit
        </RadioCardLabel>
        <RadioCardDescription data-testid="radio-card-description-rabbit">
          Rabbits are mammals
        </RadioCardDescription>
      </RadioCard>,
    )

    const RadioCardRabbitComponent = screen.getByTestId("radio-card-rabbit")
    const InputOfTypeRadio = screen.getByRole("radio")
    expect(RadioCardRabbitComponent).toBeInTheDocument()
    expect(RadioCardRabbitComponent).toContainElement(InputOfTypeRadio)

    expect(InputOfTypeRadio).not.toHaveAttribute("readonly")

    rerender(
      <RadioCard data-testid="radio-card-rabbit" readOnly value="rabbit">
        <RadioCardLabel data-testid="radio-card-label-rabbit">
          Rabbit
        </RadioCardLabel>
        <RadioCardDescription data-testid="radio-card-description-rabbit">
          Rabbits are mammals
        </RadioCardDescription>
      </RadioCard>,
    )

    expect(InputOfTypeRadio).toHaveAttribute("readonly", "")
  })

  test("renders correctly when required", () => {
    const { rerender } = render(
      <RadioCard data-testid="radio-card-rabbit" value="rabbit">
        <RadioCardLabel data-testid="radio-card-label-rabbit">
          Rabbit
        </RadioCardLabel>
        <RadioCardDescription data-testid="radio-card-description-rabbit">
          Rabbits are mammals
        </RadioCardDescription>
      </RadioCard>,
    )

    const RadioCardRabbitComponent = screen.getByTestId("radio-card-rabbit")
    const InputOfTypeRadio = screen.getByRole("radio")
    expect(RadioCardRabbitComponent).toBeInTheDocument()
    expect(RadioCardRabbitComponent).toContainElement(InputOfTypeRadio)

    expect(InputOfTypeRadio).not.toHaveAttribute("required")

    rerender(
      <RadioCard data-testid="radio-card-rabbit" required value="rabbit">
        <RadioCardLabel data-testid="radio-card-label-rabbit">
          Rabbit
        </RadioCardLabel>
        <RadioCardDescription data-testid="radio-card-description-rabbit">
          Rabbits are mammals
        </RadioCardDescription>
      </RadioCard>,
    )

    expect(InputOfTypeRadio).toHaveAttribute("required", "")
  })

  test("renders correctly when invalid", () => {
    const { rerender } = render(
      <RadioCard data-testid="radio-card-rabbit" value="rabbit">
        <RadioCardLabel data-testid="radio-card-label-rabbit">
          Rabbit
        </RadioCardLabel>
        <RadioCardDescription data-testid="radio-card-description-rabbit">
          Rabbits are mammals
        </RadioCardDescription>
      </RadioCard>,
    )

    const RadioCardRabbitComponent = screen.getByTestId("radio-card-rabbit")
    const InputOfTypeRadio = screen.getByRole("radio")
    expect(RadioCardRabbitComponent).toBeInTheDocument()
    expect(RadioCardRabbitComponent).toContainElement(InputOfTypeRadio)
    expect(InputOfTypeRadio).not.toHaveAttribute("aria-invalid")

    rerender(
      <RadioCard data-testid="radio-card-rabbit" invalid value="rabbit">
        <RadioCardLabel data-testid="radio-card-label-rabbit">
          Rabbit
        </RadioCardLabel>
        <RadioCardDescription data-testid="radio-card-description-rabbit">
          Rabbits are mammals
        </RadioCardDescription>
      </RadioCard>,
    )

    expect(InputOfTypeRadio).toHaveAttribute("aria-invalid", "true")
  })

  test("does selecting radio option works correctly", () => {
    const { rerender } = render(
      <RadioCard data-testid="radio-card-rabbit" value="rabbit">
        <RadioCardLabel data-testid="radio-card-label-rabbit">
          Rabbit
        </RadioCardLabel>
        <RadioCardDescription data-testid="radio-card-description-rabbit">
          Rabbits are mammals
        </RadioCardDescription>
      </RadioCard>,
    )

    const RadioCardRabbitComponent = screen.getByTestId("radio-card-rabbit")
    const InputOfTypeRadio = screen.getByRole("radio")
    expect(RadioCardRabbitComponent).toBeInTheDocument()
    expect(RadioCardRabbitComponent).toContainElement(InputOfTypeRadio)

    expect(InputOfTypeRadio).toHaveAttribute("aria-checked", "false")

    rerender(
      <RadioCard data-testid="radio-card-rabbit" checked value="rabbit">
        <RadioCardLabel data-testid="radio-card-label-rabbit">
          Rabbit
        </RadioCardLabel>
        <RadioCardDescription data-testid="radio-card-description-rabbit">
          Rabbits are mammals
        </RadioCardDescription>
      </RadioCard>,
    )

    expect(InputOfTypeRadio).toHaveAttribute("aria-checked", "true")
  })

  test("should call the callbacks when a radio option is selected", () => {
    const onChangeOfRabbitRadio = vi.fn()
    const onChangeOfSnailRadio = vi.fn()
    render(
      <RadioCardGroup data-testid="radio-group">
        <RadioCard
          data-testid="radio-card-rabbit"
          checked
          value="rabbit"
          onChange={onChangeOfRabbitRadio}
        >
          <RadioCardLabel data-testid="radio-card-label-rabbit">
            Rabbit
          </RadioCardLabel>
          <RadioCardDescription data-testid="radio-card-description-rabbit">
            Rabbits are mammals
          </RadioCardDescription>
        </RadioCard>

        <RadioCard
          data-testid="radio-card-snail"
          value="snail"
          onChange={onChangeOfSnailRadio}
        >
          <RadioCardLabel data-testid="radio-card-label-snail">
            Snail
          </RadioCardLabel>
          <RadioCardDescription data-testid="radio-card-description-snail">
            snail is a shelled gastropod
          </RadioCardDescription>
        </RadioCard>
      </RadioCardGroup>,
    )

    const RadioGroupComponent = screen.getByTestId("radio-group")
    const RadioCardRabbitComponent = screen.getByTestId("radio-card-rabbit")
    const RadioCardSnailComponent = screen.getByTestId("radio-card-snail")

    expect(RadioGroupComponent).toBeInTheDocument()
    const InputComponents = screen.queryAllByRole("radio")
    expect(InputComponents).toHaveLength(2)

    expect(RadioGroupComponent).toContainElement(RadioCardRabbitComponent)
    expect(RadioGroupComponent).toContainElement(RadioCardSnailComponent)

    const InputOfTypeRabbit = InputComponents[0]
    const InputOfTypeSnail = InputComponents[1]

    expect(InputOfTypeRabbit).toHaveAttribute("aria-checked", "true")
    expect(InputOfTypeSnail).toHaveAttribute("aria-checked", "false")

    fireEvent.click(RadioCardSnailComponent)
    expect(onChangeOfSnailRadio).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "change",
        target: InputOfTypeSnail,
      }),
    )

    expect(InputOfTypeRabbit).toHaveAttribute("aria-checked", "false")
    expect(InputOfTypeSnail).toHaveAttribute("aria-checked", "true")

    fireEvent.click(RadioCardRabbitComponent)
    expect(onChangeOfRabbitRadio).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "change",
        target: InputOfTypeRabbit,
      }),
    )

    expect(InputOfTypeRabbit).toHaveAttribute("aria-checked", "true")
    expect(InputOfTypeSnail).toHaveAttribute("aria-checked", "false")

    expect(onChangeOfSnailRadio).toHaveBeenCalledOnce()
    expect(onChangeOfRabbitRadio).toHaveBeenCalledOnce()
  })
})
