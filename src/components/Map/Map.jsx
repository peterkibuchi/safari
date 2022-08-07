import { Box, useMediaQuery } from "@mui/material";
import GoogleMapReact from "google-map-react";

function Map() {
  const isMobile = useMediaQuery("(min-width: 600px)");
  const coordinates = { lat: 0, lng: 0 };

  return (
    <Box
      sx={{
        height: "85vh",
        width: "100%",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCpvq-eSF6z6GHABfkE0ryGS6XgRESqGQo" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </Box>
  );
}

export default Map;
