import {
  createContext,
  useContext,
  useReducer,
  useMemo,
} from "react";

import AppReducer from "./AppReducer";
import initialState from "./initialState"

const AppContext = createContext();

export const AppProvider = ({
  children,
}) => {
  const [state, dispatch] = useReducer(
    AppReducer,
    initialState
  );

  /*
  |--------------------------------------------------------------------------
  | THEME
  |--------------------------------------------------------------------------
  */

  const toggleTheme = () => {
    dispatch({
      type: "TOGGLE_THEME",
    });
  };

  const setTheme = (theme) => {
    dispatch({
      type: "SET_THEME",
      payload: theme,
    });
  };

  /*
  |--------------------------------------------------------------------------
  | LOADING
  |--------------------------------------------------------------------------
  */

  const setLoading = (value) => {
    dispatch({
      type: "SET_LOADING",
      payload: value,
    });
  };

  /*
  |--------------------------------------------------------------------------
  | MOBILE MENU
  |--------------------------------------------------------------------------
  */

  const toggleMenu = () => {
    dispatch({
      type: "TOGGLE_MENU",
    });
  };

  const openMenu = () => {
    dispatch({
      type: "OPEN_MENU",
    });
  };

  const closeMenu = () => {
    dispatch({
      type: "CLOSE_MENU",
    });
  };

  /*
  |--------------------------------------------------------------------------
  | HERO ACTIVE WORD
  |--------------------------------------------------------------------------
  */

  const setActiveWord = (index) => {
    dispatch({
      type: "SET_ACTIVE_WORD",
      payload: index,
    });
  };

  /*
  |--------------------------------------------------------------------------
  | MODAL
  |--------------------------------------------------------------------------
  */

  const openModal = (
    data = null
  ) => {
    dispatch({
      type: "OPEN_MODAL",
      payload: data,
    });
  };

  const closeModal = () => {
    dispatch({
      type: "CLOSE_MODAL",
    });
  };

  /*
  |--------------------------------------------------------------------------
  | TOAST
  |--------------------------------------------------------------------------
  */

  const showToast = (
    message,
    type = "success"
  ) => {
    dispatch({
      type: "SHOW_TOAST",
      payload: {
        message,
        type,
      },
    });

    setTimeout(() => {
      dispatch({
        type: "HIDE_TOAST",
      });
    }, 3000);
  };

  /*
  |--------------------------------------------------------------------------
  | ACTIVE SECTION
  |--------------------------------------------------------------------------
  */

  const setActiveSection = (
    section
  ) => {
    dispatch({
      type: "SET_ACTIVE_SECTION",
      payload: section,
    });
  };

  /*
  |--------------------------------------------------------------------------
  | CONTACT FORM
  |--------------------------------------------------------------------------
  */

  const updateContactForm = (
    name,
    value
  ) => {
    dispatch({
      type:
        "UPDATE_CONTACT_FORM",
      payload: {
        name,
        value,
      },
    });
  };

  const resetContactForm = () => {
    dispatch({
      type:
        "RESET_CONTACT_FORM",
    });
  };

  const setContactLoading = (
    value
  ) => {
    dispatch({
      type:
        "SET_CONTACT_LOADING",
      payload: value,
    });
  };

  const setContactSuccess = (
    value
  ) => {
    dispatch({
      type:
        "SET_CONTACT_SUCCESS",
      payload: value,
    });
  };

  const setContactError = (
    value
  ) => {
    dispatch({
      type:
        "SET_CONTACT_ERROR",
      payload: value,
    });
  };

  /*
  |--------------------------------------------------------------------------
  | DASHBOARD
  |--------------------------------------------------------------------------
  */

  const openDashboard = () => {
    dispatch({
      type:
        "OPEN_DASHBOARD",
    });
  };

  const closeDashboard = () => {
    dispatch({
      type:
        "CLOSE_DASHBOARD",
    });
  };

  const setDashboardTab = (
    tab
  ) => {
    dispatch({
      type:
        "SET_DASHBOARD_TAB",
      payload: tab,
    });
  };

  const setNewMemberName = (
    value
  ) => {
    dispatch({
      type:
        "SET_NEW_MEMBER_NAME",
      payload: value,
    });
  };

  const toggleAddMember = () => {
    dispatch({
      type:
        "TOGGLE_ADD_MEMBER",
    });
  };

  const addMember = () => {
    if (
      !state.dashboard
        .newMemberName.trim()
    )
      return;

    const newMember = {
      id: Date.now(),

      name:
        state.dashboard
          .newMemberName,

      plan: "Monthly ₹800",

      joined: "Today",

      status: "Active",

      due: false,
    };

    dispatch({
      type: "ADD_MEMBER",
      payload: newMember,
    });

    setTimeout(() => {
      dispatch({
        type:
          "HIDE_MEMBER_MESSAGE",
      });
    }, 2500);
  };

  /*
  |--------------------------------------------------------------------------
  | PROVIDER VALUE
  |--------------------------------------------------------------------------
  */

  const value = useMemo(
    () => ({
      ...state,

      dispatch,

      /*
      |--------------------------------------------------------------------------
      | THEME
      |--------------------------------------------------------------------------
      */

      toggleTheme,
      setTheme,

      /*
      |--------------------------------------------------------------------------
      | LOADING
      |--------------------------------------------------------------------------
      */

      setLoading,

      /*
      |--------------------------------------------------------------------------
      | MOBILE MENU
      |--------------------------------------------------------------------------
      */

      toggleMenu,
      openMenu,
      closeMenu,

      /*
      |--------------------------------------------------------------------------
      | HERO
      |--------------------------------------------------------------------------
      */

      setActiveWord,

      /*
      |--------------------------------------------------------------------------
      | MODAL
      |--------------------------------------------------------------------------
      */

      openModal,
      closeModal,

      /*
      |--------------------------------------------------------------------------
      | TOAST
      |--------------------------------------------------------------------------
      */

      showToast,

      /*
      |--------------------------------------------------------------------------
      | ACTIVE SECTION
      |--------------------------------------------------------------------------
      */

      setActiveSection,

      /*
      |--------------------------------------------------------------------------
      | CONTACT
      |--------------------------------------------------------------------------
      */

      updateContactForm,
      resetContactForm,

      setContactLoading,
      setContactSuccess,
      setContactError,

      /*
      |--------------------------------------------------------------------------
      | DASHBOARD
      |--------------------------------------------------------------------------
      */

      openDashboard,
      closeDashboard,

      setDashboardTab,

      setNewMemberName,

      toggleAddMember,

      addMember,
    }),
    [state]
  );

  return (
    <AppContext.Provider
      value={value}
    >
      {children}
    </AppContext.Provider>
  );
};

/*
|--------------------------------------------------------------------------
| CUSTOM HOOK
|--------------------------------------------------------------------------
*/

export const useAppContext = () => {
  const context =
    useContext(AppContext);

  if (!context) {
    throw new Error(
      "useAppContext must be used inside AppProvider"
    );
  }

  return context;
};