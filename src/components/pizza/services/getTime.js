export const getTime = (time) => {
  let day = new Date();
  let now = day.toLocaleTimeString("es-CO", {
    timeZone: "America/Bogota",
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  });

  if (time[0] <= now && time[1] >= now) {
    return { open: "Abierto", color: "bg-blue-500" };
  } else {
    return { open: "Cerrado", color: "bg-red-500" };
  }
};
