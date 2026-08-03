import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: Props) {

  return (
    <div
      className={`
      bg-white/5 
      border 
      border-white/10 
      rounded-2xl 
      p-6
      backdrop-blur
      hover:border-cyan-400/40
      transition
      ${className}
      `}
    >
      {children}
    </div>
  );
}