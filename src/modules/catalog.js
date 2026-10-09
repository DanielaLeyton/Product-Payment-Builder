export const marketCatalog = {
  Chile: {
    status: "active",
    label: "Chile",
    reviewed: "octubre de 2026",
    regulators: ["CMF", "Banco Central de Chile", "UAF", "SERNAC", "Comité de Tasas de Intercambio", "ANCI", "Agencia de Protección de Datos Personales"],
    laws: [
      "Ley 20.950: medios de pago con provisión de fondos por entidades no bancarias",
      "Compendio de Normas Financieras del Banco Central, capítulos III.J.1, III.J.1.3 y III.J.2",
      "Ley 21.521 (Ley Fintec) y NCG 502 y 514 de la CMF",
      "Ley 20.009 de fraude en medios de pago (texto vigente desde el 30 de mayo de 2024)",
      "Ley 21.365 de tasas de intercambio",
      "Ley 19.913 y Circular UAF N° 62 de prevención de lavado de activos",
      "Ley 21.719 de datos personales (vigencia prevista: 1 de diciembre de 2026)",
      "Ley 21.663 Marco de Ciberseguridad",
      "Ley 18.010 (tasa máxima convencional) y Ley 21.680 (Registro de Deuda Consolidada)"
    ],
    licenses: [
      "Operar bajo un emisor u operador ya autorizado (sin licencia propia)",
      "PSP con sub-adquirencia bajo el umbral regulatorio",
      "Operador sub-adquirente inscrito en la CMF (capital desde 1.000 UF)",
      "Operador de tarjetas (capital desde 10.000 UF)",
      "Emisor no bancario de prepago (capital desde 25.000 UF)",
      "Prestador de servicios financieros Ley Fintec (registro y autorización CMF)",
      "Proveedor de servicios de iniciación de pagos (registro CMF)"
    ],
    kyc: [
      "Prepago innominado recargable: sin identificación del titular, saldo máximo $20.000",
      "Prepago innominado no recargable: saldo máximo $100.000",
      "Prepago nominativo con apertura remota: saldo máximo $500.000 hasta ratificar el contrato por escrito",
      "Prepago nominativo con verificación fidedigna de identidad o apertura presencial: sin límite de saldo",
      "Beneficiario final de personas jurídicas al iniciar la relación o en transacciones aisladas desde USD 3.000",
      "Revisión periódica de clientes contra las listas del Consejo de Seguridad de la ONU"
    ],
    regulatorRoles: [
      ["CMF", "Autoriza la existencia de emisores y operadores no bancarios, lleva sus registros y los fiscaliza. Administra el Registro de Prestadores de Servicios Financieros y el Sistema de Finanzas Abiertas, y fiscaliza el cumplimiento de los límites a las tasas de intercambio.", ["ley20950", "ley21521", "ley21365"]],
      ["Banco Central de Chile", "Dicta la norma de fondo para emitir y operar tarjetas: capital mínimo, reserva de liquidez, resguardo e inversión de los fondos de clientes, límites de saldo y reglas de sub-adquirencia.", ["cnfJ13", "cnfJ2"]],
      ["UAF", "Supervisa la prevención de lavado de activos y financiamiento del terrorismo: registro como sujeto obligado, oficial de cumplimiento, reportes de operaciones sospechosas y de operaciones en efectivo.", ["uafLey", "uafCirc62"]],
      ["Comité de Tasas de Intercambio", "Fija los topes a la tasa de intercambio que cobran los emisores. Lo integran representantes de Hacienda, Banco Central, CMF y Fiscalía Nacional Económica, y debe revisar los límites cada tres años.", ["ley21365", "ctdi"]],
      ["SERNAC", "Vela por la relación de consumo. La Ley 20.009 fija los plazos y deberes del emisor frente a reclamos por fraude.", ["ley20009"]],
      ["ANCI", "Recibe los reportes de incidentes de ciberseguridad de quienes prestan servicios esenciales, con un plazo máximo de tres horas desde que se conoce el incidente.", ["anci"]],
      ["Agencia de Protección de Datos Personales", "Autoridad creada por la Ley 21.719 para fiscalizar el tratamiento de datos personales cuando la ley entre en vigencia.", ["ley21719"]]
    ],
    licensePaths: [
      ["Operar bajo un emisor u operador autorizado", "Sin licencia propia. El emisor u operador que contrata el servicio responde ante comercios, titulares y la CMF por la prestación y la seguridad operacional.", "MVP y validación de mercado; menor control del margen.", "8-14 semanas", ["cnfJ2"]],
      ["PSP con sub-adquirencia bajo el umbral", "Sin licencia mientras liquide menos del 50% del Umbral de Operación Sub-Adquirente. El umbral equivale al 1% de los pagos a comercios de todos los operadores en los últimos 12 meses. Exige contrato con un emisor u operador.", "Link de pago, POS y QR en etapa temprana.", "10-18 semanas", ["cnfJ2"]],
      ["Operador sub-adquirente", "Obligatorio al alcanzar el 50% del umbral durante dos trimestres consecutivos. Inscripción en el Registro de Operadores de la CMF y capital pagado y reservas desde 1.000 UF. Con adquirencia transfronteriza el mínimo sube a 2.000 UF y no hay exención por volumen.", "PSP que ya escaló o que afilia comercios en el exterior.", "Lo fija la CMF; tope de 18 meses en el régimen transitorio", ["cnfJ2", "ncg541"]],
      ["Operador de tarjetas", "Sociedad anónima especial de giro exclusivo. Capital = máximo entre 10.000 UF y el 20% del monto promedio diario de pagos a comercios de los últimos 24 meses. Reserva de liquidez de al menos el 10% del capital mínimo.", "Adquirencia propia con responsabilidad de pago frente a los comercios.", "6-12 meses", ["cnfJ2"]],
      ["Emisor no bancario de prepago", "Sociedad anónima especial de giro exclusivo autorizada por la CMF. Capital = máximo entre 25.000 UF y la suma de 1% de los pagos anuales a comercios no relacionados, 8% de los fondos invertidos a largo plazo y 3% de los invertidos a corto plazo. Al menos el 50% de los fondos de clientes en cuentas corrientes bancarias o depósitos a plazo de hasta 90 días.", "Tarjeta prepago o wallet con saldo propio y control del margen.", "6-12 meses", ["ley20950", "cnfJ13", "cmfEmisor"]],
      ["Prestador de servicios financieros (Ley Fintec)", "Inscripción en el registro de la CMF, que resuelve en 30 días hábiles, más autorización por cada servicio, que resuelve en hasta seis meses. Cubre financiamiento colectivo, sistemas alternativos de transacción, asesoría crediticia y de inversión, custodia, enrutamiento de órdenes e intermediación de instrumentos financieros, incluidos criptoactivos.", "Crypto, scoring crediticio e inversión. No cubre la emisión ni la adquirencia de tarjetas.", "4-9 meses", ["ley21521", "ncg502"]],
      ["Iniciador de pagos", "Registro en la CMF. No puede mantener fondos de clientes, salvo de forma transitoria con un plazo máximo de pago de 72 horas. Opera sobre el Sistema de Finanzas Abiertas, cuya entrada en vigencia se postergó a julio de 2027.", "Pagos cuenta a cuenta sin tarjeta.", "Depende del calendario del sistema", ["ley21521", "cmfSfa"]]
    ],
    kycLevels: [
      ["Innominada recargable", "No requiere identificar al titular", "$20.000", ["cnfJ13"]],
      ["Innominada no recargable", "No requiere identificar al titular", "$100.000", ["cnfJ13"]],
      ["Nominativa con apertura remota", "Contrato celebrado por medios tecnológicos", "$500.000, hasta que el titular ratifique el contrato por escrito", ["cnfJ13"]],
      ["Nominativa remota con identidad verificada", "El emisor verifica la identidad de forma fidedigna con autenticación segura", "Sin límite", ["cnfJ13"]],
      ["Nominativa con apertura presencial", "Contrato suscrito y documentado por escrito", "Sin límite", ["cnfJ13"]]
    ],
    obligations: [
      ["Resguardo de fondos", "Los fondos de clientes se registran de forma segregada, son inembargables por otras obligaciones del emisor y no devengan intereses ni reajustes. El titular puede pedir su devolución en cualquier momento.", ["ley20950"]],
      ["Tasas de intercambio", "Topes vigentes: 0,50% en débito, 1,14% en crédito y 0,94% en prepago. La rebaja a 0,35% y 0,80% prevista para octubre de 2024 quedó suspendida y la revisión sigue abierta.", ["ctdi"]],
      ["Aviso y bloqueo por fraude", "Canal de aviso gratuito y disponible las 24 horas, con número de seguimiento y bloqueo inmediato del medio de pago.", ["ley20009"]],
      ["Restitución por fraude", "El usuario reclama dentro de 30 días hábiles desde el aviso y puede incluir operaciones de los 60 días corridos anteriores. El emisor restituye en 10 días hábiles (15 en avances y giros en cajero) hasta un umbral que fija un reglamento entre 15 y 35 UF, y tiene 7 días más para el excedente.", ["ley20009"]],
      ["Carga de la prueba", "El emisor debe probar que el usuario autorizó la operación; el solo registro no basta. Para suspender una restitución necesita autorización del juez de policía local, pedida dentro de 3 días hábiles y con antecedentes de dolo o culpa grave.", ["ley20009"]],
      ["Monitoreo de fraude", "Sistemas de monitoreo, gestión de alertas, detección de patrones y límites por canal. La CMF fija los estándares de autenticación.", ["ley20009"]],
      ["Prevención de lavado", "Registro en la UAF, oficial de cumplimiento, reporte de operaciones sospechosas y reporte de operaciones en efectivo sobre USD 10.000. La Circular N° 62 rige desde el 1 de junio de 2025.", ["uafCirc62", "uafRoe"]],
      ["Transferencias electrónicas", "Las transferencias desde USD 1.000 deben llevar los datos del ordenante y del beneficiario. Rige desde el 1 de julio de 2025 para las entidades de la Ley Fintec.", ["uafCirc62"]],
      ["Incidentes de ciberseguridad", "Quien presta un servicio esencial reporta a la ANCI dentro de tres horas desde que conoce el incidente. La obligación rige desde el 1 de marzo de 2025.", ["anci"]],
      ["Datos personales", "Respuesta a solicitudes de titulares en 30 días corridos, aviso de vulneraciones a la Agencia sin dilaciones indebidas y derecho del titular a pedir intervención humana en decisiones automatizadas, como scoring o bloqueos.", ["ley21719"]]
    ],
    keyDates: [
      ["2 de julio de 2024", "El Banco Central reformó las normas de emisión y operación de tarjetas: creó el operador sub-adquirente y reguló la adquirencia transfronteriza.", ["cnfJ2", "careyBcch"]],
      ["30 de septiembre de 2024", "El Comité suspendió la segunda rebaja de tasas de intercambio y abrió el primer proceso de revisión de límites.", ["ctdi"]],
      ["3 de febrero de 2025", "Venció el plazo para que las fintech en operación pidieran su inscripción bajo la NCG 502.", ["ncg502"]],
      ["23 de julio de 2025", "La CMF dictó la NCG 541, que ajusta su Circular N° 1 de operadoras de tarjetas a la reforma del Banco Central.", ["ncg541"]],
      ["1 de abril de 2026", "Fecha en que comenzó a regir la Ley 21.680 del Registro de Deuda Consolidada, según su artículo transitorio.", ["redec"]],
      ["1 de junio de 2026", "La CMF modificó la NCG 514 y postergó el Sistema de Finanzas Abiertas a julio de 2027.", ["cmfSfa"]],
      ["26 de junio de 2026", "La CMF canceló inscripciones del Registro de Prestadores de Servicios Financieros por incumplir la Ley Fintec y la NCG 502.", ["cmfCancel"]],
      ["22 de julio de 2026", "Hacienda aprobó la contratación de un nuevo estudio de impacto para la revisión de tasas de intercambio, con 90 días de plazo.", ["ctdi"]],
      ["1 de diciembre de 2026", "Entrada en vigencia de la Ley 21.719 de datos personales. Hay un proyecto de ley en trámite para postergarla a diciembre de 2027.", ["ley21719", "postergacionDatos"]],
      ["Julio de 2027", "Entrada en vigencia del Sistema de Finanzas Abiertas, con implementación gradual desde esa fecha.", ["cmfSfa"]]
    ],
    productRules: {
      prepaid: [
        ["Se rige por la Ley 20.950 y el capítulo III.J.1.3. La decisión central es operar bajo un emisor autorizado o constituir un emisor propio con capital desde 25.000 UF.", ["ley20950", "cnfJ13"]],
        ["El tipo de tarjeta define el onboarding: una apertura remota sin verificación fidedigna de identidad queda limitada a $500.000 de saldo.", ["cnfJ13"]],
        ["El ingreso por intercambio tiene tope de 0,94% por transacción mientras siga la medida provisional.", ["ctdi"]],
        ["Un segmento de adolescentes exige revisar la contratación con menores y el rol del adulto responsable; no encontré una norma específica en las fuentes revisadas.", []]
      ],
      wallet: [
        ["Un saldo custodiado por una entidad no bancaria es una cuenta de provisión de fondos, bajo el mismo régimen que el prepago.", ["ley20950", "cnfJ13"]],
        ["Las transferencias entre cuentas del mismo emisor están permitidas sin pasar por la red de comercios afiliados.", ["cnfJ13"]],
        ["El saldo no puede pagar intereses y el usuario puede retirarlo en cualquier momento.", ["ley20950"]]
      ],
      paylink: [
        ["Liquidar pagos a comercios por cuenta de un operador es sub-adquirencia. Bajo el 50% del umbral no exige licencia; sobre ese nivel hay que inscribirse como operador sub-adquirente.", ["cnfJ2"]],
        ["Cobrar para comercios en el exterior es adquirencia transfronteriza: requiere inscripción, 2.000 UF de capital y no tiene exención por volumen.", ["cnfJ2", "ncg541"]],
        ["Los topes de intercambio fijan el piso del costo de aceptación que se traspasa al comercio.", ["ctdi"]]
      ],
      pos: [
        ["Aplica el mismo régimen de sub-adquirencia que el link de pago, con el umbral medido sobre los pagos liquidados a comercios.", ["cnfJ2"]],
        ["La adquirencia transfronteriza se limita a pagos electrónicos en sitios web o aplicaciones, por lo que no cubre ventas presenciales.", ["careyBcch"]],
        ["El emisor u operador que contrata al PSP responde por la seguridad operacional del servicio.", ["cnfJ2"]]
      ],
      account: [
        ["Una entidad no bancaria puede ofrecer cuentas de provisión de fondos. Las cuentas corrientes y a la vista corresponden a bancos y cooperativas; conviene confirmar este punto con el equipo legal.", ["ley20950", "cnfJ13"]],
        ["Los pagos cuenta a cuenta mediante iniciación de pagos dependen del Sistema de Finanzas Abiertas, postergado a julio de 2027.", ["cmfSfa"]],
        ["Los emisores de tarjetas son instituciones proveedoras de información obligadas en el Sistema de Finanzas Abiertas.", ["ley21521"]]
      ],
      bnpl: [
        ["No encontré una norma específica para BNPL. El crédito queda sujeto a la tasa máxima convencional de la Ley 18.010, que publica la CMF.", ["tmc"]],
        ["La Ley 21.680 crea el Registro de Deuda Consolidada. Qué acreedores deben reportar depende de umbrales fijados por la CMF en la NCG 540.", ["redec"]],
        ["La asesoría crediticia, que incluye evaluar la capacidad de pago, es un servicio regulado por la Ley Fintec.", ["ley21521"]],
        ["El titular puede oponerse a decisiones automatizadas de scoring y pedir revisión humana cuando rija la Ley 21.719.", ["ley21719"]]
      ],
      remittance: [
        ["Chile no tiene un régimen propio para empresas de transferencia de dinero, según un informe de la Biblioteca del Congreso. El informe es antiguo y hay que confirmar que no haya cambiado.", ["bcnRemesas"]],
        ["Las obligaciones concretas son las de prevención de lavado ante la UAF, incluida la regla de datos del ordenante y beneficiario desde USD 1.000.", ["uafCirc62"]],
        ["Hay un proyecto de ley de inteligencia económica que exigiría acreditar identidad y visa del remitente y guardar registros por 10 años; no está vigente.", ["uafProyecto"]]
      ],
      crypto: [
        ["La Ley Fintec trata los criptoactivos como instrumentos financieros. Operar una plataforma de transacción, intermediar o custodiar exige registro y autorización de la CMF.", ["ley21521", "ncg502"]],
        ["Las entidades inscritas en el registro son sujetos obligados ante la UAF.", ["careyUaf"]],
        ["La CMF ya canceló inscripciones por no pedir autorización dentro de plazo, lo que deja a esas entidades sin la habilitación transitoria.", ["cmfCancel"]]
      ]
    },
    complianceRoadmap: [
      ["0. Diagnóstico regulatorio", "Legal + Producto", "2-3 semanas", "Ruta regulatoria elegida, emisor u operador posible y restricciones del producto."],
      ["1. Modelo operacional", "Producto + Ops + Riesgo", "3-5 semanas", "Flujos de fondos, segregación, liquidación, reversas, disputas y conciliación."],
      ["2. Programa de prevención de lavado", "Compliance + Riesgo", "4-8 semanas", "Registro en la UAF, oficial de cumplimiento, manual, matriz de riesgo, listas y reportes."],
      ["3. Contratos y gobierno", "Legal + Finanzas", "6-12 semanas", "Contratos con emisor, operador y proveedores, SLA, continuidad y comités."],
      ["4. Seguridad y fraude", "Tecnología + Seguridad", "8-16 semanas", "Autenticación, monitoreo de fraude, plan de reporte a la ANCI, PCI-DSS y pruebas."],
      ["5. Piloto controlado", "Producto + Ops", "4-6 semanas", "Límites, cohortes, tablero de riesgo, soporte y conciliación diaria."]
    ],
    sources: {
      cmfEmisores: ["CMF, emisores de prepago", "https://www.cmfchile.cl/portal/principal/623/w4-article-47006.html"],
      cmfOperadores: ["CMF, operadoras de tarjetas", "https://www.cmfchile.cl/institucional/mercados/consulta.php?mercado=B&entidad=TPOPE&Estado=VI"],
      cmfRechazo: ["CMF, comunicado de rechazos", "https://www.cmfchile.cl/portal/prensa/625/w4-article-111436.html"],
      tenpoBanco: ["La Tercera, Tenpo Bank", "https://www.latercera.com/pulso/noticia/cmf-otorga-autorizacion-de-funcionamiento-a-tenpo-bank-chile/"],
      pomeloEmisor: ["Pomelo, autorización CMF", "https://pomelo.la/blog/pomelo-emisor-autorizado-tarjetas-prepago-chile"],
      pomeloMach: ["Pomelo, caso MACHBANK", "https://pomelo.la/blog/tarjeta-de-credito-machbank-pomelo-chile"],
      racionalPomelo: ["FinteChile, Racional y Pomelo", "https://www.fintechile.org/noticias/fintech-racional-y-pomelo-sellan-alianza-para-ofrecer-cuentas-y-tarjetas-prepago"],
      machTu: ["MACH, TuMACH", "https://www.machbank.cl/conoce-mach/cuenta-mach/tu-mach"],
      fintocEmisor: ["Fintoc, emisor CPF", "https://www.fintoc.com/cl/blog/fintoc-entra-a-la-infraestructura-chilena"],
      fintocFees: ["Fintoc, tarifas", "https://docs.fintoc.com/docs/fintoc-fees"],
      kushkiFees: ["Kushki, tarifas", "https://www.kushkipagos.com/fees-and-commissions"],
      kushkiAdq: ["Chócale, Kushki adquirente", "https://chocale.cl/2023/06/kushki-obtiene-licencia-adquirente-cmf-chile/"],
      pasarelas: ["Digitalízame, comisiones de pasarelas", "https://digitalizame.cl/comisiones-pasarelas-de-pago-chile/"],
      cotizaPos: ["CotizaPOS, comisiones con IVA", "https://www.cotizapos.cl/guias/comisiones-pos-chile/"],
      banchilePagos: ["BioBioChile, Banchile Pagos", "https://www.biobiochile.cl/noticias/economia/negocios-y-empresas/2025/11/17/banco-de-chile-obtiene-autorizacion-para-operar-propia-maquina-de-pagos-y-entra-a-competir-al-sector.shtml"],
      mpBnpl: ["Chócale, BNPL de Mercado Pago", "https://chocale.cl/2026/06/bnpl-de-mercado-pago-en-chile-supero-los-25-millones-de-creditos/"],
      mpBnplLanzamiento: ["CCS, lanzamiento BNPL", "https://www.ccs.cl/2025/08/28/mercado-pago-lanza-compra-ahora-paga-despues-para-mas-de-un-millon-de-chilenos/"],
      bnplChile: ["Emol, BNPL en Chile", "https://www.emol.com/noticias/Economia/2025/07/25/1173100/modelo-bnpl-firmas-financieras.html"],
      remesasComparativa: ["Remesas.com, comparativa", "https://remesas.com/blog/global-66-que-es-como-funciona-y-alternativas/"],
      wuDlocal: ["Western Union, alianza con dLocal", "https://www.westernunion.com/blog/es/western-union-chile-lanzamiento-tarjetas-dlocal/"],
      wiseChile: ["Wise, lanzamiento en Chile", "https://newsroom.wise.com/en-NAM/268425-wise-launches-international-money-transfer-service-in-chile/"],
      isip2026: ["BCCh, Informe de Sistemas de Pago 2026", "https://www.bcentral.cl/en/content/-/detalle/resumen-informe-de-sistemas-de-pago-2026"],
      exchangesChile: ["Criptoinforme, exchanges y CMF", "https://criptoinforme.com/tutoriales/mejores-exchanges-chile/"],
      orionxCierre: ["CNN Chile, Orionx", "https://www.cnnchile.com/negocios/cmf-aclara-orionx-no-esta-fiscalizada-tras-rechazo-de-solicitud/"],
      chainalysisBuda: ["Chainalysis, caso Buda", "https://www.chainalysis.com/es/customer-stories/buda/"],
      dockTenpo: ["Latam Fintech, Dock y Tenpo", "https://www.latamfintech.co/articles/paytech-dock-se-expande-a-chile-en-colaboracion-con-el-banco-digital-tenpo"],
      nuekTenpo: ["Nuek, comunicado Tenpo", "https://g5noticias.cl/2026/02/10/tenpo-obtiene-la-autorizacion-de-funcionamiento-de-la-cmf-para-operar-como-banco-con-nuek-como-partner-tecnologico-de-pagos/"],
      dlocalChile: ["dLocal, documentación Chile", "https://docs.dlocal.com/docs/chile"],
      stripeChile: ["Global66, Stripe en Chile", "https://www.global66.com/blog/stripe-chile/"],
      thunesLatam: ["Fintech News, Thunes en Latinoamérica", "https://fintechnews.sg/59424/payments/thunes-sets-up-miami-hub-to-deepen-presence-in-latin-america/"],
      ley20950: ["Ley 20.950", "https://www.bcn.cl/leychile/navegar?idLey=20950"],
      ley21521: ["Ley 21.521", "https://www.bcn.cl/leychile/navegar?idLey=21521"],
      ley20009: ["Ley 20.009", "https://www.bcn.cl/leychile/navegar?idNorma=236736"],
      ley21365: ["Ley 21.365", "https://www.bcn.cl/leychile/navegar?idLey=21365"],
      ley21719: ["Ley 21.719", "https://www.bcn.cl/leychile/navegar?idLey=21719"],
      cnfJ13: ["BCCh, capítulo III.J.1.3", "https://www.bcentral.cl/documents/33528/115568/CapIIIJ13.pdf"],
      cnfJ2: ["BCCh, capítulo III.J.2", "https://www.bcentral.cl/documents/33528/115568/CapIIIJ2.pdf"],
      cmfEmisor: ["CMF, trámite de emisores", "https://www.cmfchile.cl/portal/principal/623/w4-article-29349.html"],
      cmfSfa: ["CMF, comunicado 1-jun-2026", "https://www.cmfchile.cl/portal/prensa/625/w4-article-110881.html"],
      cmfCancel: ["CMF, comunicado 26-jun-2026", "https://www.cmfchile.cl/portal/prensa/625/w4-article-111431.html"],
      ncg541: ["CMF, NCG 541", "https://www.cmfchile.cl/normativa/ncg_541_2025.pdf"],
      ncg502: ["Carey, sobre NCG 502", "https://www.carey.cl/cmf-dicta-normativa-que-regula-a-los-prestadores-de-servicios-financieros"],
      ctdi: ["Comité de Tasas de Intercambio", "https://ctdi.hacienda.cl/resoluciones-y-comunicados"],
      uafLey: ["UAF, Ley 19.913", "https://www.uaf.cl/es-cl/normativa/nuestra-ley"],
      uafCirc62: ["Carey, sobre Circular UAF 62", "https://www.carey.cl/uaf-dicta-nuevo-marco-normativo-para-prevencion-de-lavado-de-activos-y-financiamiento-del-terrorismo"],
      uafRoe: ["UAF, instructivo ROE", "https://www.uaf.cl/media/documentos/2025_Env%C3%ADo_del_ROE.pdf"],
      uafProyecto: ["UAF, noticia del proyecto", "https://www.uaf.cl/es-cl/noticia-detalle?id=47127"],
      careyUaf: ["Carey, Ley Fintec y UAF", "https://www.carey.cl/ley-fintech-y-nuevos-sujetos-obligados-ante-la-unidad-de-analisis-financiero"],
      careyBcch: ["Carey, reforma del BCCh", "https://www.carey.cl/banco-central-de-chile-actualiza-regulacion-de-tarjetas-de-pago/"],
      anci: ["ANCI", "https://anci.gob.cl/noticias/obligacion-de-reportar/"],
      redec: ["Ontier, sobre Ley 21.680", "https://www.ontier.law/insight/ley-no-21-680-registro-de-deuda-consolidada"],
      tmc: ["CMF, tasa máxima convencional", "https://www.cmfchile.cl/portal/prensa/625/w4-article-49644.html"],
      postergacionDatos: ["Anguita Osorio, postergación", "https://www.anguitaosorio.cl/es/ley-datos-diciembre-2026/"],
      bcnRemesas: ["BCN, informe de remesas", "https://obtienearchivo.bcn.cl/obtienearchivo?id=repositorio%2F10221%2F24493%2F2%2FBCN_remesas_dinero_no_bancarias_01_%281%29.pdf"]
    },
    benchmark: {
      prepaid: [
        ["MACH", "Banco Bci", "Emitida por un banco; no figura entre los emisores no bancarios", "Más de 4 millones de usuarios. TuMACH abre cuentas a jóvenes de 14 a 17 años con autorización de su tutor.", ["pomeloMach", "machTu"]],
        ["Tenpo", "Credicorp", "Emisor no bancario (Tenpo Payments S.A.) con autorización para funcionar como banco desde el 19 de enero de 2026", "Más de 2,5 millones de clientes. Tiene un año desde la autorización para iniciar operaciones como banco.", ["cmfEmisores", "tenpoBanco"]],
        ["Mercado Pago", "Mercado Libre", "Emisor no bancario (Mercado Pago Emisora S.A.)", "Cuenta y tarjeta integradas al ecosistema de comercios y a su oferta de crédito.", ["cmfEmisores"]],
        ["Tapp", "Caja Los Andes", "Emisor no bancario (Los Andes Tarjetas de Prepago S.A.)", "Distribución sobre la base de afiliados de la caja de compensación.", ["cmfEmisores"]],
        ["Racional", "Racional, sobre Pomelo", "Opera bajo la licencia de emisor de Pomelo", "Alianza anunciada en septiembre de 2026 para ofrecer cuentas y tarjetas prepago sin licencia propia.", ["racionalPomelo"]]
      ],
      wallet: [
        ["Mercado Pago", "Mercado Libre", "Emisor no bancario y operadora inscrita en la CMF", "Saldo, QR, link de pago y POS en una misma cuenta.", ["cmfEmisores", "cmfOperadores"]],
        ["Tenpo", "Credicorp", "Emisor no bancario en transición a banco", "Más de 2,5 millones de clientes; sumará cuenta corriente, créditos y depósitos a plazo.", ["tenpoBanco"]],
        ["MACH", "Banco Bci", "Emitida por un banco", "Ofrece cuenta prepago y cuenta corriente desde la misma app.", ["pomeloMach"]],
        ["Fintoc Pagos", "Fintoc", "Emisor no bancario inscrito el 7 de mayo de 2026", "Cuentas de provisión de fondos para empresas, con pagos y conciliación por API.", ["fintocEmisor"]]
      ],
      paylink: [
        ["Webpay", "Transbank", "Operadora inscrita en la CMF", "Tarifas por tabla según rubro; los comparadores publican rangos que no coinciden entre sí.", ["cmfOperadores", "pasarelas"]],
        ["Flow", "Flow", "No figura en el listado de operadoras de la CMF", "2,89% + IVA con abono a 3 días hábiles o 3,19% + IVA con abono al día hábil siguiente, según un comparador.", ["pasarelas"]],
        ["Mercado Pago", "Mercado Libre", "Operadora inscrita en la CMF", "Entre 2,89% y 3,19% + IVA según el plazo de abono, según un comparador.", ["cmfOperadores", "pasarelas"]],
        ["Kushki", "Kushki", "Operadora inscrita; adquirente no bancario desde 2023", "Tarifa fija de procesamiento más una tarifa por método de pago, con mínimos de facturación mensual.", ["cmfOperadores", "kushkiFees", "kushkiAdq"]],
        ["Fintoc", "Fintoc", "Pagos por transferencia; su filial es emisor no bancario desde 2026", "1,00% + IVA por API y 1,35% + IVA en plugins de e-commerce, según un comparador.", ["fintocFees", "fintocEmisor"]]
      ],
      pos: [
        ["Transbank", "Bancos accionistas", "Operadora inscrita en la CMF", "2,08% débito y 2,80% crédito, con arriendo mensual del equipo.", ["cmfOperadores", "cotizaPos"]],
        ["Getnet", "Santander", "Operadora inscrita en la CMF", "1,77% débito y 2,61% crédito, con arriendo mensual.", ["cmfOperadores", "cotizaPos"]],
        ["Klap", "Multicaja (Iswitch S.A.)", "Operadora inscrita en la CMF", "0,74% débito y 1,65% crédito, con arriendo mensual.", ["cmfOperadores", "cotizaPos"]],
        ["Compraquí", "BancoEstado (Red Global S.A.)", "Operadora inscrita en la CMF", "1,54% débito y 1,89% crédito, con compra única del equipo.", ["cmfOperadores", "cotizaPos"]],
        ["Mercado Pago Point", "Mercado Libre", "Operadora inscrita en la CMF", "2,61% débito y 3,20% crédito, con compra única del equipo.", ["cmfOperadores", "cotizaPos"]],
        ["TUU", "Haulmer", "No figura en el listado de operadoras de la CMF", "1,77% en débito y crédito, con compra única del equipo.", ["cotizaPos"]],
        ["Banchile Pagos", "Banco de Chile", "Operadora autorizada en noviembre de 2025", "Entrada de un banco grande con red de adquirencia propia.", ["cmfOperadores", "banchilePagos"]]
      ],
      account: [
        ["MACH", "Banco Bci", "Banco", "Cuenta corriente y cuenta prepago digitales; abre a jóvenes desde los 14 años con TuMACH.", ["pomeloMach", "machTu"]],
        ["Tenpo", "Credicorp", "Autorización de funcionamiento como banco desde enero de 2026", "Ofrecerá a sus clientes migrar al banco desde la app, sin costo.", ["tenpoBanco"]],
        ["Mercado Pago", "Mercado Libre", "Emisor no bancario", "Cuenta de provisión de fondos ligada a su tarjeta y a sus productos de crédito.", ["cmfEmisores"]],
        ["Fintoc Pagos", "Fintoc", "Emisor no bancario desde mayo de 2026", "Cuentas para empresas que reciben pagos y concilian de forma automática.", ["fintocEmisor"]],
        ["Racional", "Racional, sobre Pomelo", "Opera bajo la licencia de Pomelo", "Suma cuentas y prepago a una app de inversión sin constituir un emisor propio.", ["racionalPomelo"]]
      ],
      bnpl: [
        ["Cuotas sin Tarjeta", "Mercado Pago", "Crédito otorgado por Mercado Pago", "Lanzado en julio de 2025. Montos de $20.000 a $230.000 en 3 o 6 cuotas fijas. Más de 2,5 millones de créditos en su primer año.", ["mpBnplLanzamiento", "mpBnpl"]],
        ["CLEO", "CLEO", "No verificado en esta revisión", "Cuotas sin tarjeta en comercios asociados; exige una cuenta bancaria activa para validar identidad.", ["bnplChile"]],
        ["Tarjetas de crédito en cuotas", "Bancos y retail financiero", "Emisores de tarjetas de crédito", "Es el sustituto dominante: el BNPL compite donde el cliente no tiene tarjeta de crédito.", ["bnplChile"]]
      ],
      remittance: [
        ["Global66", "Global66", "Fintech chilena", "Envíos 100% digitales a más de 70 destinos, sin opción de efectivo.", ["remesasComparativa"]],
        ["Western Union", "Western Union", "Remesadora internacional", "Red física con retiro en efectivo en más de 200 países; en Chile acepta pago con tarjeta mediante dLocal.", ["remesasComparativa", "wuDlocal"]],
        ["Wise", "Wise", "Lanzó envíos desde Chile el 21 de julio de 2026", "Envíos en pesos chilenos a más de 40 monedas en 160 países.", ["wiseChile"]],
        ["Remitly", "Remitly", "Remesadora digital", "Dos modalidades, rápida y económica, con margen sobre el tipo de cambio.", ["remesasComparativa"]]
      ],
      crypto: [
        ["Buda.com", "Buda.com", "Solicitud en trámite ante la CMF, según una comparativa del 6 de octubre de 2026", "Opera en Chile, Colombia, Perú y Argentina.", ["exchangesChile", "chainalysisBuda"]],
        ["CryptoMKT", "CryptoMKT", "Solicitud en trámite ante la CMF, según la misma comparativa", "Exchange local con operación en pesos.", ["exchangesChile"]],
        ["Orionx", "Orionx SpA", "Solicitud rechazada por la CMF el 26 de junio de 2026", "Anunció su cierre en septiembre de 2026 tras detectar una salida de activos superior a US$7 millones; retiros suspendidos.", ["cmfRechazo", "orionxCierre"]],
        ["Binance", "Binance", "No inscrita en la CMF, según comparativas", "Acepta pesos chilenos por transferencia bancaria.", ["exchangesChile"]]
      ]
    },
    marketSignals: [
      ["La licencia se puede arrendar: Pomelo fue autorizada como emisor no bancario en junio de 2026 y asume la responsabilidad regulatoria de las tarjetas que emiten terceros sobre su licencia.", ["pomeloEmisor", "racionalPomelo"]],
      ["Las fintech suben de licencia: Tenpo partió como emisor de prepago en 2020 y obtuvo la autorización para funcionar como banco en enero de 2026.", ["tenpoBanco"]],
      ["La adquirencia dejó de ser una sola red: hay diez operadoras de tarjetas vigentes en la CMF, y Banco de Chile sumó la suya en noviembre de 2025.", ["cmfOperadores", "banchilePagos"]],
      ["El riesgo regulatorio es concreto: la CMF rechazó siete solicitudes de intermediación el 26 de junio de 2026 y esas entidades no pueden tomar clientes nuevos.", ["cmfRechazo"]],
      ["Las remesas salientes sumaron US$2.271 millones en 2025, con Colombia y Perú como principales destinos, siete empresas con el 84% del mercado y un costo promedio de 1,8% a 2,7%.", ["isip2026"]]
    ],
    vendorMap: {
      prepaid: [
        ["Pomelo", "Emisión, procesamiento y licencia de emisor", "Emisor no bancario autorizado por la CMF en junio de 2026; procesa la tarjeta de crédito de MACHBANK.", ["pomeloEmisor", "pomeloMach"]],
        ["Dock", "Emisión y procesamiento", "Provee la tecnología de las tarjetas de crédito de Tenpo.", ["dockTenpo"]],
        ["Nuek", "Procesamiento de prepago", "Parte de Minsait (Indra); procesa las tarjetas de prepago de Tenpo.", ["nuekTenpo"]],
        ["Marqeta, Galileo, Thales", "Procesamiento y fabricación de tarjetas", "Sin clientes chilenos confirmados en las fuentes revisadas.", []]
      ],
      wallet: [
        ["Pomelo", "Cuentas, emisión y licencia de emisor", "Emisor no bancario autorizado en junio de 2026.", ["pomeloEmisor"]],
        ["Fintoc Pagos", "Cuentas de provisión de fondos por API", "Emisor no bancario inscrito el 7 de mayo de 2026.", ["fintocEmisor"]],
        ["Dock", "Banca digital y emisión", "Entró a Chile con Tenpo como cliente.", ["dockTenpo"]],
        ["Mambu", "Core bancario", "Sin clientes chilenos confirmados en las fuentes revisadas.", []]
      ],
      paylink: [
        ["Kushki", "Adquirencia y gateway", "Operadora inscrita en la CMF; inició como adquirente con foco en e-commerce.", ["cmfOperadores", "kushkiAdq"]],
        ["Transbank", "Adquirencia (Webpay)", "Operadora inscrita en la CMF.", ["cmfOperadores"]],
        ["Fintoc", "Pagos por transferencia", "Publica sus tarifas y cobra IVA sobre la comisión.", ["fintocFees"]],
        ["dLocal", "Procesamiento local para comercios internacionales", "Filial chilena desde 2018; actúa como comercio local de registro.", ["dlocalChile"]],
        ["Stripe", "Gateway global", "No abre cuentas a empresas chilenas, según guías de terceros; conviene confirmarlo con Stripe.", ["stripeChile"]]
      ],
      pos: [
        ["Transbank", "Adquirencia y terminales", "Operadora inscrita en la CMF.", ["cmfOperadores"]],
        ["Getnet", "Adquirencia y terminales", "Operadora inscrita en la CMF, del grupo Santander.", ["cmfOperadores"]],
        ["Klap", "Adquirencia y terminales", "Iswitch S.A., inscrita en la CMF.", ["cmfOperadores"]],
        ["Kushki", "Adquirencia", "Operadora inscrita; en 2023 anunció planes para pagos presenciales.", ["cmfOperadores", "kushkiAdq"]],
        ["Fiserv", "Plataforma de adquirencia", "Tiene presencia en Chile; sin operación de adquirencia confirmada en las fuentes revisadas.", []]
      ],
      account: [
        ["Pomelo", "Cuentas, emisión y licencia de emisor", "Racional lanzó cuentas y prepago sobre su licencia en septiembre de 2026.", ["pomeloEmisor", "racionalPomelo"]],
        ["Fintoc Pagos", "Cuentas de provisión de fondos por API", "Emisor no bancario inscrito el 7 de mayo de 2026.", ["fintocEmisor"]],
        ["Dock", "Banca digital y emisión", "Entró a Chile con Tenpo como cliente.", ["dockTenpo"]],
        ["Mambu, Galileo", "Core bancario y procesamiento", "Sin clientes chilenos confirmados en las fuentes revisadas.", []]
      ],
      bnpl: [
        ["Pomelo", "Motor de crédito y procesamiento", "Gestiona el ciclo de vida del crédito de la tarjeta de MACHBANK.", ["pomeloMach"]],
        ["Mercado Pago", "BNPL para comercios de su red", "Ofrece Cuotas sin Tarjeta a los compradores de sus comercios.", ["mpBnpl"]],
        ["Proveedores de scoring y cobranza", "Evaluación de riesgo y recuperación", "No investigados en esta revisión.", []]
      ],
      remittance: [
        ["dLocal", "Cobro con tarjeta y pagos locales", "Integra los pagos con tarjeta de Western Union en Chile.", ["wuDlocal", "dlocalChile"]],
        ["Thunes", "Red de pagos transfronterizos", "Declara alianzas de pago en Chile, sin detalle público de rieles ni límites.", ["thunesLatam"]],
        ["Wise Platform, Nium", "Infraestructura de envíos por API", "Sin disponibilidad en Chile confirmada en las fuentes revisadas.", []]
      ],
      crypto: [
        ["Chainalysis", "Monitoreo de transacciones", "Buda.com es cliente publicado.", ["chainalysisBuda"]],
        ["Fireblocks", "Custodia", "Sin clientes chilenos confirmados en las fuentes revisadas.", []],
        ["Circle, MoonPay, Coinbase Prime", "Stablecoins, rampas y liquidez", "No investigados en esta revisión.", []]
      ]
    }
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
    vendors: ["Pomelo", "Dock", "Nuek"],
    references: ["Mach", "Uala", "Cash App Card"]
  },
  wallet: {
    label: "Wallet",
    keywords: ["wallet", "billetera"],
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
    vendors: ["Pomelo", "Fintoc Pagos", "Dock"],
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
    vendors: ["Kushki", "Transbank", "Fintoc", "dLocal"],
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
    vendors: ["Transbank", "Getnet", "Klap", "Kushki"],
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
    vendors: ["Pomelo", "Fintoc Pagos", "Dock"],
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
    vendors: ["Pomelo", "Mercado Pago"],
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
    vendors: ["dLocal", "Thunes"],
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
    vendors: ["Chainalysis", "Fireblocks"],
    references: ["MoonPay", "Bitso", "Coinbase"]
  }
};
