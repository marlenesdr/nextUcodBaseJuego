$(document).ready(function() {
  var matriz1 = [];
  var matriz  = [];

    function titulo(){
      $(".main-titulo").animate({color: "white"}, { duration: 800, easing: "linear" })
                       .animate({color: "#DCFF0E"}, { duration: 800, easing: "linear", complete: titulo });
    }
    $(function() {
      titulo();
    });

    function llenarTablero(){
      $("div[class^='col']").each(function(){
        for (var i=0; i<7; i++){
          num=Math.floor(Math.random()*4+1);
          $(this).append('<img class="elemento" src="image/'+num+'.png">');
        }
      });
    }

    function cargar_matriz(){
      for (var x=0; x<49; x++){
        matriz.push('n');
        $(".elemento").each(function(x,valor){
          $(this).attr("id","n");
        });
      }
    }


    function cargar_matriz1(){
     $(".elemento").each(function (){
       matriz1.push($(this).attr("src"));
     });
    }

    function elegir_iguales(){

      /*for (var i=1; i<49; i++){
        if ((matriz1[i]==matriz1[i+7])&&(matriz1[i+7]==matriz1[i+14])){
            matriz[i]='c';
            matriz[i+7]='c';
            matriz[i+14]='c';
        }
        if ((matriz1[i]==matriz1[i+1])&&(matriz1[i+1]==matriz1[i+2])){
            matriz[i]='c';
            matriz[i+1]='c';
            matriz[i+2]='c';
        }
      }*/
      var $elemento=$(".elemento");
      $(".elemento").each(function(x,valor){
        if ((($elemento.eq(x).attr("src"))==($elemento.eq(x+1).attr("src")))&&(($elemento.eq(x+1).attr("src"))==($elemento.eq(x+2).attr("src")))){
          $(this).eq(x).attr("id","c")
          $(this).eq(x+1).attr("id","c")
          $(this).eq(x+2).attr("id","c")
        }
      });
    }


    function mostrar_iguales(){
      for (var i=0; i<49; i++){
        if (matriz[i]=="c"){
          $('.elemento').each(function (i, value) {
            $(".elemento").animate({opacity:'0.5'},"slow");
            $(".elemento").animate({opacity:'0.8'},"slow");
            $(".elemento").animate({opacity:'0.5'},"slow");
            $(".elemento").animate({opacity:'0.8'},"slow");
            $(".elemento").animate({opacity:'0.5'},"slow");
            $(".elemento").animate({opacity:'0.8'},"slow");
          });
        }
      }
    }


    $(function(){
      $('.btn-reinicio').click(function(){
        llenarTablero();
        cargar_matriz();
        cargar_matriz1();
        elegir_iguales();
        mostrar_iguales();
      });
    });
 });
