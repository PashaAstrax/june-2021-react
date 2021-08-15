export default function User({thisUser, postsFunction}) {

    const postsDisplay = () => {
        postsFunction(thisUser.id)
    }

    return (
        <div>
            <h3>{thisUser.id}. {thisUser.name} {""}
            <button onClick={postsDisplay}>posts</button></h3>
        </div>
    );
}