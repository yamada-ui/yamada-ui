import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import type { SegmentedControlItem } from "."
import { COLOR_SCHEMES } from "@yamada-ui/utils"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { SegmentedControl, SegmentedControlButton } from "."
import { Button } from "../../components/button"
import { Fieldset } from "../../components/form-control"
import { Grid } from "../../components/grid"
import { VStack } from "../../components/stack"

type Story = StoryFn<typeof SegmentedControl>

const meta: Meta<typeof SegmentedControl> = {
  component: SegmentedControl,
  title: "Components / SegmentedControl",
}

export default meta

export const Basic: Story = () => {
  const items: SegmentedControlItem[] = [
    { label: "孫悟空", value: "孫悟空" },
    { label: "ベジータ", value: "ベジータ" },
    { label: "フリーザ", value: "フリーザ" },
  ]

  return (
    <>
      <SegmentedControl>
        <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
        <SegmentedControlButton value="ベジータ">
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value="フリーザ">
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl items={items} />
    </>
  )
}

export const WithDefaultValue: Story = () => {
  return (
    <SegmentedControl defaultValue="ベジータ">
      <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
      <SegmentedControlButton value="ベジータ">ベジータ</SegmentedControlButton>
      <SegmentedControlButton value="フリーザ">フリーザ</SegmentedControlButton>
    </SegmentedControl>
  )
}

export const WithSize: Story = () => {
  return (
    <>
      <SegmentedControl size="sm">
        <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
        <SegmentedControlButton value="ベジータ">
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value="フリーザ">
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl size="md">
        <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
        <SegmentedControlButton value="ベジータ">
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value="フリーザ">
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl size="lg">
        <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
        <SegmentedControlButton value="ベジータ">
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value="フリーザ">
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>
    </>
  )
}

export const WithVariant: Story = () => {
  return (
    <>
      <SegmentedControl variant="basic">
        <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
        <SegmentedControlButton value="ベジータ">
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value="フリーザ">
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant="rounded">
        <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
        <SegmentedControlButton value="ベジータ">
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value="フリーザ">
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>
    </>
  )
}

export const WithColorScheme: Story = () => {
  const items: SegmentedControlItem[] = [
    { label: "孫悟空", value: "孫悟空" },
    { label: "ベジータ", value: "ベジータ" },
    { label: "フリーザ", value: "フリーザ" },
  ]

  return (
    <Grid
      gap="md"
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(1, 1fr)" }}
      w="full"
    >
      {COLOR_SCHEMES.map((colorScheme) => (
        <SegmentedControl
          key={colorScheme}
          colorScheme={colorScheme}
          items={items}
        />
      ))}
      {COLOR_SCHEMES.map((colorScheme) => (
        <SegmentedControl
          key={colorScheme}
          colorScheme={colorScheme}
          variant="rounded"
          items={items}
        />
      ))}
    </Grid>
  )
}

export const IsDisabled: Story = () => {
  return (
    <>
      <SegmentedControl isDisabled>
        <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
        <SegmentedControlButton value="ベジータ">
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value="フリーザ">
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl>
        <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
        <SegmentedControlButton isDisabled value="ベジータ">
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value="フリーザ">
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>
    </>
  )
}

export const IsReadOnly: Story = () => {
  return (
    <>
      <SegmentedControl isReadOnly>
        <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
        <SegmentedControlButton value="ベジータ">
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value="フリーザ">
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl>
        <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
        <SegmentedControlButton isReadOnly value="ベジータ">
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value="フリーザ">
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>
    </>
  )
}

export const CustomControl: Story = () => {
  const [value, onChange] = useState<string>("孫悟空")

  return (
    <SegmentedControl value={value} onChange={onChange}>
      <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
      <SegmentedControlButton value="ベジータ">ベジータ</SegmentedControlButton>
      <SegmentedControlButton value="フリーザ">フリーザ</SegmentedControlButton>
    </SegmentedControl>
  )
}

export const ReactHookForm: Story = () => {
  interface Data {
    segmentedControl: string
  }

  const defaultValues: Data = {
    segmentedControl: "ベジータ",
  }

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
      <Fieldset
        errorMessage={errors.segmentedControl?.message}
        isInvalid={!!errors.segmentedControl}
        legend="Who is your favorite character?"
      >
        <Controller
          name="segmentedControl"
          control={control}
          render={({ field }) => (
            <SegmentedControl {...field}>
              <SegmentedControlButton value="孫悟空">
                孫悟空
              </SegmentedControlButton>
              <SegmentedControlButton value="ベジータ">
                ベジータ
              </SegmentedControlButton>
              <SegmentedControlButton value="フリーザ">
                フリーザ
              </SegmentedControlButton>
            </SegmentedControl>
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
