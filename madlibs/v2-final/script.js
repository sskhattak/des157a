( function(){
    'use strict';
    console.log('reading js');

    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');


    myForm.addEventListener('submit', function(event){

        event.preventDefault();

        const number = document.querySelector('#number').value;
        const foodnoun = document.querySelector('#foodnoun').value;
        const verb1 = document.querySelector('#verb1').value;
        const adj1 = document.querySelector('#adj1').value;
        const verb2 = document.querySelector('#verb2').value;
        const containertype = document.querySelector('#containertype').value;
        const nounsmell = document.querySelector('#nounsmell').value;
        const adj2 = document.querySelector('#adj2').value;
        const color1 = document.querySelector('#color1').value;
        const color2 = document.querySelector('#color2').value;
        const adj3 = document.querySelector('#adj3').value;
        const name = document.querySelector('#name').value;
        const animal = document.querySelector('#animal').value;
        const adj4 = document.querySelector('#adj4').value;

        let myText;

        if( number == ''){
            myText = "Please provide a number.";
            document.querySelector('#number').focus();
        }
        else if( foodnoun == ''){
            myText = "Please provide a food noun.";
            document.querySelector('#foodnoun').focus();
        }
        else if( verb1 == ''){
            myText = "Please provide a verb.";
            document.querySelector('#verb1').focus();
        }
        else if( adj1 == ''){
            myText = "Please provide an adjective.";
            document.querySelector('#adj1').focus();
        }
        else if( verb2 == ''){
            myText = "Please provide a verb.";
            document.querySelector('#verb2').focus();
        }
        else if( containertype == ''){
            myText = "Please provide a container type.";
            document.querySelector('#containertype').focus();
        }
        else if( nounsmell == ''){
            myText = "Please provide a noun with a smell.";
            document.querySelector('#nounsmell').focus();
        }
        else if( adj2 == ''){
            myText = "Please provide an adjective.";
            document.querySelector('#adj2').focus();
        }
        else if( color1 == ''){
            myText = "Please provide a color.";
            document.querySelector('#color1').focus();
        }
        else if( color2 == ''){
            myText = "Please provide a color.";
            document.querySelector('#color2').focus();
        }
        else if( adj3 == ''){
            myText = "Please provide an adjective.";
            document.querySelector('#adj3').focus();
        }
        else if( name == ''){
            myText = "Please provide a name.";
            document.querySelector('#name').focus();
        }
        else if( animal == ''){
            myText = "Please provide an animal.";
            document.querySelector('#animal').focus();
        }
        else if( adj4 == ''){
            myText = "Please provide an adjective.";
            document.querySelector('#adj4').focus();
        }
        else {
            myText = `<p>Annabelle opened her fridge and pulled out <strong><u>${number}</u></strong> <strong><u>${foodnoun}</u></strong>. She <strong><u>${verb1}</u></strong> them into the <strong><u>${adj1}</u></strong> mixing bowl on the counter, and gave it a good mix. Soon, the oven dinged. Annabelle <strong><u>${verb2}</u></strong> the batter into a greased <strong><u>${containertype}</u></strong>, and popped it into the oven. It wasn't long before there was an aroma she couldn't resist, like <strong><u>${nounsmell}</u></strong>, and she hurried into the kitchen to pull out the <strong><u>${containertype}</u></strong> to cool before decorating. The cake appeared <strong><u>${adj2}</u></strong>, and once it was cool, Annabelle began to spread <strong><u>${color1}</u></strong> buttercream and <strong><u>${color2}</u></strong> frosting over the cake until it looked <strong><u>${adj3}</u></strong>. Quickly, Annabelle packed up the cake and headed to her friend <strong><u>${name}</u></strong> the <strong><u>${animal}</u></strong>'s house. She rang the doorbell and <strong><u>${name}</u></strong> answered.</p><p>"Oh, Annabelle!" they exclaimed. "Thank you for this cake, it looks <strong><u>${adj4}</u></strong>!"</p>`;

            document.querySelector('#number').value = '';
            document.querySelector('#foodnoun').value = '';
            document.querySelector('#verb1').value = '';
            document.querySelector('#adj1').value = '';
            document.querySelector('#verb2').value = '';
            document.querySelector('#containertype').value = '';
            document.querySelector('#nounsmell').value = '';
            document.querySelector('#adj2').value = '';
            document.querySelector('#color1').value = '';
            document.querySelector('#color2').value = '';
            document.querySelector('#adj3').value = '';
            document.querySelector('#name').value = '';
            document.querySelector('#animal').value = '';
            document.querySelector('#adj4').value = '';

        }

        madlib.innerHTML = myText;

    } );

} )();

