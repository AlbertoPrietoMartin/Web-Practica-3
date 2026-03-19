"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SectionContainer = ({ children }: Props) => {
  return (
    <div>
      {children}      
    </div>

  );
};