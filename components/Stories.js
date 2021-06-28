import StoryCard from "./StoryCard"


const stories = [
 {name : "Mohammad Rayhan",
 src:"https://links.papareact.com/4u4",
 profile:"https://links.papareact.com/zvy",
 },
 {name : "Ahmed Hridoy",
 src:"https://links.papareact.com/4zn",
 profile:"https://links.papareact.com/kxk"
 },
 {name : "Hasanuzzaman Rafin",
 src:"https://links.papareact.com/k2j",
 profile:"https://links.papareact.com/f0p"
 },
 {name : "Tahjid Bin Amin",
 src:"https://links.papareact.com/xql",
 profile:"https://links.papareact.com/snf"
 },
 {name : "Pujan Ashish Mohanta",
 src:"https://links.papareact.com/4u4",
 profile:"https://links.papareact.com/zvy"
 },
]

function Stories() {
 return (
  <div className="flex justify-center space-x-3 mx-auto">
   {stories.map((story)=>(
    <StoryCard 
    name={story.name} 
    key={story.src}
    src={story.src} 
    profile={story.profile}/>
   ))}
  </div>
 )
}

export default Stories
