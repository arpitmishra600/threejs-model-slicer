import { createContext, useRef, useState } from "react";

export const Cont = createContext(null);

export default function ContextHoc({ children }) {
  const [preview, setPreview] = useState(false);
  const [disect, setDisect] = useState(false);
  const [reset, setReset] = useState(false);
  const [aniplay,setAniPlay]=useState(true)
  const [position, setPosition] = useState({
    p1: [1.5, 3, 0.5],
    p2: [1.5, 1, 0.5],
    p3: [-2, 1, 0],
    p4: [16.879 / 100, 736.109 / 100, -646.991 / 100],
    p5: [-14.588 / 100, 349.439 / 100, -1905.742 / 100],
    p6: [-1.822, 7.935, -9.449],
    p18: [0.2, 3.4, 2],
    p7: [-1.822, 7.935, -9.449],
    p8: [-1.822, 7.935, -9.449],
    p9: [-0.375, 7.657, -7.208],
    p10:[0.443, 5.679, -5.783],
    p11:[0.304, 7.612, -10.971],
    p12:[0.659, 5.634, -12.398],
    p13:[-14.301, 7.398, 9.125],
    p14:[-14.301, 7.398, 9.125],
    p15:[-7.543, -3.04, 2.515],
  });
  const initialpos = useRef({
    p1: position.p1,
    p2: position.p2,
    p3: position.p3,
    p4: position.p4,
    p5: position.p5,
    p6: position.p6,
    p18:position.p18,
    p7: position.p7,
    p8: position.p8,
    p9: position.p9,
    p10: position.p10,
    p11: position.p11,
    p12: position.p12,
    p13:position.p13,
    p14:position.p14,
    p15:position.p15,
    
  });

  return (
    <Cont.Provider
      value={{
        preview,
        setPreview,
        position,
        setPosition,
        initialpos,
        disect,
        setDisect,
        reset,
        setReset,aniplay,setAniPlay
      }}
    >
      {children}
    </Cont.Provider>
  );
}
