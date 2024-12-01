import type { BoxProps } from "@yamada-ui/react"
import type { FC, MutableRefObject } from "react"
import {
  BirdIcon,
  FishIcon,
  RabbitIcon,
  SnailIcon,
  SquirrelIcon,
} from "@yamada-ui/lucide"
import { Button, Center, Text } from "@yamada-ui/react"
import { useI18n } from "contexts"
import { memo } from "react"

export interface NotFoundProps extends BoxProps {
  valueResetRef: MutableRefObject<() => void>
}

export const NotFound: FC<NotFoundProps> = memo(
  ({ valueResetRef, ...rest }) => {
    const { t } = useI18n()

    const Icon = [RabbitIcon, SnailIcon, SquirrelIcon, BirdIcon, FishIcon][
      Math.floor(Math.random() * 5)
    ]!

    return (
      <Center flexDirection="column" gap="lg" {...rest}>
        <Icon
          color={["#5b5b5b", "#cccccc"]}
          fontSize="12rem"
          strokeWidth="1"
          _hover={{ transform: "scaleX(-1)" }}
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
