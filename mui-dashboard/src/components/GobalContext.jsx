import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const GobalContext = ({ children }) => {
  const [menuToggle, setMenuToggle] = useState(false)
  console.log(menuToggle)

  function menuBarToggle() {
    setMenuToggle(!menuToggle)
  }
  return (
    <MyContext.Provider value={{ menuToggle, setMenuToggle, menuBarToggle }}>
      {children}
    </MyContext.Provider>
  )
}
