import pattern from "../images/pattern.svg";
import img1 from "../images/post.jpeg";
import img2 from "../images/post_2.jpg";
import img3 from "../images/post_3.jpg";
import {v4 as uuidv4} from "uuid";

const Post  = () => {
  const ourComments = [
    {
      title:'Karakalpakstan',
      description:'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu',
      img:img1
    },
    {
      title:'Karakalpakstan',
      description:'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu',
      img:img2
    },
    {
      title:'Karakalpakstan',
      description:'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu',
      img:img3
    }
  ];

  return (
    <div className="font-abc">
      <div className="container">
        <div className="flex items-center justify-center gap-7 pt-custom-top-10">
          <div className="border-[1px] border-secondary-9 w-custom-width-4"></div>
          <img src={pattern}/>
          <div className="text-black text-center font-semibold text-3xl">Post</div>
          <img src={pattern}/>
          <div className="border-[1px] border-secondary-9 w-custom-width-4"></div>
        </div>
        <div className="text-black text-center pt-custom-top-8 font-light text-custom-size-45">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu </div>
        <div className="pt-custom-top-10 text-center text-custom-size-45 w-custom-width-7 m-auto pb-custom-top-8">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu
        </div>
        {
          ourComments.map((comment, index) => (
            <div key={uuidv4()} className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <img src={comment.img} width={654} height={285} alt={comment.title} layout="responsive" />
              </div>
              <div className="w-full md:w-1/2 flex items-center">
                <div className="m-4 text-center">
                  <h3 className="text-xl font-semibold">{comment.title}</h3>
                  <p>{comment.description}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Post