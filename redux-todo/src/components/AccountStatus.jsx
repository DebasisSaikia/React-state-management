import React from "react";
import { useSelector } from "react-redux";

const AccountStatus = () => {
  const isSaving = useSelector((state) => state.isSaving);
  return (
    <div>
      <h1>{isSaving ? "Saving Accounts" : "Current Account"}</h1>
    </div>
  );
};

export default AccountStatus;
