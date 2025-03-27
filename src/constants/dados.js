export const banners = [
  {
    id: 1,
    descricao: "Pizzas",
    icone: require("../assets/banner1.png"),
  },
  {
    id: 2,
    descricao: "Comida Saudável",
    icone: require("../assets/banner2.png"),
  },
  {
    id: 3,
    descricao: "Comida Saudável",
    icone: require("../assets/banner3.png"),
  },
];

export const menu = [
  {
    id: 1,
    descricao: "Services",
    icone: require("../assets/button_services.png"),
  },
  {
    id: 2,
    descricao: "Appointments",
    icone: require("../assets/button_appointments.png"),
  },
  {
    id: 3,
    descricao: "Service Tracker",
    icone: require("../assets/button_tracker.png"),
  },
  {
    id: 4,
    descricao: "History",
    icone: require("../assets/button_history.png"),
  },
];

export const user = [
  {
    id: 1,
    user: "Diego",
  },
];

export const services = [
  {
    id_service: 1,
    service: "Diagnostics",
    description: "Identifying and diagnosing car issues",
    icone: require("../assets/diagnostics.png"),
  },
  {
    id_service: 2,
    service: "Oil Changes",
    description: "Replacing engine oil",
    icone: require("../assets/oil_change.png"),
  },
  {
    id_service: 3,
    service: "Brake Services",
    description: "Brake inspections",
    icone: require("../assets/brake.png"),
  },
  {
    id_service: 4,
    service: "Tire Services",
    description: "Tire rotations and more",
    icone: require("../assets/tire.png"),
  },
  {
    id_service: 5,
    service: "Battery Services",
    description: "Battery testing and more",
    icone: require("../assets/battery.png"),
  },
  {
    id_service: 6,
    service: "Transmission Services",
    description: "Transmission repairs",
    icone: require("../assets/transmission.png"),
  },
  {
    id_service: 7,
    service: "Suspension Repairs",
    description: "Fixing or replacing suspension",
    icone: require("../assets/suspension.png"),
  },
  {
    id_service: 8,
    service: "Cooling System Services",
    description: "Radiator repairs and more",
    icone: require("../assets/cooling.png"),
  },
  {
    id_service: 9,
    service: "Exhaust System Repairs",
    description: "Muffler repairs and replacements",
    icone: require("../assets/exhaust.png"),
  },
  {
    id_service: 10,
    service: "Electrical System Repairs",
    description: "Fixing issues with wiring",
    icone: require("../assets/electrical.png"),
  },
  {
    id_service: 11,
    service: "Air Conditioning Services",
    description: "AC system diagnostics",
    icone: require("../assets/ac_system.png"),
  },
  {
    id_service: 12,
    service: "Tune-Ups",
    description: "Engine check-ups",
    icone: require("../assets/tuneup.png"),
  },
  {
    id_service: 13,
    service: "General Maintenance",
    description: "Regular checks",
    icone: require("../assets/general.png"),
  },
];

export const appointments = [
  {
    id_appointment: 1,
    service: "Diagnostics",
    mechanic: "Luís Cortez",
    specialty: "Mechanic",
    booking_date: "2024-10-25",
    booking_hour: "08:30",
  },
  {
    id_appointment: 2,
    service: "Oil Changes",
    mechanic: "Zabyd Ferreira",
    specialty: "Mechanic",
    booking_date: "2024-10-28",
    booking_hour: "15:40",
  },
];

export const mechanic = [
  {
    id_mechanic: 1,
    name: "Luís Cortez",
    specialty: "Mechanic",
    icon: "M",
  },
  {
    id_mechanic: 2,
    name: "Zabyd Ferreira",
    specialty: "Mechanic",
    icon: "M",
  },
];

export const tracker = [
  {
    id_service_tracker: 1,
    id_user: 1,
    id_service: 2,
    dt_start: "2024-08-02 10:54:00",
    status: "C",
    service: "Oil Changes",
    icone: require("../assets/oil_change.png"),
  },
  {
    id_service_tracker: 1,
    id_user: 1,
    id_service: 1,
    dt_start: "2024-08-01 10:54:00",
    status: "P",
    service: "Diagnostics",
    icone: require("../assets/diagnostics.png"),
  },
];

export const history = [
  {
    id_history: 2,
    id_service_tracker: 1,
    id_user: 1,
    comments: "Oil and oil filter changed.",
    dt_start: "2024-08-02 10:54:00",
    dt_finish: "2024-08-02 10:54:00",
    service: "Oil Changes",
    icone: require("../assets/oil_change.png"),
  },
];
