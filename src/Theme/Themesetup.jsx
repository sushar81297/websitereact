export const Tokens = (mode) => {
  return {
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#1976d2",
              light: "#0081ff",
            },
            secondary: {
              main: "#f50057",
            },
            error: {
              main: "#f10e04",
            },
            success: {
              main: "#4caf4f",
            },
            info: {
              main: "#3ac373",
            },
            unpaid: {
              main: "#d63384",
            },
            pending: {
              main: "#fd7e14",
            },
            paid: {
              main: "#29cc97",
            },
            overdue: {
              main: "#eb5757",
            },
            total: {
              main: "#357bf2",
            },
            delete: {
              main: "#6c757d",
            },
            background: {
              default: "#fff",
              paper: "#efeeee",
            },
            text: {
              primary: "#141b2d",
              secondary: "rgba(0, 0, 0, 0.6)",
              disabled: "rgba(0, 0, 0, 0.38)",
              label: "#d359ff",
            },
            divider: "rgba(121,118,118,0.12)",
          }
        : {
            primary: {
              main: "#1976d2",
              light: "#0081ff",
            },
            secondary: {
              main: "#f50057",
            },
            error: {
              main: "#f10e04",
            },
            success: {
              main: "#4caf4f",
            },
            info: {
              main: "#3ac373",
            },
            divider: "rgba(121,118,118,0.12)",
            background: {
              default: "#141b2d",
              paper: "#212636",
            },
            text: {
              primary: "#fff",
              secondary: "rgba(255, 255, 255, 0.7)",
              disabled: "rgba(255, 255, 255, 0.5)",
              label: "#d359ff",
            },
          }),
    },
    overrides: {
      MuiAppBar: {
        colorInherit: {
          backgroundColor: "#689f38",
          color: "#fff",
        },
      },
    },
  };
};
