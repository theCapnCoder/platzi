import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import logo from "../../assets/img/logo.webp";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ py: 2, px: 4, backgroundColor: "grey", borderRadius: 4 }}
    >
      <Box flexGrow={1} sx={{ maxWidth: 100 }}>
        <Link to={ROUTES.HOME}>
          <Box
            component={"img"}
            src={logo}
            sx={{ width: 50, height: 50, borderRadius: 2 }}
          />
        </Link>
      </Box>

      <Stack direction={"row"} alignItems={"center"}>
        <Typography>
          Developed by:&nbsp;
          <Box component={"span"} sx={{ color: "purple", fontSize: 16 }}>
            The Capn
          </Box>
        </Typography>
      </Stack>

      <Stack direction={"row"} spacing={1}>
        <Instagram />
        <Facebook />
        <YouTube />
      </Stack>
    </Stack>
  );
};

export default Footer;
