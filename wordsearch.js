const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    console.log(horizontalJoin);
    for (const l of horizontalJoin) {
        
      if (l.includes(word)) {
        return true;
      }
    }
    for (const l of verticalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
    return false;
  };
  
  const transpose = function(matrix) {
    // Put your solution here
    let newMatrix = [];
    if (matrix.length === 1) {
      for (let x = 0; x < matrix[0].length; x++) {
        newMatrix.push([]);
        newMatrix[x].push(matrix[0][x]);
      }
      return newMatrix;
    }
    
    for (let y = 0; y < matrix.length; y++) {
      newMatrix.push([]);
    
      for (let x = 0; x < matrix[y].length; x++) {
        newMatrix[y].push(matrix[y][x]);
      }
    
    }
    
    return newMatrix;
  };
    
  
  module.exports = wordSearch;
  