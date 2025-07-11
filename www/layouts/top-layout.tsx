import type { FC, PropsWithChildren } from "react"
import { Center, VStack } from "@yamada-ui/react"
import { StarBanner } from "components/feedback"
import { Footer, Header } from "components/layouts"

export const TopLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <StarBanner />

      <Header />

      <Center as="main">
        <VStack
          gap="0"
          maxW="9xl"
          px={{ base: "lg", md: "md" }}
          py={{ base: "lg", md: "normal" }}
          w="full"
        >
          {children}
        </VStack>
      </Center>

      <Footer />
    </>
  )
}
