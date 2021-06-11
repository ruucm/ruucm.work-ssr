import React from "react"
import { styled } from "styletron-react"

const Responsive = styled("div", ({ $ratio }) => ({
  position: "relative",
  width: "100%",
  height: "0px",
  paddingTop: `${(1 / $ratio) * 100}%`,
}))

const Positioning = styled("div", {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
})

export function AspectRatio({ children, ratio = 4 / 3, $ref, ...rest }) {
  return (
    <Responsive $ratio={ratio} ref={$ref} {...rest}>
      <Positioning>
        {React.cloneElement(children, {
          style: {
            width: "100%",
            height: "100%",
          },
        })}
      </Positioning>
    </Responsive>
  )
}
