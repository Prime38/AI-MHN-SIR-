const send = 'SEND'.split('');
const more = 'MORE'.split('');
const money = 'MONEY'.split('');

const all = [...new Set(send.concat(more).concat(money))];

const numVal = function(chars, values){
  let ps = 0;
  chars.forEach((c, i) => ps += Math.pow(10, chars.length - i - 1) * (values[c]));
  return ps;
};

/**
* given a map of values, tells whether we can stop processing the solution money now.
For now, no check is made and it works by pure brute force
*/
const canBeDiscarded = function(values) {
  return false;
};

/*
given a partial solution, adds values and recursively tries them
*/
const solve = function(partialSolution){
  //console.log('trying with ',partialSolution);
  //find a letter that can be assigned
  for(let l of all) {
     if (typeof partialSolution[l] !== 'undefined')
        continue;
      //the letter can be assigned, so try all 10 digits recursively
      for(let d = 0; d < 10; d++ ) {
        //send letter cannot be 0
        if (d === 0 && (send[0] === l || more[0] === l || money[0] === l)) {
          continue;
        }
        //clone the object and assign the letter
        let solutionIncrement = {};
        solutionIncrement[l] = d;
        const candidatePartialSolution = Object.assign(solutionIncrement, partialSolution);
        //recursion
        if (!canBeDiscarded(candidatePartialSolution)) {
          solve(candidatePartialSolution);
        }
      }
      //all 10 digits were tried, terminate this branch
      return;
  }
  //no remaining letters found, this is a leaf in the solution tree. Check whether we found a solution or not
  if (numVal(send, partialSolution) + numVal(more, partialSolution) === numVal(money, partialSolution)) {
    console.log('FOUND A SOLUTION: ' + JSON.stringify(partialSolution, null, 2));
  }
  else {
  // console.log('INVALID SOLUTION: ' + JSON.stringify(partialSolution, null, 2));
  }
};

//start with an empty solution
solve({});