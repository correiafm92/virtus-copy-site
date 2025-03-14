
import React from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
}

const TypewriterText = ({
  text,
  className = ""
}: TypewriterTextProps) => {
  return (
    <div className={`font-typewriter ${className}`} style={{ whiteSpace: "pre-wrap" }}>
      {text}
    </div>
  );
};

export default TypewriterText;
