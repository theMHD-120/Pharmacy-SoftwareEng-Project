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

function enterValidation() {
  emailVal = document.getElementById("email").value.toString();
  passVal = document.getElementById("password").value.toString();
  formTag = document.getElementById("form");

  if (emailVal == "example@gmail.com") {
    if (passVal == "Chief123")
      formTag.href = "../Dashboards/Chief/Home/CHome.html";
    else if (passVal == "SB123")
      formTag.href = "../Dashboards/Standby/Home/SBHome.html";
  }
}

alert(
  "جهت ورود از ایمیل example@gmail.com استفاده کنید؛\nبرای ورود به پنل داروساز اصلی، از رمز Chief123 استفاده کنید؛\nهمچنین برای ورود به پنل داروساز کیشک، از رمز SB123 استفاده کنید."
);
