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

// Show entering form and close search bar
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
  document.getElementById("fullName").value = "";
  document.getElementById("fullName").disabled = false;
  document.getElementById("nationalCode").value = "";
  document.getElementById("nationalCode").disabled = false;
  document.getElementById("patientCondition").value = "";
  document.getElementById("prescribedDrugs").value = "";
  document.getElementById("visitStatus").value = "";
});

// List of visits ------------------------------------------
let visits = [
  {
    fullName: "زهرا کریمی",
    nationalCode: "0977124",
    patientCondition: "درد شکم",
    prescribedDrugs: "رانیتیدین، امپرازول",
    visitStatus: "6", // refrenced
    visitDate: "1401/09/12",
    registeredBy: "9876543210",
  },
  {
    fullName: "محمد رضایی",
    nationalCode: "1234567890",
    patientCondition: "سردرد و تب",
    prescribedDrugs: "استامینوفن، آموکسی‌سیلین",
    visitStatus: "5", // asked
    visitDate: "1402/10/15",
    registeredBy: "9876543210",
  },
  {
    fullName: "مهدی مهدوی",
    nationalCode: "0977124",
    patientCondition: "درد شکم",
    prescribedDrugs: "رانیتیدین، امپرازول",
    visitStatus: "6", // refrenced
    visitDate: "1402/09/12",
    registeredBy: "9876543210",
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
  filteredResults = visits.filter((visit) => {
    let fieldValue = visit[searchField]?.toString().toLowerCase();
    if (fieldValue === "0") fieldValue = "مرد";
    else if (fieldValue === "1") fieldValue = "زن";
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
    tbody.innerHTML = `<tr><td colspan="4">هیچ نتیجه‌ای یافت نشد.</td></tr>`;
    return;
  }

  // Table with new results
  filteredData.forEach((visit, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
            <td>${visit.fullName}</td>
            <td>${visit.nationalCode}</td>
            <td>${visit.visitDate}</td>
            <td>${
              visit.visitStatus === "5" ? "جواب داده شده" : "ارجاع داده شده"
            }</td>
            <td><button class="view-btn" onclick="showVisitDetails(${index})">نمایش</button></td>
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

  visits.forEach((visit, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${visit.fullName}</td>
      <td>${visit.nationalCode}</td>
      <td>${visit.visitDate}</td>
      <td>${visit.visitStatus === "5" ? "جواب داده شده" : "ارجاع داده شده"}</td>
      <td><button class="view-btn" onclick="showVisitDetails(${index})">نمایش</button></td>
    `;
    tbody.appendChild(row);
  });
}

// To show window infos ---------------------------------------
function showVisitDetails(index) {
  const data = visits[index];

  if (!data) {
    alert("❌ اطلاعاتی برای این مراجعه یافت نشد!");
    return;
  }

  document.getElementById("modal-fullName").innerText = data.fullName;
  document.getElementById("modal-nationalCode").innerText = data.nationalCode;
  document.getElementById("modal-medicalHistory").innerText =
    data.patientCondition;
  document.getElementById("modal-prescribedDrugs").innerText =
    data.prescribedDrugs;
  document.getElementById("modal-visitStatus").innerText =
    data.visitStatus === "5" ? "جواب داده شده" : "ارجاع داده شده";
  document.getElementById("modal-visitDate").innerText = data.visitDate;

  document.getElementById("overlay").style.display = "flex";
  document.body.style.overflow = "hidden";

  document.getElementById("edit-btn").onclick = function () {
    document.getElementById("info-form-container").style.display = "block";
    document.getElementById("search-container").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow = "auto";

    document.getElementById("fullName").value = data.fullName;
    document.getElementById("fullName").disabled = true;
    document.getElementById("nationalCode").value = data.nationalCode;
    document.getElementById("nationalCode").disabled = true;
    document.getElementById("medicalHistory").value = data.patientCondition;
    document.getElementById("prescribedDrugs").value = data.prescribedDrugs;
    document.getElementById("visitStatus").value = data.visitStatus;
  };

  document.getElementById("delete-btn").onclick = function () {
    let confirmation = confirm("آیا از حذف این مراجعه مطمئن هستید؟");
    if (confirmation) {
      // حذف از لیست اصلی
      visits = visits.filter((v) => v.nationalCode !== nationalCode);

      // حذف از لیست فیلتر شده
      filteredResults = filteredResults.filter(
        (v) => v.nationalCode !== nationalCode
      );

      // اگر صفحه خالی شد، یک صفحه به عقب برویم
      let totalPages = Math.ceil(filteredResults.length / resultsPerPage);
      if (currentPage > totalPages) {
        currentPage = totalPages || 1;
      }

      displayPage();
      document.getElementById("overlay").style.display = "none";
      document.body.style.overflow = "auto";
      alert("✅ مراجعه مورد نظر با موفقیت حذف شد!");
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
let filteredResults = [...visits]; // filtered list

// A function to show the considered page
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

  pageData.forEach((visit, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${visit.fullName}</td>
      <td>${visit.nationalCode}</td>
      <td>${visit.visitDate}</td>
      <td>${visit.visitStatus === "5" ? "جواب داده شده" : "ارجاع داده شده"}</td>
      <td><button class="view-btn" onclick="showVisitDetails(${index})">نمایش</button></td>
    `;
    tbody.appendChild(row);
  });

  document.getElementById("total-pages").innerText = totalPages;
  document.getElementById("current-page").innerText = currentPage;
  document.getElementById("prev-page").disabled = currentPage === 1;
  document.getElementById("next-page").disabled =
    currentPage === totalPages || totalPages === 0;
}

// Buttons of حagination
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
    filteredResults = [...visits];
  } else {
    filteredResults = visits.filter((visit) => {
      let fieldValue = visit[searchField]?.toString().toLowerCase();
      if (fieldValue === "5") fieldValue = "جواب داده شده";
      else if (fieldValue === "6") fieldValue = "ارجاع داده شده";
      return fieldValue.includes(searchText);
    });
  }

  currentPage = 1;
  displayPage();
});

// To sort the search results based on the diseaseStatus
document.getElementById("sort-button").addEventListener("click", function () {
  filteredResults.sort((a, b) => {
    return parseInt(b.visitDate) - parseInt(a.visitDate);
  });

  displayPage();
});

// To show the first page while loading
displayPage();
