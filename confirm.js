function confirmAction() {
    let confirmAction = confirm("Are you sure you want to submit?");
    if (confirmAction) {
      alert("Submission Succesful");
    } else {
      alert("Cancelled");
    }
  }