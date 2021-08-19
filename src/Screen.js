import React from "react";
import { useSetLang, useT } from "./context";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const setLang = useSetLang();
  const t = useT();
  return (
    <>
      <h1>{t("Hello!")}</h1>
      <button onClick={() => setLang("es")}>Translate</button>
    </>
  );
};
