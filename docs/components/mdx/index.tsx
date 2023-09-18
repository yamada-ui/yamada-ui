import * as CalendarComponents from '@yamada-ui/calendar'
import * as CarouselComponents from '@yamada-ui/carousel'
// import * as DropzoneComponents from '@yamada-ui/dropzone'
import { Icon as FontAwesomeIcon } from '@yamada-ui/fontawesome'
import * as UIComponents from '@yamada-ui/react'
import * as TableComponents from '@yamada-ui/table'
import type { MDXComponents as MDXComponentsType } from 'mdx/types'
import { CodeBlock } from './code-block'
import { ColorModeButton } from './color-mode-button'
import { ColorPaletters, ColorPaletter, ColorPaletterContainer } from './color-palettes'
import { Link } from './link'
import { LinkedHeading } from './linked-heading'
import { PackageManagers } from './package-managers'
import { SelectPackageManagers } from './select-package-managers'
import { LinkCard, CardContainer } from 'components/navigation'

const {
  Heading,
  Text,
  Kbd,
  Divider,
  DiscList,
  DecimalList,
  ListItem,
  Alert,
  AlertIcon,
  AlertDescription,
  TableContainer,
  NativeTable,
  Th,
  Td,
} = UIComponents

export const MDXUIComponents = {
  ...UIComponents,
  ...CarouselComponents,
  // ...DropzoneComponents,
  ...TableComponents,
  ...CalendarComponents,
  FontAwesomeIcon,
} as unknown as MDXComponentsType

export const MDXBaseComponents: MDXComponentsType = {
  h1: (props) => <Heading as='h1' apply='mdx.h1' {...props} />,
  h2: (props) => <LinkedHeading as='h2' apply='mdx.h2' {...props} />,
  h3: (props) => <LinkedHeading as='h3' apply='mdx.h3' {...props} />,
  h4: (props) => <LinkedHeading as='h4' apply='mdx.h4' {...props} />,
  h5: (props) => <Heading as='h5' apply='mdx.h5' {...props} />,
  h6: (props) => <Heading as='h6' apply='mdx.h6' {...props} />,
  p: (props) => <Text apply='mdx.p' {...props} />,
  strong: (props) => <Text as='strong' apply='mdx.strong' {...props} />,
  code: (props) => <Text as='code' apply='mdx.code' {...props} />,
  pre: (props) => <CodeBlock {...props} />,
  a: (props) => <Link apply='mdx.a' {...props} />,
  ul: (props) => <DiscList apply='mdx.ul' {...props} />,
  ol: (props) => <DecimalList apply='mdx.ol' {...props} />,
  li: (props) => <ListItem apply='mdx.li' {...props} />,
  hr: (props) => <Divider apply='mdx.hr' {...props} />,
  table: (props) => (
    <TableContainer apply='mdx.table-container'>
      <NativeTable apply='mdx.table' {...props} />
    </TableContainer>
  ),
  th: (props) => <Th {...props} />,
  td: (props) => <Td {...props} />,
  kbd: (props) => <Kbd apply='mdx.kbd' {...props} />,
  Alert: (props) => <Alert apply='mdx.alert' {...props} />,
  Note: ({ children, ...rest }) => (
    <Alert apply='mdx.alert' alignItems='flex-start' {...rest}>
      <AlertIcon mt='0.3em' />
      <AlertDescription as='p' apply='mdx.p'>
        {children}
      </AlertDescription>
    </Alert>
  ),
  PackageManagers,
  SelectPackageManagers,
  ColorModeButton,
  ColorPaletterContainer: (props) => <ColorPaletterContainer {...props} />,
  ColorPaletters: (props) => <ColorPaletters {...props} />,
  ColorPaletter: (props) => <ColorPaletter {...props} />,
  CardContainer: (props) => <CardContainer {...props} />,
  LinkCard: (props) => <LinkCard {...props} />,
}

export const MDXComponents = {
  ...MDXUIComponents,
  ...MDXBaseComponents,
} as unknown as MDXComponentsType
