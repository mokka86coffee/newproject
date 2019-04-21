import React from 'react'
import Hoc from './Hoc'
import PropTypes from 'prop-types'

function Notification (props) {

    const { type, message } = props;

    if ( !message ) return null

    const typeChkArr = ['success', 'info', 'caution', 'error'];

    const classes = typeChkArr.includes(type)
                        ? `alert alert-${type}`
                        : `alert alert-info`

    return (
      <div className={ classes }>
        { message }
        { props.children }
      </div>
    ) 
}

Notification.propTypes = {
    message: PropTypes.string,
    type: PropTypes.oneOf(['success', 'message', 'caution', 'error'])
}

Notification.defaultProps = {
  type: '',
  message: null
}

export default Hoc(Notification);