import React from "react";

import LockToggle from "./LockToggle";
import LockContext from "./LockContext";
import { Table, Row, Cell } from "./Table";

class ContextualThing extends React.Component {
    state = {
        locked: false,
        toggleLock: () =>
            this.setState({
                locked: !this.state.locked
            })
    };

    render() {
        const { locked } = this.state;

        return (
            <div>
                <p> This is a lock </p>
                <p>{locked ? <b>Locked!</b> : "Open"}</p>
                <LockContext.Provider value={this.state}>
                    <Table>
                        <Row>
                            <Cell>
                                <LockToggle />
                            </Cell>
                        </Row>
                        <Row>
                            <Cell>
                                <LockToggle />
                            </Cell>
                            <Cell>
                                <LockToggle />
                            </Cell>
                        </Row>
                    </Table>
                </LockContext.Provider>
            </div>
        );
    }
}

export default ContextualThing;
