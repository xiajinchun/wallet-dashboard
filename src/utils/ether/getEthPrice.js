import { ethers } from "ethers";

const getEthPrice = async () => {
  return new ethers.EtherscanProvider("homestead", "AT3NHC5B9UXHDWRJED7YZRGX3FAA5XB3F3").getEtherPrice();
};

export default getEthPrice;
