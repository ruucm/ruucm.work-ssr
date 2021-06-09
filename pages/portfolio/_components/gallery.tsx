import React from "react"
import { styled } from "styletron-react"
import { breakPoint } from "../../../consts"
import { LazyLoadImage } from "./lazy-load-image"
import { LazyLoadImage2 } from "./lazy-load-image-2"

const GridWrap = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  marginTop: "30px",
  gap: "30px",
  marginBottom: "30px",
  [`@media screen and (max-width: ${breakPoint}px)`]: {
    gridTemplateColumns: "1fr",
  },
})
const Img = styled("img", {
  width: "100%",
  display: "block",
  border: "1px solid",
})
// const StyledLazyLoadImage = styled(LazyLoadImage, {
//   width: "100%",
//   display: "block",
//   border: "1px solid",
//   background: "green",
//   height: "initial",
// })

export function Gallery({ images }) {
  return (
    <GridWrap>
      {images.map((image, id) => {
        const isGif = image.includes("gif")

        if (isGif) return <Img key={id} src={image} alt="portfolio-image" />
        else
          return (
            <LazyLoadImage2
              key={id}
              imgUrl={`${image}.webp`}
              placeholderUrl={`${image}-sharp.webp`}
              fallbackUrl={`${image}-sharp.webp`}
            />
          )
      })}
    </GridWrap>
  )
}
