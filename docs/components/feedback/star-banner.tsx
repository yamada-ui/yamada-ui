import type { CenterProps } from "@yamada-ui/react"
import { Button, Center, forwardRef, HStack, Text } from "@yamada-ui/react"
import { Star } from "components/media-and-icons"
import { CONSTANT } from "constant"
import { useI18n } from "contexts"
import { memo } from "react"

export interface StarBannerProps extends CenterProps {}

export const StarBanner = memo(
  forwardRef<StarBannerProps, "div">(({ ...rest }, ref) => {
    const { tc } = useI18n()

    return (
      <Center
        ref={ref}
        bgGradient="ultra"
        color="white"
        px="md"
        py="sm"
        {...rest}
      >
        <HStack>
          <Text>{tc("component.feedback.ad-banner.message")}</Text>

          <Button
            as="a"
            _active={{
              bg: `whiteAlpha.400`,
            }}
            _hover={{
              bg: `whiteAlpha.300`,
            }}
            bg="blackAlpha.300"
            color="whiteAlpha.900"
            cursor="pointer"
            href={CONSTANT.SNS.GITHUB.YAMADA_UI}
            size="sm"
            target="_blank"
          >
            <Star />
            {tc("component.feedback.ad-banner.button")}
          </Button>
        </HStack>
      </Center>
    )
  }),
)
