import { useTheme as useMuiTheme } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

export const useTheme = (): Theme => {
  return useMuiTheme();
};

export default useTheme;
