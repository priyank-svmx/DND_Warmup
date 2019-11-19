

let O = null;
let KnightPosition = [0,0];
const emitChange = ()=>{
    if(!O){
        throw Error("no observer registered");
    }

    console.log("emitting change");
    console.log(KnightPosition);
    O(KnightPosition);
};

export const registerObserver =  (obs) =>{
  O = obs;
  emitChange();
}

export const moveKnight =(x,y)=>{
    KnightPosition = [x,y];
    emitChange();
    
}