import { Box, Typography } from "@mui/material";

interface TextData {
  description: string;
  educationalHub: string;
  technologyIndustry: string; 
  metroSystem: string;
}

export const TextDescription = ({description, educationalHub, technologyIndustry, metroSystem}: TextData) => {
  return (
    <Box sx={{ width: "75%", mt: "25px" }}>
          <Typography variant="body1" gutterBottom>
            {description}
          </Typography>
          <Typography variant="h2" gutterBottom sx={{ fontSize: "28px" }}>
            Educational Hub:
          </Typography>
          <Typography variant="body1" gutterBottom>
            {educationalHub}
          </Typography>
          <Typography variant="h2" gutterBottom sx={{ fontSize: "28px" }}>
            Technology and Industry:
          </Typography>
          <Typography variant="body1" gutterBottom>
            {technologyIndustry}
          </Typography>
          <Typography variant="h2" gutterBottom sx={{ fontSize: "28px" }}>
            Metro System:
          </Typography>
          <Typography variant="body1" gutterBottom>
            {metroSystem}
          </Typography>
    </Box>
  );
};