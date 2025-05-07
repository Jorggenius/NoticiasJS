noticias = [];

const noticiaSect = {};

function cargarNoticias() {

    console.log("cargando noticias en memoria");

    //creando noticia1
    const noticia01 = {
        id: 1,
        titulo: "Se nos fue el papa",
        fecha: "2025-04-22",
        desc_noticia: "el dia de la resurreccion se nos fue el papa",
        imagen: "./assets/01.jpeg",
        categoria: "CULTURA",
        active: true
    };
    const noticia02 = {
        id: 2,
        titulo: "Terremoto sacude la costa del Pacífico",
        fecha: "2025-04-21",
        desc_noticia: "Un fuerte sismo de magnitud 7.2 fue registrado esta madrugada.",
        imagen: "./assets/02.jpeg",
        categoria: "NACIONAL",
        active: true
    };
    const noticia03 = {
        id: 3,
        titulo: "Descubren nueva especie de ave en Colombia",
        fecha: "2025-04-20",
        desc_noticia: "Investigadores han descubierto una nueva especie en la Amazonía colombiana.",
        imagen: "./assets/03.jpeg",
        categoria: "CIENCIA",
        active: true
    };
    const noticia04 = {
        id: 4,
        titulo: "Inicia la feria del libro en Bogotá",
        fecha: "2025-04-19",
        desc_noticia: "La feria contará con autores de más de 20 países.",
        imagen: "./assets/04.jpeg",
        categoria: "CULTURA",
        active: true
    };
    const noticia05 = {
        id: 5,
        titulo: "Nuevo récord mundial en los 100 metros planos",
        fecha: "2025-04-18",
        desc_noticia: "El atleta jamaicano rompe récord con 9.55 segundos.",
        imagen: "./assets/05.jpeg",
        categoria: "DEPORTES",
        active: true
    };
    const noticia06 = {
        id: 6,
        titulo: "Apple lanza su nuevo iPhone 16",
        fecha: "2025-04-17",
        desc_noticia: "Con mejoras en inteligencia artificial y cámara.",
        imagen: "./assets/06.jpeg",
        categoria: "TECNOLOGÍA",
        active: true
    };
    const noticia07 = {
        id: 7,
        titulo: "Se aprueba nueva ley ambiental en el Congreso",
        fecha: "2025-04-16",
        desc_noticia: "La ley busca proteger ecosistemas críticos.",
        imagen: "./assets/07.jpeg",
        categoria: "POLÍTICA",
        active: true
    };
    const noticia08 = {
        id: 8,
        titulo: "Torneo de fútbol intercolegial inicia en Medellín",
        fecha: "2025-04-15",
        desc_noticia: "Participan más de 50 colegios del país.",
        imagen: "./assets/08.jpeg",
        categoria: "DEPORTES",
        active: true
    };
    const noticia09 = {
        id: 9,
        titulo: "Encuentran restos arqueológicos en Perú",
        fecha: "2025-04-14",
        desc_noticia: "Podrían tener más de 3,000 años de antigüedad.",
        imagen: "./assets/09.jpeg",
        categoria: "HISTORIA",
        active: true
    };
    const noticia10 = {
        id: 10,
        titulo: "Campaña mundial de reciclaje gana fuerza",
        fecha: "2025-04-13",
        desc_noticia: "Millones de personas se unieron en redes sociales.",
        imagen: "./assets/10.jpeg",
        categoria: "MEDIO AMBIENTE",
        active: true
    };
    const noticia11 = {
        id: 11,
        titulo: "Nasa lanza nuevo telescopio espacial",
        fecha: "2025-04-12",
        desc_noticia: "Permitirá observar exoplanetas en alta definición.",
        imagen: "./assets/11.jpeg",
        categoria: "CIENCIA",
        active: true
    };
    const noticia12 = {
        id: 12,
        titulo: "Desfile de moda rompe esquemas en París",
        fecha: "2025-04-11",
        desc_noticia: "Diseñadores apuestan por estilos futuristas.",
        imagen: "./assets/12.jpeg",
        categoria: "MODA",
        active: true
    };
    const noticia13 = {
        id: 13,
        titulo: "Protestas en el centro por reforma laboral",
        fecha: "2025-04-10",
        desc_noticia: "Trabajadores exigen mejores condiciones.",
        imagen: "./assets/13.jpeg",
        categoria: "POLÍTICA",
        active: true
    };
    const noticia14 = {
        id: 14,
        titulo: "Lluvias intensas afectan varias regiones del país",
        fecha: "2025-04-09",
        desc_noticia: "Se reportan deslizamientos y evacuaciones.",
        imagen: "./assets/14.jpeg",
        categoria: "CLIMA",
        active: true
    };
    const noticia15 = {
        id: 15,
        titulo: "Lluvias intensas afectan varias regiones del país",
        fecha: "2025-04-09",
        desc_noticia: "Se reportan deslizamientos y evacuaciones.",
        imagen: "./assets/15.jpeg",
        categoria: "CLIMA",
        active: true
    };
    const noticia16 = {
        id: 16,
        titulo: "Zelenski anuncia cumbre de paz en Londres",
        fecha: "2025-04-22",
        desc_noticia: "El presidente de Ucrania, Volodímir Zelenski, ha anunciado la celebración de una cumbre de paz en Londres con representantes de Ucrania, Reino Unido, Francia y Estados Unidos. En su discurso, Zelenski renovó una propuesta de alto el fuego parcial, centrada en no atacar infraestructuras civiles, y expresó su disposición a entablar conversaciones con Rusia para lograr una tregua.",
        imagen: "./assets/16.jpeg",
        categoria: "INTERNACIONAL",
        active: true
    };
    const noticia17 = {
        id: 17,
        titulo: "Gobierno colombiano propone referéndum sobre reforma laboral",
        fecha: "2025-04-22",
        desc_noticia: "El gobierno colombiano ha presentado 12 preguntas propuestas para un referéndum nacional destinado a reformar las leyes laborales y mejorar los beneficios de los trabajadores. Estas reformas incluyen la obligatoriedad del seguro de salud para trabajadores independientes, el pago doble por trabajo dominical y la creación de un fondo de pensiones para trabajadores rurales.",
        imagen: "./assets/17.jpeg",
        categoria: "POLÍTICA",
        active: true
    };
    const noticia18 = {
        id: 18,
        titulo: "FMI reduce previsión de crecimiento económico global",
        fecha: "2025-04-22",
        desc_noticia: "El Fondo Monetario Internacional (FMI) ha reducido su previsión de crecimiento económico global para 2025 del 3,3% al 2,8%, en medio de una creciente incertidumbre provocada por los altos aranceles impuestos por el presidente estadounidense Donald Trump.",
        imagen: "./assets/18.jpeg",
        categoria: "ECONOMÍA",
        active: true
    };
    const noticia19 = {
        id: 19,
        titulo: "Bogotá podría enfrentar apagones en 2025",
        fecha: "2025-04-22",
        desc_noticia: "El Consejo Nacional de Operación del sector eléctrico ha advertido que Bogotá podría experimentar apagones en 2025 debido a demoras en proyectos clave para el suministro de energía.",
        imagen: "./assets/19.jpeg",
        categoria: "NACIONAL",
        active: true
    };
    const noticia20 = {
        id: 20,
        titulo: "Presidente Petro alerta sobre posible escasez de agua en Bogotá",
        fecha: "2025-04-22",
        desc_noticia: "El presidente Gustavo Petro ha alertado sobre el riesgo de que Bogotá se quede sin agua en marzo de 2025 debido a la disminución de los niveles de los embalses que abastecen la ciudad.",
        imagen: "./assets/20.jpeg",
        categoria: "MEDIO AMBIENTE",
        active: true
    };
    const noticia21 = {
        id: 21,
        titulo: "Naufragio en el Río Congo deja más de 140 muertos",
        fecha: "2025-04-15",
        desc_noticia: "Un naufragio en el Río Congo ha dejado al menos 148 fallecidos y más de 100 desaparecidos tras el incendio y posterior hundimiento de una embarcación.",
        imagen: "./assets/21.jpeg",
        categoria: "INTERNACIONAL",
        active: true
    };
    const noticia22 = {
        id: 22,
        titulo: "Gobierno colombiano planea recorte a la inversión pública en 2025",
        fecha: "2025-04-22",
        desc_noticia: "El Gobierno colombiano reducirá en 39 billones de pesos la inversión pública en 2025 debido al alto endeudamiento que tiene el país por cuenta de la pandemia de covid-19.",
        imagen: "./assets/22.jpeg",
        categoria: "ECONOMÍA",
        active: true
    };
    const noticia23 = {
        id: 23,
        titulo: "Temporada de sequía podría extenderse hasta abril de 2025",
        fecha: "2025-04-22",
        desc_noticia: "Las condiciones de sequía en algunas zonas del territorio nacional podrían extenderse hasta abril de 2025, según el Instituto de Hidrología, Meteorología y Estudios Ambientales (Ideam).",
        imagen: "./assets/23.jpeg",
        categoria: "MEDIO AMBIENTE",
        active: true
    };
    const noticia24 = {
        id: 24,
        titulo: "Gobierno colombiano y ELN acuerdan reunirse en Caracas",
        fecha: "2025-04-22",
        desc_noticia: "El Gobierno colombiano y el ELN han acordado reunirse en Caracas del 20 al 25 de mayo para continuar con las negociaciones de paz.",
        imagen: "./assets/24.jpeg",
        categoria: "POLÍTICA",
        active: true
    };
    const noticia25 = {
        id: 25,
        titulo: "Festival Estéreo Picnic 2025 anuncia su cartel",
        fecha: "2025-04-22",
        desc_noticia: "El Festival Estéreo Picnic 2025 ha anunciado su cartel, que incluye artistas internacionales y nacionales de diversos géneros musicales.",
        imagen: "./assets/25.jpeg",
        categoria: "ENTRETENIMIENTO",
        active: true
    };
    const noticia26 = {
        id: 26,
        titulo: "Colombia será sede de la Conferencia Internacional sobre Reducción de Daños",
        fecha: "2025-04-22",
        desc_noticia: "Bogotá acogerá la Conferencia Internacional sobre Reducción de Daños del 27 al 30 de abril de 2025, reuniendo a más de 1.000 delegados para discutir políticas públicas en materia de drogas desde una perspectiva de salud pública y justicia social.",
        imagen: "./assets/26.jpeg",
        categoria: "SALUD",
        active: true
    };
    const noticia27 = {
        id: 27,
        titulo: "Luna llena rosa ilumina el cielo colombiano",
        fecha: "2025-05-06 20:05:00",
        desc_noticia: "El 13 de abril, los colombianos disfrutaron de la 'Luna Rosa', un fenómeno astronómico que coincide con la floración de ciertas plantas en primavera, ofreciendo un espectáculo nocturno impresionante.",
        imagen: "./assets/27.jpeg",
        categoria: "CIENCIA",
        active: true
    };
    const noticia28 = {
        id: 28,
        titulo: "Inician obras del Túnel del Toyo en Antioquia",
        fecha: "2025-04-22",
        desc_noticia: "Las autoridades locales y departamentales han comenzado las inversiones necesarias para la construcción del Túnel del Toyo, que será el más largo del país con 9,73 kilómetros, mejorando la conectividad entre Medellín y el Urabá antioqueño.",
        imagen: "./assets/28.jpeg",
        categoria: "INFRAESTRUCTURA",
        active: true
    };
    const noticia29 = {
        id: 29,
        titulo: "Recortes presupuestarios afectan proyectos de infraestructura en Colombia",
        fecha: "2025-04-22",
        desc_noticia: "El Gobierno colombiano ha anunciado recortes de 12 billones de pesos en el presupuesto nacional, lo que podría desacelerar la ejecución de múltiples proyectos de obras civiles y afectar el crecimiento del sector de infraestructura.",
        imagen: "./assets/29.jpeg",
        categoria: "ECONOMÍA",
        active: true
    };
    const noticia30 = {
        id: 30,
        titulo: "Mejoramiento de la Ruta de los Comuneros entre Bogotá y Bucaramanga",
        fecha: "2025-04-22",
        desc_noticia: "Se ha firmado un convenio para financiar el mejoramiento de la Ruta de los Comuneros, clave para la comunicación entre Bogotá y Bucaramanga, con una inversión de 1,4 billones de pesos y un período de ejecución de 20 años.",
        imagen: "./assets/30.jpeg",
        categoria: "INFRAESTRUCTURA",
        active: true
    };
    const noticia31 = {
        id: 31,
        titulo: "Nueva galería de arte moderno abre en Medellín",
        fecha: "2025-04-21",
        desc_noticia: "Una galería con obras de artistas emergentes abre sus puertas en el centro cultural de Medellín.",
        imagen: "./assets/31.jpeg",
        categoria: "ARTE",
        active: true
    };

    const noticia32 = {
        id: 32,
        titulo: "Encuentro internacional de muralismo en Bogotá",
        fecha: "2025-04-20",
        desc_noticia: "Artistas de todo el mundo decoran las calles de Bogotá con murales temáticos.",
        imagen: "./assets/32.jpeg",
        categoria: "ARTE",
        active: true
    };

    const noticia33 = {
        id: 33,
        titulo: "Obra inédita de Fernando Botero es subastada",
        fecha: "2025-04-19",
        desc_noticia: "Una pintura nunca antes vista del maestro Botero se vendió por millones en Nueva York.",
        imagen: "./assets/33.jpeg",
        categoria: "ARTE",
        active: true
    };

    const noticia34 = {
        id: 34,
        titulo: "Festival de teatro callejero llega a Cali",
        fecha: "2025-04-18",
        desc_noticia: "Las plazas y parques se llenan de teatro al aire libre durante una semana cultural en Cali.",
        imagen: "./assets/34.jpeg",
        categoria: "ARTE",
        active: true
    };

    const noticia35 = {
        id: 35,
        titulo: "Exposición de arte digital impacta en Cartagena",
        fecha: "2025-04-17",
        desc_noticia: "La tecnología se fusiona con el arte en una muestra que rompe barreras visuales.",
        imagen: "./assets/35.jpeg",
        categoria: "ARTE",
        active: true
    };

    const noticia36 = {
        id: 36,
        titulo: "Lanzan libro con las mejores obras de arte colombiano",
        fecha: "2025-04-16",
        desc_noticia: "Una recopilación de piezas destacadas que representan la evolución artística nacional.",
        imagen: "./assets/36.jpeg",
        categoria: "ARTE",
        active: true
    };

    const noticia37 = {
        id: 37,
        titulo: "Niños exponen esculturas en museo comunitario",
        fecha: "2025-04-15",
        desc_noticia: "Pequeños artistas muestran su talento en una exposición que promueve la creatividad infantil.",
        imagen: "./assets/37.jpeg",
        categoria: "ARTE",
        active: true
    };

    const noticia38 = {
        id: 38,
        titulo: "Pintores rurales se toman las redes sociales",
        fecha: "2025-04-14",
        desc_noticia: "Campesinos colombianos exponen su arte tradicional en plataformas digitales con gran éxito.",
        imagen: "./assets/38.jpeg",
        categoria: "ARTE",
        active: true
    };

    const noticia39 = {
        id: 39,
        titulo: "Arte reciclado transforma comunidades vulnerables",
        fecha: "2025-04-13",
        desc_noticia: "Iniciativa social convierte desechos en esculturas y esperanza en barrios marginados.",
        imagen: "./assets/39.jpeg",
        categoria: "ARTE",
        active: true
    };

    const noticia40 = {
        id: 40,
        titulo: "Premian cortometraje experimental en festival internacional",
        fecha: "2025-04-12",
        desc_noticia: "Una producción colombiana gana reconocimiento por su innovación visual en Europa.",
        imagen: "./assets/40.jpeg",
        categoria: "ARTE",
        active: true
    };

    const noticia41 = {
        id: 41,
        titulo: "Colombia clasifica al mundial sub-20",
        fecha: "2025-04-11",
        desc_noticia: "La selección juvenil aseguró su cupo con una victoria clave en el torneo clasificatorio.",
        imagen: "./assets/41.jpeg",
        categoria: "DEPORTES",
        active: true
    };

    const noticia42 = {
        id: 42,
        titulo: "Mariana Pajón gana oro en campeonato mundial de BMX",
        fecha: "2025-04-10",
        desc_noticia: "La ciclista antioqueña se corona campeona y continúa haciendo historia en su disciplina.",
        imagen: "./assets/42.jpeg",
        categoria: "DEPORTES",
        active: true
    };

    const noticia43 = {
        id: 43,
        titulo: "Liga femenina de fútbol rompe récords de asistencia",
        fecha: "2025-04-09",
        desc_noticia: "Más de 40 mil personas asistieron al clásico femenino entre equipos capitalinos.",
        imagen: "./assets/43.jpeg",
        categoria: "DEPORTES",
        active: true
    };

    const noticia44 = {
        id: 44,
        titulo: "Nuevo talento colombiano ficha por equipo europeo",
        fecha: "2025-04-08",
        desc_noticia: "Un joven delantero del Valle del Cauca firma contrato con club de primera división en Italia.",
        imagen: "./assets/44.jpeg",
        categoria: "DEPORTES",
        active: true
    };

    const noticia45 = {
        id: 45,
        titulo: "Medellín será sede de los Juegos Panamericanos Juveniles",
        fecha: "2025-04-07",
        desc_noticia: "La ciudad se prepara para recibir atletas de todo el continente en 2026.",
        imagen: "./assets/45.jpeg",
        categoria: "DEPORTES",
        active: true
    };

    const noticia46 = {
        id: 46,
        titulo: "Egan Bernal vuelve al podio en Europa",
        fecha: "2025-04-06",
        desc_noticia: "El ciclista colombiano demuestra su recuperación tras liderar una vuelta importante.",
        imagen: "./assets/46.jpeg",
        categoria: "DEPORTES",
        active: true
    };

    const noticia47 = {
        id: 47,
        titulo: "Selección colombiana de baloncesto avanza en eliminatorias",
        fecha: "2025-04-05",
        desc_noticia: "Con una destacada actuación colectiva, el equipo venció a su par centroamericano.",
        imagen: "./assets/47.jpeg",
        categoria: "DEPORTES",
        active: true
    };

    const noticia48 = {
        id: 48,
        titulo: "Se inaugura escuela deportiva en zona rural de Nariño",
        fecha: "2025-04-04",
        desc_noticia: "Niños de comunidades vulnerables tendrán acceso gratuito al deporte organizado.",
        imagen: "./assets/48.jpeg",
        categoria: "DEPORTES",
        active: true
    };

    const noticia49 = {
        id: 49,
        titulo: "Récord nacional en atletismo juvenil",
        fecha: "2025-04-03",
        desc_noticia: "Una atleta bogotana de 17 años rompe la marca en los 400 metros planos.",
        imagen: "./assets/49.jpeg",
        categoria: "DEPORTES",
        active: true
    };

    const noticia50 = {
        id: 50,
        titulo: "Final de Copa Colombia será en el estadio El Campín",
        fecha: "2025-04-02",
        desc_noticia: "Dos históricos del fútbol colombiano se enfrentarán por el título nacional.",
        imagen: "./assets/50.jpeg",
        categoria: "DEPORTES",
        active: true
    };
    const noticia51 = {
        id: 51,
        titulo: "Colombia lanza primer satélite de comunicaciones propio",
        fecha: "2025-04-01",
        desc_noticia: "El proyecto busca mejorar el acceso a internet en zonas rurales del país.",
        imagen: "./assets/51.jpeg",
        categoria: "TECNOLOGÍA",
        active: true
    };

    const noticia52 = {
        id: 52,
        titulo: "Universidad desarrolla robot para asistencia médica",
        fecha: "2025-03-31",
        desc_noticia: "Estudiantes crean un robot que ayuda a personas con movilidad reducida.",
        imagen: "./assets/52.jpeg",
        categoria: "TECNOLOGÍA",
        active: true
    };

    const noticia53 = {
        id: 53,
        titulo: "Nueva app colombiana combate el desperdicio de comida",
        fecha: "2025-03-30",
        desc_noticia: "La aplicación conecta negocios con excedentes de comida con fundaciones sociales.",
        imagen: "./assets/53.jpeg",
        categoria: "TECNOLOGÍA",
        active: true
    };

    const noticia54 = {
        id: 54,
        titulo: "Bogotá implementa buses eléctricos con IA",
        fecha: "2025-03-29",
        desc_noticia: "Los nuevos buses analizan rutas en tiempo real para mejorar la movilidad urbana.",
        imagen: "./assets/54.jpeg",
        categoria: "TECNOLOGÍA",
        active: true
    };

    const noticia55 = {
        id: 55,
        titulo: "Estudiantes ganan concurso internacional con videojuego educativo",
        fecha: "2025-03-28",
        desc_noticia: "El juego enseña matemáticas a niños de primaria de forma interactiva y divertida.",
        imagen: "./assets/55.jpeg",
        categoria: "TECNOLOGÍA",
        active: true
    };

    const noticia56 = {
        id: 56,
        titulo: "Medellín será epicentro de la cumbre de innovación digital",
        fecha: "2025-03-27",
        desc_noticia: "Empresas de todo el mundo se reunirán para discutir el futuro de la tecnología.",
        imagen: "./assets/56.jpeg",
        categoria: "TECNOLOGÍA",
        active: true
    };

    const noticia57 = {
        id: 57,
        titulo: "Lanzan app para monitorear cultivos desde el celular",
        fecha: "2025-03-26",
        desc_noticia: "Pequeños agricultores pueden ahora optimizar riego y fertilización en tiempo real.",
        imagen: "./assets/57.jpeg",
        categoria: "TECNOLOGÍA",
        active: true
    };

    const noticia58 = {
        id: 58,
        titulo: "Cali apuesta por energías limpias con paneles solares públicos",
        fecha: "2025-03-25",
        desc_noticia: "Edificios gubernamentales ya operan parcialmente con energía solar.",
        imagen: "./assets/58.jpeg",
        categoria: "TECNOLOGÍA",
        active: true
    };

    const noticia59 = {
        id: 59,
        titulo: "Nuevo chip colombiano mejora el rendimiento de drones",
        fecha: "2025-03-24",
        desc_noticia: "El diseño permite vuelos más estables y con menor consumo energético.",
        imagen: "./assets/59.jpeg",
        categoria: "TECNOLOGÍA",
        active: true
    };

    const noticia60 = {
        id: 60,
        titulo: "Plataforma de aprendizaje en línea rompe récords de usuarios",
        fecha: "2025-03-23",
        desc_noticia: "Miles de estudiantes acceden diariamente a cursos gratuitos y certificados.",
        imagen: "./assets/60.jpeg",
        categoria: "TECNOLOGÍA",
        active: true
    };
    const noticia61 = {
        id: 61,
        titulo: "Actriz colombiana triunfa en serie de Netflix",
        fecha: "2025-04-01",
        desc_noticia: "Su papel en una producción internacional la ha llevado al reconocimiento global.",
        imagen: "./assets/61.jpeg",
        categoria: "FARÁNDULA",
        active: true
    };

    const noticia62 = {
        id: 62,
        titulo: "Cantante urbano anuncia gira por Europa",
        fecha: "2025-03-31",
        desc_noticia: "El artista recorrerá 10 países en su primer tour internacional.",
        imagen: "./assets/62.jpeg",
        categoria: "FARÁNDULA",
        active: true
    };

    const noticia63 = {
        id: 63,
        titulo: "Influencer colombiano lanza línea de ropa",
        fecha: "2025-03-30",
        desc_noticia: "Con más de 5 millones de seguidores, ahora incursiona en la moda.",
        imagen: "./assets/63.jpeg",
        categoria: "FARÁNDULA",
        active: true
    };

    const noticia64 = {
        id: 64,
        titulo: "Actor de telenovelas revela nuevo proyecto en Hollywood",
        fecha: "2025-03-29",
        desc_noticia: "Después de años en la televisión nacional, se lanza al cine internacional.",
        imagen: "./assets/64.jpeg",
        categoria: "FARÁNDULA",
        active: true
    };

    const noticia65 = {
        id: 65,
        titulo: "Exreina de belleza participa en reality de supervivencia",
        fecha: "2025-03-28",
        desc_noticia: "La modelo sorprende a sus fans con su valentía en un programa extremo.",
        imagen: "./assets/65.jpeg",
        categoria: "FARÁNDULA",
        active: true
    };

    const noticia66 = {
        id: 66,
        titulo: "Pareja de celebridades anuncia compromiso en redes sociales",
        fecha: "2025-03-27",
        desc_noticia: "El anuncio generó millones de reacciones en cuestión de horas.",
        imagen: "./assets/66.jpeg",
        categoria: "FARÁNDULA",
        active: true
    };

    const noticia67 = {
        id: 67,
        titulo: "Humorista colombiano debuta en programa argentino",
        fecha: "2025-03-26",
        desc_noticia: "Con su estilo único, conquista el público internacional.",
        imagen: "./assets/67.jpeg",
        categoria: "FARÁNDULA",
        active: true
    };

    const noticia68 = {
        id: 68,
        titulo: "Grupo musical se reúne tras una década",
        fecha: "2025-03-25",
        desc_noticia: "La noticia emociona a los fanáticos que esperaban este momento desde hace años.",
        imagen: "./assets/68.jpeg",
        categoria: "FARÁNDULA",
        active: true
    };

    const noticia69 = {
        id: 69,
        titulo: "Modelo colombiana protagoniza campaña global de moda",
        fecha: "2025-03-24",
        desc_noticia: "La campaña fue lanzada en más de 50 países simultáneamente.",
        imagen: "./assets/69.jpeg",
        categoria: "FARÁNDULA",
        active: true
    };

    const noticia70 = {
        id: 70,
        titulo: "Director de cine anuncia película con elenco colombiano",
        fecha: "2025-03-23",
        desc_noticia: "Se espera que la producción tenga una fuerte presencia en festivales internacionales.",
        imagen: "./assets/70.jpeg",
        categoria: "FARÁNDULA",
        active: true
    };
    const noticia71 = {
        id: 71,
        titulo: "Jugador de fútbol colombiano logra contrato con equipo europeo",
        fecha: "2025-04-10",
        desc_noticia: "El joven talento del fútbol colombiano ficha por un club en la Premier League.",
        imagen: "./assets/71.jpeg",
        categoria: "DEPORTES",
        active: true
    };

    const noticia72 = {
        id: 72,
        titulo: "La selección femenina de fútbol se clasifica al mundial",
        fecha: "2025-04-11",
        desc_noticia: "Después de una emocionante victoria, las colombianas aseguran su lugar en el próximo mundial.",
        imagen: "./assets/72.jpeg",
        categoria: "DEPORTES",
        active: true
    };

    const noticia73 = {
        id: 73,
        titulo: "Campeón de motocross se prepara para la final mundial",
        fecha: "2025-04-09",
        desc_noticia: "El colombiano busca su segundo título mundial en la próxima carrera.",
        imagen: "./assets/73.jpeg",
        categoria: "DEPORTES",
        active: true
    };

    const noticia74 = {
        id: 74,
        titulo: "Carrera de ciclismo internacional en Colombia rompe récord de participantes",
        fecha: "2025-04-05",
        desc_noticia: "Más de 10,000 ciclistas de todo el mundo se dan cita en el evento anual.",
        imagen: "./assets/74.jpeg",
        categoria: "DEPORTES",
        active: true
    };

    const noticia75 = {
        id: 75,
        titulo: "Atleta paralímpico colombiano gana medalla de oro en los juegos",
        fecha: "2025-04-04",
        desc_noticia: "El deportista colombiano brilla en los juegos paralímpicos con una actuación excepcional.",
        imagen: "./assets/75.jpeg",
        categoria: "DEPORTES",
        active: true
    };

    const noticia76 = {
        id: 76,
        titulo: "Tenista nacional avanza a semifinales de torneo internacional",
        fecha: "2025-04-06",
        desc_noticia: "Con una victoria contundente, el joven tenista asegura su lugar en las semifinales.",
        imagen: "./assets/76.jpeg",
        categoria: "DEPORTES",
        active: true
    };

    const noticia77 = {
        id: 77,
        titulo: "Fútbol sala colombiano se consagra campeón de la Copa América",
        fecha: "2025-04-08",
        desc_noticia: "La selección de fútbol sala de Colombia levanta el trofeo tras una emocionante final.",
        imagen: "./assets/77.jpeg",
        categoria: "DEPORTES",
        active: true
    };

    const noticia78 = {
        id: 78,
        titulo: "Maratonista colombiana bate récord nacional",
        fecha: "2025-04-07",
        desc_noticia: "La atleta rompe su propio récord en la maratón de Bogotá.",
        imagen: "./assets/78.jpeg",
        categoria: "DEPORTES",
        active: true
    };

    const noticia79 = {
        id: 79,
        titulo: "La liga de baloncesto de Colombia se internacionaliza",
        fecha: "2025-04-02",
        desc_noticia: "Se confirma la participación de equipos colombianos en torneos internacionales.",
        imagen: "./assets/79.jpeg",
        categoria: "DEPORTES",
        active: true
    };

    const noticia80 = {
        id: 80,
        titulo: "Colombiana conquista el oro en los juegos panamericanos de atletismo",
        fecha: "2025-04-03",
        desc_noticia: "La atleta nacional obtiene la medalla de oro en los 100 metros planos.",
        imagen: "./assets/80.jpeg",
        categoria: "DEPORTES",
        active: true
    };
    const noticia81 = {
        id: 81,
        titulo: "Exposición de arte contemporáneo abre en Bogotá",
        fecha: "2025-04-04",
        desc_noticia: "Reconocidos artistas exponen sus obras en la galería central de la capital.",
        imagen: "./assets/81.jpeg",
        categoria: "ARTE",
        active: true
    };

    const noticia82 = {
        id: 82,
        titulo: "Pintora colombiana gana premio internacional de acuarela",
        fecha: "2025-04-05",
        desc_noticia: "La artista fue galardonada en París por su innovador uso del color.",
        imagen: "./assets/82.jpeg",
        categoria: "ARTE",
        active: true
    };

    const noticia83 = {
        id: 83,
        titulo: "Festival de muralismo embellece calles de Medellín",
        fecha: "2025-04-06",
        desc_noticia: "Artistas urbanos transforman espacios públicos con sus murales.",
        imagen: "./assets/83.jpeg",
        categoria: "ARTE",
        active: true
    };

    const noticia84 = {
        id: 84,
        titulo: "Escultor antioqueño inaugura obra monumental en parque público",
        fecha: "2025-04-07",
        desc_noticia: "La escultura fue creada en homenaje a la paz y la esperanza.",
        imagen: "./assets/84.jpeg",
        categoria: "ARTE",
        active: true
    };

    const noticia85 = {
        id: 85,
        titulo: "Galería de arte abre convocatoria para jóvenes talentos",
        fecha: "2025-04-08",
        desc_noticia: "Se invita a artistas emergentes a participar en una exposición colectiva.",
        imagen: "./assets/85.jpeg",
        categoria: "ARTE",
        active: true
    };

    const noticia86 = {
        id: 86,
        titulo: "Teatro callejero sorprende en plazas de Cartagena",
        fecha: "2025-04-09",
        desc_noticia: "Actores llevan obras clásicas y modernas al espacio público.",
        imagen: "./assets/86.jpeg",
        categoria: "ARTE",
        active: true
    };

    const noticia87 = {
        id: 87,
        titulo: "Artista digital colombiano lanza galería virtual en 3D",
        fecha: "2025-04-10",
        desc_noticia: "La experiencia permite recorrer una exposición desde casa.",
        imagen: "./assets/87.jpeg",
        categoria: "ARTE",
        active: true
    };

    const noticia88 = {
        id: 88,
        titulo: "Museo nacional inaugura nueva sala dedicada al arte precolombino",
        fecha: "2025-04-11",
        desc_noticia: "La muestra resalta la riqueza artística de las culturas indígenas.",
        imagen: "./assets/88.jpeg",
        categoria: "ARTE",
        active: true
    };

    const noticia89 = {
        id: 89,
        titulo: "Artista plástico transforma desechos en obras de arte",
        fecha: "2025-04-12",
        desc_noticia: "Su trabajo busca generar conciencia sobre el reciclaje y la sostenibilidad.",
        imagen: "./assets/89.jpeg",
        categoria: "ARTE",
        active: true
    };

    const noticia90 = {
        id: 90,
        titulo: "Concierto sinfónico une música y pintura en vivo",
        fecha: "2025-04-13",
        desc_noticia: "Pintores crean en el escenario mientras suena música clásica.",
        imagen: "./assets/90.jpeg",
        categoria: "ARTE",
        active: true
    };


    noticias.push(noticia01);
    noticias.push(noticia02);
    noticias.push(noticia03);
    noticias.push(noticia04);
    noticias.push(noticia05);
    noticias.push(noticia06);
    noticias.push(noticia07);
    noticias.push(noticia08);
    noticias.push(noticia09);
    noticias.push(noticia10);
    noticias.push(noticia11);
    noticias.push(noticia12);
    noticias.push(noticia13);
    noticias.push(noticia14);
    noticias.push(noticia15);
    noticias.push(noticia16);
    noticias.push(noticia17);
    noticias.push(noticia18);
    noticias.push(noticia19);
    noticias.push(noticia20);
    noticias.push(noticia21);
    noticias.push(noticia22);
    noticias.push(noticia23);
    noticias.push(noticia24);
    noticias.push(noticia25);
    noticias.push(noticia26);
    noticias.push(noticia27);
    noticias.push(noticia28);
    noticias.push(noticia29);
    noticias.push(noticia30);
    noticias.push(noticia31);
    noticias.push(noticia32);
    noticias.push(noticia33);
    noticias.push(noticia34);
    noticias.push(noticia35);
    noticias.push(noticia36);
    noticias.push(noticia37);
    noticias.push(noticia38);
    noticias.push(noticia39);
    noticias.push(noticia40);
    noticias.push(noticia41);
    noticias.push(noticia42);
    noticias.push(noticia43);
    noticias.push(noticia44);
    noticias.push(noticia45);
    noticias.push(noticia46);
    noticias.push(noticia47);
    noticias.push(noticia48);
    noticias.push(noticia49);
    noticias.push(noticia50);
    noticias.push(noticia51);
    noticias.push(noticia52);
    noticias.push(noticia53);
    noticias.push(noticia54);
    noticias.push(noticia55);
    noticias.push(noticia56);
    noticias.push(noticia57);
    noticias.push(noticia58);
    noticias.push(noticia59);
    noticias.push(noticia60);
    noticias.push(noticia61);
    noticias.push(noticia62);
    noticias.push(noticia63);
    noticias.push(noticia64);
    noticias.push(noticia65);
    noticias.push(noticia66);
    noticias.push(noticia67);
    noticias.push(noticia68);
    noticias.push(noticia69);
    noticias.push(noticia70);
    noticias.push(noticia71);
    noticias.push(noticia72);
    noticias.push(noticia73);
    noticias.push(noticia74);
    noticias.push(noticia75);
    noticias.push(noticia76);
    noticias.push(noticia77);
    noticias.push(noticia78);
    noticias.push(noticia79);
    noticias.push(noticia80);
    noticias.push(noticia81);
    noticias.push(noticia82);
    noticias.push(noticia83);
    noticias.push(noticia84);
    noticias.push(noticia85);
    noticias.push(noticia86);
    noticias.push(noticia87);
    noticias.push(noticia88);
    noticias.push(noticia89);
    noticias.push(noticia90);

    console.log("se cargaron " + noticias.length + " han sido cargadas en memoria");

}


cargarNoticias();

//ostrarSeleccion(noticiaSect)
