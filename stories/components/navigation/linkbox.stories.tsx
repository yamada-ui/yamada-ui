import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box, Heading, LinkBox, LinkOverlay, Text } from '@yamada-ui/react'

export default {
  title: 'Components / Navigation / LinkBox',
  component: LinkBox,
} as ComponentMeta<typeof LinkBox>

export const linkBox: ComponentStory<typeof LinkBox> = () => {
  return (
    <Box width='full' bgColor='white'>
      <LinkBox
        as='article'
        maxW='sm'
        p='5'
        border='1px black solid'
        rounded='md'
        bgColor='white'
        color='#000'
        margin='1.5'
      >
        <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
          13 days ago
        </Box>
        <Heading size='md' my='2'>
          <LinkOverlay href='/'>New Year, New Beginnings: Smashing Workshops & Audits</LinkOverlay>
        </Heading>
        <Text>
          Catch up on what’s been cookin’ at Smashing and explore some of the most popular community
          resources.
        </Text>
      </LinkBox>
    </Box>
  )
}

export const linkBoxWithIsExternal: ComponentStory<typeof LinkBox> = () => {
  return (
    <Box width='full' bgColor='white'>
      <LinkBox
        as='article'
        maxW='sm'
        p='5'
        border='1px black solid'
        rounded='md'
        bgColor='white'
        color='#000'
        margin='1.5'
      >
        <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
          13 days ago
        </Box>
        <Heading size='md' my='2'>
          <LinkOverlay href='/' isExternal>
            New Year, New Beginnings: Smashing Workshops & Audits
          </LinkOverlay>
        </Heading>
        <Text>
          Catch up on what’s been cookin’ at Smashing and explore some of the most popular community
          resources.
        </Text>
      </LinkBox>
    </Box>
  )
}
