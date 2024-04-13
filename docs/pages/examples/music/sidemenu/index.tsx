import { Box, Button, ButtonGroup, Text, Flex, Icon } from "@yamada-ui/react"
import React from "react"
import { BsMusicNoteList } from "react-icons/bs"
import { FaRegCirclePlay } from "react-icons/fa6"
import { IoIosRadio, IoIosBrowsers } from "react-icons/io"
import { IoPersonOutline } from "react-icons/io5"
import { LuMusic2, LuMic2 } from "react-icons/lu"
import { MdAlbum } from "react-icons/md"

const Sidemenu = () => {
  return (
    <>
      <Box pl={8}>
        <Flex direction="column">
          <Flex direction="column" pt={4}>
            <Text as="b" fontSize="lg">
              Discover
            </Text>
            <ButtonGroup
              variant="ghost"
              colorScheme="neutral"
              size="sm"
              direction="column"
            >
              <Button
                leftIcon={<Icon as={FaRegCirclePlay} />}
                justifyContent="flex-start"
              >
                <Text>Listen Now</Text>
              </Button>
              <Button
                leftIcon={<Icon as={IoIosBrowsers} />}
                justifyContent="flex-start"
              >
                <Text>Browse</Text>
              </Button>
              <Button
                leftIcon={<Icon as={IoIosRadio} />}
                justifyContent="flex-start"
              >
                <Text>Radio</Text>
              </Button>
            </ButtonGroup>
          </Flex>

          <Flex direction="column" pt={4}>
            <Text as="b" fontSize="lg">
              Library
            </Text>
            <ButtonGroup
              variant="ghost"
              colorScheme="neutral"
              size="sm"
              direction="column"
            >
              <Button
                leftIcon={<Icon as={BsMusicNoteList} />}
                justifyContent="flex-start"
              >
                <Text>Playlists</Text>
              </Button>
              <Button
                leftIcon={<Icon as={LuMusic2} />}
                justifyContent="flex-start"
              >
                <Text>Songs</Text>
              </Button>
              <Button
                leftIcon={<Icon as={IoPersonOutline} />}
                justifyContent="flex-start"
              >
                <Text>Made for you</Text>
              </Button>
              <Button
                leftIcon={<Icon as={LuMic2} />}
                justifyContent="flex-start"
              >
                <Text>Artists</Text>
              </Button>
              <Button
                leftIcon={<Icon as={MdAlbum} />}
                justifyContent="flex-start"
              >
                <Text>Albums</Text>
              </Button>
            </ButtonGroup>
          </Flex>

          <Flex direction="column" pt={4}>
            <Text as="b" fontSize="lg">
              Playlists
            </Text>
            <ButtonGroup
              variant="ghost"
              colorScheme="neutral"
              size="sm"
              direction="column"
            >
              <Button
                leftIcon={<Icon as={BsMusicNoteList} />}
                justifyContent="flex-start"
              >
                <Text>Recently Added</Text>
              </Button>
              <Button
                leftIcon={<Icon as={BsMusicNoteList} />}
                justifyContent="flex-start"
              >
                <Text>Recently Played</Text>
              </Button>
              <Button
                leftIcon={<Icon as={BsMusicNoteList} />}
                justifyContent="flex-start"
              >
                <Text>Top Songs</Text>
              </Button>
              <Button
                leftIcon={<Icon as={BsMusicNoteList} />}
                justifyContent="flex-start"
              >
                <Text>Top Albums</Text>
              </Button>
              <Button
                leftIcon={<Icon as={BsMusicNoteList} />}
                justifyContent="flex-start"
              >
                <Text>Top Artists</Text>
              </Button>
              <Button
                leftIcon={<Icon as={BsMusicNoteList} />}
                justifyContent="flex-start"
              >
                <Text>Logic Discography</Text>
              </Button>
              <Button
                leftIcon={<Icon as={BsMusicNoteList} />}
                justifyContent="flex-start"
              >
                <Text>Bedtime Beats</Text>
              </Button>
            </ButtonGroup>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Sidemenu
