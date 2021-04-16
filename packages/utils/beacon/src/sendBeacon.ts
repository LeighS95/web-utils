import { BeaconDate } from '../../types/beacon/Beacon';

export const sendBeaconAnalytics = (url: string, data?: BeaconDate) => {
    if (document.visibilityState === 'hidden') navigator.sendBeacon(url, data);
};
