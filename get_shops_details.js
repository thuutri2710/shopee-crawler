const fs = require("fs");

const crawlShopDetails = require("./crawler/shop_details");

const shops_username = ["tphuong.1507"];

const shopDetailRunner = async () => {
  const shops = [];
  for (const user_name of shops_username) {
    const shopDetails = await crawlShopDetails(user_name);
    shops.push(shopDetails);
  }

  const fileName = "./input/shops.json";

  fs.writeFile(fileName, JSON.stringify(shops, null, 2), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.info("JSON saved to: ", fileName);
    }
  });
};

shopDetailRunner();
