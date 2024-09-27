import {
  Text,
  Kbd,
  Divider,
  DiscList,
  DecimalList,
  ListItem,
  TableContainer,
  NativeTable,
  Th,
  Td,
  Alert,
  AlertIcon,
  AlertDescription,
  Box,
} from "@yamada-ui/react"
import type { MDXComponents } from "mdx/types"
import { Pre } from "./code-block"
import { ColorModeButton } from "./color-mode-button"
import {
  ColorPaletters,
  ColorPaletter,
  ColorPaletterContainer,
} from "./color-palettes"
import { Contributors } from "./contributors"
import { Link } from "./link"
import { LinkedHeading } from "./linked-heading"
import { PackageManagers } from "./package-managers"
import { PropsCard } from "./props-card"
import { SelectPackageManagers } from "./select-package-managers"
import { Sponsors } from "./sponsors"
import { Users } from "./users"
import { LinkCard, CardContainer } from "components/navigation"

const uiComponents = { Box }

export const components: MDXComponents = {
  ...uiComponents,
  h1: (props) => <Text as="h1" apply="mdx.h1" {...props} />,
  h2: (props) => <LinkedHeading as="h2" apply="mdx.h2" {...props} />,
  h3: (props) => <LinkedHeading as="h3" apply="mdx.h3" {...props} />,
  h4: (props) => <LinkedHeading as="h4" apply="mdx.h4" {...props} />,
  h5: (props) => <Text as="h5" apply="mdx.h5" {...props} />,
  h6: (props) => <Text as="h6" apply="mdx.h6" {...props} />,
  p: (props) => <Text apply="mdx.p" {...props} />,
  strong: (props) => <Text as="strong" apply="mdx.strong" {...props} />,
  code: (props) => <Text as="code" apply="mdx.code" {...props} />,
  pre: (props) => <Pre {...props} />,
  a: (props) => <Link apply="mdx.a" {...props} />,
  ul: (props) => <DiscList apply="mdx.ul" {...props} />,
  ol: (props) => <DecimalList apply="mdx.ol" {...props} />,
  li: (props) => <ListItem apply="mdx.li" {...props} />,
  hr: (props) => <Divider apply="mdx.hr" {...props} />,
  table: (props) => (
    <TableContainer apply="mdx.table-container">
      <NativeTable apply="mdx.table" {...props} />
    </TableContainer>
  ),
  th: (props) => <Th {...props} />,
  td: (props) => <Td {...props} />,
  kbd: (props) => <Kbd apply="mdx.kbd" {...props} />,
  Alert: (props) => <Alert apply="mdx.alert" {...props} />,
  Note: ({ children, ...rest }) => (
    <Alert apply="mdx.alert" variant="note" alignItems="flex-start" {...rest}>
      <AlertIcon mt="0.2em" />
      <AlertDescription as="p" apply="mdx.p">
        {children}
      </AlertDescription>
    </Alert>
  ),
  PackageManagers,
  SelectPackageManagers,
  ColorModeButton,
  Users,
  Sponsors,
  Contributors,
  ColorPaletterContainer,
  ColorPaletters,
  ColorPaletter,
  CardContainer,
  LinkCard,
  PropsCard,
}
