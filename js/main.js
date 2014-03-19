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
            tnyc += 0.013;  

            tnycstop = setTimeout("augmentertnyc()", 1); 
         } 
      } 
      //var tnycstop = setTimeout("augmentertnyc()", 1);


      function augmentertuk(){ 
         document.getElementById('number_cab_uk').innerHTML =tuk.toFixed(3);       
         if(tuk < 22.999){ 
            tuk += 0.023;   

            tukstop = setTimeout("augmentertuk()", 1); 
         } 
      } 
      //var tukstop = setTimeout("augmentertuk()", 1);

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



