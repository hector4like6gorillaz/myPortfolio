import React, { Fragment } from "react";
import { DivParticleLeftRight, DivParticleUpDown } from "./particleStyle";

const Particle = ({ quanty }: { quanty: number }) => {
  function getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const getInitParticles = () => {
    const qtyInit = [];
    for (let i = 0; i < quanty; i++) qtyInit.push(getRandomArbitrary(1, 100));
    return qtyInit;
  };

  const getMirror = (dat: number) => {
    let value = 0;
    if (dat > 50) value = dat - 50;
    else value = dat + 50;
    return value;
  };

  const getTime = () => {
    const times = [];
    for (let i = 0; i < quanty; i++) times.push(getRandomArbitrary(1000, 7000));
    return times;
  };

  return (
    <>
      {getInitParticles().map((item: number, index: number) => {
        const isOdd = () => {
          return index % 2 === 0 ? true : false;
        };
        return (
          <Fragment key={index}>
            {isOdd() ? (
              <DivParticleUpDown
                className={`absolute w-[0.2rem] h-[0.2rem] m-auto rounded-full bg-white z-10 `}
                init={item}
                end={getMirror(item)}
                time={getTime()[index]}
              ></DivParticleUpDown>
            ) : (
              <DivParticleLeftRight
                className={`absolute w-[0.2rem] h-[0.2rem] m-auto rounded-full bg-white z-10 `}
                init={item}
                end={getMirror(item)}
                time={getTime()[index]}
              ></DivParticleLeftRight>
            )}
          </Fragment>
        );
      })}
    </>
  );
};

export default Particle;
