import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Typography,
} from "@mui/material";
import { LocationOn, Phone } from "@mui/icons-material";

function PlaceDetails({ place, selected, refProp }) {
  if (selected)
    refProp?.current?.scrollIntoView({ behaviour: "smooth", block: "start" });

  return (
    <Card elevation={6}>
      <CardMedia
        sx={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {place.name}
        </Typography>

        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography variant="subtitle2" gutterBottom>
            out of {place.num_reviews} reviews
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle2">Price</Typography>
          <Typography variant="subtitle2" gutterBottom>
            {place.price_level}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle2">Ranking</Typography>
          <Typography variant="subtitle2" gutterBottom>
            {place.ranking}
          </Typography>
        </Box>

        {place?.awards?.map((award) => (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={award.images.small} alt={award.display_name} my={1} />
            <Typography variant="p" color="text-secondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}

        <Box my={1}>
          {place?.cuisine?.map(({ name }) => (
            <Chip
              key={name}
              size="small"
              label={name}
              sx={{
                margin: "5px 5px 5px 0",
              }}
            />
          ))}
        </Box>

        {place?.address && (
          <Typography
            variant="subtitle2"
            color="textSecondary"
            gutterBottom
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <LocationOn /> {place.address}
          </Typography>
        )}

        {place?.phone && (
          <Typography
            variant="subtitle2"
            color="textSecondary"
            gutterBottom
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Phone /> {place.phone}
          </Typography>
        )}

        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url, "_blank")}
          >
            Trip Advisor
          </Button>

          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default PlaceDetails;
