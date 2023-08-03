import * as CalendarComponents from '@yamada-ui/calendar'
import * as CarouselComponents from '@yamada-ui/carousel'
// import * as DropzoneComponents from '@yamada-ui/dropzone'
import { Icon as FontAwesomeIcon } from '@yamada-ui/fontawesome'
import * as UIComponents from '@yamada-ui/react'
import * as TableComponents from '@yamada-ui/table'

const { Heading } = UIComponents

export const MDXComponents = {
  ...UIComponents,
  ...CarouselComponents,
  // ...DropzoneComponents,
  ...TableComponents,
  ...CalendarComponents,
  FontAwesomeIcon,
  h1: (props) => {
    console.log(props)

    return <Heading />
  },
  h2: (props) => {
    console.log(props)

    return <Heading apply='mdx.h2' {...props} />
  },
}
