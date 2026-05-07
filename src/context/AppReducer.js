const AppReducer = (state, action) => {
  switch (action.type) {
    /*
    |--------------------------------------------------------------------------
    | THEME
    |--------------------------------------------------------------------------
    */

    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };

    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };

    /*
    |--------------------------------------------------------------------------
    | LOADING
    |--------------------------------------------------------------------------
    */

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    /*
    |--------------------------------------------------------------------------
    | MOBILE MENU
    |--------------------------------------------------------------------------
    */

    case "TOGGLE_MENU":
      return {
        ...state,
        mobileMenu: !state.mobileMenu,
      };

    case "OPEN_MENU":
      return {
        ...state,
        mobileMenu: true,
      };

    case "CLOSE_MENU":
      return {
        ...state,
        mobileMenu: false,
      };

    /*
    |--------------------------------------------------------------------------
    | active word SECTION
    |--------------------------------------------------------------------------
    */

    case "SET_ACTIVE_WORD":
      return {
        ...state,
        activeWordIndex: action.payload,
      };
    /*
    |--------------------------------------------------------------------------
    | MODAL
    |--------------------------------------------------------------------------
    */

    case "OPEN_MODAL":
      return {
        ...state,
        modalOpen: true,
        modalData: action.payload || null,
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        modalOpen: false,
        modalData: null,
      };

    /*
    |--------------------------------------------------------------------------
    | NOTIFICATION / TOAST
    |--------------------------------------------------------------------------
    */

    case "SHOW_TOAST":
      return {
        ...state,
        toast: {
          show: true,
          message: action.payload.message,
          type: action.payload.type || "success",
        },
      };

    case "HIDE_TOAST":
      return {
        ...state,
        toast: {
          show: false,
          message: "",
          type: "success",
        },
      };

    /*
    |--------------------------------------------------------------------------
    | ACTIVE SECTION
    |--------------------------------------------------------------------------
    */

    case "SET_ACTIVE_SECTION":
      return {
        ...state,
        activeSection: action.payload,
      };

    case "UPDATE_CONTACT_FORM":
      return {
        ...state,
        contactForm: {
          ...state.contactForm,
          [action.payload.name]: action.payload.value,
        },
      };

    case "RESET_CONTACT_FORM":
      return {
        ...state,
        contactForm: {
          name: "",
          phone: "",
          businessType: "",
          projectType: "",
          message: "",
        },
      };

    case "SET_CONTACT_LOADING":
      return {
        ...state,
        contactLoading: action.payload,
      };

    case "SET_CONTACT_SUCCESS":
      return {
        ...state,
        contactSuccess: action.payload,
      };

    case "SET_CONTACT_ERROR":
      return {
        ...state,
        contactError: action.payload,
      };

    case "OPEN_DASHBOARD":
      return {
        ...state,
        dashboard: {
          ...state.dashboard,
          show: true,
        },
      };

    case "CLOSE_DASHBOARD":
      return {
        ...state,
        dashboard: {
          ...state.dashboard,
          show: false,
        },
      };

    case "SET_DASHBOARD_TAB":
      return {
        ...state,
        dashboard: {
          ...state.dashboard,
          activeTab: action.payload,
        },
      };

    case "SET_NEW_MEMBER_NAME":
      return {
        ...state,
        dashboard: {
          ...state.dashboard,
          newMemberName: action.payload,
        },
      };

    case "TOGGLE_ADD_MEMBER":
      return {
        ...state,
        dashboard: {
          ...state.dashboard,
          addingMember: !state.dashboard.addingMember,
        },
      };

    case "ADD_MEMBER":
      return {
        ...state,

        dashboard: {
          ...state.dashboard,

          members: [action.payload, ...state.dashboard.members],

          newMemberName: "",

          addingMember: false,

          addedMessage: true,
        },
      };

    case "HIDE_MEMBER_MESSAGE":
      return {
        ...state,

        dashboard: {
          ...state.dashboard,
          addedMessage: false,
        },
      };

    /*
    |--------------------------------------------------------------------------
    | DEFAULT
    |--------------------------------------------------------------------------
    */

    default:
      return state;
  }
};

export default AppReducer;
