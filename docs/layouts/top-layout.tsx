import { Center, VStack } from "@yamada-ui/react"
import { FC, PropsWithChildren } from "react"
import { StarBanner } from "components/feedback"
import { Footer, Header } from "components/layouts"

export const TopLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <StarBanner />

      <Header />

      <Center as="main">
        <VStack
          w="full"
          maxW="9xl"
          gap="0"
          py={{ base: "lg", md: "normal" }}
          px={{ base: "lg", md: "md" }}
        >
          {children}
        </VStack>
      </Center>

      <Footer />
    </>
  )
}
