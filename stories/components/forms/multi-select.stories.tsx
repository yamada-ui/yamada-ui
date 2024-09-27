import type { Meta, StoryFn } from "@storybook/react"
import { useMemo, useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"
import { Check, ChevronsDown, Trash2 } from "@yamada-ui/lucide"
import type { SelectItem } from "@yamada-ui/react"
import {
  MultiSelect,
  OptionGroup,
  Option,
  FormControl,
  Tag,
  VStack,
  Button,
} from "@yamada-ui/react"

type Story = StoryFn<typeof MultiSelect>

const meta: Meta<typeof MultiSelect> = {
  title: "Components / Forms / MultiSelect",
  component: MultiSelect,
}

export default meta

export const basic: Story = () => {
  const items: SelectItem[] = [
    { label: "ベジータ", value: "ベジータ" },
    {
      label: "地球人",
      items: [
        { label: "孫悟空", value: "孫悟空" },
        { label: "孫悟飯", value: "孫悟飯" },
        { label: "クリリン", value: "クリリン" },
      ],
    },
    {
      label: "フリーザ軍",
      items: [
        { label: "フリーザ", value: "フリーザ" },
        { label: "ギニュー", value: "ギニュー" },
        { label: "リクーム", value: "リクーム" },
        { label: "バータ", value: "バータ" },
        { label: "ジース", value: "ジース" },
        { label: "グルド", value: "グルド" },
      ],
    },
  ]

  return (
    <>
      <MultiSelect placeholder="キャラクターを選択">
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>

      <MultiSelect placeholder="キャラクターを選択">
        <OptionGroup label="地球人">
          <Option value="孫悟空">孫悟空</Option>
          <Option value="孫悟飯">孫悟飯</Option>
          <Option value="クリリン">クリリン</Option>
        </OptionGroup>

        <OptionGroup label="フリーザ軍">
          <Option value="フリーザ">フリーザ</Option>
          <Option value="ギニュー">ギニュー</Option>
          <Option value="リクーム">リクーム</Option>
          <Option value="バータ">バータ</Option>
          <Option value="ジース">ジース</Option>
          <Option value="グルド">グルド</Option>
        </OptionGroup>
      </MultiSelect>

      <MultiSelect placeholder="キャラクターを選択" items={items} />
    </>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <MultiSelect placeholder="extra small size" size="xs" />
      <MultiSelect placeholder="small size" size="sm" />
      <MultiSelect placeholder="medium size" size="md" />
      <MultiSelect placeholder="large size" size="lg" />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <MultiSelect variant="outline" placeholder="outline" />
      <MultiSelect variant="filled" placeholder="filled" />
      <MultiSelect variant="flushed" placeholder="flushed" />
      <MultiSelect variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const withFooter: Story = () => {
  const [value, onChange] = useState<string[]>([])
  const items: SelectItem[] = useMemo(
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
    <MultiSelect
      value={value}
      onChange={onChange}
      placeholder="キャラクターを選択"
      footer={({ onClose }) => (
        <VStack
          borderTopWidth="1px"
          borderColor={["blackAlpha.200", "whiteAlpha.100"]}
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
    />
  )
}

export const withDefaultValue: Story = () => {
  return (
    <MultiSelect placeholder="キャラクターを選択" defaultValue={["ベジータ"]}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const withBorderColor: Story = () => {
  return (
    <>
      <MultiSelect placeholder="default border color" />
      <MultiSelect
        focusBorderColor="green.500"
        placeholder="custom border color"
      />
      <MultiSelect
        isInvalid
        errorBorderColor="orange.500"
        placeholder="custom border color"
      />
    </>
  )
}

export const withSeparator: Story = () => {
  return (
    <MultiSelect placeholder="キャラクターを選択" separator=";">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const withComponent: Story = () => {
  return (
    <>
      <MultiSelect
        placeholder="キャラクターを選択"
        component={({ label }) => <Tag>{label}</Tag>}
      >
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>

      <MultiSelect
        placeholder="キャラクターを選択"
        component={({ label, onRemove }) => (
          <Tag onClose={onRemove}>{label}</Tag>
        )}
      >
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>
    </>
  )
}

export const withOmitSelectedValues: Story = () => {
  return (
    <MultiSelect placeholder="キャラクターを選択" omitSelectedValues={true}>
      <OptionGroup label="地球人">
        <Option value="孫悟空">孫悟空</Option>
        <Option value="孫悟飯">孫悟飯</Option>
        <Option value="クリリン">クリリン</Option>
      </OptionGroup>

      <OptionGroup label="フリーザ軍">
        <Option value="フリーザ">フリーザ</Option>
        <Option value="ギニュー">ギニュー</Option>
        <Option value="リクーム">リクーム</Option>
        <Option value="バータ">バータ</Option>
        <Option value="ジース">ジース</Option>
        <Option value="グルド">グルド</Option>
      </OptionGroup>
    </MultiSelect>
  )
}

export const withMaxSelectValues: Story = () => {
  return (
    <MultiSelect placeholder="キャラクターを選択" maxSelectValues={3}>
      <OptionGroup label="地球人">
        <Option value="孫悟空">孫悟空</Option>
        <Option value="孫悟飯">孫悟飯</Option>
        <Option value="クリリン">クリリン</Option>
      </OptionGroup>

      <OptionGroup label="フリーザ軍">
        <Option value="フリーザ">フリーザ</Option>
        <Option value="ギニュー">ギニュー</Option>
        <Option value="リクーム">リクーム</Option>
        <Option value="バータ">バータ</Option>
        <Option value="ジース">ジース</Option>
        <Option value="グルド">グルド</Option>
      </OptionGroup>
    </MultiSelect>
  )
}

export const withCloseOnSelect: Story = () => {
  return (
    <MultiSelect placeholder="キャラクターを選択" closeOnSelect={true}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const disabledIsClearable: Story = () => {
  return (
    <MultiSelect placeholder="キャラクターを選択" isClearable={false}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const disabledCloseOnBlur: Story = () => {
  return (
    <MultiSelect placeholder="キャラクターを選択" closeOnBlur={false}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const withPlacement: Story = () => {
  return (
    <MultiSelect
      placeholder="キャラクターを選択"
      placement="right-start"
      maxW="xs"
    >
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const withOffset: Story = () => {
  return (
    <MultiSelect
      placeholder="キャラクターを選択"
      offset={[16, 16]}
      listProps={{ maxW: "xs" }}
    >
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const withGutter: Story = () => {
  return (
    <MultiSelect placeholder="キャラクターを選択" gutter={32}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const withDuration: Story = () => {
  return (
    <MultiSelect placeholder="キャラクターを選択" duration={0.4}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <MultiSelect isDisabled variant="outline" placeholder="outline" />
      <MultiSelect isDisabled variant="filled" placeholder="filled" />
      <MultiSelect isDisabled variant="flushed" placeholder="flushed" />
      <MultiSelect isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl
        isDisabled
        label="Which notifications would you like to receive?"
      >
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <MultiSelect isReadOnly variant="outline" placeholder="outline" />
      <MultiSelect isReadOnly variant="filled" placeholder="filled" />
      <MultiSelect isReadOnly variant="flushed" placeholder="flushed" />
      <MultiSelect isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl
        isReadOnly
        label="Which notifications would you like to receive?"
      >
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <MultiSelect isInvalid variant="outline" placeholder="outline" />
      <MultiSelect isInvalid variant="filled" placeholder="filled" />
      <MultiSelect isInvalid variant="flushed" placeholder="flushed" />
      <MultiSelect isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl
        isInvalid
        label="Which notifications would you like to receive?"
        errorMessage="This is required."
      >
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>
  )
}

export const isOptionDisabled: Story = () => {
  return (
    <MultiSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ" isDisabled>
        ベジータ
      </Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const isOptionFocusable: Story = () => {
  return (
    <MultiSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ" isDisabled isFocusable>
        ベジータ
      </Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const customIcon: Story = () => {
  return (
    <>
      <MultiSelect
        placeholder="キャラクターを選択"
        iconProps={{ color: "primary" }}
      >
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>

      <MultiSelect
        placeholder="キャラクターを選択"
        iconProps={{ children: <ChevronsDown /> }}
      >
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>
    </>
  )
}

export const customClearIcon: Story = () => {
  return (
    <MultiSelect
      placeholder="キャラクターを選択"
      clearIconProps={{ children: <Trash2 /> }}
    >
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const customOption: Story = () => {
  return (
    <>
      <MultiSelect
        placeholder="キャラクターを選択"
        optionProps={{ color: "primary" }}
      >
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>

      <MultiSelect
        placeholder="キャラクターを選択"
        optionProps={{ icon: <Check color="green.500" /> }}
      >
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>
    </>
  )
}

export const customControl: Story = () => {
  const [value, onChange] = useState<string[]>(["孫悟空"])

  return (
    <MultiSelect
      placeholder="キャラクターを選択"
      value={value}
      onChange={onChange}
    >
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const reactHookForm: Story = () => {
  interface Data {
    select1: string[]
    select2: string[]
    select3: string[]
  }

  const items: SelectItem[] = [
    { label: "ベジータ", value: "ベジータ" },
    {
      label: "地球人",
      items: [
        { label: "孫悟空", value: "孫悟空" },
        { label: "孫悟飯", value: "孫悟飯" },
        { label: "クリリン", value: "クリリン" },
      ],
    },
    {
      label: "フリーザ軍",
      items: [
        { label: "フリーザ", value: "フリーザ" },
        { label: "ギニュー", value: "ギニュー" },
        { label: "リクーム", value: "リクーム" },
        { label: "バータ", value: "バータ" },
        { label: "ジース", value: "ジース" },
        { label: "グルド", value: "グルド" },
      ],
    },
  ]

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.select1}
        label="Who is your favorite character?"
        errorMessage={errors.select1?.message}
      >
        <Controller
          name="select1"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <MultiSelect placeholder="キャラクターを選択" {...field}>
              <Option value="孫悟空">孫悟空</Option>
              <Option value="ベジータ">ベジータ</Option>
              <Option value="フリーザ">フリーザ</Option>
            </MultiSelect>
          )}
        />
      </FormControl>

      <FormControl
        isInvalid={!!errors.select2}
        label="Who is your favorite character?"
        errorMessage={errors.select2?.message}
      >
        <Controller
          name="select2"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <MultiSelect placeholder="キャラクターを選択" {...field}>
              <OptionGroup label="地球人">
                <Option value="孫悟空">孫悟空</Option>
                <Option value="孫悟飯">孫悟飯</Option>
                <Option value="クリリン">クリリン</Option>
              </OptionGroup>

              <OptionGroup label="フリーザ軍">
                <Option value="フリーザ">フリーザ</Option>
                <Option value="ギニュー">ギニュー</Option>
                <Option value="リクーム">リクーム</Option>
                <Option value="バータ">バータ</Option>
                <Option value="ジース">ジース</Option>
                <Option value="グルド">グルド</Option>
              </OptionGroup>
            </MultiSelect>
          )}
        />
      </FormControl>

      <FormControl
        isInvalid={!!errors.select3}
        label="Who is your favorite character?"
        errorMessage={errors.select3?.message}
      >
        <Controller
          name="select3"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <MultiSelect
              placeholder="キャラクターを選択"
              {...field}
              items={items}
            />
          )}
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
    select1: string[]
    select2: string[]
    select3: string[]
  }

  const defaultValues: Data = {
    select1: ["孫悟空"],
    select2: ["フリーザ"],
    select3: ["リクーム"],
  }

  const items: SelectItem[] = [
    { label: "ベジータ", value: "ベジータ" },
    {
      label: "地球人",
      items: [
        { label: "孫悟空", value: "孫悟空" },
        { label: "孫悟飯", value: "孫悟飯" },
        { label: "クリリン", value: "クリリン" },
      ],
    },
    {
      label: "フリーザ軍",
      items: [
        { label: "フリーザ", value: "フリーザ" },
        { label: "ギニュー", value: "ギニュー" },
        { label: "リクーム", value: "リクーム" },
        { label: "バータ", value: "バータ" },
        { label: "ジース", value: "ジース" },
        { label: "グルド", value: "グルド" },
      ],
    },
  ]

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.select1}
        label="Who is your favorite character?"
        errorMessage={errors.select1?.message}
      >
        <Controller
          name="select1"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <MultiSelect placeholder="キャラクターを選択" {...field}>
              <Option value="孫悟空">孫悟空</Option>
              <Option value="ベジータ">ベジータ</Option>
              <Option value="フリーザ">フリーザ</Option>
            </MultiSelect>
          )}
        />
      </FormControl>

      <FormControl
        isInvalid={!!errors.select2}
        label="Who is your favorite character?"
        errorMessage={errors.select2?.message}
      >
        <Controller
          name="select2"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <MultiSelect placeholder="キャラクターを選択" {...field}>
              <OptionGroup label="地球人">
                <Option value="孫悟空">孫悟空</Option>
                <Option value="孫悟飯">孫悟飯</Option>
                <Option value="クリリン">クリリン</Option>
              </OptionGroup>

              <OptionGroup label="フリーザ軍">
                <Option value="フリーザ">フリーザ</Option>
                <Option value="ギニュー">ギニュー</Option>
                <Option value="リクーム">リクーム</Option>
                <Option value="バータ">バータ</Option>
                <Option value="ジース">ジース</Option>
                <Option value="グルド">グルド</Option>
              </OptionGroup>
            </MultiSelect>
          )}
        />
      </FormControl>

      <FormControl
        isInvalid={!!errors.select3}
        label="Who is your favorite character?"
        errorMessage={errors.select3?.message}
      >
        <Controller
          name="select3"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <MultiSelect
              placeholder="キャラクターを選択"
              {...field}
              items={items}
            />
          )}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
