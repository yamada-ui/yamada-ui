import type { Meta, StoryFn } from "@storybook/react"
import { PropsTable } from "../../../storybook/components"
import { COLOR_SCHEMES } from "../../utils"
import { Box } from "../box"
import { Button } from "../button"
import { GhostIcon } from "../icon"
import { HStack } from "../stack"
import { Stepper, useStepperSteps } from "./"

type Story = StoryFn<typeof Stepper.Root>

const meta: Meta<typeof Stepper.Root> = {
  component: Stepper.Root,
  title: "Components / Stepper",
}

export default meta

export const Basic: Story = () => {
  const steps: Stepper.Steps = [
    { description: "レッドリボン軍", title: "孫悟空少年編" },
    { description: "ピッコロ大魔王", title: "ピッコロ大魔王編" },
    { description: "ベジータ・ナッパ", title: "サイヤ人編" },
  ]

  const { activeStep, onStepNext, onStepPrev } = useStepperSteps({
    count: steps.length,
    index: 1,
  })

  return (
    <>
      <Stepper.Root index={activeStep} steps={steps} />

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>
  )
}

export const Size: Story = () => {
  const steps: Stepper.Steps = [
    { description: "レッドリボン軍", title: "孫悟空少年編" },
    { description: "ピッコロ大魔王", title: "ピッコロ大魔王編" },
    { description: "ベジータ・ナッパ", title: "サイヤ人編" },
  ]

  return (
    <PropsTable variant="column" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
        return <Stepper.Root key={key} size={row} index={1} steps={steps} />
      }}
    </PropsTable>
  )
}

export const ColorScheme: Story = () => {
  const steps: Stepper.Steps = [
    { description: "レッドリボン軍", title: "孫悟空少年編" },
    { description: "ピッコロ大魔王", title: "ピッコロ大魔王編" },
    { description: "ベジータ・ナッパ", title: "サイヤ人編" },
  ]

  return (
    <PropsTable variant="column" rows={COLOR_SCHEMES}>
      {(_, row, key) => {
        return (
          <Stepper.Root key={key} colorScheme={row} index={1} steps={steps} />
        )
      }}
    </PropsTable>
  )
}

export const Orientation: Story = () => {
  const steps: Stepper.Steps = [
    { description: "レッドリボン軍", title: "孫悟空少年編" },
    { description: "ピッコロ大魔王", title: "ピッコロ大魔王編" },
    { description: "ベジータ・ナッパ", title: "サイヤ人編" },
  ]

  const { activeStep, onStepNext, onStepPrev } = useStepperSteps({
    count: steps.length,
    index: 1,
  })

  return (
    <>
      <Stepper.Root index={activeStep} orientation="horizontal" steps={steps} />

      <Stepper.Root
        h="sm"
        index={activeStep}
        orientation="vertical"
        steps={steps}
      />

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>
  )
}

export const CustomStep: Story = () => {
  const steps: Stepper.Steps = [
    { description: "レッドリボン軍", title: "孫悟空少年編" },
    { description: "ピッコロ大魔王", title: "ピッコロ大魔王編" },
    { description: "ベジータ・ナッパ", title: "サイヤ人編" },
  ]

  const { activeStep, onStepNext, onStepPrev } = useStepperSteps({
    count: steps.length,
    index: 1,
  })

  return (
    <>
      <Stepper.Root index={activeStep}>
        {steps.map(({ description, title }, index) => (
          <Stepper.Step key={index}>
            <Stepper.StepStatus />

            <Box flexShrink="0">
              <Stepper.StepTitle>{title}</Stepper.StepTitle>
              <Stepper.StepDescription>{description}</Stepper.StepDescription>
            </Box>

            <Stepper.StepSeparator />
          </Stepper.Step>
        ))}
      </Stepper.Root>

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>
  )
}

export const CustomStatus: Story = () => {
  const steps: Stepper.Steps = [
    {
      description: "レッドリボン軍",
      title: "孫悟空少年編",
      statusProps: { active: `😎`, complete: `😇`, incomplete: `😑` },
    },
    {
      description: "ピッコロ大魔王",
      title: "ピッコロ大魔王編",
      statusProps: { active: `😎`, complete: `😇`, incomplete: `😑` },
    },
    {
      description: "ベジータ・ナッパ",
      title: "サイヤ人編",
      statusProps: { active: `😎`, complete: `😇`, incomplete: `😑` },
    },
  ]

  const { activeStep, onStepNext, onStepPrev } = useStepperSteps({
    count: steps.length,
    index: 1,
  })

  return (
    <>
      <Stepper.Root index={activeStep} steps={steps} />

      <Stepper.Root index={activeStep}>
        {steps.map(({ description, title }, index) => (
          <Stepper.Step key={index}>
            <Stepper.StepStatus complete={<GhostIcon fontSize="xl" />} />

            <Box flexShrink="0">
              <Stepper.StepTitle>{title}</Stepper.StepTitle>
              <Stepper.StepDescription>{description}</Stepper.StepDescription>
            </Box>

            <Stepper.StepSeparator />
          </Stepper.Step>
        ))}
      </Stepper.Root>

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>
  )
}
