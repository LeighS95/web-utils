import { sendBeaconAnalytics } from "../src/sendBeacon";

describe('sendBeaconAnalytics', () => {
    it('Returns true if successful', async () => {
        const url = 'https://localhost:5000';
        Object.defineProperty(document, 'visibilityState', {value: 'hidden', writable: true});
        const value = await sendBeaconAnalytics(url);

        expect(value).toBe(true);
    });

    it('Returns false if unsuccessful', async () => {
        const url = 'https://localhost:5000';
        Object.defineProperty(document, 'visibilityState', {value: 'visible', writable: true});
        const value = await sendBeaconAnalytics(url);

        expect(value).toBe(false);
    });
});