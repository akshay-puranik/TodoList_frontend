export const getTabColour = (status) => {
  switch (status) {
    case "ongoing":
      return "#ffad84";
    case "todo":
      return "#9dbbf2";
    case "completed":
      return "#98FB98";
    default:
      return "#98FB98";
  }
};
