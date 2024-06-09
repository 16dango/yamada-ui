import type { ComponentMultiStyle } from "@yamada-ui/core"
import { shadeColor, tintColor } from "@yamada-ui/utils"

export const Slider: ComponentMultiStyle = {
  baseStyle: {
    container: ({ orientation: o }) => ({
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      _readOnly: { cursor: "auto" },
      _disabled: {
        opacity: 0.6,
        cursor: "not-allowed",
      },
      ...(o === "vertical" ? { h: "100%" } : { w: "100%" }),
    }),
    track: {
      overflow: "hidden",
      rounded: "sm",
      bg: "border",
      _disabled: {
        bg: ["blackAlpha.200", "whiteAlpha.400"],
      },
    },
    filledTrack: ({ colorScheme: c = "primary" }) => ({
      w: "inherit",
      h: "inherit",
      bg: [`${c}.500`, `${c}.400`],
    }),
    mark: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "sm",
    },
    thumb: ({ theme: t, colorMode: m, orientation: o }) => ({
      position: "absolute",
      zIndex: "yamcha",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: 0,
      rounded: "full",
      bg: "white",
      boxShadow: "base",
      border: "1px solid",
      borderColor: "transparent",
      transitionProperty: "transform",
      transitionDuration: "normal",
      _focusVisible: {
        boxShadow: "outline",
      },
      _disabled: {
        bg: [tintColor("black", 72)(t, m), shadeColor("white", 64)],
      },
      ...(o === "vertical"
        ? {
            left: "50%",
            transform: `translateX(-50%)`,
            _active: {
              transform: `translateX(-50%) scale(1.15)`,
            },
          }
        : {
            top: "50%",
            transform: `translateY(-50%)`,
            _active: {
              transform: `translateY(-50%) scale(1.15)`,
            },
          }),
    }),
  },

  sizes: {
    sm: ({ orientation: o }) => ({
      track: o === "vertical" ? { w: "0.5" } : { h: "0.5" },
      thumb: { boxSize: "2.5" },
      mark: o === "vertical" ? { ml: "2" } : { mt: "2" },
    }),
    md: ({ orientation: o }) => ({
      track: o === "vertical" ? { w: "1" } : { h: "1" },
      thumb: { boxSize: "3.5" },
      mark: o === "vertical" ? { ml: "3" } : { mt: "3" },
    }),
    lg: ({ orientation: o }) => ({
      track: o === "vertical" ? { w: "1.5" } : { h: "1.5" },
      thumb: { boxSize: "5" },
      mark: o === "vertical" ? { ml: "4" } : { mt: "4" },
    }),
  },

  defaultProps: {
    size: "md",
    colorScheme: "primary",
  },
}
