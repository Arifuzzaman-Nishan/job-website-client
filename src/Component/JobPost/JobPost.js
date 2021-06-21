import React, { useContext } from "react";
import { Card, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { postContext } from "../../App";

const JobPost = () => {
  const [postDetails, setPostDetails] = useContext(postContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { title, location, jobtype, category, description } = data;

    fetch("https://frozen-chamber-29591.herokuapp.com/jobPost", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: title,
        location: location,
        jobtype: jobtype,
        category: category,
        description: description,
        email: postDetails.email,
        status: "pending",
      }),
    })
    .then(res => res.json())
    .then(data => {
      if(data){
        alert('job post successfully');
      }
    })
  };

  return (
    <Container>
      <Card className="mx-auto mt-5 p-3" style={{ width: "23rem" }}>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control"
            placeholder="Enter job title"
            {...register("title", { required: true })}
          />
          {errors.title && <span>title field is required</span>}

          <input
            className="form-control"
            placeholder="Enter company Name and location"
            {...register("location", { required: true })}
          />
          {errors.location && <span>location field is required</span>}

          <input
            className="form-control"
            placeholder="Enter job type"
            {...register("jobtype", { required: true })}
          />
          {errors.jobtype && <span>jobtype field is required</span>}

          <input
            className="form-control"
            placeholder="Enter job category"
            {...register("category", { required: true })}
          />
          {errors.category && <span>jobtype field is required</span>}

          <textarea
            spellCheck="false"
            rows="5"
            className="form-control"
            placeholder="Enter job description"
            {...register("description", { required: true })}
          />
          {errors.description && <span>description field is required</span>}

          <br />
          <div className="d-flex justify-content-center">
            <input className="btn btn-danger" value="post job" type="submit" />
          </div>
        </form>
      </Card>
    </Container>
  );
};

export default JobPost;
