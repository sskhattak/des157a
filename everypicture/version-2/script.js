( function() {
    'use strict';
    console.log('reading js');

    const sections = document.querySelectorAll('section');

    /* 
    /s0: entry
    /s1: bedroom
    s2: glider info
    s3: nightstand info
    s4: painting info
    /s5: nightstand zoom
    s6: stereo info
    s7: plate info
    s8: shakers info
    s9: matches info
    s10: saucer info
    /s11: painting zoom
    */

    /* hide entry show bedroom */
    document.querySelector('#entrybtn').addEventListener('click', function(){
        sections[0].className = "hidden";
        sections[1].className = "showing bedroom";
    } );

    /* hide bedroom show entry */
    document.querySelector('#returnbtn').addEventListener('click', function(){
        sections[1].className = "hidden";
        sections[2].className = "hidden";
        sections[3].className = "hidden";
        sections[4].className = "hidden";
        sections[0].className = "showing entry";
    } );

    /* show glider info */
    document.querySelector('#glider').addEventListener('click', function(){
        sections[3].className = "hidden";
        sections[4].className = "hidden";
        sections[2].className = "showing glider info";
    } );

    /* hide glider info show bedroom */
    document.querySelector('.exitbox').addEventListener('click', function(){
        sections[2].className = "hidden";
    } );
    
    /* show nightstand info */
    document.querySelector('#nightstand').addEventListener('click', function(){
        sections[2].className = "hidden";
        sections[4].className = "hidden";
        sections[3].className = "showing nightstand info";
    } );

    /* hide nightstand info show bedroom */
    document.querySelector('#nightstandhov .exitbox').addEventListener('click', function(){
        sections[3].className = "hidden";
    } );

    /* show painting info */
    document.querySelector('#painting').addEventListener('click', function(){
        sections[2].className = "hidden";
        sections[3].className = "hidden";
        sections[4].className = "showing painting info";
    } );

    /* hide painting info show bedroom */
    document.querySelector('#paintinghov .exitbox').addEventListener('click', function(){
        sections[4].className = "hidden";
    } );

    /* zoom in nightstand hide bedroom */
    document.querySelector('#nightstandbtn').addEventListener('click', function(){
        sections[1].className = "hidden";
        sections[5].className = "showing nightstand";
    } );

    /* zoom out nightstand show bedroom */
    document.querySelector('#scene3 .returnbdrm').addEventListener('click', function(){
        sections[3].className = "hidden";
        sections[5].className = "hidden";
        sections[1].className = "showing bedroom";
    } );

    /* show stereo info */
    document.querySelector('#stereo').addEventListener('click', function(){
        sections[7].className = "hidden";
        sections[8].className = "hidden";
        sections[9].className = "hidden";
        sections[10].className = "hidden";
        sections[6].className = "showing stereo info";
    } );

    /* hide stereo info show nightstand */
    document.querySelector('#stereohov .exitbox').addEventListener('click', function(){
        sections[6].className = "hidden";
    } );

    /* show plate info */
    document.querySelector('#plate').addEventListener('click', function(){
        sections[6].className = "hidden";
        sections[8].className = "hidden";
        sections[9].className = "hidden";
        sections[10].className = "hidden";
        sections[7].className = "showing plateinfo";
    } );

    /* hide plate info show nightstand */
    document.querySelector('#platehov .exitbox').addEventListener('click', function(){
        sections[7].className = "hidden";
    } );

    /* show shakers info */
    document.querySelector('#shakers').addEventListener('click', function(){
        sections[6].className = "hidden";
        sections[7].className = "hidden";
        sections[9].className = "hidden";
        sections[10].className = "hidden";
        sections[8].className = "showing shakers info";
    } );

    /* hide shakers info show nightstand */
    document.querySelector('#shakershov .exitbox').addEventListener('click', function(){
        sections[8].className = "hidden";
    } );

    /* show matches info */
    document.querySelector('#matches').addEventListener('click', function(){
        sections[6].className = "hidden";
        sections[7].className = "hidden";
        sections[8].className = "hidden";
        sections[10].className = "hidden";
        sections[9].className = "showing matches info";
    } );

    /* hide matches info show nightstand */
    document.querySelector('#matcheshov .exitbox').addEventListener('click', function(){
        sections[9].className = "hidden";
    } );

    /* show saucer info */
    document.querySelector('#saucer').addEventListener('click', function(){
        sections[6].className = "hidden";
        sections[7].className = "hidden";
        sections[8].className = "hidden";
        sections[9].className = "hidden";
        sections[10].className = "showing saucer info";
    } );

    /* hide saucer info show nightstand */
    document.querySelector('#saucerhov .exitbox').addEventListener('click', function(){
        sections[10].className = "hidden";
    } );

    /* zoom in painting hide bedroom */
    document.querySelector('#paintingbtn').addEventListener('click', function(){
        sections[1].className = "hidden";
        sections[4].className = "hidden";
        sections[11].className = "showing painting";
    } );

    /* zoom out painting show bedroom */
    document.querySelector('#scene4 .returnbdrm').addEventListener('click', function(){
        sections[11].className = "hidden";
        sections[1].className = "showing bedroom";
    } );

} )();