import React from "react"
import { Layout } from "../../../components"
import { PortfolioSectionCard } from "../_components/portfolio-section-card"
import { AnimateSharedLayout } from "framer-motion"
import { SubTitle } from "../_components/sub-title"
import { Summary } from "../_components/summary"

export function Page({ slug }) {
  return (
    <Layout>
      <Summary slug={slug} />
      <AnimateSharedLayout>
        <SubTitle>Education Content Experience</SubTitle>
        <div
          style={{
            display: "grid",
            gap: 30,
          }}
        >
          <PortfolioSectionCard
            img={"/images/problem-youtube"}
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
          <PortfolioSectionCard
            img={"/images/solution-video-explorer.gif"}
            title="[Solution] - Video Explorer"
            description={`So I started develop a new UI called "Video Explorer". I combines good
      points of video and post at the same time. It includes whole proccess
      of tutorial to make the results, and user can find information quickly
      like the blog posts.`}
          />
        </div>

        <SubTitle>Internal Student Management System</SubTitle>
        <div
          style={{
            display: "grid",
            gap: 30,
          }}
        >
          <PortfolioSectionCard
            img={"/images/problem-students-management"}
            title="[Problems] - Seperated CRM and Student Managements"
            description={`I had to offer CRM(Customer relationship management) with student's achievement dashboard.`}
            // grayscale
            // alignRight
          />

          <PortfolioSectionCard
            img={"/images/solution-students-management"}
            title="[Solution] - Student Management System"
            description={`And I need to collect latest resources for students. But we had only one
            junior developer and me with limited time.
            I started to find the fastest and reliable method for that
            problem.`}
            // alignRight
          />
        </div>
      </AnimateSharedLayout>
    </Layout>
  )
}
