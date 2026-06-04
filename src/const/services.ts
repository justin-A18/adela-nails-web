export const SERVICES = [
	{
		title: "Soft Gel",
		description:
			"Extensiones ligeras y resistentes para lograr largo, forma y acabado pulido sin sensación pesada.",
		bestFor: "Largo natural",
		finish: "Ligero",
		strength: "Medio",
		icon: "soft-gel",
		featured: true,
	},
	{
		title: "Polygel",
		description:
			"Estructura firme y moldeable para uñas con mayor soporte, ideal si buscas definición y duración.",
		bestFor: "Resistencia",
		finish: "Estructurado",
		strength: "Alto",
		icon: "polygel",
	},
	{
		title: "Semipermanente",
		description:
			"Color intenso y brillo duradero para una rutina práctica, prolija y sin retoques constantes.",
		bestFor: "Color y brillo",
		finish: "Pulido",
		strength: "Bajo",
		icon: "semipermanent",
	},
	{
		title: "Rubber",
		description:
			"Base flexible que ayuda a nivelar, reforzar y proteger la uña natural con un acabado limpio.",
		bestFor: "Refuerzo flexible",
		finish: "Natural",
		strength: "Medio",
		icon: "rubber",
	},
	{
		title: "Gel de construcción",
		description:
			"Refuerzo y arquitectura para uñas más resistentes, con forma equilibrada y terminación precisa.",
		bestFor: "Estructura",
		finish: "Definido",
		strength: "Alto",
		icon: "builder-gel",
	},
] as const;

export const SERVICE_GUIDE = [
	{
		intent: "Quiero largo",
		service: "Soft Gel",
		detail: "Extensión ligera con acabado natural",
	},
	{
		intent: "Quiero fuerza",
		service: "Polygel",
		detail: "Soporte firme para mayor duración",
	},
	{
		intent: "Quiero color",
		service: "Semipermanente",
		detail: "Brillo pulido para tu rutina",
	},
	{
		intent: "Quiero reforzar",
		service: "Rubber / Gel",
		detail: "Base flexible o estructura definida",
	},
] as const;
