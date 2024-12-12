const { fromEvent } = rxjs;
const { map, tap } = rxjs.operators;

// Elementos del DOM
const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");
const currentColorDisplay = document.getElementById("currentColor");
const initialColor = "#f9f9f9";

// Función para generar color aleatorio
const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Observable para el botón de generar
const generateClick$ = fromEvent(generateBtn, "click").pipe(
  map(() => generateRandomColor()),
  tap((color) => {
    document.body.style.backgroundColor = color;
    currentColorDisplay.textContent = `Color actual: ${color}`;
  })
);

// Observable para el botón de reiniciar
const resetClick$ = fromEvent(resetBtn, "click").pipe(
  tap(() => {
    document.body.style.backgroundColor = initialColor;
    currentColorDisplay.textContent = `Color actual: ${initialColor}`;
  })
);

// Suscribirse a los observables
generateClick$.subscribe();
resetClick$.subscribe();
