<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 La comunicación en Contact Center BPO
    
  
    .row.justify-content-center.fondo-tema1-1
      .col-lg-12.px-md-5.mt-4.mb-4
        .row.justify-content-center.mb-2
          .col-lg-6.mb-4
            p.mb-4 Cuando se habla de comunicación se hace referencia a una de las necesidades más importantes de todos los seres humanos, ya que por medio de esta se transmiten sentimientos, ideas, información y actitudes a otras personas, generando en ellas reacciones tanto positivas como negativas, las cuales afianzan ese proceso de expresar y recibir mensajes.
            p.mb-4 Durante toda la historia de la humanidad la comunicación ha estado presente, de hecho, no existe ningún momento o espacio de la vida del ser humano donde no se estén generando procesos de comunicación, puesto que,se trata de una actividad que se aplica en cualquier contexto, espacio y momento.
            .cajon.color-acento-contenido.p-4.mb-0
              p.mb-0 Dentro del ámbito empresarial y en especial con la aparición de los Contact Center BPO, la comunicación ha tomado una mayor relevancia, debido a que este es uno de los contextos donde se hace vital la buena comunicación, sobre todo cuando de interactuar con clientes se trata.
          .col-lg-6.mb-4(data-aos="fade-left")
            figure
              img.mx-auto(src='@/assets/curso/tema1/img1.svg', alt='imagen ambiental', style='width: 395px;')    
        
        .row.justify-content-center.mb-2
          .col-lg-6.mb-4.align-self-center
            figure
              img.mx-auto(src='@/assets/curso/tema1/img2.svg', alt='imagen ambiental', style='width: auto;')    
          .col-lg-6.mb-4.align-self-center
            p.mb-4 Es claro y como se mencionaba anteriormente, la comunicación no solo se presenta en el ámbito personal, el ámbito laboral también es uno de los contextos generadores de comunicación, ahora bien, si la comunicación se da dentro del marco de generar relaciones con clientes, es allí donde cobra gran relevancia, ya que a través del tiempo se ha podido demostrar que toda buena comunicación con clientes logra mejores experiencias, al igual que incrementa la productividad de toda compañía.
            p.mb-4 Es así como las áreas de Contact Center BPO no son la excepción,  ya que esta industria tiene como  factor principal para funcionar y ser productiva la comunicación con sus clientes, de esta depende que las compañías se mantengan en el mercado y dentro de la industria, sus estrategias de comunicación resultan ser claves a la hora de satisfacer las necesidades de los clientes, pues, para nadie es un secreto que mientras se logre generar comunicaciones empáticas, claras y concretas con los clientes, mayor será su intención de permanecer con la empresa y mayor será su grado de satisfacción con la misma. 

    
    #t_1_1.titulo-segundo
      .h2 1.1 Tipos de comunicación

    p.mb-5 Teniendo en cuenta que la comunicación es un proceso mediante el cual las personas transmiten y reciben permanentemente diferentes mensajes es importante precisar que este es un proceso que no se da por sí solo, requiere de unos factores específicos que sin ellos difícilmente se generarían espacios de comunicación, los cuales podrá conocer mediante el siguiente recurso de aprendizaje: 

    .row.justify-content-center.fondo-tema1-2
      .col-lg-12.px-md-5.mb-4
        .row.justify-content-center.mb-2
          .col-auto
            ImagenInfografica.color-secundario.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/img3.svg', alt='imagen ambiental', style="width:610px")
                  
              .tarjeta.p-3(x="18%" y="65%" style="background-color: #f6f6f6; border-radius:0; color: #12263F;")
                .row.justify-content-center
                  .col-auto.align-self-center
                    .round--number
                      p.mb-0 1
                  .col.align-self-center
                    p.mb-0 #[strong Receptor:] es quien recibe el mensaje.
              
              .tarjeta.p-3(x="38%" y="15%" style="background-color: #f6f6f6; border-radius:0; color: #12263F;")
                .row.justify-content-center
                  .col-auto.align-self-center
                    .round--number
                      p.mb-0 2
                  .col.align-self-center
                    p.mb-0 #[strong Feedback ]
              
              .tarjeta.p-3(x="50%" y="35%" style="background-color: #f6f6f6; border-radius:0; color: #12263F;")
                .row.justify-content-center
                  .col-auto.align-self-center
                    .round--number
                      p.mb-0 3
                  .col.align-self-center
                    p.mb-0 #[strong Mensaje: ]  corresponde a la información que se quiere transmitir. 
              
              .tarjeta.p-3(x="85%" y="65%" style="background-color: #f6f6f6; border-radius:0; color: #12263F;")
                .row.justify-content-center
                  .col-auto.align-self-center
                    .round--number
                      p.mb-0 4
                  .col.align-self-center
                    p.mb-0 #[strong Emisor:]  es como su palabra lo indica quien emite el mensaje.
              
              .tarjeta.p-3(x="62%" y="85%" style="background-color: #f6f6f6; border-radius:0; color: #12263F;")
                .row.justify-content-center
                  .col-auto.align-self-center
                    .round--number
                      p.mb-0 5
                  .col.align-self-center
                    p.mb-0 #[strong Código:] signos o símbolos que se emplean para construir y enviar el mensaje, por ejemplo, la escritura.
              
              .tarjeta.p-3(x="52%" y="100%" style="background-color: #f6f6f6; border-radius:0; color: #12263F;")
                .row.justify-content-center
                  .col-auto.align-self-center
                    
                    p.mb-0 #[strong Canal:] medio por el que se envía el mensaje, por ejemplo, el canal es presencial.
              
        
        .row.justify-content-center.mb-5
          .col-lg-10.mb-5
            p.mb-0 Ahora bien, dentro del proceso de comunicación, además de los factores que participan, existen dos formas universales para su realización, las cuales tienen como principal objetivo facilitar el proceso independiente del contexto, el canal y el código que se utilice.  Ellas son: 











</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
