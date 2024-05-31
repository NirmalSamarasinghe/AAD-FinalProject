const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

// ======================================================================================================================



function showTable() {
  document.getElementById('tableContainer').style.display = 'block';
}

function filterTable() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const table = document.getElementById('customerTable');
  const rows = table.getElementsByTagName('tr');

  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName('td');
    let match = false;

    for (let j = 0; j < cells.length; j++) {
      if (cells[j]) {
        if (cells[j].innerHTML.toLowerCase().indexOf(input) > -1) {
          match = true;
          break;
        }
      }
    }

    if (match) {
      rows[i].style.display = '';
    } else {
      rows[i].style.display = 'none';
    }
  }
}

function selectCustomer(row) {
  const cells = row.getElementsByTagName('td');


  document.getElementById('searchInput').value = cells[1].innerHTML; // Example: fill input with customer name
  document.getElementById('tableContainer').style.display = 'none'; // Hide the table after selection
}

document.addEventListener('click', function(event) {
  const searchField = document.querySelector('.search-field');
  const tableContainer = document.getElementById('tableContainer');

  if (!searchField.contains(event.target)) {
    tableContainer.style.display = 'none';
  }
});



function selectSupplier(row) {
  const cells = row.getElementsByTagName('td');

  // Example: Get supplier ID and display it as a message
  const supplierId = cells[0].innerHTML;
  alert(`Selected Supplier ID: ${supplierId}`);
  

  // // Example: Fill input with supplier name
  // document.getElementById('supplierNameInput').value = cells[1].innerHTML;
  //
  // // Example: Hide the table after selection
  // document.getElementById('tableContainer').style.display = 'none';
}

document.addEventListener('click', function(event) {
  const searchField = document.querySelector('.search-field');
  const tableContainer = document.getElementById('tableContainer');

  if (!searchField.contains(event.target)) {
    tableContainer.style.display = 'none';
  }
});




// ====================================================================================================================
function triggerFileInput() {
  document.querySelector('.file-input').click();
}

function showFileName(input) {
  const fileName = input.files[0].name;
  const fileNameDisplay = input.parentElement.parentElement.querySelector('.selected-file-name');
  fileNameDisplay.textContent = fileName;
}

document.addEventListener("DOMContentLoaded", function() {
  const dateInputs = document.querySelectorAll('.date-input');

  dateInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.type = 'date';
    });

    input.addEventListener('blur', function() {
      if (this.value === '') {
        this.type = 'text';
      }
    });
  });
});


const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem, i) => {
  navItem.addEventListener("click", () => {
    navItems.forEach((item, j) => {
      item.className = "nav-item";
    });
    navItem.className = "nav-item active";
  });
});


/*
================================================================================================*/

// document.getElementById('saveSupplierButton').addEventListener('click', function() {
//   var supplierForm = document.getElementById('supplierForm');
//   if (supplierForm.checkValidity()) {
//     // Process the form data here, for example, send it to the server
//     // using an AJAX request or any other method as per your requirement.
//     console.log('Form data is valid and ready to be processed.');
//     var formData = new FormData(supplierForm);
//     formData.forEach((value, key) => {
//       console.log(key + ': ' + value);
//     });
//     // Close the modal after saving
//     var supplierModal = new bootstrap.Modal(document.getElementById('supplierModal'));
//     supplierModal.hide();
//   } else {
//     supplierForm.reportValidity();
//   }
// });