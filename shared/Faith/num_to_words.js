
function num_to_words (num){

    var ary =["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
    
    var str = num.toString(), len = str.length, words = "";
    
    for(var i=0; i<len; i++){
        words += ary[parseint(str[i])] + " "; 
    }
    
    return words;
}

console.log(num_to_words(2005));