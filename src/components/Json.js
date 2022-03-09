import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Json() {
  const data = useStaticQuery(graphql`
    {
      allFile {
        nodes {
          childJson {
            apples
            oranges
            bananas
          }
        }
      }
    }
  `)

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export default Json
