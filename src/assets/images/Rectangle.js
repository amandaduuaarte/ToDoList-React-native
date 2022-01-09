import * as React from "react"
import Svg, { Rect, } from 'react-native-svg'

const RectangleSvg = (props) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={1.5}
      y={1.5}
      width={27}
      height={27}
      rx={13.5}
      stroke="#AC6DDE"
      strokeWidth={3}
    />
  </Svg>
)

export default RectangleSvg
