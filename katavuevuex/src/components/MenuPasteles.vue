<template >
    <div id="modal-shopping-cart" class="modal" tabindex="-1">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h3 class="modal-title cursive">Realizar orden</h3>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form>
                <div class="modal-body">

                    <div class="modal-lg modal-dialog-scrollable wrapple">
                       
                            <div class="row">
                                <h5 class="modal-subtitle ">Datos de entrega</h5>
                                <hr>
                            </div>

                            <div class="container my-4">
                                <div class="row">
                                    <div class="col-sm-6 wrapple mb-3">
                                        <input type="text" class="input-cart" name="nombre" placeholder="Nombre" required>
                                    </div>
    
                                    <div class="col-sm-6 wrapple mb-3">
                                        <input type="text" class="input-cart" name="nombre" placeholder="Apellidos" required>
                                    </div>
    
                                    <div class="col-sm-6 wrapple mb-3">
                                        <input type="email" class="input-cart" name="nombre" placeholder="Email" required>
                                    </div>
    
                                    <div class="col-sm-6 wrapple mb-3">
                                        <input type="tel"  class="input-cart" name="nombre" placeholder="Telefono" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
                                        <br><small class="input-example-label">Ej: 123-456-7890</small>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="row">
                                <h5 class="modal-subtitle ">Carrito</h5>
                                <hr>
                            </div>

                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="card mb-3" >
                                        <div class="row g-0">
                                            <div class="col-md-4 d-flex justify-content-center align-items-center">
                                                <img  src="../assets/pastel1.jpg" class="img-fluid img-cake-details-cart " alt="...">
                                            </div>

                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title cursive">Bûche de Noël</h5>
                                                    <p class="card-text cake-description-cart">Es el postre emblemático de Francia para compartir con la familia en estas fechas. Se remonta a la tradición precristiana de quemar en el hogar un tronco o leño grande de madera, para celebrar el solsticio de invierno y el fuego nuevo del año a punto de empezar, así como alejar la oscuridad.</p>
                                                    
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <h2 class="cake-option-title-cart">2 Sabores</h2>
                                                        </div>
                                                        <div class="col-sm-6">
                                                                    <h2 class="cake-option-title-cart"> 3 Adornos</h2>
                                                        </div>
                                                    </div>
                                                        
                                                        
                                                    <div class="row">
                                                        <hr>
                                                        <div class="col-sm-12 d-flex justify-content-end align-items-end">
                                                            <span>Total Pieza 380.00 MXN</span>
                                                
                                                        </div>
                                            
                                                    </div>
                                                    
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    
                                </div>

                                <div class="col-sm-12">
                                    <div class="card mb-3" >
                                        <div class="row g-0">
                                            <div class="col-md-4 d-flex justify-content-center align-items-center">
                                                <img  src="../assets/pastel2.jpeg" class="img-fluid img-cake-details-cart " alt="...">
                                            </div>

                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title cursive">Bûche de Noël</h5>
                                                    <p class="card-text cake-description-cart">Es el postre emblemático de Francia para compartir con la familia en estas fechas. Se remonta a la tradición precristiana de quemar en el hogar un tronco o leño grande de madera, para celebrar el solsticio de invierno y el fuego nuevo del año a punto de empezar, así como alejar la oscuridad.</p>
                                                    
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <h2 class="cake-option-title-cart">2 Sabores</h2>
                                                        </div>
                                                        <div class="col-sm-6">
                                                           
                                                                    <h2 class="cake-option-title-cart"> 3 Adornos</h2>
                                                               
                                                    
                                                        </div>
                                                    </div>
                                                        
                                                        
                                                    <div class="row">
                                                        <hr>
                                                        <div class="col-sm-12 d-flex justify-content-end align-items-end">
                                                            <span>Total Pieza 380.00 MXN</span>
                                                
                                                        </div>
                                            
                                                    </div>
                                                    
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    
                                </div>

                                <div class="col-sm-12">
                                    <div class="card mb-3" >
                                        <div class="row g-0">
                                            <div class="col-md-4 d-flex justify-content-center align-items-center">
                                                <img  src="../assets/pastel3.jpeg" class="img-fluid img-cake-details-cart " alt="...">
                                            </div>

                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title cursive">Bûche de Noël</h5>
                                                    <p class="card-text cake-description-cart">Es el postre emblemático de Francia para compartir con la familia en estas fechas. Se remonta a la tradición precristiana de quemar en el hogar un tronco o leño grande de madera, para celebrar el solsticio de invierno y el fuego nuevo del año a punto de empezar, así como alejar la oscuridad.</p>
                                                    
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <h2 class="cake-option-title-cart">2 Sabores</h2>
                                                        </div>
                                                        <div class="col-sm-6">
                                                          
                                                                    <h2 class="cake-option-title-cart"> 3 Adornos</h2>
                                                             
                                                    
                                                        </div>
                                                    </div>
                                                        
                                                        
                                                    <div class="row">
                                                        <hr>
                                                        <div class="col-sm-12 d-flex justify-content-end align-items-end">
                                                            <span>Total Pieza 380.00 MXN</span>
                                                
                                                        </div>
                                            
                                                    </div>
                                                    
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    
                                </div>
                            </div>
                       
                    </div>
                </div>
                <div class="modal-footer d-block">
                    <div class="row">
                        <div class="col-sm-6 d-flex justify-content-start align-items-start">
                            <p class="cursive">Total a Pagar 1,140 MXN</p>
                        </div>
                        <div class="col-sm-6 d-flex justify-content-end align-items-end">
                            <button type="submit" class="btn btn-add-patisserie" >Ordenar</button>

                        </div>
                    </div>
                    
                </div>
                </form>
              </div>
            </div>
        </div>

        <div id="modal-decorations" class="modal" tabindex="-1">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title cursive">Selección de decoración</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="modal-dialog-scrollable">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card mb-3" >
                                    <div class="row g-0">

                                        <div class="col-md-4 d-flex justify-content-center align-items-center">
                                            <img  src="../assets/adorno1.jpeg" class="img-fluid img-cake-details-cart " alt="...">
                                        </div>

                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title cursive">Corazon de Oro</h5>
                                                <p class="card-text cake-description-cart">Adorno de corazon color oro de tamaño de 5cm x 5cm comestible sabor vainilla</p>
       
                                                <div class="row">
                                                    <div class="form-check form-switch ms-3">
                                                        <input class="form-check-input switch-pink" type="checkbox" id="flexSwitchCheckDefault">
                                                        <label class="cake-option-title" for="flexSwitchCheckDefault">Agregar......5 MXN</label>
                                                        
                                                      </div>
                                                </div>
                                                
                                                
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                
                            </div>

                            <div class="col-sm-12">
                                <div class="card mb-3" >
                                    <div class="row g-0">

                                        <div class="col-md-4 d-flex justify-content-center align-items-center">
                                            <img  src="../assets/mar-y-perlas.jpeg" class="img-fluid img-cake-details-cart " alt="...">
                                        </div>

                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title cursive">Mar y perlas</h5>
                                                <p class="card-text cake-description-cart">Adorno de perlas de chocolate blanco y carocoles de fondant de vainilla</p>
       
                                                <div class="row">
                                                    <div class="form-check form-switch ms-3">
                                                        <input class="form-check-input switch-pink" type="checkbox" id="flexSwitchCheckDefault">
                                                        <label class="cake-option-title" for="flexSwitchCheckDefault">Agregar......65 MXN</label>
                                                        
                                                      </div>
                                                </div>
                                                
                                                
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                
                            </div>

                            
                        </div>
                      </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-add-patisserie" data-bs-dismiss="modal">Guardar Cambios</button>
                </div>
              </div>
            </div>
        </div>

        <div class="bg-subpages">
<header class="container d-flex flex-wrap justify-content-center py-3 mb-4">
            <a href="index.html" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span class="fs-4 "></span>
            </a>

            
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-shopping-cart" id="btn-shopping-cart" class="d-flex align-items-center h-100 justify-content-center">
                        <div class="mask-container me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart3 text-black patisserie-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            <div class="mask-right-top counter-cakes">4</div>
                        </div>
                        
                    </a>
                    
                </li>
                <li class="nav-item"><h1 class="nav-subtitle">Pasteles</h1></li>
            </ul>
        </header>

        <section class="container cake-list">
            <div class="row">
                <h1 class="cake-type-title ">1 Selecciona tu pastel</h1>
                <hr>
            </div>
            <div class=" list-row p-3">
                <div class="card cake-item me-3 p-0">
                    <div class="mask-container">
                        <img src="../assets/pastel1.jpg" class="img-fluid img-cake-item" alt="...">

                        <div class="mask d-flex justify-content-center align-items-center">
                            <div >
                                <h5 class=" card-title cake-item-name cursive">Bûche de Noël</h5>
                                <h5 class=" card-title cake-item-price">300 MXN</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="card cake-item me-3 p-0">
                    <div class="mask-container">
                        <img src="../assets/postre2.jpg" class="img-fluid img-cake-item" alt="...">

                        <div class="mask d-flex justify-content-center align-items-center">
                            <div >
                                <h5 class=" card-title cake-item-name cursive">Noël à Paris</h5>
                                <h5 class=" card-title cake-item-price">50 MXN</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="card cake-item me-3 p-0">
                    <div class="mask-container">
                        <img src="../assets/pastel2.jpeg" class="img-fluid img-cake-item" alt="...">

                        <div class="mask d-flex justify-content-center align-items-center">
                            <div >
                                <h5 class=" card-title cake-item-name cursive">fleur rose</h5>
                                <h5 class=" card-title cake-item-price">85 MXN</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="card cake-item me-3 p-0">
                    <div class="mask-container">
                        <img src="../assets/pastel3.jpeg" class="img-fluid img-cake-item" alt="...">

                        <div class="mask d-flex justify-content-center align-items-center">
                            <div >
                                <h5 class=" card-title cake-item-name cursive">Délice à La Fraise</h5>
                                <h5 class=" card-title cake-item-price">60 MXN</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="card cake-item me-3 p-0">
                    <div class="mask-container">
                        <img src="../assets/pastel4.jpeg" class="img-fluid img-cake-item" alt="...">

                        <div class="mask d-flex justify-content-center align-items-center">
                            <div >
                                <h5 class=" card-title cake-item-name cursive">Macaron</h5>
                                <h5 class=" card-title cake-item-price">15 MXN c/p</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="card cake-item me-3 p-0">
                    <div class="mask-container">
                        <img src="../assets/pastel1.jpg" class="img-fluid img-cake-item" alt="...">

                        <div class="mask d-flex justify-content-center align-items-center">
                            <div >
                                <h5 class=" card-title cake-item-name cursive">Bûche de Noël</h5>
                                <h5 class=" card-title cake-item-price">300 MXN</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="card cake-item me-3 p-0">
                    <div class="mask-container">
                        <img src="../assets/postre2.jpg" class="img-fluid img-cake-item" alt="...">

                        <div class="mask d-flex justify-content-center align-items-center">
                            <div >
                                <h5 class=" card-title cake-item-name cursive">Noël à Paris</h5>
                                <h5 class=" card-title cake-item-price">50 MXN</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="card cake-item me-3 p-0">
                    <div class="mask-container">
                        <img src="../assets/pastel2.jpeg" class="img-fluid img-cake-item" alt="...">

                        <div class="mask d-flex justify-content-center align-items-center">
                            <div >
                                <h5 class=" card-title cake-item-name cursive">fleur rose</h5>
                                <h5 class=" card-title cake-item-price">85 MXN</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="card cake-item me-3 p-0">
                    <div class="mask-container">
                        <img src="../assets/pastel3.jpeg" class="img-fluid img-cake-item" alt="...">

                        <div class="mask d-flex justify-content-center align-items-center">
                            <div >
                                <h5 class=" card-title cake-item-name cursive">Délice à La Fraise</h5>
                                <h5 class=" card-title cake-item-price">60 MXN</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="card cake-item me-3 p-0">
                    <div class="mask-container">
                        <img src="../assets/pastel4.jpeg" class="img-fluid img-cake-item" alt="...">

                        <div class="mask d-flex justify-content-center align-items-center">
                            <div >
                                <h5 class=" card-title cake-item-name cursive">Macaron</h5>
                                <h5 class=" card-title cake-item-price">15 MXN c/p</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="card cake-item me-3 p-0">
                    <div class="mask-container">
                        <img src="../assets/pastel1.jpg" class="img-fluid img-cake-item" alt="...">

                        <div class="mask d-flex justify-content-center align-items-center">
                            <div >
                                <h5 class=" card-title cake-item-name cursive">Bûche de Noël</h5>
                                <h5 class=" card-title cake-item-price">300 MXN</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="card cake-item me-3 p-0">
                    <div class="mask-container">
                        <img src="../assets/postre2.jpg" class="img-fluid img-cake-item" alt="...">

                        <div class="mask d-flex justify-content-center align-items-center">
                            <div >
                                <h5 class=" card-title cake-item-name cursive">Noël à Paris</h5>
                                <h5 class=" card-title cake-item-price">50 MXN</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="card cake-item me-3 p-0">
                    <div class="mask-container">
                        <img src="../assets/pastel2.jpeg" class="img-fluid img-cake-item" alt="...">

                        <div class="mask d-flex justify-content-center align-items-center">
                            <div >
                                <h5 class=" card-title cake-item-name cursive">fleur rose</h5>
                                <h5 class=" card-title cake-item-price">85 MXN</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="card cake-item me-3 p-0">
                    <div class="mask-container">
                        <img src="../assets/pastel3.jpeg" class="img-fluid img-cake-item" alt="...">

                        <div class="mask d-flex justify-content-center align-items-center">
                            <div >
                                <h5 class=" card-title cake-item-name cursive">Délice à La Fraise</h5>
                                <h5 class=" card-title cake-item-price">60 MXN</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="card cake-item me-3 p-0">
                    <div class="mask-container">
                        <img src="../assets/pastel4.jpeg" class="img-fluid img-cake-item" alt="...">

                        <div class="mask d-flex justify-content-center align-items-center">
                            <div >
                                <h5 class=" card-title cake-item-name cursive">Macaron</h5>
                                <h5 class=" card-title cake-item-price">15 MXN c/p</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>       
        </section>

        <section class="container pb-3 cake-details">
            

            <div class="row">
                <h1 class="cake-type-title">2 Personaliza tu pastel</h1>
                <hr>
            </div>
            <div class="row row-cols-12 row-cols-md-12 g-4">
                <div class="col">
                    <div class="card mb-3" >
                        <div class="row g-0">
                            <div class="col-md-4 d-flex justify-content-center align-items-center">
                            <img  src="../assets/pastel1.jpg" class="img-fluid img-cake-details " alt="...">
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title cursive">Bûche de Noël</h5>
                                <p class="card-text cake-description">Es el postre emblemático de Francia para compartir con la familia en estas fechas. Se remonta a la tradición precristiana de quemar en el hogar un tronco o leño grande de madera, para celebrar el solsticio de invierno y el fuego nuevo del año a punto de empezar, así como alejar la oscuridad.</p>
                                
                            <div class="row">
                                <div class="col-sm-6">
                                    <h2 class="cake-option-title">Sabores</h2>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item cake-description"><input type="checkbox" id="75Cacao" name="cake_buchenoel" value="75Cacao"> Fresa</li>
                                        <li class="list-group-item cake-description"><input type="checkbox" id="100Cacao" name="cake_buchenoel" value="100Cacao"> Frambruesa</li>
                                        <li class="list-group-item cake-description"><input type="checkbox" id="chocolateWhite" name="cake_buchenoel" value="chocolateWhite"> Chocolate blanco</li>
                                    </ul>
                                </div>
                                <div class="col-sm-6">
                                    <div class="row">
                                        <div class="col-sm-7 ">
                                            <h2 class="cake-option-title">Adornos</h2>
                                        </div>
                                        <div class="col-sm-5 d-flex align-items-end justify-content-end">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modal-decorations" class=" btn btn-add-adorno ">+ Adorno</a>
                                        </div>
                                    </div>
                                    
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item cake-description">Estrella Navideña......25 MXN</li>
                                        <li class="list-group-item cake-description">Campana de Chocolate...25 MXN</li>
                                        <li class="list-group-item cake-description">Reno de caramelo.......30 MXN</li>
                                    </ul>
                                </div>
                            </div>
                                
                                
                                <div class="row">
                                    <hr>
                                    <div class="col-sm-7">
                                        <span>380.00 MXN</span>
                                        <h5 class="cake-num-adornos">+ 3 adornos incluidos</h5>
                                    </div>
                                    <div class="col-sm-5 d-flex justify-content-end align-items-end">
                                        <a href="#" class="card-link btn btn-add-patisserie ">Agregar al carrito</a>
                                        
                                    </div>
                                </div>
                                
                                
                            </div>
                            </div>
                        </div>
                        </div>
                    
                </div>
            
            </div>

            
        </section>
        </div>
        
</template>

<script>
export default {
  name: 'MenuView'
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*Usados en toda la pagina*/
hr{
    background-color: pink;
}

.bg-subpages{
    height: 100%;
    background-color: rgba(255, 255, 255, 0.781);
    
}

.switch-pink:checked{
    border-color: rgb(192, 133, 143);;
    border: none;
    background-color: rgb(192, 133, 143);
}

.cursive{
    font-family:'Dancing Script', cursive;
}

.cake-type-title{
    color: rgb(192, 133, 143);
    font-weight: bold;
    font-family:'Dancing Script', cursive;

}

.wrapple{
    margin: 0;
    padding: 0;
}

.card{
    border: 0px;
}

/*Barra de navegación*/
.counter-cakes{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: rgb(192, 133, 143);
    color: white;
    font-weight: bold;
    font-size: x-small;
}

.patisserie-cart:hover{
    color: rgb(100, 99, 99);
}

.nav-subtitle{
    margin-left: 10px;
    margin-bottom: 0;
    color: black;
    font-weight: bold;
    font-family:'Dancing Script', cursive;
}

.nav-title-black{
    margin-left: 10px;
    color: rgb(51, 50, 50);
    font-weight: bold;
    font-family:'Dancing Script', cursive;
}


/*Sección de selección de pastel*/

.cake-list{
    height: 400px;
}

.cake-item{
    display: inline-block;
    width: 200px;
     height: 100%;
    
}

.list-row{
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
}




.img-cake-item{
    height: 200px;
    width: 200px;
    object-fit: cover;
    border-radius: 10px;
    border: 0px;
}

.cake-item-name{
    text-align: center;
    color: white;
}

.cake-item-price{
    color: white;
    font-family:Arial, Helvetica, sans-serif;
    font-size: small;
}


/*Armado del pastel*/

.cake-details{
    height: 60%;   
}


.cake-option-title{
    font-family:'Dancing Script', cursive;
    color: rgb(192, 133, 143);
    font-size: medium;
}

.cake-option-title-cart{
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(192, 133, 143);
    font-size: small;
}

.cake-description{
    color: #3d3c3c;
    font-family:Arial, Helvetica, sans-serif;
    font-size: small;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3 ; 
    -webkit-box-orient: vertical;
}

.cake-description-cart{
    color: #3d3c3c;
    font-family:Arial, Helvetica, sans-serif;
    font-size: small;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2 ; 
    -webkit-box-orient: vertical;
}

.img-cake-details{
    height: 300px;
    
}

.img-cake-details-cart{
    height: 150px;
    width: 150px;
    border-radius: 5px;
    object-fit: cover;
    
}

.btn-add-patisserie{
    background-color: rgb(192, 133, 143);
    color: white;
}

.btn-add-patisserie:hover{
    background-color: rgb(247, 226, 230);
    color: #583111;
}

.btn-add-adorno{
    background-color: transparent;
    border: solid 1px rgb(192, 133, 143);
    color: rgb(192, 133, 143);
    font-size: x-small;
    padding-right: 5px;
    padding-top: 1px;
    padding-left: 5px;
    width: auto;
    height: 20px;
    text-align: center;

}

.btn-add-adorno:hover{
    color: white;
    background-color: rgb(192, 133, 143);
}



.cake-num-adornos{
    color: rgb(192, 133, 143);
    font-family:Arial, Helvetica, sans-serif;
    font-size: x-small;
    margin-left: 15px;
}


/*Para poner mask a un div para textos en imagenes*/
.mask-container{
    position: relative;
    text-align: center;
}

.mask{
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

}

.mask:hover{
    background-color: rgba(192, 133, 143, 0.63);
    box-shadow: 5px 5px 15px rgb(192, 133, 143);
}

.mask-right-top{
    position: absolute;
    padding: 0;
    top: 0px;
    right: 0px;
    margin-right: -25%;
}

/*modals style*/

.modal-title{
    color: rgb(192, 133, 143);
}
.modal-subtitle{
    color: black;
    font-weight: bold;
    font-family:'Dancing Script', cursive;

}

.modal-client-order{
    color: rgb(136, 136, 136);
    font-weight:lighter;
    font-size: large;
    font-family:Arial, Helvetica, sans-serif;
    margin: 0;
    margin-left: 1rem;
    padding: 0;
}

.input-cart{
    width: 90%;
    border-radius: 5px;
    border: solid 1px rgb(218, 217, 217);
    padding-left: 10px;
    color: rgb(136, 136, 136);
    font-size: small;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
    padding-right: 10px;
    padding-bottom: 3px;
    padding-top: 3px;
}

.input-cart::placeholder{
    color: rgb(136, 136, 136);
    font-size: small;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
}

.input-example-label{
    color: rgb(192, 133, 143);
    font-family:Arial, Helvetica, sans-serif;
    font-size: x-small;
    margin-left: 15px;
}

/*Tables de las páginas*/
.table-item-order{
    color: rgb(136, 136, 136);
    font-family:Arial, Helvetica, sans-serif;
    font-size: small;
    margin-left: 15px;
}

.order-completed{
color: green;
}

.order-ready{
    color: rgb(192, 133, 143);
}

/*Area de contacto de la vie en rose*/

.contact-video{
    height: 50%;
    width: 100%;
    padding: 0;
}
</style>