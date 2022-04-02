<template>

<header class="container d-flex flex-wrap justify-content-center py-3 mb-4">
  <a href="index.html" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
      <img class="img-rounded" width="40" height="32" src="patisserie-logo.jpg"/>
      <span class="fs-4 nav-title">Vie En Rose</span>
  </a>

  <ul class="nav nav-pills">
      <li class="nav-item"><router-link to="/" class="nav-link active" aria-current="page">Home</router-link></li>
      <li class="nav-item"><router-link to="/menu"  class="nav-link">Pasteles</router-link></li>
      <li class="nav-item"><router-link to="/pedidos" class="nav-link">Pedidos</router-link></li>
      <li class="nav-item"><router-link to="/insumos" class="nav-link">Insumos</router-link></li>
      <li class="nav-item"><router-link to="/about"  class="nav-link">Cantacto</router-link></li>
  </ul>
</header>


  <router-view/>
</template>

<style>
body,html{
    height: 100%;
}


::-webkit-scrollbar {
    width: 8px;/*to horizontal scroll*/
    height: 8px;/*to vertical scroll*/
    border-radius: 4px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 4px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: transparent;
    background-image: linear-gradient(0deg, pink, rgb(247, 226, 230)) !important;
    border-radius: 4px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
    background-color: #1b96f1 !important;
  }
  

.text-white{
    color: white;
}

.text-black{
    color: black;
}

.text-cake{
    color: rgb(192, 133, 143);
}

.bg{
    background-image: url("./assets/background-landing-page2.jpg");
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}



.img-rounded{
    border-radius: 50%;
}

.nav-title{
    margin-left: 10px;
    color: white;
    font-weight: bold;
    font-family:'Dancing Script', cursive;
}



.nav-link{
    font-family:'Dancing Script', cursive;
    color: #302504;
}

/*Cuando se pasa por los items del menu principal*/
.nav-link:hover{
    font-weight: bolder;
    color: white;
}

.nav-link.active{
    background-color: transparent !important;
    color: white !important;
}

.body-slogan-title{
    font-family:'Dancing Script', cursive;
    color: white;   
    font-weight: bold;
    font-size: 500%; 
}


.body-slogan-description{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: white;   
    font-weight: lighter;
    font-size: 80%; 
    text-align: end;
    margin-left: 2em;
}
.body-slogan-description > span{
    font-weight: bold ;
    color: white;
    font-style: italic;
}
  

.footer-contact{
    margin-left: 10px;
    color: white;
    width: 100%;
    font-weight: bold;
    text-align: end;
    font-family:'Dancing Script', cursive;
}
</style>
