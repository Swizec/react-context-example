import React from "react";

import LockContext from "./LockContext";
import { Cell, Row } from "./Table";

const LockToggle = () => (
    <LockContext.Consumer>
        {({ locked, toggleLock }) => (
            <button onClick={toggleLock} style={{ fontSize: "1.5em" }}>
                {locked ? "Unlock" : "Lock"}
            </button>
        )}
    </LockContext.Consumer>
);

const ToggleRow = ({ n }) => (
    <Row>
        {new Array(n).fill(0).map(_ => (
            <Cell>
                <LockToggle />
            </Cell>
        ))}
    </Row>
);

export default LockToggle;
export { ToggleRow };
