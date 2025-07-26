function AuctionPresentation({ auction }) {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-bold">{auction.title}</h2>
          <p>{auction.description}</p>
          <p className="text-gray-600">Starting Bid: ₹{auction.startingBid}</p>
        </div>
      </div>
    </div>
  );
}

export default AuctionPresentation;