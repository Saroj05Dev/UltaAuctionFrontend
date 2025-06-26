import React from "react";
import AuctionSvg from "../../assets/auctionsvg.svg";
import Layout from "../../layout/Layout";

function CreateAuctionPresentation({
  handleUserInput,
  handleFormSubmit,
  submitting,
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 px-4 py-6 max-w-screen-xl mx-auto">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 hidden md:flex justify-center">
        <img
          src={AuctionSvg}
          alt="Auction Image"
          className="w-full max-w-md h-auto"
        />
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 bg-white rounded shadow p-4 sm:p-6 md:p-8">
        <h2 className="text-xl sm:text-2xl text-center font-semibold mb-4">
          Create New Auction
        </h2>
        <form className="space-y-4" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Auction Title"
            onChange={handleUserInput}
            required
            className="w-full px-4 py-2 border rounded text-sm sm:text-base"
          />
          <textarea
            name="description"
            placeholder="Description"
            id="description"
            onChange={handleUserInput}
            required
            className="w-full px-4 py-2 border rounded text-sm sm:text-base"
          />
          <input
            type="number"
            name="startingBid"
            id="startingBid"
            placeholder="Starting Bid"
            onChange={handleUserInput}
            required
            className="w-full px-4 py-2 border rounded text-sm sm:text-base"
          />
          <input
            type="number"
            name="endingBid"
            id="endingBid"
            placeholder="Ending Bid"
            onChange={handleUserInput}
            required
            className="w-full px-4 py-2 border rounded text-sm sm:text-base"
          />
          <input
            type="datetime-local"
            name="endTime"
            id="endTime"
            onChange={handleUserInput}
            required
            className="w-full px-4 py-2 border rounded text-sm sm:text-base"
          />
          <input
            type="number"
            name="maxSlots"
            id="maxSlots"
            placeholder="Max Slots"
            onChange={handleUserInput}
            required
            className="w-full px-4 py-2 border rounded text-sm sm:text-base"
          />
          <input
            type="file"
            name="auctionImage"
            id="auctionImage"
            accept="image/*"
            onChange={handleUserInput}
            required
            className="w-full text-sm cursor-pointer"
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out text-sm sm:text-base"
          >
            {submitting ? "Creating..." : "Create Auction"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAuctionPresentation;
