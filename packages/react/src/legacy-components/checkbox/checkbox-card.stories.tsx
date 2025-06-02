import type { Meta, StoryFn } from "@storybook/react-vite"
import type { CheckboxCardItem } from "./"
import { useMemo, useState } from "react"
import { COLOR_SCHEMES } from "../../utils"
import { For } from "../for"
import { Fieldset } from "../form-control"
import {
  ChartAreaIcon,
  ChartColumnIcon,
  ChartLineIcon,
  LockIcon,
  RabbitIcon,
  ShieldCheckIcon,
  SnailIcon,
  SquirrelIcon,
  UserRoundIcon,
} from "../icon"
import { HStack, VStack } from "../stack"
import { Text } from "../text"
import {
  CheckboxCard,
  CheckboxCardAddon,
  CheckboxCardDescription,
  CheckboxCardGroup,
  CheckboxCardLabel,
} from "./"

type Story = StoryFn<typeof CheckboxCard>

const meta: Meta<typeof CheckboxCard> = {
  component: CheckboxCard,
  title: "Components / CheckboxCard",
}

export default meta

export const Basic: Story = () => {
  const items = useMemo<CheckboxCardItem[]>(
    () => [
      {
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "ドラえもん",
      },
      {
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "ドラミ",
      },
      {
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "ガチャ子",
      },
    ],
    [],
  )

  return (
    <>
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
      </CheckboxCardGroup>

      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard value="ドラえもん">
          <CheckboxCardLabel>ドラえもん</CheckboxCardLabel>
          <CheckboxCardDescription>
            22世紀の未来から来たネコ型ロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard value="ドラミ">
          <CheckboxCardLabel>ドラミ</CheckboxCardLabel>
          <CheckboxCardDescription>
            ドラえもんの妹のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard value="ガチャ子">
          <CheckboxCardLabel>ガチャ子</CheckboxCardLabel>
          <CheckboxCardDescription>
            アヒル型のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>
      </CheckboxCardGroup>

      <CheckboxCardGroup defaultValue={["ドラえもん"]} items={items} />
    </>
  )
}

export const WithSize: Story = () => {
  const items = useMemo<CheckboxCardItem[]>(
    () => [
      {
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "ドラえもん",
      },
      {
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "ドラミ",
      },
      {
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "ガチャ子",
      },
    ],
    [],
  )

  return (
    <For each={["sm", "md", "lg"]}>
      {(size) => (
        <CheckboxCardGroup
          key={size}
          size={size}
          defaultValue={["ドラえもん"]}
          items={items}
        />
      )}
    </For>
  )
}

export const WithVariant: Story = () => {
  const items = useMemo<CheckboxCardItem[]>(
    () => [
      {
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "ドラえもん",
      },
      {
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "ドラミ",
      },
      {
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "ガチャ子",
      },
    ],
    [],
  )

  return (
    <For each={["outline", "subtle", "surface"]}>
      {(variant) => (
        <CheckboxCardGroup
          key={variant}
          variant={variant}
          defaultValue={["ドラえもん"]}
          items={items}
        />
      )}
    </For>
  )
}

export const WithColorScheme: Story = () => {
  const items = useMemo<CheckboxCardItem[]>(
    () => [
      { label: "ドラえもん", value: "ドラえもん" },
      { label: "ドラミ", value: "ドラミ" },
      { label: "ガチャ子", value: "ガチャ子" },
    ],
    [],
  )

  return (
    <For each={["outline", "subtle", "surface"]}>
      {(variant) => (
        <For key={variant} each={COLOR_SCHEMES}>
          {(colorScheme) => (
            <CheckboxCardGroup
              key={colorScheme}
              colorScheme={colorScheme}
              variant={variant}
              defaultValue={["ドラえもん"]}
              items={items}
            />
          )}
        </For>
      )}
    </For>
  )
}

export const WithAddon: Story = () => {
  const items = useMemo<CheckboxCardItem[]>(
    () => [
      {
        addon: "藤子・F・不二雄",
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "ドラえもん",
      },
      {
        addon: "藤子・F・不二雄",
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "ドラミ",
      },
      {
        addon: "藤子・F・不二雄",
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "ガチャ子",
      },
    ],
    [],
  )

  return (
    <>
      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard
          addon="藤子・F・不二雄"
          description="22世紀の未来から来たネコ型ロボット。"
          label="ドラえもん"
          value="ドラえもん"
        />
        <CheckboxCard
          addon="藤子・F・不二雄"
          description="ドラえもんの妹のロボット。"
          label="ドラミ"
          value="ドラミ"
        />
        <CheckboxCard
          addon="藤子・F・不二雄"
          description="アヒル型のロボット。"
          label="ガチャ子"
          value="ガチャ子"
        />
      </CheckboxCardGroup>

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
      </CheckboxCardGroup>

      <CheckboxCardGroup defaultValue={["ドラえもん"]} items={items} />
    </>
  )
}

export const WithDefaultValue: Story = () => {
  const items = useMemo<CheckboxCardItem[]>(
    () => [
      { label: "ドラえもん", value: "ドラえもん" },
      { label: "ドラミ", value: "ドラミ" },
      { label: "ガチャ子", value: "ガチャ子" },
    ],
    [],
  )

  return <CheckboxCardGroup defaultValue={["ドラえもん"]} items={items} />
}

export const Disabled: Story = () => {
  const items = useMemo<CheckboxCardItem[]>(
    () => [
      { label: "ドラえもん", value: "ドラえもん" },
      { label: "ドラミ", value: "ドラミ" },
      { label: "ガチャ子", value: "ガチャ子" },
    ],
    [],
  )

  return (
    <>
      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard value="ドラえもん">
          <CheckboxCardLabel>ドラえもん</CheckboxCardLabel>
          <CheckboxCardDescription>
            22世紀の未来から来たネコ型ロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard disabled value="ドラミ">
          <CheckboxCardLabel>ドラミ</CheckboxCardLabel>
          <CheckboxCardDescription>
            ドラえもんの妹のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard value="ガチャ子">
          <CheckboxCardLabel>ガチャ子</CheckboxCardLabel>
          <CheckboxCardDescription>
            アヒル型のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>
      </CheckboxCardGroup>

      <CheckboxCardGroup disabled items={items} />

      <Fieldset disabled legend="Which characters would you like to select?">
        <CheckboxCardGroup items={items} />
      </Fieldset>
    </>
  )
}

export const ReadOnly: Story = () => {
  const items = useMemo<CheckboxCardItem[]>(
    () => [
      { label: "ドラえもん", value: "ドラえもん" },
      { label: "ドラミ", value: "ドラミ" },
      { label: "ガチャ子", value: "ガチャ子" },
    ],
    [],
  )

  return (
    <>
      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard value="ドラえもん">
          <CheckboxCardLabel>ドラえもん</CheckboxCardLabel>
          <CheckboxCardDescription>
            22世紀の未来から来たネコ型ロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard readOnly value="ドラミ">
          <CheckboxCardLabel>ドラミ</CheckboxCardLabel>
          <CheckboxCardDescription>
            ドラえもんの妹のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard value="ガチャ子">
          <CheckboxCardLabel>ガチャ子</CheckboxCardLabel>
          <CheckboxCardDescription>
            アヒル型のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>
      </CheckboxCardGroup>

      <CheckboxCardGroup items={items} readOnly />

      <Fieldset legend="Which characters would you like to select?" readOnly>
        <CheckboxCardGroup items={items} />
      </Fieldset>
    </>
  )
}

export const Invalid: Story = () => {
  const items = useMemo<CheckboxCardItem[]>(
    () => [
      { label: "ドラえもん", value: "ドラえもん" },
      { label: "ドラミ", value: "ドラミ" },
      { label: "ガチャ子", value: "ガチャ子" },
    ],
    [],
  )

  return (
    <>
      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard invalid value="ドラえもん">
          <CheckboxCardLabel>ドラえもん</CheckboxCardLabel>
          <CheckboxCardDescription>
            22世紀の未来から来たネコ型ロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard value="ドラミ">
          <CheckboxCardLabel>ドラミ</CheckboxCardLabel>
          <CheckboxCardDescription>
            ドラえもんの妹のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard value="ガチャ子">
          <CheckboxCardLabel>ガチャ子</CheckboxCardLabel>
          <CheckboxCardDescription>
            アヒル型のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>
      </CheckboxCardGroup>

      <CheckboxCardGroup invalid items={items} />

      <Fieldset
        errorMessage="This is required."
        invalid
        legend="Which characters would you like to select?"
      >
        <CheckboxCardGroup items={items} />
      </Fieldset>
    </>
  )
}

export const HiddenIcon: Story = () => {
  const items = useMemo<CheckboxCardItem[]>(
    () => [
      {
        label: "ドラえもん",
        value: "ドラえもん",
        withIcon: false,
      },
      {
        label: "ドラミ",
        value: "ドラミ",
      },
      {
        label: "ガチャ子",
        value: "ガチャ子",
      },
    ],
    [],
  )

  return (
    <>
      <CheckboxCardGroup defaultValue={["ドラえもん"]} withIcon={false}>
        <CheckboxCard label="ドラえもん" value="ドラえもん" />
        <CheckboxCard label="ドラミ" value="ドラミ" />
        <CheckboxCard label="ガチャ子" value="ガチャ子" />
      </CheckboxCardGroup>

      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard value="ドラえもん">
          <CheckboxCardLabel withIcon={false}>ドラえもん</CheckboxCardLabel>
        </CheckboxCard>

        <CheckboxCard value="ドラミ">
          <CheckboxCardLabel>ドラミ</CheckboxCardLabel>
        </CheckboxCard>

        <CheckboxCard value="ガチャ子">
          <CheckboxCardLabel>ガチャ子</CheckboxCardLabel>
        </CheckboxCard>
      </CheckboxCardGroup>

      <CheckboxCardGroup defaultValue={["ドラえもん"]} items={items} />
    </>
  )
}

export const CustomControl: Story = () => {
  const [value, setValue] = useState<string[]>(["ドラえもん"])

  const items = useMemo<CheckboxCardItem[]>(
    () => [
      { label: "ドラえもん", value: "ドラえもん" },
      { label: "ドラミ", value: "ドラミ" },
      { label: "ガチャ子", value: "ガチャ子" },
    ],
    [],
  )

  return <CheckboxCardGroup items={items} value={value} onChange={setValue} />
}

export const CustomLabel: Story = () => {
  const items = useMemo<CheckboxCardItem[]>(
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
      <CheckboxCardGroup defaultValue={["Admin"]}>
        <CheckboxCard
          description="Give full access to the system"
          label={
            <VStack gap="sm">
              <ShieldCheckIcon fontSize="2xl" />
              <Text>Admin</Text>
            </VStack>
          }
          value="Admin"
          labelProps={{
            alignItems: "start",
          }}
        />
        <CheckboxCard
          description="Give limited access to the system"
          label={
            <VStack gap="sm">
              <UserRoundIcon fontSize="2xl" />
              <Text>User</Text>
            </VStack>
          }
          value="User"
          labelProps={{
            alignItems: "start",
          }}
        />
        <CheckboxCard
          description="No access to the system"
          label={
            <VStack gap="sm">
              <LockIcon fontSize="2xl" />
              <Text>Blocked</Text>
            </VStack>
          }
          value="Blocked"
          labelProps={{
            alignItems: "start",
          }}
        />
      </CheckboxCardGroup>

      <CheckboxCardGroup
        defaultValue={["Rabbit"]}
        w="fit-content"
        withIcon={false}
      >
        <CheckboxCard value="Rabbit">
          <CheckboxCardLabel>
            <HStack gap="sm">
              <RabbitIcon color="muted" fontSize="2xl" />
              <Text>Rabbit</Text>
            </HStack>
          </CheckboxCardLabel>
        </CheckboxCard>

        <CheckboxCard value="Snail">
          <HStack gap="sm">
            <SnailIcon color="muted" fontSize="2xl" />
            <Text>Snail</Text>
          </HStack>
        </CheckboxCard>

        <CheckboxCard value="Squirrel">
          <CheckboxCardLabel>
            <HStack gap="sm">
              <SquirrelIcon color="muted" fontSize="2xl" />
              <Text>Squirrel</Text>
            </HStack>
          </CheckboxCardLabel>
        </CheckboxCard>
      </CheckboxCardGroup>

      <CheckboxCardGroup
        defaultValue={["Line Chart"]}
        items={items}
        labelProps={{ flexDirection: "column", gap: "sm" }}
      />
    </>
  )
}
