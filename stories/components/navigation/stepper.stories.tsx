import type { Meta, StoryFn } from "@storybook/react"
import type { Steps } from "@yamada-ui/react"
import { Ghost } from "@yamada-ui/lucide"
import {
  Box,
  Button,
  HStack,
  Step,
  StepDescription,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  useSteps,
} from "@yamada-ui/react"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof Stepper>

const meta: Meta<typeof Stepper> = {
  component: Stepper,
  title: "Components / Navigation / Stepper",
}

export default meta

export const basic: Story = () => {
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

export const withSize: Story = () => {
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

export const withColorScheme: Story = () => {
  const steps: Steps = [
    { description: "レッドリボン軍", title: "孫悟空少年編" },
    { description: "ピッコロ大魔王", title: "ピッコロ大魔王編" },
    { description: "ベジータ・ナッパ", title: "サイヤ人編" },
  ]

  return (
    <>
      {colorSchemes.map((colorScheme) => (
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

export const withOrientation: Story = () => {
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

export const customStep: Story = () => {
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

export const customStatus: Story = () => {
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
            <StepStatus complete={<Ghost fontSize="xl" />} />

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
