import { DoneRing } from "./icons"

export function Action({message})
{
    return(
        <span className="flex items-center gap-3">
            <DoneRing perimeter={'25'}/>
            <span className="text-sm text-[#52525A]">{message}</span>
        </span>
    )
}