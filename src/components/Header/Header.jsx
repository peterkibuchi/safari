import { Autocomplete } from "@react-google-maps/api";
import {
  alpha,
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { SearchRounded } from "@mui/icons-material";

function Header() {
  const theme = useTheme();

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            display: "none",
            [theme.breakpoints.up("sm")]: {
              display: "block",
            },
          }}
        >
          Safari
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="p"
            sx={{
              display: "none",
              [theme.breakpoints.up("sm")]: {
                display: "block",
              },
            }}
          >
            Explore new places
          </Typography>
          {/* <Autocomplete> */}
          <Box
            sx={{
              position: "relative",
              borderRadius: theme.shape.borderRadius,
              backgroundColor: alpha(theme.palette.common.white, 0.15),
              "&:hover": {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
              },
              marginRight: theme.spacing(2),
              marginLeft: 0,
              width: "100%",
              [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(3),
                width: "auto",
              },
            }}
          >
            <Box
              sx={{
                padding: theme.spacing(0, 2),
                height: "100%",
                position: "absolute",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SearchRounded />
            </Box>
            <InputBase
              placeholder="Search..."
              sx={{
                color: "inherit",
                padding: theme.spacing(0, 1, 0, 0),
                paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                transition: theme.transitions.create("width"),
                width: "100%",
                [theme.breakpoints.up("md")]: { width: "20ch" },
              }}
            />
          </Box>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
