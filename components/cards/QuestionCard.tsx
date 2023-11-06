import Link from "next/link";
import React from "react";
import RenderTag from "../shared/RenderTag";
import Metric from "../shared/Metric";
import { formatedNumber, getTimestamp } from "@/lib/utils";

interface QuestionProps {
  _id: string;
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: QuestionProps) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <div className="mb-2 hidden gap-2 divide-x-2 max-md:flex max-sm:flex">
            <Metric
              imgUrl={author.picture}
              alt="User"
              value={author.name}
              title={` | asked ${getTimestamp(createdAt)}`}
              href={`/profile/${author._id}`}
              isAuthor
              textStyle="small-medium text-dark400_light800"
            />
            <span className="subtle-regular text-dark400_light700 line-clamp-1 flex px-2 lg:hidden">
              {getTimestamp(createdAt)}
            </span>
          </div>

          <Link href={`/question/${_id}`}>
            <h3 className="h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <>
            <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
          </>
        ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <div className="max-md:hidden max-sm:hidden ">
          <Metric
            imgUrl={author.picture}
            alt="User"
            value={author.name}
            title={` | asked ${getTimestamp(createdAt)}`}
            href={`/profile/${author._id}`}
            isAuthor
            textStyle="small-medium text-dark400_light800"
          />
        </div>
        <div className="flex items-center gap-3">
          <Metric
            imgUrl="/assets/icons/like.svg"
            alt="Upvotes"
            value={formatedNumber(upvotes)}
            title=" Votes"
            textStyle="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/message.svg"
            alt="Upvotes"
            value={formatedNumber(answers.length)}
            title=" Answers"
            textStyle="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/eye.svg"
            alt="Upvotes"
            value={formatedNumber(views)}
            title=" Views"
            textStyle="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
