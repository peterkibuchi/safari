import { createRef, useEffect, useState } from "react";
import {
  Alert,
  AlertTitle,
  Box,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import PlaceDetails from "../Place Details/PlaceDetails";

function List({
  places,
  isLoading,
  type,
  setType,
  rating,
  setRating,
  childClicked,
}) {
  const theme = useTheme();
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());

    setElRefs(refs);
  }, [places]);

  return (
    <Box
      sx={{
        padding: "25px",
      }}
    >
      <Typography variant="h5" mb={2}>
        Restaurants, Hotels & Attractions around you
      </Typography>

      {isLoading ? (
        <Box
          sx={{
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size="5rem" />
        </Box>
      ) : (
        <>
          <FormControl
            sx={{
              margin: theme.spacing(1),
              marginLeft: 0,
              minWidth: 120,
              marginBottom: "30px",
            }}
          >
            <InputLabel id="type">Type</InputLabel>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value)}
              labelId="type"
              id="type"
              label="Type"
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            sx={{
              margin: theme.spacing(1),
              minWidth: 120,
              marginBottom: "30px",
            }}
          >
            <InputLabel id="rating">Rating</InputLabel>
            <Select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              labelId="rating"
              id="rating"
              label="rating"
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>

          <Grid
            container
            spacing={3}
            sx={{
              height: "75vh",
              overflow: "auto",
            }}
          >
            {places ? (
              places?.map((place, index) => (
                <Grid item key={index} xs={12}>
                  <PlaceDetails
                    place={place}
                    selected={Number(childClicked) === index}
                    redProp={elRefs[index]}
                  />
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  Unable to retrieve data: <strong>API quota reached!</strong>
                </Alert>
              </Grid>
            )}
          </Grid>
        </>
      )}
    </Box>
  );
}

export default List;
