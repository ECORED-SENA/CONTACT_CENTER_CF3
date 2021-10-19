<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
  
    
    p.mb-5 La comunicación es quizás una de las actividades más importantes y necesarias durante la vida del ser humano y el ejercicio habitual de la misma, permite la adquisición de nuevos conocimientos, relacionamientos sociales permanentes, expresión de sentimientos e ideas, al igual que emociones y <u>todo estos</u>, a su vez pasan a ser la base de toda relación exitosa; es por esta razón que se hace necesario abordar esta misma comunicación vista desde el ámbito laboral y en especial en los entornos del <i>Contact Center</i> BPO.

    .row.fondo-intro.mb-5
      .col-lg-6.py-lg-5.my-5.px-lg-0
        .contenedor-transparente
          p.text-white Para lo cual y a través de este componente formativo se realizará un reconocimiento de las cualidades comunicativas que se deben mantener para una correcta y exitosa interacción con clientes en las empresas de <i>Contact Center</i> BPO, abordando los conceptos y los procesos inherentes para este tipo de desempeños, de manera tal que se pueda comprender la importancia que tiene la comunicación en la industria.

    .row.justify-content-center.mb-4
      .col-lg-5.align-self-center
        figure.mb-5
          img.mx-auto(src='@/assets/curso/img-intro1.svg', alt='imagen ambiental', style='width: 455px;') 
      .col-lg-7
        p.mb-4 Es importante tener en cuenta que al reconocer las cualidades comunicativas necesarias para la interacción con clientes se clarificará que 
          span.etiqueta(style='background-color: #DAD6F7; color: #12263F;') la importancia de la comunicación no está centrada solamente en las comunicaciones verbales, sino que ella hace parte de un conjunto de actividades y habilidades que se relacionan entre sí
          |  y, que de nada sirve afianzar una u otra, ya que para generar procesos comunicativos exitosos no solo es suficiente hablar bien, sino que es necesario utilizar otras formas de comunicación que al final demostrarán que complementan las formas de comunicación verbal. 
        p.mb-4 Adicionalmente y a través de este reconocimiento se tendrán en cuenta las condiciones, las características y los entornos donde se generan los procesos comunicativos, así como los canales necesarios para ello, de manera que al finalizar se cuente con el suficiente conocimiento para poder aplicar estrategias de comunicación en áreas del <i>Contact Center</i> BPO, enmarcadas por parámetros de calidad, pertinencia y asertividad. 



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
