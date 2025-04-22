"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { formatDate } from "@/lib/formatters";
import { jobs } from "@/lib/fake-data";

const JobPage = () => {
  const { jobId } = useParams();

  const job = jobs.find((job) => job.id === jobId);
  return (
    <div>
      <h1 className="title is-2">{job?.title}</h1>
      <h2 className="subtitle is-4">
        <Link href={`/companies/${job?.company.id}`}>{job?.company.name}</Link>
      </h2>
      <div className="box">
        <div className="block has-text-grey">Posted: {formatDate(job?.date || "", "long")}</div>
        <p className="block">{job?.description}</p>
      </div>
    </div>
  );
};

export default JobPage;
