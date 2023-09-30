import { StarIcon } from "./icons"

export function CompanyCard({rate = 2, image, name, body})
{
    return(
        <div className="bg-white card__shadow rounded-xl flex flex-col gap-5 max-w-[356px] px-10 py-7">
            <header className="flex gap-3">
                <img src={image} className="h-7" alt="" />
                <div className="flex">
                    <StarIcon fill={rate >= 1 ? '#F5C044' : '#D4D4D8'} perimeter={'25'} />
                    <StarIcon fill={rate >= 2 ? '#F5C044' : '#D4D4D8'} perimeter={'25'} />
                    <StarIcon fill={rate >= 3 ? '#F5C044' : '#D4D4D8'} perimeter={'25'} />
                    <StarIcon fill={rate >= 4 ? '#F5C044' : '#D4D4D8'} perimeter={'25'} />
                    <StarIcon fill={rate >= 5 ? '#F5C044' : '#D4D4D8'} perimeter={'25'} />
                </div>
            </header>
            <div>
                <span className="text-md font-bold">{name}</span>
                <p className="text-md text-[#52525A] mt-2 leading-7">{body}</p>
            </div>
        </div>
    )
}