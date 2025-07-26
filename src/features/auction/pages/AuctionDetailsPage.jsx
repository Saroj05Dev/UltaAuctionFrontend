import { useParams } from 'react-router-dom';
import useAuctionDetails from '../hooks/useAuctionDetails';
import AuctionPresentation from '../components/AuctionPresentation';

function AuctionDetailsPage() {
  const { id } = useParams();
  const { auction, loading, error } = useAuctionDetails(id);

  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p className='text-center text-red-500'>{error}</p>;
  if (!auction) return <p className='text-center text-red-500'>Auction not found</p>;

  return <AuctionPresentation auction={auction} />;
}

export default AuctionDetailsPage;
