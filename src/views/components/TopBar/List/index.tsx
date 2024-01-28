import React, { PropsWithChildren } from "react";
import { TopBarStyle } from "./style";

export default function List({ children }: PropsWithChildren) {
  return (
    <>
      {/* @ts-ignore */}
      <ul style={TopBarStyle}>{children}</ul>
    </>
  );
}

// 'ReactDOM.hydrate' should only be used when the component importing it is being rendered by the REF.
// In this case, this component is going to be used inside dynamic components only.
// As such, we should not hydrate it.
