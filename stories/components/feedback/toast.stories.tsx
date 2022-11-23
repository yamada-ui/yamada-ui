import { useToast, Button, Wrap, Center, Box } from '@yamada-ui/react'
import { useRef } from 'react'

export default {
  title: 'Components / Feedback / Toast',
}

export const basic = () => {
  const toast = useToast()

  return (
    <Center w='100vw' h='100vh'>
      <Button
        onClick={() =>
          toast({
            title: '孫悟空',
            description: 'オッス！オラ悟空！',
          })
        }
      >
        Show Toast
      </Button>
    </Center>
  )
}

export const withDuration = () => {
  const toast = useToast()

  return (
    <Center w='100vw' h='100vh'>
      <Button
        onClick={() =>
          toast({
            title: '孫悟空',
            description: 'オッス！オラ悟空！',
            duration: 30000,
          })
        }
      >
        Show Toast
      </Button>
    </Center>
  )
}

export const keepStay = () => {
  const toast = useToast()

  return (
    <Center w='100vw' h='100vh'>
      <Button
        onClick={() =>
          toast({
            title: '孫悟空',
            description: 'オッス！オラ悟空！',
            duration: null,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    </Center>
  )
}

export const withVariant = () => {
  const toast = useToast()

  return (
    <Center w='100vw' h='100vh'>
      <Wrap gap='md'>
        <Button
          onClick={() =>
            toast({
              title: '孫悟空',
              description: 'オッス！オラ悟空！',
              variant: 'solid',
            })
          }
        >
          Show solid Toast
        </Button>

        <Button
          onClick={() =>
            toast({
              title: '孫悟空',
              description: 'オッス！オラ悟空！',
              variant: 'subtle',
            })
          }
        >
          Show subtle Toast
        </Button>

        <Button
          onClick={() =>
            toast({
              title: '孫悟空',
              description: 'オッス！オラ悟空！',
              variant: 'top-accent',
            })
          }
        >
          Show top accent Toast
        </Button>

        <Button
          onClick={() =>
            toast({
              title: '孫悟空',
              description: 'オッス！オラ悟空！',
              variant: 'left-accent',
            })
          }
        >
          Show left accent Toast
        </Button>
      </Wrap>
    </Center>
  )
}

export const withLoadingVariant = () => {
  const toast = useToast()

  return (
    <Center w='100vw' h='100vh'>
      <Wrap gap='md'>
        <Button
          onClick={() =>
            toast({
              title: '孫悟空',
              description: 'オッス！オラ悟空！',
              status: 'loading',
              variant: 'subtle',
              icon: { variant: 'oval' },
            })
          }
        >
          Show Toast
        </Button>

        <Button
          onClick={() =>
            toast({
              title: '孫悟空',
              description: 'オッス！オラ悟空！',
              status: 'loading',
              variant: 'solid',
              icon: { variant: 'grid' },
            })
          }
        >
          Show Toast
        </Button>

        <Button
          onClick={() =>
            toast({
              title: '孫悟空',
              description: 'オッス！オラ悟空！',
              status: 'loading',
              variant: 'subtle',
              icon: { variant: 'triangle', color: 'purple.300' },
            })
          }
        >
          Show Toast
        </Button>

        <Button
          onClick={() =>
            toast({
              title: '孫悟空',
              description: 'オッス！オラ悟空！',
              status: 'loading',
              variant: 'solid',
              icon: { variant: 'dots' },
            })
          }
        >
          Show Toast
        </Button>
      </Wrap>
    </Center>
  )
}

export const withStatus = () => {
  const toast = useToast()

  return (
    <Center w='100vw' h='100vh'>
      <Wrap gap='md'>
        <Button
          onClick={() =>
            toast({
              title: '孫悟空',
              description: 'オッス！オラ悟空！',
              status: 'info',
            })
          }
        >
          Show info Toast
        </Button>

        <Button
          onClick={() =>
            toast({
              title: '孫悟空',
              description: 'オッス！オラ悟空！',
              status: 'success',
            })
          }
        >
          Show success Toast
        </Button>

        <Button
          onClick={() =>
            toast({
              title: '孫悟空',
              description: 'オッス！オラ悟空！',
              status: 'warning',
            })
          }
        >
          Show warning Toast
        </Button>

        <Button
          onClick={() =>
            toast({
              title: '孫悟空',
              description: 'オッス！オラ悟空！',
              status: 'error',
            })
          }
        >
          Show danger Toast
        </Button>

        <Button
          onClick={() =>
            toast({
              title: '孫悟空',
              description: 'オッス！オラ悟空！',
              status: 'loading',
            })
          }
        >
          Show loading Toast
        </Button>
      </Wrap>
    </Center>
  )
}

export const withColorStyle = () => {
  const toast = useToast()

  return (
    <Center w='100vw' h='100vh'>
      <Wrap gap='md'>
        <Button
          onClick={() =>
            toast({
              title: '孫悟空',
              description: 'オッス！オラ悟空！',
              status: 'info',
              colorStyle: 'green',
            })
          }
        >
          Show green Toast
        </Button>

        <Button
          onClick={() =>
            toast({
              title: '孫悟空',
              description: 'オッス！オラ悟空！',
              status: 'success',
              colorStyle: 'purple',
            })
          }
        >
          Show purple Toast
        </Button>

        <Button
          onClick={() =>
            toast({
              title: '孫悟空',
              description: 'オッス！オラ悟空！',
              status: 'warning',
              colorStyle: 'gray',
            })
          }
        >
          Show gray Toast
        </Button>

        <Button
          onClick={() =>
            toast({
              title: '孫悟空',
              description: 'オッス！オラ悟空！',
              status: 'error',
              colorStyle: 'pink',
            })
          }
        >
          Show pink Toast
        </Button>
      </Wrap>
    </Center>
  )
}

export const withPlacement = () => {
  const toast = useToast()

  return (
    <Center w='100vw' h='100vh' flexDirection='column' gap='md'>
      <Wrap gap='md'>
        <Button
          onClick={() =>
            toast({
              description: 'オッス！オラ悟空！',
              placement: 'top-left',
            })
          }
        >
          Show top left Toast
        </Button>

        <Button
          onClick={() =>
            toast({
              description: 'オッス！オラ悟空！',
              placement: 'top',
            })
          }
        >
          Show top Toast
        </Button>

        <Button
          onClick={() =>
            toast({
              description: 'オッス！オラ悟空！',
              placement: 'top-right',
            })
          }
        >
          Show top right Toast
        </Button>
      </Wrap>

      <Wrap gap='md'>
        <Button
          onClick={() =>
            toast({
              description: 'オッス！オラ悟空！',
              placement: 'bottom-left',
            })
          }
        >
          Show bottom left Toast
        </Button>

        <Button
          onClick={() =>
            toast({
              description: 'オッス！オラ悟空！',
              placement: 'bottom',
            })
          }
        >
          Show bottom Toast
        </Button>

        <Button
          onClick={() =>
            toast({
              description: 'オッス！オラ悟空！',
              placement: 'bottom-right',
            })
          }
        >
          Show bottom right Toast
        </Button>
      </Wrap>
    </Center>
  )
}

export const withIsClosable = () => {
  const toast = useToast()

  return (
    <Center w='100vw' h='100vh'>
      <Button
        onClick={() =>
          toast({
            title: '孫悟空',
            description: 'オッス！オラ悟空！',
            duration: 30000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    </Center>
  )
}

export const costomComponent = () => {
  const toast = useToast()

  return (
    <Center w='100vw' h='100vh'>
      <Button
        onClick={() =>
          toast({
            render: () => (
              <Box color='white' py={3} px={4} bg='purple.500'>
                ギャルのパンティーおくれーーーっ！！！！！
              </Box>
            ),
          })
        }
      >
        Show Toast
      </Button>
    </Center>
  )
}

export const useClose = () => {
  const toast = useToast()
  const ref = useRef<string | number | undefined>(undefined)

  const onOpen = () => {
    ref.current = toast({
      title: '孫悟空',
      description: 'オッス！オラ悟空！',
      duration: 30000,
      isClosable: true,
    })
  }

  const onClose = () => {
    if (ref.current) toast.close(ref.current)
  }

  const onCloseAll = () => {
    toast.closeAll()
  }

  return (
    <Center w='100vw' h='100vh'>
      <Wrap gap='md'>
        <Button onClick={onOpen}>Show Toast</Button>
        <Button onClick={onClose}>Close last Toast</Button>
        <Button onClick={onCloseAll}>Close all Toast</Button>
      </Wrap>
    </Center>
  )
}

export const useUpdate = () => {
  const toast = useToast()
  const ref = useRef<string | number | undefined>(undefined)

  const onOpen = () => {
    ref.current = toast({
      title: '孫悟空',
      description: 'オッス！オラ悟空！',
      colorStyle: 'orange',
      duration: 30000,
    })
  }

  const onUpdate = () => {
    if (ref.current)
      toast.update(ref.current, {
        title: 'ベジータ',
        description: 'よくも…よくも…オレの…ブルマを!!',
        colorStyle: 'blue',
        duration: 30000,
      })
  }

  return (
    <Center w='100vw' h='100vh'>
      <Wrap gap='md'>
        <Button onClick={onOpen}>Show Toast</Button>
        <Button onClick={onUpdate}>Update last Toast</Button>
      </Wrap>
    </Center>
  )
}

export const customStyle = () => {
  const toast = useToast({
    style: {
      maxW: '100%',
      minW: '100%',
    },
  })

  return (
    <Center w='100vw' h='100vh'>
      <Wrap gap='md'>
        <Button
          onClick={() =>
            toast({
              title: '孫悟空',
              description: 'オッス！オラ悟空！',
              isClosable: true,
            })
          }
        >
          Show Toast
        </Button>

        <Button
          onClick={() =>
            toast({
              title: '孫悟空',
              description: 'オッス！オラ悟空！',
              isClosable: true,
              style: {
                minW: '60%',
              },
            })
          }
        >
          Show individual style Toast
        </Button>
      </Wrap>
    </Center>
  )
}
