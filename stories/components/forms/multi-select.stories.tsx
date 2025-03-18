import type { Meta, StoryFn } from "@storybook/react"
import type { SelectItem } from "@yamada-ui/react"
import type { SubmitHandler } from "react-hook-form"
import { CheckIcon, ChevronsDownIcon, Trash2Icon } from "@yamada-ui/lucide"
import {
  Button,
  FormControl,
  MultiSelect,
  Option,
  OptionGroup,
  Tag,
  VStack,
} from "@yamada-ui/react"
import { useMemo, useState } from "react"
import { Controller, useForm } from "react-hook-form"

type Story = StoryFn<typeof MultiSelect>

const meta: Meta<typeof MultiSelect> = {
  component: MultiSelect,
  title: "Components / Forms / MultiSelect",
}

export default meta

export const basic: Story = () => {
  const items: SelectItem[] = [
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

      <MultiSelect items={items} placeholder="キャラクターを選択" />
    </>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <MultiSelect size="xs" placeholder="extra small size" />
      <MultiSelect size="sm" placeholder="small size" />
      <MultiSelect size="md" placeholder="medium size" />
      <MultiSelect size="lg" placeholder="large size" />
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
    <MultiSelect defaultValue={["ベジータ"]} placeholder="キャラクターを選択">
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
        errorBorderColor="orange.500"
        invalid
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
        component={({ label }) => <Tag>{label}</Tag>}
        placeholder="キャラクターを選択"
      >
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>

      <MultiSelect
        component={({ label, onRemove }) => (
          <Tag onClose={onRemove}>{label}</Tag>
        )}
        placeholder="キャラクターを選択"
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
    <MultiSelect omitSelectedValues placeholder="キャラクターを選択">
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
    <MultiSelect maxSelectValues={3} placeholder="キャラクターを選択">
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
    <MultiSelect closeOnSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const disabledClearable: Story = () => {
  return (
    <MultiSelect clearable={false} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const disabledCloseOnBlur: Story = () => {
  return (
    <MultiSelect closeOnBlur={false} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const withPlacement: Story = () => {
  return (
    <MultiSelect
      maxW="xs"
      placeholder="キャラクターを選択"
      placement="right-start"
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
      offset={[16, 16]}
      placeholder="キャラクターを選択"
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
    <MultiSelect gutter={32} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const withDuration: Story = () => {
  return (
    <MultiSelect duration={0.4} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const disabled: Story = () => {
  return (
    <>
      <MultiSelect variant="outline" disabled placeholder="outline" />
      <MultiSelect variant="filled" disabled placeholder="filled" />
      <MultiSelect variant="flushed" disabled placeholder="flushed" />
      <MultiSelect variant="unstyled" disabled placeholder="unstyled" />

      <FormControl
        disabled
        label="Which notifications would you like to receive?"
      >
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>
  )
}

export const readOnly: Story = () => {
  return (
    <>
      <MultiSelect variant="outline" placeholder="outline" readOnly />
      <MultiSelect variant="filled" placeholder="filled" readOnly />
      <MultiSelect variant="flushed" placeholder="flushed" readOnly />
      <MultiSelect variant="unstyled" placeholder="unstyled" readOnly />

      <FormControl
        label="Which notifications would you like to receive?"
        readOnly
      >
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>
  )
}

export const invalid: Story = () => {
  return (
    <>
      <MultiSelect variant="outline" invalid placeholder="outline" />
      <MultiSelect variant="filled" invalid placeholder="filled" />
      <MultiSelect variant="flushed" invalid placeholder="flushed" />
      <MultiSelect variant="unstyled" invalid placeholder="unstyled" />

      <FormControl
        errorMessage="This is required."
        invalid
        label="Which notifications would you like to receive?"
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
      <Option disabled value="ベジータ">
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
      <Option disabled focusable value="ベジータ">
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
        iconProps={{ children: <ChevronsDownIcon /> }}
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
      clearIconProps={{ children: <Trash2Icon /> }}
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
        optionProps={{ icon: <CheckIcon color="green.500" /> }}
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
        errorMessage={errors.select1?.message}
        invalid={!!errors.select1}
        label="Who is your favorite character?"
      >
        <Controller
          name="select1"
          control={control}
          render={({ field }) => (
            <MultiSelect placeholder="キャラクターを選択" {...field}>
              <Option value="孫悟空">孫悟空</Option>
              <Option value="ベジータ">ベジータ</Option>
              <Option value="フリーザ">フリーザ</Option>
            </MultiSelect>
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <FormControl
        errorMessage={errors.select2?.message}
        invalid={!!errors.select2}
        label="Who is your favorite character?"
      >
        <Controller
          name="select2"
          control={control}
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
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <FormControl
        errorMessage={errors.select3?.message}
        invalid={!!errors.select3}
        label="Who is your favorite character?"
      >
        <Controller
          name="select3"
          control={control}
          render={({ field }) => (
            <MultiSelect
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
        errorMessage={errors.select1?.message}
        invalid={!!errors.select1}
        label="Who is your favorite character?"
      >
        <Controller
          name="select1"
          control={control}
          render={({ field }) => (
            <MultiSelect placeholder="キャラクターを選択" {...field}>
              <Option value="孫悟空">孫悟空</Option>
              <Option value="ベジータ">ベジータ</Option>
              <Option value="フリーザ">フリーザ</Option>
            </MultiSelect>
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <FormControl
        errorMessage={errors.select2?.message}
        invalid={!!errors.select2}
        label="Who is your favorite character?"
      >
        <Controller
          name="select2"
          control={control}
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
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <FormControl
        errorMessage={errors.select3?.message}
        invalid={!!errors.select3}
        label="Who is your favorite character?"
      >
        <Controller
          name="select3"
          control={control}
          render={({ field }) => (
            <MultiSelect
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
