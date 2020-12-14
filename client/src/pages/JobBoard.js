import React, { Component } from "react";
import { JobList } from "../components/JobList";
import { loadJobs } from "../utils/requests";

export class JobBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [] };
  }

  async componentDidMount() {
    const jobs = await loadJobs();
    this.setState({ jobs });
  }

  render() {
    const { jobs } = this.state;
    return (
      <div>
        <h1 className="title board-title">Job Board</h1>
        <JobList jobs={jobs} />
      </div>
    );
  }
}
