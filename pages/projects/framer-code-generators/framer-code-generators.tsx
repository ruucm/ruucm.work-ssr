import React from "react"
import { SectionCard } from "../_components/section-card"
import { AnimateSharedLayout } from "framer-motion"
import { Summary } from "../_components/summary"
import { SubTitle } from "../_components/sub-title"
import { PostLayout } from "../../../components/post-layout"
import { YoutubeVideoGrid } from "../_components/youtube-video-grid"

export function Page({ slug }) {
  return (
    <PostLayout>
      <Summary slug={slug} />
      <YoutubeVideoGrid videos={["EpMYSzYMaEE", "npEEZecqi4g"]} />
    </PostLayout>
  )
}
