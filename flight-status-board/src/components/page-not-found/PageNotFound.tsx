import React from 'react'
import ErrorComponent from '../error-alert/ErrorComponent'

const PageNotFound = () => {
  return (
    <div style={{marginTop :'80px'}}>
      <ErrorComponent errMessage={"You are trying to access wrong page"}/>
    </div>
  )
}

export default PageNotFound
