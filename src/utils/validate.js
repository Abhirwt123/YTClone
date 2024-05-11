export const ValidateForm = (name, email, password) => {
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+(@gmail.com)$/.test(email);
    const isNameValid = /^[A-Za-z][A-Za-z]{3,29}$/.test(name);
    const isPasswordvalid =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        password
      );
    if (!isNameValid) return "Name shouldn't blank or less then 3 char...";
    if (!isEmailValid) return "Email is not Valid";
    if (!isPasswordvalid) return "Password isn't valid";
  
    return null;
  };
  