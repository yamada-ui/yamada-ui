import { Link, Outlet } from "@tanstack/react-router"
import { Box, HStack } from "@yamada-ui/react"

export function Root() {
  return (
    <Box>
      <Box as="nav" borderBottomWidth="1px" px="lg" py="md">
        <HStack gap="md">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </HStack>
      </Box>

      <Box p="lg">
        <Outlet />
      </Box>
    </Box>
  )
}
