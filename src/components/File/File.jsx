function File(props){
    const path = props.data.path
    const name = props.data.name
    const description = props.data.description
    const size = (props.data.width != null) ? props.data.width : "100%"
    return(
        <div className="file">
            <img src={"/"+path} alt={name} width={size} />
        </div>
    )
}

export default File;