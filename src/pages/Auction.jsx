import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuctions } from '../redux/slices/AuctionSlice';
import AuctionPresentation from './AuctionPresentation';

function Auction() {
    const dispatch = useDispatch();
    const {auctions, loading, error} = useSelector((state) => state.auction)

    useEffect(() => {
        dispatch(fetchAuctions())
    }, [dispatch])
  return (
    <AuctionPresentation auction={auctions} loading={loading} error={error} />
  )
}

export default Auction
