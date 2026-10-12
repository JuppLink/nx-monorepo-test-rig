import {
  acme,
  Th,
  Thead,
  Tr,
  useBreakpoint,
  VisuallyHidden
} from '@acmehealth/ui'

const TableHeader = () => {
  const breakpoint = useBreakpoint({ ssr: false })

  return (
    <>
      {(breakpoint === 'xl' || breakpoint === '2xl') && (
        <acme.colgroup>
          <acme.col span={1} w="28%" />
          <acme.col span={1} w="20%" />
          <acme.col span={1} w="20%" />
          <acme.col span={1} w="20%" />
          <acme.col span={1} w="6%" />
          <acme.col span={1} w="6%" />
        </acme.colgroup>
      )}
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>User type</Th>
          <Th>Date added</Th>
          <Th>Company</Th>
          <Th>
            <VisuallyHidden>Edit User</VisuallyHidden>
          </Th>
          <Th>
            <VisuallyHidden>Impersonate User</VisuallyHidden>
          </Th>
        </Tr>
      </Thead>
    </>
  )
}

export default TableHeader
