import { Action } from "./actions"
import { CompanyCard } from "./company-card"

export function TestimonialSection()
{
    const actions = [
        {
            id:1,
            text:'Checklist to Review an Academic Paper'
        },
        {
            id:2,
            text:'Peer Review Checklist'
        },
        {
            id:3,
            text:'Checklist for Editors, Reviewers, and Authors of SPIE Journals'
        }
    ]
    return(
        <section className="w-full max-w-7xl sora bg-[#FAFAF9] px-[72px] grid grid-cols-2 gap-8 h-screen">
            <div className="flex flex-col max-xl:h-fit md:pt-[163px] 2xl:pt-0 2xl:justify-center gap-5">
                <StarEmoji/>
                <h1 className="font-semibold text-4xl">Reviewers</h1>
                <p className="text-xl leading-8 text-[#52525A]">Reviewers is where people can access guidelines, checklists, and other tools to assist them in reviewing papers or manuscripts. It provides a structured approach to ensure that the review process is thorough, efficient, and consistent.</p>
                <ActionsArticle>
                    {actions.map((action) => {
                        return <Action key={action.id} message={action.text} ></Action>
                    })}
                </ActionsArticle>
            </div>

            <div className="flex flex-col max-xl:h-fit md:pt-[163px] 2xl:pt-0 2xl:justify-center gap-10">
                <div className="flex justify-end">
                    <CompanyCard 
                    rate={4}
                    image={'/google-testimonial.png'}
                    name={'Samantha Lee'}
                    body={`The checklist ensures that the review process is thorough`}/>
                </div>
                <div>
                    <CompanyCard 
                    rate={5}
                    image={'/meta-testimonial.png'}
                    name={'Rachel Patel'}
                    body={`I highly recommend the Writecream Business Description `}/>
                </div>
            </div>
        </section>
    )
}

function StarEmoji()
{
    return(
        <div className="w-[46px] h-[46px] rounded-full bg-[#F5C044] flex items-center justify-center">
            <img src="https://em-content.zobj.net/source/apple/96/white-medium-star_2b50.png" alt="" className="h-[22px]" />
        </div>
    )
}

function ActionsArticle({children})
{
    return(
        <div className="flex flex-col mt-4 gap-3">
            {children}
        </div>
    )
}