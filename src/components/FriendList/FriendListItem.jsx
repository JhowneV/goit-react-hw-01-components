import css from './FriendListItem.module.css'; 

export const FriendListItem = ({ avatar, name, isOnLine }) => {
    return (
        <li className={css.friendListItem}>
            <span className={isOnLine ? css.online : css.offline}></span>
            <img src={avatar} alt="User avatar" width="48" className={css.avatar} />
            <p className={css.name}>{name}</p>
        </li>
    )
}