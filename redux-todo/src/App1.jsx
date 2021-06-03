import React from "react";
import AccountStatus from "./components/AccountStatus";
import Auth from "./components/Auth";
import Balance from "./components/Balance";
import Banking from "./components/Banking";

const App1 = () => {
  return (
    <div className="form_group">
      <Auth />
      <AccountStatus />
      <Banking />
      <Balance />
    </div>
  );
};

export default App1;
