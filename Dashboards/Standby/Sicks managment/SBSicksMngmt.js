// Admins info ------------------------------------------------
function showMessage(mode) {
  let mailMessage =
    "شاهین کهزاد پور - 40030490\nایمیل: mHc9L@example.com\n\nسید مهدی مهدوی مرتضوی - 40030490\nایمیل: sm.shuniversity1400@gmail.com";
  let callMessage =
    "شاهین کهزاد پور - 40030490\nشماره تماس: 09171081634\n\nسید مهدی مهدوی مرتضوی - 40030490\nشماره تماس: 09963147145";
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
  document.getElementById("gender").value = "";
  document.getElementById("gender").disabled = false;
  document.getElementById("age").value = "";
  document.getElementById("insurance").value = "";
  document.getElementById("diseaseStatus").value = "";
});

// List of Sicks ------------------------------------------
let sicks = [
  {
    fullName: "محمد رضایی",
    nationalCode: "1234561377890",
    gender: "0",
    age: "45",
    insuranceType: "تامین اجتماعی",
    diseaseStatus: "2",
    visitDate: "1402/10/15",
  },
  {
    fullName: "زهرا کریمی",
    nationalCode: "0977124",
    gender: "1",
    age: "32",
    insuranceType: "سلامت",
    diseaseStatus: "3",
    visitDate: "1402/09/12",
  },
  {
    fullName: "محسن رضوی",
    nationalCode: "08712",
    gender: "0",
    age: "28",
    insuranceType: "آزاد",
    diseaseStatus: "4",
    visitDate: "1402/08/22",
  },
  {
    fullName: "محسن رضوی",
    nationalCode: "097823424712",
    gender: "0",
    age: "28",
    insuranceType: "آزاد",
    diseaseStatus: "4",
    visitDate: "1402/08/22",
  },
  {
    fullName: "محسن رضوی",
    nationalCode: "09721313218712",
    gender: "0",
    age: "28",
    insuranceType: "آزاد",
    diseaseStatus: "3",
    visitDate: "1402/08/22",
  },
  {
    fullName: "محسن رضوی",
    nationalCode: "0978464712",
    gender: "0",
    age: "28",
    insuranceType: "آزاد",
    diseaseStatus: "2",
    visitDate: "1402/08/22",
  },
  {
    fullName: "محسن رضوی",
    nationalCode: "097898789798712",
    gender: "0",
    age: "28",
    insuranceType: "آزاد",
    diseaseStatus: "2",
    visitDate: "1402/08/22",
  },
  {
    fullName: "محسن رضوی",
    nationalCode: "09787877612",
    gender: "0",
    age: "28",
    insuranceType: "آزاد",
    diseaseStatus: "3",
    visitDate: "1402/08/22",
  },
  {
    fullName: "محسن رضوی",
    nationalCode: "09781029712",
    gender: "0",
    age: "28",
    insuranceType: "آزاد",
    diseaseStatus: "4",
    visitDate: "1402/08/22",
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
  filteredResults = sicks.filter((sick) => {
    let fieldValue = sick[searchField]?.toString().toLowerCase();
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
  filteredData.forEach((sick, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
            <td>${sick.fullName}</td>
            <td>${sick.gender === "0" ? "مرد" : "زن"}</td>
            <td>${sick.nationalCode}</td>
            <td><button class="view-btn" onclick="showSickDetails(${index})">نمایش</button></td>
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
  sicks.forEach((sick, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${sick.fullName}</td>
        <td>${sick.gender === "0" ? "مرد" : "زن"}</td>
        <td>${sick.nationalCode}</td>
        <td><button class="view-btn" onclick="showSickDetails(${index})">نمایش</button></td>
      `;
    tbody.appendChild(row);
  });
}

// To show window infos ---------------------------------------
function showSickDetails(nationalCode) {
  const data = sicks.find((s) => s.nationalCode === nationalCode);

  if (!data) {
    alert("❌ اطلاعاتی برای این بیمار یافت نشد!");
    return;
  }

  document.getElementById("modal-fullName").innerText = data.fullName;
  document.getElementById("modal-nationalCode").innerText = data.nationalCode;
  document.getElementById("modal-gender").innerText =
    data.gender === "0" ? "مرد" : "زن";
  document.getElementById("modal-age").innerText = data.age;
  document.getElementById("modal-insurance").innerText = data.insuranceType;
  document.getElementById("modal-diseaseStatus").innerText =
    data.diseaseStatus === "2"
      ? "حاد 1"
      : data.diseaseStatus === "3"
      ? "حاد 2"
      : "حاد 3";

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
    document.getElementById("gender").value = data.gender;
    document.getElementById("gender").disabled = true;
    document.getElementById("age").value = data.age;
    document.getElementById("insurance").value = data.insuranceType;
    document.getElementById("diseaseStatus").value = data.diseaseStatus;
  };

  document.getElementById("delete-btn").onclick = function () {
    let confirmation = confirm("آیا از حذف این بیمار مطمئن هستید؟");
    if (confirmation) {
      // حذف از لیست اصلی
      sicks = sicks.filter((s) => s.nationalCode !== nationalCode);

      // حذف از لیست فیلتر شده
      filteredResults = filteredResults.filter(
        (s) => s.nationalCode !== nationalCode
      );

      // اگر صفحه خالی شد، یک صفحه به عقب برویم
      let totalPages = Math.ceil(filteredResults.length / resultsPerPage);
      if (currentPage > totalPages) {
        currentPage = totalPages || 1;
      }

      displayPage();
      document.getElementById("overlay").style.display = "none";
      document.body.style.overflow = "auto";
      alert("✅ بیمار مورد نظر با موفقیت حذف شد!");
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
let filteredResults = [...sicks]; // filtered list

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
    tbody.innerHTML = `<tr><td colspan="4">هیچ نتیجه‌ای یافت نشد.</td></tr>`;
    return;
  }

  pageData.forEach((sick) => {
    let row = document.createElement("tr");
    row.innerHTML = `
              <td>${sick.fullName}</td>
              <td>${sick.gender === "0" ? "مرد" : "زن"}</td>
              <td>${sick.nationalCode}</td>
              <td><button class="view-btn" onclick="showSickDetails('${
                sick.nationalCode
              }')">نمایش</button></td>
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
    filteredResults = [...sicks];
  } else {
    filteredResults = sicks.filter((sick) => {
      let fieldValue = sick[searchField]?.toString().toLowerCase();
      if (fieldValue === "0") fieldValue = "مرد";
      else if (fieldValue === "1") fieldValue = "زن";
      else if (fieldValue === "2") fieldValue = "حاد 1";
      else if (fieldValue === "3") fieldValue = "حاد 2";
      else if (fieldValue === "4") fieldValue = "حاد 3";
      return fieldValue.includes(searchText);
    });
  }

  currentPage = 1;
  displayPage();
});

// To sort the search results based on the diseaseStatus
document.getElementById("sort-button").addEventListener("click", function () {
  filteredResults.sort((a, b) => {
    return parseInt(b.diseaseStatus) - parseInt(a.diseaseStatus);
  });

  displayPage();
});

// To show the first page while loading
displayPage();
