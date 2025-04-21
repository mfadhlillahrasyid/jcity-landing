// src/types/global.d.ts
export {};

declare global {
  interface Window {
    fbq: {
      (command: "init", id: string): void;
      (command: "track", event: string): void;
      (command: "track", event: string, parameters: Record<string, unknown>): void;
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      push?: (...args: unknown[]) => void;
      loaded?: boolean;
      version?: string;
    };
  }
}
