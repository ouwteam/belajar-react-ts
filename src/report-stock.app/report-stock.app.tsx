import React from "react";
import ReactDOM from "react-dom";
import { FormFilter } from "./form-filter";
import { FormResult } from "./form-result";

class ReportStockApp extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <h1>My App</h1>

                <FormFilter />
                <hr />
                <FormResult />
            </div>
        );
    }
}

ReactDOM.render(
    React.createElement(ReportStockApp),
    document.getElementById("reportStockApp")
);