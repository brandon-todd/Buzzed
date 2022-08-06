import React from "react";

export interface Drink {
  drinks: { [key: string]: null | string }[];
}
export interface References{
  references: React.MutableRefObject<HTMLParagraphElement | null>
}