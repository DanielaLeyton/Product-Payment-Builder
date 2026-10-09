export const referencesSection = {
  id: "references",
  title: "Casos de Referencia",
  render(ctx) {
    return `
      <div class="grid-3">
        ${ctx.product.references.map((name, index) => `
          <div class="mini-card">
            <h3>${name}</h3>
            <p><strong>Que hizo bien:</strong> foco en un caso de uso simple, onboarding claro y expansion gradual.</p>
            <p><strong>Que costo:</strong> riesgo, compliance, soporte y dependencia de partners.</p>
            <p><strong>Tiempo real:</strong> ${index === 0 ? "6-12 meses" : index === 1 ? "9-18 meses" : "3-9 meses"} para madurar el producto.</p>
          </div>
        `).join("")}
      </div>
    `;
  }
};
