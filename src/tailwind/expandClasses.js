
export const tailwindClass = (strings, ...placeholders) => strings.reduce((pre, curr) => {
    let placeholder = placeholders.shift();
    return pre + placeholder + curr;
});