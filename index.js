// 1) no longer has DOM node 'main#main'
document.getElementById('main').remove()

// 2) has a 'newHeader' variable that points to an <h1> node, 'h1#victory'
const newHeader = document.createElement('h1')


// 3) the 'newHeader' variable points to a node that has an id of 'victory'
newHeader.id = 'victory'

// 4) the 'newHeader' variable points to a node 'h1#victory', has "YOUR-NAME 
//is the champion" inside.

newHeader.textContent = "YOUR-NAME is the champion"