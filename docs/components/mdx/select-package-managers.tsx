import { useBreakpoint } from "@yamada-ui/react"
import { Table } from "@yamada-ui/table"
import type { Column } from "@yamada-ui/table"
import { TextWithCodeOrLink } from "components/typography"
import { useI18n } from "contexts"
import { useMemo, useState } from "react"
import type { FC } from "react"
import { PackageManagers } from "./package-managers"

interface Package {
  name: string
  description: string
  isDefaultCheck?: boolean
}

export interface SelectPackageManagersProps {
  packages: Package[]
}

export const SelectPackageManagers: FC<SelectPackageManagersProps> = ({
  packages,
}) => {
  const breakpoint = useBreakpoint()
  const { t } = useI18n()
  const [selectedPackageNames, setSelectedPackageNames] = useState<string[]>(
    packages
      .filter(({ isDefaultCheck }) => isDefaultCheck)
      .map(({ name }) => name),
  )
  const hasDescription = packages.some(({ description }) => description)

  const columns = useMemo<Column<Package>[]>(() => {
    const columns: Column<Package>[] = [
      {
        header: t("component.select-package-managers.name"),
        accessorKey: "name",
        css: hasDescription ? { w: "12.5rem" } : {},
      },
    ]

    if (breakpoint !== "sm" && hasDescription) {
      columns.push({
        header: t("component.select-package-managers.description"),
        accessorKey: "description",
        cell: ({ getValue }) => (
          <TextWithCodeOrLink lineClamp={1}>
            {getValue<string>()}
          </TextWithCodeOrLink>
        ),
      })
    }

    return columns
  }, [t, breakpoint, hasDescription])

  return (
    <>
      <PackageManagers packageNameOrCommand={selectedPackageNames} mb="4" />

      <Table
        mt="4"
        mb="6"
        colorScheme="primary"
        columns={columns}
        data={packages}
        rowId="name"
        defaultSelectedRowIds={selectedPackageNames}
        onChangeSelect={setSelectedPackageNames}
        selectColumnProps={{
          css: {
            w: "2.5rem",
          },
        }}
        enableSorting={false}
        rowsClickSelect
        highlightOnHover
        highlightOnSelected={false}
      />
    </>
  )
}
