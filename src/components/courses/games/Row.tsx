import React from "react";

// @ts-ignore
export default function Row({ children }) {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>{children}</div>
);
}
