export const TESTIMONIALS = [
	{
		name: "Valeria R.",
		location: "Miraflores",
		rating: 5,
		quote:
			"Me encantó la atención. Me ayudaron a elegir el diseño perfecto y el acabado quedó impecable.",
		highlight: "Diseño personalizado",
	},
	{
		name: "Camila G.",
		location: "San Isidro",
		rating: 5,
		quote:
			"El lugar se siente limpio, elegante y muy profesional. Mis uñas duraron hermosas por semanas.",
		highlight: "Duración y acabado",
		featured: true,
	},
	{
		name: "Andrea P.",
		location: "Surco",
		rating: 5,
		quote:
			"No sentí que fuera un servicio rápido más. Se tomaron el tiempo de cuidar cada detalle.",
		highlight: "Atención al detalle",
	},
] as const;

export const TESTIMONIAL_STATS = [
	{
		value: "+300",
		label: "diseños realizados",
	},
	{
		value: "5.0",
		label: "valoración de clientas",
	},
	{
		value: "3+",
		label: "técnicas especializadas",
	},
] as const;
