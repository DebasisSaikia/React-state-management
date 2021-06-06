import React from "react";
import CompF from "./CompF";
import { UserContext, TitleContext } from "../App1";
import { useContext } from "react";

const CompE = () => {
  const user = useContext(UserContext);
  const title = useContext(TitleContext);
  return (
    <div>
      <h1>
        {user} - {title}
      </h1>
    </div>
  );
};

export default CompE;
