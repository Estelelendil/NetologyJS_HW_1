// function chess(N){
// q = "# ";
// i = ' #';
// let qq = `${q.repeat(N/2)} \n`
// let ii = `${i.repeat(N/2)} \n`
// console.log ((qq+ii).repeat(N/2))
// }

// chess(1)

//TODO: Прочитать про fill, использовать циклы и конкатенацию

function chessChess (N) {
    let q ='#', i = ' ';
    let ferstStr = q;
    let secondStr = i;
    
    for(N; N - 1 > 0; N--){
        debugger
        if(ferstStr[ferstStr.length-1] == q){
            ferstStr += i;
            secondStr += q;
        }
        else if(ferstStr[ferstStr.length-1] == i){
            ferstStr += q;
            secondStr += i;
        }
        
    }
    return `${ferstStr}\n${secondStr}`   
}
console.log(chessChess(5))