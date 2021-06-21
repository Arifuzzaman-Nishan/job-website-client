import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const JobApply = () => {

    const history = useHistory();

    console.log(history.location.pathname);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm();

    const onSubmit  = (data) => {
        fetch('https://frozen-chamber-29591.herokuapp.com/applyjob',{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('successfully apply the job');
                reset();
            }
        })
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}className='m-auto' style={{width:"23rem"}} action="">
                <input required {...register("name", { required: true })} className='form-control' type="text" placeholder='enter your name' />

                <input required {...register("skill", { required: true })} className='form-control' type="text" placeholder='enter your skill' />

                <textarea required {...register("description", { required: true })} className='form-control' spellCheck='false' rows ='5' placeholder='why are you perfect for this positon?'></textarea>

                <input className='btn btn-danger' type="submit" />
            </form>
        </Container>
    );
};

export default JobApply;