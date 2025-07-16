import type { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import {
  Button,
  MoonIcon,
  SunIcon,
  useColorMode,
  VStack,
} from "@yamada-ui/react"

export function getServerSideProps({
  req,
}: GetServerSidePropsContext): GetServerSidePropsResult<{ cookie?: string }> {
  const cookie = req.headers.cookie

  return { props: { cookie } }
}

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <VStack align="flex-start" p="lg">
      <Button
        startIcon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      >
        {colorMode === "dark" ? "Change to light" : "Change to dark"}
      </Button>
    </VStack>
  )
}
