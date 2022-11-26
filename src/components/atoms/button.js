import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button className="bg-amber-500 hover:bg-amber-600 py-2 px-6 rounded-full">
      <span className="font-medium">{text}</span>
    </button>
  );
}
