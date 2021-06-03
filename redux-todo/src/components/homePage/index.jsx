import React from "react";
import { useSelector } from "react-redux";

import { createSelector } from "reselect";
import { makeSelectUsers } from "./selector";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));
export const HomePage = (props) => {
  const { users } = useSelector(stateSelector);
  return (
    <div>
      <h2>home page</h2>
    </div>
  );
};
