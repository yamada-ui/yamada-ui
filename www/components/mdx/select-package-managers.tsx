import type { Column } from "@yamada-ui/table"
import type { FC } from "react"
import { useBreakpoint } from "@yamada-ui/react"
import { Table } from "@yamada-ui/table"
import { TextWithCodeOrLink } from "components/typography"
import { useI18n } from "contexts"
import { useMemo, useState } from "react"
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
        css: hasDescription ? { w: "12.5rem" } : {},
        accessorKey: "name",
        header: t("component.select-package-managers.name"),
      },
    ]

    if (breakpoint !== "sm" && hasDescription) {
      columns.push({
        accessorKey: "description",
        cell: ({ getValue }) => (
          <TextWithCodeOrLink lineClamp={1}>
            {getValue<string>()}
          </TextWithCodeOrLink>
        ),
        header: t("component.select-package-managers.description"),
      })
    }

    return columns
  }, [t, breakpoint, hasDescription])

  return (
    <>
      <PackageManagers mb="4" packageNameOrCommand={selectedPackageNames} />

      <Table
        colorScheme="primary"
        columns={columns}
        data={packages}
        defaultSelectedRowIds={selectedPackageNames}
        enableSorting={false}
        highlightOnHover
        highlightOnSelected={false}
        mb="6"
        mt="4"
        rowId="name"
        rowsClickSelect
        selectColumnProps={{
          css: {
            w: "2.5rem",
          },
        }}
        onChangeSelect={setSelectedPackageNames}
      />
    </>
  )
}
