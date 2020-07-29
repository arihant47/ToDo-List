// Check Off specific todos by clicking
// There are two ways

// WAY 1:
// $("li").click(function(){
// 	// if  li is gray
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		// turn it black
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});
// 	}	
// 	// else
// 	else{
// 		// turn it gray
// 		$(this).css({
// 			color: "gray",
// 			textDecoration: "line-through"
// 		});
// 	}
// });

// WAY 2:
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// 
// Click on "X" to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// 
// adding
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// Grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// Create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});


// For plus icon
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});