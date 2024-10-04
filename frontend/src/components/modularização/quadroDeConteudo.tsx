import { ReactNode } from "react";

interface ButtonProps{
  children: ReactNode
}

export function QDConteudo({ children }: ButtonProps) {
  return (
    <div className="w-[85%] relative flex flex-col gap-4 items-center">
      {children}
    </div>
  );
}