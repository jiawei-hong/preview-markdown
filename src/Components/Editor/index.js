import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

function Editor(props) {
  return (
    <textarea
      defaultValue={props.doc}
      className="input"
      onChange={props.onChange}
    ></textarea>
  )
}

Editor.propTypes = {
  doc: PropTypes.string,
  onChange: PropTypes.func,
}

export default Editor
