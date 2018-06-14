import React from "react";

const Table = ({ children }) => (
    <table
        style={{
            border: "1px solid black",
            width: "50%",
            margin: "0 auto"
        }}
    >
        {children}
    </table>
);

const Row = ({ children }) => (
    <tr style={{ border: "1px solid black" }}>{children}</tr>
);

const Cell = ({ children }) => (
    <td style={{ border: "1px solid red", padding: "1em" }}>{children}</td>
);

export { Table, Row, Cell };
