import * as React from "react";
import { Link } from "react-router-dom";

interface IProps {
  name?: string;
}

const Header: React.FC<IProps> = (props: IProps) => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <h1>Hello, {props.name}! Welcome to React and TypeScript.</h1>
  </div>
);

Header.defaultProps = {
  name: "world"
};

export default Header;
