import ReactApexChart from "react-apexcharts";
import { PieChartProps } from "interfaces/home";
import { Box, Stack, Typography } from "@pankod/refine-mui";
const PieChart = ({ title, colors, series, value }: PieChartProps) => {
  return (
    <Box
      id="chart"
      minHeight="110px"
      flex={1}
      display="flex"
      bgcolor="#fcfcfc"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      pl={3.5}
      py={2}
      gap={2}
      borderRadius="15px"
      width="fit-content"
    >
      <Stack direction="column">
        <Typography fontSize="16px" color="#808191">
          {title}
        </Typography>
        <Typography fontSize="24px" color="#11142d" mt={1}>
          {value}
        </Typography>
      </Stack>
      <ReactApexChart
        options={{
          chart: { type: "donut" },
          colors,
          legend: { show: false },
          dataLabels: { enabled: false },
        }}
        series={series}
        type="donut"
        width="120px"
      />
    </Box>
  );
};

export default PieChart;
