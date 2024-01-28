import React, { PropsWithChildren, useState } from "react";
import { TopBarItemStyle, TopBarItemClickable } from "./style";

function Clickable({
  children,
  onClick,
  active,
}: PropsWithChildren & { onClick: () => void; active?: boolean }) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <a
      // @ts-ignore
      style={{
        ...TopBarItemClickable,
        backgroundColor: active ? "#04AA6D" : hover ? "#111" : "#333",
      }}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </a>
  );
}

export default function Button({
  children,
  active,
  onClick,
}: PropsWithChildren & { onClick?: () => void; active?: boolean }) {
  return (
    <>
      {/* @ts-ignore */}
      <li style={TopBarItemStyle}>
        <Clickable active={active} onClick={() => (onClick ? onClick() : "")}>
          {children}
        </Clickable>
      </li>
    </>
  );
}

// 'ReactDOM.hydrate' should only be used when the component importing it is being rendered by the REF.
// In this case, this component is going to be used inside dynamic components only.
// As such, we should not hydrate it.
