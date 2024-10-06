import type { Meta, StoryFn } from "@storybook/react"
import { Box, Button, Input, Snacks, useSnacks, Wrap } from "@yamada-ui/react"
import { useRef } from "react"

type Story = StoryFn<typeof Snacks>

const meta: Meta = {
  title: "Hooks / useSnacks",
}

export default meta

export const basic: Story = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const withDirection = () => {
  const { snack, snacks } = useSnacks({ direction: "bottom" })

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const withLimit = () => {
  const { snack, snacks } = useSnacks({ limit: 5 })

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const withGutter = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks
        gutter={[0, "lg"]}
        mb="-md"
        negateMargin={false}
        snacks={snacks}
      />

      <Input placeholder="Input" />
    </>
  )
}

export const withDuration = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              description: "オッス！オラ悟空！",
              duration: 30000,
              title: "孫悟空",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const withVariant = () => {
  const { snack, snacks } = useSnacks({ direction: "bottom" })

  return (
    <>
      <Wrap gap="md">
        <Button
          onClick={() =>
            snack({
              description: "オッス！オラ悟空！",
              title: "孫悟空",
              variant: "basic",
            })
          }
        >
          Add basic Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              description: "オッス！オラ悟空！",
              title: "孫悟空",
              variant: "solid",
            })
          }
        >
          Add solid Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              description: "オッス！オラ悟空！",
              title: "孫悟空",
              variant: "subtle",
            })
          }
        >
          Add subtle Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              description: "オッス！オラ悟空！",
              title: "孫悟空",
              variant: "top-accent",
            })
          }
        >
          Add top accent Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              description: "オッス！オラ悟空！",
              title: "孫悟空",
              variant: "left-accent",
            })
          }
        >
          Add left accent Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const withLoadingVariant = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          onClick={() =>
            snack({
              description: "オッス！オラ悟空！",
              icon: { variant: "oval" },
              status: "loading",
              title: "孫悟空",
              variant: "subtle",
            })
          }
        >
          Add oval Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              description: "オッス！オラ悟空！",
              icon: { variant: "grid" },
              status: "loading",
              title: "孫悟空",
              variant: "solid",
            })
          }
        >
          Add grid Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              description: "オッス！オラ悟空！",
              icon: { variant: "puff" },
              status: "loading",
              title: "孫悟空",
              variant: "subtle",
            })
          }
        >
          Add puff Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              description: "オッス！オラ悟空！",
              icon: { variant: "dots" },
              status: "loading",
              title: "孫悟空",
              variant: "solid",
            })
          }
        >
          Add dots Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const withStatus = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() =>
            snack({
              description: "オッス！オラ悟空！",
              status: "info",
              title: "孫悟空",
            })
          }
        >
          Add info Snack
        </Button>

        <Button
          colorScheme="success"
          onClick={() =>
            snack({
              description: "オッス！オラ悟空！",
              status: "success",
              title: "孫悟空",
            })
          }
        >
          Add success Snack
        </Button>

        <Button
          colorScheme="warning"
          onClick={() =>
            snack({
              description: "オッス！オラ悟空！",
              status: "warning",
              title: "孫悟空",
            })
          }
        >
          Add warning Snack
        </Button>

        <Button
          colorScheme="danger"
          onClick={() =>
            snack({
              description: "オッス！オラ悟空！",
              status: "error",
              title: "孫悟空",
            })
          }
        >
          Add danger Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              description: "オッス！オラ悟空！",
              status: "loading",
              title: "孫悟空",
            })
          }
        >
          Add loading Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const withColorScheme = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="green"
          onClick={() =>
            snack({
              colorScheme: "green",
              description: "オッス！オラ悟空！",
              status: "info",
              title: "孫悟空",
            })
          }
        >
          Add green Snack
        </Button>

        <Button
          colorScheme="purple"
          onClick={() =>
            snack({
              colorScheme: "purple",
              description: "オッス！オラ悟空！",
              status: "success",
              title: "孫悟空",
            })
          }
        >
          Add purple Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              colorScheme: "gray",
              description: "オッス！オラ悟空！",
              status: "warning",
              title: "孫悟空",
            })
          }
        >
          Add gray Snack
        </Button>

        <Button
          colorScheme="pink"
          onClick={() =>
            snack({
              colorScheme: "pink",
              description: "オッス！オラ悟空！",
              status: "error",
              title: "孫悟空",
            })
          }
        >
          Add pink Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const withCloseStrategy = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              closeStrategy: "element",
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const useClose = () => {
  const { snack, snacks } = useSnacks()
  const ref = useRef<number | string | undefined>(undefined)

  const onOpen = () => {
    ref.current = snack({
      description: "オッス！オラ悟空！",
      title: "孫悟空",
    })
  }

  const onClose = () => {
    if (ref.current) snack.close(ref.current)
  }

  const onCloseAll = () => {
    snack.closeAll()
  }

  return (
    <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={onOpen}>
          Add Snack
        </Button>
        <Button onClick={onClose}>Close last Snack</Button>
        <Button colorScheme="danger" onClick={onCloseAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const useUpdate = () => {
  const { snack, snacks } = useSnacks()
  const ref = useRef<number | string | undefined>(undefined)

  const onOpen = () => {
    ref.current = snack({
      description: "オッス！オラ悟空！",
      title: "孫悟空",
    })
  }

  const onUpdate = () => {
    if (ref.current)
      snack.update(ref.current, {
        colorScheme: "purple",
        description: "よくも…よくも…オレの…ブルマを!!",
        title: "ベジータ",
      })
  }

  const onCloseAll = () => {
    snack.closeAll()
  }

  return (
    <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={onOpen}>
          Add Snack
        </Button>
        <Button onClick={onUpdate}>Update last Snack</Button>
        <Button colorScheme="danger" onClick={onCloseAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const customComponent = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              component: () => (
                <Box bg="purple.500" color="white" px={4} py={3}>
                  ギャルのパンティーおくれーーーっ！！！！！
                </Box>
              ),
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const customStyle = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              style: {
                w: "60%",
              },
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const disabledClosable = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              description: "オッス！オラ悟空！",
              isClosable: false,
              title: "孫悟空",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}
