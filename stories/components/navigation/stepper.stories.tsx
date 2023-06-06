import { faPoo } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
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
  Steps,
  FontAwesomeIcon,
} from '@yamada-ui/react'

export default {
  title: 'Components / Navigation / Stepper',
  component: Stepper,
} as ComponentMeta<typeof Stepper>

export const basic: ComponentStory<typeof Stepper> = () => {
  const steps: Steps = [
    { title: '孫悟空少年編', description: 'レッドリボン軍' },
    { title: 'ピッコロ大魔王編', description: 'ピッコロ大魔王' },
    { title: 'サイヤ人編', description: 'ベジータ・ナッパ' },
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

export const withSize: ComponentStory<typeof Stepper> = () => {
  const steps: Steps = [
    { title: '孫悟空少年編', description: 'レッドリボン軍' },
    { title: 'ピッコロ大魔王編', description: 'ピッコロ大魔王' },
    { title: 'サイヤ人編', description: 'ベジータ・ナッパ' },
  ]

  return (
    <>
      <Stepper size='sm' index={1} steps={steps} />

      <Stepper size='md' index={1} steps={steps} />

      <Stepper size='lg' index={1} steps={steps} />
    </>
  )
}

export const withColorScheme: ComponentStory<typeof Stepper> = () => {
  const steps: Steps = [
    { title: '孫悟空少年編', description: 'レッドリボン軍' },
    { title: 'ピッコロ大魔王編', description: 'ピッコロ大魔王' },
    { title: 'サイヤ人編', description: 'ベジータ・ナッパ' },
  ]

  return (
    <>
      <Stepper colorScheme='primary' index={1} steps={steps} />

      <Stepper colorScheme='secondary' index={1} steps={steps} />

      <Stepper colorScheme='warning' index={1} steps={steps} />

      <Stepper colorScheme='danger' index={1} steps={steps} />

      <Stepper colorScheme='link' index={1} steps={steps} />

      <Stepper colorScheme='gray' index={1} steps={steps} />

      <Stepper colorScheme='red' index={1} steps={steps} />

      <Stepper colorScheme='orange' index={1} steps={steps} />

      <Stepper colorScheme='yellow' index={1} steps={steps} />

      <Stepper colorScheme='green' index={1} steps={steps} />

      <Stepper colorScheme='teal' index={1} steps={steps} />

      <Stepper colorScheme='blue' index={1} steps={steps} />

      <Stepper colorScheme='cyan' index={1} steps={steps} />

      <Stepper colorScheme='purple' index={1} steps={steps} />

      <Stepper colorScheme='pink' index={1} steps={steps} />
    </>
  )
}

export const withOrientation: ComponentStory<typeof Stepper> = () => {
  const steps: Steps = [
    { title: '孫悟空少年編', description: 'レッドリボン軍' },
    { title: 'ピッコロ大魔王編', description: 'ピッコロ大魔王' },
    { title: 'サイヤ人編', description: 'ベジータ・ナッパ' },
  ]

  const { activeStep, onStepNext, onStepPrev } = useSteps({
    index: 1,
    count: steps.length,
  })

  return (
    <>
      <Stepper index={activeStep} steps={steps} orientation='horizontal' />

      <Stepper index={activeStep} steps={steps} orientation='vertical' h='sm' />

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>
  )
}

export const customStep: ComponentStory<typeof Stepper> = () => {
  const steps: Steps = [
    { title: '孫悟空少年編', description: 'レッドリボン軍' },
    { title: 'ピッコロ大魔王編', description: 'ピッコロ大魔王' },
    { title: 'サイヤ人編', description: 'ベジータ・ナッパ' },
  ]

  const { activeStep, onStepNext, onStepPrev } = useSteps({
    index: 1,
    count: steps.length,
  })

  return (
    <>
      <Stepper index={activeStep}>
        {/* @ts-ignore */}
        {steps.map(({ title, description }, index) => (
          <Step key={index}>
            <StepStatus />

            <Box flexShrink='0'>
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

export const customStatus: ComponentStory<typeof Stepper> = () => {
  const steps: Steps = [
    {
      title: '孫悟空少年編',
      description: 'レッドリボン軍',
      statusProps: { complete: `😇`, incomplete: `😑`, active: `😎` },
    },
    {
      title: 'ピッコロ大魔王編',
      description: 'ピッコロ大魔王',
      statusProps: { complete: `😇`, incomplete: `😑`, active: `😎` },
    },
    {
      title: 'サイヤ人編',
      description: 'ベジータ・ナッパ',
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
        {/* @ts-ignore */}
        {steps.map(({ title, description }, index) => (
          <Step key={index}>
            <StepStatus complete={<FontAwesomeIcon icon={faPoo} />} />

            <Box flexShrink='0'>
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
