function shippingTimeCalc(package) {
  const standardPattern = /standard/;
  const expressPattern = /express/;
  const overNightPattern = /overnight/;

  switch (true) {
    case standardPattern.test(package):
      console.log("3-5 days will take for delivery");
      break;
    case expressPattern.test(package):
      console.log("Delivery will be done by 1-2 days");
      break;
    case overNightPattern.test(package):
      console.log("Delivery will be done by next day");
      break;
    default:
      console.log("Select a valid package");
  }
}

shippingTimeCalc("standard");
