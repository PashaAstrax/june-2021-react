export default function User({thisUser, postsFunction}) {
    return (
        <div>
            <h3>{thisUser.id}. {thisUser.name} {""}
            <button onClick={() => postsFunction(thisUser.id)}>posts
            </button></h3>
        </div>
    );
}