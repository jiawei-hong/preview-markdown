function Preview(props) {
  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkReact, React)
    .processSync(props.text).result

  return md
}

export default Preview
