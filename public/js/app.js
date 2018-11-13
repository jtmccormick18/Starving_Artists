$(function () {

	//CLIENT SIGN UP SECTION
	
		$('#createClient').on("click", showClientModal)
		function showClientModal(event) {
			event.preventDefault();
			$('#clientSignUp').addClass("show");
		}
	
		$("#clientCreate").on("click", createClient)
		function createClient(event) {
			event.preventDefault();
	
			$('#clientError').removeClass("show")
			$('#cpasswordError').removeClass("show")
			//VERY IMPORTANT! Currently, this event ID is being randomly generated for testing. In the actual program, this will not exist, 
			//and mySQL will take care of it.
			const fakeID = Math.floor(Math.random() * 900) +100;
	
			const p1 = $('#cPassword1').val().trim();
			const p2 = $('#cPassword2').val().trim();
	
			const newClient = {
				id: fakeID,
				firstName: $('#cFirstName').val().trim(),
				lastName: $('#cLastName').val().trim(),
				email: $('#cEmail').val().trim(),
				userName: $('#cUserName').val().trim(),
				password: $('#cPassword2').val().trim(),
			}
	//CHECK WHY THIS VALIDATION ISN'T WORKING
			if (newClient.firstName === "" || newClient.lastName === "" || newClient.userName ==="" || newClient.password ==="")  {
				$('#clientError').addClass("show")
				$('#clientError').toggleClass("alt");
			} else if (p1 != p2) {
				$('#cpasswordError').addClass("show")
				$('#cpasswordError').toggleClass("alt");
			} else {
	
				// $.put('/api/events)
				//[REQUEST]: PUT [users]
	
				console.log(newClient);
	
				$('#clientSignUp').removeClass("show");
				$('#cpasswordError').removeClass("show")
				$('#clientError').removeClass("show")
				}
			}
	
		$('#clientCancel').on("click", closeClient);
		function closeClient(event) {
			event.preventDefault();
			
			$('#clientError').removeClass("show")
			$('#cpasswordError').removeClass("show")

			$('#cFirstName').val("");
			$('#cLastName').val("");
			$('#cEmail').val("");
			$('#cUserName').val("");
			$('#cPassword1').val("");
			$('#cPassword2').val("");
	
			$('#clientSignUp').removeClass("show");
		}
	
	//ARTIST SIGN UP SECTION
	
		$('#createArtist').on("click", showArtistModal)
		function showArtistModal(event) {
			event.preventDefault();
			$('#artistSignUp').addClass("show");
		}
	
		$("#artistCreate").on("click", createArtist)
		function createArtist(event) {
			event.preventDefault();
	
			$('#artistError').removeClass("show")
			$('#apasswordError').removeClass("show")
			//VERY IMPORTANT! Currently, this event ID is being randomly generated for testing. In the actual program, this will not exist, 
			//and mySQL will take care of it.
			const fakeID = Math.floor(Math.random() * 900) +100;
	
			const p1 = $('#aPassword1').val().trim();
			const p2 = $('#aPassword2').val().trim();
	
			const str = $('#comments').val().trim();
	
			const newArtist = {
				id: fakeID,
				firstName: $('#aFirstName').val().trim(),
				lastName: $('#aLastName').val().trim(),
				email: $('#aEmail').val().trim(),
				userName: $('#aUserName').val().trim(),
				password: $('#aPassword2').val().trim(),
				zipcode: parseInt($('#Zipcode').val()),
				state: $('#aState').val(),
				artType: $('#virtuoso').val(),
				specialties: str.split(",")
			}
	
			if (newArtist.firstName === "" || newArtist.lastName === "" || newArtist.userName ==="" || newArtist.password ==="")  {
				$('#artistError').addClass("show")
				$('#artistError').toggleClass("alt");
			} else if (p1 != p2) {
				$('#apasswordError').addClass("show")
				$('#apasswordError').toggleClass("alt");
			} else {
	
				// $.put('/api/events)
				//[REQUEST]: PUT [users]
	
				console.log(newArtist);
	
				$('#artistSignUp').removeClass("show");
				$('#apasswordError').removeClass("show")
				$('#artistError').removeClass("show")
				}
	
			}	
	
		$('#artistCancel').on("click", closeArtist);
		function closeArtist(event) {
			event.preventDefault();

			$('#artistError').removeClass("show")
			$('#apasswordError').removeClass("show")
	
			$('#aFirstName').val("");
			$('#aLastName').val("");
			$('#aEmail').val("");
			$('#aUserName').val("");
			$('#aPassword1').val("");
			$('#aPassword2').val("");
			$('#aZipcode').val("");
			$('#aState').val("");
			$('#virtuoso').val("");
			$('#comments').val("");
	
			$('#artistSignUp').removeClass("show");
		}
	})