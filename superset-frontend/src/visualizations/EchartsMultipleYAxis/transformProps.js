export default function transformProps(chartProps) {
  const { height, width, formData, queryData } = chartProps;
  const {
    colorScheme,
  } = formData;

  return {
    data: queryData.data,
    width,
    height,
    colorScheme,
  };
}