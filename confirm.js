function loading() {
    let confirmAction = confirm("Are you sure you want to submit?");
    if (confirmAction) {
      alert("Submission Succesful");
      document.body.style.cursor='wait';
    } else {
    }
  }

