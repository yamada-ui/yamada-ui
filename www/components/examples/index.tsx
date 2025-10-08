import { Box } from "@yamada-ui/react"
import { Appearance } from "./appearance"
import { Bookmark } from "./bookmark"
import { Calendar } from "./calendar"
import { CreateAccount } from "./create-account"
import { Notifications } from "./notifications"
import { PaymentMethod } from "./payment-method"
import { Processing } from "./processing"
import { QAndA } from "./q-and-a"
import { Roadmap } from "./Roadmap"
import { Role } from "./role"
import { SocialMedia } from "./social-media"

export function Examples() {
  return (
    <Box
      as="section"
      columnCount="auto"
      columnWidth="calc(sm + {space} * 2)"
      gap="{space}"
    >
      <PaymentMethod />
      <CreateAccount />
      <Role />
      <SocialMedia />
      <Appearance />
      <Bookmark />
      <Calendar />
      <Processing />
      <Notifications />
      <Roadmap />
      <QAndA />
    </Box>
  )
}
