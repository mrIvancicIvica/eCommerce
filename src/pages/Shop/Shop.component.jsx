import React, { useState } from "react";
import CollectionPreview from '../../components/CollectionPreview/Collection-Preview';
import SHOP_DATA from "./shop.data";


const Shop = () => {
  const [collections] = useState(SHOP_DATA);
  console.log(collections);
  return (
    <div>
      {collections.map(({id, ...collectProps})=> (
        <CollectionPreview key ={id} {...collectProps} />
      ))}
    </div>
  );
};

export default Shop;
