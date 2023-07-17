function receiveFunction (lucky) {
     lucky();
}
receiveFunction(function lucky() {return 12 });

function returnsANamedFunction(){
    return receiveFunction;
}
function returnsAnAnonymousFunction(){
    return () => {
        console.log (200);
    }
}