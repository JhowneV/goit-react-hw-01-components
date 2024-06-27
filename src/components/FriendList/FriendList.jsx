import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({id, avatar, name, isOnLine}) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnLine={isOnLine}
                />
            ))}
        </ul>
    );
};
