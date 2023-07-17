function receivesAFunction (callback) {
    console.log("you are very lucky.");
     callback();
};
function callback() {
    console.log("hey lucky one"); 
}
receivesAFunction(callback);

function returnsANamedFunction(){
    return receivesAFunction;
}
function returnsAnAnonymousFunction(){
    return () => {
        console.log (200);
    }
}