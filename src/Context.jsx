import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  return <Context.Provider>{props.children}</Context.Provider>;
}

export { ContextProvider, Context };
