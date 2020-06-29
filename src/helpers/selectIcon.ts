const selectIcon = (state: String) => {
  if (state === "inserito") {
    return "fas fa-plus-circle";
  }

  if (state === "in elaborazione") {
    return "fab fa-whmcs";
  }

  if (state === "completato") {
    return "fas fa-upload";
  }
};
export default selectIcon;
