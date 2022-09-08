import ClipLoader from "react-spinners/ClipLoader";
import React, { useEffect, useState } from "react";
import classes from "./LoadingExpense.modal.css";

function LoadingExpense({ loading, setLoasding }) {
  const [wait, setWait] = useState(loading);
  useEffect(() => {
    setWait(true);
    setTimeout(() => {
      setWait(false);
    }, 1000);
  }, []);
  return (
    <div className={wait ? classes.modal : ""}>
      {wait ? <ClipLoader color={"blue"} loading={wait} size={35} /> : " "}
    </div>
  );
}

export default LoadingExpense;
