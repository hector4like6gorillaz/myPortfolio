import React, { useRef } from "react";
import Lottie from "react-lottie";

const LottiLoader = ({
  width,
  height,
  lottieFile,
  loop = true,
  autoplay = true,
  speed = 1,
}: {
  width: number;
  height: number;
  lottieFile: any;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
}) => {
  const defaultOptions = {
    loop: loop,
    autoplay: autoplay,
    animationData: lottieFile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      style={{ cursor: "auto" }}
      height={width}
      width={height}
      isStopped={false}
      isPaused={false}
      speed={speed}
      isClickToPauseDisabled={true}
    />
  );
};

export default LottiLoader;
