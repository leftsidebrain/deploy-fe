import { Button } from "@mui/material";

export default function Outlined(props: any | React.ReactNode) {
  const { children, onClick } = props;
  return (
    <Button onClick={onClick} size="small" variant="outlined" sx={{ borderRadius: "50px", color: "white", textTransform: "capitalize", backgroundColor: "transparent" }}>
      {children}
    </Button>
  );
}
