const { con, getQuestions, getAnswers, insertQuestions, updateAnswer, deleteQuestion } = require("../db");
const { calculateEquation } = require("./calculator");

/**
 * @param {string} text
 * @param {string} pattern
 * Pencarian pertanyaan yang paling mirip dengan pertanyaan yang diberikan pengguna dilakukan dengan 
 * algoritma pencocokan string Knuth-Morris-Pratt (KMP)
 * @returns {string} 
 * 
 * @todo Implementasi algoritma KMP
 * */
function kmp(text) {
    console.log("KMP");
    console.log(text);
    if (text.toLowerCase().search("tambahkan pertanyaan ")!=-1 && text.toLowerCase().search("dengan jawaban")!=-1){
        return new Promise(function(resolve, reject) {
            var qResult;
            const myArray = text.split("tambahkan pertanyaan ");
            const array = myArray[1].split(" dengan jawaban ");
            getAnswers(array[0]).then(function(result){
                qResult = result;
                if (qResult.length == 0){
                    insertQuestions(array[0], array[1]);
                    resolve("Pertanyaan " + array[0] + " telah ditambahkan (KMP)" );
                } else {
                    updateAnswer(array[0], array[1]);
                    resolve("Pertanyaan " + array[0] + " sudah ada! jawaban diupdate ke " + array[1]);
                }
            });

        });
    } else if (text.toLowerCase().search("hapus pertanyaan")!=-1) {
        return new Promise(function(resolve, reject) {
            var qResult;
            const array = text.split("hapus pertanyaan ");
            getAnswers(array[1]).then(function(result){
                qResult = result;
                if (qResult.length == 0){
                    resolve("Tidak ada pertanyaan " + array[1] + " pada database!");
                } else {
                    deleteQuestion(array[1]);
                    resolve("Pertanyaan " + array[1] + " telah dihapus");
                }
            }); 
        });
    } else {
        return new Promise(function(resolve, reject) {
            var validation = -1;
            var qResult = [];
            var i = -1;
            var result;

            getQuestions()
                .then(function(result) {
                    qResult = result;
                    console.log(qResult);
                    do {
                        i++;
                        if(i == qResult.length){
                            break;
                        } else {
                            validation = kmpMatch(text, qResult[i].question);
                            // console.log(validation);
                        }
                    } while (validation == -1);

                    if (validation == -1){
                        result = 'Maaf jawaban dari pertanyaan belum ada di database :( (KMP) '; 
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
                                console.log(result + " (KMP)");
                                resolve(result); // resolve the result here
                        });
                    } 
            });
        });
    }
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