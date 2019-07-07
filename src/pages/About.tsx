import React from "react";
// import {useDisplayMoutedOrUnMouted} from '../debug/displayMoutedOrUnMounted'
import {useIsUnMounted} from '../debug/isUnMounted'

export default function About() {
  const isUnmounted = useIsUnMounted();
  setTimeout(() => {
    console.log("dg>> About isUnmounted", isUnmounted.current);
  }, 4000);


  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
