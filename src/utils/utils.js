export const getTabColour = (status) => {
  switch (status) {
    case "pending":
      return "#4d4d4d";
    case "todo":
      return "#3366cc";
    case "completed":
      return "#33cc33";
    default:
      return "#3366cc";
  }
};
