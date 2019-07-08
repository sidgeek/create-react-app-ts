import React from "react";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

const withIcon = <P extends object>(
  Component: React.ComponentType<P>,
  SvgIcon: React.ComponentType<SvgIconProps>
): React.FC<P> => ({ ...props }) => {
  console.log("dg>> props:", props);
  console.log("dg>> SvgIcon:", SvgIcon);
  console.log("dg>> Component:", Component);
  return (
    <Component {...props as P}>
      <SvgIcon />
    </Component>
  );
};
export default withIcon;
