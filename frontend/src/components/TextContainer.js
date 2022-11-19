import React from 'react'
import { useLocation } from 'react-router-dom'


const levels=[{
    name:"UNDERSTOOD",
},
    {name:"SOMEWHAT UNDERSTOOD"},
    {name:"NOT CLEAR"},
    {name:"WHAT RUBBISH"
}]

const TextContainer = () => {
    const location = useLocation()
    const [description, setDescription] = React.useState('')
    const [checked, setChecked] = React.useState(false);
    const [status,setStatus] = React.useState()


    React.useEffect(() => {
        if (location.state.topicName)
            console.log(location.state.topicName)
    }, [])

    const handleChecked = (e)=>{
        console.log(typeof(e),e.name)
        setStatus(e.name)
    }

    const sendData = (name, description) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            topicName: name,
            description:description,
            status: status
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/feynman/topic-entry", requestOptions)
            .then(response => response.text())
            .then(result => {alert(result)})
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <div className='topic_description_Scope'>
                <div className='ds_parent_box'>
                    <div className='add_topic_container'>
                        <h3>Add Description</h3>
                        <div class="at_content">
                            <h4>{location.state.topicName ? location.state.topicName : "Null"}</h4>
                        </div>
                    </div>

                    <div className='all_topics_desc '>
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            <label for="floatingTextarea">Write Description</label>
                        </div>
                    </div>

                    <div className='level_set'>
                        <ul className='list-unstyled mt-3'>
                           {levels.map((details,i)=>{
                            return(
                                <>
                                <li><span>{details.name}  
                                <input type="checkbox"
                                value={checked}
                                onChange={() => setChecked(!checked)}
                                onClick={()=>handleChecked(details)}
                                /></span></li>
                                </>
                            )
                           })}
                        </ul>
                    </div>

                    <button className='btn btn-primary' onClick={() => sendData(location.state.topicName, description)}>Submit</button>

                </div>
            </div>
        </>
    )
}

export default TextContainer