import { useContext, useEffect } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Gui: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  useEffect(() => {
    /* ===== get current command ===== */
    const currentCommand = _.split(history[0], " ");

    /* ===== check current command makes redirect ===== */
    if (rerender && currentCommand[0] === "portfolio") {
      window.open("https://deeppatel.tech", "_blank");
    }
  }, [history, rerender]);

  return <span></span>;
};

export default Gui;
