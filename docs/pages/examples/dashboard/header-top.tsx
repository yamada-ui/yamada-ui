import {
  Spacer,
  Text,
  Input,
  HStack,
  VStack,
  Avatar,
  Autocomplete,
  AutocompleteOption,
} from "@yamada-ui/react"
import { memo, useState } from "react"

export const HeaderTop = memo(() => {
  const [hoverCustomers, setHoverCustomers] = useState(false)
  const [hoverProducts, setHoverProducts] = useState(false)
  const [hoverSettings, setHoverSettings] = useState(false)

  return (
    <VStack borderBottomWidth="1px" px={{ base: "lg", sm: "md" }} py="md">
      <HStack>
        <HStack gap="md">
          <Autocomplete placeholder="Select Account...">
            <AutocompleteOption value="aaa">AAA AAA</AutocompleteOption>
            <AutocompleteOption value="bbb">BBB BBB</AutocompleteOption>
            <AutocompleteOption value="ccc">CCC CCC</AutocompleteOption>
          </Autocomplete>

          <Spacer />

          <Text fontSize="sm">Overview</Text>
          <Text
            fontSize="sm"
            onMouseEnter={() => setHoverCustomers(true)}
            onMouseLeave={() => setHoverCustomers(false)}
            color={hoverCustomers ? "initial" : "muted"}
            style={{ cursor: "pointer" }}
          >
            Customers
          </Text>
          <Text
            fontSize="sm"
            onMouseEnter={() => setHoverProducts(true)}
            onMouseLeave={() => setHoverProducts(false)}
            color={hoverProducts ? "initial" : "muted"}
            style={{ cursor: "pointer" }}
          >
            Products
          </Text>
          <Text
            fontSize="sm"
            onMouseEnter={() => setHoverSettings(true)}
            onMouseLeave={() => setHoverSettings(false)}
            color={hoverSettings ? "initial" : "muted"}
            style={{ cursor: "pointer" }}
          >
            Settings
          </Text>
          <Input
            type="email"
            placeholder="Search..."
            style={{ width: "600px" }}
          />
          <Avatar
            src="https://avatars.githubusercontent.com/u/84060430?v=4"
            size="sm"
          />
        </HStack>
      </HStack>
    </VStack>
  )
})

HeaderTop.displayName = "HeaderTop"
