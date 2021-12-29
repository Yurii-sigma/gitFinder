import { List } from "@material-ui/core";
import { useState} from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../../utils/dateFormat";
import { Find } from "../Find/Find";
import { StyledListItem } from "../UserList/UsersListStyles";

export const ReposSearch = () => {

    const repos = useSelector(state => state?.repos);
    const { reposList } = repos;
    const [filter, setFilter] = useState(''); 

    const tngCharacters = reposList?.filter(repo => {
        return repo.name.includes(filter);
    })

    return(
        <>
            <Find  value={filter} onSubmit={(value) => {setFilter(value)}}/>
            <div>
                  {filter === '' ?
                    reposList?.map(repo => (
                            <>
                              <List key={repo?.id}>
                                  <StyledListItem>
                                  <a
                                    href={repo?.html_url}
                                  >
                                    {repo?.name}
                                  </a> 
                                  <div>
                                      <p>Updated at: {formatDate(repo?.updated_at)}</p>
                                  </div>
                                  </StyledListItem>
                              </List>
                            </>
                    ))
                    :
                    <>
                    {
                        tngCharacters?.map(repo => (
                            <>
                              <List key={repo?.id}>
                                  <StyledListItem>
                                  <a
                                    href={repo?.html_url}
                                  >
                                    {repo?.name}
                                  </a>
                                  <div>
                                      <p>Updated at: {formatDate(repo?.updated_at)}</p>
                                  </div>
                                  </StyledListItem>
                              </List>
                            </>
                          )) 
                    }
                    </>
                }
                </div>
        </>
    )
}

export default ReposSearch;