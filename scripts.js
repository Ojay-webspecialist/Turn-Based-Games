
//for loop to create a 10 by 10 square 
for(let x=0;x < 10; x++){
    for(let y=0; y < 10; y++){

        //a jquery statement that adds a grid-item to the grid container
        $('.grid-container').append('<div class="grid-item" data-x="'+x+'" data-y="'+y+'">Square at x:'+x+' and y:'+y+'</div>')

    }
} 