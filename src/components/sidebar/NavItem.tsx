import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import useStore from "../../store/hooks";

const NAV_ITEMS = (username: string) => {
  return [
    {
      name: "Home",
      path: "/",
      icon: {
        active: "solar:home-angle-bold",
        nonactive: "solar:home-angle-linear",
      },
    },
    {
      name: "Search",
      path: "/search",
      icon: {
        active: "mdi:user-search",
        nonactive: "mdi:user-search-outline",
      },
    },
    {
      name: "Follows",
      path: "/follow",
      icon: {
        active: "ion:heart",
        nonactive: "ion:heart-outline",
      },
    },
    {
      name: "Profile",
      path: "/users/" + username,
      icon: {
        active: "carbon:user-avatar-filled",
        nonactive: "carbon:user-avatar",
      },
    },
  ];
};

export default function NavItem() {
  const { user } = useStore();

  return NAV_ITEMS(user.username).map((item, index) => {
    return (
      <NavLink key={index} to={item.path} style={{ textDecoration: "none" }}>
        {({ isActive }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1,
              gap: 1,
            }}
          >
            <Icon icon={isActive ? item.icon.active : item.icon.nonactive} color={isActive ? "rgba(4, 200, 30, 1)" : "white"} fontSize={"30px"} />
            <Typography color={isActive ? "rgba(4, 200, 30, 1)" : "white"} sx={{ fontSize: "1.2rem" }}>
              {item.name}
            </Typography>
          </Box>
        )}
      </NavLink>
    );
  });
}
