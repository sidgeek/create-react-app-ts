import React, { useEffect } from "react";
import {useDisplayMoutedOrUnMouted} from '../debug/displayMoutedOrUnMounted'

export default function Home() {
  useDisplayMoutedOrUnMouted("Home");

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
