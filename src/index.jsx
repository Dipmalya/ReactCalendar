import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";

ReactDOM.render(
    <div>
        <Main
            currentDate="2021-03-01"
            lastDate="2021-09-12"
        />
    </div>,
    document.getElementById("app"),
);

module.hot.accept();
