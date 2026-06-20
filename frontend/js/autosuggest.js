
    //https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8
    var API_URL="https://autosuggest-backend.onrender.com/api/autosuggest";
    var searchBar=document.getElementById("search-bar");
    var middle=document.getElementById("search-suggestions");


    //this function is called everytime a user enters a word or letter
    searchBar.addEventListener("input",function(){
       //get user typed data
       //put this data as query in the url 
       //make an api call
       //append  all the search suggestionsto div tag in UI
       var query = searchBar.value.trim();
       console.log(query);
       fetchSuggestions(query);
       
    })
    function fetchSuggestions(query){
        var fullAPI=API_URL +"?q="+ query + "&weighted=true&algorithm=trie&limit=8";
        fetch(fullAPI)  
        .then(function(res){
            return res.json(); 
        })
        .then(function(data){
           showSuggestions(data);
           console.log(data);
        })
        .catch(function(err){
            console.log("Error: "+err);
        })
    }
    function showSuggestions(data){
        var values=data.results;
        if(data.count == 0){
            middle.innerHTML="<div>No Matching results found</div>";
        }
        else{
            var htmlString="";
            for(var i=0;i<values.length;i++){
              htmlString +="<div><span class='suggestion-item'>" + values[i].text + "</span><span class='item-weight'"+values[i].weight+"</div>";
            }
            middle.innerHTML=htmlString;
        }
    }