function openModal(userName, userId, userType, createdBy, lastAccessedTime, contactNo, emailId) {
  var userDetails = document.getElementById("userDetails");

  userDetails.innerHTML = `
    <li><strong>User Name:</strong> ${userName}</li>
    <li><strong>User ID:</strong> ${userId}</li>
    <li><strong>User Type:</strong> ${userType}</li>
    <li><strong>Created By:</strong> ${createdBy}</li>
    <li><strong>Last Accessed Time:</strong> ${lastAccessedTime}</li>
    <li><strong>Contact No:</strong> ${contactNo}</li>
    <li><strong>Email ID:</strong> ${emailId}</li>
  `;

  var modal = document.getElementById("userModal");
  modal.style.display = "block";

  var submitBtn = document.getElementById("submitBtn");
  var closeBtn = document.getElementById("closeBtn");

  submitBtn.addEventListener("click", handleSubmit);
  closeBtn.addEventListener("click", closeModal);

  function handleSubmit(event) {
    event.preventDefault();
    var form = document.getElementById("userForm");
    closeModal();
  }
}

function closeModal() {
  var modal = document.getElementById("userModal");
  modal.style.display = "none";

  var submitBtn = document.getElementById("submitBtn");
  var closeBtn = document.getElementById("closeBtn");
  
  submitBtn.removeEventListener("click", handleSubmit);
  closeBtn.removeEventListener("click", closeModal);
}
