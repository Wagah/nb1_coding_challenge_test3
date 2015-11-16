//Check if the document has loaded
$(document).ready(function(){

		$("h1").mouseenter(function()
			{
			// $(this).fadeOut().fadeIn();

		$(this).slideDown(5000).slideDown(5000);
			});//end

		$("#project1 img").mouseenter(function()
			{
				$("#project1 h5").hide(5000);

			});
		
		$("#button").click(function(){

			$("#activity").slideDown("slow");

			});



		$("#project1 img").mouseleave(function()
			{
				$("#project1 h5").show(5000);	
			});

		$("#project2 img").mouseenter(function()
			{
				$("#project2 h5").hide(5000);

			});
		
		$("#project2 img").mouseleave(function()
			{
				$("#project2 h5").show(5000);	
			});
		
		$("#project3 img").mouseenter(function()
			{
				$("#project3 h5").hide(5000);

			});
		
		$("#project3 img").mouseleave(function()
			{
				$("#project3 h5").show(1000);	
			});

		$("#flip").click(function(){
				$("#panel1").slideDown("slow");

		});



//Some people represent the event parameter as 'e'
//this is a naming shortcut
		$('#contact-form').on('submit', function(e){
					url = '/';
					
					data = $(this).serialize();
					
					console.log(data);

					$.post(url,data)
					.done(function(){
						alert("You are logged in");

					}).fail(function(){
						alert("Oooops. Something went wrong");
					
					});

			//Prevents the default behaviour of the form
						e.preventDefault();
					});	



$("#contact-form").validate({
  rules: {
    fullname: "required",
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    fullname: "Please specify your name",
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    }
  }


});

$("#").click(function(){
    $("#Home").slideDown();
});

githubReposUrl = "https://api.github.com/users/wagah/repos"
$.get(githubReposUrl, function(repositories){
// pass data objects
projectListTemplate = '';
projectListTemplate += '<ul>';

repositories.forEach(function(repository){
	projectListTemplate += '<li>';
		projectListTemplate += '<h2><a href="'+repository.html_url +'">' + repository.name +'<a/></h2>';
		projectListTemplate += '<p>' + repository.descripion +'</p>';
		projectListTemplate += '<a href="#">Teams working on project</a>'; 
		projectListTemplate += '</li>';
	});

projectListTemplate += '</ul>';


	// projectListTemplate= '<ul>'
	// 						+'<li>'
	// 							+'<h2><a href="#">Introduction to bootstrap<a/></h2>'
	// 							+'<p>My project descripion</p>'
	// 							+'<a href="#">Teams working on project</a>'
	// 						+'</li>'
	// 					+'</ul>';
$("#open-source-content").html(projectListTemplate);

	});
// nodeServerUrl = "http://127.0.0.1:8081"
// dataHandler = function(data){
// 	console.log(data);
// };
// $.get(nodeServerUrl,dataHandler);

// });