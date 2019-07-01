// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
//   function takeInput(readline){
//     readline.question(`What's your name?`, (name) => {
//         readline.close()
//         return name
        
//       })
//   }
//   var name=takeInput(readline)
//   console.log(name);
  
  


function printPath(xs,ys,xd,yd){
    if(xd<xs){
        var right=xs-xd
        for (let i = 0; i < rigth; i++) {
            console.log("Up -->");
            
            
        }
    }
    else if(xd>xs){
        var left=xd-xs
        for (let i = 0; i < left; i++) {
            console.log("DOWN -->");
        }
    }
    if(yd<ys){
        var up=ys-yd
        for (let i = 0; i < up; i++) {
            console.log("LEFT -->");
            
            
        }
    }
    else if(yd>ys){
        var down=yd-ys
        for (let i = 0; i < down; i++) {
            console.log("right -->");
        }
    }
    console.log("Reached Destination");
    
}
printPath(1,2,2,7)