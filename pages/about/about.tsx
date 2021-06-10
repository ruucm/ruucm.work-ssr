import React from "react"
import { Layout } from "../../components"
import { useESMComponent } from "../../hooks/use-esm-component"
import { styled } from "styletron-react"
import { breakPoint, contactMail } from "../../consts"
import { useClipboard } from "../../hooks/use-clipboard"
import { HoverText } from "../../components/hover-text"

const Wrap = styled("div", {
  maxWidth: "720px",
})

const ParagraphWithImage = styled("div", {
  display: "flex",
  alignItems: "center",
  marginBottom: "var(--blockSpacingBottom)",
  [`@media screen and (max-width: ${breakPoint}px)`]: {
    flexWrap: "wrap-reverse",
  },
})

const ProfileWrap = styled("div", {
  paddingLeft: "16px",

  [`@media screen and (max-width: ${breakPoint}px)`]: {
    padding: "16px",
  },
})
const P = styled("p", {
  marginBottom: "0px",
})

const Email = styled("span", {
  color: "blue",
  cursor: "pointer",
  display: "inline-block",
})
const Twitter = styled("a", {
  color: "blue",
})

export function Page() {
  const Module3: any = useESMComponent(
    "https://framerusercontent.com/modules/5EaLh0KVaiYgE67ROHLy/2kSwOAlvLpDNdFUntSDL/JgWSPuRfa.js"
  )
  console.log("Module3", Module3)
  const StyledModule = styled(Module3, {
    cursor: "pointer",
  })
  const { hasCopied, onCopy } = useClipboard(contactMail)

  return (
    <Layout>
      <Wrap>
        <h3>About</h3>
        <p>
          My name is{" "}
          <HoverText
            as={"span"}
            normal={"Yongmin Ji"}
            hovered={"지 용민"}
          ></HoverText>
          , and ruucm is my prefered nick name. I've used to this nickname from
          2010~. And you can pronounce it as "ro͝om".
          <br />I like screens and pixels. I love how people can react and
          explore these worlds with their eyes and hands and ears, sharing it to
          others.
        </p>
        <ParagraphWithImage>
          <P>
            My story starts from making a simple android socket during the army
            services. It directly inspires me and gives me a sight of the
            internet world. I studied programming start from there.
            <br />
            <br />
            After the army services, I worked as a freelancer with designers as
            a wordpress developer. I enjoyed building pixel-perfect HTML & CSS
            works and making a productive way in terms of maintenance homepage.
            I created several wordpress plugins to make web pages and
            functionalities easily.
          </P>

          <ProfileWrap>
            <StyledModule />
          </ProfileWrap>
        </ParagraphWithImage>

        <p>
          Then I met Framer. It broads my view of a lot of web worlds and
          designs. I made Harbor School and started to solve the pains of
          designers when they work with developers. So I've been teaching codes
          to designers in Harbor School, and sometimes I made a tool for them.
          <br />
          <br />
          I built Lighthouse Design System in this period. With the system, I
          can integrate the whole design and develop working processes
          seamlessly from the single truth of sources.
          <br />
          <br />
          I deeply understand each position of designer and engineer and have a
          passion for reducing the gap between resulting better products.
          <br />
          <br />I believe screens are everywhere and have more importance in our
          lives. So careful thoughts and toolings for the creators of the
          screens are essential, like making neat controllers for spaceship
          pilots to Mars.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Email onClick={onCopy}>
            Email ─ {hasCopied ? "copied" : contactMail}
          </Email>
          <Twitter
            href="http://twitter.com/ruucm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter ─ @ruucm
          </Twitter>
        </div>
      </Wrap>
    </Layout>
  )
}
