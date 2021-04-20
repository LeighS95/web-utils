const mockBeacon = () => {
    if (document.visibilityState === 'hidden') return true;

    return false
}

global.navigator.sendBeacon = mockBeacon;