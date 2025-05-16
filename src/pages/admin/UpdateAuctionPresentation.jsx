import React from "react";
import AuctionSvg from '../../assets/auctionsvg.svg'
import Layout from '../../layout/Layout'

function UpdateAuctionPresentation({ handleUserInput, handleFormSubmit, submitting }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6">
      <div className="hidden md:block">
      <img src={AuctionSvg} alt="Auction Image" className="h-[400px] w-[400px]"/>
      </div>
      <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
        <h2 className="text-2xl text-center font-semibold mb-4">
          Update Auction
        </h2>
        <form className="space-y-4" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Auction Title"
            onChange={handleUserInput}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            id="description"
            onChange={handleUserInput}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="number"
            name="startingBid"
            id="startingBid"
            placeholder="Starting Bid"
            onChange={handleUserInput}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="number"
            name="bidIncrement"
            id="bidIncrement"
            placeholder="Bid Increment"
            onChange={handleUserInput}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="datetime-local"
            name="endTime"
            id="endTime"
            onChange={handleUserInput}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="number"
            name="maxSlots"
            id="maxSlots"
            placeholder="Max Slots"
            onChange={handleUserInput}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="file"
            name="auctionImage"
            id="auctionImage"
            accept="image/*"
            onChange={handleUserInput}
            required
            className="w-full cursor-pointer"
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer transition duration-300 ease-in-out"
          >
            {submitting ? "Updating..." : "Update Auction"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateAuctionPresentation;
