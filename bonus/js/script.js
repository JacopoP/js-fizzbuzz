const container = document.getElementById("container");

let x;
let y;

document.getElementById("begin").addEventListener("click",
    function(){
        x=parseInt(document.getElementById("x").value);
        y=parseInt(document.getElementById("y").value);
        document.getElementById("generate").classList.add("hide")
        document.getElementById("container").classList.remove("hide")

        for (let i = 0; i <= (x*y -1); i++) {

            const n=Math.floor(Math.random() * 3);;
            container.innerHTML+=`<div class="box choose" data-value="${n}"></div>`;
            
        }
        
        const table = document.getElementsByClassName("box")
        
        for (let i=0; i<=(x*y -1); i++){
            table[i].style.width=(100/x)+"%";

            table[i].style.height=(100/y)+"%";
        
            table[i].addEventListener('click',
                function() {
                    if(table[i].classList.contains("flag")){
                        table[i].classList.remove("flag");
                    }
                    else if(table[i].classList.contains("choose")){                
                        table[i].classList.add("flag")
                    }
                }
            );
        
            table[i].addEventListener('dblclick',
                function() {
                    table[i].classList.remove("choose");
        
                    if(table[i].dataset.value=="0"){
                        table[i].classList.add("empty");
                    }
        
                    else if(table[i].dataset.value=="1"){                
                        let n=0;   
        
                        if(((i+1)<=x && i!=0 && i!=(x-1))){
                            if(table[i-1].dataset.value=="2"){
                                n++;
                            }
                            if(table[i+1].dataset.value=="2"){
                                n++;
                            }
                            if(table[i+x-1].dataset.value=="2"){
                                n++;
                            }
                            if(table[i+x].dataset.value=="2"){
                                n++;
                            }
                            if(table[i+x+1].dataset.value=="2"){
                                n++;
                            }
                        }
        
                        else if((i+1)>(x*(y-1)) && i%x!=0 && (i+1)!=(x*y)){
                            if(table[i-x-1].dataset.value=="2"){
                                n++;
                            }
                            if(table[i-x].dataset.value=="2"){
                                n++;
                            }
                            if(table[i-x+1].dataset.value=="2"){
                                n++;
                            }
                            if(table[i-1].dataset.value=="2"){
                                n++;
                            }
                            if(table[i+1].dataset.value=="2"){
                                n++;
                            }
                        }
        
                        else if(i==0){
                            if(table[i+1].dataset.value=="2"){
                                n++;
                            }
                            if(table[i+x].dataset.value=="2"){
                                n++;
                            }
                            if(table[i+x+1].dataset.value=="2"){
                                n++;
                            }
                        }
        
                        else if((i+1)==x){
                            if(table[i-1].dataset.value=="2"){
                                n++;
                            }
                            if(table[i+x-1].dataset.value=="2"){
                                n++;
                            }
                            if(table[i+x].dataset.value=="2"){
                                n++;
                            }
                        }
        
                        else if((i+1)==(x*(y-1)+1)){
                            if(table[i-x].dataset.value=="2"){
                                n++;
                            }
                            if(table[i-x+1].dataset.value=="2"){
                                n++;
                            }
                            if(table[i+1].dataset.value=="2"){
                                n++;
                            }
                        }
        
                        else if((i+1)==(x*y)){
                            if(table[i-x-1].dataset.value=="2"){
                                n++;
                            }
                            if(table[i-x].dataset.value=="2"){
                                n++;
                            }
                            if(table[i-1].dataset.value=="2"){
                                n++;
                            }
                        }
        
                        else if(i%x==0){
                            if(table[i-x].dataset.value=="2"){
                                n++;
                            }
                            if(table[i-x+1].dataset.value=="2"){
                                n++;
                            }
                            if(table[i+1].dataset.value=="2"){
                                n++;
                            }
                            if(table[i+x].dataset.value=="2"){
                                n++;
                            }
                            if(table[i+x+1].dataset.value=="2"){
                                n++;
                            }
                        }
        
                        else if((i+1)%x==0){
                            if(table[i-x-1].dataset.value=="2"){
                                n++;
                            }
                            if(table[i-x].dataset.value=="2"){
                                n++;
                            }
                            if(table[i-1].dataset.value=="2"){
                                n++;
                            }
                            if(table[i+x-1].dataset.value=="2"){
                                n++;
                            }
                            if(table[i+x].dataset.value=="2"){
                                n++;
                            }
                        }
        
                        else{
                            if(table[i-x-1].dataset.value=="2"){
                                n++;
                            }
                            if(table[i-x].dataset.value=="2"){
                                n++;
                            }
                            if(table[i-x+1].dataset.value=="2"){
                                n++;
                            }
                            if(table[i-1].dataset.value=="2"){
                                n++;
                            }
                            if(table[i+1].dataset.value=="2"){
                                n++;
                            }
                            if(table[i+x-1].dataset.value=="2"){
                                n++;
                            }
                            if(table[i+x].dataset.value=="2"){
                                n++;
                            }
                            if(table[i+x+1].dataset.value=="2"){
                                n++;
                            }
                        }
        
                        table[i].innerHTML=`${n}`;
                        n=0;
                    }
        
                    else if(table[i].dataset.value=="2"){                
                        table[i].classList.add("bomb");
                        alert("Hai perso");
                    }
                }
            );
        }
    }
);

