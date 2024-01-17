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
                    <router-link :to="{ name: 'Homepage' }">
                      <div class="d-flex flex-row align-items-center">
                             <img src="/logosocialsystem2.png" alt="" style="width: 50px;">
                             <p class="d-none d-md-block ss">SOCIAL SYSTEM</p>
                           </div>
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
            <p>SEDE IN TOSCANA OPERATORI ATTIVI IN TUTTO IL PIEMONTE</p>
            <p><span class="azzurro"></span>389 884 9274 - 392 460 7242</p>
            <p><img src="" alt="">socialsystem@outlook.it</p>

            <p class="direttsanit">ORARI DI CONTATTO:</p>
            <p class="direttsanit">SIAMO ATTIVI DAL LUNEDI AL VENERDI</p>

            <p class="direttsanit">DALLE 9:00 ALLE 19:00</p>
          </div>
        </div>

      <div class="maps">
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5834.56022272534!2d11.942809897820988!3d43.01449092929807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132951d993f613c9%3A0x565385bb93de7c06!2s53043%20Chiusi%20SI!5e0!3m2!1sit!2sit!4v1703246414919!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
      </div>
      <div>

      <!-- Footer -->
      <footer
              class="text-center text-lg-start text-white"
              style="background-color:#030203"
              >
        <!-- Section: Social media -->
        <section
                 class="d-flex justify-content-between p-4"
                 style="background-color: #c4a666"
                 >
          <!-- Left -->
          <div class="me-5">
            <span class="getconnected">Get connected with us on social networks:</span>
          </div>
          <!-- Left -->

          <!-- Right -->
          <div>
            <!--<a href="" class="text-white me-4">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-google"></i>
          </a>-->
            <a href="https://www.instagram.com/socialsystem.it?igsh=MzRlODBiNWFlZA==" class="text-white me-4">
              <i class="fab fa-instagram"></i>
            </a>

            <!--<a href="" class="text-white me-4">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-github"></i>
          </a>-->
          </div>
          <!-- Right -->
        </section>
        <!-- Section: Social media -->

        <!-- Section: Links  -->
        <section class="companyname">
          <div class="col-10 offset-1 text-center text-md-start mt-5">
            <!-- Grid row -->
            <div class="row mt-3">
              <!-- Grid column -->
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <!-- Content -->
                <h6 class="text-uppercase fw-bold">Agency</h6>
                <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style="width: 60px; background-color: #7c4dff; height: 2px"
                    />
                <p>
                 Social System, dinamica web agency all'avanguardia, specializzata nella creazione di soluzioni digitali innovative e strategie di marketing online.
                </p>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold">SERVIZI</h6>
                <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style="width: 60px; background-color: #7c4dff; height: 2px"
                    />
                <router-link :to="{ name: 'ProjectList' }">   
                <p>
                  <a href="#!" class="text-white">WebSite & App</a>
                </p>
                </router-link> 
                <router-link :to="{ name: 'ProjectList' }">  
                <p>
                  <a href="#!" class="text-white">SSM</a>
                </p>
                </router-link> 
                <router-link :to="{ name: 'ProjectList' }">  
                <p>
                  <a href="#!" class="text-white">Pubblicità</a>
                </p>
                </router-link>
                <router-link :to="{ name: 'ProjectList' }">   
                <p>
                  <a href="#!" class="text-white">Graphic Support</a>
                </p>
                </router-link> 
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
          
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold">Contatti</h6>
                <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style="width: 60px; background-color: #7c4dff; height: 2px"
                    />
                <p> Chiusi-54043-SI</p>
                <p> socialsystem@outlook.it</p>
                <p>389 884 9274</p>
                <p>392 460 7242</p>
              </div>
              <!-- Grid column -->
            </div>
            <!-- Grid row -->
          </div>
        </section>
        <!-- Section: Links  -->

        <!-- Copyright -->
        <div class=" copyright text-center p-3" style="background-color:#202020">
          <span>©2024 - socialsystem.it -</span>
          <a class="text-white" href="https://mdbootstrap.com/"
             > All Right Reserved</a
            >
        </div>
        <!-- Copyright -->
      </footer>
      <!-- Footer -->

    </div>
    <!-- End of .container -->

  </body>
</template>

<style>

.ss{
  margin-bottom: 0px !important;
  margin-left: 10px;
  font-weight: bold;
}


.homenav ul{
     margin-bottom: 0px !important;
}

 .homenav{
  height:10vh;
  background-color: #030203;
  position: fixed;
  z-index: 100;
}

.homenav p{
     font-size: clamp(10px,3vw,80px);
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
  font-size: clamp(30px,8vw,600px);
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
  font-size:clamp(25px,3vw,220px) !important;
  font-weight: bold;
}

.datecontact i {
  color: #3bbce1;
  margin-right: 10px;
}

.datecontact p {
  font-size:clamp(12px,2vw,120px);
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
