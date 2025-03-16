import type { Meta, StoryFn } from "@storybook/react"
import type { AutocompleteItem } from "@yamada-ui/react"
import type { SubmitHandler } from "react-hook-form"
import { CheckIcon, ChevronsDownIcon } from "@yamada-ui/lucide"
import {
  Autocomplete,
  AutocompleteOption,
  AutocompleteOptionGroup,
  Button,
  FormControl,
  VStack,
} from "@yamada-ui/react"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"

type Story = StoryFn<typeof Autocomplete>

const meta: Meta<typeof Autocomplete> = {
  component: Autocomplete,
  title: "Components / Forms / Autocomplete",
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
      <Autocomplete placeholder="キャラクターを選択">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete placeholder="キャラクターを選択">
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
      </Autocomplete>

      <Autocomplete items={items} placeholder="キャラクターを選択" />
    </>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <Autocomplete size="xs" placeholder="extra small size" />
      <Autocomplete size="sm" placeholder="small size" />
      <Autocomplete size="md" placeholder="medium size" />
      <Autocomplete size="lg" placeholder="large size" />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <Autocomplete variant="outline" placeholder="outline" />
      <Autocomplete variant="filled" placeholder="filled" />
      <Autocomplete variant="flushed" placeholder="flushed" />
      <Autocomplete variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const withFooter: Story = () => {
  const [value, onChange] = useState<string | undefined>(undefined)
  const items: AutocompleteItem[] = [
    { label: "孫悟空", value: "孫悟空" },
    { label: "孫悟飯", value: "孫悟飯" },
    { label: "クリリン", value: "クリリン" },
  ]

  return (
    <Autocomplete
      footer={({ onClose }) => (
        <VStack
          borderColor={["blackAlpha.200", "whiteAlpha.100"]}
          borderTopWidth="1px"
          p="2"
        >
          <Button
            onClick={() => {
              onChange("孫悟空")
              onClose()
            }}
          >
            Set "孫悟空"
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
    <Autocomplete defaultValue="ベジータ" placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const withEmptyMessage: Story = () => {
  return (
    <Autocomplete
      emptyMessage="キャラクターが存在しません"
      placeholder="キャラクターを選択"
    >
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>
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
    <Autocomplete
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
    <Autocomplete
      allowFree
      items={items}
      placeholder="キャラクターを選択"
      onChange={(value) => console.log("new value:", value)}
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
      <Autocomplete
        allowCreate
        insertPositionItem="first"
        items={items}
        placeholder="キャラクターを選択"
      />
      <Autocomplete
        allowCreate
        insertPositionItem="last"
        items={items}
        placeholder="キャラクターを選択"
      />
      <Autocomplete
        allowCreate
        insertPositionItem="地球人"
        items={items}
        placeholder="キャラクターを選択"
      />
      <Autocomplete
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
      <Autocomplete placeholder="default border color">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete
        focusBorderColor="green.500"
        placeholder="custom border color"
      >
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete
        errorBorderColor="orange.500"
        invalid
        placeholder="custom border color"
      >
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>
    </>
  )
}

export const disabledCloseOnSelect: Story = () => {
  return (
    <Autocomplete closeOnSelect={false} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const disabledCloseOnBlur: Story = () => {
  return (
    <Autocomplete closeOnBlur={false} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const withPlacement: Story = () => {
  return (
    <Autocomplete
      maxW="xs"
      placeholder="キャラクターを選択"
      placement="right-start"
    >
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const withOffset: Story = () => {
  return (
    <Autocomplete
      offset={[16, 16]}
      placeholder="キャラクターを選択"
      listProps={{ maxW: "xs" }}
    >
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const withGutter: Story = () => {
  return (
    <Autocomplete gutter={32} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const withDuration: Story = () => {
  return (
    <Autocomplete duration={0.4} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const disabled: Story = () => {
  return (
    <>
      <Autocomplete variant="outline" disabled placeholder="outline" />
      <Autocomplete variant="filled" disabled placeholder="filled" />
      <Autocomplete variant="flushed" disabled placeholder="flushed" />
      <Autocomplete variant="unstyled" disabled placeholder="unstyled" />

      <FormControl
        disabled
        label="Which notifications would you like to receive?"
      >
        <Autocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>
  )
}

export const readOnly: Story = () => {
  return (
    <>
      <Autocomplete variant="outline" placeholder="outline" readOnly />
      <Autocomplete variant="filled" placeholder="filled" readOnly />
      <Autocomplete variant="flushed" placeholder="flushed" readOnly />
      <Autocomplete variant="unstyled" placeholder="unstyled" readOnly />

      <FormControl
        label="Which notifications would you like to receive?"
        readOnly
      >
        <Autocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>
  )
}

export const invalid: Story = () => {
  return (
    <>
      <Autocomplete variant="outline" invalid placeholder="outline" />
      <Autocomplete variant="filled" invalid placeholder="filled" />
      <Autocomplete variant="flushed" invalid placeholder="flushed" />
      <Autocomplete variant="unstyled" invalid placeholder="unstyled" />

      <FormControl
        errorMessage="This is required."
        invalid
        label="Which notifications would you like to receive?"
      >
        <Autocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>
  )
}

export const isOptionDisabled: Story = () => {
  return (
    <Autocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption disabled value="ベジータ">
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const isOptionFocusable: Story = () => {
  return (
    <Autocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption disabled focusable value="ベジータ">
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const customIcon: Story = () => {
  return (
    <>
      <Autocomplete
        placeholder="キャラクターを選択"
        iconProps={{ color: "primary" }}
      >
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete
        placeholder="キャラクターを選択"
        iconProps={{ children: <ChevronsDownIcon /> }}
      >
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>
    </>
  )
}

export const customOption: Story = () => {
  return (
    <>
      <Autocomplete
        placeholder="キャラクターを選択"
        optionProps={{ color: "primary" }}
      >
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete
        placeholder="キャラクターを選択"
        optionProps={{ icon: <CheckIcon color="green.500" /> }}
      >
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>
    </>
  )
}

export const customControl: Story = () => {
  const [value, onChange] = useState<string>("孫悟空")

  return (
    <Autocomplete
      placeholder="キャラクターを選択"
      value={value}
      onChange={onChange}
    >
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const reactHookForm: Story = () => {
  interface Data {
    autocomplete1: string
    autocomplete2: string
    autocomplete3: string
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
            <Autocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
              <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
              <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
            </Autocomplete>
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
            <Autocomplete placeholder="キャラクターを選択" {...field}>
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
            </Autocomplete>
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
            <Autocomplete
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
    autocomplete1: string
    autocomplete2: string
    autocomplete3: string
  }

  const defaultValues: Data = {
    autocomplete1: "孫悟空",
    autocomplete2: "フリーザ",
    autocomplete3: "リクーム",
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
            <Autocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
              <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
              <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
            </Autocomplete>
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
            <Autocomplete placeholder="キャラクターを選択" {...field}>
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
            </Autocomplete>
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
            <Autocomplete
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
