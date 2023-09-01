"use client";
import { useState, useEffect, useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

import axios from "axios";

import { NFTContext } from "@context/NFTContext";
import { Loader, Button, Input } from "@components";

function ResellNFT() {
  const { createSale, isLoadingNFT } = useContext(NFTContext);
  const searchParams = useSearchParams();
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const tokenId = searchParams.get("tokenId");
  const tokenURI = searchParams.get("tokenURI");

  // useEffect(() => {
  //   if (tokenURI) fetchNFT();

  //   // console.log(tokenId, tokenURI);
  // }, [tokenURI]);

  if (isLoadingNFT)
    return (
      <div className="flexStart min-h-screen">
        <Loader />;
      </div>
    );

  const resell = async () => {
    await createSale(tokenURI, price, true, tokenId);

    router.push("/");
  };

  // const fetchNFT = async () => {
  //   const response = await axios.get(tokenURI);

  //   // setPrice(data.price);
  //   // setImage(data.image);
  //   console.log(response);
  // };

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-3/5 md:w-full">
        <h1 className="font-poppins dark:text-white text-nft-black font-semibold text-2xl">
          Resell NFT
        </h1>
        <Input
          inputType="number"
          title="Price"
          placeholder="NFT Price"
          handleClick={(e) => setPrice(e.target.value)}
        />

        {tokenURI && (
          <Image
            src={tokenURI}
            className="rounded mt-4"
            width={350}
            height={350}
            alt="NFT"
          />
        )}
        <div className="mt-7 w-full flex justify-end">
          <Button
            btnName="List NFT"
            btnType="primary"
            classStyles="rounded-xl"
            handleClick={resell}
          />
        </div>
      </div>
    </div>
  );
}

export default ResellNFT;
