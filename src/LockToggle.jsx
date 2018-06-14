import React from "react";

import LockContext from "./LockContext";

const LockToggle = () => (
    <LockContext.Consumer>
        {({ locked, toggleLock }) => (
            <button onClick={toggleLock}>{locked ? "Unlock" : "Lock"}</button>
        )}
    </LockContext.Consumer>
);

export default LockToggle;
