const { con, getQuestions, getAnswers } = require("../db");
const { calculateEquation } = require("./calculator");
/**
 * @param {string} text
 * Pencarian pertanyaan yang paling mirip dengan pertanyaan yang diberikan pengguna dilakukan dengan 
 * algoritma pencocokan string Boyer-Moore (BM)
 * @returns {string} 
 * 
 * @todo Implementasi algoritma BM
 * */
function bm (text) {
    console.log("BM");
    console.log(text);
    return new Promise(function(resolve, reject) {
        var validation = -1;
        var qResult = [];
        var i = -1;
        var result;

        getQuestions()
                .then(function(result) {
                    qResult = result;
                    // console.log(qResult);
                    do {
                        i++;
                        if(i == qResult.length){
                            break;
                        } else {
                            validation = bmMatch(text, qResult[i].question);
                            // console.log(validation);
                        }
                    } while (validation == -1);

                    if (validation == -1){
                        result = 'Maaf jawaban dari pertanyaan belum ada di database :( (BM) '; 
                        resolve(result); // resolve the result here
                    } else {
                        getAnswers(qResult[i].question)
                            .then(function(result) {
                                result = result[0].answer;
                                result =
                                result == "DATE" ? new Date().toLocaleDateString() : 
                                result == "TIME" ? new Date().toLocaleTimeString() : 
                                result == "CALC" ? calculateEquation(text) :
                                result;
                                console.log(result + " (BM)");
                                resolve(result); // resolve the result here
                        });
                    } 

    // TODO: implementasi algoritma BM
    // function boyerMooreSearch(text, pattern) {
        });
    });
}
    
function bmMatch(question, pattern){
    let m = pattern.length;
    let n = question.length;

    let badSymbol = new Array(n).fill(0);
    let goodSuffix = new Array(m).fill(0);
    
    makingTable(pattern, badSymbol, goodSuffix);
    
    let i = 0;

    while (i <= n - m) {
        let j = m - 1;
        
        while (j >= 0 && pattern[j] === question[i + j]) {
        j--;
        }
        
        if (j === -1) {
            return 1;
        }
        
        i += Math.max(goodSuffix[j], j - badSymbol[question.charCodeAt(i + j)]);
    }
    return -1;
    }

function makingTable(pattern, badSymbol, goodSuffix) {
    let m = pattern.length;
    // badSymbol table
    for (let i = 0; i < m; i++) {
        badSymbol[pattern.charCodeAt(i)] = i;
        // console.log(badSymbol[pattern.charCodeAt(i)]);
    }
    
    // goodSuffix table
    let lastPrefix = m;
    for (let i = m - 1; i >= 0; i--) {

        if (isPrefix(pattern, i + 1)) {
        lastPrefix = i + 1;
        }
        goodSuffix[i] = lastPrefix - i + m - 1;
    }
    
    for (let i = 0; i < m - 1; i++) {

        let slen = goodSuffix.length - 1;
        let j = goodSuffix.length - 2;

        if (j >= i && goodSuffix[j - i] < slen - i) {
        goodSuffix[j] = Math.min(slen - i, goodSuffix[j - i]);
        }
    }
}

function isPrefix(pattern, p) {
let m = pattern.length;

for (let i = p, j = 0; i < m; i++, j++) {
    if (pattern[i] !== pattern[j]) {
    return false;
    }
}
return true;
}



module.exports = {bm};