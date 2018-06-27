import React from 'react';
import axios from 'axios';
import './css.css'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {repoByStars: [],
                  repoByForks: [],
                org: ""};
    this.updateForkRepo = this.updateForkRepo.bind(this);
    this.updateStarRepo = this.updateStarRepo.bind(this);
    this.refreshApp = this.refreshApp.bind(this);
    this.setOrg = this.setOrg.bind(this)
  }

  updateForkRepo(repoArray) {
    this.setState(() => ({
      repoByForks: repoArray
    }));
  }

  updateStarRepo(repoArray) {
    this.setState(() => ({
      repoByStars: repoArray
    }));
  }

  setOrg(org) {
    this.setState(() => ({
      org: org
    }));
  }

  refreshApp(org) {

    // popular repo by stars
    axios.get(`https://api.github.com/search/repositories?q=user:${org}&sort=stars&order=desc`)
    .then(response =>
      this.updateStarRepo(response.data.items.slice(0, 10))
    );

  // popular repo by forks
      axios.get(`https://api.github.com/search/repositories?q=user:${org}&sort=forks&order=desc`)
      .then(response =>
        this.updateForkRepo(response.data.items.slice(0, 10))
      );
  }

  componentWillReceiveProps(nextProps) {
    const nextOrg = nextProps.location.pathname.slice(1);

    if (this.state.org !== nextOrg) {
      this.setOrg(nextOrg);
      this.refreshApp(nextOrg)
    }
  }



  componentDidMount() {

    const org = this.props.location.pathname.slice(1);

    this.setOrg(org);
    this.refreshApp(org)
  }

  render() {

    let capitalizedName;

    if (this.state.org) {
      capitalizedName = this.state.org[0].toUpperCase() + this.state.org.slice(1)
    } else {
      capitalizedName = ""
    }

    const popularByForks = this.state.repoByForks.map(repo => {
      return <tr key={repo.id}>
        <td><a href={repo.url}>{repo.name}</a></td>
      </tr>
    });

    const popularByStars = this.state.repoByStars.map(repo => {
      return <tr key={repo.id}>
        <td><a href={repo.url}>{repo.name}</a></td>
      </tr>
    });

    return (
      <div>
        <h1 className="header">{capitalizedName} GitHub Dashboard</h1>

        <div className="container">
          <h2 >Most Popular Repositories</h2>
            <div className="repositories">

                        <table >
                          <tbody>
                            <tr>
                              <th>By Forks</th>
                            </tr>

                            {popularByForks}

                        </tbody>
                        </table>


                        <table >
                          <tbody>
                            <tr>
                              <th>By Stars</th>
                            </tr>

                            {popularByStars}

                        </tbody>
                        </table>

            </div>
        </div>


      </div>
    )
    }
}

export default Dashboard
