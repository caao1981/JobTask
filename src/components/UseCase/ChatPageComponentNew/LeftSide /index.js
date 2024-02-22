"react";
import BoxComponent from "../../../Base/BoxComponent";
import SearchBarComponent from "../../../Advance/SearchBar";
import UsersList from "./UsersList";
import StackComponent from "../../../Base/StackComponent";
import ConversationItem from "../../../Advance/ConversationItem";
import { useSearch } from "../../../../hooks";

const LeftSide = ({ width, grow, chats, onSelectConversation }) => {
  // const [searchVal, setSearchVal] = useState("");
  const { searchTerm, setSearchTerm, searchResults } = useSearch(
    chats,
    ["name", "role"],
    false
  );
  return (
    <StackComponent
      direction="column"
      sx={{
        gap: "40px",
        // flexGrow: grow,
        width,
        padding: "50px",
        boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.1)",
      }}
    >
      <BoxComponent>
        <SearchBarComponent
          placeholder="Search message"
          searchVal={searchTerm}
          setSearchVal={setSearchTerm}
          fullWidth
        />
      </BoxComponent>
      <StackComponent sx={{ overflowY: "auto" }} direction="column">
        {searchResults.length > 0 ? (
          searchResults.map((eachConversation) => {
            return (
              <ConversationItem
                key={eachConversation.id}
                avatar={eachConversation.img}
                alt={eachConversation.name?.toLowerCase()}
                id={eachConversation.id}
                date={eachConversation.lastMessage}
                unread={eachConversation.unread}
                title={eachConversation.name}
                subtitle={eachConversation.role}
                onClickConversation={onSelectConversation}
              />
            );
          })
        ) : (
          <>No Conversations Found!</>
        )}
      </StackComponent>
    </StackComponent>
  );
};

export default LeftSide;
