import type { Meta, StoryFn } from "@storybook/react"
import type { Steps } from "./"
import { COLOR_SCHEMES } from "@yamada-ui/utils"
import { Box } from "../box"
import { Button } from "../button"
import { GhostIcon } from "../icon"
import { HStack } from "../stack"
import {
  Step,
  StepDescription,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  useSteps,
} from "./"

type Story = StoryFn<typeof Stepper>

const meta: Meta<typeof Stepper> = {
  component: Stepper,
  title: "Components / Stepper",
}

export default meta

export const Basic: Story = () => {
  const steps: Steps = [
    { description: "レッドリボン軍", title: "孫悟空少年編" },
    { description: "ピッコロ大魔王", title: "ピッコロ大魔王編" },
    { description: "ベジータ・ナッパ", title: "サイヤ人編" },
  ]

  const { activeStep, onStepNext, onStepPrev } = useSteps({
    count: steps.length,
    index: 1,
  })

  return (
    <>
      <Stepper index={activeStep} steps={steps} />

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>
  )
}

export const WithSize: Story = () => {
  const steps: Steps = [
    { description: "レッドリボン軍", title: "孫悟空少年編" },
    { description: "ピッコロ大魔王", title: "ピッコロ大魔王編" },
    { description: "ベジータ・ナッパ", title: "サイヤ人編" },
  ]

  return (
    <>
      <Stepper size="sm" index={1} steps={steps} />

      <Stepper size="md" index={1} steps={steps} />

      <Stepper size="lg" index={1} steps={steps} />
    </>
  )
}

export const WithColorScheme: Story = () => {
  const steps: Steps = [
    { description: "レッドリボン軍", title: "孫悟空少年編" },
    { description: "ピッコロ大魔王", title: "ピッコロ大魔王編" },
    { description: "ベジータ・ナッパ", title: "サイヤ人編" },
  ]

  return (
    <>
      {COLOR_SCHEMES.map((colorScheme) => (
        <Stepper
          key={colorScheme}
          colorScheme={colorScheme}
          index={1}
          steps={steps}
        />
      ))}
    </>
  )
}

export const WithOrientation: Story = () => {
  const steps: Steps = [
    { description: "レッドリボン軍", title: "孫悟空少年編" },
    { description: "ピッコロ大魔王", title: "ピッコロ大魔王編" },
    { description: "ベジータ・ナッパ", title: "サイヤ人編" },
  ]

  const { activeStep, onStepNext, onStepPrev } = useSteps({
    count: steps.length,
    index: 1,
  })

  return (
    <>
      <Stepper index={activeStep} orientation="horizontal" steps={steps} />

      <Stepper h="sm" index={activeStep} orientation="vertical" steps={steps} />

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>
  )
}

export const CustomStep: Story = () => {
  const steps: Steps = [
    { description: "レッドリボン軍", title: "孫悟空少年編" },
    { description: "ピッコロ大魔王", title: "ピッコロ大魔王編" },
    { description: "ベジータ・ナッパ", title: "サイヤ人編" },
  ]

  const { activeStep, onStepNext, onStepPrev } = useSteps({
    count: steps.length,
    index: 1,
  })

  return (
    <>
      <Stepper index={activeStep}>
        {steps.map(({ description, title }, index) => (
          <Step key={index}>
            <StepStatus />

            <Box flexShrink="0">
              <StepTitle>{title}</StepTitle>
              <StepDescription>{description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>
  )
}

export const CustomStatus: Story = () => {
  const steps: Steps = [
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

  const { activeStep, onStepNext, onStepPrev } = useSteps({
    count: steps.length,
    index: 1,
  })

  return (
    <>
      <Stepper index={activeStep} steps={steps} />

      <Stepper index={activeStep}>
        {steps.map(({ description, title }, index) => (
          <Step key={index}>
            <StepStatus complete={<GhostIcon fontSize="xl" />} />

            <Box flexShrink="0">
              <StepTitle>{title}</StepTitle>
              <StepDescription>{description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>
  )
}
