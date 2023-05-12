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

export const withColorStyle: ComponentStory<typeof Stepper> = () => {
  const steps: Steps = [
    { title: '孫悟空少年編', description: 'レッドリボン軍' },
    { title: 'ピッコロ大魔王編', description: 'ピッコロ大魔王' },
    { title: 'サイヤ人編', description: 'ベジータ・ナッパ' },
  ]

  return (
    <>
      <Stepper colorStyle='primary' index={1} steps={steps} />

      <Stepper colorStyle='secondary' index={1} steps={steps} />

      <Stepper colorStyle='warning' index={1} steps={steps} />

      <Stepper colorStyle='danger' index={1} steps={steps} />

      <Stepper colorStyle='link' index={1} steps={steps} />

      <Stepper colorStyle='gray' index={1} steps={steps} />

      <Stepper colorStyle='red' index={1} steps={steps} />

      <Stepper colorStyle='orange' index={1} steps={steps} />

      <Stepper colorStyle='yellow' index={1} steps={steps} />

      <Stepper colorStyle='green' index={1} steps={steps} />

      <Stepper colorStyle='teal' index={1} steps={steps} />

      <Stepper colorStyle='blue' index={1} steps={steps} />

      <Stepper colorStyle='cyan' index={1} steps={steps} />

      <Stepper colorStyle='purple' index={1} steps={steps} />

      <Stepper colorStyle='pink' index={1} steps={steps} />

      <Stepper colorStyle='linkedin' index={1} steps={steps} />

      <Stepper colorStyle='facebook' index={1} steps={steps} />

      <Stepper colorStyle='messenger' index={1} steps={steps} />

      <Stepper colorStyle='whatsapp' index={1} steps={steps} />

      <Stepper colorStyle='twitter' index={1} steps={steps} />

      <Stepper colorStyle='line' index={1} steps={steps} />

      <Stepper colorStyle='instagram' index={1} steps={steps} />

      <Stepper colorStyle='youtube' index={1} steps={steps} />
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
