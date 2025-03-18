import type { Meta, StoryFn } from "@storybook/react"
import type { AutocompleteItem } from "@yamada-ui/react"
import type { SubmitHandler } from "react-hook-form"
import { CheckIcon, ChevronsDownIcon, Trash2Icon } from "@yamada-ui/lucide"
import {
  AutocompleteOption,
  AutocompleteOptionGroup,
  Button,
  FormControl,
  MultiAutocomplete,
  Tag,
  VStack,
} from "@yamada-ui/react"
import { useMemo, useState } from "react"
import { Controller, useForm } from "react-hook-form"

type Story = StoryFn<typeof MultiAutocomplete>

const meta: Meta<typeof MultiAutocomplete> = {
  component: MultiAutocomplete,
  title: "Components / Forms / MultiAutocomplete",
}

export default meta

export const basic: Story = () => {
  const items: AutocompleteItem[] = [
    { label: "ベジータ", value: "ベジータ" },
    {
      items: [
        { label: "孫悟空", value: "孫悟空" },
        { label: "孫悟飯", value: "孫悟飯" },
        { label: "クリリン", value: "クリリン" },
      ],
      label: "地球人",
    },
    {
      items: [
        { label: "フリーザ", value: "フリーザ" },
        { label: "ギニュー", value: "ギニュー" },
        { label: "リクーム", value: "リクーム" },
        { label: "バータ", value: "バータ" },
        { label: "ジース", value: "ジース" },
        { label: "グルド", value: "グルド" },
      ],
      label: "フリーザ軍",
    },
  ]

  return (
    <>
      <MultiAutocomplete placeholder="キャラクターを選択">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete placeholder="キャラクターを選択">
        <AutocompleteOptionGroup label="地球人">
          <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
          <AutocompleteOption value="孫悟飯">孫悟飯</AutocompleteOption>
          <AutocompleteOption value="クリリン">クリリン</AutocompleteOption>
        </AutocompleteOptionGroup>

        <AutocompleteOptionGroup label="フリーザ軍">
          <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
          <AutocompleteOption value="ギニュー">ギニュー</AutocompleteOption>
          <AutocompleteOption value="リクーム">リクーム</AutocompleteOption>
          <AutocompleteOption value="バータ">バータ</AutocompleteOption>
          <AutocompleteOption value="ジース">ジース</AutocompleteOption>
          <AutocompleteOption value="グルド">グルド</AutocompleteOption>
        </AutocompleteOptionGroup>
      </MultiAutocomplete>

      <MultiAutocomplete items={items} placeholder="キャラクターを選択" />
    </>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <MultiAutocomplete size="xs" placeholder="extra small size" />
      <MultiAutocomplete size="sm" placeholder="small size" />
      <MultiAutocomplete size="md" placeholder="medium size" />
      <MultiAutocomplete size="lg" placeholder="large size" />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <MultiAutocomplete variant="outline" placeholder="outline" />
      <MultiAutocomplete variant="filled" placeholder="filled" />
      <MultiAutocomplete variant="flushed" placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const withFooter: Story = () => {
  const [value, onChange] = useState<string[]>([])
  const items: AutocompleteItem[] = useMemo(
    () => [
      { label: "孫悟空", value: "孫悟空" },
      { label: "孫悟飯", value: "孫悟飯" },
      { label: "クリリン", value: "クリリン" },
    ],
    [],
  )
  const allValues = useMemo(
    () =>
      items
        .map((item) => ("value" in item ? item.value : undefined))
        .filter((value) => value !== undefined),
    [items],
  )

  return (
    <MultiAutocomplete
      footer={({ onClose }) => (
        <VStack
          borderColor={["blackAlpha.200", "whiteAlpha.100"]}
          borderTopWidth="1px"
          p="2"
        >
          <Button
            onClick={() => {
              onChange(allValues)
              onClose()
            }}
          >
            Set all values
          </Button>
        </VStack>
      )}
      items={items}
      placeholder="キャラクターを選択"
      value={value}
      onChange={onChange}
    />
  )
}

export const withDefaultValue: Story = () => {
  return (
    <MultiAutocomplete
      defaultValue={["ベジータ"]}
      placeholder="キャラクターを選択"
    >
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const withEmptyMessage: Story = () => {
  return (
    <MultiAutocomplete
      emptyMessage="キャラクターが存在しません"
      placeholder="キャラクターを選択"
    >
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const withAllowCreate: Story = () => {
  const items: AutocompleteItem[] = [
    { label: "ベジータ", value: "ベジータ" },
    {
      items: [
        { label: "孫悟空", value: "孫悟空" },
        { label: "孫悟飯", value: "孫悟飯" },
        { label: "クリリン", value: "クリリン" },
      ],
      label: "地球人",
    },
    {
      items: [
        { label: "フリーザ", value: "フリーザ" },
        { label: "ギニュー", value: "ギニュー" },
        { label: "リクーム", value: "リクーム" },
        { label: "バータ", value: "バータ" },
        { label: "ジース", value: "ジース" },
        { label: "グルド", value: "グルド" },
      ],
      label: "フリーザ軍",
    },
  ]

  return (
    <MultiAutocomplete
      allowCreate
      items={items}
      placeholder="キャラクターを選択"
      onCreate={(newItem, newItems) =>
        console.log("created item", newItem, "new items", newItems)
      }
    />
  )
}

export const withAllowFree: Story = () => {
  const items: AutocompleteItem[] = [
    { label: "ベジータ", value: "ベジータ" },
    {
      items: [
        { label: "孫悟空", value: "孫悟空" },
        { label: "孫悟飯", value: "孫悟飯" },
        { label: "クリリン", value: "クリリン" },
      ],
      label: "地球人",
    },
    {
      items: [
        { label: "フリーザ", value: "フリーザ" },
        { label: "ギニュー", value: "ギニュー" },
        { label: "リクーム", value: "リクーム" },
        { label: "バータ", value: "バータ" },
        { label: "ジース", value: "ジース" },
        { label: "グルド", value: "グルド" },
      ],
      label: "フリーザ軍",
    },
  ]

  return (
    <MultiAutocomplete
      allowFree
      items={items}
      placeholder="キャラクターを選択"
      onChange={(values) => console.log("new values", values)}
    />
  )
}

export const withInsertPositionItem: Story = () => {
  const items: AutocompleteItem[] = [
    { label: "ベジータ", value: "ベジータ" },
    {
      items: [
        { label: "孫悟空", value: "孫悟空" },
        { label: "孫悟飯", value: "孫悟飯" },
        { label: "クリリン", value: "クリリン" },
      ],
      label: "地球人",
    },
    {
      items: [
        { label: "フリーザ", value: "フリーザ" },
        { label: "ギニュー", value: "ギニュー" },
        { label: "リクーム", value: "リクーム" },
        { label: "バータ", value: "バータ" },
        { label: "ジース", value: "ジース" },
        { label: "グルド", value: "グルド" },
      ],
      label: "フリーザ軍",
    },
  ]

  return (
    <>
      <MultiAutocomplete
        allowCreate
        insertPositionItem="first"
        items={items}
        placeholder="キャラクターを選択"
      />
      <MultiAutocomplete
        allowCreate
        insertPositionItem="last"
        items={items}
        placeholder="キャラクターを選択"
      />
      <MultiAutocomplete
        allowCreate
        insertPositionItem="地球人"
        items={items}
        placeholder="キャラクターを選択"
      />
      <MultiAutocomplete
        allowCreate
        insertPositionItem={["フリーザ軍", "last"]}
        items={items}
        placeholder="キャラクターを選択"
      />
    </>
  )
}

export const withBorderColor: Story = () => {
  return (
    <>
      <MultiAutocomplete placeholder="default border color">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete
        focusBorderColor="green.500"
        placeholder="custom border color"
      >
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete
        errorBorderColor="orange.500"
        invalid
        placeholder="custom border color"
      >
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>
  )
}

export const withSeparator: Story = () => {
  return (
    <MultiAutocomplete placeholder="キャラクターを選択" separator=";">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const withKeepPlaceholder: Story = () => {
  return (
    <MultiAutocomplete keepPlaceholder placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const withComponent: Story = () => {
  return (
    <>
      <MultiAutocomplete
        component={({ label }) => <Tag>{label}</Tag>}
        placeholder="キャラクターを選択"
      >
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete
        component={({ label, onRemove }) => (
          <Tag onClose={onRemove}>{label}</Tag>
        )}
        placeholder="キャラクターを選択"
      >
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>
  )
}

export const withOmitSelectedValues: Story = () => {
  return (
    <MultiAutocomplete omitSelectedValues placeholder="キャラクターを選択">
      <AutocompleteOptionGroup label="地球人">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="孫悟飯">孫悟飯</AutocompleteOption>
        <AutocompleteOption value="クリリン">クリリン</AutocompleteOption>
      </AutocompleteOptionGroup>

      <AutocompleteOptionGroup label="フリーザ軍">
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
        <AutocompleteOption value="ギニュー">ギニュー</AutocompleteOption>
        <AutocompleteOption value="リクーム">リクーム</AutocompleteOption>
        <AutocompleteOption value="バータ">バータ</AutocompleteOption>
        <AutocompleteOption value="ジース">ジース</AutocompleteOption>
        <AutocompleteOption value="グルド">グルド</AutocompleteOption>
      </AutocompleteOptionGroup>
    </MultiAutocomplete>
  )
}

export const withMaxSelectValues: Story = () => {
  return (
    <MultiAutocomplete maxSelectValues={3} placeholder="キャラクターを選択">
      <AutocompleteOptionGroup label="地球人">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="孫悟飯">孫悟飯</AutocompleteOption>
        <AutocompleteOption value="クリリン">クリリン</AutocompleteOption>
      </AutocompleteOptionGroup>

      <AutocompleteOptionGroup label="フリーザ軍">
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
        <AutocompleteOption value="ギニュー">ギニュー</AutocompleteOption>
        <AutocompleteOption value="リクーム">リクーム</AutocompleteOption>
        <AutocompleteOption value="バータ">バータ</AutocompleteOption>
        <AutocompleteOption value="ジース">ジース</AutocompleteOption>
        <AutocompleteOption value="グルド">グルド</AutocompleteOption>
      </AutocompleteOptionGroup>
    </MultiAutocomplete>
  )
}

export const withCloseOnSelect: Story = () => {
  return (
    <MultiAutocomplete closeOnSelect placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const disabledClearable: Story = () => {
  return (
    <MultiAutocomplete clearable={false} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const disabledCloseOnBlur: Story = () => {
  return (
    <MultiAutocomplete closeOnBlur={false} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const withPlacement: Story = () => {
  return (
    <MultiAutocomplete
      maxW="xs"
      placeholder="キャラクターを選択"
      placement="right-start"
    >
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const withOffset: Story = () => {
  return (
    <MultiAutocomplete
      offset={[16, 16]}
      placeholder="キャラクターを選択"
      listProps={{ maxW: "xs" }}
    >
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const withGutter: Story = () => {
  return (
    <MultiAutocomplete gutter={32} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const withDuration: Story = () => {
  return (
    <MultiAutocomplete duration={0.4} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const disabled: Story = () => {
  return (
    <>
      <MultiAutocomplete variant="outline" disabled placeholder="outline" />
      <MultiAutocomplete variant="filled" disabled placeholder="filled" />
      <MultiAutocomplete variant="flushed" disabled placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" disabled placeholder="unstyled" />

      <FormControl
        disabled
        label="Which notifications would you like to receive?"
      >
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>
  )
}

export const readOnly: Story = () => {
  return (
    <>
      <MultiAutocomplete variant="outline" placeholder="outline" readOnly />
      <MultiAutocomplete variant="filled" placeholder="filled" readOnly />
      <MultiAutocomplete variant="flushed" placeholder="flushed" readOnly />
      <MultiAutocomplete variant="unstyled" placeholder="unstyled" readOnly />

      <FormControl
        label="Which notifications would you like to receive?"
        readOnly
      >
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>
  )
}

export const invalid: Story = () => {
  return (
    <>
      <MultiAutocomplete variant="outline" invalid placeholder="outline" />
      <MultiAutocomplete variant="filled" invalid placeholder="filled" />
      <MultiAutocomplete variant="flushed" invalid placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" invalid placeholder="unstyled" />

      <FormControl
        errorMessage="This is required."
        invalid
        label="Which notifications would you like to receive?"
      >
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>
  )
}

export const isOptionDisabled: Story = () => {
  return (
    <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption disabled value="ベジータ">
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const isOptionFocusable: Story = () => {
  return (
    <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption disabled focusable value="ベジータ">
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const customIcon: Story = () => {
  return (
    <>
      <MultiAutocomplete
        placeholder="キャラクターを選択"
        iconProps={{ color: "primary" }}
      >
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete
        placeholder="キャラクターを選択"
        iconProps={{ children: <ChevronsDownIcon /> }}
      >
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>
  )
}

export const customClearIcon: Story = () => {
  return (
    <MultiAutocomplete
      placeholder="キャラクターを選択"
      clearIconProps={{ children: <Trash2Icon /> }}
    >
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const customOption: Story = () => {
  return (
    <>
      <MultiAutocomplete
        placeholder="キャラクターを選択"
        optionProps={{ color: "primary" }}
      >
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete
        placeholder="キャラクターを選択"
        optionProps={{ icon: <CheckIcon color="green.500" /> }}
      >
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>
  )
}

export const customControl: Story = () => {
  const [value, onChange] = useState<string[]>(["孫悟空"])

  return (
    <MultiAutocomplete
      placeholder="キャラクターを選択"
      value={value}
      onChange={onChange}
    >
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const reactHookForm: Story = () => {
  interface Data {
    autocomplete1: string[]
    autocomplete2: string[]
    autocomplete3: string[]
  }

  const items: AutocompleteItem[] = [
    { label: "ベジータ", value: "ベジータ" },
    {
      items: [
        { label: "孫悟空", value: "孫悟空" },
        { label: "孫悟飯", value: "孫悟飯" },
        { label: "クリリン", value: "クリリン" },
      ],
      label: "地球人",
    },
    {
      items: [
        { label: "フリーザ", value: "フリーザ" },
        { label: "ギニュー", value: "ギニュー" },
        { label: "リクーム", value: "リクーム" },
        { label: "バータ", value: "バータ" },
        { label: "ジース", value: "ジース" },
        { label: "グルド", value: "グルド" },
      ],
      label: "フリーザ軍",
    },
  ]

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        errorMessage={errors.autocomplete1?.message}
        invalid={!!errors.autocomplete1}
        label="Who is your favorite character?"
      >
        <Controller
          name="autocomplete1"
          control={control}
          render={({ field }) => (
            <MultiAutocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
              <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
              <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
            </MultiAutocomplete>
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <FormControl
        errorMessage={errors.autocomplete2?.message}
        invalid={!!errors.autocomplete2}
        label="Who is your favorite character?"
      >
        <Controller
          name="autocomplete2"
          control={control}
          render={({ field }) => (
            <MultiAutocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOptionGroup label="地球人">
                <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
                <AutocompleteOption value="孫悟飯">孫悟飯</AutocompleteOption>
                <AutocompleteOption value="クリリン">
                  クリリン
                </AutocompleteOption>
              </AutocompleteOptionGroup>

              <AutocompleteOptionGroup label="フリーザ軍">
                <AutocompleteOption value="フリーザ">
                  フリーザ
                </AutocompleteOption>
                <AutocompleteOption value="ギニュー">
                  ギニュー
                </AutocompleteOption>
                <AutocompleteOption value="リクーム">
                  リクーム
                </AutocompleteOption>
                <AutocompleteOption value="バータ">バータ</AutocompleteOption>
                <AutocompleteOption value="ジース">ジース</AutocompleteOption>
                <AutocompleteOption value="グルド">グルド</AutocompleteOption>
              </AutocompleteOptionGroup>
            </MultiAutocomplete>
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <FormControl
        errorMessage={errors.autocomplete3?.message}
        invalid={!!errors.autocomplete3}
        label="Who is your favorite character?"
      >
        <Controller
          name="autocomplete3"
          control={control}
          render={({ field }) => (
            <MultiAutocomplete
              placeholder="キャラクターを選択"
              {...field}
              items={items}
            />
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}

export const reactHookFormWithDefaultValue: Story = () => {
  interface Data {
    autocomplete1: string[]
    autocomplete2: string[]
    autocomplete3: string[]
  }

  const defaultValues: Data = {
    autocomplete1: ["孫悟空"],
    autocomplete2: ["フリーザ"],
    autocomplete3: ["リクーム"],
  }

  const items: AutocompleteItem[] = [
    { label: "ベジータ", value: "ベジータ" },
    {
      items: [
        { label: "孫悟空", value: "孫悟空" },
        { label: "孫悟飯", value: "孫悟飯" },
        { label: "クリリン", value: "クリリン" },
      ],
      label: "地球人",
    },
    {
      items: [
        { label: "フリーザ", value: "フリーザ" },
        { label: "ギニュー", value: "ギニュー" },
        { label: "リクーム", value: "リクーム" },
        { label: "バータ", value: "バータ" },
        { label: "ジース", value: "ジース" },
        { label: "グルド", value: "グルド" },
      ],
      label: "フリーザ軍",
    },
  ]

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        errorMessage={errors.autocomplete1?.message}
        invalid={!!errors.autocomplete1}
        label="Who is your favorite character?"
      >
        <Controller
          name="autocomplete1"
          control={control}
          render={({ field }) => (
            <MultiAutocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
              <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
              <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
            </MultiAutocomplete>
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <FormControl
        errorMessage={errors.autocomplete2?.message}
        invalid={!!errors.autocomplete2}
        label="Who is your favorite character?"
      >
        <Controller
          name="autocomplete2"
          control={control}
          render={({ field }) => (
            <MultiAutocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOptionGroup label="地球人">
                <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
                <AutocompleteOption value="孫悟飯">孫悟飯</AutocompleteOption>
                <AutocompleteOption value="クリリン">
                  クリリン
                </AutocompleteOption>
              </AutocompleteOptionGroup>

              <AutocompleteOptionGroup label="フリーザ軍">
                <AutocompleteOption value="フリーザ">
                  フリーザ
                </AutocompleteOption>
                <AutocompleteOption value="ギニュー">
                  ギニュー
                </AutocompleteOption>
                <AutocompleteOption value="リクーム">
                  リクーム
                </AutocompleteOption>
                <AutocompleteOption value="バータ">バータ</AutocompleteOption>
                <AutocompleteOption value="ジース">ジース</AutocompleteOption>
                <AutocompleteOption value="グルド">グルド</AutocompleteOption>
              </AutocompleteOptionGroup>
            </MultiAutocomplete>
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <FormControl
        errorMessage={errors.autocomplete3?.message}
        invalid={!!errors.autocomplete3}
        label="Who is your favorite character?"
      >
        <Controller
          name="autocomplete3"
          control={control}
          render={({ field }) => (
            <MultiAutocomplete
              placeholder="キャラクターを選択"
              {...field}
              items={items}
            />
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
