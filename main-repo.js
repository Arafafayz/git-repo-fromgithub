 //Main Variabuls

 let theInput =document.querySelector(".get-repos input");
 let getButton =document.querySelector(".get-button");
 let reposData =document.querySelector(".show-data");


getButton.onclick =function(){
    getRepos();
}

 //Get Repos function
 function getRepos(){

if(theInput.value==="" ){
    
    reposData.innerHTML="<span> Please Write Git Hub Username.</span>"
    
}else{
    
   fetch(`https://api.github.com/users/${theInput.value}/repos`)
   .then((response)=>response.json())
   .then((repositories)=>{
    //Empt the container

    reposData.innerHTML="";
    

    //Loop On Repositori

    repositories.forEach(repo => {
        
   let mainDiv=document.createElement("div");
        mainDiv.className="repo-Box"
   let repoName=document.createTextNode(repo.name);
     
   mainDiv.appendChild(repoName);
// create Repo Url
let theUrl = document.createElement("a");

let theUrlText =document.createTextNode("Visite");

theUrl.appendChild(theUrlText);

// Add the Hypertext Refrance"href"
theUrl.href=`https://github.com/${theInput.value}/${repo.name}`;

//set Attribute Blank
theUrl.setAttribute(`target`,`_blank`)

mainDiv.appendChild(theUrl)

//creat the true answer
let stars=document.createElement("span");

let starsText=document.createTextNode(`  ${repo.stargazers_count}`);

stars.appendChild(starsText);

mainDiv.appendChild(stars);


        reposData.appendChild(mainDiv)
    });
   });
 
}
}

