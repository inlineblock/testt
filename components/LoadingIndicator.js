import React from "react";
import style9 from "style9";

const animationName = style9.keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

const styles = style9.create({
  root: {
    margin: "20px",
    position: "relative",
    borderTop: "1.1em solid rgba(255, 255, 255, 0.2)",
    borderRight: "1.1em solid rgba(255, 255, 255, 0.2)",
    borderBottom: "1.1em solid rgba(255, 255, 255, 0.2)",
    borderLeft: "1.1em solid var(--primary-color)",
    transform: "translateZ(0)",
    animationName: animationName,
    animationDuration: "1.1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    borderRadius: "50%",
    width: "5em",
    height: "5em",
    ":after": {
      borderRadius: "50%",
      width: "5em",
      height: "5em",
    },
  },
  absolute: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: "-2.5em",
    marginTop: "-2.5em",
  },
});

export default function LoadingIndicator({absolute = false}) {
  return <div className={style9(styles.root, absolute && styles.absolute)} />;
}
