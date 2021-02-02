import { useState } from "react";
import { Box, SearchField, IconButton } from "gestalt";
import SearchFilters from "./search-filters";

const Search = () => {
  const [value, setValue] = useState("");
  const [isPanelShown, setIsPanelShown] = useState(false);

  return (
    <>
      <Box display="flex" direction="row" alignItems="center">
        <Box flex="grow">
          <SearchField
            id="search"
            onChange={({value}) => setValue(value)}
            value={value}
            accessibilityLabel="Search term"
            placeholder="Search"
          />
        </Box>
        <Box marginLeft={2}>
          <IconButton
            icon="arrow-down"
            accessibilityLabel="Show filters"
            onClick={() => setIsPanelShown(shown => !shown)}
            />
        </Box>
      </Box>
      {isPanelShown && <SearchFilters />}
    </>
  )
};

export default Search;
