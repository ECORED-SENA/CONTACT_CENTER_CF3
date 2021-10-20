export default {
  global: {
    componenteFormativo: 'La comunicación en BPO ',
    descripcionCurso:
      'A través de este componente formativo el aprendiz debe apropiar los elementos y conceptos necesarios, relacionados con la comunicación en <i>Contact Center</i> BPO, todos sus procesos y características, que le permitan afianzar habilidades y destrezas que garanticen interacciones exitosas con clientes a través de los diferentes canales propios de este sector.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La comunicación en <i>Contact Center</i> BPO',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de comunicación',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Canales de comunicación en <i>Contact Center</i> BPO',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Barreras de la comunicación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas de sondeo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Normas de calidad propias del <i>Contact Center</i> BPO',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Marcos, S. y Garrán, M. (2017). La comunicación oral. Actividades para el desarrollo de la expresión oral. Ogigia 21: 47-66. ',
      link: 'https://revistas.uva.es/index.php/ogigia/article/view/3402/2782',
    },
    {
      referencia: 'Maya, A. (1990). La comunicación escrita. SENA. ',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/3823/cartilla_04_comunicacion_escrita.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Maya, A., Sánchez, D.,  Niño,  A. y Avella, J.  (1990). La comunicación verbal y no verbal. SENA. ',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/3825/cartilla_03_comunicacion_verbal_no_verbal.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Niño, B., Rodríguez, M., Rodríguez, R., Ahumada, J., Murcia, R. y Duque, O. (1985). Qué es la comunicación. SENA. ',
      link: 'https://hdl.handle.net/11404/5150',
    },
    {
      referencia:
        'Rubio, D. (2018). Netiqueta institucional. Revista Estudios Institucionales, Vol. V, Nº 8. p. 227-241 ',
      link: 'http://revistas.uned.es/index.php/EEII/article/view/22181/pdf',
    },
  ],
  glosario: [
    {
      termino: 'Calidad',
      significado: 'Ejecución de actividades con excelencia y eficiencia.',
    },
    {
      termino: 'Comunicación',
      //terminoHtml: '<em>Suftware</em>',
      significado:
        'Proceso mediante el cual el emisor envía un mensaje al receptor y este lo codifica, interpreta y emite una respuesta.',
    },
    {
      termino: 'Comunicación no verbal',
      significado:
        'Proceso mediante el cual se realizan procesos comunicativos utilizando como medio el cuerpo, los movimientos de las manos, los gestos, etc.',
    },
    {
      termino: 'Comunicación verbal',
      //terminoHtml: '<em>Áectores</em>',
      significado:
        'Proceso mediante el cual se emiten mensajes utilizando la palabra.',
    },
    {
      termino: 'Digitación',
      significado:
        'Proceso mediante el cual se introducen datos en una computadora o incluso a través de una máquina de escribir de manera eficiente, ágil y precisa.',
    },
    {
      termino: 'Red social',
      significado:
        'Espacios en Internet creados por personas con intereses, preferencias y gustos comunes.',
    },
    {
      termino: 'Sondeo',
      significado:
        'Formulación de interrogantes como medio para obtener información.',
    },
  ],
  complementario: [
    {
      texto:
        'Domínguez, Mª. (2009). La importancia de la comunicación no verbal en el desarrollo cultural de las sociedades. Razón y Palabra, vol. 14, núm. 70, noviembre-enero. Instituto Tecnológico y de Estudios Superiores de Monterrey. ',
      tipo: 'PDF',
      descarga: '/downloads/la_importancia_comunicacion.pdf',
    },
    {
      texto:
        'Eduteka. (2005). Técnica práctica para aprender a digitar. Eduteka. ',
      tipo: 'Portal libre para docentes',
      link: 'http://eduteka.icesi.edu.co/articulos/Teclado2',
    },
    {
      texto:
        'Eduteka. (2002). Las 10 reglas básicas de la netiqueta. Eduteka. ',
      tipo: 'Portal libre para docentes ',
      link: 'http://eduteka.icesi.edu.co/articulos/Netiqueta',
    },
    {
      texto:
        'Bustos, I. (2012). La voz. La técnica y la expresión. Editorial Paidotribo.',
      tipo: 'Libro ',
      descarga: '/downloads/la_voz.pdf',
    },
    {
      texto:
        'Elder, L. y Paul, R. (2002). El arte de formular preguntas esenciales.  Fundación para Pensamiento Crítico. ',
      tipo: 'PDF',
      descarga: '/downloads/el_arte_de_formular_preguntas.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nadia Patricia Granados Amado',
        cargo: 'Instructora técnica BPO ',
        centro:
          'Centro de Gestión de Mercados Logística y Tecnologías de la Información - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Sandra Carolina Durán López'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo Lopez ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },

      {
        nombre: 'John Andres Ayala Angarita',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah Gamboa',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
