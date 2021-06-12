import React from "react"
import { useState } from "react"
import { Card, Layout } from "../../components"
import { availableTags, cardDatas } from "../../consts"
import { AnimateSharedLayout, AnimatePresence } from "framer-motion"
import { styled } from "styletron-react"
import { getUrlParams, removeA } from "../../utils"

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  rowGap: "var(--row-gap)",
})

const Tags = styled("div", {
  textAlign: "right",
  marginBottom: "var(--blockSpacingBottom)",
  whiteSpace: "nowrap",
})

const Tag = styled("em", ({ $active }: any): any => {
  return {
    position: "relative",
    textDecoration: "none",
    cursor: "pointer",
    marginLeft: "10px",
    "::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "1px",
      bottom: 0,
      left: 0,
      backgroundColor: "blue",
      // TODO: It only works when there is page routing. (eg - http://localhost:5000/projects?tags=designers not render classes correctly)
      visibility: $active ? "visible" : "hidden",
      transform: $active ? "scaleX(1)" : "scaleX(0)",
    },
  }
})

const allTags = [...availableTags] // Make a new array. it stays as same value, after updatin states.

export function Page({ urlParsed: { search } }) {
  const tagsFromServer = search?.tags
  const tagsFromBrowser = getUrlParams()?.tags?.split(",")

  const [tags, setTags] = useState(
    tagsFromServer || // server prop not works on SSG
      tagsFromBrowser ||
      availableTags
  )

  return (
    <Layout home>
      <h3>Projects</h3>
      <p>
        I'm making projects and experiments for productivity and pleasure in
        screens.
      </p>
      <br />
      <br />
      <br />
      <AnimateSharedLayout>
        <Tags>
          {allTags.map((tag, id) => (
            <Tag
              key={id}
              $active={tags.includes(tag)}
              onClick={() =>
                setTags(
                  tags.includes(tag) ? removeA(tags, tag) : [...tags, tag]
                )
              }
            >
              {tag}
            </Tag>
          ))}
        </Tags>

        <Grid>
          {cardDatas.map((item: any, id) => (
            <AnimatePresence key={id} initial={false}>
              {tagFilter(tags, item) && (
                <Card
                  title={item.title}
                  duration={item.duration}
                  description={item.description}
                  outlink={item.outlink}
                  slug={item.slug}
                  // link={item.key && `/projects/${item.key}`}
                  tags={item.tags}
                />
              )}
            </AnimatePresence>
          ))}
        </Grid>
      </AnimateSharedLayout>
    </Layout>
  )
}

function tagFilter(tags, item) {
  for (let i = 0; i < item.tags.length; i++) {
    const tag = item.tags[i]
    if (tags.includes(tag)) return true
  }
}
