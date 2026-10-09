import { list, table } from "../modules/html.js";

export const benchmarkSection = {
  id: "benchmark",
  title: "Benchmark Competitivo",
  render(ctx) {
    return `
      ${table(["Jugador", "Features", "Pricing", "Time-to-market", "Diferenciador"], ctx.market.competitors)}
      <details><summary>Lecciones aprendidas de casos publicos</summary><div>${list(["La distribucion suele pesar mas que la feature inicial.", "El sponsor bancario acelera, pero limita margen y roadmap.", "Fraude y soporte deben disenarse antes del piloto.", "Los mejores MVPs lanzan con limites claros y expansion progresiva."])}</div></details>
    `;
  }
};
