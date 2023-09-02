import "./Blog.css"
import React from "react"
import BlogCard from "./BlogCard/BlogCard"
import { Input } from "antd";
const { Search } = Input;
const Blogs = () => {
  return (
    <div className="blogContainer">
      <div className="blogMain">
        <div className="blogHeader">
          <p>
            <span>Learn</span> <span>More</span>
          </p>
          <div className="blueDash"></div>
        </div>
        <Search placeholder="Best JavaScript Resources" allowClear class="blogSearchBar" style={{width:"500px",marginBottom:"30px"}} size="large" onSearch={""} enterButton />
        <div className="blogBody">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  )
}

export default Blogs
