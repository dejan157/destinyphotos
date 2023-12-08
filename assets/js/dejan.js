const url = window.location.pathname;

const navLinks = [
    { name: 'HOME', id: 'index.html#top' },
    { name: 'ABOUT US', id: 'index.html#about' },
    { name: 'TESTIMONIALS', id: 'index.html#testimonials' },
    { name: 'CONTACT US', id: 'index.html#contact-us' },
    { name: 'AUTHOR', id: 'author.html' }
  ];

// const services = [
//     {
//       icon: 'assets/images/service-icon-01.png',
//       title: 'Public Relations Strategy',
//       description: 'Crafting impactful narratives and engaging strategies to elevate your brand\'s presence and resonance.',
//     },
//     {
//       icon: 'assets/images/service-icon-02.png',
//       title: 'Audience Engagement Metrics',
//       description: 'Harnessing audience engagement metrics to understand audience behavior, optimizing strategies for maximum engagement.',
//     },
//     {
//       icon: 'assets/images/service-icon-03.png',
//       title: 'Campaign Reporting',
//       description: 'Delivering comprehensive insights and analysis to measure the success and impact of your PR initiatives.',
//     },
//     {
//       icon: 'assets/images/service-icon-04.png',
//       title: 'SEO Enhancement Solutions',
//       description: 'Providing tailored recommendations and strategies to boost your brand\'s visibility and relevance in the digital landscape.',
//     }
//   ];

  const formStructure = {
    id: 'contact',
    action: '',
    method: 'post',
    fields: [
      { type: 'input', inputType: 'text', name: 'name', id: 'name', placeholder: 'Name'},
      { type: 'input', inputType: 'text', name: 'surname', id: 'surname', placeholder: 'Surname'},
      { type: 'input', inputType: 'text', name: 'email', id: 'email', placeholder: 'Your Email'},
      { type: 'textarea', name: 'message', id: 'message', placeholder: 'Message'},
      { type: 'dropdown', name: 'dropdown', id: 'dropdown', options: ['How did you heard about us?', 'Social Media', 'Referral', 'Web Search', 'Event Attendance', 'Advertisement', 'Other']},
      { type: 'radio', name: 'radio', id: 'radio', options: ['Brand Promotion', 'Event Management', 'Media Relations', 'Marketing Strategy', 'Other']}
    ],
    submitButtonId: 'form-submit',
    submitButtonClass: 'main-button',
    submitButtonText: 'Send Message',
  };

  function creatingNavLinks() {
    const nav = document.querySelector('.nav');
  
    navLinks.forEach(link => {
      const listItem = document.createElement('li');
      const aTag = document.createElement('a');
      console.log(url);
      if(url === '/lavamobile/index.html' || url === '/lavamobile/'){
      if (!link.name == 'Author'){
      aTag.href = `#${link.id}`;
      }
      else{
        aTag.href = `${link.id}`
      }
    }
    if (url == '/lavamobile/author.html'){
      if (link.name == 'Author'){
        aTag.href = `#`;
        }
        else{
          aTag.href = `${link.id}`
        }
    }
      aTag.textContent = link.name;
  
      listItem.classList.add('scroll-to-section');
      if (link.name === 'Home') {
        aTag.classList.add('active');
      }
  
      listItem.appendChild(aTag);
      nav.appendChild(listItem);
    });
  }

  function createForm(formStructure) {
    const form = document.createElement('form');
    form.id = formStructure.id || '';
    form.action = formStructure.action || '';
    form.method = formStructure.method || '';
  
    formStructure.fields.forEach(field => {
      const fieldset = document.createElement('fieldset');
  
      if (field.type === 'input' || field.type === 'textarea') {
        const input = document.createElement(field.type === 'input' ? 'input' : 'textarea');
        input.type = field.inputType || 'text';
        input.name = field.name || '';
        input.id = field.id || '';
        input.placeholder = field.placeholder || '';
  
        if (field.pattern) {
          input.pattern = field.pattern;
        }
  
        if (field.type === 'textarea') {
          input.classList.add('form-control');
        }
  
        fieldset.appendChild(input);
      } else if (field.type === 'dropdown') {
        const select = document.createElement('select');
        select.name = field.name || '';
        select.id = field.id || '';
  
  
        field.options.forEach(optionText => {
          const option = document.createElement('option');
          option.value = optionText.toLowerCase().replace(/\s/g, '_');
          option.text = optionText;
          select.appendChild(option);
        });
  
        fieldset.appendChild(select);
      } else if (field.type === 'radio') {
        const spanRadio = document.createElement('span')
        spanRadio.classList.add('text-dark');
        spanRadio.innerHTML = 'Why are you contacting us?';
        fieldset.appendChild(spanRadio);
  
        field.options.forEach(optionText => {
          const radioDiv = document.createElement('div');
          radioDiv.className = 'radio-group';
  
          const radioInput = document.createElement('input');
          radioInput.type = 'radio';
          radioInput.name = field.name || '';
          radioInput.id = optionText.toLowerCase().replace(/\s/g, '_');
          radioInput.value = optionText.toLowerCase().replace(/\s/g, '_');
  
  
          const radioLabel = document.createElement('label');
          radioLabel.htmlFor = radioInput.id;
          radioLabel.textContent = optionText;
  
          radioDiv.appendChild(radioInput);
          radioDiv.appendChild(radioLabel);
          fieldset.appendChild(radioDiv);
          fieldset.classList.add('mt-3');
        });
  
      }
  
      form.appendChild(fieldset);
    });
  
    const buttonFieldset = document.createElement('fieldset');
    buttonFieldset.classList.add('d-flex', 'flex-column', 'justify-content-start');
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = formStructure.submitButtonId || '';
    submitButton.className = formStructure.submitButtonClass || '';
    submitButton.textContent = formStructure.submitButtonText || 'Submit';
    buttonFieldset.appendChild(submitButton);
  
    form.appendChild(buttonFieldset);
  
  
    return form;
  }
  
  function validateName(name) {
    const nameRegex = /^[a-zA-Z\s]+$/;
    const isValid = nameRegex.test(name);
    const errorElement = document.getElementById('name-error');
  
    if (!isValid) {
      errorElement.innerText = 'Please enter a valid name.';
      errorElement.classList.remove('d-none');
      errorElement.classList.add('d-block');
    } else {
      errorElement.innerText = '';
      errorElement.classList.remove('d-block');
      errorElement.classList.add('d-none');
    }
  
    return isValid;
  }
  
  function validateSurname(surname) {
    const surnameRegex = /^[a-zA-Z\s]+$/;
    const isValid = surnameRegex.test(surname);
    const errorElement = document.getElementById('surname-error');
  
    if (!isValid) {
      errorElement.innerText = 'Please enter a valid surname.';
      errorElement.classList.remove('d-none');
      errorElement.classList.add('d-block');
    } else {
      errorElement.innerText = '';
      errorElement.classList.remove('d-block');
      errorElement.classList.add('d-none');
    }
  
    return isValid;
  }
  
  function validateMessage(message) {
    const messageRegex = /^[A-Za-z0-9.]{10,201}$/;
    const isValid = messageRegex.test(message);
    const errorElement = document.getElementById('message-error');
  
    if (!isValid) {
      errorElement.innerText = 'Please enter a message with 10 to 200 characters.';
      errorElement.classList.remove('d-none');
      errorElement.classList.add('d-block');
    } else {
      errorElement.innerText = '';
      errorElement.classList.remove('d-block');
      errorElement.classList.add('d-none');
    }
  
    return isValid;
  }
  
  function validateEmail(email) {
    const emailRegex = /^[\w-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const isValid = emailRegex.test(email);
    const errorElement = document.getElementById('email-error');
  
    if (!isValid) {
      errorElement.innerText = 'Please enter a valid email.';
      errorElement.classList.remove('d-none');
      errorElement.classList.add('d-block');
    } else {
      errorElement.innerText = '';
      errorElement.classList.remove('d-block');
      errorElement.classList.add('d-none');
    }
  
    return isValid;
  }
  
  // Create error message elements
  function createErrorMessage(fieldId) {
    const errorElement = document.createElement('div');
    errorElement.id = `${fieldId}-error`;
    errorElement.classList.add('error-message', 'd-none', 'text-danger');
    return errorElement;
  }
  
  // Display/hide error messages
  function showError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    if (!errorElement) {
      return; 
    }
  
    if (message) {
      errorElement.innerText = message;
      errorElement.classList.remove('d-none');
      errorElement.classList.add('d-block');
    } else {
      errorElement.innerText = '';
      errorElement.classList.remove('d-block');
      errorElement.classList.add('d-none');
    }
  }
  
  // Validate form fields on submit
  function validateForm() {
    const nameField = document.getElementById('name');
    const surnameField = document.getElementById('surname');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    const dropdownField = document.getElementById('dropdown');
    const radioField = document.getElementsByName('radio');
    let isValid = true;

    // Validate name
    isValid = validateName(nameField.value) && isValid;
  
    // Validate surname
    isValid = validateSurname(surnameField.value) && isValid;
  
    // Validate message
    isValid = validateMessage(messageField.value) && isValid;
  
    // Validate email
    isValid = validateEmail(emailField.value) && isValid;
  
    // Validate dropdown 
    if (dropdownField.selectedIndex === 0) {
      showError('dropdown', 'Please select an option from the dropdown.');
      isValid = false;
    } else {
      showError('dropdown', ''); 
    }
  
    // Validate radio button 
    let radioChecked = false;
    for (let i = 0; i < radioField.length; i++) {
      if (radioField[i].checked) {
        radioChecked = true;
        break;
      }
    }
    if (!radioChecked) {
      showError('other', 'Please select an option from the radio buttons.');
      isValid = false;
    } else {
      showError('other', ''); 
    }
  
    // If the form is valid -> submit
    if (isValid) {
  
      // Empty form elements
      document.getElementById('contact-form').reset();
  
      var spanElement = document.createElement('span');
      spanElement.textContent = 'Your message is sent successfully!'; 
      spanElement.classList.add('text-success', 'ms-2');
    
      var fieldsetElement = document.querySelector('#contact-form');
    
      fieldsetElement.appendChild(spanElement);
    }
  
    return isValid;
  }
  // Generate dynamic form using formStructure
  const dynamicForm = createForm(formStructure);
  document.querySelector('#form-container').appendChild(dynamicForm);

  // Form Validation
  const formElements = ['name', 'surname', 'email', 'dropdown', 'other', 'message'];
  formElements.forEach((elementId) => {
    const field = document.getElementById(elementId);
    if (field) {
      const errorElement = createErrorMessage(elementId);
      field.parentNode.appendChild(errorElement);
    }
  });

  // Event blur for name, surname, message and email
  document.getElementById('name').addEventListener('blur', function () {
    validateName(this.value);
  });

  document.getElementById('surname').addEventListener('blur', function () {
    validateSurname(this.value);
  });

  document.getElementById('message').addEventListener('blur', function () {
    validateMessage(this.value);
  });

  document.getElementById('email').addEventListener('blur', function () {
    validateEmail(this.value);
  });


  // Submit and validate form event 
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    validateForm();
  });

  validateForm();