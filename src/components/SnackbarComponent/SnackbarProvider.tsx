import { FC, ReactNode } from "react";
import { closeSnackbar, SnackbarProvider, enqueueSnackbar } from "notistack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

type SnackbarVariant = "success" | "error" | "info";

export const showSnackbar = (message: string, variant: SnackbarVariant) =>
  enqueueSnackbar(message, { variant });

export const NotistackProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <SnackbarProvider
      action={(snackbarId) => (
        <IconButton
          aria-label="close"
          size="small"
          onClick={() => closeSnackbar(snackbarId)}
        >
          <CloseIcon style={{ color: "white" }} fontSize="small" />
        </IconButton>
      )}
      anchorOrigin={{
        horizontal: "right",
        vertical: "bottom",
      }}
      autoHideDuration={5000}
      maxSnack={3}
    >
      {children}
    </SnackbarProvider>
  );
};
