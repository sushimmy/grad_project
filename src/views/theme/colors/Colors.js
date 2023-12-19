import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormText,
  CFormTextarea,
  CFormInput,
  CFormLabel,
  CButton,
} from '@coreui/react-pro'
const Colors = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>게시글 작성 페이지</CCardHeader>
        <CCardBody>
          <CForm>
            <CFormLabel>제목</CFormLabel>
            <CFormInput
              type="text"
              placeholder="제목을 입력하세요"
              aria-label="default input example"
            />
            <br />
            <CFormTextarea
              id="exampleFormControlTextarea1"
              label="글쓰기"
              rows={3}
              text="Must be 8-20 words long."
            ></CFormTextarea>
          </CForm>
          <br />
          <CButton>글 작성 완료</CButton>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Colors
