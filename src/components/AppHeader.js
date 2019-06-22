import React from "react";

const AppHeader = ({ done, todo }) => {
  const ends = done === 0 || done ===1 ? "" : "s";
  return (
    <div className="app-header">
      <h1>Welcome to ToDo list</h1>
      <h2>{`You have ${done} task${ends} done and ${todo} to do!`}</h2>
    </div>
  );
};
export default AppHeader;
