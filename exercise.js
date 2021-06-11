// function sum(){
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];}
//         return sum;
// }

function sum(...args){
    let sum = 0;
    args.forEach(arg => {
        sum += arg;
         });
        return sum;
}

Function.prototype.myBind= function(){
    if (arguments[0].typeofObject) {
    const that= arguments[0];
    } else {
        const that = this;
    }
    return function(arguments){
        for (let i = 0; i < arguments.length; i++) {
        return that.apply(that, arguments[i]);};
    };
}