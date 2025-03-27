import axios from "axios";
import { showSnackbar } from "~/components/SnackbarComponent/SnackbarProvider";

const errorVariant = "error";

export const setupAxiosInterceptors = () => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        const { data, status } = error.response;
        const message = data?.message || null;
        switch (status) {
          case 401:
            showSnackbar(message || "Unauthorized", errorVariant);
            localStorage.removeItem("authorization_token");
            break;
          case 403:
            showSnackbar(message || "Forbidden", errorVariant);
            break;
          case 500:
            showSnackbar(message || "Internal Server Error", errorVariant);
            break;
        }
      }
      return Promise.reject(error);
    }
  );
};
