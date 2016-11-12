var newLink = document.createElement ('a');

var allParagraphs = document.getElementsByTagName('p');

var firstParagraph = allParagraphs[0];

function revealCopy(e){
  var allParagraphs = document.getElementsByTagName('p');
  for ( var i = 0; i < allParagraphs.length; i++ ) {
      if (i===0) {
        continue;
      }
    allParagraphs[i].style.display = 'block';
}
  this.remove();
  e.preventDefault();

}

newLink.setAttribute('href','#');

newLink.setAttribute('class','more-link');

newLink.innerHTML='Read More';

newLink.addEventListener('click',revealCopy);

firstParagraph.appendChild(newLink);

for ( var i = 0; i < allParagraphs.length; i++ ) {
    if (i===0) {
      continue;
    }
  allParagraphs[i].style.display = 'none';

}


  // console.log(allParagraphs[i]);
