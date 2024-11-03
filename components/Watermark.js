import {
  motion,
  cubicBezier,
  easeInOut,
  backInOut,
  circInOut,
  anticipate,
  linear,
  steps,
} from "framer-motion";
import { interpolate } from "flubber";

function Watermark({
  mouseX,
  mouseY,
  animate,
  initial,
  transition,
  docX,
  docY,
}) {
  const svgInitial = [
    [541.403, 2.29428],
    [540.705, 1.5959],
    [384.041, 158.26],
    [371.544, 170.757],
    [351.283, 170.757],
    [338.786, 158.26],
    [182.121, 1.59585],
    [181.414, 2.303],
    [180.707, 1.59588],
    [0, 182.303],
    [157.373, 339.676],
    [169.869, 352.172],
    [169.869, 372.434],
    [157.373, 384.93],
    [0, 542.303],
    [180.707, 723.01],
    [181.414, 722.303],
    [182.121, 723.01],
    [338.786, 566.346],
    [351.282, 553.849],
    [371.544, 553.849],
    [384.04, 566.346],
    [540.704, 723.01],
    [541.403, 722.311],
    [542.102, 723.01],
    [722.809, 542.303],
    [565.436, 384.93],
    [552.94, 372.434],
    [552.94, 352.172],
    [565.436, 339.675],
    [722.809, 182.303],
    [542.102, 1.5959],
    [541.403, 2.29428],
  ];

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className="watermark-container"
      style={{
        maskPosition: `${docX - window.innerWidth / 2}px ${
          docY - window.innerHeight / 2
        }px`,
      }}
    >
      <span
        className="watermark"
        style={{
          backgroundPosition: `${mouseX}px ${mouseY}px`,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <defs>
            <pattern
              id="customPattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            ></pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#customPattern)" />
        </svg>
      </span>
    </motion.div>
  );
}

export default Watermark;
