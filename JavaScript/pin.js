async function sha256(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    return hashArray
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

async function verifyPIN(pinHash, input, previousLevel) {
    const inputHash = await sha256(input);

    if (inputHash !== pinHash) {
        window.location.assign(`./Level${previousLevel}.html`);
    }
}
