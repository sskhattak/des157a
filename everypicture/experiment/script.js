( function(){
    'use strict';
    console.log('reading js');

    //const pear4 = document.querySelector('#pear4');
    const pear5 = document.querySelector('#pear5');

    /* pear 3 */
    document.addEventListener('mousemove', reportPos);
        const pear3 = document.querySelector('#pear3');
        let prevYLoc = 0;

        function reportPos(event) {
            
            const windowHeight = window.innerHeight;
            const heightDegree = windowHeight / 360;
            const yPos = event.clientY;
            const changeRotation = Math.floor(yPos / heightDegree);

            if (changeRotation !== prevYLoc) {
                pear3.style.transform = `rotate(${changeRotation}deg)`;
                prevYLoc = changeRotation;
            }
        }
} )();