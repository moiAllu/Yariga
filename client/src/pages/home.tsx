import { useList } from "@pankod/refine-core";
import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  TopAgent,
  PropertyCard,
} from "../components";
import { Typography, Box, Stack } from "@pankod/refine-mui";
const home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        {" "}
        <PieChart
          title="Property for Sale"
          value={645}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />{" "}
        <PieChart
          title="Property for rent"
          value={645}
          series={[60, 45]}
          colors={["#475be8", "#e4e8ef"]}
        />{" "}
        <PieChart
          title="Property for customers"
          value={5645}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />{" "}
        <PieChart
          title="Property for cities"
          value={645}
          series={[85, 35]}
          colors={["#475be8", "#e4e8ef"]}
        />
      </Box>
      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: "column", lg: "row" }}
        gap={3}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  );
};

export default home;
