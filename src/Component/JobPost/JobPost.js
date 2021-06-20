import React from "react";
import { Card, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const JobPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);


  return (
    <Container>
      <Card className='m-auto p-3' style={{width:'23rem'}}>
        <form className='' onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control"
            placeholder="Enter job title"
            {...register("title", { required: true })}
          />
          {errors.title && <span>title field is required</span>}

          <input
            className="form-control"
            placeholder="Enter company location"
            {...register("location", { required: true })}
          />
          {errors.location && <span>location field is required</span>}

          <textarea
            spellCheck="false"
            rows="5"
            className="form-control"
            placeholder="Enter job description"
            {...register("description", { required: true })}
          />
          {errors.description && <span>description field is required</span>}

          <input
            className="form-control"
            placeholder="Enter job type"
            {...register("jobtype", { required: true })}
          />
          {errors.jobtype && <span>jobtype field is required</span>}
          
            <br />
          <input className='btn btn-danger' value='post job' type="submit" />
        </form>
      </Card>
    </Container>
  );
};

export default JobPost;
