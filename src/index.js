export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverse(string) {
    return string.split("").reverse().join("");
}