import React from "react";
import Screen from "./Screen";
import Lang from "./context";
import translations from "./translations";

function App() {
  return (
    <Lang defaultLang="en" translations={translations}>
      <Screen />
    </Lang>
    // 그래서 이 Screen은 Provider로부터 어떤 data던지 가져올 수 있다.
  );
}

export default App;
