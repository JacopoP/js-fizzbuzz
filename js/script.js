const container = document.getElementById("container");
for (let i = 1; i <= 100; i++) {

    if (i % 15 === 0){
        container.innerHTML +=`<div class="box fizzbuzz"> fizzbuzz </div>`;
    }

    else if (i % 5 === 0){
        container.innerHTML +=`<div class="box buzz"> buzz </div>`;
    }

    else if (i % 3 === 0){
        container.innerHTML +=`<div class="box fizz"> fizz </div>`;
    }

    else{
        container.innerHTML +=`<div class="box none"> ${i} </div>`;
    }
    
}