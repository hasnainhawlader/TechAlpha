export const currencyFormator = (price) => {
  if (!price) return;
  return price.toLocaleString("en-used", {
    style: "currency",
    currency: "usd",
  });
};
