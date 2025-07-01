// Admins info ------------------------------------------------
function showMessage(mode) {
  let mailMessage =
    "شاهین کهزاد پور - 40030490\nایمیل: mHc9L@example.com\n\nسید مهدی مهدوی مرتضوی - 40030490\nایمیل: sm.shuniversity1400@gmail.com";
  let callMessage =
    "شاهین کهزاد پور - 40030490\nشماره تماس: 09170000004\n\nسید مهدی مهدوی مرتضوی - 40030490\nشماره تماس: 09960000005";
  let teleMessage =
    "شاهین کهزاد پور - 40030490\nآیدی تلگرام: @Shahin_Kohzadpour\n\nسید مهدی مهدوی مرتضوی - 40030490\nآیدی تلگرام: @theMHD_120";
  if (mode == 1) alert(mailMessage);
  else if (mode == 2) alert(callMessage);
  else alert(teleMessage);
}

// From representation control, search and window info --------
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("info-form-container").style.display = "none";
  document.getElementById("search-container").style.display = "block";
  document.getElementById("search-bar").value = "";
});

// Show add form and close search bar
document.getElementById("showAddForm").addEventListener("click", function () {
  document.getElementById("info-form-container").style.display = "block";
  document.getElementById("search-container").style.display = "none";
  document.getElementById("search-bar").value = "";
});

// Inverse of above
document.getElementById("showSearch").addEventListener("click", function () {
  document.getElementById("info-form-container").style.display = "none";
  document.getElementById("search-container").style.display = "block";

  // Reset the input form
  document.getElementById("drugName").value = "";
  document.getElementById("saltAmount").value = "";
  document.getElementById("drugForm").value = "";
  document.getElementById("dosage").value = "";
  document.getElementById("administrationRoute").value = "";
  document.getElementById("ingredients").value = "";
  document.getElementById("clinicalUse").value = "";
  document.getElementById("accessLevel").value = "";
  document.getElementById("description").value = "";
  document.getElementById("date").value = "";
});

// List of Drugs ------------------------------------------
let drugs = [
  {
    drugName: "استامینوفن",
    saltAmount: "200mg",
    drugForm: "قرص",
    dosage: "500mg",
    administrationRoute: "خوراکی",
    ingredients: "استامینوفن، لاکتوز، نشاسته",
    clinicalUse: "کاهش درد و تب",
    accessLevel: "تمامی داروخانه‌ها",
    description: "داروی تسکین درد و کاهش تب.",
    date: "1405/10/15",
  },
  {
    drugName: "ایبوپروفن",
    saltAmount: "100mg",
    drugForm: "کپسول",
    dosage: "400mg",
    administrationRoute: "خوراکی",
    ingredients: "ایبوپروفن، سلولز میکروکریستالی",
    clinicalUse: "ضددرد و ضدالتهاب",
    accessLevel: "داروخانه‌های بیمارستانی و خصوصی",
    description: "مناسب برای دردهای عضلانی و التهابی.",
    date: "1404/09/10",
  },
];

// Search results ---------------------------------------------
// Add click event for the search button
document.getElementById("search-button").addEventListener("click", function () {
  let searchField = document.getElementById("search-field").value;
  let searchText = document
    .getElementById("search-bar")
    .value.trim()
    .toLowerCase();
  let filteredResults = [];

  if (searchText === "") {
    populateTable(); // Show the total results if search bar is empty
    return;
  }

  // Filtering by selected property
  filteredResults = drugs.filter((drug) => {
    let fieldValue = drug[searchField]?.toString().toLowerCase();
    return fieldValue.includes(searchText);
  });
  updateSearchResults(filteredResults);
});

function updateSearchResults(filteredData) {
  const tbody = document
    .getElementById("search-results")
    .querySelector("tbody");
  tbody.innerHTML = ""; // remove old results

  if (filteredData.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5">هیچ نتیجه‌ای یافت نشد.</td></tr>`;
    return;
  }

  // Table with new results
  filteredData.forEach((drug, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
          <td>${drug.drugName}</td>
          <td>${drug.drugForm}</td>
          <td>${drug.dosage}</td>
          <td><button class="view-btn" onclick="showDrugDetails(${index})">نمایش</button></td>
      `;
    tbody.appendChild(row);
  });
}

// Primary list (at first) ------------------------------------
function populateTable() {
  const tbody = document
    .getElementById("search-results")
    .querySelector("tbody");
  tbody.innerHTML = "";
  drugs.forEach((drug, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${drug.drugName}</td>
      <td>${drug.saltAmount}</td>
      <td>${drug.drugForm}</td>
      <td>${drug.dosage}</td>
      <td><button class="view-btn" onclick="showDrugDetails(${index})">نمایش</button></td>
    `;
    tbody.appendChild(row);
  });
}

// To show window infos ---------------------------------------
function showDrugDetails(drugName) {
  const data = drugs.find((d) => d.drugName === drugName);

  if (!data) {
    alert("❌ اطلاعاتی برای این داروی یافت نشد!");
    return;
  }

  document.getElementById("modal-drugName").innerText = data.drugName;
  document.getElementById("modal-saltAmount").innerText = data.saltAmount;
  document.getElementById("modal-drugForm").innerText = data.drugForm;
  document.getElementById("modal-dosage").innerText = data.dosage;
  document.getElementById("modal-administrationRoute").innerText =
    data.administrationRoute;
  document.getElementById("modal-ingredients").innerText = data.ingredients;
  document.getElementById("modal-clinicalUse").innerText = data.clinicalUse;
  document.getElementById("modal-accessLevel").innerText = data.accessLevel;
  document.getElementById("modal-description").innerText = data.description;
  document.getElementById("modal-date").innerText = data.date;

  document.getElementById("overlay").style.display = "flex";
  document.body.style.overflow = "hidden";

  // Move to add form
  document.getElementById("edit-btn").onclick = function () {
    document.getElementById("info-form-container").style.display = "block";
    document.getElementById("search-container").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow = "auto";

    document.getElementById("drugName").value = data.drugName;
    document.getElementById("saltAmount").value = data.saltAmount;
    document.getElementById("drugForm").value = data.drugForm;
    document.getElementById("dosage").value = data.dosage;
    document.getElementById("administrationRoute").value =
      data.administrationRoute;
    document.getElementById("ingredients  ").value = data.ingredients;
    document.getElementById("clinicalUse").value = data.clinicalUse;
    document.getElementById("accessLevel").value = data.accessLevel;
    document.getElementById("description").value = data.description;
    document.getElementById("date").value = data.date;
  };

  // To delete a drug
  document.getElementById("delete-btn").onclick = function () {
    let confirmation = confirm("آیا از حذف این دارو مطمئن هستید؟");
    if (confirmation) {
      drugs = drugs.filter((d) => d.drugName !== drugName);
      filteredResults = filteredResults.filter((d) => d.drugName !== drugName);

      // If the page goes blank, go back one page
      let totalPages = Math.ceil(filteredResults.length / resultsPerPage);
      if (currentPage > totalPages) {
        currentPage = totalPages || 1;
      }

      displayPage();
      document.getElementById("overlay").style.display = "none";
      document.body.style.overflow = "auto";
      alert("✅ داروی مورد نظر با موفقیت حذف شد!");
    }
  };
}

// To close searching part  -----------------------------------
document.getElementById("overlay").addEventListener("click", function (e) {
  if (e.target === this) {
    this.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// To show searching part as default --------------------------
populateTable();

// To manage the number of results of each page ---------------
let currentPage = 1;
const resultsPerPage = 8;
let filteredResults = [...drugs]; // filtered list

// To show the considered page
function displayPage() {
  const tbody = document
    .getElementById("search-results")
    .querySelector("tbody");
  tbody.innerHTML = "";

  let totalPages = Math.ceil(filteredResults.length / resultsPerPage);
  let startIndex = (currentPage - 1) * resultsPerPage;
  let endIndex = startIndex + resultsPerPage;
  let pageData = filteredResults.slice(startIndex, endIndex);

  if (pageData.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5">هیچ نتیجه‌ای یافت نشد.</td></tr>`;
    return;
  }

  pageData.forEach((drug) => {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${drug.drugName}</td>
        <td>${drug.saltAmount}</td>
        <td>${drug.drugForm}</td>
        <td>${drug.dosage}</td>
        <td><button class="view-btn" onclick="showDrugDetails('${drug.drugName}')">نمایش</button></td>
    `;
    tbody.appendChild(row);
  });

  document.getElementById("total-pages").innerText = totalPages;
  document.getElementById("current-page").innerText = currentPage;
  document.getElementById("prev-page").disabled = currentPage === 1;
  document.getElementById("next-page").disabled =
    currentPage === totalPages || totalPages === 0;
}

// Buttons of pagination
document.getElementById("prev-page").addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    displayPage();
  }
});

document.getElementById("next-page").addEventListener("click", function () {
  let totalPages = Math.ceil(filteredResults.length / resultsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    displayPage();
  }
});

// To update the searching table while searching
document.getElementById("search-button").addEventListener("click", function () {
  let searchField = document.getElementById("search-field").value;
  let searchText = document
    .getElementById("search-bar")
    .value.trim()
    .toLowerCase();

  if (searchText === "") {
    filteredResults = [...drugs];
  } else {
    filteredResults = drugs.filter((drug) => {
      let fieldValue = drug[searchField]?.toString().toLowerCase();
      return fieldValue.includes(searchText);
    });
  }

  currentPage = 1;
  displayPage();
});

// To show the first page while loading
displayPage();
