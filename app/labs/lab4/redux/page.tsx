"use client"

import HelloRedux from "./hello/index";
import store from "../store";
import { Provider } from "react-redux";

export default function ReduxExamples() {
    return (
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <HelloRedux />
            </div>
        </Provider>
    );
}
