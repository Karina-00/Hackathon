import React from "react";

// @ts-ignore
export default function Col({ children, size = 1 }) {
    return (<div style={{ flex: size }}>{children}</div>);
}