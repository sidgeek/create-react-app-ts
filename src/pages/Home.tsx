import React from "react";
// import {useDisplayMoutedOrUnMouted} from '../debug/displayMoutedOrUnMounted'
import ButtonWithLogger from "../components/myButtons/ButtonWithLogger";
import ButtonWithLoading from "../components/myButtons/ButtonWithLoading";
import ButtonWithData from "../components/myButtons/ButtonWithData";
import ButtonWithIcon from "../components/myButtons/ButtonWithIcon";
import ButtonWIthColorPick from "../components/myButtons/ButtonWIthColorPick";

export default function Home() {
  const onButton1Click = () => {
    console.log("dg>> onButton1Click");
  };

  const onButton2Click = () => {
    console.log("dg>> onButton2Click");
  };

  return (
    <div>
      <h2>Home</h2>
      {/* <MyButton /> */}
      {/* <MyButton isloading={true} /> */}
      {/* <ButtonWithLogger /> */}
      <ButtonWithLoading loading={false} onClick={onButton1Click} />
      <ButtonWithIcon iconChoose={false} onClick={onButton2Click} />
      <ButtonWIthColorPick />
      {/* <ButtonWithData /> */}
    </div>
  );
}
