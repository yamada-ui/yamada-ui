import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import type { SelectItem } from "./"
import { useMemo, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Button } from "../button"
import { FormControl } from "../form-control"
import { CheckIcon, ChevronsDownIcon, Trash2Icon } from "../icon"
import { VStack } from "../stack"
import { Tag } from "../tag"
import { MultiSelect, Option, OptionGroup } from "./"

type Story = StoryFn<typeof MultiSelect>

const meta: Meta<typeof MultiSelect> = {
  component: MultiSelect,
  title: "Components / MultiSelect",
}

export default meta

export const Basic: Story = () => {
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

export const WithSize: Story = () => {
  return (
    <>
      <MultiSelect size="xs" placeholder="extra small size" />
      <MultiSelect size="sm" placeholder="small size" />
      <MultiSelect size="md" placeholder="medium size" />
      <MultiSelect size="lg" placeholder="large size" />
    </>
  )
}

export const WithVariant: Story = () => {
  return (
    <>
      <MultiSelect variant="outline" placeholder="outline" />
      <MultiSelect variant="filled" placeholder="filled" />
      <MultiSelect variant="flushed" placeholder="flushed" />
      <MultiSelect variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const WithFooter: Story = () => {
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

export const WithDefaultValue: Story = () => {
  return (
    <MultiSelect defaultValue={["ベジータ"]} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const WithBorderColor: Story = () => {
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

export const WithSeparator: Story = () => {
  return (
    <MultiSelect placeholder="キャラクターを選択" separator=";">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const WithComponent: Story = () => {
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

export const WithOmitSelectedValues: Story = () => {
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

export const WithMaxSelectValues: Story = () => {
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

export const WithCloseOnSelect: Story = () => {
  return (
    <MultiSelect closeOnSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const DisabledIsClearable: Story = () => {
  return (
    <MultiSelect clearable={false} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const DisabledCloseOnBlur: Story = () => {
  return (
    <MultiSelect closeOnBlur={false} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const WithPlacement: Story = () => {
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

export const WithOffset: Story = () => {
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

export const WithGutter: Story = () => {
  return (
    <MultiSelect gutter={32} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const WithDuration: Story = () => {
  return (
    <MultiSelect duration={0.4} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>
  )
}

export const Disabled: Story = () => {
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

export const Readonly: Story = () => {
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

export const Invalid: Story = () => {
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

export const OptionDisabled: Story = () => {
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

export const OptionFocusable: Story = () => {
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

export const CustomIcon: Story = () => {
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

export const CustomClearIcon: Story = () => {
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

export const CustomOption: Story = () => {
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

export const CustomControl: Story = () => {
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

export const ReactHookForm: Story = () => {
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

export const ReactHookFormWithDefaultValue: Story = () => {
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
