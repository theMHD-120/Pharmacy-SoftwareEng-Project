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
    fullName: "برد پیت",
    nationalCode: "8560223371",
    patientCondition: "درد شکم",
    prescribedDrugs: "دیفن‌هیدرامین",
    visitStatus: "0",
    visitDate: "1402/10/15",
    registrarNationalCode: "8467138568",
  },
  {
    fullName: "مسعود پزشکیان",
    nationalCode: "5960889977",
    patientCondition: "درد شکم",
    prescribedDrugs: "آموکسی‌سیلین",
    visitStatus: "1",
    visitDate: "1403/11/29",
    registrarNationalCode: "3561937569",
  },
  {
    fullName: "آنجلینا جولی",
    nationalCode: "5552883644",
    patientCondition: "تب بالا",
    prescribedDrugs: "استامینوفن",
    visitStatus: "0",
    visitDate: "1404/02/05",
    registrarNationalCode: "3561937569",
  },
  {
    fullName: "محمود احمدی نژاد",
    nationalCode: "6710696634",
    patientCondition: "سردرد",
    prescribedDrugs: "ایبوپروفن",
    visitStatus: "1",
    visitDate: "1404/06/12",
    registrarNationalCode: "1248509716",
  },
  {
    fullName: "محمد جواد ظریف",
    nationalCode: "3160678302",
    patientCondition: "آلرژی فصلی",
    prescribedDrugs: "لوراتادین",
    visitStatus: "1",
    visitDate: "1403/01/10",
    registrarNationalCode: "6570186785",
  },
  {
    fullName: "نتانیابوووو",
    nationalCode: "0978464712",
    patientCondition: "ریفلاکس معده",
    prescribedDrugs: "فاموتیدین",
    visitStatus: "0",
    visitDate: "1403/05/17",
    registrarNationalCode: "1248509716",
  },
  {
    fullName: "سارا اسماعیلی",
    nationalCode: "3458678401",
    patientCondition: "اسهال عفونی",
    prescribedDrugs: "آزیترومایسین",
    visitStatus: "1",
    visitDate: "1404/07/20",
    registrarNationalCode: "2748590175",
  },
  {
    fullName: "دونالد ترامپ",
    nationalCode: "6547837569",
    patientCondition: "سوزش معده",
    prescribedDrugs: "رانیتیدین",
    visitStatus: "0",
    visitDate: "1402/11/11",
    registrarNationalCode: "1230469376",
  },
  {
    fullName: "سوشیانت شریعتی",
    nationalCode: "3520876549",
    patientCondition: "کم‌کاری تیروئید",
    prescribedDrugs: "لووتیروکسین",
    visitStatus: "0",
    visitDate: "1403/04/04",
    registrarNationalCode: "7852317967",
  },
  {
    fullName: "فرزانه صادق",
    nationalCode: "1369764819",
    patientCondition: "درد قفسه سینه",
    prescribedDrugs: "نیتروگلیسیرین",
    visitStatus: "1",
    visitDate: "1404/03/03",
    registrarNationalCode: "3561937569",
  },
  {
    fullName: "عبدالناصر همتی",
    nationalCode: "0958156248",
    patientCondition: "پیشگیری از سکته",
    prescribedDrugs: "کلوپیدوگرل",
    visitStatus: "1",
    visitDate: "1405/01/20",
    registrarNationalCode: "8467138568",
  },
  {
    fullName: "محمد مرتضوی",
    nationalCode: "1846094780",
    patientCondition: "عفونت تنفسی",
    prescribedDrugs: "آموکسی‌سیلین",
    visitStatus: "0",
    visitDate: "1405/02/02",
    registrarNationalCode: "1248509716",
  },
  {
    fullName: "آدولف هیتلر",
    nationalCode: "6016953975",
    patientCondition: "قند خون بالا",
    prescribedDrugs: "متفورمین",
    visitStatus: "1",
    visitDate: "1404/11/11",
    registrarNationalCode: "2748590175",
  },
  {
    fullName: "مهدیه صابری",
    nationalCode: "2348905678",
    patientCondition: "درد مفصل",
    prescribedDrugs: "ایبوپروفن",
    visitStatus: "0",
    visitDate: "1403/09/09",
    registrarNationalCode: "1230469376",
  },
  {
    fullName: "ستیا کمالی",
    nationalCode: "2580963147",
    patientCondition: "سرفه‌های آلرژیک",
    prescribedDrugs: "دیفن‌هیدرامین",
    visitStatus: "1",
    visitDate: "1402/08/23",
    registrarNationalCode: "7852317967",
  },
  {
    fullName: "احمذ شمس",
    nationalCode: "5890739146",
    patientCondition: "عفونت ادراری",
    prescribedDrugs: "آزیترومایسین",
    visitStatus: "0",
    visitDate: "1403/10/12",
    registrarNationalCode: "3561937569",
  },
  {
    fullName: "مجتبی احمدی",
    nationalCode: "2837183807",
    patientCondition: "تب و بدن درد",
    prescribedDrugs: "استامینوفن",
    visitStatus: "1",
    visitDate: "1405/02/25",
    registrarNationalCode: "6570186785",
  },
  {
    fullName: "ساینا سعیدی",
    nationalCode: "2890173964",
    patientCondition: "ریفلاکس معده",
    prescribedDrugs: "فاموتیدین",
    visitStatus: "0",
    visitDate: "1404/06/06",
    registrarNationalCode: "1230469376",
  },
  {
    fullName: "کیناز حعفری",
    nationalCode: "7913086946",
    patientCondition: "ترش کردن معده",
    prescribedDrugs: "رانیتیدین",
    visitStatus: "0",
    visitDate: "1403/03/15",
    registrarNationalCode: "7852317967",
  },
  {
    fullName: "عباس بوعذار",
    nationalCode: "3589076582",
    patientCondition: "درد قفسه سینه",
    prescribedDrugs: "نیتروگلیسیرین",
    visitStatus: "1",
    visitDate: "1405/03/08",
    registrarNationalCode: "9874682748",
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
    if (fieldValue === "0") fieldValue = "جواب داده شده";
    else if (fieldValue === "1") fieldValue = "ارجاع داده شده";
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
  filteredData.forEach((visit, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
            <td>${visit.fullName}</td>
            <td>${visit.nationalCode}</td>
            <td>${visit.visitDate}</td>
            <td>${
              visit.visitStatus === "0" ? "جواب داده شده" : "ارجاع داده شده"
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
      <td>${visit.visitStatus === "0" ? "جواب داده شده" : "ارجاع داده شده"}</td>
      <td><button class="view-btn" onclick="showVisitDetails(${index})">نمایش</button></td>
    `;
    tbody.appendChild(row);
  });
}

// To show window infos ---------------------------------------
function showVisitDetails(nationalCode) {
  const data = visits.find((v) => v.nationalCode === nationalCode);

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
    data.visitStatus === "0" ? "جواب داده شده" : "ارجاع داده شده";
  document.getElementById("modal-visitDate").innerText = data.visitDate;
  document.getElementById("modal-registrarNationalCode").innerText =
    data.registrarNationalCode;

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
      visits = visits.filter((v) => v.nationalCode !== nationalCode);
      filteredResults = filteredResults.filter(
        (v) => v.nationalCode !== nationalCode
      );

      // If the page goes blank, go back one page
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

  pageData.forEach((visit) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${visit.fullName}</td>
      <td>${visit.nationalCode}</td>
      <td>${visit.visitDate}</td>
      <td>${visit.visitStatus === "0" ? "جواب داده شده" : "ارجاع داده شده"}</td>
      <td><button class="view-btn" onclick="showVisitDetails('${
        visit.nationalCode
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
    filteredResults = [...visits];
  } else {
    filteredResults = visits.filter((visit) => {
      let fieldValue = visit[searchField]?.toString().toLowerCase();
      if (fieldValue === "0") fieldValue = "جواب داده شده";
      else if (fieldValue === "1") fieldValue = "ارجاع داده شده";
      return fieldValue.includes(searchText);
    });
  }

  currentPage = 1;
  displayPage();
});

// To sort the search results based on the diseaseStatus
document.getElementById("sort-button").addEventListener("click", function () {
  filteredResults.sort((a, b) => {
    return (
      parseInt(b.visitDate.replaceAll("/", "")) -
      parseInt(a.visitDate.replaceAll("/", ""))
    );
  });

  displayPage();
});

// To show the first page while loading
displayPage();
