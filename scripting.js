// Miki Wong Period: 9-10 October 2, 2023

function createParagraph(){
    const para = document.createElement("p");
    
    if(this.id == "a"){
        para.textContent = "I once";
    } else if(this.id == "b"){
        para.textContent = "felt uninspired";
    } else if(this.id == "c"){
        para.textContent = "But my";
    } else if(this.id == "d"){
        para.textContent = "brain got";
    } else if(this.id == "e"){
        para.textContent = "rewired";
    }
    document.body.appendChild(para);
    
}

const buttons = document.querySelectorAll('button');

for(const button of buttons){
    button.addEventListener("click", createParagraph);
}