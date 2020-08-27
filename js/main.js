
$(document).ready(function(){
     $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
         dotsEach:true,
        responsiveClass:true,
         tagePadding: 90,
        responsive:{
            0:{
                items:1,
            },
            480:{
                items:1,
            },
            767:{
                items:2,
            },
            1000:{
                items:3,
                loop:true
            }
        }
     });
    
    $('.our-servises li:first-child').click( function(){
        document.getElementById('sevice-1').innerHTML ='Skylights';
        $('.our-servises li:first-child').css({
            'border-right':'none',
            'border-left':'none',
        });
    });
    
    ;$('.our-servises li:nth-child(2)').click( function(){
        document.getElementById('sevice-1').innerHTML ='Waterproofing';
        $('.our-servises li:nth-child(2)').css({
            'border-right':'none',
            'border-left':'none'
        })
    });
    $('.our-servises li:nth-child(3)').click( function(){
        document.getElementById('sevice-1').innerHTML ='Industrial Roofing';
        $('.our-servises li:nth-child(3) ').css({
            'border-right':'none',
            'border-left':'none'
        })
    });
    $('.our-servises li:nth-child(4)').click( function(){
        document.getElementById('sevice-1').innerHTML ='Residential Roofing';
        $('.our-servises li:nth-child(4) ').css({
            'border-right':'none',
            'border-left':'none'
        })
    });
    $('.our-servises li:nth-child(5)').click( function(){
        document.getElementById('sevice-1').innerHTML ='Gutter Cleaning';
        $('.our-servises li:nth-child(5) ').css({
            'border-right':'none',
            'border-left':'none'
        })
    });
    $('.our-servises li:nth-child(6)').click( function(){
        document.getElementById('sevice-1').innerHTML ='Commercial Roofing';
        $('.our-servises li:nth-child(6) ').css({
            'border-right':'none',
            'border-left':'none'
        })
    });

   //Start Statistics
    var h =setInterval(function(){
        if(h>=0)
            {
                h++;
                document.getElementById('s1').innerHTML =h;
            }
          if(h>=45)
            {
                 document.getElementById('s1').innerHTML =45;
            }
      },100);
    var b =setInterval(function(){
        if(b>=0)
            {
                b++;
                document.getElementById('s2').innerHTML =b;
            }
          if(b>=8500)
            {
                 document.getElementById('s2').innerHTML ='8,500';
            }
      },0.1);
    
    var c =setInterval(function(){
        if(c>=0)
            {
                c++;
                document.getElementById('s3').innerHTML =c;
            }
          if(c>=2342)
            {
                 document.getElementById('s3').innerHTML ='2,342';
            }
      },0.1);
    
     var a=setInterval(function(){
        if(a>=0)
            {
                a++;
                document.getElementById('s4').innerHTML =a;
            }
          if(a>=30)
            {
                 document.getElementById('s4').innerHTML ='30';
            }
      },100);
    
    var goUpButton = document.getElementById('go-up');
    window.onscroll = function(){
        'use strict';
        if(window.pageYOffset >= 1500)
            {
                goUpButton.style.display ='block';
            }
        else
            {
                goUpButton.style.display = 'none'; 
            }
    };

});