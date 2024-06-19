import { Bird, Fish, Rabbit, Snail, Squirrel } from "@yamada-ui/lucide"
import { Button, Center, Text } from "@yamada-ui/react"
import type { BoxProps } from "@yamada-ui/react"
import { useI18n } from "contexts/i18n-context"
import { memo } from "react"
import type { FC, MutableRefObject } from "react"

export type NotFoundProps = BoxProps & {
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
          color={["#5b5b5b", "#cccccc"]}
          size="12rem"
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
