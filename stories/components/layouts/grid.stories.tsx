import { Meta, StoryFn } from '@storybook/react'
import { Grid, GridItem } from '@yamada-ui/react'

type Story = StoryFn<typeof Grid>

const meta: Meta<typeof Grid> = {
  title: 'Components / Layouts / Grid',
  component: Grid,
}

export default meta

export const templateColimns: Story = () => {
  return (
    <Grid w='full' templateColumns='repeat(4, 1fr)' gap='md'>
      <GridItem
        p='md'
        rounded='4'
        bg='primary'
        color='white'
        textAlign='center'
      >
        GridItem
      </GridItem>

      <GridItem
        p='md'
        rounded='4'
        bg='secondary'
        color='white'
        textAlign='center'
      >
        GridItem
      </GridItem>

      <GridItem
        p='md'
        rounded='4'
        bg='warning'
        color='white'
        textAlign='center'
      >
        GridItem
      </GridItem>

      <GridItem p='md' rounded='4' bg='danger' color='white' textAlign='center'>
        GridItem
      </GridItem>
    </Grid>
  )
}

export const templateRows: Story = () => {
  return (
    <Grid w='full' templateRows='repeat(4, 1fr)' gap='md'>
      <GridItem
        p='md'
        rounded='4'
        bg='primary'
        color='white'
        textAlign='center'
      >
        GridItem
      </GridItem>

      <GridItem
        p='md'
        rounded='4'
        bg='secondary'
        color='white'
        textAlign='center'
      >
        GridItem
      </GridItem>

      <GridItem
        p='md'
        rounded='4'
        bg='warning'
        color='white'
        textAlign='center'
      >
        GridItem
      </GridItem>

      <GridItem p='md' rounded='4' bg='danger' color='white' textAlign='center'>
        GridItem
      </GridItem>
    </Grid>
  )
}

export const templateColumnsAndRows: Story = () => {
  return (
    <Grid
      w='full'
      templateColumns='repeat(3, 1fr)'
      templateRows='repeat(4, 1fr)'
      gap='md'
    >
      <GridItem
        p='md'
        rounded='4'
        bg='primary'
        color='white'
        textAlign='center'
      >
        GridItem
      </GridItem>

      <GridItem
        p='md'
        rounded='4'
        bg='secondary'
        color='white'
        textAlign='center'
      >
        GridItem
      </GridItem>

      <GridItem
        p='md'
        rounded='4'
        bg='warning'
        color='white'
        textAlign='center'
      >
        GridItem
      </GridItem>

      <GridItem p='md' rounded='4' bg='danger' color='white' textAlign='center'>
        GridItem
      </GridItem>

      <GridItem
        p='md'
        rounded='4'
        bg='primary'
        color='white'
        textAlign='center'
      >
        GridItem
      </GridItem>

      <GridItem
        p='md'
        rounded='4'
        bg='secondary'
        color='white'
        textAlign='center'
      >
        GridItem
      </GridItem>

      <GridItem
        p='md'
        rounded='4'
        bg='warning'
        color='white'
        textAlign='center'
      >
        GridItem
      </GridItem>

      <GridItem p='md' rounded='4' bg='danger' color='white' textAlign='center'>
        GridItem
      </GridItem>

      <GridItem
        p='md'
        rounded='4'
        bg='primary'
        color='white'
        textAlign='center'
      >
        GridItem
      </GridItem>

      <GridItem
        p='md'
        rounded='4'
        bg='secondary'
        color='white'
        textAlign='center'
      >
        GridItem
      </GridItem>

      <GridItem
        p='md'
        rounded='4'
        bg='warning'
        color='white'
        textAlign='center'
      >
        GridItem
      </GridItem>

      <GridItem p='md' rounded='4' bg='danger' color='white' textAlign='center'>
        GridItem
      </GridItem>
    </Grid>
  )
}

export const templateAreas: Story = () => {
  return (
    <Grid
      w='full'
      templateAreas={`
        "one one two three"
        "four five two six"
        "four seven seven eight"
      `}
      gap='md'
    >
      <GridItem
        area='one'
        p='md'
        rounded='4'
        bg='primary'
        color='white'
        justifyContent='center'
        alignItems='center'
      >
        GridItem
      </GridItem>

      <GridItem
        area='two'
        p='md'
        rounded='4'
        bg='secondary'
        color='white'
        justifyContent='center'
        alignItems='center'
      >
        GridItem
      </GridItem>

      <GridItem
        area='three'
        p='md'
        rounded='4'
        bg='warning'
        color='white'
        justifyContent='center'
        alignItems='center'
      >
        GridItem
      </GridItem>

      <GridItem
        area='four'
        p='md'
        rounded='4'
        bg='danger'
        color='white'
        justifyContent='center'
        alignItems='center'
      >
        GridItem
      </GridItem>

      <GridItem
        area='five'
        p='md'
        rounded='4'
        bg='primary'
        color='white'
        justifyContent='center'
        alignItems='center'
      >
        GridItem
      </GridItem>

      <GridItem
        area='six'
        p='md'
        rounded='4'
        bg='secondary'
        color='white'
        justifyContent='center'
        alignItems='center'
      >
        GridItem
      </GridItem>

      <GridItem
        area='seven'
        p='md'
        rounded='4'
        bg='warning'
        color='white'
        justifyContent='center'
        alignItems='center'
      >
        GridItem
      </GridItem>

      <GridItem
        area='eight'
        p='md'
        rounded='4'
        bg='danger'
        color='white'
        justifyContent='center'
        alignItems='center'
      >
        GridItem
      </GridItem>
    </Grid>
  )
}

export const customStartAndEnd: Story = () => {
  return (
    <Grid
      w='full'
      templateColumns='repeat(4, 1fr)'
      templateRows='repeat(3, 1fr)'
      gap='md'
    >
      <GridItem
        colSpan={2}
        p='md'
        rounded='4'
        bg='primary'
        color='white'
        justifyContent='center'
        alignItems='center'
      >
        GridItem
      </GridItem>

      <GridItem
        colSpan={2}
        rowSpan={3}
        p='md'
        rounded='4'
        bg='secondary'
        color='white'
        justifyContent='center'
        alignItems='center'
      >
        GridItem
      </GridItem>

      <GridItem
        rowStart={2}
        rowEnd={4}
        p='md'
        rounded='4'
        bg='warning'
        color='white'
        justifyContent='center'
        alignItems='center'
      >
        GridItem
      </GridItem>

      <GridItem
        colStart={2}
        colEnd={3}
        rowStart={2}
        rowEnd={4}
        p='md'
        rounded='4'
        bg='danger'
        color='white'
        justifyContent='center'
        alignItems='center'
      >
        GridItem
      </GridItem>
    </Grid>
  )
}
