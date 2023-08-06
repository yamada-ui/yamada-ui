import { Tabs as UITabs, TabsProps as UITabsProps, Tab, forwardRef } from '@yamada-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { memo } from 'react'
import { usePage } from 'contexts/page-context'

export type TabsProps = UITabsProps

export const Tabs = memo(
  forwardRef<TabsProps, 'div'>(({ ...rest }, ref) => {
    const { tabs } = usePage()
    const { asPath } = useRouter()

    return tabs.length ? (
      <UITabs
        ref={ref}
        as='nav'
        index={tabs.findIndex(({ slug }) => slug === asPath)}
        mt='normal'
        overflowX='auto'
        {...rest}
      >
        {tabs.map(({ tab, menu, title, slug }) => (
          <Tab key={slug} as={Link} href={slug}>
            {tab ?? menu ?? title}
          </Tab>
        ))}
      </UITabs>
    ) : null
  }),
)
