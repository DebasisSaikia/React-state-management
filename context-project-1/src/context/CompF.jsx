import React from "react";
import { UserContext } from "../App1";

const CompF = () => {
  return (
    <UserContext.Consumer>
      {(user) => {
        return <h1>User name is {user}</h1>;
      }}
    </UserContext.Consumer>
  );
};

export default CompF;
