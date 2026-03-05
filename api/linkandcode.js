// api/linkandcode.js
// Encoded sensitive data (Base64)

const encodedAccessCode = "U0FCRVIyMDI0"; 
const encodedTargetLink = "aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20=";

// Utility decoder
const decode = (value) => atob(value);

// Public API
export function verifyCode(input) {
    const correctCode = decode(encodedAccessCode);
    return input === correctCode;
}

export function getTargetLink() {
    return decode(encodedTargetLink);
}