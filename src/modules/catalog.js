export const marketCatalog = {
  Chile: {
    status: "active",
    label: "Chile",
    regulators: ["CMF", "Banco Central de Chile", "UAF", "SERNAC", "Servicio de Impuestos Internos"],
    laws: ["Ley Fintech 21.521", "Ley de Fraudes 20.009", "Ley 19.628 de datos personales", "Normas CMF para medios de pago", "Normativa UAF AML/CFT"],
    licenses: ["Emisor de tarjetas de pago con provision de fondos", "Operador de tarjetas", "PSP o subadquirente", "Modelo con sponsor bancario si aplica"],
    kyc: ["Cuenta basica: identificacion, documento y listas", "Cuenta ampliada: biometria, origen de fondos y monitoreo", "Empresas: beneficiario final, poderes y actividad"],
    regulatorRoles: [
      ["CMF", "Autoriza y fiscaliza emisores/operadores no bancarios, prestadores Fintec y obligaciones de gobierno, riesgo, capital, informacion a clientes y reportes."],
      ["Banco Central de Chile", "Define reglas prudenciales y operacionales para medios de pago, liquidacion, camaras, cuentas de provision de fondos y resiliencia del sistema."],
      ["UAF", "Supervisa obligaciones AML/CFT: registro de sujetos obligados cuando aplique, debida diligencia, reportes ROS/ROE y manuales de prevencion."],
      ["SERNAC", "Revisa relacion de consumo: informacion clara, publicidad, contratos de adhesion, reclamos, cargos, reversas y trato al usuario."],
      ["SII", "Impacta boletas/facturacion, retenciones, informacion tributaria, merchant acquiring y conciliacion contable del comercio."]
    ],
    licensePaths: [
      ["Sponsor bancario / PSP", "8-14 semanas", "MVP rapido, menor CAPEX regulatorio, dependencia contractual y menor control de margen."],
      ["Subadquirente / facilitador", "10-18 semanas", "Ideal para link de pago, POS y QR; foco en contratos de adquirencia, riesgo merchant y liquidacion."],
      ["Emisor no bancario prepago", "6-12 meses", "Requiere autorizacion, segregacion de fondos, capital, gobierno, continuidad y reporting."],
      ["Operador de tarjetas", "6-12 meses", "Relevante si operas autorizacion, compensacion o liquidacion para terceros; alta exigencia operacional."],
      ["Prestador Ley Fintec / SFA", "4-9 meses", "Aplica si hay iniciacion de pagos, informacion financiera u otros servicios regulados por Ley 21.521/NCG 502."]
    ],
    kycLevels: [
      ["Nivel 0 prospecto", "Email/telefono, consentimiento y device", "Sin saldo o solo simulacion", "Fraude de identidad, abuso promocional"],
      ["Nivel 1 bajo riesgo", "Documento, nombre, fecha nacimiento, listas sanciones/PEP", "Limites bajos de saldo y transaccion", "Monitoreo basico y velocity checks"],
      ["Nivel 2 full retail", "Biometria/liveness, domicilio, actividad, scoring transaccional", "Limites comerciales normales", "Alertas AML, origen de fondos si escala"],
      ["Nivel empresa", "RUT, poderes, beneficiario final, giro, cuenta bancaria", "Limites por comercio y settlement", "Riesgo merchant, contracargos, facturacion"]
    ],
    complianceRoadmap: [
      ["0. Diagnostico regulatorio", "Legal + Producto", "2-3 semanas", "Mapa de licencias, restricciones, sponsor posible y disclaimer comercial."],
      ["1. Modelo operacional", "Producto + Ops + Risk", "3-5 semanas", "Flujos de fondos, segregacion, liquidacion, reversas, disputas y conciliacion."],
      ["2. Programa AML/KYC", "Compliance + Risk", "4-8 semanas", "Manual, matriz de riesgo, listas, monitoreo, reportes, capacitacion y auditoria."],
      ["3. Contratos y gobierno", "Legal + Finance", "6-12 semanas", "Contratos sponsor/vendor, SLA, outsourcing critico, continuidad, comites y reportes."],
      ["4. Seguridad/certificacion", "Tech + Security", "8-16 semanas", "PCI-DSS, tokenizacion, gestion de llaves, pruebas DR, pentest y hardening."],
      ["5. Piloto controlado", "Producto + Ops", "4-6 semanas", "Limites, cohortes, tablero de riesgo, soporte, conciliacion diaria y postmortems."]
    ],
    regulatorySources: [
      ["Ley 20.950", "Emision y operacion de medios de pago con provision de fondos por entidades no bancarias."],
      ["Ley 21.521 / Ley Fintec", "Marco para servicios financieros tecnologicos y Sistema de Finanzas Abiertas."],
      ["NCG 502 CMF", "Registro, autorizacion, gobierno, gestion de riesgos, capital/garantias y divulgacion para prestadores Fintec."],
      ["Normativa UAF", "Debida diligencia, monitoreo y reportes AML/CFT para sujetos obligados segun actividad."],
      ["Reglas de consumo y datos", "Informacion al cliente, consentimiento, reclamos, proteccion de datos y seguridad de la informacion."]
    ],
    vendors: ["Pomelo", "Kushki", "Global66", "Transbank", "Getnet", "Fintoc", "Mambu"],
    competitors: [
      ["Mach", "Prepago, P2P, tarjeta virtual", "Bajo costo", "Rapido con sponsor", "Marca masiva y UX simple"],
      ["Tenpo", "Wallet, tarjeta, inversiones", "Freemium", "Medio", "Ecosistema financiero"],
      ["Mercado Pago", "Wallet, QR, link, POS", "MDR competitivo", "Rapido", "Red merchant"],
      ["Global66", "Remesas, cuenta global", "FX spread", "Medio", "Cross-border"],
      ["Fintoc", "Open finance, pagos cuenta", "API usage", "Rapido", "Cuenta a cuenta"]
    ]
  },
  Mexico: { status: "soon", label: "Mexico - Pronto" },
  Brasil: { status: "soon", label: "Brasil - Pronto" }
};

export const productCatalog = {
  prepaid: {
    label: "Tarjeta prepago",
    keywords: ["tarjeta", "prepago", "card", "adolescentes"],
    definition: "Instrumento de pago recargable que permite comprar en comercios fisicos y digitales sin otorgar credito.",
    useCases: ["Compra online y presencial", "Control parental o presupuestario", "Pagos internacionales con limites", "Reemplazo de efectivo"],
    personas: ["Usuario final no bancarizado", "Padre/madre sponsor", "Equipo de riesgo y soporte", "Merchant que acepta tarjeta"],
    revenue: ["Interchange neto", "Fee por emision o reposicion", "FX spread", "Planes premium"],
    costs: ["Procesador y switch", "BIN sponsor o licencia", "KYC/AML", "Fraude y chargebacks", "Soporte"],
    unitEconomics: {
      model: "Interchange + fees + FX, con margen sensible a activacion y fraude.",
      assumptions: [["Usuarios activos mes 12", "80k-140k"], ["TPV mensual por usuario", "USD 90-180"], ["Take rate neto", "0.25%-0.75%"], ["Fraude/chargebacks", "10-35 bps TPV"]],
      revenueDrivers: [["Interchange neto", "Parte del interchange despues de red/sponsor/procesador"], ["Fee emision/reposicion", "CLP 0-4.000 segun segmento"], ["FX spread", "0.5%-2.0% en compras internacionales"], ["Premium", "CLP 1.990-4.990/mes si hay beneficios reales"]],
      costDrivers: [["KYC", "USD 0.35-1.20 por usuario aprobado"], ["Procesamiento", "USD 0.02-0.08 por autorizacion"], ["Tarjeta fisica", "USD 2.0-5.5 emitida + fulfillment"], ["Sponsor/BIN", "Setup + minimo mensual + bps TPV"], ["Fraude y disputas", "Provision por bps + costo operativo"]],
      breakEven: "Suele requerir alta activacion: 40k-120k usuarios activos, TPV recurrente y fraude bajo 25 bps.",
      levers: ["Priorizar tarjeta virtual en MVP", "Limites por nivel KYC", "Incentivar uso recurrente", "Controlar costos de soporte con autoservicio"]
    },
    vendors: ["Pomelo", "Marqeta", "Dock", "Galileo", "Thales"],
    references: ["Mach", "Uala", "Cash App Card"]
  },
  wallet: {
    label: "Wallet",
    keywords: ["wallet", "billetera", "cuenta de pago"],
    definition: "Cuenta transaccional digital para guardar saldo, pagar, transferir y conectar instrumentos de pago.",
    useCases: ["Pago P2P", "Cash-in y cash-out", "QR o link de pago", "Pago de servicios"],
    personas: ["Usuario retail", "Comercio pequeno", "Operaciones de conciliacion", "Compliance"],
    revenue: ["MDR", "Float permitido", "Fees de cash-out", "Servicios financieros embebidos"],
    costs: ["Ledger", "KYC", "Transferencias", "Soporte", "Prevencion de fraude"],
    unitEconomics: {
      model: "Margen mixto por transacciones, cash-out, productos embebidos y eficiencia operacional.",
      assumptions: [["Usuarios activos mes 12", "60k-180k"], ["Transacciones/usuario/mes", "4-12"], ["Ingreso neto por usuario", "USD 0.35-1.80/mes"], ["Costo soporte", "USD 0.08-0.35/usuario activo"]],
      revenueDrivers: [["Fees cash-out", "CLP fijo o bps segun canal"], ["MDR/QR", "0.5%-2.5% en comercios"], ["Servicios embebidos", "Revenue share por credito, seguros o inversiones"], ["B2B wallet-as-a-service", "Fee mensual + uso API"]],
      costDrivers: [["Ledger/core", "Costo fijo + eventos"], ["Transferencias", "Costo por rail y conciliacion"], ["KYC/AML", "Costo inicial + monitoreo continuo"], ["Fraude P2P", "Abuso de promociones, triangulacion, mule accounts"], ["CX", "Disputas, bloqueo/desbloqueo, recuperacion de cuenta"]],
      breakEven: "Depende de frecuencia. Un wallet con menos de 4 transacciones/usuario/mes tiende a no cubrir KYC y soporte.",
      levers: ["Activacion con caso de uso ancla", "Cash-in barato", "Limites graduales", "Cross-sell solo despues de recurrencia"]
    },
    vendors: ["Mambu", "Pomelo", "Dock", "Galileo", "Synapse"],
    references: ["Mercado Pago", "Tenpo", "Venmo"]
  },
  paylink: {
    label: "Link de pago",
    keywords: ["link", "checkout", "cobro"],
    definition: "Herramienta para que un comercio cobre por URL, redes sociales o mensajeria sin integracion compleja.",
    useCases: ["Venta social", "Cobro remoto", "Suscripciones simples", "Conciliacion por orden"],
    personas: ["Pyme", "Vendedor social", "Equipo de finanzas", "Soporte de pagos"],
    revenue: ["MDR por transaccion", "Fee por retiro", "Planes SaaS", "Servicios antifraude"],
    costs: ["Adquirencia", "Gateway", "Fraude", "Chargebacks", "Notificaciones"],
    unitEconomics: {
      model: "MDR neto por TPV merchant, con riesgo concentrado en fraude, contracargos y costo de adquirencia.",
      assumptions: [["Comercios activos mes 12", "3k-12k"], ["TPV mensual/comercio", "USD 800-3.500"], ["MDR bruto", "1.8%-3.5%"], ["Margen neto despues adquirencia", "25%-55% del MDR"]],
      revenueDrivers: [["MDR", "Principal driver; varia por tarjeta, rubro y riesgo"], ["Fee retiro anticipado", "0.2%-1.0% o fijo"], ["Planes SaaS", "CLP 4.990-29.990/mes para reportes, links avanzados, equipo"], ["Antifraude premium", "Bps adicionales o fee por decision"]],
      costDrivers: [["Adquirencia", "Costo principal por transaccion"], ["Gateway/3DS", "Costo por intento/autorizacion"], ["Chargebacks", "Perdida + fee + gestion"], ["Notificaciones", "WhatsApp/email/SMS"], ["Riesgo merchant", "Underwriting, reservas y monitoreo"]],
      breakEven: "Mas sensible a TPV que a cantidad de comercios. Mejor 1.000 comercios con uso semanal que 10.000 dormidos.",
      levers: ["Segmentar rubros de bajo riesgo", "Onboarding merchant progresivo", "Settlement por riesgo", "Bundles SaaS para comercios recurrentes"]
    },
    vendors: ["Stripe", "Mercado Pago", "Adyen", "Kushki", "dLocal"],
    references: ["Mercado Pago Link", "Stripe Payment Links", "Kushki"]
  },
  pos: {
    label: "POS",
    keywords: ["pos", "terminal", "maquinita", "dataphone"],
    definition: "Solucion de aceptacion presencial con terminal, QR o Tap to Phone para comercios.",
    useCases: ["Cobro en tienda", "Venta movil", "Propinas", "Cierre de caja"],
    personas: ["Comerciante", "Cajero", "Operador logistico", "Riesgo merchant"],
    revenue: ["MDR", "Arriendo o venta de terminal", "Servicios de liquidacion", "Capital de trabajo"],
    costs: ["Hardware", "Adquirencia", "Certificacion EMV", "Logistica", "Soporte campo"],
    unitEconomics: {
      model: "MDR presencial + monetizacion de hardware/servicios; payback depende de actividad por terminal.",
      assumptions: [["Terminales activas mes 12", "2k-10k"], ["TPV mensual/terminal", "USD 1.200-5.000"], ["MDR bruto", "1.5%-3.0%"], ["Payback hardware", "3-9 meses"]],
      revenueDrivers: [["MDR presencial", "Margen por transaccion aprobada"], ["Venta/arriendo POS", "Pago inicial o mensualidad"], ["Settlement rapido", "Fee por abono mismo dia"], ["Capital comercio", "Revenue share por financiamiento sobre TPV"]],
      costDrivers: [["Hardware", "USD 25-180 segun terminal"], ["Logistica", "Despacho, reposicion, retiro"], ["Certificacion EMV", "Costo inicial y recertificaciones"], ["Soporte campo", "Instalacion, fallas, capacitacion"], ["Adquirencia", "Costo por rail/marca"]],
      breakEven: "Terminales con TPV bajo destruyen margen por soporte y hardware. Requiere scoring merchant antes de enviar equipo.",
      levers: ["Tap to Phone para long tail", "Deposito/garantia para hardware", "Segmentar por rubro/TPV", "Ofrecer liquidacion rapida como add-on"]
    },
    vendors: ["Fiserv", "Getnet", "Kushki", "Adyen", "Stripe Terminal"],
    references: ["SumUp", "Clip", "Square"]
  },
  account: {
    label: "Cuenta digital",
    keywords: ["cuenta", "cvu", "cbu", "spei", "ach", "clabe"],
    definition: "Cuenta transaccional con identificador local para recibir, mantener y enviar fondos.",
    useCases: ["Deposito de sueldo", "Transferencias", "Pago de servicios", "Debitos automaticos"],
    personas: ["Usuario retail", "Empresa pagadora", "Tesoreria", "Compliance"],
    revenue: ["SaaS B2B", "Fees por transaccion", "Float permitido", "Cross-sell"],
    costs: ["Core bancario", "Rails locales", "KYC", "Soporte", "Reconciliacion"],
    unitEconomics: {
      model: "Cuenta transaccional monetizada por uso, B2B SaaS y productos asociados; requiere volumen recurrente.",
      assumptions: [["Cuentas activas mes 12", "50k-150k"], ["Movimientos/cuenta/mes", "3-10"], ["Ingreso neto/cuenta", "USD 0.25-1.50/mes"], ["Costo fijo plataforma", "USD 25k-90k/mes"]],
      revenueDrivers: [["Fees transaccionales", "Transferencias, pagos, cash-out"], ["SaaS B2B", "Cuenta embebida para empresas"], ["Cross-sell", "Tarjeta, credito, payroll, seguros"], ["Float permitido", "Solo si el marco y estructura lo permiten"]],
      costDrivers: [["Core/ledger", "Costo fijo + eventos"], ["Rails", "Transferencias y conciliacion"], ["KYC empresas/personas", "Mayor costo por beneficiario final"], ["Soporte", "Recuperacion cuenta, rechazos, cartolas"], ["Compliance", "Monitoreo y reportes"]],
      breakEven: "La cuenta sola es dificil; mejora si se ancla a payroll, merchant settlement o tarjeta.",
      levers: ["Caso de uso recurrente", "Automatizar conciliacion", "B2B2C para bajar CAC", "Limites y pricing por segmento"]
    },
    vendors: ["Mambu", "Galileo", "Synapse", "Dock", "Pomelo"],
    references: ["Chime", "Nubank", "Uala"]
  },
  bnpl: {
    label: "BNPL",
    keywords: ["bnpl", "cuotas", "credito", "financiamiento"],
    definition: "Producto de financiamiento al consumo integrado en checkout, normalmente con pago en cuotas.",
    useCases: ["Cuotas sin tarjeta", "Financiamiento ecommerce", "Aumento de ticket promedio", "Promociones merchant"],
    personas: ["Comprador online", "Merchant ecommerce", "Equipo de credito", "Cobranza"],
    revenue: ["Merchant discount", "Intereses o cargos permitidos", "Late fees regulados", "Revenue share"],
    costs: ["Costo de fondeo", "Perdida esperada", "Scoring", "Cobranza", "Fraude sintetico"],
    unitEconomics: {
      model: "Margen financiero por merchant discount/interes menos fondeo, perdida esperada y cobranza.",
      assumptions: [["TPV financiado mes 12", "USD 1M-8M"], ["Merchant discount", "3%-9%"], ["Costo de fondeo anual", "8%-20%"], ["Perdida esperada", "3%-12% originacion"]],
      revenueDrivers: [["Merchant discount", "Pago del comercio por conversion y ticket"], ["Interes/cargos", "Segun marco aplicable y disclosure"], ["Late fees", "Solo si regulatoria y reputacionalmente viable"], ["Revenue share", "Con marketplace o adquirente"]],
      costDrivers: [["Fondeo", "Costo de capital y duracion cartera"], ["Perdida esperada", "PD/LGD por cohorte"], ["Scoring", "Datos, bureaus, decisioning"], ["Cobranza", "Soft/hard collections"], ["Fraude sintetico", "Identidades falsas, mule accounts"]],
      breakEven: "No depende solo de conversion: una mejora de 1 pp en perdida esperada puede valer mas que 20 bps de MDR.",
      levers: ["Piloto por rubro", "Limites dinamicos", "Down payment", "Merchant risk sharing", "Cosechas semanales de mora"]
    },
    vendors: ["Addi", "Kueski", "Affirm", "Nelo", "Aplazo"],
    references: ["Affirm", "Kueski Pay", "Addi"]
  },
  remittance: {
    label: "Remesas",
    keywords: ["remesa", "remesas", "envio", "migrantes"],
    definition: "Transferencia internacional de fondos entre personas, con origen y destino en monedas o redes distintas.",
    useCases: ["Envio familiar", "Cash-out local", "Cuenta a cuenta", "FX transparente"],
    personas: ["Migrante remitente", "Beneficiario", "Agente local", "Compliance AML"],
    revenue: ["Fee fijo", "FX spread", "Servicios de cash-out", "Cuenta receptora"],
    costs: ["Corresponsales", "FX liquidity", "Screening AML", "Licencias", "Atencion al cliente"],
    unitEconomics: {
      model: "Fee + FX spread por corredor, con costos fuertes en liquidez, compliance y cash-out.",
      assumptions: [["Transacciones mes 12", "20k-120k"], ["Ticket promedio", "USD 80-350"], ["Fee total cliente", "1.5%-5.0%"], ["Costo corresponsal/cash-out", "0.4%-2.0%"]],
      revenueDrivers: [["Fee fijo", "Monto por envio"], ["FX spread", "Diferencial comprador/vendedor"], ["Cash-out", "Fee por retiro o abono"], ["Cuenta receptora", "Retencion y cross-sell"]],
      costDrivers: [["Liquidez FX", "Prefondeo y volatilidad"], ["Corresponsales", "Costo por pais/canal"], ["AML/sanciones", "Screening persona y transaccion"], ["Soporte", "Trazabilidad y reclamos"], ["Devoluciones", "Errores de datos y rechazos"]],
      breakEven: "Se logra por corredor rentable, no por promedio global. Cada par origen-destino debe tener P&L propio.",
      levers: ["Partir con pocos corredores", "Prefondeo controlado", "Pricing transparente", "KYC reforzado por monto/frecuencia"]
    },
    vendors: ["dLocal", "Thunes", "Wise Platform", "Nium", "Convera"],
    references: ["Wise", "Remitly", "Global66"]
  },
  crypto: {
    label: "Crypto on/off ramp",
    keywords: ["crypto", "cripto", "bitcoin", "on ramp", "off ramp"],
    definition: "Puente entre dinero fiat y criptoactivos para compra, venta, custodia o retiro.",
    useCases: ["Compra cripto con tarjeta", "Retiro fiat", "Stablecoins para pagos", "Treasury crypto"],
    personas: ["Usuario crypto", "Exchange", "Compliance", "Proveedor de liquidez"],
    revenue: ["Spread", "Fee transaccional", "Custodia", "API B2B"],
    costs: ["Blockchain fees", "Custodia", "AML blockchain analytics", "Liquidez", "Fraude"],
    unitEconomics: {
      model: "Spread/fee sobre compra-venta fiat-crypto menos liquidez, custodia, compliance y red.",
      assumptions: [["Usuarios activos mes 12", "20k-80k"], ["Volumen mensual", "USD 1M-12M"], ["Take rate", "0.6%-2.5%"], ["Costo red/liquidez", "0.1%-1.0%"]],
      revenueDrivers: [["Spread", "Compra/venta y volatilidad"], ["Fee transaccional", "Fijo o bps"], ["Custodia", "Cuenta premium o B2B"], ["API B2B", "Uso por partner"]],
      costDrivers: [["Liquidez", "Market maker, slippage"], ["Custodia", "MPC/HSM, seguros"], ["Blockchain analytics", "Screening wallets"], ["Fraude", "Tarjetas robadas, chargebacks"], ["Compliance", "Travel rule/AML segun modelo"]],
      breakEven: "La rentabilidad depende de volumen y mix de rails; tarjetas para on-ramp elevan fraude y costos.",
      levers: ["Limites por rail", "Stablecoins primero", "Off-ramp con cuentas verificadas", "Analitica blockchain por riesgo"]
    },
    vendors: ["Circle", "Fireblocks", "Chainalysis", "MoonPay", "Coinbase Prime"],
    references: ["MoonPay", "Bitso", "Coinbase"]
  }
};
