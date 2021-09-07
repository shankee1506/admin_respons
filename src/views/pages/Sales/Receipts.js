import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable
  
} from '@coreui/react'


import usersData from '../../users/UsersData'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['DATE','NAME', 'ITEMS', 'TYPE','TOTAL']

const Receipts = () => {
    return (
        <CCol xs="12" lg="10">
        <CCard>
          <CCardHeader>
            Bordered Table
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={usersData}
            fields={fields}
            bordered
            itemsPerPage={5}
            pagination
            scopedSlots = {{
              'status':
                (item)=>(
                  <td>
                    <CBadge color={getBadge(item.status)}>
                      {item.status}
                    </CBadge>
                  </td>
                )

            }}
          />
          </CCardBody>
        </CCard>
      </CCol>
    )
}

export default Receipts
