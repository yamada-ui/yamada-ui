import { memo } from "react"
import type { FC } from "react"
import { AccountForm } from "./account"
import { AppearanceForm } from "./appearance"
import { DisplayForm } from "./display"
import { NotificationsForm } from "./notification"
import { ProfileForm } from "./profile"
import type { menuType } from "."

export type SelectedFormProps = {
  selectedMenu: menuType
}

export const SelectedForm: FC<SelectedFormProps> = memo(({ selectedMenu }) => {
  switch (selectedMenu) {
    case "profile":
      return <ProfileForm />
    case "account":
      return <AccountForm />
    case "appearance":
      return <AppearanceForm />
    case "notifications":
      return <NotificationsForm />
    case "display":
      return <DisplayForm />
    default:
      return null
  }
})

SelectedForm.displayName = "SelectedForm"
