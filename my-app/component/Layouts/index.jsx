import MenuTabs from "../../component/Layouts/MenuTabs";
import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { contextBackground } from "./dataSources/contextBackground";

export const NumberContext = React.createContext();
const LayoutComponent = () => {
  const [state, setState] = useState(contextBackground.react);
  const [preventChangeContext, setPreventChangeContext] = useState(false);
  const changeContext = () => {
    document
      .getElementById("hihi")
      .classList.remove(`${style.elementToFadeInAndOut}`);
    setTimeout(() => {
      document
        .getElementById("hihi")
        .classList.add(`${style.elementToFadeInAndOut}`);
      switch (state.value) {
        case "react":
          setState(contextBackground.javascript);
          break;
        case "javascript":
          setState(contextBackground.nextJs);
          break;
        case "nextJs":
          setState(contextBackground.htmlCss);
          break;
        case "htmlCss":
          setState(contextBackground.react);
          break;
        default:
          break;
      }
    }, 200);
  };
  const hoverChange = (item) => {
    // console.log("item",item);
    document
      .getElementById("hihi")
      .classList.remove(`${style.elementToFadeInAndOut}`);
    setTimeout(() => {
      document
        .getElementById("hihi")
        .classList.add(`${style.elementToFadeInAndOut}`);
      // console.log("item",item.value);
      switch (item.value) {
        case "javascript":
          setState(contextBackground.javascript);
          break;
        case "react":
          setState(contextBackground.react);
          break;
        case "nextJs":
          setState(contextBackground.nextJs);
          break;
        case "htmlCss":
          setState(contextBackground.htmlCss);
          break;
        default:
          break;
      }
    }, 200);
  };
  useEffect(() => {
    const clearChange = setInterval(() => {
      if (!preventChangeContext) {
        changeContext();
      }
    }, 5000);

    return () => {
      clearInterval(clearChange);
    };
  }, [state, preventChangeContext]);
  return (
    <NumberContext.Provider value={{ context: state, hoverChange }}>
      <div
        id="hihi"
        className={style.bgAll}
        style={{ background: state.background }}
      ></div>
      <div className={style.all}>
        <MenuTabs setPreventChangeContext={setPreventChangeContext} />
      </div>
    </NumberContext.Provider>
  );
};
export default LayoutComponent;
