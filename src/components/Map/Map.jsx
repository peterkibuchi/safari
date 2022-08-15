import GoogleMapReact from "google-map-react";
import { Box, Paper, Rating, Typography, useMediaQuery } from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material";
import mapStyles from "./mapStyles";

function Map({
  coordinates,
  setCoordinates,
  setBounds,
  places,
  setChildClicked,
  weatherData,
}) {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box
      sx={{
        height: "85vh",
        width: "100%",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          // styles: mapStyles,
        }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, index) => (
          <Box
            key={index}
            lat={Number(place.lattitude)}
            lng={Number(place.longitude)}
            sx={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              "&:hover": { zIndex: 2 },
            }}
          >
            {isMobile ? (
              <LocationOnOutlined color="primary" fontSize="large" />
            ) : (
              <Paper
                elevation={3}
                sx={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "100px",
                }}
              >
                <Typography variant="subtitle2" gutterBottom>
                  {place.name}
                </Typography>
                <img
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place.name}
                  style={{
                    cursor: "pointer",
                  }}
                />
                <Rating
                  mt={1}
                  size="small"
                  value={Number(place.rating)}
                  readOnly
                />
              </Paper>
            )}
          </Box>
        ))}

        {weatherData?.data?.map((item, index) => (
          <Box key={index} lat={item.lat} lng={item.lon}>
            <img
              src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
              style={{ maxWidth: "50px" }}
            />
          </Box>
        ))}
      </GoogleMapReact>
    </Box>
  );
}

export default Map;
