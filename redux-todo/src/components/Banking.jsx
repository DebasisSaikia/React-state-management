import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Banking = () => {
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const handleDeposit = () => {
    dispatch({ type: "DEPOSIT", amount: Number(amount) });
  };
  const handleWithdraw = () => {
    dispatch({ type: "WITHDRAW", amount: Number(amount) });
  };
  const handleInterest = () => {
    dispatch({ type: "COLLECT_INTEREST" });
  };
  const handleDelete = () => {
    dispatch({ type: "DELETE_ACCOUNT" });
  };
  const handleChangeAccount = () => {};

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
