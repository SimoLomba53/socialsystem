<script>
import AOS from "aos";
AOS.init();


</script>

<template>
    <body>
        <div class="hero 2">
           <video class="video-player back-video"  preload="auto" autoplay="autoplay" loop muted playsinline>
              <source
                src='/videosocial.mp4' 
                type="video/mp4"
              />
            </video>
          <nav class="homenav">
            <ul>
                <li>
                  <router-link :to="{ name: 'ProjectList' }">
                    <div class="d-flex flex-row align-items-center">
                             <img src="/logosocialsystem2.png" alt="" style="width: 50px;">
                             <p class="d-none d-md-block">SOCIAL SYSTEM</p>
                    </div>
                 </router-link>
                </li>
            </ul>
            
            <ul>
                <li>
                  <router-link :to="{ name: 'Info' }">
                    <p class="navbutton ">CONTATTACI</p> 
                  </router-link>
                </li>
            </ul>
          </nav>
          <div class="content gg">
            <div data-aos="fade-up"
           data-aos-duration="3000" class="d-flex flex-column flex-md-row justify-content-center align-items-center">
               <div class="d-block d-md-none" style="width: 50%;">
                
                 <img src="/logosocialsystem2.png" alt="" style="width: 80%;">
               
               
                </div>
              <div  class="d-flex flex-column" style="width: 70%;">
                <p>AGENCY ESPERTA DI</p>
                <h1>SOCIAL NETWORK & SVILUPPO WEB</h1>
                <div class="homebutdiv d-flex align-items-left">
                <router-link :to="{ name: 'ProjectList' }">
                      <p class="homebutton">DIMMI DI PIU</p> 
                </router-link>
                </div>
                
                
                
                
              </div>
              <div class="d-none d-md-block" style="width: 50%;">
                
               <img src="/logosocialsystem2.png" alt="" style="width: 80%;">
               
               
              </div>
             
            </div>
            
          </div>
        </div>


        <section>
         <div class="intro d-flex justify-content-center align-items-center">
          <div data-aos="fade-up"
       data-aos-duration="3000" class="text-center" style="width: 50%;">
          <h1 style="font-size: 250px;">CHI SIAMO?</h1>
           <p>Social System è una dinamica web agency all'avanguardia, specializzata nella creazione di soluzioni digitali innovative e strategie di marketing online. Il nostro team esperto combina creatività e tecnologia per sviluppare siti web accattivanti, app intuitive e campagne social media coinvolgenti. Con un approccio centrato sul cliente, ci impegniamo a comprendere le esigenze uniche di ogni cliente per fornire soluzioni su misura. La nostra missione è migliorare la presenza online dei nostri clienti, aumentare la loro visibilità e stimolare l'engagement. Con passione per il design e l'efficacia delle strategie digitali, Social System si distingue come partner affidabile e innovativo nel panorama digitale.
           </p>
           <img class="intrologo" src="/stretta.png" alt="">
           </div>
         </div>
        </section>
        <section>
           <div class="offer d-flex justify-content-center align-items-center">
            <div class="offercont text-center" style="width: 50%;">
            <h1 style="font-size: 250px;">I NOSTRI SERVIZI</h1>
             <div class="iconoffer d-flex flex-column flex-md-row align-items-center justify-content-between mb-5">
               <div><img src="/codeicon.png" alt=""><h3>Web Development</h3></div>
               <div><img src="/socialicon.png" alt=""><h3>SSM</h3></div>
               <div><img src="/chaticon.png" alt=""><h3>Recensioni</h3></div>
             </div>
             <div class="d-flex flex-column flex-md-row align-items-center justify-content-between mt-5">
                 <div><img src="/videoicon.png" alt=""><h3>Content Create</h3></div>
                 <div><img src="/graficon.png" alt=""><h3>Sponsor</h3></div>
                 <div><img src="/assistenzaicon.png" alt=""><h3>Assistenza</h3></div>
             </div>
            </div>
          </div>
          </section>

          <section>
            <div class="teampart d-flex justify-content-center align-items-center">
              <div class="teamcontent d-flex justify-content-center align-items-center flex-column">
              <h1 class="text-center mb-5">IL NOSTRO TEAM</h1>
              <div class="teamimage d-flex">
                <div><img src="/slteam4.png" alt=""></div>
                <div><img src="/amteam.png" alt=""></div>
                <div><img src="/tmteam.png" alt=""></div>
                <div><img src="/idteam.png" alt=""></div>
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
          <a href="" class="text-white me-4">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-google"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-github"></i>
          </a>
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
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
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
              <p>
                <a href="#!" class="text-white">WebSite & App</a>
              </p>
              <p>
                <a href="#!" class="text-white">SSM</a>
              </p>
              <p>
                <a href="#!" class="text-white">Pubblicità</a>
              </p>
              <p>
                <a href="#!" class="text-white">Graphic Support</a>
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold">Links</h6>
              <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style="width: 60px; background-color: #7c4dff; height: 2px"
                  />
              <p>
                <a href="#!" class="text-white">Your Account</a>
              </p>
              <p>
                <a href="#!" class="text-white">Become an Affiliate</a>
              </p>
              <p>
                <a href="#!" class="text-white">Shipping Rates</a>
              </p>
              <p>
                <a href="#!" class="text-white">Help</a>
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold">Contatti</h6>
              <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style="width: 60px; background-color: #7c4dff; height: 2px"
                  />
              <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
              <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
              <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->

      <!-- Copyright -->
      <div class=" copyright text-center p-3" style="background-color:#202020">
        <span>© 2020 Copyright:</span>
        <a class="text-white" href="https://mdbootstrap.com/"
           >SOCIAL SYSTEM</a
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
.homenav{
  height:10vh;
  background-color: #030203;
  position: fixed;
  z-index: 100;
}

.navbutton{
  text-decoration: none;
  display: inline-block;
  color: #c4a666 !important;
  font-size: 140px;
  border: 2px solid #c4a666;
  padding: 14px 70px;
  border-radius: 1000px;
  margin-top: 20px;
  transition: 1s;
  
}

.navbutton:hover {
  background-color: #fcfbfd;
  color: #c4a666;
  transform: scale(1.2);
}

.homenav p{
  font-size: 75px;
  display: flex;
  justify-content:center ;
  align-items: center;
  color: #d6d6d6;
}

.intro{
  width: 100%;
  height: 80vh;
  background-color:#202020 ;
  color: #d6d6d6;
}
.intrologo{
  width: 15%;
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
  width: 20%;
}

.gg h1{
  font-size: clamp(30px,8vw,400px);
}

.gg p{
  font-size: clamp(30px,8vw,400px);
}

.offer{
  width: 100%;
  height: 100vh;
  background-color: black;
}

.offer h1{
  color: #c6a567;
}

.offercont h3{
  font-size:clamp(16px,2vw,70px);
  color: #d6d6d6;
}

.offercont h1{
  margin-bottom: 150px !important;
  font-size:clamp(35px,3vw,200px) !important;
}

.homebuttonimg{
  background-image: url(/backpc2.jpg);
  height: 300px;
  width: 1000px;
}

.homebutdiv{
  margin-top:clamp(60px,3vw,200px);
}

.homebutton{
  text-decoration: none;
  display: inline-block;
  color: #d6d6d6;
  font-size:clamp(20px,4vw,130px)!important;
  border: 2px solid #fcfbfd;
  padding: 14px 70px;
  border-radius: 1000px;
  transition: 1s;
  text-align: left;
  
}

.homebutton:hover {
  background-color: #fcfbfd;
  color: white;
  transform: scale(1.2);
}

.hero{
  
  background-repeat: no-repeat;
  background-size: cover;
  
}

.offercont img{
  width:clamp(70px,7vw,800px) !important;
  transition: 1s;
}

.offercont img:hover{
 transform: scale(1.1); 
}


.teampart{
  width: 100%;
  height: 100vh;
  background-color: #202020;
}

.teamcontent{
  width: 70%;
}

.teamcontent h1{
  color: #c6a567;
  font-size:clamp(35px,3vw,200px) !important;
  text-align: center !important;
}

.teamimage img{
  width: 100%;
  transition: 1s;
  height: 60vh;


}

.teamimage img:hover{
  filter: grayscale(80%); 


}

.teamimage div{
  width: 25%;


}

.companyname{
  padding: 100px;
}

.companyname h6{
  font-size:clamp(35px,3vw,200px) !important;
  color: #c4a666;
}

.companyname p{
  font-size:clamp(16px,2vw,100px);
  color:#d6d6d6
}

.getconnected{
  font-size:clamp(16px,2vw,100px);
}

.copyright span{
  font-size:clamp(16px,2vw,100px);
}

.copyright a{
  font-size:clamp(16px,2vw,100px);
}


</style>
