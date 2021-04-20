// import { BeaconDate } from '@types/beacon';
export type BeaconDate =
    | ArrayBuffer
    | ArrayBufferView
    | Blob
    | Uint16Array
    | FormData
    | URLSearchParams;


export const sendBeaconAnalytics = async (url: string, data?: BeaconDate) => {
    if (document.visibilityState === 'hidden') {
        return navigator.sendBeacon(url, data);
    }
    return false;
};
