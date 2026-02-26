"use client"

import store from "../store";
import { Provider } from "react-redux";
import HelloRedux from "./hello/index";
import CounterRedux from "./CounterRedux/index";

export default function ReduxExamples() {
    return (
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <HelloRedux />
                <CounterRedux />
            </div>
        </Provider>
    );
}
