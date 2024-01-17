<script setup>
  import AOS from "aos";
  
  AOS.init();
  
     
</script>

<template>
   <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

   <body>
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
            <div class="projecthome d-flex align-items-center justify-content-center">
                <h1>IL NOSTRO LAVORO</h1>
            </div>
     
         </section>
         <section>
              <div class="intro d-flex justify-content-center align-items-center">
               <div data-aos="fade-up"
            data-aos-duration="3000" class="projectdescription text-center p-5" style="width: 50%;">
               <h1 style="font-size: 250px;">IL NOSTRO OBIETTIVO?</h1>
                <p>Collaborare con aziende e attività con alto potenziale di crescita,e portarle al massimo della loro rendità economica,sfruttando l'online e le nostre strategie di marketing digitale. In questo modo permettiamo a esse di avere la massima visibilità possibile combinata a un'immagine forte e di impatto,per dare valore al brand. Di seguito troverete un insieme di lavori e operazioni che abbiamo compiuto per i nostri clienti fidati!
                </p>
                <img class="intrologo" src="/stretta.png" alt="">
                </div>
              </div>
          </section>
          <section>
                <!--PRIMA ILLUSTRAZIONE-->
             <div class="col-12 illustration blackill">
               <div data-aos="fade-up" data-aos-duration="1000"
                 class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row p-5">
                 <div
                   class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                   <h1 class="h1blue">SVILUPPO SITI E APP</h1>
                   <p>Sviluppo di siti web professionali e app per Play Store e App Store. I siti sono creati da zero e personalizzabili al 100%, per permettere ai nostri clienti di crearsi un'identità originale,che si distingua dalla concorrenza. </p>
                   
                 </div>
                 <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                   <img src="/webdev.jpg" alt="">
                 </div>
               </div>
             </div>
             <!--SECONDA ILLUSTRAZIONE-->
             <div  class="col-12 illustration silverill ">
               <div data-aos="fade-up" data-aos-duration="1000"
                 class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row p-5 ">
                 <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                   <img src="/gestionesocial.jpg" alt="">
                 </div>
                 <div
                   class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                   <h1 class="h1blue">SOCIAL MEDIA MANAGEMENT</h1>
                   <p>Eccelliamo nel social media management con strategie mirate, analisi dettagliate del pubblico e contenuti coinvolgenti. Gestiamo con maestria piattaforme come Facebook, Instagram, Twitter e TikTok, curando profili aziendali con pianificazione e interazioni attente. Ottimizziamo la portata organica, utilizziamo pubblicità mirate e affrontiamo dinamiche online con prontezza, mantenendo una reputazione solida in un ambiente digitale in continua evoluzione.</p>
                 </div>
               </div>
             </div>
             <!--TERZA ILLUSTRAZIONE-->
             <div  class="col-12 illustration blackill">
               <div data-aos="fade-up" data-aos-duration="1000"
                 class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row p-5">
                 <div
                   class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                   <h1 class="h1blue">BIGLIETTI DA VISITA</h1>
                   <p>
     La nostra creazione di biglietti da visita è una sintesi di creatività e professionalità. Ogni dettaglio, dalla grafica alla scelta dei materiali, è curato per rappresentare al meglio il vostro marchio. Il design accattivante e la qualità premium trasmettono un'impressione memorabile, garantendo un impatto duraturo nel mondo degli affari.</p>
                 </div>
                 <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                   <img src="/arakadiacut.jpg" alt="">
                 </div>
               </div>
             </div>
             <!--QUARTA ILLUSTRAZIONE-->
             <div  class="col-12 illustration silverill ">
                    <div data-aos="fade-up" data-aos-duration="1000"
                      class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row  p-5">
                      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <img src="/drmaxcut.jpg" alt="">
                      </div>
                      <div
                        class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                        <h1 class="h1blue">LISTINI</h1>
                        <p>I nostri listini incarnano trasparenza e valore. Presentano chiaramente i nostri servizi e prodotti con dettagli esaustivi, evidenziando prezzi competitivi e opzioni personalizzabili. La struttura intuitiva facilita la comprensione, offrendo ai clienti un'esperienza di acquisto agevole e informata, sottolineando il nostro impegno per la soddisfazione del cliente.</p>
                      </div>
                    </div>
                  </div>

                  <!--QUINTA ILLUSTRAZIONE-->
                  <div  class="col-12 illustration blackill">
                    <div data-aos="fade-up" data-aos-duration="1000"
                      class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row p-5">
                      <div
                        class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                        <h1 class="h1blue">MANIFESTI</h1>
                        <p>
          
     I nostri manifesti pubblicitari sono il trionfo della creatività e dell'impatto visivo. Con design accattivanti e formati personalizzabili, catturano l'attenzione del pubblico target. L'equilibrio tra messaggi persuasivi e grafica di alta qualità li rende strumenti efficaci per promuovere il vostro brand, offrendo un ritorno sull'investimento tangibile.</p>
                      </div>
                      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <img src="/manifest.jpg" alt="">
                      </div>
                    </div>
                  </div>

                  
          </section>
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
                <p>Chiusi-54043-SI</p>
                <p>socialsystem@outlook.it</p>
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
     font-size: clamp(10px,3vw,30px) !important;
}

.projecthome{
  height: 100vh;
  width: 100% !important;
  background-image: url(/projectbackground.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.projecthome h1{
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

.projecthome h1:hover {
  -webkit-text-stroke: 2px #c3a367;
  color: transparent;

}

.intro{
  width: 100%;
  height: 80vh;
  background-color:#202020 ;
  color: #d6d6d6;
}

.intro h1{
  color: #c6a567;
  font-size:clamp(35px,3vw,200px) !important;
}

.intro p{
  font-size:clamp(16px,2vw,100px);
}

.logo{
  position: fixed;
  width: 10%;
}

.intrologo{
  width: 15%;
}

.illustration {
 
  opacity: 1;
  transition: all .4s;

}



.illustration button:hover {
  background-color: #ed5ea3;
  transition: all .4s;
}


.illustration h1 {
  font-size:clamp(16px,5vw,50px);

}

.illustration p{
     font-size: 90px !important;
     color: #d6d6d6;
}

.illustration img {
  width: 100%;
  border-radius: 10px;
}

.h1blue{
     color: #c3a367;
}

.blackill{
     background-color: #030203;
}

.silverill{
     background-color: #202020;
}


@media screen and (min-width: 1730px) {

  .illustration p {
    font-size: 23px !important;
  }

  .esteticap {
    font-size: 21px !important;
  }

}

@media screen and (max-width: 1730px) {

  .illustration p {
    font-size: 20px !important;
  }

  .esteticap {
    font-size: 19px !important;
  }

}

@media screen and (max-width: 1600px) {

  .illustration p {
    font-size: 23px !important;
  }

}

@media screen and (max-width: 1500px) {

  .illustration p {
    font-size: 22px !important;
  }

  .esteticap {
    font-size: 17px !important;
  }

}

@media screen and (max-width: 1400px) {

  .illustration p {
    font-size: 20px !important;
  }

  .esteticap {
    font-size: 16px !important;
  }

}

@media screen and (max-width: 1300px) {

  .illustration p {
    font-size: 19px !important;
  }

  .esteticap {
    font-size: 14px !important;
  }

}

@media screen and (max-width: 1200px) {

  .illustration p {
    font-size: 17px !important;
  }

}

@media screen and (max-width: 1100px) {

  .illustration p {
    font-size: 19px !important;
  }

}

@media screen and (max-width: 1020px) {

  .illustration p {
    font-size: 17.5px !important;
  }

}

@media screen and (max-width: 900px) {

  .illustration p {
    font-size: 15px !important;
  }

}

@media screen and (max-width: 800px) {

  .illustration p {
    font-size: 12px !important;
  }

}

@media screen and (max-width: 768px) {

  .illustration p {
    font-size: 11.5px !important;
  }

}

@media screen and (max-width: 767px) {

  .illustration p {
    font-size: 20px !important;
  }

  .esteticap {
    font-size: 18px;
  }

}

@media screen and (max-width: 585px) {

  .projectdescription{
     width: 80% !important;
  }

}

@media screen and (max-width: 450px) {

  .illustration p {
    font-size: 16px !important;
  }

  .esteticap {
    font-size: 18px;
  }

}





@media screen and (max-width: 1000px) and (min-width: 808px) {
  .h1blue {
    font-size: 23px !important;
  }


  .illustration h3 {
    font-size: 18px !important;
  }

  .illustration button {
    width: 60%;
  }
}

@media screen and (max-width: 808px) and (min-width: 768px) {
  .h1blue{
    font-size: 21px !important;
  }


  .illustration h3 {
    font-size: 16px !important;
  }

  .illustration button {
    width: 60%;
  }
}
</style>
