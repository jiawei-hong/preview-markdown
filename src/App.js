import React, { useEffect, useState } from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkReact from 'remark-react'

function useProcessor(props) {
  const [Content, setContent] = useState('')

  useEffect(() => {
    const md = unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkReact, React)
      .processSync(props.text).result

    setContent(md)
  }, [props.text])

  return Content
}

export default function App() {
  return useProcessor()
}
