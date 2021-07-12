export default function Column (props){
    return <div>
        {
            props.list.filter(el => el.status === props.status).map(el => <li key={el.id}>{el.title}</li>)
        }
    </div>
}