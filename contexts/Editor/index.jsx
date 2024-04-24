"use client";
import { createContext, useContext, useState } from "react";

export const EditorContext = createContext();

export function EditorProvider({ children }) {
  const [data, setData] = useState("");

  const value = {
    data,
    setData,
  };

  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
}

export const useEditor = () => useContext(EditorContext);
