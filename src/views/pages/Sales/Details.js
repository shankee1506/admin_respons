import React from 'react'
import {
    CBadge,
    CCard,
    CCardBody, 
    CCardHeader,
    CCol,
    CRow,
    CListGroup,
    CListGroupItem,
   
  } from '@coreui/react'

const Details = () => {
    return (
    <div>
    <CRow>
    <CCol sm="12" xl="6">
      <CCard>
        <CCardHeader>
         TODAY SALES DETAILS
          <small> </small>
        </CCardHeader>
        <CCardBody>
          <CListGroup>
            <CListGroupItem className="justify-content-between">
              CASH
              <CBadge className="float-right" shape="pill" color="primary">21,234.00</CBadge>
            </CListGroupItem>
            <CListGroupItem className="justify-content-between">
              CREDIT
              <CBadge className="float-right" shape="pill" color="primary">1,000,000.00</CBadge>
            </CListGroupItem>
            <CListGroupItem className="justify-content-between">
              CHECK
              <CBadge className="float-right" shape="pill" color="primary">1,000,000.00</CBadge>
            </CListGroupItem>
            <CListGroupItem className="justify-content-between">
              TOTAL
              <CBadge className="float-right" shape="pill" color="primary">23,000,000.00</CBadge>
            </CListGroupItem>
          </CListGroup>
        </CCardBody>
      </CCard>

    </CCol>

    <CCol sm="12" xl="6">
    <CCard>
      <CCardHeader>
        CURRENT MONTHSALES DETAILS
        <small> </small>
      </CCardHeader>
      <CCardBody>
        <CListGroup>
          <CListGroupItem className="justify-content-between">
            CASH
            <CBadge className="float-right" shape="pill" color="primary">21,234.00</CBadge>
          </CListGroupItem>
          <CListGroupItem className="justify-content-between">
            CREDIT
            <CBadge className="float-right" shape="pill" color="primary">1,000,000.00</CBadge>
          </CListGroupItem>
          <CListGroupItem className="justify-content-between">
            CHECK
            <CBadge className="float-right" shape="pill" color="primary">1,000,000.00</CBadge>
          </CListGroupItem>
          <CListGroupItem className="justify-content-between">
            TOTAL
            <CBadge className="float-right" shape="pill" color="primary">23,000,000.00</CBadge>
          </CListGroupItem>
        </CListGroup>
      </CCardBody>
    </CCard>

  </CCol>

  </CRow>


  <CRow>
  <CCol sm="12" xl="6">
    <CCard>
      <CCardHeader>
        OUTSTANDING STATUS
        <small> </small>
      </CCardHeader>
      <CCardBody>
        <CListGroup>
          <CListGroupItem className="justify-content-between">
            THIS MONTH A/C
            <CBadge className="float-right" shape="pill" color="danger">21,234.00</CBadge>
          </CListGroupItem>
          <CListGroupItem className="justify-content-between">
            THIS
            <CBadge className="float-right" shape="pill" color="danger">1,000,000.00</CBadge>
          </CListGroupItem>
          <CListGroupItem className="justify-content-between">
            CHECK
            <CBadge className="float-right" shape="pill" color="danger">1,000,000.00</CBadge>
          </CListGroupItem>
          <CListGroupItem className="justify-content-between">
            TOTAL
            <CBadge className="float-right" shape="pill" color="danger">23,000,000.00</CBadge>
          </CListGroupItem>
        </CListGroup>
      </CCardBody>
    </CCard>

  </CCol>

  <CCol sm="12" xl="6">
  <CCard>
    <CCardHeader>
      LAST MONTH DETAILS
      <small> </small>
    </CCardHeader>
    <CCardBody>
      <CListGroup>
        <CListGroupItem className="justify-content-between">
          CASH
          <CBadge className="float-right" shape="pill" color="primary">21,234.00</CBadge>
        </CListGroupItem>
        <CListGroupItem className="justify-content-between">
          CREDIT
          <CBadge className="float-right" shape="pill" color="primary">1,000,000.00</CBadge>
        </CListGroupItem>
        <CListGroupItem className="justify-content-between">
          CHECK
          <CBadge className="float-right" shape="pill" color="primary">1,000,000.00</CBadge>
        </CListGroupItem>
        <CListGroupItem className="justify-content-between">
          TOTAL
          <CBadge className="float-right" shape="pill" color="primary">23,000,000.00</CBadge>
        </CListGroupItem>
      </CListGroup>
    </CCardBody>
  </CCard>

</CCol>

</CRow>

    </div>
    )
}

export default Details
