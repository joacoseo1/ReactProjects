const winPossibles = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

export function checkWinner(checkTable){
    for(const winPos of winPossibles){
      const [a,b,c] = [...winPos];
      if(checkTable[a] && checkTable[a] === checkTable[b] && checkTable[a] === checkTable[c]) return [a,b,c];
    }
}
