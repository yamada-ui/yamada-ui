import type { Meta, StoryFn } from "@storybook/react"
import type { RadioCardItem } from "@yamada-ui/react"
import {
  ArrowRightIcon,
  ChartAreaIcon,
  ChartColumnIcon,
  ChartLineIcon,
  LockIcon,
  RabbitIcon,
  ShieldOffIcon,
  SnailIcon,
  SquirrelIcon,
} from "@yamada-ui/lucide"
import {
  Fieldset,
  For,
  HStack,
  RadioCard,
  RadioCardAddon,
  RadioCardDescription,
  RadioCardGroup,
  RadioCardLabel,
  Text,
  VStack,
} from "@yamada-ui/react"
import { useMemo, useState } from "react"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof RadioCard>

const meta: Meta<typeof RadioCard> = {
  component: RadioCard,
  title: "Components / Forms / RadioCard",
}

export default meta

export const basic: Story = () => {
  const items = useMemo<RadioCardItem[]>(
    () => [
      {
        description:
          "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
        label: "ビアンカ",
        value: "ビアンカ",
      },
      {
        description:
          "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
        label: "フローラ",
        value: "フローラ",
      },
      {
        description:
          "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
        label: "ルドマン",
        value: "ルドマン",
      },
    ],
    [],
  )

  return (
    <>
      <RadioCardGroup defaultValue="フローラ">
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
      </RadioCardGroup>

      <RadioCardGroup defaultValue="フローラ">
        <RadioCard value="ビアンカ">
          <RadioCardLabel>ビアンカ</RadioCardLabel>
          <RadioCardDescription>
            パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。
          </RadioCardDescription>
        </RadioCard>

        <RadioCard value="フローラ">
          <RadioCardLabel>フローラ</RadioCardLabel>
          <RadioCardDescription>
            大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。
          </RadioCardDescription>
        </RadioCard>

        <RadioCard value="ルドマン">
          <RadioCardLabel>ルドマン</RadioCardLabel>
          <RadioCardDescription>
            なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。
          </RadioCardDescription>
        </RadioCard>
      </RadioCardGroup>

      <RadioCardGroup defaultValue="フローラ" items={items} />
    </>
  )
}

export const withSize: Story = () => {
  const items = useMemo<RadioCardItem[]>(
    () => [
      {
        description:
          "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
        label: "ビアンカ",
        value: "ビアンカ",
      },
      {
        description:
          "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
        label: "フローラ",
        value: "フローラ",
      },
      {
        description:
          "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
        label: "ルドマン",
        value: "ルドマン",
      },
    ],
    [],
  )

  return (
    <For each={["sm", "md", "lg"]}>
      {(size) => (
        <RadioCardGroup
          key={size}
          size={size}
          defaultValue="フローラ"
          items={items}
        />
      )}
    </For>
  )
}

export const withVariant: Story = () => {
  const items = useMemo<RadioCardItem[]>(
    () => [
      {
        description:
          "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
        label: "ビアンカ",
        value: "ビアンカ",
      },
      {
        description:
          "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
        label: "フローラ",
        value: "フローラ",
      },
      {
        description:
          "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
        label: "ルドマン",
        value: "ルドマン",
      },
    ],
    [],
  )

  return (
    <For each={["outline", "subtle", "surface"]}>
      {(variant) => (
        <RadioCardGroup
          key={variant}
          variant={variant}
          defaultValue="フローラ"
          items={items}
        />
      )}
    </For>
  )
}

export const withColorScheme: Story = () => {
  const items = useMemo<RadioCardItem[]>(
    () => [
      { label: "ビアンカ", value: "ビアンカ" },
      { label: "フローラ", value: "フローラ" },
      { label: "ルドマン", value: "ルドマン" },
    ],
    [],
  )

  return (
    <For each={["outline", "subtle", "surface"]}>
      {(variant) => (
        <For key={variant} each={colorSchemes}>
          {(colorScheme) => (
            <RadioCardGroup
              key={colorScheme}
              colorScheme={colorScheme}
              variant={variant}
              defaultValue="フローラ"
              items={items}
            />
          )}
        </For>
      )}
    </For>
  )
}

export const withAddon: Story = () => {
  const items = useMemo<RadioCardItem[]>(
    () => [
      {
        addon: "ドラゴンクエストV 天空の花嫁（DQ5）",
        description:
          "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
        label: "ビアンカ",
        value: "ビアンカ",
      },
      {
        addon: "ドラゴンクエストV 天空の花嫁（DQ5）",
        description:
          "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
        label: "フローラ",
        value: "フローラ",
      },
      {
        addon: "ドラゴンクエストV 天空の花嫁（DQ5）",
        description:
          "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
        label: "ルドマン",
        value: "ルドマン",
      },
    ],
    [],
  )

  return (
    <>
      <RadioCardGroup defaultValue="フローラ">
        <RadioCard
          addon="ドラゴンクエストV 天空の花嫁（DQ5）"
          description="パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。"
          label="ビアンカ"
          value="ビアンカ"
        />
        <RadioCard
          addon="ドラゴンクエストV 天空の花嫁（DQ5）"
          description="大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。"
          label="フローラ"
          value="フローラ"
        />
        <RadioCard
          addon="ドラゴンクエストV 天空の花嫁（DQ5）"
          description="なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。"
          label="ルドマン"
          value="ルドマン"
        />
      </RadioCardGroup>

      <RadioCardGroup defaultValue="フローラ">
        <RadioCard value="ビアンカ">
          <RadioCardLabel>ビアンカ</RadioCardLabel>
          <RadioCardDescription>
            パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。
          </RadioCardDescription>
          <RadioCardAddon>ドラゴンクエストV 天空の花嫁（DQ5）</RadioCardAddon>
        </RadioCard>

        <RadioCard value="フローラ">
          <RadioCardLabel>フローラ</RadioCardLabel>
          <RadioCardDescription>
            大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。
          </RadioCardDescription>
          <RadioCardAddon>ドラゴンクエストV 天空の花嫁（DQ5）</RadioCardAddon>
        </RadioCard>

        <RadioCard value="ルドマン">
          <RadioCardLabel>ルドマン</RadioCardLabel>
          <RadioCardDescription>
            なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。
          </RadioCardDescription>
          <RadioCardAddon>ドラゴンクエストV 天空の花嫁（DQ5）</RadioCardAddon>
        </RadioCard>
      </RadioCardGroup>

      <RadioCardGroup defaultValue="フローラ" items={items} />
    </>
  )
}

export const withDefaultValue: Story = () => {
  const items = useMemo<RadioCardItem[]>(
    () => [
      { label: "ビアンカ", value: "ビアンカ" },
      { label: "フローラ", value: "フローラ" },
      { label: "ルドマン", value: "ルドマン" },
    ],
    [],
  )

  return <RadioCardGroup defaultValue="フローラ" items={items} />
}

export const disabled: Story = () => {
  const items = useMemo<RadioCardItem[]>(
    () => [
      { label: "ビアンカ", value: "ビアンカ" },
      { label: "フローラ", value: "フローラ" },
      { label: "ルドマン", value: "ルドマン" },
    ],
    [],
  )

  return (
    <>
      <RadioCardGroup defaultValue="フローラ">
        <RadioCard value="ビアンカ">
          <RadioCardLabel>ビアンカ</RadioCardLabel>
          <RadioCardDescription>
            パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。
          </RadioCardDescription>
        </RadioCard>

        <RadioCard disabled value="フローラ">
          <RadioCardLabel>フローラ</RadioCardLabel>
          <RadioCardDescription>
            大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。
          </RadioCardDescription>
        </RadioCard>

        <RadioCard value="ルドマン">
          <RadioCardLabel>ルドマン</RadioCardLabel>
          <RadioCardDescription>
            なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。
          </RadioCardDescription>
        </RadioCard>
      </RadioCardGroup>

      <RadioCardGroup disabled items={items} />

      <Fieldset disabled legend="Which characters would you like to select?">
        <RadioCardGroup items={items} />
      </Fieldset>
    </>
  )
}

export const readOnly: Story = () => {
  const items = useMemo<RadioCardItem[]>(
    () => [
      { label: "ビアンカ", value: "ビアンカ" },
      { label: "フローラ", value: "フローラ" },
      { label: "ルドマン", value: "ルドマン" },
    ],
    [],
  )

  return (
    <>
      <RadioCardGroup defaultValue="フローラ">
        <RadioCard value="ビアンカ">
          <RadioCardLabel>ビアンカ</RadioCardLabel>
          <RadioCardDescription>
            パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。
          </RadioCardDescription>
        </RadioCard>

        <RadioCard readOnly value="フローラ">
          <RadioCardLabel>フローラ</RadioCardLabel>
          <RadioCardDescription>
            大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。
          </RadioCardDescription>
        </RadioCard>

        <RadioCard value="ルドマン">
          <RadioCardLabel>ルドマン</RadioCardLabel>
          <RadioCardDescription>
            なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。
          </RadioCardDescription>
        </RadioCard>
      </RadioCardGroup>

      <RadioCardGroup items={items} readOnly />

      <Fieldset legend="Which characters would you like to select?" readOnly>
        <RadioCardGroup items={items} />
      </Fieldset>
    </>
  )
}

export const invalid: Story = () => {
  const items = useMemo<RadioCardItem[]>(
    () => [
      { label: "ビアンカ", value: "ビアンカ" },
      { label: "フローラ", value: "フローラ" },
      { label: "ルドマン", value: "ルドマン" },
    ],
    [],
  )

  return (
    <>
      <RadioCardGroup defaultValue="フローラ">
        <RadioCard invalid value="ビアンカ">
          <RadioCardLabel>ビアンカ</RadioCardLabel>
          <RadioCardDescription>
            パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。
          </RadioCardDescription>
        </RadioCard>

        <RadioCard value="フローラ">
          <RadioCardLabel>フローラ</RadioCardLabel>
          <RadioCardDescription>
            大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。
          </RadioCardDescription>
        </RadioCard>

        <RadioCard value="ルドマン">
          <RadioCardLabel>ルドマン</RadioCardLabel>
          <RadioCardDescription>
            なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。
          </RadioCardDescription>
        </RadioCard>
      </RadioCardGroup>

      <RadioCardGroup variant="surface" invalid items={items} />

      <Fieldset
        errorMessage="This is required."
        invalid
        legend="Which characters would you like to select?"
      >
        <RadioCardGroup items={items} />
      </Fieldset>
    </>
  )
}

export const hiddenIcon: Story = () => {
  const items = useMemo<RadioCardItem[]>(
    () => [
      {
        label: "ビアンカ",
        value: "ビアンカ",
        withIcon: false,
      },
      {
        label: "フローラ",
        value: "フローラ",
      },
      {
        label: "ルドマン",
        value: "ルドマン",
      },
    ],
    [],
  )

  return (
    <>
      <RadioCardGroup defaultValue="フローラ" withIcon={false}>
        <RadioCard label="ビアンカ" value="ビアンカ" />
        <RadioCard label="フローラ" value="フローラ" />
        <RadioCard label="ルドマン" value="ルドマン" />
      </RadioCardGroup>

      <RadioCardGroup defaultValue="フローラ">
        <RadioCard value="ビアンカ">
          <RadioCardLabel withIcon={false}>ビアンカ</RadioCardLabel>
        </RadioCard>

        <RadioCard value="フローラ">
          <RadioCardLabel>フローラ</RadioCardLabel>
        </RadioCard>

        <RadioCard value="ルドマン">
          <RadioCardLabel>ルドマン</RadioCardLabel>
        </RadioCard>
      </RadioCardGroup>

      <RadioCardGroup defaultValue="フローラ" items={items} />
    </>
  )
}

export const customControl: Story = () => {
  const [value, setValue] = useState<string>("フローラ")

  const items = useMemo<RadioCardItem[]>(
    () => [
      { label: "ビアンカ", value: "ビアンカ" },
      { label: "フローラ", value: "フローラ" },
      { label: "ルドマン", value: "ルドマン" },
    ],
    [],
  )

  return <RadioCardGroup items={items} value={value} onChange={setValue} />
}

export const customLabel: Story = () => {
  const items = useMemo<RadioCardItem[]>(
    () => [
      {
        label: (
          <VStack alignItems="center" gap="sm">
            <ChartLineIcon color="muted" fontSize="3xl" />
            <Text>Line Chart</Text>
          </VStack>
        ),
        value: "Line Chart",
      },
      {
        label: (
          <VStack alignItems="center" gap="sm">
            <ChartColumnIcon color="muted" fontSize="3xl" />
            <Text>Bar Chart</Text>
          </VStack>
        ),
        value: "Bar Chart",
      },
      {
        label: (
          <VStack alignItems="center" gap="sm">
            <ChartAreaIcon color="muted" fontSize="3xl" />
            <Text>Area Chart</Text>
          </VStack>
        ),
        value: "Area Chart",
      },
    ],
    [],
  )

  return (
    <>
      <RadioCardGroup defaultValue="Arrow">
        <RadioCard
          description="This user can access the system"
          label={
            <VStack gap="sm">
              <ArrowRightIcon fontSize="2xl" />
              <Text>Arrow</Text>
            </VStack>
          }
          value="Arrow"
          labelProps={{
            alignItems: "start",
          }}
        />
        <RadioCard
          description="This user will be denied access to the system"
          label={
            <VStack gap="sm">
              <ShieldOffIcon fontSize="2xl" />
              <Text>Deny</Text>
            </VStack>
          }
          value="Deny"
          labelProps={{
            alignItems: "start",
          }}
        />
        <RadioCard
          description="This user will be locked out of the system"
          label={
            <VStack gap="sm">
              <LockIcon fontSize="2xl" />
              <Text>Lock</Text>
            </VStack>
          }
          value="Lock"
          labelProps={{
            alignItems: "start",
          }}
        />
      </RadioCardGroup>

      <RadioCardGroup defaultValue="Rabbit" w="fit-content" withIcon={false}>
        <RadioCard value="Rabbit">
          <RadioCardLabel>
            <HStack gap="sm">
              <RabbitIcon color="muted" fontSize="2xl" />
              <Text>Rabbit</Text>
            </HStack>
          </RadioCardLabel>
        </RadioCard>

        <RadioCard value="Snail">
          <HStack gap="sm">
            <SnailIcon color="muted" fontSize="2xl" />
            <Text>Snail</Text>
          </HStack>
        </RadioCard>

        <RadioCard value="Squirrel">
          <RadioCardLabel>
            <HStack gap="sm">
              <SquirrelIcon color="muted" fontSize="2xl" />
              <Text>Squirrel</Text>
            </HStack>
          </RadioCardLabel>
        </RadioCard>
      </RadioCardGroup>

      <RadioCardGroup
        defaultValue="Line Chart"
        items={items}
        labelProps={{ flexDirection: "column", gap: "sm" }}
      />
    </>
  )
}
