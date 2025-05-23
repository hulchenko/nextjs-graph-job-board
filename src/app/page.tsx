import JobList from "@/components/JobList";
import { jobs } from "@/lib/fake-data";

const Home = () => {
  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
};

export default Home;
