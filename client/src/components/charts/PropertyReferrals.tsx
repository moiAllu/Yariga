import { Box, Stack, Typography } from "@pankod/refine-mui";
import { propertyReferralsInfo } from "../../constants";

interface ProgressBarProps {
  title: string;
  percentage: number;
  color: string;
}
const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
  <Box width="100%">
    <Stack direction="row" alignContent="center" justifyContent="space-between">
      <Typography fontSize={16} fontWeight={500} color="#11142d">
        {title}
      </Typography>
      <Typography fontSize={16} fontWeight={500} color="#11142d">
        {percentage}%
      </Typography>
    </Stack>
    <Box
      mt={2}
      width="100%"
      borderRadius={1}
      height="8px"
      bgcolor="#e4e8ef"
      position="relative"
    >
      <Box
        width={`${percentage}%`}
        bgcolor={color}
        borderRadius={1}
        height="100%"
      />
    </Box>
  </Box>
);
const PropertyReferrals = () => {
  return (
    <Box
      p={4}
      bgcolor="#fcfcfc"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
      minWidth={490}
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Property Referrals
      </Typography>
      <Stack my="20px" gap={4} direction="column">
        {/* {propertyReferralsInfo} */}
        {propertyReferralsInfo.map((bar) => (
          <ProgressBar key={bar.title} {...bar} />
        ))}
      </Stack>
    </Box>
  );
};

export default PropertyReferrals;
