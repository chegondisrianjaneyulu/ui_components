
export default function SideItems(props){
    const {itemDetails} = props
    const {name} = itemDetails
    return (
    <li className="hover:bg-gray-800 pl-2.5 pt-2.5 pb-2  hover:text-white hover:font-bold hover:shadow">{name}
    </li>
    )
}
