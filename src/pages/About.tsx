import React from "react";
import {useDisplayMoutedOrUnMouted} from '../debug/displayMoutedOrUnMounted'

export default function About() {
  useDisplayMoutedOrUnMouted("About");

  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
