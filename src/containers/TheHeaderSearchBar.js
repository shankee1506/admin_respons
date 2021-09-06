import React from 'react'
import {
  
    CForm,
    CInput,
    CButton
    
  } from '@coreui/react'

const TheHeaderSearchBar = () => {
    return (
        <div >

        <CForm inline>
        <CInput
          className="mr-sm-2"
          placeholder="Search"
          size="sm"
        />
        <CButton color="outline-success" className="my-2 my-sm-0" type="submit">Search</CButton>
      </CForm>

         </div>
    )
}

export default TheHeaderSearchBar
