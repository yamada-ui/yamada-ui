import { Tabs as UITabs, TabsProps as UITabsProps, Tab, forwardRef } from '@yamada-ui/react'
import Link from 'next/link'
import { memo } from 'react'
import { usePage } from 'contexts'

export type TabsProps = UITabsProps & { tab?: string }

export const Tabs = memo(
  forwardRef<TabsProps, 'div'>(({ tab, ...rest }, ref) => {
    const { tabs } = usePage()

    return tabs.length ? (
      <UITabs
        ref={ref}
        as='nav'
        index={tabs.findIndex((child) => child.tab === tab)}
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
