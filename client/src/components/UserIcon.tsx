
interface UserIconProps {
    userId: string
}

export const UserIcon: React.FC<UserIconProps> = (props) => {
    const {userId} = props;
    
    // to do: need to withdraw image from supabase according to userID
    const imageSource = "https://source.unsplash.com/random";

    return (
        <>
            <img src={imageSource}></img>
        </>
    )
}