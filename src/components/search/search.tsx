import { Icon } from "@iconify/react";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getSearch } from "../../hooks/user/getUserInput";
import baseUrl from "../../utils/baseURL";
import Outlined from "../common/button/Outlined";
import { IUsers } from "../../store/types/store";

const InputSearch = () => {
  const [value, setValue] = useState("");
  const [users, setUsers] = useState<IUsers[]>([]);
  const { getUserSearch } = getSearch();

  const handleInput = (e: any) => {
    setValue(e.target.value);
    if (e.target.value === "") {
      setUsers([]);
      return;
    }
  };
  const handlegGetUser = async (value: string) => {
    try {
      const res = await getUserSearch(value);
      setUsers(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlegGetUser(value);
  }, [value]);

  return (
    <Box>
      <Box>
        <TextField
          value={value}
          onChange={handleInput}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 10,
            },
          }}
          size="small"
          variant="outlined"
          placeholder="Search your friends"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon icon="fluent-mdl2:profile-search" />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2, height: "100%", alignItems: "center", flexDirection: "column", gap: 2 }}>
        <Typography> {!value ? "Write and Search Something" : "Search Result"}</Typography>
        <Box sx={{ width: "100%" }}>
          {!users
            ? null
            : users.map((item, index) => {
                const img = `${baseUrl.baseUrlImg}${item.profile_pic}`;
                return (
                  <Box key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <img style={{ width: "3rem", height: "3rem", objectFit: "cover", borderRadius: "45px" }} src={img} alt="" />
                      <Box sx={{ display: "flex", flexDirection: "column", px: 2 }}>
                        <Typography sx={{ color: "white" }}>{item.fullname}</Typography>
                        <Typography sx={{ color: "white" }}>@{item.username}</Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Outlined>status</Outlined>
                    </Box>
                  </Box>
                );
              })}
        </Box>
      </Box>
    </Box>
  );
};

export default InputSearch;
