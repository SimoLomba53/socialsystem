<script setup>
import AOS from "aos";
AOS.init();
</script>

<template>

  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <body class="infobody">
    <section>
     
       <nav class="homenav">
              <ul>
                  <li>
                    <router-link :to="{ name: 'ProjectList' }">
                      <p><img src="/logosocialsystem2.png" alt="" style="width: 300px;">SOCIAL SYSTEM</p>
                   </router-link>
                  </li>
              </ul>
            
              <ul>
                  <li>
                    <router-link :to="{ name: 'Info' }">
                      <p class="navbutton">CONTATTACI</p> 
                    </router-link>
                  </li>
              </ul>
       </nav>
       <div class="contacthome d-flex align-items-center justify-content-center">
           <h1>CONTATTACI</h1>
       </div>
     
    </section>
       <div  class="datecontact d-flex flex-column p-5 justify-content-center ">
          <div data-aos="fade-up" data-aos-duration="1000" class="contactcontent">
            <h1>SOCIAL SYSTEM</h1>
            <p><img src="/mapicon.png" alt="">CON SEDE PRINCIPALE IN EMILIA ROMAGNA E OPERATORI ATTIVI IN TUTTO IL PIEMONTE</p>
            <p><span class="azzurro"><i class="fa-solid fa-phone"></i></span>333 666 9999</p>
            <p><img src="/mailpng.png" alt="">socialsystem@gmail.com</p>

            <p class="direttsanit">ORARI DI CONTATTO:</p>
            <p class="direttsanit">SIAMO ATTIVI DAL LUNEDI AL VENERDI</p>

            <p class="direttsanit">DALLE 9:00 ALLE 19:00</p>
          </div>
        </div>

      <div class="maps">
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5834.56022272534!2d11.942809897820988!3d43.01449092929807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132951d993f613c9%3A0x565385bb93de7c06!2s53043%20Chiusi%20SI!5e0!3m2!1sit!2sit!4v1703246414919!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
      </div>

  </body>
</template>

<style>
  .homenav{
  height:10vh;
  background-color: #030203;
  position: fixed;
  z-index: 100;
}

.contacthome{
  height: 100vh;
  width: 100% !important;
  background-image: url(/phoneback.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.contacthome h1{
  color: #c3a367;
  transition: 0.5s;
  margin-bottom: -30px;
  font-size: 650px;
    font-weight: 600;
    letter-spacing: .11vw;
    line-height: .9;
    text-transform: uppercase;
    text-align: left;
}

.contacthome h1:hover {
  -webkit-text-stroke: 2px #c3a367;
  color: transparent;

}

.hero{
  width: 100%;
}

.datecontact{
  height: 80vh;
  background-color: #030203;
}

.datecontact h1 {
  
  color: #c3a367;
  font-size: 400px;
  font-weight: bold;
}

.datecontact i {
  color: #3bbce1;
  margin-right: 10px;
}

.datecontact p {
  font-size: 105px;
  color: #d6d6d6;

}

.datecontact img{
  width: 150px;
}



.maps iframe {
  width: 100%;
  height: 40vh;
}

</style>
