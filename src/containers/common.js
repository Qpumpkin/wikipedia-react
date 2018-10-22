import React from 'react'
import { connect } from 'react-redux'

import Message from '@/components/message'

const Common = props => {
  const { message } = props
  return (
    <div className="common">
      <Message message={message} />
    </div>
  )
}

const mapState = state => ({
  message: state.commons.message
})

export default connect(mapState)(Common)