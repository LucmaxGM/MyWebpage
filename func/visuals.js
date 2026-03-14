export function glowingNeon(element, size=30, color1="yellow", color2="gold", color3="orange") {
  let i = 0;
  element.classList.add("neon");
  const colors = [color1, color2, color3];
  setInterval(() => {
    element.style.boxShadow = `
  0 0 ${size}px ${colors[i]},
  0 0 ${size}px ${colors[(i+1)%colors.length]},
  0 0 ${size}px ${colors[(i+2)%colors.length]}
`;
    i = (i+1)%colors.length;
  }, 1500)
}
