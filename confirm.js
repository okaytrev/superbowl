function loading() {
    let confirmAction = confirm("Are you sure you want to submit?");
    if (confirmAction) {
      alert("Submission Succesful");
      document.body.style.cursor='wait';
    } else {
    }
  }

  function rams(){
    document.getElementById("css_main").setAttribute('href', "style.css");
  }

  function bengals(){
        document.getElementById("css_main").setAttribute('href', "bengals.css");
  }

