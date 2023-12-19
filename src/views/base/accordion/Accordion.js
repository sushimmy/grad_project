import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react-pro'
import { DocsCallout, DocsExample } from 'src/components'

const Accordion = () => {
  return (
    <CCard>
      <CCardHeader>My Information</CCardHeader>
      <CCardBody></CCardBody>
      <CCardHeader>내가 스크랩한 글</CCardHeader>
      <CCardBody></CCardBody>
    </CCard>
  )
}

export default Accordion
