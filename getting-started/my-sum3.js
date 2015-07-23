var seneca = require('seneca')()

seneca.add(
    {role:'math', cmd:'sum3'},
    function( msg, respond ) {
        var sum = msg.a + msg.b +msg.c;
        respond( null, { answer: sum } )
    })

seneca.add(
    {role:'disp', cmd:'dispMessage'},
    function( msg, respond ) {
        var dispMsg =" Hello  "+msg.namedisp+"  Welcome to Seneca Frame Work!  ";
        respond( null,{jsonMsg:dispMsg} )
    })

seneca
    .act(

    {role:'math', cmd:'sum3', a:2,b:2,c:3},
    function( err, result ) {
        if( err ) return console.error( err );
        console.log( result );
    })

    .act(
        {role:'disp', cmd:'dispMessage', namedisp:'softinc',jkj:899},
        function( err, result ) {
            if( err ) return console.error( err );
            console.log( result );
        }

   )
