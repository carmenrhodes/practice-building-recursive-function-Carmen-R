function reverseString(string) {
    if (string.length <= 1) {
        return string;
    }
    return string.charAt(string.length - 1) + reverseString(string.slice(0, -1));
}

console.log(reverseString("dow"));