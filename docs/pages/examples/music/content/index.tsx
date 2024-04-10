import {
  Box,
  SegmentedControl,
  SegmentedControlButton,
  Flex,
  Button,
  VStack,
  Icon,
  Spacer,
} from "@yamada-ui/react"
import React, { useState } from "react"
import { LuPlusCircle } from "react-icons/lu"
import Musicpage from "./pages/musicpage"
import Podcastpage from "./pages/podcastpage"

const Content = () => {
  // ページの表示モードを管理するステート
  const [mode, setMode] = useState("music")

  return (
    <Box p={4} w="full">
      <Flex w="full" gap="md">
        <SegmentedControl
          value={mode}
          size="sm"
          defaultValue="music"
          onChange={setMode} // モードが変更されたときにステートを更新
        >
          <SegmentedControlButton value="music">Music</SegmentedControlButton>
          <SegmentedControlButton value="podcast">
            Podcast
          </SegmentedControlButton>
          <SegmentedControlButton value="live" isDisabled>
            Live
          </SegmentedControlButton>
        </SegmentedControl>

        <Spacer />

        <Button
          colorScheme="primary"
          size="sm"
          leftIcon={<Icon as={LuPlusCircle} />}
        >
          Add Music
        </Button>
      </Flex>

      {/* コンテンツ表示部分 */}
      <VStack p={4} pt={8}>
        {mode === "music" ? <Musicpage /> : <Podcastpage />}
      </VStack>
    </Box>
  )
}

export default Content
