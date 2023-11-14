import Metric from "@/components/shared/Metric";
import ParseHTML from "@/components/shared/ParseHTML";
import { getQuestionById } from "@/lib/actions/question.action";
import { formatedNumber, getTimestamp } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async ({ params, searchParams }: any) => {
  const result = await getQuestionById({ questionId: params.id });
  console.log("OAKWOAKOWAKOKAO", result);
  return (
    <>
      <div className="flex-start w-full flex-col">
        <div className="flex w-full flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
          <Link
            href={`/profile/${result.author._id}`}
            className="flex items-center justify-start gap-2"
          >
            <Image
              src={result.author.picture}
              alt="Author Profile Picture"
              width={22}
              height={22}
              className="rounded-full border-[1px] border-gray-500 drop-shadow-md"
            />
            <p className="paragraph-semibold ">{result.author.name}</p>
          </Link>
          <div className="flex justify-end">VOTING</div>
        </div>
        <h2 className="h2-semibold text-dark200_light900 mt-3.5 w-full text-left">
          {result.title}
        </h2>
      </div>
      <div className="mb-8 mt-5 flex flex-wrap gap-4">
        <Metric
          imgUrl="/assets/icons/clock.svg"
          alt="clock icon"
          value={` ${getTimestamp(result.createdAt)}`}
          title=" Asked"
          textStyle="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="message"
          value={formatedNumber(result.answers.length)}
          title=" Answers"
          textStyle="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="Upvotes"
          value={formatedNumber(result.views)}
          title=" Views"
          textStyle="small-medium text-dark400_light800"
        />
      </div>
      <ParseHTML data={result.content} />
    </>
  );
};

export default Page;
