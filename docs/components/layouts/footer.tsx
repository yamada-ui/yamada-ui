import type { CenterProps } from "@yamada-ui/react"
import {
  Center,
  forwardRef,
  HStack,
  Link,
  Text,
  VStack,
} from "@yamada-ui/react"
import { GithubIcon, XIcon } from "components/media-and-icons"
import { CONSTANT } from "constant"
import { useI18n } from "contexts"
import { memo } from "react"

export interface FooterProps extends CenterProps {}

export const Footer = memo(
  forwardRef<FooterProps, "div">(({ ...rest }, ref) => {
    const { tc } = useI18n()

    return (
      <Center
        ref={ref}
        as="footer"
        position="sticky"
        top="100vh"
        w="full"
        {...rest}
      >
        <VStack
          alignItems="center"
          maxW="9xl"
          px={{ base: "lg", md: "md" }}
          py="xl"
          w="full"
        >
          <Text
            color={["blackAlpha.600", "whiteAlpha.600"]}
            fontSize={{ base: "md", sm: "sm" }}
            textAlign="center"
          >
            {tc("component.footer.description", (str, index) => (
              <Link
                href={
                  index === 1
                    ? CONSTANT.SNS.GITHUB.HIROTOMO_YAMADA
                    : CONSTANT.SNS.GITHUB.YAMADA_UI + "/graphs/contributors"
                }
                target="_blank"
              >
                {str}
              </Link>
            ))}
          </Text>

          <HStack>
            <Link
              href={CONSTANT.SNS.GITHUB.HIROTOMO_YAMADA}
              target="_blank"
              aria-label="GitHub profile of Hirotomo Yamada"
              color="muted"
            >
              <GithubIcon />
            </Link>

            <Link
              href={CONSTANT.SNS.TWITTER.HIROTOMO_YAMADA}
              target="_blank"
              aria-label="X Hirotomo Yamada"
              color="muted"
            >
              <XIcon />
            </Link>
          </HStack>
        </VStack>
      </Center>
    )
  }),
)
