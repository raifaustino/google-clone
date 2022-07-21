import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import Search from "./Search";
import useGoogleSearch from "../useGoogleSearch";
import response from "../response";
import Person from "@mui/icons-material/Person";

import { Link } from "react-router-dom";
import SearchOption from "../components/SearchOption";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  //LIVE API CALL
  const { data } = useGoogleSearch(term);

  //mock api call
  // const data = response;

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="img"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
        </div>
      </div>

      <div className="searchPage__options">
        <div className="searchPage__optionsLeft">
          <SearchOption
            img="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png"
            path="All"
          />
          <SearchOption
            img="data:image/png;base64,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"
            path="News"
          />
          <SearchOption
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png"
            path="Images"
          />
          <SearchOption
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Font_Awesome_5_solid_shopping-cart.svg/1024px-Font_Awesome_5_solid_shopping-cart.svg.png?20180810220212"
            path="Shopping"
          />
          <SearchOption
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Map_pin_icon.svg/352px-Map_pin_icon.svg.png"
            path="Maps"
          />
          <SearchOption img="" path="More" />
        </div>

        <div className="searchPage__optionsRight">
          <SearchOption path="Settings" />
          <SearchOption path="Tools" />
        </div>
      </div>

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCounter">
            About {data?.searchInformation.formattedTotalResults} results in{" "}
            {data?.searchInformation.formattedSearchTime} seconds for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0].src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap?.cse_image[0].src}
                      alt=""
                    />
                  )}

                {item.displayLink}
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>

              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
