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

// Upload profile photo ---------------------------------------
document
  .getElementById("uploadImage")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const profileImage = document.getElementById("profileImage");
        const defaultSVG = document.getElementById("defaultSVG");

        // To show new image and remove default SVG
        profileImage.src = e.target.result;
        profileImage.style.display = "block";
        defaultSVG.style.display = "none";
      };
      reader.readAsDataURL(file);
    }
  });

// To get the time of last login (generally, it should obtained from the server files)
let currentLoginTime = new Date().toLocaleString("fa-IR");
document.getElementById("modal-lastLogin").innerHTML = currentLoginTime;
