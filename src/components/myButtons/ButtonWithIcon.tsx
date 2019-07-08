import React from "react";
import withIcon from "../hoc/withIcon";
import FollowedIcon from "@material-ui/icons/GradeOutlined";
import IconButton from "@material-ui/core/IconButton";

const MyButton = ({ ...props }) => {
  return <IconButton {...props} />;
};

const ButtonWithIcon = withIcon(MyButton, FollowedIcon);

export default ButtonWithIcon;
