import { faCaretDown, faCheck } from "@fortawesome/free-solid-svg-icons"
import type { Meta, StoryFn } from "@storybook/react"
import { Icon } from "@yamada-ui/fontawesome"
import type { AutocompleteItem } from "@yamada-ui/react"
import {
  Autocomplete,
  AutocompleteOptionGroup,
  AutocompleteOption,
  FormControl,
  Button,
  VStack,
} from "@yamada-ui/react"
import { useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { useForm, Controller } from "react-hook-form"

type Story = StoryFn<typeof Autocomplete>

const meta: Meta<typeof Autocomplete> = {
  title: "Components / Forms / Autocomplete",
  component: Autocomplete,
}

export default meta

export const basic: Story = () => {
  const items: AutocompleteItem[] = [
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

      <Autocomplete placeholder="キャラクターを選択" items={items} />
    </>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <Autocomplete placeholder="extra small size" size="xs" />
      <Autocomplete placeholder="small size" size="sm" />
      <Autocomplete placeholder="medium size" size="md" />
      <Autocomplete placeholder="large size" size="lg" />
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

export const withDefaultValue: Story = () => {
  return (
    <Autocomplete placeholder="キャラクターを選択" defaultValue="ベジータ">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const withEmptyMessage: Story = () => {
  return (
    <Autocomplete
      placeholder="キャラクターを選択"
      emptyMessage="キャラクターが存在しません"
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
    <Autocomplete
      placeholder="キャラクターを選択"
      items={items}
      allowCreate
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
    <Autocomplete placeholder="キャラクターを選択" items={items} allowFree />
  )
}

export const withInsertPositionItem: Story = () => {
  const items: AutocompleteItem[] = [
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
      <Autocomplete
        placeholder="キャラクターを選択"
        items={items}
        allowCreate
        insertPositionItem="first"
      />
      <Autocomplete
        placeholder="キャラクターを選択"
        items={items}
        allowCreate
        insertPositionItem="last"
      />
      <Autocomplete
        placeholder="キャラクターを選択"
        items={items}
        allowCreate
        insertPositionItem="地球人"
      />
      <Autocomplete
        placeholder="キャラクターを選択"
        items={items}
        allowCreate
        insertPositionItem={["フリーザ軍", "last"]}
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
        isInvalid
        errorBorderColor="orange.500"
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
    <Autocomplete placeholder="キャラクターを選択" closeOnSelect={false}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const disabledCloseOnBlur: Story = () => {
  return (
    <Autocomplete placeholder="キャラクターを選択" closeOnBlur={false}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const withPlacement: Story = () => {
  return (
    <Autocomplete
      placeholder="キャラクターを選択"
      placement="right-start"
      maxW="xs"
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
      placeholder="キャラクターを選択"
      offset={[16, 16]}
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
    <Autocomplete placeholder="キャラクターを選択" gutter={32}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const withDuration: Story = () => {
  return (
    <Autocomplete placeholder="キャラクターを選択" duration={0.4}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <Autocomplete isDisabled variant="outline" placeholder="outline" />
      <Autocomplete isDisabled variant="filled" placeholder="filled" />
      <Autocomplete isDisabled variant="flushed" placeholder="flushed" />
      <Autocomplete isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl
        isDisabled
        label="Which notifications would you like to receive?"
      >
        <Autocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <Autocomplete isReadOnly variant="outline" placeholder="outline" />
      <Autocomplete isReadOnly variant="filled" placeholder="filled" />
      <Autocomplete isReadOnly variant="flushed" placeholder="flushed" />
      <Autocomplete isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl
        isReadOnly
        label="Which notifications would you like to receive?"
      >
        <Autocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <Autocomplete isInvalid variant="outline" placeholder="outline" />
      <Autocomplete isInvalid variant="filled" placeholder="filled" />
      <Autocomplete isInvalid variant="flushed" placeholder="flushed" />
      <Autocomplete isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl
        isInvalid
        label="Which notifications would you like to receive?"
        errorMessage="This is required."
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
      <AutocompleteOption value="ベジータ" isDisabled>
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
      <AutocompleteOption value="ベジータ" isDisabled isFocusable>
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
        iconProps={{ children: <Icon icon={faCaretDown} /> }}
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
        optionProps={{ icon: <Icon icon={faCheck} color="green.500" /> }}
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
  type Data = {
    autocomplete1: string
    autocomplete2: string
    autocomplete3: string
  }

  const items: AutocompleteItem[] = [
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
        isInvalid={!!errors.autocomplete1}
        label="Who is your favorite character?"
        errorMessage={errors.autocomplete1?.message}
      >
        <Controller
          name="autocomplete1"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <Autocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
              <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
              <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
            </Autocomplete>
          )}
        />
      </FormControl>

      <FormControl
        isInvalid={!!errors.autocomplete2}
        label="Who is your favorite character?"
        errorMessage={errors.autocomplete2?.message}
      >
        <Controller
          name="autocomplete2"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
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
        />
      </FormControl>

      <FormControl
        isInvalid={!!errors.autocomplete3}
        label="Who is your favorite character?"
        errorMessage={errors.autocomplete3?.message}
      >
        <Controller
          name="autocomplete3"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <Autocomplete
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
  type Data = {
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
        isInvalid={!!errors.autocomplete1}
        label="Who is your favorite character?"
        errorMessage={errors.autocomplete1?.message}
      >
        <Controller
          name="autocomplete1"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <Autocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
              <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
              <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
            </Autocomplete>
          )}
        />
      </FormControl>

      <FormControl
        isInvalid={!!errors.autocomplete2}
        label="Who is your favorite character?"
        errorMessage={errors.autocomplete2?.message}
      >
        <Controller
          name="autocomplete2"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
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
        />
      </FormControl>

      <FormControl
        isInvalid={!!errors.autocomplete3}
        label="Who is your favorite character?"
        errorMessage={errors.autocomplete3?.message}
      >
        <Controller
          name="autocomplete3"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <Autocomplete
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
