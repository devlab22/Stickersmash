export function createUUID() {
    return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
export function genMac(step: number = 2, separator: string = ':', count: number = 12) {

    const hexDigits = "0123456789ABCDEF";
    let macAddress = "";
    for (let i = 0; i < count; i++) {
        macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
        if (((i + 1) % step === 0) && i < (count - 1)) macAddress += separator;
    }

    return macAddress;
}