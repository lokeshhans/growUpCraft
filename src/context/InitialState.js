const initialState = {
  theme: "light",

  loading: false,

  mobileMenu: false,

  activeWordIndex: 0,

  activeSection: "home",

  modalOpen: false,

  modalData: null,

  toast: {
    show: false,
    message: "",
    type: "success",
  },

  contactForm: {
    name: "",
    phone: "",
    businessType: "",
    projectType: "",
    message: "",
  },

  contactLoading: false,

  contactSuccess: false,

  contactError: "",

  dashboard: {
    show: false,

    activeTab: "overview",

    addingMember: false,

    addedMessage: false,

    newMemberName: "",

    members: [
      {
        id: 1,
        name: "Ravi Kumar",
        plan: "Monthly ₹800",
        joined: "1 Apr",
        status: "Active",
        due: false,
      },

      {
        id: 2,
        name: "Sonu Sharma",
        plan: "Quarterly ₹2100",
        joined: "15 Mar",
        status: "Due",
        due: true,
      },
    ],
  },
};

export default initialState;
