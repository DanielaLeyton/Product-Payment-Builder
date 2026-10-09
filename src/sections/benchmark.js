import { cite, list, table } from "../modules/html.js";

export const benchmarkSection = {
  id: "benchmark",
  title: "Benchmark Competitivo",
  render(ctx) {
    const { market, product, productKey } = ctx;
    const sourced = (rows) => rows.map((row) => [...row.slice(0, -1), cite(market.sources, row[row.length - 1])]);
    return `
      ${table(["Jugador", "Quién está detrás", "Figura regulatoria", "Oferta y precio público", "Fuente"], sourced(market.benchmark[productKey] || []))}
      <details open><summary>Señales del mercado chileno</summary><div>${list(market.marketSignals.map(([text, keys]) => `${text} ${cite(market.sources, keys)}`))}</div></details>
      <p class="muted source-note">Competidores de ${product.label} en ${market.label}, revisados en ${market.reviewed}. Las comisiones vienen de comparadores públicos, incluyen o excluyen IVA según se indica y cambian con frecuencia: hay que confirmarlas con cada proveedor.</p>
    `;
  }
};
