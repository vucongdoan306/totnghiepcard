const classRotate = "card-rotate";

var eleFront = document.getElementById("front-card");
var eleMainCard = document.getElementById("main-card");

var content1 = document.getElementById("content-1");
var popupComfirm = document.getElementById("popupComfirm");

var cardContainer = document.getElementsByClassName("card-container")[0];

function onClickFront() {
  eleMainCard.classList.add(classRotate);
}

var namePerson = "";

function getNamePerson() {
  namePerson = document.getElementById("name-person").value;
}

var namePosition = "bạn";
var myPosition = "";
var myPosition2 = "";
var checkedName = "";

function getNamePosition() {
  if (document.getElementById("name-position").value)
    namePosition = document.getElementById("name-position").value;
}

function onClickSubmit() {
  getNamePerson();
  displayRadioValue();

  let contentText =
    "Chào mừng " +
    namePosition +
    (namePerson ? " " + namePerson : "") +
    " đến với lễ tốt nghiệp của mình";

  let contentText1 = `Tốt nghiệp không phải là dấu chấm hết, mà là sự trưởng thành. Lễ tốt nghiệp không phải là lời từ biệt. Đó là để có một cuộc hội ngộ tốt hơn trong tương lai. ${myPosition2} sẽ rất vui khi có sự xuất hiện của ${
    namePosition + (namePerson ? " " + namePerson : "")
  } trong 1 cột mốc quan trọng của cuộc đời ${myPosition}. Thank you!!!! `;

  content1.innerHTML = contentText1;

  popupComfirm.style.display = "none";
  cardContainer.style.opacity = 1;
}

function displayRadioValue() {
  var ele = document.getElementsByName("position");

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) checkedName = ele[i].value;
  }

  if (checkedName == "em") {
    myPosition = "chị";
    myPosition2 = "Chị";
    namePosition = "";
  }

  if (checkedName == "anh") {
    myPosition = "em";
    myPosition2 = "Em";
    namePosition = "anh";
  }

  if (checkedName == "chi") {
    myPosition = "em";
    myPosition2 = "Em";
    namePosition = "chị";
  }

  if (checkedName == "ban") {
    myPosition = "mình";
    myPosition2 = "Mình";
    namePosition = "";
  }

  if (checkedName == "khac" || !checkedName) {
    myPosition = "Hiền";
    myPosition2 = "Hiền";
    namePosition = "mọi người";
    namePerson = ""
  }
}
