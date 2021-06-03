import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deposit,
  withdraw,
  deleteAccount,
  collectInterest,
  toggleAccount,
} from "./actions/bankingActions";

const Banking = () => {
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const handleDeposit = () => {
    dispatch(deposit(amount));
  };
  const handleWithdraw = () => {
    dispatch(withdraw(amount));
  };
  const handleInterest = () => {
    dispatch(collectInterest());
  };
  const handleDelete = () => {
    dispatch(deleteAccount());
  };
  const handleChangeAccount = () => {
    dispatch(toggleAccount());
  };

  return (
    <div className="form_group">
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="text"
        name="account"
        id="account"
      />
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>withdraw</button>
      <button onClick={handleInterest}>Collect interest</button>
      <button onClick={handleDelete}>delete Account</button>
      <button onClick={handleChangeAccount}>Change account type</button>
    </div>
  );
};

export default Banking;
