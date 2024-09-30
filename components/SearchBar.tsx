"use client";
import { url } from "inspector";
import { FormEvent, useState } from "react";

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon.") ||
      hostname.includes("amazon")
    )
      return true;
  } catch (error) {
    return false;
  }
};
const SearchBar = () => {
  const [searchPrompt, SetsearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValidlink = isValidAmazonProductURL(searchPrompt);
    if(!isValidlink) return alert('Please provide a valid amazon link');
    
    try {
      setIsLoading(true);
    } catch (error){
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  };
  return (
    <form className="flex flex-wrap gap-4 t-12" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter product link"
        className="searchbar-input"
        value={searchPrompt}
        onChange={(e) => SetsearchPrompt(e.target.value)}
      />
      <button type="submit" className="searchbar-btn" disabled={searchPrompt === ''}>
        {isLoading ? 'Searching...' : 'Search' }
      </button>
    </form>
  );
};

export default SearchBar;
