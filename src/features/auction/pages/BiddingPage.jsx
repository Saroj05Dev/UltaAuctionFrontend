import React from "react";
import { useBiddingLogic } from "../hooks/useBiddingLogic";
import BiddingPagePresentation from "../components/BiddingPagePresentation";

function BiddingPage() {
  const {
    auction,
    bidAmount,
    setBidAmount,
    handlePayment,
    isAuctionFull,
    hasReachedMaxBids,
    refreshKey,
  } = useBiddingLogic();

  return (
    <BiddingPagePresentation
      key={auction?._id || refreshKey}
      auction={auction}
      bidAmount={bidAmount}
      setBidAmount={setBidAmount}
      handlePayment={handlePayment}
      isAuctionFull={isAuctionFull}
      hasReachedMaxBids={hasReachedMaxBids}
    />
  );
}

export default BiddingPage;
