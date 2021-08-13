import Comment from "../comment/Comment";

export default function Comments({itemS}) {
  return (
    <div>
        {
            itemS.map(value => <Comment key={value.id} iteM={value}/>)
        }
    </div>
  );
}