import type { MDXComponents } from "mdx/types"
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  DecimalList,
  DiscList,
  Divider,
  Kbd,
  ListItem,
  NativeTable,
  TableContainer,
  Td,
  Text,
  Th,
} from "@yamada-ui/react"
import { CardContainer, LinkCard } from "components/navigation"
import { Pre } from "./code-block"
import { ColorModeButton } from "./color-mode-button"
import {
  ColorPaletter,
  ColorPaletterContainer,
  ColorPaletters,
} from "./color-palettes"
import { Contributors } from "./contributors"
import { Link } from "./link"
import { LinkedHeading } from "./linked-heading"
import { PackageManagers } from "./package-managers"
import { PropsCard } from "./props-card"
import { SelectPackageManagers } from "./select-package-managers"
import { Sponsors } from "./sponsors"
import { Users } from "./users"

const uiComponents = { Box }

export const components: MDXComponents = {
  ...uiComponents,
  a: (props) => <Link apply="mdx.a" {...props} />,
  Alert: (props) => <Alert apply="mdx.alert" {...props} />,
  CardContainer,
  code: (props) => <Text as="code" apply="mdx.code" {...props} />,
  ColorModeButton,
  ColorPaletter,
  ColorPaletterContainer,
  ColorPaletters,
  Contributors,
  h1: (props) => <Text as="h1" apply="mdx.h1" {...props} />,
  h2: (props) => <LinkedHeading as="h2" apply="mdx.h2" {...props} />,
  h3: (props) => <LinkedHeading as="h3" apply="mdx.h3" {...props} />,
  h4: (props) => <LinkedHeading as="h4" apply="mdx.h4" {...props} />,
  h5: (props) => <Text as="h5" apply="mdx.h5" {...props} />,
  h6: (props) => <Text as="h6" apply="mdx.h6" {...props} />,
  hr: (props) => <Divider apply="mdx.hr" {...props} />,
  kbd: (props) => <Kbd apply="mdx.kbd" {...props} />,
  li: (props) => <ListItem apply="mdx.li" {...props} />,
  LinkCard,
  Note: ({ children, ...rest }) => (
    <Alert apply="mdx.alert" variant="note" alignItems="flex-start" {...rest}>
      <AlertIcon mt="0.2em" />
      <AlertDescription as="p" apply="mdx.p">
        {children}
      </AlertDescription>
    </Alert>
  ),
  ol: (props) => <DecimalList apply="mdx.ol" {...props} />,
  p: (props) => <Text apply="mdx.p" {...props} />,
  PackageManagers,
  pre: (props) => <Pre {...props} />,
  PropsCard,
  SelectPackageManagers,
  Sponsors,
  strong: (props) => <Text as="strong" apply="mdx.strong" {...props} />,
  table: (props) => (
    <TableContainer apply="mdx.table-container">
      <NativeTable apply="mdx.table" {...props} />
    </TableContainer>
  ),
  td: (props) => <Td {...props} />,
  th: (props) => <Th {...props} />,
  ul: (props) => <DiscList apply="mdx.ul" {...props} />,
  Users,
}
