import React from "react";

export default function FilterItem({ item, itemHandler, text }) {
  return (
    <li>
      {item ? "✅ " : "❌ "}
      <a onClick={() => itemHandler(!item)}>{text}</a>
    </li>
  );
}
