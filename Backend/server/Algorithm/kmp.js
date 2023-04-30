import { con } from "../db.js";
import "../db.js";
/**
 * @param {string} text
 * @param {string} pattern
 * Pencarian pertanyaan yang paling mirip dengan pertanyaan yang diberikan pengguna dilakukan dengan 
 * algoritma pencocokan string Knuth-Morris-Pratt (KMP)
 * @returns {string} 
 * 
 * @todo Implementasi algoritma KMP
 * */
function kmp (text) {
    // TODO: implementasi algoritma KMP
    var validation = -1;
    var qResult = [];
    var i = 0;
    var result;
    con.query('SELECT question FROM questions', function (err, qResult){
        if (err) throw err;
        console.log(qResult);
    })
    while (validation == -1) {
        if(i == qResult.length){
            break;
        } else {
            validation = kmpMatch(text, qResult[i]);
        }
        i++;
    }
    if (validation == -1){
        return 'Maaf jawaban dari pertanyaan belum ada di database :( (KMP) '; 
    } else {
        con.query('SELECT answer FROM questions WHERE question = \"' + qResult[i] + '\"',function (err, aResult){
            if(err) throw err;
            console.log(aResult);
            result = aResult;
        });
    }
    return result + " (KMP)";
}
/**
 * 
 * @param {String} text 
 * @param {String} pattern
 */
function kmpMatch(text, pattern){
    var n = text.length;
    var m = pattern.length;
    var fail = computeFail(pattern);
    var i = 0;
    var j = 0;

    while (i < n){
        if(pattern.charAt(j)==text.charAt(i)){
            if(j == m - 1){
                return i - m + 1;
            }
            i++;
            j++;
        } else if (j > 0){
            j = fail[j-1];
        } else {
            i++;
        }
    }
    return -1;
}

function computeFail(pattern) {
    const fail = new Array(pattern.length);
    fail[0] = 0;
    var m = pattern.length;
    var j = 0;
    var i = 1;
    while (i < m){
        if(pattern.charAt(j) == pattern.charAt(i)){
            fail[i] = j+1;
            i++;
            j++;
        } else if (j > 0){
            j = fail[j-1];
        } else {
            fail[i]=0;
            i++;
        }
    }
    return fail;
}




module.exports = {kmp};