var formData = [
  {
    type: "text",
    label: "First Name",
    id: "user-first-name",
    icon: "fa-user",
    options: []
  },
  {
    type: "text",
    label: "Last Name",
    id: "user-last-name",
    icon: "fa-user",
    options: []
  },
  {
    type: "email",
    label: "Email Address",
    id: "user-email",
    icon: "fa-envelope",
    options: []
  },
  {
    type: "text",
    label: "Current website url",
    id: "user-website",
    icon: "fa-globe",
    options: []
  },
  {
    type: "select",
    label: "Select Language",
    id: "user-language",
    icon: "",
    options: [
      {
        label: "English",
        value: "EN"
      },
      {
        label: "French",
        value: "FR"
      },
      {
        label: "Spanish",
        value: "SP"
      },
      {
        label: "Chinese",
        value: "CH"
      },
      {
        label: "Japanese",
        value: "JP"
      }
    ]
  },
  {
    type: "textarea",
    label: "Your Comment",
    id: "user-comment",
    icon: "fa-comments",
    options: []
  },
  {
    type: "tel",
    label: "Mobile Number",
    id: "user-mobile",
    icon: "fa-mobile-phone",
    options: []
  },
  {
    type: "tel",
    label: "Home Number",
    id: "user-phone",
    icon: "fa-phone",
    options: []
  }
];

function createForm(array) {
  var form = document.querySelector(".formContainer");

  for (i = 0; i < array.length; i++) {
    if (
      array[i].type == "text" ||
      array[i].type == "email" ||
      array[i].type == "tel"
    ) {
      var newInput = document.createElement("input");
      newInput.type = formData[i].type;
      newInput.id = formData[i].id;
      newInput.placeholder = formData[i].label;
      form.appendChild(newInput);
      // console.log(newInput);
    } else if (array[i].type === "select") {
      var newSelect = document.createElement("select");
      var defaultSelected = document.createElement("option");
      defaultSelected.label = formData[i].label;
      newSelect.type = formData[i].type;
      newSelect.label = formData[i].label;
      newSelect.id = formData[i].id;
      newSelect.options = formData[i].options;
      newSelect.appendChild(defaultSelected);
      for (x = 0; x < array[i].options.length; x++) {
        var newOption = document.createElement("option");
        newOption.textContent = array[i].options[x].label;
        newOption.value = array[i].options[x].value;
        newSelect.appendChild(newOption);
      }
      form.appendChild(newSelect);
    } else if (array[i].type == "textarea") {
      var newTextArea = document.createElement("textarea");
      newTextArea.placeholder = formData[i].label;
      newTextArea.id = formData[i].id;
      form.appendChild(newTextArea);
    } else {
      alert("Invalid Data Type!");
    }
  }
}

createForm(formData);
