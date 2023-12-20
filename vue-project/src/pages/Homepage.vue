<script>
import AOS from "aos";
AOS.init();


</script>

<template>
    <body>
        <div class="hero">
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
          <div class="content">
            <div data-aos="fade-up"
           data-aos-duration="3000" class="d-flex flex-row">
              <div  class="d-flex flex-column" style="width: 50%;">
                <p>AGENCY ESPERTA DI</p>
                <h1>SOCIAL NETWORK & SVILUPPO WEB</h1>
                <div class="homebutdiv d-flex align-items-left">
                <router-link :to="{ name: 'Info' }">
                      <p class="homebutton">DIMMI DI PIU</p> 
                </router-link>
                </div>
                
                
                
                
              </div>
              <div style="width: 50%;">
                
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
           <img src="/stretta.png" alt="">
           </div>
         </div>
        </section>
        <section>
           <div class="offer d-flex justify-content-center align-items-center">
            <div class="offercont text-center" style="width: 50%;">
            <h1 style="font-size: 250px;">I NOSTRI SERVIZI</h1>
             <div class="iconoffer d-flex align-items-center justify-content-between mb-5">
               <div><img src="/phone.png" alt=""><h3>Web Development</h3></div>
               <div><img src="/code.png" alt=""><h3>SSM</h3></div>
               <div><img src="/chat.png" alt=""><h3>Foto e Video</h3></div>
             </div>
             <div class="d-flex align-items-center justify-content-between mt-5">
                 <div><img src="/mail.png" alt=""><h3>Promo</h3></div>
                 <div><img src="/mail.png" alt=""><h3>Content Create</h3></div>
                 <div><img src="/mail.png" alt=""><h3>Service</h3></div>
             </div>
            </div>
          </div>
          </section>
          
     
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

.intro h1{
  color: #c6a567;
}

.intro p{
  font-size: 85px;
}

.logo{
  position: fixed;
  width: 10%;
}

.intrologo{
  width: 20%;
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
  font-size: 50px;
  color: #d6d6d6;
}

.offercont h1{
  margin-bottom: 150px !important;
}

.homebuttonimg{
  background-image: url(/backpc2.jpg);
  height: 300px;
  width: 1000px;
}

.homebutdiv{
  margin-top: 200px;
}

.homebutton{
  text-decoration: none;
  display: inline-block;
  color: #d6d6d6;
  font-size: 130px !important;
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





</style>
