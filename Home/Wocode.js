window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const gradient = document.querySelector('.gradient');
    const color1 = '#FFF886'; // Starting color
    const color2 = '#F072B6'; // Ending color
    const height = window.innerHeight;

    // Calculate percentage scrolled
    const scrollPercentage = scrollTop / (document.body.clientHeight - height);

    // Interpolate colors based on scroll position
    const interpolatedColor = interpolateColors(color1, color2, scrollPercentage);

    // Apply the interpolated color to the background
    gradient.style.background = `linear-gradient(to bottom right, ${interpolatedColor})`;
});

// Function to interpolate between two colors
function interpolateColors(color1, color2, percent) {
    const color1_rgb = hexToRgb(color1);
    const color2_rgb = hexToRgb(color2);

    const r = Math.round(color1_rgb.r + percent * (color2_rgb.r - color1_rgb.r));
    const g = Math.round(color1_rgb.g + percent * (color2_rgb.g - color1_rgb.g));
    const b = Math.round(color1_rgb.b + percent * (color2_rgb.b - color1_rgb.b));

    return `rgb(${r}, ${g}, ${b})`;
}

// Helper function to convert hex color to rgb
function hexToRgb(hex) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return { r, g, b };
}
