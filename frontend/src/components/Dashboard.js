import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {

    const navigate = useNavigate()
    const [topicName,setTopicName]=useState("")
    const [allTopics,setAllTopics]= useState()

    const handleTextContent=()=>{
        navigate("/topic-desc",{state : {topicName:topicName}})
    }

    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:5000/feynman/all-entry", requestOptions)
            .then(response => response.text())
            .then(result =>{ console.log(JSON.parse(result))
                setAllTopics(JSON.parse(result))
            })
            .catch(error => console.log('error', error));
    },[])

    return (
        <>
            <div className='dashboard_scope'>
                <div className='ds_parent_box'>
                    <div className='add_topic_container'>
                        <h4>Add Topic</h4>
                    <div class="at_content d-flex gap-4">
                        <input type="text" value={topicName} onChange={(e)=>setTopicName(e.target.value)} class="form-control input_label" placeholder='Enter topic name'/>
                        <button className='btn btn-primary' onClick={()=>handleTextContent()}>Add</button>
                    </div>
                    </div>

                    <div className='all_topics_container '>
                        <h4>All topics</h4>
                        <ol className='at_ol'>
                            {allTopics?.map((data,i)=>{
                                return(
                                <li className='at_li' key={i}><span className='li_text_content d-flex gap-3'>{data.topicName}<span>{data.status}</span></span></li>
                                )
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard