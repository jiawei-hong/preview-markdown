import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkReact from 'remark-react'
import './index.css'
import 'github-markdown-css/github-markdown-light.css'

function Preview(props) {
  const [md, setMd] = useState('')

  useEffect(() => {
    setMd(
      unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkReact, React)
        .processSync(props.doc).result
    )
  }, [props.doc])

  return <div className="preview markdown-body">{md}</div>
}

Preview.propTypes = {
  doc: PropTypes.string,
}

export default Preview
