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

  // To reset the input form
  document.getElementById("fullName").value = "";
  document.getElementById("fullName").disabled = false;
  document.getElementById("nationalCode").value = "";
  document.getElementById("nationalCode").disabled = false;
  document.getElementById("gender").value = "";
  document.getElementById("gender").disabled = false;
  document.getElementById("birthDate").value = "";
  document.getElementById("birthDate").disabled = false;
  document.getElementById("password").value = "";
});

// List of Standbies ------------------------------------------
let standbies = [
  {
    fullName: "محمد رضایی",
    nationalCode: "8467138568",
    gender: "0",
    birthDate: "1365/03/22",
    password: "pass123",
    profileImage: "",
    lastLogin: "",
  },
  {
    fullName: "زهرا کریمی",
    nationalCode: "9874682748",
    gender: "1",
    birthDate: "1372/07/15",
    password: "pass456",
    profileImage: "",
    lastLogin: "",
  },
  {
    fullName: "محسن رضوی",
    nationalCode: "3561937569",
    gender: "0",
    birthDate: "1373/07/15",
    password: "pass789",
    profileImage: "",
    lastLogin: "",
  },
  {
    fullName: "فریده عساکره",
    nationalCode: "1248509716",
    gender: "1",
    birthDate: "1376/07/15",
    password: "pass654",
    profileImage: "",
    lastLogin: "",
  },
  {
    fullName: "معصومه طاهری",
    nationalCode: "2748590175",
    gender: "1  ",
    birthDate: "1377/07/15",
    password: "pass321",
    profileImage: "",
    lastLogin: "",
  },
  {
    fullName: "محمدرضا گلزار",
    nationalCode: "6570186785",
    gender: "0",
    birthDate: "1379/07/15",
    password: "pass963",
    profileImage: "",
    lastLogin: "",
  },
  {
    fullName: "لئوناردو دیکاپریو",
    nationalCode: "1230469376",
    gender: "0",
    birthDate: "1380/07/15",
    password: "pass852",
    profileImage: "",
    lastLogin: "",
  },
  {
    fullName: "ایلان ماسک",
    nationalCode: "7852317967",
    gender: "0",
    birthDate: "1381/07/15",
    password: "pass741",
    profileImage: "",
    lastLogin: "",
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
  filteredResults = standbies.filter((standby) => {
    let fieldValue = standby[searchField]?.toString().toLowerCase();
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
  filteredData.forEach((standby, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
          <td>${standby.fullName}</td>
          <td>${standby.gender === "0" ? "مرد" : "زن"}</td>
          <td>${standby.nationalCode}</td>
          <td><button class="view-btn" onclick="showStandbyDetails(${index})">نمایش</button></td>
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
  standbies.forEach((standby, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${standby.fullName}</td>
      <td>${standby.gender === "0" ? "مرد" : "زن"}</td>
      <td>${standby.nationalCode}</td>
      <td><button class="view-btn" onclick="showStandbyDetails(${index})">نمایش</button></td>
    `;
    tbody.appendChild(row);
  });
}

// To show window infos ---------------------------------------
function showStandbyDetails(nationalCode) {
  const data = standbies.find((sb) => sb.nationalCode === nationalCode);

  if (!data) {
    alert("❌ اطلاعاتی برای این کشیک یافت نشد!");
    return;
  }

  document.getElementById("modal-fullName").innerText = data.fullName;
  document.getElementById("modal-nationalCode").innerText = data.nationalCode;
  document.getElementById("modal-gender").innerText =
    data.gender === "0" ? "مرد" : "زن";
  document.getElementById("modal-birthDate").innerText = data.birthDate;
  document.getElementById("modal-password").innerText = data.password;
  document.getElementById("modal-last-login").innerText = data.lastLogin;

  let profilePic = document.getElementById("modal-profile-pic");
  profilePic.src = data.profileImage
    ? data.profileImage
    : "../../../Media/Standby.png";

  document.getElementById("overlay").style.display = "flex";
  document.body.style.overflow = "hidden";

  // Move to add form
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
    document.getElementById("birthDate").value = data.birthDate;
    document.getElementById("birthDate").disabled = true;
    document.getElementById("password").value = data.password;
  };

  // To delete a standby
  document.getElementById("delete-btn").onclick = function () {
    let confirmation = confirm("آیا از حذف این داروساز کشیک مطمئن هستید؟");
    if (confirmation) {
      standbies = standbies.filter((sb) => sb.nationalCode !== nationalCode);
      filteredResults = filteredResults.filter(
        (sb) => sb.nationalCode !== nationalCode
      );

      // If the page goes blank, go back one page
      let totalPages = Math.ceil(filteredResults.length / resultsPerPage);
      if (currentPage > totalPages) {
        currentPage = totalPages || 1;
      }

      displayPage();
      document.getElementById("overlay").style.display = "none";
      document.body.style.overflow = "auto";
      alert("✅ کشیک مورد نظر با موفقیت حذف شد!");
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
let filteredResults = [...standbies]; // filtered list

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
    tbody.innerHTML = `<tr><td colspan="4">هیچ نتیجه‌ای یافت نشد.</td></tr>`;
    return;
  }

  pageData.forEach((standby) => {
    let row = document.createElement("tr");
    row.innerHTML = `
            <td>${standby.fullName}</td>
            <td>${standby.gender === "0" ? "مرد" : "زن"}</td>
            <td>${standby.nationalCode}</td>
            <td><button class="view-btn" onclick="showStandbyDetails('${
              standby.nationalCode
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
    filteredResults = [...standbies];
  } else {
    filteredResults = standbies.filter((standby) => {
      let fieldValue = standby[searchField]?.toString().toLowerCase();
      if (fieldValue === "0") fieldValue = "مرد";
      else if (fieldValue === "1") fieldValue = "زن";
      return fieldValue.includes(searchText);
    });
  }

  currentPage = 1;
  displayPage();
});

// To show the first page while loading
displayPage();
