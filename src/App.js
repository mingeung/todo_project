import { useState } from "react";
import Todo from "./Todo";
import DailyDropDown from "./DailyDropDown";
import MenuDropDown from "./MenuDropDown";

function App() {
  const [DailyView, setDailyView] = useState(false);
  const [MenuView, setMenuView] = useState(false);
  return (
    <div>
      <div className="navi">
        <h1>dalpaeng todo</h1>
        <ul
          onClick={() => {
            setDailyView(!DailyView);
          }}
        >
          Daily {DailyView ? "＾" : "⌄"}
          {DailyView && <DailyDropDown />}
        </ul>

        <button>light</button>
        <ul
          onClick={() => {
            setMenuView(!MenuView);
          }}
        >
          Menu {MenuView ? "^" : "⌄"}
          {MenuView && <MenuDropDown />}
        </ul>
      </div>
      <div>타임테이블</div>
      <div className="main">
        <h1>todo</h1>
        <Todo />
      </div>
    </div>
  );
}

export default App;
