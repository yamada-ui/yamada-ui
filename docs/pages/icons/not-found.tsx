import type { BoxProps } from "@yamada-ui/react"
import type { FC, MutableRefObject } from "react"
import { Bird, Fish, Rabbit, Snail, Squirrel } from "@yamada-ui/lucide"
import { Button, Center, Text } from "@yamada-ui/react"
import { useI18n } from "contexts"
import { memo } from "react"

export interface NotFoundProps extends BoxProps {
  valueResetRef: MutableRefObject<() => void>
}

export const NotFound: FC<NotFoundProps> = memo(
  ({ valueResetRef, ...rest }) => {
    const { t } = useI18n()

    const Icon = [Rabbit, Snail, Squirrel, Bird, Fish][
      Math.floor(Math.random() * 5)
    ]

    return (
      <Center flexDirection="column" gap="lg" {...rest}>
        <Icon
          _hover={{ transform: "scaleX(-1)" }}
          color={["#5b5b5b", "#cccccc"]}
          fontSize="12rem"
          strokeWidth="1"
        />

        <Text color="muted" fontSize="2xl" lineClamp={1}>
          {t("icons.not-found")}
        </Text>

        <Button onClick={() => valueResetRef.current()}>
          {t("icons.reset")}
        </Button>
      </Center>
    )
  },
)

NotFound.displayName = "NotFound"
