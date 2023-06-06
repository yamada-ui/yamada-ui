import { faPoo } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory } from '@storybook/react'
import { Icon } from '@yamada-ui/fontawesome'
import { Divider, HStack, Reorder, ReorderItem, ReorderTrigger, Text } from '@yamada-ui/react'

export default {
  title: 'Components / Data Display / Reorder',
}

export const basic: ComponentStory<typeof Reorder> = () => {
  return (
    <Reorder>
      <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
      <ReorderItem label='リクーム'>リクーム</ReorderItem>
      <ReorderItem label='バータ'>バータ</ReorderItem>
      <ReorderItem label='ジース'>ジース</ReorderItem>
      <ReorderItem label='グルド'>グルド</ReorderItem>
    </Reorder>
  )
}

export const withOrientation: ComponentStory<typeof Reorder> = () => {
  return (
    <>
      <Reorder orientation='vertical'>
        <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
        <ReorderItem label='リクーム'>リクーム</ReorderItem>
        <ReorderItem label='バータ'>バータ</ReorderItem>
        <ReorderItem label='ジース'>ジース</ReorderItem>
        <ReorderItem label='グルド'>グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder orientation='horizontal'>
        <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
        <ReorderItem label='リクーム'>リクーム</ReorderItem>
        <ReorderItem label='バータ'>バータ</ReorderItem>
        <ReorderItem label='ジース'>ジース</ReorderItem>
        <ReorderItem label='グルド'>グルド</ReorderItem>
      </Reorder>
    </>
  )
}

export const withSize: ComponentStory<typeof Reorder> = () => {
  return (
    <>
      <Reorder size='sm'>
        <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
        <ReorderItem label='リクーム'>リクーム</ReorderItem>
        <ReorderItem label='バータ'>バータ</ReorderItem>
        <ReorderItem label='ジース'>ジース</ReorderItem>
        <ReorderItem label='グルド'>グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder size='md'>
        <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
        <ReorderItem label='リクーム'>リクーム</ReorderItem>
        <ReorderItem label='バータ'>バータ</ReorderItem>
        <ReorderItem label='ジース'>ジース</ReorderItem>
        <ReorderItem label='グルド'>グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder size='normal'>
        <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
        <ReorderItem label='リクーム'>リクーム</ReorderItem>
        <ReorderItem label='バータ'>バータ</ReorderItem>
        <ReorderItem label='ジース'>ジース</ReorderItem>
        <ReorderItem label='グルド'>グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder size='lg'>
        <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
        <ReorderItem label='リクーム'>リクーム</ReorderItem>
        <ReorderItem label='バータ'>バータ</ReorderItem>
        <ReorderItem label='ジース'>ジース</ReorderItem>
        <ReorderItem label='グルド'>グルド</ReorderItem>
      </Reorder>
    </>
  )
}

export const withVariant: ComponentStory<typeof Reorder> = () => {
  return (
    <>
      <Reorder variant='outline'>
        <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
        <ReorderItem label='リクーム'>リクーム</ReorderItem>
        <ReorderItem label='バータ'>バータ</ReorderItem>
        <ReorderItem label='ジース'>ジース</ReorderItem>
        <ReorderItem label='グルド'>グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder variant='elevated'>
        <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
        <ReorderItem label='リクーム'>リクーム</ReorderItem>
        <ReorderItem label='バータ'>バータ</ReorderItem>
        <ReorderItem label='ジース'>ジース</ReorderItem>
        <ReorderItem label='グルド'>グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder variant='unstyled'>
        <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
        <ReorderItem label='リクーム'>リクーム</ReorderItem>
        <ReorderItem label='バータ'>バータ</ReorderItem>
        <ReorderItem label='ジース'>ジース</ReorderItem>
        <ReorderItem label='グルド'>グルド</ReorderItem>
      </Reorder>
    </>
  )
}

export const withTrigger: ComponentStory<typeof Reorder> = () => {
  return (
    <Reorder>
      <ReorderItem label='孫悟空'>
        <HStack>
          <ReorderTrigger />
          <Text>孫悟空</Text>
        </HStack>
      </ReorderItem>

      <ReorderItem label='ベジータ'>
        <HStack>
          <ReorderTrigger>
            <Icon icon={faPoo} />
          </ReorderTrigger>
          <Text>ベジータ</Text>
        </HStack>
      </ReorderItem>
    </Reorder>
  )
}

export const withOnChange: ComponentStory<typeof Reorder> = () => {
  return (
    <Reorder onChange={(labels) => console.log(`changed '${labels.join(`', '`)}'`)}>
      <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
      <ReorderItem label='リクーム'>リクーム</ReorderItem>
      <ReorderItem label='バータ'>バータ</ReorderItem>
      <ReorderItem label='ジース'>ジース</ReorderItem>
      <ReorderItem label='グルド'>グルド</ReorderItem>
    </Reorder>
  )
}

export const withOnCompleteChange: ComponentStory<typeof Reorder> = () => {
  return (
    <Reorder onCompleteChange={(labels) => console.log(`completed '${labels.join(`', '`)}'`)}>
      <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
      <ReorderItem label='リクーム'>リクーム</ReorderItem>
      <ReorderItem label='バータ'>バータ</ReorderItem>
      <ReorderItem label='ジース'>ジース</ReorderItem>
      <ReorderItem label='グルド'>グルド</ReorderItem>
    </Reorder>
  )
}

export const useContainerScroll: ComponentStory<typeof Reorder> = () => {
  return (
    <Reorder h='xs' p='md' borderWidth='1px' rounded='md' overflowY='scroll' layoutScroll>
      <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
      <ReorderItem label='リクーム'>リクーム</ReorderItem>
      <ReorderItem label='バータ'>バータ</ReorderItem>
      <ReorderItem label='ジース'>ジース</ReorderItem>
      <ReorderItem label='グルド'>グルド</ReorderItem>
    </Reorder>
  )
}
