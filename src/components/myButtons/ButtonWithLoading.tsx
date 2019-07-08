import isloadingHoc from "../hoc/withLoading";
import React from "react";
import Button from "@material-ui/core/Button";

const MyButton = (props: any) => {
  const { loading } = props;
  console.log("dg>> MyButton loading:", loading);
  return <Button>MyButton2</Button>;
};

const ButtonWithLoading = isloadingHoc(MyButton);

export default ButtonWithLoading;
