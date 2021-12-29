import {useEffect} from "react";
import {
    fetchProfileAction, 
    fetchReposAction
  } from "../../redux/slices/reposSlice";
import { useDispatch, useSelector } from "react-redux";
import ReposSearch from "../ReposSearch/ReposSearch";

export const Details = ({selectedUser}) => {
    const repos = useSelector(state => state?.repos);
    const { profile } = repos;
    const dispatch = useDispatch();
    useEffect(() => {  
        if(!!selectedUser) {  
            dispatch(fetchProfileAction(selectedUser));
            dispatch(fetchReposAction(selectedUser));
        }
    },[selectedUser])

 
    return(
        <div className="details">

            {profile ? <div>
                <div>
              <div>
                <div>
                  <div>
                    <div>
                      <img
                        src={profile?.avatar_url}
                        alt=""
                      />
                    </div>
                    <div>
                      <h4>
                        Name:{" "}
                        <span>
                          {profile.name} {profile.login}
                        </span>
                      </h4>
                      <h4>
                        Bio: <span>{profile.bio}</span>
                      </h4>
                      <h4>
                        Company: <span>{profile.company}</span>
                      </h4>
                      <h4>
                        Location: <span>{profile.location}</span>
                      </h4>
                      <h4>
                        Followers: <span>{profile?.followers}</span>
                      </h4>
                      <h4>
                        Following: <span>{profile?.following}</span>
                      </h4>
                      <h4>
                        Repositories:{" "}
                        <span>
                          {profile?.public_repos
                            ? profile?.public_repos
                            : "N/A"}
                        </span>
                      </h4>
                      <h4>
                        Gists:{" "}
                        <span>
                          {profile?.public_gists
                            ? profile?.public_gists
                            : "N/A"}
                        </span>
                      </h4>
                      <div>
                        <a
                          target="_blank"
                          href={profile?.html_url}
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <ReposSearch />


              </div>
            </div>
            
            </div> : <div><h1>Details</h1>
            <img src="https://joshmccarty.com/wp-content/uploads/2016/11/gwindows_logo.png" />
            </div>
            }
        </div>
    )
}