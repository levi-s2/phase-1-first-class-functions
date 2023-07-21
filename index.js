function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction(){
    return function cb(){}
}

function returnsAnAnonymousFunction(){
    return function(){}
};