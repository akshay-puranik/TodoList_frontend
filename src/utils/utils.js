export const getTabColour = (status) => {
  switch (status) {
    case "ongoing":
      return "#ADD8E6";
    case "todo":
      return "#FFD3D3";
    case "completed":
      return "#98FB98";
    default:
      return "#98FB98";
  }
};
