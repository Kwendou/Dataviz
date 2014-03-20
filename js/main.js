$('#low_x5F_london').mouseover(function(){
	$('#pneu').addClass("unactive");
	$('.element_1').addClass("active");
 });

$('#low_x5F_london').mouseout(function(){
	$('#pneu').removeClass("unactive");
	$('.element_1').removeClass("active");
 });

$('#low_x5F_ny').mouseover(function(){
	$('#pneu').addClass("unactive");
	$('.element_2').addClass("active");
 });

$('#low_x5F_ny').mouseout(function(){
	$('#pneu').removeClass("unactive");
	$('.element_2').removeClass("active");
 });

$('#middle_x5F_london').mouseover(function(){
	$('#pneu').addClass("unactive");
	$('.element_3').addClass("active");
 });

$('#middle_x5F_london').mouseout(function(){
	$('#pneu').removeClass("unactive");
	$('.element_3').removeClass("active");
 });

$('#middle_x5F_ny').mouseover(function(){
	$('#pneu').addClass("unactive");
	$('.element_4').addClass("active");
 });

$('#middle_x5F_ny').mouseout(function(){
	$('#pneu').removeClass("unactive");
	$('.element_4').removeClass("active");
 });

$('#full_x5F_london').mouseover(function(){
	$('#pneu').addClass("unactive");
	$('.element_5').addClass("active");
 });

$('#full_x5F_london').mouseout(function(){
	$('#pneu').removeClass("unactive");
	$('.element_5').removeClass("active");
 });

$('#full_x5F_ny').mouseover(function(){
	$('#pneu').addClass("unactive");
	$('.element_6').addClass("active");
 });

$('#full_x5F_ny').mouseout(function(){
	$('#pneu').removeClass("unactive");
	$('.element_6').removeClass("active");
 });

$('.targetlondon').mouseover(function(){
  $('.on_london').addClass("active_target");
 });

$('.targetlondon').mouseout(function(){
  $('.on_london').removeClass("active_target");
 });

$('.targetny').mouseover(function(){
  $('.on_ny').addClass("active_target");
 });

$('.targetny').mouseout(function(){
  $('.on_ny').removeClass("active_target");
 });

var hl = hnyc = 0; 
function augmenterheurelondon(){ 
   document.getElementById('hlondon').innerHTML =hl.toFixed(1)+" H"; 		   
   if(hl < 8.3){ 
   		hl += 0.1; 	

   		hlstop = setTimeout("augmenterheurelondon()", 16); 
   } 
} 
//var hlstop = setTimeout("augmenterheurelondon()", 1);

function augmenterheurenyc(){ 
   document.getElementById('hnyc').innerHTML =hnyc.toFixed(1)+" H"; 		   
   if(hnyc < 9.4){ 
   		hnyc += 0.1; 	

   		hnycstop = setTimeout("augmenterheurenyc()", 16); 
   } 
} 
//var hnycstop = setTimeout("augmenterheurenyc()", 1);


var l = other = 0; 
function augmenterlondon(){ 
   l += 1; 
   document.getElementById('london').innerHTML =l+"%"; 		   
   lstop = setTimeout("augmenterlondon()", 16); 
   if(l >= 99){ 
      window.clearTimeout(lstop); 
   } 
} 
var lstop = setTimeout("augmenterlondon()", 1);

function augmenterother(){ 
   other += 1; 
   document.getElementById('autre').innerHTML =other+"%"; 		   
   otherstop = setTimeout("augmenterother()", 1000); 
   if(other >= 1){ 
      window.clearTimeout(otherstop); 
   } 
} 
var otherstop = setTimeout("augmenterother()", 1);

var bg = paki = ind = ha = us = eg = ch = rd = eq = 0; 
function augmenterbg(){ 
   bg += 1; 
   document.getElementById('bangladesh').innerHTML =bg+",1%"; 		   
   bgstop = setTimeout("augmenterbg()", 80); 
   if(bg >= 23){ 
      window.clearTimeout(bgstop); 
   } 
} 
var bgstop = setTimeout("augmenterbg()", 1);

function augmenterpaki(){ 
   paki += 1; 
   document.getElementById('pakistan').innerHTML =paki+",2%"; 		   
   pakistop = setTimeout("augmenterpaki()", 160); 
   if(paki >= 13){ 
      window.clearTimeout(pakistop); 
   } 
} 
var pakistop = setTimeout("augmenterpaki()", 1);

function augmenterind(){ 
   ind += 1; 
   document.getElementById('inde').innerHTML =ind+",3%"; 		   
   indstop = setTimeout("augmenterind()", 180); 
   if(ind >= 9){ 
      window.clearTimeout(indstop); 
   } 
} 
var pakistop = setTimeout("augmenterind()", 1);

function augmenterha(){ 
   ha += 1; 
   document.getElementById('haiti').innerHTML =ha+",5%"; 		   
   hastop = setTimeout("augmenterha()", 200); 
   if(ha >= 6){ 
      window.clearTimeout(hastop); 
   } 
} 
var hastop = setTimeout("augmenterha()", 1);

function augmenterus(){ 
   us += 1; 
   document.getElementById('usa').innerHTML =us+",9%"; 		   
   usstop = setTimeout("augmenterus()", 200); 
   if(us >= 5){ 
      window.clearTimeout(usstop); 
   } 
} 
var usstop = setTimeout("augmenterus()", 1);

function augmentereg(){ 
   eg += 1; 
   document.getElementById('egypte').innerHTML =eg+",4%"; 		   
   egstop = setTimeout("augmentereg()", 250); 
   if(eg >= 4){ 
      window.clearTimeout(egstop); 
   } 
} 
var egstop = setTimeout("augmentereg()", 1);

function augmenterch(){ 
   ch += 1; 
   document.getElementById('chine').innerHTML =ch+",9%"; 		   
   chstop = setTimeout("augmenterch()", 1000); 
   if(ch >= 1){ 
      window.clearTimeout(chstop); 
   } 
} 
var chstop = setTimeout("augmenterch()", 1);

function augmenterrd(){ 
   rd += 1; 
   document.getElementById('repdom').innerHTML =rd+",3%"; 		   
   rdstop = setTimeout("augmenterrd()", 1050); 
   if(rd >= 1){ 
      window.clearTimeout(rdstop); 
   } 
} 
var rdstop = setTimeout("augmenterrd()", 1);

function augmentereq(){ 
   eq += 1; 
   document.getElementById('equateur').innerHTML =eq+"%"; 		   
   eqstop = setTimeout("augmentereq()", 1050); 
   if(eq >= 1){ 
      window.clearTimeout(eqstop); 
   } 
} 
var eqstop = setTimeout("augmentereq()", 1);


var tnyc = tuk = 0; 
      function augmentertnyc(){ 
         document.getElementById('number_cab_ny').innerHTML =tnyc.toFixed(3);        
         if(tnyc < 12.999){ 
            tnyc += 0.026;  

            tnycstop = setTimeout("augmentertnyc()", 1); 
         } 
      } 
      //var tnycstop = setTimeout("augmentertnyc()", 1);


      function augmentertuk(){ 
         document.getElementById('number_cab_uk').innerHTML =tuk.toFixed(3);       
         if(tuk < 22.999){ 
            tuk += 0.046;   

            tukstop = setTimeout("augmentertuk()", 1); 
         } 
      } 
      //var tukstop = setTimeout("augmentertuk()", 1);

      //age des conucteurs

var content7Animated = false;

$('.content_7').waypoint({
  handler: function(direction) {
    if ( content7Animated == false ) {
      var i = 0, iid;
        iid = setInterval(function()
        {
              if($("#agenyc").attr("y")- i>54)
              {
                  $("#agenyc").attr("y",$("#agenyc").attr("y")- i);
                  i+=0.1;
              } else {
                clearInterval(iid);
              }
        },33);

        var e = 0, eid;
        eid = setInterval(function()
        {
              if($("#ageuk").attr("y")- e>65)
              {
                  $("#ageuk").attr("y",$("#ageuk").attr("y")- e);
                  e+=0.1;
              } else {
                clearInterval(eid);
              }
        },33);

        content7Animated = true;
    }
    
  },
  offset: '50%'
});
      


      var pmnyc = pmuk = 0; 
      function augmenterprixmnyc(){ 
         document.getElementById('pmnyc').innerHTML =" = "+pmnyc.toFixed(2)+" $";          
         if(pmnyc < 4.60){ 
              pmnyc += 0.12;  

              pmnycstop = setTimeout("augmenterprixmnyc()", 40); 
         } 
      } 
      var pmnycstop = setTimeout("augmenterprixmnyc()", 1);


      function augmenterprixmuk(){ 
         document.getElementById('pmuk').innerHTML =" = £ "+pmuk.toFixed(0);            
         if(pmuk < 13){ 
              pmuk += 1;    

              pmukstop = setTimeout("augmenterprixmuk()", 100); 
         } 
      } 
      var pmukstop = setTimeout("augmenterprixmuk()", 1);


  /*prix moyen en euro*/
      var pmnyce = pmuke = 0; 
      function augmenterprixmnyce(){ 
         document.getElementById('pmnyce').innerHTML =" = "+pmnyce.toFixed(2)+" €";            
         if(pmnyce < 3.29){ 
              pmnyce += 0.05;     

              pmnycestop = setTimeout("augmenterprixmnyce()", 24); 
         } 
      } 
      var pmnycestop = setTimeout("augmenterprixmnyce()", 1);


      function augmenterprixmuke(){ 
         document.getElementById('pmuke').innerHTML =" = "+pmuke.toFixed(2)+" €";          
         if(pmuke < 15.59 ){ 
              pmuke += 0.08;  

              pmukestop = setTimeout("augmenterprixmuke()", 6); 
         } 
      } 
      var pmukestop = setTimeout("augmenterprixmuke()", 1);

$('.content_1').waypoint({
  handler: function(direction) {
    augmentertuk();
    augmentertnyc();
  },
  offset: '50%'
});

$('.content_8').waypoint({
  handler: function(direction) {
    augmenterheurelondon();
    augmenterheurenyc();
    $('#hnyc').addClass("aug_hnyc");
    $('#hlondon').addClass("aug_hlondon");
  },
  offset: '50%'
});

$('.making_content_1').waypoint({
  handler: function(direction) {
    $(this).addClass("active_making");
  },
  offset: 600
});

$('.making_content_2').waypoint({
  handler: function(direction) {
    $(this).addClass("active_making");
  },
  offset: 600
});

$('.making_content_3').waypoint({
  handler: function(direction) {
    $(this).addClass("active_making");
  },
 offset: 600
});

$('.making_content_4').waypoint({
  handler: function(direction) {
    $(this).addClass("active_making");
  },
  offset: 600
});

$('.making_content_5').waypoint({
  handler: function(direction) {
    $(this).addClass("active_making");
  },
  offset: 600
});

$('.making_content_6').waypoint({
  handler: function(direction) {
    $(this).addClass("active_making");
  },
  offset: 600
});

$('.making_content_7').waypoint({
  handler: function(direction) {
    $(this).addClass("active_making");
  },
  offset: 600
});

$('.content_6').waypoint({
  handler: function(direction) {

    $('#equateur').addClass("equateur");
    $('#repdom').addClass("repdom");
    $('#chine').addClass("chine");
    $('#egypte').addClass("egypte");
    $('#usa').addClass("usa");
    $('#haiti').addClass("haiti");
    $('#inde').addClass("inde");
    $('#pakistan').addClass("pakistan");
    $('#bangladesh').addClass("bangladesh");
    $('#london').addClass("london");
    $('#autre').addClass("autre");
  },
  offset: '50%'
});


var hopJauge = false;

  $('.content_9').waypoint({
  handler: function(direction) {
    if ( !hopJauge ) {
      var g = new JustGage({
        id: "gauge_london", 
        value: 0.67, 
        min: 0,
        max: 5,
      });  
      var g = new JustGage({
        id: "gauge_nyc", 
        value: 2.33, 
        min: 0,
        max: 5,
      }); 
      hopJauge = true;
    }
    
  

  },
  offset: '50%'
});




