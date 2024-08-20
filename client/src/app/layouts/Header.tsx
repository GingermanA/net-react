import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
} from "@mui/material";

interface Props {
  darkMode: boolean;
  changeMode: () => void;
}

function Header({ darkMode, changeMode }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6">RE-STORE</Typography>
        <Switch checked={darkMode} onChange={changeMode} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
