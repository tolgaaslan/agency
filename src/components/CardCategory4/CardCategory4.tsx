import React, { FC } from "react";
import { TwMainColor } from "@/data/types";
import Badge from "@/components/Badge/Badge";
import Link from "next/link";
import { CommonTermCardProps } from "../CardCategory1/CardCategory1";
import MyImage from "../MyImage";
import { getCatgoryDataFromCategoryFragment } from "@/utils/getCatgoryDataFromCategoryFragment";
import { getColorClass2 } from "@/utils/getColorClass";

export interface CardCategory4Props extends CommonTermCardProps {
  index?: string;
}

const CardCategory4: FC<CardCategory4Props> = ({
  className = "",
  term,
  index,
}) => {
  const { count, databaseId, name, uri, featuredImageMeta, colorMeta } =
    getCatgoryDataFromCategoryFragment(term);

  return (
    <Link href={uri} className={`nc-CardCategory4 flex flex-col ${className}`}>
      <div className="flex-shrink-0 relative w-full aspect-w-7 aspect-h-5 h-0 rounded-3xl overflow-hidden group ring-1 ring-offset-2 ring-white dark:ring-neutral-900">
        <MyImage
          alt={name}
          fill
          src={featuredImageMeta?.sourceUrl || ""}
          className="object-cover w-full h-full rounded-2xl"
          sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
        />
        <div>
          {index && (
            <Badge
              color={(colorMeta?.[0] as TwMainColor) || undefined}
              name={index}
              className="absolute top-3 start-3"
            />
          )}
        </div>
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
      </div>

      <div className="flex items-center mt-3 sm:mt-5">
        <div
          className={`flex-shrink-0 h-8 w-8 sm:w-9 sm:h-9 ${getColorClass2(
            colorMeta?.[0] as TwMainColor
          )} rounded-full`}
        ></div>
        <div className="ms-2 sm:ms-4">
          <h2 className="text-base text-neutral-900 dark:text-neutral-100 font-medium">
            <span className="line-clamp-1">{name}</span>
          </h2>
          <span className="block text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
            {count} Proje
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CardCategory4;
