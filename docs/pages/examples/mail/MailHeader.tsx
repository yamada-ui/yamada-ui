import { Box, Center, Divider } from "@yamada-ui/react"
import { type FC, type ReactNode, memo } from "react"

type Props = {
  children: ReactNode
  isCenter?: boolean
}

export const MailHeader: FC<Props> = memo(({ children, isCenter }) => {
  return (
    <>
      <Box
        as={Center}
        h={12}
        px="md"
        justifyContent={isCenter && "space-between"}
      >
        {children}
      </Box>
      <Divider />
    </>
  )
})

MailHeader.displayName = "MailHeader"
