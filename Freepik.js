let searchButton = document.getElementById('searchButton').addEventListener('click', function(){
  const searchTerm = document.getElementById('searchInput').value;
  if (searchTerm){
    alert(`You searched for : ${searchTerm}`);
  }
  else{
    alert(`Enter search details`);
  }
})