import React from "react"
import { styled } from "styletron-react"

const Responsive = styled("div", ({ $ratio }: any) => ({
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

export const AspectRatio = React.forwardRef(
  ({ children, ratio = 4 / 3, ...rest }: any, ref: any) => (
    <Responsive $ratio={ratio} ref={ref} {...rest}>
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
)
