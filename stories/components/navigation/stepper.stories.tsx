import { faPoo } from "@fortawesome/free-solid-svg-icons"
import type { Meta, StoryFn } from "@storybook/react"
import { Icon } from "@yamada-ui/fontawesome"
import type { Steps } from "@yamada-ui/react"
import {
  Stepper,
  Step,
  StepTitle,
  StepDescription,
  StepSeparator,
  StepStatus,
  useSteps,
  Button,
  HStack,
  Box,
} from "@yamada-ui/react"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof Stepper>

const meta: Meta<typeof Stepper> = {
  title: "Components / Navigation / Stepper",
  component: Stepper,
}

export default meta

export const basic: Story = () => {
  const steps: Steps = [
    { title: "孫悟空少年編", description: "レッドリボン軍" },
    { title: "ピッコロ大魔王編", description: "ピッコロ大魔王" },
    { title: "サイヤ人編", description: "ベジータ・ナッパ" },
  ]

  const { activeStep, onStepNext, onStepPrev } = useSteps({
    index: 1,
    count: steps.length,
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
    { title: "孫悟空少年編", description: "レッドリボン軍" },
    { title: "ピッコロ大魔王編", description: "ピッコロ大魔王" },
    { title: "サイヤ人編", description: "ベジータ・ナッパ" },
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
    { title: "孫悟空少年編", description: "レッドリボン軍" },
    { title: "ピッコロ大魔王編", description: "ピッコロ大魔王" },
    { title: "サイヤ人編", description: "ベジータ・ナッパ" },
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
    { title: "孫悟空少年編", description: "レッドリボン軍" },
    { title: "ピッコロ大魔王編", description: "ピッコロ大魔王" },
    { title: "サイヤ人編", description: "ベジータ・ナッパ" },
  ]

  const { activeStep, onStepNext, onStepPrev } = useSteps({
    index: 1,
    count: steps.length,
  })

  return (
    <>
      <Stepper index={activeStep} steps={steps} orientation="horizontal" />

      <Stepper index={activeStep} steps={steps} orientation="vertical" h="sm" />

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>
  )
}

export const customStep: Story = () => {
  const steps: Steps = [
    { title: "孫悟空少年編", description: "レッドリボン軍" },
    { title: "ピッコロ大魔王編", description: "ピッコロ大魔王" },
    { title: "サイヤ人編", description: "ベジータ・ナッパ" },
  ]

  const { activeStep, onStepNext, onStepPrev } = useSteps({
    index: 1,
    count: steps.length,
  })

  return (
    <>
      <Stepper index={activeStep}>
        {steps.map(({ title, description }, index) => (
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
      title: "孫悟空少年編",
      description: "レッドリボン軍",
      statusProps: { complete: `😇`, incomplete: `😑`, active: `😎` },
    },
    {
      title: "ピッコロ大魔王編",
      description: "ピッコロ大魔王",
      statusProps: { complete: `😇`, incomplete: `😑`, active: `😎` },
    },
    {
      title: "サイヤ人編",
      description: "ベジータ・ナッパ",
      statusProps: { complete: `😇`, incomplete: `😑`, active: `😎` },
    },
  ]

  const { activeStep, onStepNext, onStepPrev } = useSteps({
    index: 1,
    count: steps.length,
  })

  return (
    <>
      <Stepper index={activeStep} steps={steps} />

      <Stepper index={activeStep}>
        {steps.map(({ title, description }, index) => (
          <Step key={index}>
            <StepStatus complete={<Icon icon={faPoo} />} />

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
