import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImage"
        src="https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">Post Title</span>
        <hr />
        <span className="postDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
          repellendus consectetur culpa perspiciatis ad nisi quasi laborum rem
          nam possimus suscipit quibusdam numquam quod dicta nihil, maiores et
          blanditiis qui! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Ut repellendus consectetur culpa perspiciatis ad nisi quasi
          laborum rem nam possimus suscipit quibusdam numquam quod dicta nihil,
          maiores et blanditiis qui! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Ut repellendus consectetur culpa perspiciatis ad
          nisi quasi laborum rem nam possimus suscipit quibusdam numquam quod
          dicta nihil, maiores et blanditiis qui! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Ut repellendus consectetur culpa
          perspiciatis ad nisi quasi laborum rem nam possimus suscipit quibusdam
          numquam quod dicta nihil, maiores et blanditiis qui!
        </span>
      </div>
    </div>
  );
}
