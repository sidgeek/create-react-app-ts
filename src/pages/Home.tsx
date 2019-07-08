import React from "react";
// import {useDisplayMoutedOrUnMouted} from '../debug/displayMoutedOrUnMounted'
import ButtonWithLogger from "../components/myButtons/ButtonWithLogger";
import ButtonWithLoading from "../components/myButtons/ButtonWithLoading";
import ButtonWithData from "../components/myButtons/ButtonWithData";
import ButtonWithIcon from "../components/myButtons/ButtonWithIcon";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      {/* <MyButton /> */}
      {/* <MyButton isloading={true} /> */}
      {/* <ButtonWithLogger /> */}
      {/* <ButtonWithLoading /> */}
      <ButtonWithIcon />
      {/* <ButtonWithData /> */}
    </div>
  );
}
