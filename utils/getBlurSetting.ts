
type Platform = "ios" | "android" | "windows" | "macos" | "web"

export const getBlurSettings = (os: Platform): number => {
  // Could adjust blur settings more granularly per OS here
  switch (os) {
    case "android":
    case "ios":
      return 25
    default:
      return 5
  }
}