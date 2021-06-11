import React from "react"
import { SectionCard } from "../_components/section-card"
import { AnimateSharedLayout } from "framer-motion"
import { SubTitle } from "../_components/sub-title"
import { Summary } from "../_components/summary"
import { styled } from "styletron-react"
import { PostLayout } from "../../../components/post-layout"
import { YoutubeVideoGrid } from "../_components/youtube-video-grid"

const Grid = styled("div", {
  display: "grid",
  gap: "30px",
})

export function Page({ slug }) {
  return (
    <PostLayout>
      <Summary slug={slug} />
      <YoutubeVideoGrid videos={["KIbAXnuXyd0", "nSxBeopwA7E"]} />
      <AnimateSharedLayout>
        <SubTitle>Education Content Experience</SubTitle>
        <Grid>
          <SectionCard
            imageName={"problem-youtube"}
            title="[Problems] - Bad Education Content Experience"
            description={`I learn programming and design by myself with youtube videos and blog
        posts. But as a learner's view, there are solid problem on both side.
        On video side, it is always difficult to jump the point directly you
        want. If you find a just example line of code, watching video could be
        terrible experiences. On post side, it is easy to find information but
        sometimes post author could skip contents that makes students take a
        ton of times for finding why their project don't excuted like the
        post.`}
            // grayscale
          />
          <SectionCard
            videoInfo={{
              path: "/videos/harbor.school-02.mov",
              ratio: 3584 / 2190,
            }}
            isZoomed
            title="[Solution] - Video Explorer"
            description={`So I started develop a new UI called "Video Explorer". I combines good
      points of video and post at the same time. It includes whole proccess
      of tutorial to make the results, and user can find information quickly
      like the blog posts.`}
          />
        </Grid>

        <SubTitle>Internal Student Management System</SubTitle>
        <Grid>
          <SectionCard
            imageName={"problem-students-management"}
            title="[Problems] - Seperated CRM and Student Managements"
            description={`I had to offer CRM(Customer relationship management) with student's achievement dashboard.`}
            // grayscale
            // alignRight
          />

          <SectionCard
            imageName={"solution-students-management"}
            title="[Solution] - Student Management System"
            description={`And I need to collect latest resources for students. But we had only one
            junior developer and me with limited time.
            I started to find the fastest and reliable method for that
            problem.`}
            // alignRight
          />
        </Grid>
      </AnimateSharedLayout>
    </PostLayout>
  )
}
