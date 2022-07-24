import '@types/google.maps';

declare module 'googlemaps';

declare global {
  interface Window {
    initMap: () => void;
  }
}

export {};
