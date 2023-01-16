import MuiBox, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const BoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      display: "flex",
      padding: "0 20px",
      alignItems: "center",
      flexDirection: "row",
      margin:theme.spacing(3),
      height: theme.height.barHeight,
      justifyContent: "space-between",
      boxShadow: theme.shadow.boxShadow,
      borderRadius: theme.borderRadius.radius1,
      backgroundColor: theme.palette.primary.light,
    } as any),
) as (props: BoxProps) => JSX.Element;
