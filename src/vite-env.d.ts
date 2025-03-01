
/// <reference types="vite/client" />

interface Window {
  fbq?: (event: string, pixelId: string, param?: any) => void;
}
