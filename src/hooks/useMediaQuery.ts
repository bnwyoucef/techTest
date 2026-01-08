import { useMediaQuery as useMuiMediaQuery } from "@mui/material";
import type { Breakpoint } from "@mui/material/styles";
import { useTheme } from "./useTheme";

export const useMediaQuery = (
  breakpoint: Breakpoint,
  direction: "up" | "down" = "up"
) => {
  const theme = useTheme();
  const query =
    direction === "up"
      ? theme.breakpoints.up(breakpoint)
      : theme.breakpoints.down(breakpoint);

  return useMuiMediaQuery(query);
};

export const useIsMobile = () => {
  return useMediaQuery("md", "down");
};

export const useIsTablet = () => {
  const theme = useTheme();
  return useMuiMediaQuery(theme.breakpoints.between("sm", "lg"));
};

export const useIsDesktop = () => {
  return useMediaQuery("lg", "up");
};

export default useMediaQuery;
