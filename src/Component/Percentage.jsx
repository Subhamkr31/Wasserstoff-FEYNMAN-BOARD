


function check(s) {

    let ss = s.split('')
    let stack = []

    var NOTCLEAR = 0;               // symbole ()
    var UNDERSTOOD = 0;                // symbole []
    var SOMEWHATUNDERSTOOD = 0;              // symbole  ? |  
    var WHATRUBBISH = 0;                // symbole   / =
    var count = 0

    for (let i = 0; i < ss.length; i++) {


        let ch = stack[stack.length - 1]
        if (ss[i] === '[' || ss[i] === '?' || ss[i] === '(' || ss[i] === '/') {
            stack.push(ss[i])
        }

        if (ss[i] === ']') {
            if (ch === '[') {
                stack.pop()
                UNDERSTOOD += 4
                count++
            }
            else return false
        }

        if (ss[i] === '|') {
            if (ch === '?') {
                stack.pop()
                SOMEWHATUNDERSTOOD += 3;
                count++
            }
            else return false
        }

        if (ss[i] === ')') {
            if (ch === '(') {
                stack.pop()
                NOTCLEAR += 2;
                count++
            }
            else return false
        }
        if (ss[i] === '=') {
            if (ch === '/') {
                stack.pop()
                WHATRUBBISH += 1
                count++
            }
            else return false
        }

    }
    // console.log(UNDERSTOOD,SOMEWHATUNDERSTOOD, NOTCLEAR, WHATRUBBISH);

    // console.log('count', count);

    let percentageunderstand = (UNDERSTOOD / (count * 4)) * 100
    // console.log( 'UNDERSTOOD', percentageunderstand+'%');

    let percentageSOMEWHATUNDERSTOOD = (SOMEWHATUNDERSTOOD / (count * 4)) * 100
    // console.log( 'SOMEWHATUNDERSTOOD', percentageSOMEWHATUNDERSTOOD+'%');

    let percentageNOTCLEAR = (NOTCLEAR / (count * 4)) * 100
    // console.log( 'NOTCLEAR', percentageNOTCLEAR+'%');

    let percentageWHATRUBBISH = (WHATRUBBISH / (count * 4)) * 100

    // console.log('WHATRUBBISH', percentageWHATRUBBISH+'%');


    return {
        percentageunderstand,
        percentageSOMEWHATUNDERSTOOD,
        percentageNOTCLEAR,
        percentageWHATRUBBISH
    }
}



export default check