import React, { useEffect, useState } from 'react';
import ShowModal from './ShowModal';
import { useParams } from 'react-router-dom';

const GetDetails = () => {
    const { id } = useParams();
    console.log(id);
    const [data,setData] = useState(null);
    const [imageUrl,setImageUrl] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBookTicket = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect( ()=>{
        fetch(`https://api.tvmaze.com/shows/${id}`)
        .then((response)=>response.json())
        .then((data)=>{
            setData(data);
            setImageUrl(data.image?.medium);
            console.log(data.image);
        })
    },[id])

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Show Details</h1>
      <img src={imageUrl} ></img>
      <h2>{data?.name}</h2>
      <p>Show Summary: {data?.summary}</p>
      
      <button onClick={handleBookTicket}>Book Ticket</button>
      <ShowModal
        showName={data?.name}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default GetDetails;
