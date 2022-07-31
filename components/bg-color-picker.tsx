import { useState } from "react";
import { BlockPicker } from "react-color";
import { useAppContext } from "../context/state";

export default function BgColorPicker() {
  const { setBgColor }: any = useAppContext();
  const [picker, setPicker] = useState<boolean>(false);

  const selectColor = (color: any, e: any) => {
    setBgColor(color.hex);
  };

  return (
    <>
      {picker ? (
        <>
          <div className="color-picker-container">
            <BlockPicker
              onChangeComplete={(color, e) => selectColor(color, e)}
            />
          </div>
          <span style={{ cursor: "pointer" }} onClick={() => setPicker(false)}>
            <u>close x</u>
          </span>
        </>
      ) : (
        <>
          <span style={{ cursor: "pointer" }} onClick={() => setPicker(true)}>
            <u>change color</u>
          </span>
        </>
      )}
    </>
  );
}
