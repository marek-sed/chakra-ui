import { EnvironmentProvider } from "@chakra-ui/react-env"
import { chakra } from "@chakra-ui/system"
import * as React from "react"
import Frame from "react-frame-component"
import { Hide, Show, useBreakpoint, useBreakpointValue } from "../src"

export default {
  title: "System / Breakpoints",
}

export const show = () => (
  <Show above="sm">
    <div>Hey! I'll show above sm (480px)</div>
  </Show>
)

export const hide = () => (
  <Hide below="md">
    <div>Hallos! I'll hide below 768px</div>
  </Hide>
)

export const HideWithQuery = () => (
  <Hide breakpoint="(max-width: 400px)">
    <div>Hallos! I'll be hide at 400px</div>
  </Hide>
)

export const ShowWithQuery = () => (
  <Show breakpoint="(max-width: 400px)">
    <div>Hallos! I'll be show at 400px</div>
  </Show>
)

export const BreakpointHook = () => {
  const breakpoint = useBreakpoint()
  const isMobile = breakpoint === "sm" || breakpoint === "xs"
  return (
    <code style={{ fontSize: isMobile ? 15 : 30 }}>
      The current breakpoint is {JSON.stringify(breakpoint, null, 2)}!
    </code>
  )
}

export const BreakpointValueHook = () => {
  const width = useBreakpointValue({ base: "150px", md: "250px" })
  const color = useBreakpointValue(["red.500", undefined, "green.500"])
  return (
    <chakra.div bg={color} mx="auto" width={width}>
      I'm {width} wide
    </chakra.div>
  )
}

export const BreakpointHookWithIFrame = () => {
  return (
    <>
      <BreakpointValue />
      <Frame style={{ background: "yellow", maxWidth: "600px", width: "100%" }}>
        <EnvironmentProvider>
          <BreakpointValue />
        </EnvironmentProvider>
      </Frame>
    </>
  )
}

const BreakpointValue = () => {
  const breakpoint = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  })
  return <p>Breakpoint: {breakpoint}</p>
}
