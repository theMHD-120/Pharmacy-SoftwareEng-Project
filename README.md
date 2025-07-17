# Pharmacy-SoftwareEng-Project
>>> Software engineering final project - Fall&Winter 2024/25

||| In the name of ALLAH ||| <br />
Pharmacy Medication Advisory Management System (PMAMS); Based on the requirements and roles mentioned.<br />
**Attention: This repository only contains the dynamic front-end source code.**

## Roles 

The system has **2 roles**:
- Chief Pharmacist
- Standby Pharmacist

### Chief Pharmacist

The higher level of accessibility among pharmacy staff (than standby pharmacists). <br />
Capabilities:
- Add/Remove/Update Standbies
- Add/Remove/Update Drugs
- Add/Remove/Update Sicks (patients)
- Add/Remove/Update Sick (patient) Referrals
  - Patient referrals must be answered (there is no higher level of access to which they can be referred)

### Standby Pharmacist

The lower level of accessibility among pharmacy staff (than chief pharmacists). <br />
Capabilities:
- Add/Remove/Update Drugs
- Add/Remove/Update Sicks (patients)
- Add/Remove/Update Sick (patient) Referrals
  - Patient referrals can be answered or referred (to chief pharmacists)

### Considerations

Each of the above entities (and roles) has fields (attributes) that you can see in the project output.<br />
Two types of sorting (ascending) are considered in this system: 
- Sorting by disease status (for Sicks)
  - The diagnosis of the disease status is made by the attending physician.
  - There are 3 disease states in this system:
    - Acute type 3
    - Acute type 2
    - Acute type 1
- Sorting by referral date (for Sick Referrals)
<!--
## Logo
<br />
<dl><dd><dl><dd><dl><dd><dl><dd><dl><dd><dl><dd><dl><dd><dl><dd><dl><dd><dl><dd><dl><dd><dl>

![Dr. Manavi Pharmacy logo](https://github.com/theMHD-120/Pharmacy-SoftwareEng-Frontend/blob/970e1f69cb959dd2c594acb0c2191df205c37341/Media/pharmacy-icon.png)
</dl></dd></dl></dd></dl></dd></dl></dd></dl></dd></dl></dd></dl></dd></dl></dd></dl></dd></dl></dd></dl></dd></dl>


## Quick watch 
<img src="https://github.com/theMHD-120/Pharmacy-SoftwareEng-Project/blob/4a8422fa4e7e4215cadfc5f85c3b4b67d851c92f/Media/quick-watch.gif" width="900" title="Qucik watch video">
![Qucik watch video](https://github.com/theMHD-120/Pharmacy-SoftwareEng-Project/blob/4a8422fa4e7e4215cadfc5f85c3b4b67d851c92f/Media/quick-watch.gif)
 -->
