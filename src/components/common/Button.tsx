import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
};

export default function Button({
  children,
  href = "#",
}: Props) {

  return (
    <a
      href={href}
      className="
      inline-flex
      items-center
      justify-center
      px-7
      py-3
      rounded-xl
      bg-cyan-500
      text-black
      font-semibold
      hover:bg-cyan-400
      transition
      "
    >
      {children}
    </a>
  );
}