import React, { useState } from "react";
import PostCreationStyles from "../../../styles/ClientPostCreation.module.css"; 
import { BsEmojiSmile } from "react-icons/bs";
import { IoImageSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import PostContentImage from '../../../images/post/PostContentSecondImage.jpeg'

const ClientPostCreation = () => {
  const navigateToTheClientDashboard = useNavigate();
  const clientLocation = useLocation();
  const [postFormData, setPostFormData] = useState({
    postId: 0,
    postTitle: "",
    postDescription: "",
    customerId: 0,
  });

  const token = "";
  const handlePostCreationChange = (event) => {
    const { name, value } = event.target;
    setPostFormData({ ...postFormData, [name]: value });
  };
  const handlePostCreationSubmit = async (event) => {
    event.preventDefault();
    console.log(postFormData);

    try {
      const postCreationResponseData = await fetch(
        "http://localhost:8081/createPost",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(postFormData),
        }
      );
      if (postCreationResponseData.ok) {
        const postCreationData = await postCreationResponseData.json();
        console.log("Post created successfully", postCreationData);
        toast.success("Post created successfully", {
          onClose: () => navigateToTheClientDashboard("/clientdashboard"),
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.log(error);
      alert("Error creating post", error);
    }
  };
  return (
    <>
      <div className={PostCreationStyles.container}>
        <div className={PostCreationStyles.leftContainer}>
          <h1 className={PostCreationStyles.headerTitle}>
            Create a New Post
          </h1>
          <form
            onSubmit={handlePostCreationSubmit}
            className={PostCreationStyles.form}
          >
            <div className={PostCreationStyles.inputGroup}>
              <input
                type="text"
                name="postTitle"
                placeholder="Enter post title"
                value={postFormData.postTitle}
                onChange={handlePostCreationChange}
                className={PostCreationStyles.input}
              />
              <div className={PostCreationStyles.iconGroup}>
                <BsEmojiSmile className={PostCreationStyles.icon} />
                <IoImageSharp className={PostCreationStyles.icon} />
              </div>
            </div>
            <textarea
              name="postDescription"
              placeholder="Write your post description here..."
              value={postFormData.postDescription}
              onChange={handlePostCreationChange}
              className={PostCreationStyles.textarea}
            />
            <button
              className={PostCreationStyles.submitButton}
              type="submit"
            >
              Post
            </button>
          </form>
        </div>
        <div className={PostCreationStyles.rightContainer}>
          <img
          // PostContentImage
            src={``}
            alt="Post preview"
            className={PostCreationStyles.imagePreview}
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ClientPostCreation;
