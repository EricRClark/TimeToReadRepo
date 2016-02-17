var wordsPerMin = function timeToRead (words) {

  var pArray = Array.prototype.slice.call(document.getElementsByTagName('p'));
  var sum = '';
  for (var i = 0; i < pArray.length; i++) {
    sum = sum + pArray[i].textContent;
    /*wPm = (sum.split(' ').length/230);*/
    
  }
    /*console.log(sum);*/
    return Math.round(sum.split(' ').length / 230);
    /*return body.split(' ').length;
  */
  // return Math.round(wordsPerMin);

};
console.log(wordsPerMin());

document.getElementById('time-to-read-view').textContent = "Article Read Time " + wordsPerMin() + " minutes";
