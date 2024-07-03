export function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export function getRandomGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    return `linear-gradient(to right, ${color1}, ${color2})`;
    // return ([color1, color2]);
}