import React from "react";

import LockToggle, { ToggleRow } from "./LockToggle";
import LockContext from "./LockContext";
import { Table, Row, Cell } from "./Table";

class ContextualThing extends React.Component {
    state = {
        locked: false
    };

    toggleLock = () =>
        this.setState({
            locked: !this.state.locked
        });

    render() {
        const { locked } = this.state;

        return (
            <div>
                <p> This is a lock </p>
                <p style={{ fontSize: "2em" }}>
                    {locked ? <b>Locked!</b> : "Open"}
                </p>
                <LockContext.Provider
                    value={{ locked, toggleLock: this.toggleLock }}
                >
                    <Table>
                        {[1, 2, 3, 2, 1].map(n => <ToggleRow n={n} />)}
                    </Table>
                </LockContext.Provider>
            </div>
        );
    }
}

export default ContextualThing;
