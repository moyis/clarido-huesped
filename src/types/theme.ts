export type Theme = "light" | "dark" | "violet" | "blue" | "green" | "red" | "pink" | "orange" | "copper";
export type FontPreset = "modern" | "elegant" | "grotesk";
export const THEMES = ["light","dark","violet","blue","green","red","pink","orange","copper"] as const;

export function isTheme(x: unknown): x is Theme {
  return typeof x === "string" && (THEMES as readonly string[]).includes(x);
}