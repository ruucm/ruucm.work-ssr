import React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { styled } from "styletron-react"
import { breakPoint } from "../../../consts"

const GridWrap = styled(motion.div, ({ $zoomed }: any) => {
  return {
    display: "grid",
    gap: "30px",
    direction: "ltr",
    alignItems: "center",
    ...getZoomStyles({ $zoomed }),
    [`@media screen and (max-width: ${breakPoint}px)`]: {
      gridTemplateColumns: "1fr",
    },
  }
})
const Description = styled("div", {
  padding: "30px 15px",

  [`@media screen and (max-width: ${breakPoint}px)`]: {
    padding: "0px",
  },
})

const defaultTransition = {
  duration: 0.36,
}

export function PortfolioSectionCard({
  img,
  title,
  description,
  grayscale = false,
  alignRight = false,
}) {
  const [zoomed, setZoomed] = useState(false)

  return (
    <GridWrap $zoomed={zoomed}>
      <Image
        img={img}
        grayscale={grayscale}
        zoomed={zoomed}
        setZoomed={setZoomed}
      />
      <Description>
        {title && (
          <>
            <motion.h4
              style={{
                textDecoration: "underline",
                display: "inline-block",
                fontWeight: 400,
              }}
              layout
              transition={defaultTransition}
            >
              {title}
            </motion.h4>
            <br />
          </>
        )}
        <motion.p layout transition={defaultTransition}>
          {description}
        </motion.p>
      </Description>
    </GridWrap>
  )
}

const Image = ({ img, grayscale, zoomed, setZoomed }) => {
  let filter = ""
  if (grayscale) filter += "grayscale(1) brightness(0.5)"
  const isGif = img.includes("gif")

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "0",
        paddingTop: "66.66%",
        cursor: zoomed ? "zoom-out" : "zoom-in",
        filter,
        // opacity: grayscale ? 0.5 : 1,
      }}
    >
      <motion.div
        animate={{ opacity: zoomed ? 1 : 0 }}
        className="shade"
        onClick={() => setZoomed(false)}
      />
      {isGif && (
        <motion.img
          src={img}
          alt=""
          onClick={() => setZoomed(!zoomed)}
          layout
          transition={defaultTransition}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            width: "100%",
            height: "100%",
            border: "1px solid",
          }}
        />
      )}
      {!isGif && (
        <picture>
          <source srcSet={`${img}.webp`} type="image/webp" />
          <source srcSet={`${img}.png`} type="image/png" />
          <source srcSet={`${img}.jpg`} type="image/jpg" />
          <source srcSet={`${img}.jpeg`} type="image/jpeg" />
          <motion.img
            src={`${img}.webp`}
            alt=""
            onClick={() => setZoomed(!zoomed)}
            layout
            transition={defaultTransition}
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              width: "100%",
              height: "100%",
              border: "1px solid",
            }}
          />
        </picture>
      )}
    </div>
  )
}

function getZoomStyles({ $zoomed }) {
  if ($zoomed) {
    return {
      gridTemplateColumns: "1fr",
    }
  } else {
    return {
      gridTemplateColumns: "2fr 3fr",
    }
  }
}
